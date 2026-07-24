# ChatGPT Banner Prompt — MASTER TEMPLATE (Lineage2M)
> Reusable engine for the ChatGPT image-gen pipeline (replaces Claude Design hi-fi path).
> Claude fills the `[[...]]` slots from the event rules. TuanQG pastes the finished prompt into
> ChatGPT (GPT-4o image) and **uploads the source images directly**. Text = **English master**
> (designer localizes to VN/TH/ID afterwards).
>
> Design philosophy = **LOCKED vs FREE**:
> - **LOCKED** (must be exact, ChatGPT may NOT reinterpret): the text strings, brand marks,
>   uploaded asset fidelity, aspect ratio.
> - **FREE** (ChatGPT is encouraged to be creative): composition, lighting, atmosphere,
>   particle/FX, background depth, art polish.

---

## HOW CLAUDE FILLS THIS
1. Read the event rules → classify **Education / Sales** → pick **template type (G–W)** + archetype.
2. Write the **English master copy** (headline/subhead/USP|key points/CTA/period) — verify game
   terms; keep each string SHORT (long text = more render errors, even in English).
3. Describe the **role of each image TuanQG will upload** (do not gather assets — just reference them).
4. Fill the art-direction block using the **BG-by-tone** + **branding** rules.
5. Deliver the finished prompt + a **VN↔EN copy table** for the designer handoff.

> Keep total rendered text minimal. If a string is long, split or shorten — reliability drops fast
> past ~6–8 words per line. CTA and headline are the priority strings to get pixel-clean.

---

## CONSOLIDATED OUTPUT — one paste, multiple banners (DEFAULT)
For an event with several banners, deliver **ONE prompt the user pastes once**. Structure:
1. **SHARED RULES block (state once):** brand, look/tone, aspect ratio, the "render EN text exactly"
   rule, and the uploaded-image roles.
2. **Per-banner blocks:** `BANNER 1 / 2 / 3` — each with its own composition (template type) + exact
   text strings. (The single-banner template below = the building block for each block.)
3. **Sequencing line:** "Generate N separate images, one after another; if you can only do one per
   message, make Banner 1 and wait for me to say 'next'."
4. **Utility caveat:** keep text-heavy banners (rules/missions/digest) SHORT (header + a few chips);
   dense tables (full mission/reward lists) → designer overlay or T1 zone-map, never ChatGPT.
5. **Pass / reward / monetization banners:** always render the **activation / unlock cost** (e.g.
   "500,000 Adena") near the CTA, and **highlight the FINAL / grand-prize milestone** as a larger
   special slot — it is the biggest hook. Never let ChatGPT invent reward quantities; give real ones
   or keep the row a generic showcase (designer fills the exact data).

> Worked consolidated example: `outputs/2026-06-27_Season-Pass/2026-06-27_Season-Pass_chatgpt-prompt.md`.

---

## ═══════════ SINGLE-BANNER BUILDING BLOCK (everything below the line goes to ChatGPT) ═══════════

Create a high-quality, scroll-stopping **promotional key-art banner** for **Lineage2M**, a
dark-fantasy mobile MMORPG. The output must look like a finished, production-grade marketing
banner — AAA game key-art quality.

**ASPECT RATIO:** [[1:1 square (default) / 16:9 cinematic / 4:5 portrait]]. Compose for this ratio.

### Uploaded images — use them faithfully (do NOT redraw from scratch)
I am attaching source images. Composite and enhance them; preserve their identity exactly.
- **Image 1 — [[role, e.g. "hero render of the new class 'Twin Blades' — make this the main subject, keep face / armor / weapon / pose exactly as shown"]]**
- **Image 2 — [[role, e.g. "style reference banner — match its mood, palette, lighting and composition language"]]**
- **Image 3 — [[role, e.g. "item / reward icon — feature it clearly in the reward zone"]]** *(remove this line if not used)*
> Keep characters and items photo-true to the uploads. You may relight, recolor for mood, and add
> effects around them, but do not change their core design.

### Composition — template type [[G / H / I / J / K / L / M / N / O / Q / R / S / U / V / W]]
[[Describe the layout zones for the chosen type, loosely. Examples:
- Type G (Hero Reveal): one dominant hero figure, large; headline gold across the top; clean BG depth.
- Type L (Event CTA): two characters flanking / VS pose; date band; CTA button lower area.
- Type S (Reward Showcase): item/chest fan or grid; "how to get" flow; date caveat.
Give the zone intent and rough placement, then invite ChatGPT to compose creatively within it.]]
Leave clean negative space where the text below will sit so it stays legible.

### Text to render — render these strings EXACTLY (English, correct spelling, no extra words)
> Render verbatim. Do NOT paraphrase, translate, abbreviate, or invent text. Spelling must be perfect.
> Crisp, legible, well-kerned. If you cannot fit a string cleanly, make the art area smaller — never
> alter the words.
- **HEADLINE** (largest, ornate gold lettering): `[[HEADLINE — max ~4 words]]`
- **SUBHEAD / TAGLINE** (medium, light): `[[subhead — max ~10 words, omit if none]]`
- **KEY POINTS / USP** (short bullets or chips): `[[point 1]]` · `[[point 2]]` · `[[point 3]]`
- **CTA** (button / highlighted): `[[CTA, e.g. "JOIN NOW" / "GET IT FREE"]]`
- **PERIOD / DATE**: `[[e.g. "EVENT: 01/07 – 14/07"]]`

### Brand marks (keep this area clean, do not distort logos)
- **"Lineage II"** logo — [[placement: top-left (standard 1:1) / top-center (hero showcase) / center (cinematic landscape)]]
- **Partner mark "VNGGAMES x NC"** — [[placement: top-right (standard) / top-center (showcase) / bottom-center (cinematic)]]

### Art direction — BE CREATIVE HERE
- **Palette / tone:** [[per event tone — purple/violet hall = class reveal · red/maroon = siege/PvP · fire/gold = power/combat · gold castle light = system/cosmetic · sand/ruins = dungeon · near-black = info/mechanic]]
- **Lighting:** cinematic, dramatic rim light, strong depth, volumetric atmosphere.
- **Effects:** [[event-appropriate — energy aura, embers, magical particles, glow on weapon/item]].
- **Mood:** [[epic / heroic / mysterious / festive / ominous]].
- **Style:** high-detail digital painting, dark-fantasy, premium mobile-game key-art.

### Creative latitude (explicit)
Elevate the composition, lighting, particle effects, and background depth to make this as cinematic
and appealing as possible. You have full creative freedom on art and mood **as long as**: (1) the
uploaded assets stay faithful, (2) every text string is rendered exactly as written above, and
(3) the brand marks are placed as specified. Surprise me with the polish.

## ═══════════════════════════════ end of prompt ═══════════════════════════════

---

## ITERATION CHEAT-SHEET (refining with ChatGPT after first render)
Tell ChatGPT to change ONE thing and keep the rest — it preserves better that way:
- **Text wrong:** "Keep the entire image identical, only fix the text to read EXACTLY: `...`"
- **Hero too small:** "Keep everything, make the main character ~30% larger and more dominant."
- **Logo off:** "Keep everything, move the Lineage II logo to the top-left corner, smaller."
- **Mood:** "Keep composition and text, push the lighting darker / more golden / more dramatic."
- **Asset drift:** "The character's armor changed — restore it to match the uploaded Image 1 exactly."
- **Ratio variant:** "Re-render the same banner at 16:9, keep all elements." *(or use generative expand)*

> Golden rule for iteration: change one variable per turn, always re-state "keep everything else."

---

## DESIGNER HANDOFF — VN↔EN COPY TABLE (Claude fills, designer localizes)
The rendered banner shows **English** text. Designer swaps to the real localized copy below.

| Slot | EN (rendered by ChatGPT) | VN (final — from brief) | TH / ID (if shipping) |
|------|--------------------------|--------------------------|------------------------|
| Headline | [[EN]] | [[VN]] | [[—]] |
| Subhead | [[EN]] | [[VN]] | [[—]] |
| USP / Key points | [[EN]] | [[VN]] | [[—]] |
| CTA | [[EN]] | [[VN]] | [[—]] |
| Period/Date | [[EN]] | [[VN]] | [[—]] |

> Designer keeps the ChatGPT render as the visual master; replaces only the text layer with the VN
> column (correct diacritics) using the project font. Claude content-crosschecks the final VN against
> the original brief before delivery.

---

## ─────────── WORKED EXAMPLE (illustrative — Sales / Hero Reveal, Type G) ───────────
> Shows the template filled. Not a real event — replace with the actual brief.

**ASPECT RATIO:** 1:1 square.

Uploaded images:
- Image 1 — hero render of the new class "Twin Blades": main subject, large, keep armor/blades/pose exact.
- Image 2 — style reference: match its violet dark-fantasy mood and rim lighting.

Composition — Type G (Hero Reveal): single dominant hero, lower-center, blades drawn; gold ornate
headline arcing across the top; deep violet hall fading into shadow behind; clean space mid-left for the CTA.

Text to render EXACTLY:
- HEADLINE: `TWIN BLADES`
- SUBHEAD: `The first dual-wield class in Lineage2M`
- KEY POINTS: `Faster combos` · `Higher crit` · `New skill tree`
- CTA: `PLAY NOW`
- PERIOD: `LIVE 01/07`

Brand: "Lineage II" logo top-left · "VNGGAMES x NC" top-right.

Art direction: violet/purple palette (class reveal), dramatic rim light on the hero, swirling magical
particles around the blades, epic and mysterious mood, premium dark-fantasy key-art.

Creative latitude: full freedom on lighting, particles, and background depth — keep the hero faithful,
text exact, logos placed.

→ Handoff VN: Headline "SONG KIẾM" · Subhead "Class song kiếm đầu tiên trong Lineage2M" ·
USP "Combo nhanh hơn / Bạo kích cao hơn / Cây kỹ năng mới" · CTA "CHƠI NGAY" · Period "RA MẮT 01/07".
