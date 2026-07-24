const pptxgen = require("pptxgenjs");

const pres = new pptxgen();

// Custom square layout for 1:1 banners
pres.defineLayout({ name: "SQUARE", width: 7.5, height: 7.5 });
pres.layout = "SQUARE";
pres.title = "Điện Zephar — Education Banners Layout";
pres.author = "TuanQG x Claude";

// ─── COLORS ───────────────────────────────────────────────
const BG       = "0d0d1a";
const GOLD     = "f5c842";
const WHITE    = "e8e8f0";
const MUTED    = "a0a0b8";
const DIMMED   = "5a5a8a";
const BORDER   = "2a2a3e";
const ASSET_BG = "12122a";
const ASSET_BD = "3a3a5c";

// ─── HELPER: placeholder box ──────────────────────────────
function assetBox(slide, x, y, w, h, label, note) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: ASSET_BG },
    line: { color: ASSET_BD, width: 1.5, dashType: "dash" },
  });
  slide.addText(label, {
    x, y: y + h / 2 - 0.25, w, h: 0.35,
    fontSize: 10, color: DIMMED, align: "center",
    bold: false, charSpacing: 1,
  });
  if (note) {
    slide.addText(note, {
      x, y: y + h / 2 + 0.08, w, h: 0.28,
      fontSize: 8, color: "3a3a5c", align: "center",
    });
  }
}

// ─── HELPER: divider line ─────────────────────────────────
function divider(slide, y) {
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y, w: 6.5, h: 0,
    line: { color: BORDER, width: 0.5 },
  });
}

// ─── HELPER: annotation ──────────────────────────────────
function annotation(slide, text) {
  slide.addText(text, {
    x: 0.3, y: 7.1, w: 6.9, h: 0.25,
    fontSize: 7, color: "333355", align: "right",
    charSpacing: 1,
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 1 — B1: Vào Điện Zephar
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Slide label
  s.addText("B1 · Education · 1:1", {
    x: 0.5, y: 0.2, w: 6.5, h: 0.25,
    fontSize: 8, color: DIMMED, charSpacing: 2,
  });

  // Tag
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.55, w: 1.6, h: 0.22,
    fill: { color: BG }, line: { color: GOLD, width: 0.5 },
  });
  s.addText("PHỤ BẢN MỚI", {
    x: 0.5, y: 0.55, w: 1.6, h: 0.22,
    fontSize: 7, color: GOLD, align: "center", charSpacing: 1.5, margin: 0,
  });

  // Headline
  s.addText("ĐIỆN ZEPHAR", {
    x: 0.5, y: 0.85, w: 6.5, h: 0.9,
    fontSize: 48, bold: true, color: GOLD, charSpacing: 2,
  });

  // Subhead
  s.addText("Phụ bản liên máy chủ đã mở", {
    x: 0.5, y: 1.72, w: 6.5, h: 0.35,
    fontSize: 16, color: WHITE,
  });

  divider(s, 2.15);

  // Intro
  s.addText("Biết 3 điều này trước khi bước vào", {
    x: 0.5, y: 2.22, w: 6.5, h: 0.3,
    fontSize: 13, color: MUTED, italic: true,
  });

  divider(s, 2.58);

  // Asset placeholder
  assetBox(s, 0.5, 2.68, 6.5, 1.85,
    "[ ASSET: Portal / Rift key art ]",
    "Designer swap → ảnh chính thức Điện Zephar / cổng Rift"
  );

  // Key points
  const kps = [
    { icon: "⚔", text: "Cấp 70+  ·  200.000 Adena mỗi lần vào" },
    { icon: "⏰", text: "Tối đa 14 giờ/tuần  —  reset 05:00 sáng Thứ Tư" },
    { icon: "📍", text: "Vào từ icon Vết nứt trên minimap  —  không dùng World/Arena" },
  ];
  kps.forEach((kp, i) => {
    const y = 4.68 + i * 0.6;
    // Icon circle
    s.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.36, h: 0.36,
      fill: { color: "181830" }, line: { color: ASSET_BD, width: 0.5 },
    });
    s.addText(kp.icon, {
      x: 0.5, y: y, w: 0.36, h: 0.36,
      fontSize: 13, align: "center", valign: "middle", margin: 0,
    });
    s.addText(kp.text, {
      x: 1.02, y: y + 0.02, w: 6.0, h: 0.36,
      fontSize: 14, color: WHITE,
    });
  });

  annotation(s, "REFERENCE DRAFT · designer swap asset vào · SKILL.md v6.0");
}

// ─────────────────────────────────────────────────────────
// SLIDE 2 — B2: 6 Khu vực — Độ khó tăng dần
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  s.addText("B2 · Education · 4:5 (adapted 1:1)", {
    x: 0.5, y: 0.2, w: 6.5, h: 0.25,
    fontSize: 8, color: DIMMED, charSpacing: 2,
  });

  // Headline
  s.addText("6 KHU VỰC", {
    x: 0.5, y: 0.55, w: 6.5, h: 0.8,
    fontSize: 44, bold: true, color: GOLD, charSpacing: 2,
  });
  s.addText("Đi sâu hơn — phần thưởng xứng đáng hơn", {
    x: 0.5, y: 1.32, w: 6.5, h: 0.35,
    fontSize: 14, color: WHITE,
  });

  divider(s, 1.75);

  // Zone tier rows
  const zones = [
    { id: "KV1", name: "Đại sảnh Điện thờ",       drop: "Giáp Phán Quyết · Hildegrim",     col: "3a3a5c" },
    { id: "KV2", name: "Phòng nguyện đen",          drop: "Nhẫn Thiên sứ · Sigil Sniper",    col: "4a4a6c" },
    { id: "KV3", name: "Bàn thờ Hồi sinh",          drop: "Choàng Harness · Nhẫn Anakim",    col: "5a4a7c" },
    { id: "KV4", name: "Phòng phong ấn bóng tối",   drop: "Sigil Thiên sứ sa ngã · Hildegrim", col: "6a4a8c" },
    { id: "KV5", name: "Thư viện cấm",              drop: "Đai Octavis · Nhẫn Quang huy",    col: "7a4a9c" },
    { id: "KV6", name: "Nôi của Thiên sứ sa ngã",   drop: "★ Drop Boss · Legendary",         col: "f5c842" },
  ];

  zones.forEach((z, i) => {
    const y = 1.88 + i * 0.73;
    const isKV6 = i === 5;

    // Row background
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 6.5, h: 0.6,
      fill: { color: isKV6 ? "1a1500" : "131326" },
      line: { color: isKV6 ? GOLD : BORDER, width: isKV6 ? 1 : 0.3 },
    });

    // Zone badge
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: 0.65, h: 0.6,
      fill: { color: isKV6 ? GOLD : z.col },
      line: { color: "00000000", width: 0 },
    });
    s.addText(z.id, {
      x: 0.5, y, w: 0.65, h: 0.6,
      fontSize: 10, bold: true,
      color: isKV6 ? "0d0d1a" : WHITE,
      align: "center", valign: "middle", margin: 0,
    });

    // Zone name
    s.addText(z.name, {
      x: 1.25, y: y + 0.04, w: 3.2, h: 0.28,
      fontSize: 12, color: isKV6 ? GOLD : WHITE, bold: isKV6,
    });

    // Drop preview
    s.addText(z.drop, {
      x: 1.25, y: y + 0.3, w: 5.6, h: 0.22,
      fontSize: 9, color: isKV6 ? "d4a800" : DIMMED,
    });
  });

  // Note KV6
  s.addText("⚠  Quái Huyết thạch Zephar: miễn debuff · biến thành boss", {
    x: 0.5, y: 6.28, w: 6.5, h: 0.25,
    fontSize: 9, color: "a08000", italic: true,
  });

  annotation(s, "REFERENCE DRAFT · designer swap asset vào · SKILL.md v6.0");
}

// ─────────────────────────────────────────────────────────
// SLIDE 3 — B3: Boss Zephar — Thứ 7, 22:00
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  s.addText("B3 · Education · 1:1", {
    x: 0.5, y: 0.2, w: 6.5, h: 0.25,
    fontSize: 8, color: DIMMED, charSpacing: 2,
  });

  // Timer block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.55, w: 6.5, h: 1.4,
    fill: { color: "180808" }, line: { color: "6a1010", width: 1 },
  });
  s.addText("THỨ 7 · 22:00", {
    x: 0.5, y: 0.65, w: 6.5, h: 0.7,
    fontSize: 42, bold: true, color: GOLD, align: "center", charSpacing: 3,
  });
  s.addText("→  biến mất lúc 05:00 Chủ Nhật nếu không tiêu diệt", {
    x: 0.5, y: 1.35, w: 6.5, h: 0.28,
    fontSize: 10, color: "cc6666", align: "center", italic: true,
  });

  // Headline
  s.addText("ZEPHAR XUẤT HIỆN", {
    x: 0.5, y: 2.1, w: 6.5, h: 0.65,
    fontSize: 34, bold: true, color: WHITE, charSpacing: 1,
  });
  s.addText("Chỉ 7 tiếng — phối hợp guild từ trước", {
    x: 0.5, y: 2.72, w: 6.5, h: 0.3,
    fontSize: 14, color: MUTED,
  });

  divider(s, 3.1);

  // Asset placeholder — boss silhouette
  assetBox(s, 0.5, 3.2, 6.5, 1.6,
    "[ ASSET: Boss Zephar silhouette / artwork ]",
    "Designer swap → ảnh Boss Zephar chính thức"
  );

  // Key points
  const kps = [
    "Boss ra → quái KV6 biến mất, hồi sinh 10 giây sau khi Boss chết",
    "Drop: Vũ khí Huyền thoại  +  Công thức chế tạo Legendary",
    "CTA: Chuẩn bị từ tối Thứ Sáu",
  ];
  kps.forEach((t, i) => {
    s.addText(`• ${t}`, {
      x: 0.6, y: 4.95 + i * 0.48, w: 6.3, h: 0.38,
      fontSize: i === 2 ? 13 : 12,
      color: i === 2 ? GOLD : WHITE,
      bold: i === 2,
    });
  });

  annotation(s, "REFERENCE DRAFT · designer swap asset vào · SKILL.md v6.0");
}

// ─────────────────────────────────────────────────────────
// SLIDE 4 — B4: 15 Máy chủ · 1 Rift
// ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  s.addText("B4 · Education · 1:1", {
    x: 0.5, y: 0.2, w: 6.5, h: 0.25,
    fontSize: 8, color: DIMMED, charSpacing: 2,
  });

  // Headline
  s.addText("15 MÁY CHỦ · 1 RIFT", {
    x: 0.5, y: 0.55, w: 6.5, h: 0.8,
    fontSize: 38, bold: true, color: GOLD, charSpacing: 2,
  });
  s.addText("Vô số đối thủ — biết trước để lên chiến thuật", {
    x: 0.5, y: 1.32, w: 6.5, h: 0.35,
    fontSize: 14, color: WHITE,
  });

  divider(s, 1.75);

  // Rift center visual placeholder
  assetBox(s, 2.25, 1.9, 3.0, 2.2,
    "[ ASSET: Rift portal icon ]",
    "Center visual"
  );

  // Server hex grid (simplified as small boxes around center)
  const positions = [
    [0.5, 2.1], [0.5, 2.85], [0.5, 3.6],
    [1.1, 1.75], [1.1, 4.3],
    [5.3, 2.1], [5.3, 2.85], [5.3, 3.6],
    [4.7, 1.75], [4.7, 4.3],
  ];
  positions.forEach((pos) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: pos[0], y: pos[1], w: 0.55, h: 0.38,
      fill: { color: "181830" },
      line: { color: ASSET_BD, width: 0.5 },
    });
    s.addText("SVR", {
      x: pos[0], y: pos[1], w: 0.55, h: 0.38,
      fontSize: 7, color: DIMMED, align: "center", valign: "middle", margin: 0,
    });
  });

  // Reset timeline
  divider(s, 4.25);

  s.addText("Reset lineup:", {
    x: 0.5, y: 4.32, w: 1.5, h: 0.3,
    fontSize: 12, color: MUTED,
  });

  // Wed reset block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 2.1, y: 4.32, w: 1.8, h: 0.55,
    fill: { color: "0a1a2a" }, line: { color: "1a4a7a", width: 1 },
  });
  s.addText("05:00  Thứ Tư", {
    x: 2.1, y: 4.32, w: 1.8, h: 0.55,
    fontSize: 11, color: "7ab8f5", align: "center", valign: "middle", bold: true, margin: 0,
  });

  // Sun reset block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.1, y: 4.32, w: 1.8, h: 0.55,
    fill: { color: "0a1a2a" }, line: { color: "1a4a7a", width: 1 },
  });
  s.addText("05:00  Chủ Nhật", {
    x: 4.1, y: 4.32, w: 1.8, h: 0.55,
    fontSize: 11, color: "7ab8f5", align: "center", valign: "middle", bold: true, margin: 0,
  });

  // Key points
  const kps = [
    "Cùng rift = tranh Boss, tranh mob KV6 — đây là đối thủ của bạn",
    "Phối hợp guild sớm — biết ai trong rift trước khi vào",
  ];
  kps.forEach((t, i) => {
    s.addText(`• ${t}`, {
      x: 0.5, y: 5.1 + i * 0.52, w: 6.5, h: 0.42,
      fontSize: 12, color: WHITE,
    });
  });

  annotation(s, "REFERENCE DRAFT · designer swap asset vào · SKILL.md v6.0");
}

// ─────────────────────────────────────────────────────────
// WRITE FILE
// ─────────────────────────────────────────────────────────
pres.writeFile({ fileName: "2026-05-10_DienZephar_layout.pptx" })
  .then(() => console.log("✅ PPTX saved: 2026-05-10_DienZephar_layout.pptx"))
  .catch(err => console.error("❌ Error:", err));
