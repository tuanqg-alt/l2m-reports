---
name: ai-localization-pipeline
description: >
  Quy trình dịch nội dung game từ tiếng Anh (EN) sang Việt/Thái/Indonesia (VI/TH/ID) —
  update note, patch note, event, bảng item/reward, system guide — bằng AI có kiểm soát
  chất lượng: 8 giai đoạn Preflight → AI dịch nháp A (glossary-first, dịch thẳng EN sang
  đúng 1 ngôn ngữ đích, không pivot qua ngôn ngữ khác) → AI Technical QA (kèm automated
  QA gate: terminology/placeholder/data checker) → AI Controlled Style Audit A+ → AI
  Final QA Gate (kèm automated final gate: consistency + UI-length checker) → Human
  Review → Final → Feedback loop cập nhật lại glossary/style guide/Translation Memory.
  Đóng kèm checklist từng giai đoạn, hệ thống severity P0-P3, style guide riêng cho từng
  ngôn ngữ đích (VI đầy đủ; TH/ID production-ready cho pilot — cần native reviewer xác
  nhận sau batch đầu), 10 mẫu prompt tái sử dụng (preflight, dịch A, QA A, style audit A+,
  QA cuối, feedback, TM reuse preflight, automated terminology QA, automated
  placeholder/data/consistency/UI-length QA, post-final governance update), Translation
  Memory / approved-segment reuse để không dịch lại câu đã duyệt, master glossary
  governance (status/
  confidence/owner/evidence/version cho từng term), context metadata + UI length
  validation (tránh vỡ layout buttons/menu/table header ở TH/ID/VI), và pilot metrics log
  để đo chất lượng + hiệu quả qua từng batch. Bảng glossary mẫu đã khớp đúng cấu trúc cột
  thật đang dùng trong workspace (kr/vn/th/id/en). LUÔN dùng khi: cần dịch 1 file update
  note/patch note/event game sang tiếng Việt, Thái, hoặc Indonesia bằng AI và muốn có QA
  bài bản thay vì dịch tự do 1 lần; cần checklist/severity để soát lỗi bản dịch (số liệu,
  ngày giờ, tên item/skill/boss, bảng reward, placeholder); cần mẫu prompt cho AI dịch/QA/
  audit văn phong đa ngôn ngữ; cần tái sử dụng câu đã duyệt (Translation Memory) hoặc audit
  tự động terminology/placeholder/consistency/UI-length trước khi giao human review; hoặc
  khi nghe "dịch giúp mình file này sang tiếng Thái/Indo/Việt qua AI rồi kiểm tra kỹ trước
  khi gửi team review". Skill này KHÔNG tự chứa dữ liệu thuật ngữ — PHẢI dùng kèm skill
  "localization-glossary" (cài cả 2) để tra LOCKED/PREFERRED term khi chạy Stage 1-2.
  KHÔNG dùng skill này một mình để tra nghĩa 1 thuật ngữ đơn lẻ — việc đó dùng riêng skill
  "localization-glossary".
---

# AI Localization Pipeline — Quy trình dịch + QA game bằng AI có kiểm soát (EN→VI/TH/ID)

> **Nội dung đầy đủ:** `reference/ai_localization_pipeline_full-guide.md` (đóng kèm trong gói này, ~3.570 dòng — nguồn: SOP đa ngôn ngữ v2.1.0).
> **Phạm vi:** quy trình + checklist + style guide (VI/TH/ID) + prompt pack — không phải bảng tra thuật ngữ (xem skill `localization-glossary` cho việc đó).
> **Áp dụng cho:** update note, patch note, event notice, bảng item/reward, system guide, hoặc bất kỳ tài liệu live-ops game nào có nhiều thuật ngữ lặp lại + rủi ro cao về số liệu — dịch thẳng từ EN sang đúng 1 trong 3 ngôn ngữ đích: Việt (VI), Thái (TH), Indonesia (ID).

---

## ⚠️ Yêu cầu bắt buộc — đọc trước khi cài

**Skill này KHÔNG tự chứa dữ liệu thuật ngữ.** Phải cài/đính kèm thêm skill **`localization-glossary`** (cùng Hub, cùng Area 03 Glossary & Termbase) thì mới tra được term LOCKED/PREFERRED khi chạy Stage 1-2. Thiếu nó, AI sẽ phải tự đoán thuật ngữ hoặc dừng lại hỏi bạn liên tục giữa chừng — chất lượng bản dịch sẽ không đúng như thiết kế của pipeline này. **Luôn tải và cài CẢ HAI skill cùng lúc.**

---

## ⚠️ Quy tắc vàng (đọc trước khi dùng)

1. **Đây là quy trình có kiểm soát, KHÔNG phải "dịch rồi polish tự do".** AI được dùng như lớp pre-localization + pre-QA + pre-editing — người review vẫn luôn là người chốt final.
2. **KHÔNG cần đọc hết file reference mỗi lần.** File dài — dùng "Mục lục nhanh" bên dưới để nhảy thẳng vào phần cần dùng theo tình huống thực tế.
3. **Rule quan trọng nhất của cả pipeline:**
   > AI được phép làm bản dịch tốt hơn, nhưng không được làm bản dịch "tự tin hơn trong khi sai hơn". Mọi thứ không chắc phải được flag để human chốt.
4. Mọi chỗ AI không chắc → dùng marker chuẩn (`[MISSING_GLOSSARY]`, `[GLOSSARY_CONFLICT]`, `[DATA_RISK]`, `[SOURCE_CHECK]`, `[INGAME_CHECK]`, `[TABLE_RISK]`, `[PLACEHOLDER_CHECK]`, `[CONTEXT_MISSING]`, `[UI_LENGTH_RISK]`, `[TM_CONFLICT]`, `[CONSISTENCY_RISK]`, `[AUTO_QA_BLOCK]`...) — không tự đoán rồi trình bày như chắc chắn.
5. **Chọn đúng 1 ngôn ngữ đích cho mỗi batch, dịch thẳng từ EN — không pivot qua ngôn ngữ khác** (vd không dịch EN→VI rồi VI→TH). Bản dịch ngôn ngữ khác chỉ được dùng để tham khảo, không phải nguồn sự thật.
6. **Từ v2.1.0: Translation Memory (câu đã duyệt) KHÔNG BAO GIỜ được ghi đè lên glossary LOCKED/INGAME_LOCKED hoặc source data hiện tại.** TM chỉ tái sử dụng khi context khớp; conflict phải flag `[TM_CONFLICT]`, không tự động áp dụng. Automated QA gate (terminology/placeholder/consistency/UI-length) chỉ là lớp kiểm tra máy hỗ trợ thêm — KHÔNG thay thế human review.

---

## Bản đồ quy trình (8 giai đoạn)

| # | Giai đoạn | AI làm gì | Output |
|---|---|---|---|
| 0 | Setup | Xác định scope/ngôn ngữ đích/input/output/deadline | `project_brief.md` |
| 1 | Preflight | Rà soát rủi ro source + glossary trước khi dịch | `preflight_report.md`, `risk_register.md` |
| 2 | AI Draft A | Dịch thẳng EN→ngôn ngữ đích, bám glossary, giữ data/layout, flag chỗ không chắc | bản A + exception list |
| 3 | A Technical QA | Bắt lỗi cơ học (số/ngày/glossary/bảng/placeholder/typo) trước khi polish + **Automated QA Gate (Mục 13A): terminology/placeholder/data checker chạy máy trước khi polish** | QA report P0-P3 + automated QA report |
| 4 | A+ Controlled Style Audit | Chỉnh văn phong tự nhiên hơn theo style guide của ngôn ngữ đích — KHÔNG đổi số liệu/glossary | bản A+ |
| 5 | A+ Final QA Gate | So A vs A+, bắt term drift/data drift/mất bảng/placeholder drift + **Automated Final QA Gate (Mục 15A): consistency checker + UI-length checker chạy máy trước khi giao human review** | Gate Pass/Fail + handoff note + automated QA summary |
| 6 | Human Review | Reviewer tập trung theo exception, không đọc lại từ đầu | bản đã duyệt |
| 7 | Finalization | Dọn sạch marker/comment, sign-off, publish | bản `FINAL` |
| 8 | Feedback loop | Rút kinh nghiệm từ sửa của reviewer → cập nhật glossary/style guide/prompt/Translation Memory/pilot metrics | các file update log |

---

## Mục lục nhanh — cần gì, đọc phần nào trong file reference

| Bạn cần... | Đọc phần |
|---|---|
| Nguyên tắc cốt lõi, ngôn ngữ hỗ trợ, việc AI được/không được làm | Mục 1-2 (đầu file) |
| Cấu hình 1 batch dịch (config YAML mẫu + checklist validate trước khi chạy) | Mục 3 |
| Chuẩn bị input (source/glossary/style guide/reference/in-game) + **v2.1.0: Translation Memory (Mục 4.7), master glossary governance (Mục 4.8), context metadata + UI length rules (Mục 4.9), automation assets cho pilot (Mục 4.10)** | Mục 4 (4.1-4.10) |
| Folder structure + naming convention cho 1 batch dịch | Mục 5-6 |
| Vai trò & RACI (ai chịu trách nhiệm việc gì) | Mục 7 |
| Hệ thống mức độ lỗi P0-P3 + marker chuẩn + khóa placeholder/tag + **automated QA gate policy (TM/terminology/placeholder/data/consistency/UI-length checker, Mục 9B)** | Mục 8-9A, 9B |
| Chi tiết từng giai đoạn Stage 0-8 (checklist đầy đủ) — **Stage 3 có thêm Automated QA Gate (Mục 13A), Stage 5 có thêm Automated Final QA Gate (Mục 15A)** | PHẦN A (mục 10-18, 13A, 15A) |
| Quy tắc glossary đa ngôn ngữ (lookup KR/VN/TH/ID/EN, priority, forbidden/missing term) + master glossary update rules (23A) + Translation Memory update rules (23B) | PHẦN B (mục 19-23, 23A, 23B) |
| Style guide theo ngôn ngữ đích: VI (đầy đủ) / TH (production-ready cho pilot) / ID (production-ready cho pilot) — kèm UI length + forbidden-wording watchlist + before/after example bank cho TH/ID | PHẦN C (mục 24-27) |
| Output contract + mẫu report (exception, QA columns, term conflict, style decision, automated QA summary, pilot metrics log) | PHẦN D (mục 28-32, 30A, 30B) |
| **10 mẫu prompt sẵn dùng** (preflight/dịch A/QA A/audit A+/QA cuối/feedback/TM reuse preflight/automated terminology QA/automated placeholder-data-consistency-UI length QA/post-final governance update) | PHẦN E (mục 33-38, 38A-38D) |
| Metrics đo chất lượng + hiệu quả + feedback pipeline + pilot stop/go threshold (Mục 42A) | PHẦN F (mục 39-42, 42A) |
| Definition of Done cho A / A+ / Final | PHẦN G (mục 43-45) |
| Runbook chạy nhanh — copy cho từng batch dịch mới | PHẦN H |
| Checklist ngắn cho reviewer khi nhận bản A+ | PHẦN I |
| Áp dụng thực tế: file ngắn vs file dài (nhiều bảng reward) vs batch nhiều file | PHẦN J (mục 46-48) |
| Lỗi thường gặp (glossary drift, sai số/ngày, mất bảng, TM không được tái sử dụng, UI text vỡ layout, automated QA nhiễu...) + cách phòng | PHẦN K (mục 49-54, 54A-54C) |
| Mẫu note gửi team khi handoff | PHẦN L |
| Bảo trì SOP sau mỗi 3-5 batch + change log gốc (1.0→2.0→2.0.1→2.1.0) | PHẦN M (mục 55-58) |

---

## Tóm tắt 1 trang (đọc nhanh nếu chưa có thời gian đọc hết)

1. Xác định game/nội dung + **ngôn ngữ đích (VI, TH, hoặc ID — chọn đúng 1)** + chuẩn bị source + glossary (kèm master glossary governance) + style guide + reference + Translation Memory (nếu có Final cũ để tái sử dụng).
2. Preflight: tìm rủi ro source/glossary/data/table + kiểm tra TM match (exact/fuzzy) + context metadata/UI length nếu là batch UI/CMS.
3. AI dịch bản A **thẳng từ EN sang ngôn ngữ đích đã chọn** (không pivot), bám glossary, tái sử dụng TM đã duyệt khi context khớp, giữ data/layout, flag chỗ không chắc.
4. QA kỹ thuật bản A: number/date/term/table/placeholder/comment/typo + **Automated QA Gate** (terminology/placeholder/data checker chạy máy).
5. AI audit văn phong có kiểm soát để ra A+ (theo style guide riêng của ngôn ngữ đích).
6. QA lại A+: bắt term drift/data drift/table drift/placeholder drift + **Automated Final QA Gate** (consistency checker + UI-length checker).
7. Gửi team A+ kèm exception report + automated QA summary.
8. Team review P0/P1, in-game, term conflict, reward/promotion.
9. Clean final, sign-off, publish.
10. Extract feedback từ Final để update glossary/style guide/prompt/Translation Memory/pilot metrics.

---

## Dùng chung với skill Glossary (bắt buộc, không phải tùy chọn)

Pipeline này DÙNG glossary làm input (Stage 1-2 cần glossary `LOCKED`/`INGAME_LOCKED`/`PREFERRED` terms) nhưng **không tự chứa dữ liệu term**. Đây là lý do phải cài kèm skill **`localization-glossary`** — dùng nó để tra hoặc xác nhận 1 thuật ngữ KR↔VN/EN/TH/ID cụ thể trong lúc chạy pipeline (VD: Stage 2 dịch A, hoặc bắt `[MISSING_GLOSSARY]`). Dữ liệu = `glossary_multilang.csv`, cột `category, kr, vn, vn_origin, th, th_match, id, id_match, en, en_match, string_id`.

**Từ v2.0, bảng glossary mẫu của pipeline này (`source_term/target_term/status/confidence`) đã khớp đúng theo cấu trúc cột thật ở trên** — không còn lệch schema như bản v1.0 (bản cũ dùng schema generic `source_term/target_term/status` một chiều, không có ví dụ map cột thật). Vì `glossary_multilang.csv` KHÔNG có sẵn cột `status`, AI Operator phải tự suy ra `status` + `confidence` cho batch glossary của từng batch dựa theo bằng chứng: `en_match=nc_tb` → `PREFERRED` 85-95 · có xác nhận in-game → `INGAME_LOCKED` 100 · cột target rỗng → `MISSING` (đề xuất kèm marker, không mặc định coi là chính thức) · `vn_origin=nc-recovered` hoặc nguồn không rõ → `REVIEW`. Chi tiết đầy đủ ở Mục 4.2 trong file reference.

**Vì sao KHÔNG gộp 2 skill làm 1:** glossary ~2.7MB và được cập nhật thường xuyên (batch mới, sửa lỗi term). Gộp chung sẽ phải rebuild + đồng bộ 2 bản mỗi lần glossary đổi, dễ lệch (1 bản mới, 1 bản cũ). Tách riêng giữ glossary có đúng 1 nguồn — pipeline nào cũng tra được bản mới nhất.

---

## Changelog

| Ngày | Version | Thay đổi |
|------|---------|----------|
| 2026-07-06 | 2.2 | Nâng cấp theo nguồn `ai_game_localization_SOP_multilang_v2.1.0.md` (TuanQG cung cấp, production pilot upgrade). Thêm **Translation Memory / tái sử dụng câu đã duyệt** (Mục 4.7, marker `[TM_CONFLICT]`); **master glossary governance** với status/confidence/owner/evidence/version cho từng term (Mục 4.8, 23A); **context metadata + UI length validation** để tránh vỡ layout button/menu/table header ở TH/ID/VI (Mục 4.9, marker `[CONTEXT_MISSING]`/`[UI_LENGTH_RISK]`); **automated QA gate** cho terminology/placeholder/data/consistency/UI-length (Mục 9B chính sách chung, 13A gate cho Draft A, 15A gate final cho A+, marker `[AUTO_QA_BLOCK]`/`[CONSISTENCY_RISK]`); nâng từ 6 lên **10 mẫu prompt** (thêm TM reuse preflight, automated terminology QA, automated placeholder/data/consistency/UI-length QA, và post-final governance update — Mục 38A-38D); thêm **pilot metrics log** + pilot stop/go threshold (Mục 30B, 42A) để đo chất lượng/hiệu quả qua từng batch; nâng style guide TH/ID từ "khởi điểm" lên "production-ready cho pilot" kèm UI-length + forbidden-wording watchlist + before/after example bank riêng (Mục 26.6-26.8, 27.6-27.8). Cập nhật frontmatter description + Mục lục nhanh + 8 giai đoạn (Stage 3/5 thêm automated gate sub-step) + Tóm tắt 1 trang + thêm 1 golden rule mới về TM không được ghi đè LOCKED/source data. Bản `v2.0.1` gốc lưu tại `reference/_archive/ai_localization_pipeline_full-guide_v2.0.1_2026-07-06.md`. |
| 2026-07-05 | 2.1 | Làm rõ yêu cầu bắt buộc phải cài kèm skill `localization-glossary` (trước đây chỉ ghi ở "notes" cuối trang, dễ bỏ sót): thêm mục "⚠️ Yêu cầu bắt buộc" ngay đầu file, cập nhật frontmatter description, đổi tiêu đề mục "Dùng chung với skill Glossary" thành "(bắt buộc, không phải tùy chọn)" + giải thích vì sao không gộp 2 skill làm 1 (glossary ~2.7MB, update thường xuyên, gộp dễ lệch bản). Không đổi kiến trúc/nội dung quy trình. |
| 2026-07-05 | 2.0 | Nâng cấp đa ngôn ngữ theo nguồn `ai_game_localization_SOP_multilang_v2.0.1.md` (TuanQG cung cấp). Thêm hỗ trợ **TH + ID** (trước đây chỉ VI); viết lại gốc tiếng Anh + rule "no-pivot"; thêm batch config YAML + checklist validate; đổi bảng glossary mẫu khớp đúng schema thật `glossary_multilang.csv` (kr/vn/th/id/en) thay vì schema generic cũ; thêm style guide khởi điểm cho TH/ID (cần native reviewer xác nhận); thêm khóa placeholder/tag (Mục 9A) + marker `[PLACEHOLDER_CHECK]`. Cập nhật frontmatter description + Mục lục nhanh + Tóm tắt 1 trang cho khớp cấu trúc mới. Bản v1.0 gốc lưu tại `reference/_archive/ai_localization_pipeline_full-guide_v1.0_2026-07-05.md`. |
| 2026-07-05 | 1.0 | Bản phân phối đầu tiên. Nguồn: tài liệu `ai_game_localization_pipeline_glossary_Aplus.md` do TuanQG cung cấp. Đóng gói kèm Skill Distribution Hub, tách riêng khỏi skill `localization-glossary` (nguyên tắc "1 skill = 1 folder"). |
