# ChatGPT Banner Pipeline — Pilot Design
> Area 01 Layout Banner · Ngày: 2026-06-27 · Tác giả: TuanQG × Claude (Opus)
> Mục tiêu: thiết kế lại đường **hi-fi** vẽ banner dùng **ChatGPT (GPT-4o image)** **thay** đường Claude Design (T2/T3).
> Trạng thái: **✅ VALIDATED & WIRED — pilot Season Pass/Soccermon ~9/10 (2026-06-27) → ChatGPT thành đường hi-fi chính thức trong SKILL v7.0 (MASTER v10.3).**

---

## 1. Quyết định pilot (đã chốt với TuanQG)

| # | Quyết định | Chọn | Hệ quả thiết kế |
|---|------------|------|------------------|
| 1 | Text trên banner | **English master** | ChatGPT render chữ tiếng Anh (ổn định, né lỗi font tiếng Việt); designer localize EN→VN/TH/ID sau. Pipeline kèm bảng VN↔EN cho designer. |
| 2 | Vị trí trong pipeline | **Thay Claude Design** | Đường hi-fi T2/T3 (Claude Design) → thay bằng ChatGPT. T1 zone-map (low-fi) giữ nguyên cho trường hợp brief gap / chỉ cần khung. |
| 3 | Assets | **Bỏ khỏi pipeline** | Claude KHÔNG gom asset (bỏ Asset Librarian step). TuanQG gửi ảnh source thẳng cho ChatGPT; prompt chỉ *mô tả vai trò* từng ảnh. |
| 4 | Prompt | **Claude chủ động soạn, không giới hạn sáng tạo ChatGPT** | Áp dụng nguyên tắc **LOCKED vs FREE** (xem §4). |

---

## 2. Pipeline tổng quan (5 bước)

```
[1] TuanQG: đưa EVENT RULES chi tiết (.docx/.xlsx/text)
        │
        ▼
[2] CLAUDE: đọc rules → classify Edu/Sales → chọn template type (G–W) + archetype
            → viết EN master copy (verify game term) → SOẠN PROMPT (fill template)
            → giao: prompt + bảng VN↔EN handoff
        │
        ▼
[3] TuanQG → CHATGPT: paste prompt + UPLOAD ảnh source trực tiếp → ChatGPT render
            → iterate (cheat-sheet: đổi 1 thứ/lần, "keep everything else")
        │
        ▼
[4] CLAUDE: content-crosscheck text EN trên bản render vs prompt (đúng chữ/term)
        │
        ▼
[5] DESIGNER: localize EN→VN (bảng handoff) + polish + finalize → ship
```

**Khác biệt cốt lõi so với cũ:** trước đây Claude đóng gói "DESIGN PACKAGE" (prompt + thư mục assets) cho Claude Design. Giờ **Claude chỉ giao 1 prompt văn bản** — assets do TuanQG tự upload vào ChatGPT. Gọn hơn, nhanh hơn, tận dụng đúng thế mạnh "bám reference + ảnh source" của ChatGPT.

**⭐ Output chuẩn = MỘT prompt duy nhất, nhiều banner (one-paste):** với event có nhiều banner, Claude gói **TẤT CẢ vào 1 prompt**. Phần **SHARED** (brand · style/tone · ratio · luật "render text EN đúng từng chữ" · vai trò ảnh upload) nói **1 lần** ở đầu; rồi từng banner (B1/B2/B3…) có composition + text riêng. TuanQG **paste 1 lần**, ChatGPT generate tuần tự (nếu chỉ ra 1 ảnh/lần → gõ "next"). → khác cốt lõi với T2/T3 cũ (mỗi banner 1 package riêng).

**⚠️ Caveat bảng dày:** ChatGPT **không** render chuẩn bảng nhiều dòng (mission table 10 dòng, reward table 19 tier). Banner utility (rules/missions/digest) → giữ text **NGẮN** (header + vài chip); bảng chi tiết để **designer overlay** hoặc làm **T1 zone-map/PPTX**.

**🎯 "Appeal magnet" first (bước bắt buộc khi đọc rules):** Claude phải tìm **điểm hấp dẫn nhất** của event — World Boss đặc trưng / nhân vật mới / mascot / item signature (vd Season Pass tháng 7 = **World Boss "Soccermon"**) — và đưa nó làm **hero/visual centerpiece** của banner flagship, xuyên suốt theme các banner. Đừng để nó thành chi tiết phụ trong checklist. Manh mối nằm cả trong phần mission/mechanic, không chỉ ở reward.

**🔢 Số banner = theo độ phức tạp event:** event đơn giản → **1 banner là đủ** (đừng over-propose — Season Pass đã rút 3→1). Chốt số banner tối thiểu với TuanQG trước khi soạn prompt.

---

## 3. Phân vai

| Vai | Làm gì | KHÔNG làm |
|-----|--------|-----------|
| **Claude** | Classify Edu/Sales · chọn template type + archetype · viết EN master copy (verify term Glossary) · soạn prompt theo template · content-crosscheck bản render · lập bảng VN↔EN | Không gom asset · không tự render · không đổi copy chính thức |
| **TuanQG / ChatGPT** | Paste prompt · upload ảnh source (character render / item / reference banner) · iterate canvas | — |
| **Designer** | Localize EN→VN/TH/ID (từ bảng handoff) · polish title ornate / character drama · export final | — |

---

## 4. Nguyên tắc cốt lõi — LOCKED vs FREE

Đây là "linh hồn" của prompt: vừa đảm bảo chính xác, vừa **không bóp sáng tạo** của ChatGPT (đúng yêu cầu anh).

| 🔒 LOCKED (ChatGPT phải làm đúng tuyệt đối) | 🎨 FREE (ChatGPT được tự do sáng tạo) |
|---|---|
| Text strings (render *verbatim*, đúng chính tả) | Composition / bố cục trong zone |
| Brand marks (Lineage II + VNGGAMES x NC) + vị trí | Ánh sáng, rim light, độ sâu |
| Fidelity của ảnh upload (mặt/giáp/vũ khí/item giữ nguyên) | Particle / FX / hiệu ứng năng lượng |
| Aspect ratio | Mood, không khí, polish nghệ thuật |

> Prompt nói rõ với ChatGPT: "Bạn có toàn quyền sáng tạo về art & mood **miễn là**: (1) asset trung thực, (2) text đúng từng chữ, (3) brand đặt đúng chỗ." → đây là cách "mở khóa" sáng tạo mà vẫn kiểm soát được.

---

## 5. Tái dụng kiến thức v6.9 (không vứt đi)

Pipeline mới chỉ đổi *cơ chế output*, còn **toàn bộ tri thức banner vẫn dùng lại**:
- **15 template type (G–W)** từ 86 banner VN thật → quyết định layout/composition trong prompt.
- **6 Campaign Archetype** → quyết định cần mấy banner + sequence.
- **Universal rules:** branding placement (3 kiểu theo layout), BG-by-tone (đỏ/tím/lửa/vàng/cát/đen), typography, format/size (1:1 chủ đạo, landscape cho cinematic/reward).
- **Education vs Sales** classification + copy template.
- **Glossary KB** verify game term (lưu ý: cần thêm chiều **EN** — xem §7 caveat).
- **content-crosscheck** vẫn là cổng bắt buộc trước khi giao.

---

## 6. Prompt anatomy (giải thích từng phần của template)

File template: `prompts/chatgpt-banner-prompt_TEMPLATE.md`. Cấu trúc 8 khối:

1. **ROLE** — đóng khung "banner key-art AAA cho L2M dark-fantasy".
2. **ASPECT RATIO** — chốt tỉ lệ ngay đầu (4o cần biết sớm).
3. **Uploaded images** — mô tả *vai trò* từng ảnh TuanQG sẽ upload (hero / reference style / item) + lệnh giữ trung thực.
4. **Composition** — zone theo template type, mô tả lỏng + mời sáng tạo, chừa khoảng trống cho text.
5. **Text to render EXACTLY** — text EN trong dấu nháy, lệnh render *verbatim*, giữ ngắn.
6. **Brand marks** — logo + partner theo branding rule.
7. **Art direction** — palette theo tone event + lighting/FX/mood/style (khối FREE).
8. **Creative latitude** — câu "mở khóa" sáng tạo có điều kiện.

Kèm: **Iteration cheat-sheet** (đổi 1 biến/lần) + **bảng VN↔EN handoff** + **1 worked example** (Hero Reveal "Twin Blades / Song Kiếm") để anh thấy template điền ra sao.

---

## 7. Lưu ý & caveat

- **Giữ text NGẮN.** ChatGPT render sai tăng nhanh khi >6–8 từ/dòng (kể cả tiếng Anh). Ưu tiên headline + CTA sạch pixel; đoạn dài → tách hoặc rút.
- **EN game terminology (gap cần xử lý):** Glossary KB hiện là KR↔VN (51,760 term), **chưa có chiều EN**. EN master copy cần tên tiếng Anh chuẩn → 2 cách: (a) lấy theo naming **L2M Global (NCSOFT)** nếu term đã có bản EN chính thức; (b) Claude dịch VN→EN cẩn thận rồi đánh dấu "cần verify". → **Khuyến nghị:** với term quan trọng (tên class/skill/item), TuanQG xác nhận tên EN 1 lần, ta cache lại.
- **Designer vẫn cần polish:** pilot Claude Design cho thấy hero/sales cần designer chỉnh title ornate + character drama. ChatGPT mạnh visual nhưng title vàng-kim hoa văn & chữ VN vẫn là việc của designer.
- **Bản quyền/asset:** ChatGPT giữ trung thực ảnh upload (composite), không "vẽ lại" nhân vật → an toàn brand.

---

## 8. So sánh nhanh: ChatGPT vs Claude Design

| Tiêu chí | ChatGPT (GPT-4o) — mới | Claude Design — cũ |
|---|---|---|
| Chất lượng visual / appeal | ⭐ Rất cao, cinematic, bám reference tốt | Khá, thiên infographic/layout |
| Render text | Tốt với EN, **yếu tiếng Việt** → dùng EN master | Tốt hơn (web canvas) |
| Dùng ảnh source thật | ⭐ Upload trực tiếp, composite tự nhiên | Cần đóng gói asset vào package |
| Công sức Claude | Thấp (chỉ giao prompt) | Cao (gói prompt + assets + design system) |
| Iterate | Chat, nhanh, "đổi 1 thứ" | Canvas WYSIWYG |
| Export | Ảnh → designer dựng lại | Export PPTX/Canva/HTML/PDF trực tiếp |
| Điểm yếu | Text VN, cần designer dựng lại layer text | Visual kém "wow" cho hero/sales |

→ Hợp lý khi pilot ChatGPT cho **hero/sales/reveal** (cần appeal cao). Utility text-heavy (rules/digest) có thể vẫn hợp T1 zone-map.

---

## 9. Cần TuanQG quyết / cung cấp

1. ✅ **DONE — Pilot test:** Season Pass (Soccermon), render ~9/10; EN-master + Soccermon hero hoạt động tốt. Package `outputs/2026-06-27_Season-Pass/`.
2. ✅ **DONE — Wired:** ChatGPT thành đường hi-fi chính thức trong **SKILL v7.0** (Claude Design T2/T3 đã bỏ); MASTER_WORKFLOW **v10.3**.
3. ⏳ **[Còn mở]** Có cần chiều **EN** trong Glossary KB không (để tự động hóa EN copy)? Nếu có, tôi đề xuất cách build.
4. ⏳ **Pending push:** SKILL v7.0 · MASTER v10.3 · template · design doc · pilot package · memory (git [2]).

---

## Changelog
| Date | Ver | Changes |
|------|-----|---------|
| 2026-06-27 | pilot v0.1 | Thiết kế pipeline ChatGPT thay Claude Design (T2/T3). EN master text, bỏ asset step, nguyên tắc LOCKED/FREE. Kèm prompt template `prompts/chatgpt-banner-prompt_TEMPLATE.md`. Chờ test event thật → wire SKILL v7.0. |
| 2026-06-27 | v1.0 | **VALIDATED & WIRED.** Pilot Season Pass (Soccermon) ~9/10 → ChatGPT thành đường hi-fi chính thức trong **SKILL v7.0** + MASTER_WORKFLOW **v10.3**. +Quy tắc: appeal-magnet-first · số banner = độ phức tạp · pass/reward show phí+final reward · ChatGPT tự bịa số→designer thay · dense table→2B zone-map. |
