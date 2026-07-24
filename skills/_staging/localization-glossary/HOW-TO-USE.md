# L2M Glossary — Tra cứu thuật ngữ KR↔VN·EN·TH·ID — Cách dùng

Tra cứu thuật ngữ chính thức Lineage2M — Hàn ↔ Việt, Anh, Thái, Indo (44.263 từ, có sẵn trong skill, không cần workspace). Cứ hỏi Claude 'từ X tiếng Việt là gì' là ra ngay.

Skill này TỰ CHỨA dữ liệu (data/glossary_multilang.csv — 44.263 term KR/VN/EN/TH/ID) — cài xong tra được ngay, không cần kết nối workspace.

## Cách A — Cài để tra cứu nhiều lần (khuyến nghị)
1. Mở Claude.ai → Settings > Capabilities (hoặc Customize > Skills).
2. Bấm Upload → chọn file localization-glossary.zip vừa tải về.
3. Xong. Hỏi kiểu 'L2M: 검사 dịch là gì?' hoặc 'tên KR của Cường Hóa?' — Claude tự tra trong bộ term.

## Cách B — Dùng nhanh 1 lần (Cowork / nơi có code tool)
1. Giải nén gói, GIỮ NGUYÊN thư mục data/.
2. Chạy: python3 scripts/lookup_term.py "검사" (thêm --lang vn / --category SKILL / --exact nếu cần).
3. Hoặc grep trực tiếp: grep -i "검사" data/glossary_multilang.csv

## Ghi chú
- Dữ liệu là bản chụp tại ngày tải — tải lại trên hub khi badge version đổi để có term mới nhất.
- KHÔNG mở cả file CSV (44.263 dòng) vào chat — luôn tra bằng script hoặc grep.
- Terminology tham khảo nội bộ NCV/L2M — dùng trong công việc, không phát tán ra ngoài. Không chứa dữ liệu người chơi/doanh thu.
