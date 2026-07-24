---
name: localization-glossary
description: >
  Tra cứu thuật ngữ chính thức game Lineage2M 4 NGÔN NGỮ (KR↔VN·EN·TH·ID) từ bộ glossary
  44.263 term ĐÓNG KÈM ngay trong skill này (data/glossary_multilang.csv — VN chuẩn hóa
  từ bản central, EN official từ NC Termbase, kèm Thái & Indo). LUÔN dùng khi: cần dịch
  tên skill/item/UI/stat/system term giữa KR/VN/EN/TH/ID; viết hoặc kiểm tra content
  Lineage2M cần đúng thuật ngữ chuẩn; gặp term tiếng Hàn lạ trong patch note, roadmap,
  tài liệu NCSOFT; hoặc khi có người hỏi "term X dịch là gì", "tên VN/tiếng Anh của Y",
  "KR của Z là gì". Đây là NGUỒN CHÂN LÝ terminology L2M — ưu tiên hơn suy đoán hay
  trí nhớ. Tra bằng script hoặc grep, KHÔNG đọc cả file CSV vào ngữ cảnh.
---

# L2M Localization Glossary (bản phân phối — self-contained, multilang)

> **Dữ liệu:** `data/glossary_multilang.csv` — đóng kèm trong gói này.
> **Công cụ tra:** `scripts/lookup_term.py` v2 (Python 3.8+, không phụ thuộc thư viện ngoài).
> **Phạm vi:** **44.263 term × 4 ngôn ngữ** — base 12.457 + central-only 4.919 + 26.887 nc-recovered (bản dịch NCSOFT thô, cột vn_origin=nc-recovered). VN 100%.
> **Nguồn gốc:** file localization chính thức NCSOFT (VN/TH/ID) + NC Termbase KO2EN (EN official).

Skill này **tự chứa dữ liệu** — cài xong là tra được ngay, KHÔNG cần workspace hay mạng.

---

## ⚠️ Quy tắc vàng (đọc trước khi tra)

1. **KHÔNG bao giờ đọc/nạp cả file `data/glossary_multilang.csv` vào ngữ cảnh.** File có 44.263 dòng — nạp toàn bộ vừa lãng phí vừa dễ sai. **Luôn tra có mục tiêu** bằng script hoặc `grep`.
2. **Skill này là nguồn chân lý** cho term L2M — nếu kết quả tra khác với trí nhớ, **tin kết quả tra**.
3. Nếu tra không ra → thử rút ngắn query / bỏ filter category / đổi `--lang auto`. Vẫn không có → term chưa nằm trong glossary, nói rõ thay vì bịa.
4. Ô EN/TH/ID trống nghĩa là term đó chưa có bản dịch ngôn ngữ ấy trong nguồn — nói rõ, không tự dịch bù rồi trình bày như term chuẩn.

---

## Cách tra cứu

### Cách 1 — Script (khuyến nghị: chạy được ở Cowork bash và code tool của Claude.ai)

Chạy từ thư mục gốc của gói skill:

```bash
# Tra theo KR
python3 scripts/lookup_term.py "파워 스트라이크"

# Tra theo VN (có dấu)
python3 scripts/lookup_term.py "Cường Hóa" --lang vn

# Tra theo EN (official NC)
python3 scripts/lookup_term.py "Power Strike" --lang en

# Tra Thái / Indo
python3 scripts/lookup_term.py "ดาบ" --lang th
python3 scripts/lookup_term.py "Pedang" --lang id

# Lọc theo category + giới hạn số dòng
python3 scripts/lookup_term.py "매직" --category SKILL --limit 15

# Khớp chính xác (exact) thay vì chứa (substring)
python3 scripts/lookup_term.py "강화" --lang kr --exact

# In block đầy đủ VN/EN/TH/ID + nguồn từng term
python3 scripts/lookup_term.py "발라카스" --full

# Liệt kê toàn bộ category có trong bộ term
python3 scripts/lookup_term.py --categories
```

Mặc định script in bảng `CATEGORY | KR | VN | EN`; thêm `--full` để xem cả TH/ID + nguồn (vn_origin, en_match, string_id).

### Cách 2 — grep (dự phòng khi không có Python)

```bash
# Tra nhanh, không phân biệt hoa thường
grep -i "검사" data/glossary_multilang.csv

# Chỉ lấy vài dòng đầu
grep -i "enchant" data/glossary_multilang.csv | head -20
```

CSV có header: `category,kr,vn,vn_origin,th,th_match,id,id_match,en,en_match,string_id` (cột hay dùng: **kr**, **vn**, **en**, **category**).

---

## Tham số của lookup_term.py

| Tham số | Ý nghĩa | Mặc định |
|---|---|---|
| `query` | Term cần tìm (KR, VN, EN, TH hoặc ID) | (bắt buộc, trừ khi `--categories`) |
| `--lang` | `auto` (quét KR+VN+EN) · `kr` · `vn` · `en` · `th` · `id` | `auto` |
| `--category`, `-c` | Lọc theo category (partial: `SKILL` khớp `ACTIVE_SKILL`, `WEAPON_SKILL`…) | không lọc |
| `--limit`, `-n` | Số kết quả tối đa | 30 |
| `--exact` | Khớp trọn term thay vì chứa | tắt |
| `--full` | In block đầy đủ 4 ngôn ngữ + nguồn | tắt |
| `--categories` | Chỉ liệt kê các category | — |
| `--csv` | Trỏ tới CSV khác (nếu tự đặt chỗ khác) | tự tìm cạnh script |

---

## Categories thường dùng

| Category | Mô tả |
|---|---|
| `SYSTEM` | Thuật ngữ hệ thống & Glossary chính thức (Cường Hóa, Tinh Luyện, Thức Tỉnh) |
| `STAT` | Chỉ số nhân vật (ST, Chính Xác, Chí Mạng) |
| `ACTIVE_SKILL` / `WEAPON_SKILL` / `PASSIVE_SKILL` | Tên skill |
| `UI` | Nhãn giao diện, nút bấm |
| `CLASS` | Chủng tộc & class (Nhân Tộc, Tinh Linh, Hắc Tinh Linh) |
| `ITEM` / `EQUIPMENT` / `MATERIAL` | Vật phẩm, trang bị, nguyên liệu |
| `ARTIFACT` / `AGATHION` / `SOULGEM` / `PET` | Trang bị & đồng hành |
| `MONSTER` / `NPC` | Tên quái, NPC |
| `GUILD` | Thuật ngữ bang hội |
| `WORLD` | Tên vùng đất, địa danh |

> `--categories` in đầy đủ danh sách kèm tổng số term (39 categories).

---

## Khi lookup trả về nhiều dòng cho cùng 1 KR

Bản multilang giữ key theo **(KR, category)** — cùng 1 KR có thể xuất hiện ở 2+ category với nghĩa khác nhau. Cách chọn:

1. Ưu tiên dòng đúng **category ngữ cảnh** đang làm (tên skill → `ACTIVE_SKILL`, địa danh → `WORLD`…).
2. Kế tiếp ưu tiên `SYSTEM` (termbase chính thức) rồi `UI` (đúng thứ người chơi thấy trên màn hình).
3. Với EN: dòng có `en_match = nc_tb` là EN **official từ NC Termbase** — đáng tin nhất.
4. Đối chiếu `vn_origin` / `string_id` (dùng `--full`) để biết nguồn quyết định.

---

## Lưu ý về dữ liệu

- Đây là **bản chụp (snapshot)** tại thời điểm đóng gói — xem badge **version** trên hub, tải lại khi có bản mới để cập nhật term.
- EN/TH/ID **không phủ 100%**: EN 86,5% · TH/ID ~85%. Ô trống = nguồn chưa có bản dịch — đừng tự bịa.
- Là **terminology tham khảo nội bộ** cho công việc NCV/Lineage2M — dùng trong nội bộ, không phát tán ra ngoài.
- Bộ term này KHÔNG chứa dữ liệu người chơi, doanh thu, hay bất kỳ thông tin nhạy cảm nào — chỉ là thuật ngữ game.

---

## Tự kiểm tra staleness (khi làm trong workspace L2M)

Data đóng kèm là **snapshot** — nguồn chân lý sống nằm ở workspace:
`03_Glossary-Termbase/Claude_Glossary/03_kb-final/glossary_kb_multilang.csv`

Khi session có quyền truy cập workspace C:\Claude, **trước lượt tra cứu đầu tiên** hãy so nhanh bản đóng kèm với nguồn:

```bash
md5sum <skill>/data/glossary_multilang.csv 03_Glossary-Termbase/Claude_Glossary/03_kb-final/glossary_kb_multilang.csv
# hoặc nhanh hơn: wc -l cả 2 file
```

- **Khớp** → dùng bản nào cũng được, tiếp tục bình thường (không cần báo gì).
- **Lệch** → (1) tra cứu bằng **bản workspace** (mới hơn), (2) báo TuanQG 1 dòng: *"Glossary đóng kèm skill đã stale (X vs Y dòng) — nên repackage skill qua hub sau batch này."* KHÔNG âm thầm dùng bản cũ.
- Không có workspace (máy khác/session thường) → dùng bản đóng kèm, nêu ngày snapshot khi kết quả tra ảnh hưởng quyết định.

> Snapshot hiện tại: **2026-07-24 · 44.263 term (batch 20260702)** — đã verify md5 nguồn 150/150 khớp.

---

## Changelog

| Ngày | Version | Thay đổi |
|------|---------|----------|
| 2026-07-24 | 1.4 | **Refresh batch 20260702 (bản đầy đủ):** data 44.225 → **44.263 term** (base 12.457 từ dump L2M_SEA_20260702 mới, md5 150/150 khớp; +39 term VN base). Cùng cấu trúc 4 ngôn ngữ, lookup_term.py v2 giữ nguyên. |
| 2026-07-14 | 1.3 | Thêm §Tự kiểm tra staleness: so md5/số dòng bản đóng kèm vs nguồn workspace `03_kb-final/glossary_kb_multilang.csv` trước lượt tra đầu; lệch → dùng bản workspace + nhắc repackage. Ghi rõ snapshot 2026-07-02 (44.225 term). |
| 2026-07-02 | 1.2 | **Mở rộng NC-RECOVERED:** data 17.338 → **44.225 term** — thêm 26.887 tier nc-recovered (term có bản dịch VN/TH/ID sẵn trong file string NCSOFT, CHƯA qua QA người; lọc bằng cột vn_origin=nc-recovered). Đã loại 1.706 term conflict (1 KR nhiều bản) để LocTeam chốt riêng. lookup_term.py v2 giữ nguyên. |
| 2026-07-02 | 1.1 | **Nâng lên MULTILANG:** data đổi sang `data/glossary_multilang.csv` — 17.338 term × 4 ngôn ngữ (VN 100% · EN 86,5% official NC Termbase · TH/ID ~85%), central 13.011 nằm trọn bên trong. `lookup_term.py` v2: `--lang en/th/id`, `--full` (block 4 ngôn ngữ + nguồn), bảng mặc định thêm cột EN, fallback đọc được cả bản central cũ. |
| 2026-07-02 | 1.0 | Bản phân phối đầu tiên. Self-contained: đóng kèm `data/glossary_central.csv` (13K+ term, bản central 1 KR=1 VN) + `scripts/lookup_term.py` portable (đường dẫn tương đối). Là skill data-backed mẫu cho Skill Distribution Hub. |
