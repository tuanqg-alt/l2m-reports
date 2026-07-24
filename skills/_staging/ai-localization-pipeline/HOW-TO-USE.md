# AI Localization Pipeline — Dịch + QA đa ngôn ngữ (EN→VI/TH/ID) bằng AI có kiểm soát — Cách dùng

⚠️ Cần cài THÊM skill 'L2M Glossary' (cùng Hub) để có dữ liệu thuật ngữ. Quy trình 8 giai đoạn dịch game từ tiếng Anh sang Việt/Thái/Indonesia bằng AI có kiểm soát: Glossary-first Draft A → QA kỹ thuật → Style Audit A+ → QA cuối → Human Review → Final. Kèm checklist severity P0-P3, style guide riêng từng ngôn ngữ đích, và 6 mẫu prompt tái sử dụng.

⚠️ BẮT BUỘC cài kèm skill 'localization-glossary' (cùng Hub) — skill này KHÔNG tự chứa dữ liệu thuật ngữ, thiếu glossary thì AI phải tự đoán term. Đây là quy trình + checklist + prompt pack đa ngôn ngữ, dùng khi cần dịch 1 file game content từ EN sang Việt/Thái/Indo bằng AI có QA bài bản, không phải dịch tự do 1 lần.

## Cách A — Cài để dùng lại nhiều lần (khuyến nghị)
1. Tải + cài THÊM skill 'L2M Glossary' trước nếu chưa có (card riêng trên Hub) — bắt buộc, thiếu là AI không tra được thuật ngữ.
2. Mở Claude.ai → Settings > Capabilities (hoặc Customize > Skills).
3. Bấm Upload → chọn file ai-localization-pipeline.zip vừa tải về.
4. Xong. Gửi file cần dịch + nói ngôn ngữ đích (Việt/Thái/Indo) + 'dịch qua pipeline AI có QA' — Claude tự chạy đúng 8 giai đoạn.

## Cách B — Dùng nhanh 1 lần
1. Kéo SKILL.md (+ thư mục reference/) CỦA CẢ 2 skill (pipeline này + localization-glossary) vào 1 đoạn chat Claude/Cowork.
2. Gõ: 'Làm theo skill này để dịch file đính kèm sang [Việt/Thái/Indo] qua pipeline AI có QA.'
3. Không lo cache lệch version — bạn đang dùng đúng file vừa tải.

## Ghi chú
- ⚠️ Cài thiếu skill 'localization-glossary' = AI không tra được term LOCKED/PREFERRED, chất lượng bản dịch sẽ không đúng như thiết kế.
- Style guide tiếng Thái/Indonesia là bản khởi điểm — nên có native reviewer xác nhận sau vài batch đầu.
- Nội dung tham khảo đầy đủ (checklist/prompt/style guide chi tiết) nằm trong thư mục reference/.
- Skill này do TuanQG maintain. Góp ý / yêu cầu cải tiến → gửi TuanQG.
