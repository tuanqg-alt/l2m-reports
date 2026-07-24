---
name: layout-infographic
description: >
  Parse event brief .docx/.xlsx/text -> classify Education/Sales -> tim "appeal magnet" ->
  map template type (G-W) -> write copy -> compose ONE ChatGPT image-gen prompt (all banners, one paste)
  -> deliver + VN handoff -> cross-check.
  Hi-fi path (default) = ChatGPT (GPT-4o image). Low-fi fallback = zone-map HTML + PPTX (Claude-only).

  LUON dung skill nay khi nguoi dung:
  - Cung cap brief event (.docx/.xlsx/text) can lam banner
  - Yeu cau "lam banner", "tao layout", "lam prompt banner", "lam reference cho designer"
  - Can banner education (giai thich tinh nang) hoac sales (USP item/class/event)

  Workflow:
  PHASE 0 (Content Mapping): doc brief -> classify Edu/Sales -> tim appeal magnet -> map template -> propose (so banner = do phuc tap) -> confirm
  PHASE 1 (Copy Writing): viet copy — EN master cho ChatGPT, giu VN cho designer localize
  PHASE 2 (Output): 2A = ChatGPT one-paste prompt (hi-fi, default) | 2B = zone-map HTML + PPTX (low-fi)
  PHASE 3 (Review & Deliver): cross-check copy/term/so + EN↔VN handoff -> designer
---

# Layout Banner Skill v7.6
> Hi-fi path = **ChatGPT (GPT-4o image)** — thay Claude Design tu 2026-06-27 sau pilot Season Pass (~9/10).
> **⭐ v7.6 (19/07): them che do AUTO** — Claude TU lai Claude-in-Chrome -> ChatGPT (upload asset + paste prompt + generate + tai anh + tu cross-check). Che do MANUAL (TuanQG paste) giu lam fallback.
> Claude soan **1 prompt duy nhat** (all banners) -> [AUTO: Claude / MANUAL: TuanQG] upload asset + paste -> ChatGPT render -> Claude cross-check -> designer localize.
> Low-fi path = zone-map HTML + PPTX (Claude-only) cho brief gap / chi can cau truc. Canva MCP & Codex & Claude Design da bo.

---

## CHATGPT IMAGE-GEN PIPELINE (hi-fi — default path)

> ✅ Validated pilot: **Season Pass (Soccermon), 2026-06-27, ~9/10** — `outputs/2026-06-27_Season-Pass/`.
> Design doc day du: `reference/2026-06-27_chatgpt-pipeline_pilot-design.md` · Prompt template: `prompts/chatgpt-banner-prompt_TEMPLATE.md`.

**3 quyet dinh nen tang (TuanQG chot 2026-06-27):**
- **Text = English master** — ChatGPT render chu EN on dinh (ne loi font tieng Viet co dau); designer localize EN->VN/TH/ID. Moi prompt kem bang **VN<->EN handoff**.
- **ChatGPT thay Claude Design** lam duong hi-fi (T2/T3 cu bo).
- **Asset qua DROP-FOLDER (v7.6)** — TuanQG bo anh source vao `outputs/[event]/assets/` (danh so theo thu tu upload); che do **AUTO** = Claude doc + upload, che do **MANUAL** = TuanQG tu upload. Prompt luon MO TA vai tro tung anh theo dung thu tu.

**2 CHE DO chay prompt (v7.6):**
- **⭐ AUTO (mac dinh moi):** Claude tu lai **Claude-in-Chrome -> ChatGPT** (VNGGames, Instant/GPT-4o image) — upload asset tu drop-folder + paste prompt + generate + **tai anh** ve `outputs/[event]/` + **tu content-crosscheck** (doc anh render, soat chu/so/term) + iterate. Chi tiet §2A-AUTO. Tai dung co che da kiem chung o scope_b (Ngu Ba).
- **MANUAL (fallback):** Claude soan PROMPT (+ bang handoff) -> TuanQG paste + upload anh -> Claude content-crosscheck ban render. Dung khi Chrome/ChatGPT khong san hoac TuanQG muon tu chay.
- Ca 2 che do: designer localize EN->VN + polish o cuoi.

### Flow (v7.6)
1. TuanQG dua event rules (.docx/.xlsx/text) + bo asset vao `outputs/[event]/assets/`.
2. Claude: classify Edu/Sales -> tim **appeal magnet** -> map template type -> viet **EN master copy** (verify term) -> soan **ONE prompt** + bang VN<->EN.
3. **AUTO — Claude:** Claude-in-Chrome -> ChatGPT: upload asset + paste prompt -> render tuan tu ("next" moi banner) -> tai anh ve outputs/. *(MANUAL: TuanQG lam buoc nay.)*
4. Claude: **content-crosscheck** — doc anh da tai, soat text EN vs prompt + brief (dung chu/so/term; bat AI bia so) -> sai thi iterate "keep image, only fix text: ..." -> tai lai.
5. Designer: localize EN->VN + polish (title ornate, hero drama) -> ship.

### Nguyen tac LOCKED vs FREE (mo khoa sang tao ChatGPT ma van kiem soat)
- 🔒 **LOCKED** (ChatGPT phai dung tuyet doi): text strings (render verbatim, dung chinh ta) · brand marks + vi tri · fidelity anh upload · aspect ratio.
- 🎨 **FREE** (khuyen khich sang tao): composition · lighting / rim light / depth · particle / FX · mood / polish.
- Prompt noi ro voi ChatGPT: "toan quyen sang tao art & mood **MIEN LA** (1) asset trung thuc, (2) text dung tung chu, (3) brand dung cho."

### Output = MOT prompt, nhieu banner (one-paste)
- Goi TAT CA banner vao **1 prompt**: phan **SHARED** (brand · style/tone · ratio · luat "render text EN dung tung chu" · vai tro anh upload) noi **1 LAN** o dau; roi tung banner (B1/B2…) co composition + text rieng; them dong "generate tuan tu, neu 1 anh/lan thi cho 'next'".
- File prompt luu `outputs/YYYY-MM-DD_[Event]/..._chatgpt-prompt.md` (kem upload checklist + iteration cheat-sheet + bang VN<->EN handoff + source cross-check).

### Quy tac noi dung (rut ra tu pilot Season Pass)
- **🎯 Appeal magnet first:** tim diem hap dan nhat cua event (World Boss / nhan vat moi / mascot / item signature — vd **Soccermon**) -> dat lam **hero/centerpiece** banner flagship. Manh moi co the nam o mission/mechanic, khong chi reward.
- **🔢 So banner = do phuc tap event:** event don gian -> **1 banner la du** (dung over-propose; Season Pass da rut 3->1). Chot so banner toi thieu voi TuanQG truoc khi soan prompt.
- **💰 Banner pass/reward/monetization:** LUON render **phi kich hoat / unlock** (vd "500,000 Adena") gan CTA + **highlight moc FINAL / grand-prize** (slot to, sang nhat) — day la hook manh nhat.
- ⚠️ **ChatGPT tu bia so:** no se dien so luong reward duoi tung icon neu khong khoa. Chi dua **so THAT** (total / final / cost); con lai de showcase KHONG so HOAC designer dien. **KHONG ship so AI bia.**
- ⚠️ **Bang dia (dense table):** ChatGPT KHONG render chuan bang nhieu dong (mission 10 dong, reward 19 tier) -> giu text NGAN (header + vai chip); bang chi tiet -> designer overlay hoac duong **2B zone-map**.

### Gate (banner KHONG qua RCA)
Claude content-crosscheck copy/term/so ban render + TuanQG duyet visual qua screenshot/render. RCA chi danh cho report so lieu.

---

## HAI DUONG OUTPUT — chon theo nhu cau

| Duong | Cach lam | Khi nao | Output |
|------|----------|---------|--------|
| **Hi-fi — ChatGPT** (default) | Claude soan one-paste prompt -> TuanQG upload asset + paste | Hero / sales / reveal / reward can appeal cao; co asset de upload | Anh render gan-final (EN text) -> designer localize |
| **Low-fi — Zone-map** (Phase 2B) | Claude generate HTML ref + PPTX | Brief gap / chua co asset / chi can designer hieu cau truc / banner toan bang du lieu day | Khung layout + chu gach dau dong (KHONG art that) |

---

## HAI LOAI BANNER

### Education Banner
**Muc dich:** Giai thich tinh nang moi / co che game cho nguoi dung hieu va dung duoc.
**Trigger:** Tinh nang moi, co che phuc tap, system thay doi, huong dan su dung.
**Cau truc message:**
```
[Ten tinh nang] (ngan gon, de nho)
  ↓
Tinh nang nay lam gi?   (1 cau, don gian nhat co the)
  ↓
Nguoi choi duoc gi?     (loi ich thuc te, khong phai mo ta ky thuat)
  ↓
Cach bat dau           (optional: 1-2 buoc hanh dong)
```
**Layout style:** Infographic-style, step-based hoac feature-highlight. Zone ro rang cho icon/visual minh hoa. Khong can hero shot.

---

### Sales Banner
**Muc dich:** Thu hut nguoi choi mua / tham gia / nhan / su dung noi dung moi.
**Trigger:** Class moi, Agathion moi, Item moi, Event, Package nap.
**Cau truc message:**
```
[Ten subject] (ngan, manh, goi cam)
  ↓
USP 1: Dieu dac biet nhat      (so sanh, suc manh, diem khac biet)
USP 2: Loi ich ro rang nhat    (nguoi choi duoc gi cu the)
USP 3: FOMO/Excitement trigger (gioi han thoi gian / so luong / doc quyen)
  ↓
CTA                            (hanh dong ro rang: "Tham gia ngay", "Nhan ngay", "Su dung ngay")
```
**Layout style:** Hero zone lớn (placeholder cho asset L2M) + copy stack ben canh hoac ben duoi. Headline lớn, USP ngan, CTA noi bat.

---

## REAL BANNER TEMPLATE LIBRARY (confirmed tu 109 banner VN, 2026-07)
> Nguon: pilot+T6 (20 banner) + T3/T4 (36 banner) + **T5 (30 banner: 30.04/01.05/04.05/05.05/06.05/11.05/14.05/15.05/16.05/18.05/19.05/22.05/23.05 — period Ky Niem 1 Nam)** + **T6-IH (7 banner: IH_09-12.06) + T7 July (16 banner: 25.06 Haven of Dusk x7 / 26.06 Lien Minh x5 / 27.06 Agathion x3 / 29.06 Season Pass)** = **109 banner**.
> Chi tiet phan tich: `00_Misc-Outputs/2026-06-17_banner-pattern-learning_pilot.md` (pilot · T3/T4 · T5) + `00_Misc-Outputs/2026-07-05_banner-pattern-learning_T6-IH-T7.md` (IH June + July, Source A file production). Dung lam reference khi propose layout (Phase 0 Buoc 4) va soan prompt/generate (Phase 2).
> T5 da chot: +V/+W type moi · P/T fold thanh variant · branding RESOLVED · U->MEDIUM, K->HIGH.
> T7 da chot (2026-07-05, Source A production): **O/R/U -> HIGH** (moi type >=2-3 mau that) · R mo rong scope sang **mount + agathion/companion** · N phu "boss + named-loot grid" (cap Thanatos/Rahha) · candidate archetype "New Game Mode Launch" (Haven of Dusk, n=1 watch-list) · cross-market rule v7.3 tai xac nhan (26.06_3 four-market: art giong het, chi khac ngon ngu + wordmark).
> **⚠️ v7.3 (2026-07-04) — ROLL BACK toan bo "SGMY cross-market" cua v7.1/v7.2.** Pilot chung minh creative **VN ≡ SGMY** (cung nguon SX + NC duyet, chi khac ngon ngu + wordmark) → SGMY KHONG phai corpus doc lap. Thu vien (tai v7.3) = **86 banner VN**; v7.4 nang len **109** bang production T6-IH + T7 (xem dong tren). Chi tiet: §"SGMY cross-market — DA ROLL BACK" ben duoi.

### Template Types (G-W) — 15 type chinh + 2 variant (P, T da fold)
> 2 nhom: **HYPE/EVENT** (G-N: nhan vat + showcase) · **UTILITY/INFO** (O-W: du lieu + huong dan/digest/package, it/khong nhan vat).

| Type | Ten | Nhom | Dau hieu nhan biet | Conf |
|------|-----|------|--------------------|------|
| **G** | Hero / Feature Reveal | Hype | 1-2 nhan vat HOAC screenshot/graphic lam hero, title gold H1, BG theo tone; **khong** date/dense-table | HIGH |
| **H** | Feature Overview | Hype | 3 nhan vat/cot hang ngang + feature box/chip (2x2 grid hoac row) | HIGH |
| **I** | Feature / Skill Intro | Hype | 1 nhan vat/feature lon + 1-2 screenshot + icon/bullet row | HIGH |
| **J** | System / Skill Detail | Hype | 2 nhom/cot canh nhau + 2 screenshot/portrait + desc (chip Chu Dong/Bi Dong) | HIGH |
| **K** | Stat / Buff Panel | Hype | Icon/emblem lon + stat box; bien the "A > B", grid emblem 2x2, hoac hero+stat panel | HIGH |
| **L** | Event CTA | Hype | 2 nhan vat flanking / VS pose / center key-graphic + date/deadline + opt CTA button | HIGH |
| **M** | Mechanic / Shop / Craft | Hype | Cong thuc doi/che/upgrade (A->B->result) hoac 1:1 exchange, Codex box, nhan vat trang tri | HIGH |
| **N** | Content Announcement | Announce | Screenshot/boss trong frame lam hero + info chip + name/time badge | HIGH |
| **O** | Info / Rules Panel | Utility | Date + section header + panel du lieu cau truc + caveat box, no char | HIGH |
| **Q** | Numbered Steps / How-to | Utility | List danh so 1-2-3(-4): so lon + ten + desc (row hoac 2x2 grid) | HIGH |
| **R** | Roster | Showcase | N card/portrait hang ngang: ten + role/skill + emblem — **char / boss / mount / agathion-companion**; OPTIONAL trong class-reveal | HIGH |
| **S** | Reward Showcase / Distribution | Reward | Showcase item/chest (frame/fan/grid/calendar) + "Cach Nhan" flow + opt date/caveat | HIGH |
| **U** | Map / Diagram Guide | Utility | Ban do/so do annotated + label vung + screenshot (vd me cung Haven, ban do Aden, so do Phi Thuyen Lien Minh) | HIGH |
| **V** | Event Digest / Multi-event Preview | Utility | Header su kien + nhieu panel event co date + grid reward gop (aggregate >=2 event) | LOW-MED |
| **W** | Package / Monetization Showcase | Reward | Showcase goi mua/subscription + benefits + reward + gia/CTA mua | LOW-MED |
| ~~P~~ | (fold) Comparison Table | variant cua O | 2 bang so lieu canh nhau -> 1 quyet dinh (vd phi chuyen server). KHONG con type rieng | fold |
| ~~T~~ | (fold) Entry List | variant list-doc | Dung trong N/R/S: row = thumbnail + icon + label + desc. KHONG con type rieng | fold |

> **⚠️ NGOAI pham vi G-W — "Community Engagement / Poll" (candidate, n=2, phat hien 2026-07-05):** trong folder production co **social post dat cau hoi tuong tac** (KHONG event/feature/sale): vd `23.06` "If You Could Reboot ONE Class — which one you choose?" (wheel 9 class emblem + "?") · `25.06` "What if you had UNLIMITED ADENA for 24 HOURS?" (nhan vat + cau hoi). Dac diem: cau hoi tu-van + visual toi gian, **khong date/reward/CTA-mua**, muc dich = keo comment tren social. **EN + wordmark NCV GAMES×NC (non-VN market)** → KHONG tinh vao corpus 109 VN. **Da chot (TuanQG, 2026-07-05): GIU loai nay TRONG skill Area 01**, la category RIENG ngoai thu vien event-banner G-W — spec ngay duoi.

### 📣 Community Engagement / Poll (ngoai G-W — chot 2026-07-05)
> Post social dat cau hoi tuong tac. **Muc dich = keo comment/engagement**, KHONG ban/thong bao event. Van do designer san xuat nen giu trong skill nay, nhung KHONG phai event banner → **track RIENG, KHONG cong vao corpus 109 event-banner VN**.
> - **Khi nao dung:** brief social/CMM muon post cau hoi ("neu ban co the...", "ban chon class nao"), khong gan event/date/reward cu the.
> - **Layout:** cau hoi LON lam trung tam (hero text) + visual toi gian (1 nhan vat / wheel emblem / icon) + wordmark. KHONG dung arc G-W · KHONG date/reward/CTA-mua · chua cho CTA comment ("Comment cau tra loi ben duoi!").
> - **Mau tham chieu (n=2, EN):** 23.06 "Reboot ONE Class?" (wheel 9 class emblem + "?") · 25.06 "Unlimited Adena 24h?" (nhan vat + cau hoi). Nguon: `00_Misc-Outputs/2026-07-05_banner-pattern-learning_T6-IH-T7.md` §6.
> - **Localize VN:** dich cau hoi sang VN, wordmark VNGGAMES × NC, giu art/layout.
> - **Confidence LOW** (n=2, chua co mau VN) — nang khi co them mau that.

### SGMY cross-market — ⚠️ DA ROLL BACK (v7.3, 2026-07-04)

> Ban v7.1/v7.2 tung them §"Cross-Market Validation" coi SGMY la thi truong doc lap validate/khac VN. **Pilot 2026-07-04 (tai anh full-res tu 2 page OFFICIAL: VN `lineage2mvng` 117K · SGMY `lineage2m.sgmy` 117K) chung minh SAI:** creative VN va SGMY **Y HET NHAU** (cung nguon san xuat, cung NC duyet) — chi khac **ngon ngu localize + wordmark publisher** (VN "VNGGAMES × NC" · SGMY "NCV GAMES × NC"). Bang chung: cap Catacomb "Clan Tier Max Rewards" giong het tung item/icon/so luong/bo cuc, chi dich chu.
> → **SGMY KHONG phai corpus doc lap** → khong dem rieng (so banner giu = **86 VN** tai v7.3; v7.4 = 109 sau khi hoc production T6-IH/T7), khong tinh "cross-market confidence", khong co "SGMY-specific subtype/use-case/ratio/branding". Moi refinement v7.1/v7.2 dua tren tien de sai **da go**.
> **Nguyen nhan sai:** so file production VN (class-reveal, 1 thoi diem) voi screenshot FB SGMY (thoi diem khac) + OCR rac. Chi tiet: `00_Misc-Outputs/2026-07-03_facebook-sgmy-pilot/_pilot-compare/2026-07-04_VN-vs-SGMY_identical-creative_pilot-finding.md`.
> **Con lai gia tri:** (1) pipeline "FB → tai anh full-res → doc bang Read" DA VALIDATE — dung de hoc banner tu corpus THAT sau nay; (2) luu y localization: lam banner da thi truong chi doi ngon ngu + wordmark, giu nguyen art/layout.

### Campaign Archetypes (6 dang - chon theo loai content)

| Archetype | Trigger | Arc tieu bieu | Quy mo |
|-----------|---------|--------------|--------|
| **Class/Weapon Reveal** | Class/vu khi moi (Song Kiem, No, Thuong) | G/H -> J(xN) -> [R neu >=3 char] -> L | ~6-8 banner, BG tim/lua. **R OPTIONAL** (chi khi class nhieu nhan vat) |
| **Castle Siege / Server Ops** | Cong thanh, chuyen server | O (lich/luat) + P-variant (so sanh) + Q (tips) + I (settings) + S (rewards) | Nhieu, utility, no hype char, BG do/maroon |
| **Content/Dungeon Guide** | Dungeon/dao/raid moi (Dao Co Dai, Zepar) | N + N/S (boss loot) + M (exchange) + U (map) + S (zone reward) + R (boss lich) | ~6 khi LAUNCH; 1 (N) khi RE-RUN |
| **Small Event** | Event co mechanic (Tam Quoc, Ho Lao Quan) | G -> L/I -> M/J | 1-4 banner |
| **Single Announcement** | Boss return, deadline, dungeon moi | 1 banner N hoac L | 1 banner |
| **Anniversary / Milestone Wave** | Moc lon (Ky Niem 1 Nam) | CUM banner LE: G-landscape (hero) + S (reward) + V (digest) + W (membership) + S (login) + content guide | Nhieu, cluster (khong sequence chat), BG vang/gold |

> **⏳ Candidate archetype (watch-list, n=1) — "New Game Mode Launch":** che do choi MOI (vd **Haven of Dusk / Noi An Nau Hoang Hon** — PvPvE roguelike/escape, 25.06). Suite utility-heavy **G-landscape (hero) + O (rules) + Q (how-to) + U (map) + O (win-condition) + S (reward) + Q (tips)** — KHAC "Content/Dungeon Guide" o cho **khong mo bang N boss-reveal**, nang o rules/how-to/map. Can >=1 sample nua moi chot thanh archetype chinh thuc.
> **📝 Content/Dungeon Guide — bien the "boss + named-loot grid":** cap 10.06 (Thanatos "Chien Truong Co Dai" / Rahha "Bien Cuong Aden") = template N khop (boss render + screenshot frame + luoi 6 item co ten). Dung khi content = san boss + loot huyen thoai.

### Universal Rules

**Branding placement (RESOLVED T5 - doi chieu cung-1-banner VN vs TH: GIONG het giua ngon ngu, bam theo LAYOUT):**
- **Standard 1:1** (info/feature/hero thuong): Lineage II logo **top-left** + partner mark **top-right** (2 goc doi).
- **Showcase / hero 1:1** (anniversary, big reveal): logo + partner **cung top-center**.
- **Cinematic landscape** (key-art rong): logo **center** + partner **center / bottom-center** (duoi title/date).
- => "Bottom-center" o set 10.03 cu = treatment cinematic-landscape, KHONG phai khac biet TH-vs-VN (da resolve). Partner mark = **VNGGAMES x NC**.
- **🌐 Localization (da thi truong):** creative GIONG HET giua cac thi truong (cung nguon SX + NC duyet); chi doi **wordmark publisher** — VN **VNGGAMES × NC**, cac market khac (EN/ID/TH/SGMY) **NCV GAMES × NC** — va **ngon ngu**. Giu nguyen art/layout/vi tri branding. (Tai xac nhan 2026-07-05 tren production June: `26.06_3` four-market EN/ID/TH/VN — art/icon/bo cuc identical, chi khac chu + wordmark. Xem note ROLL BACK §REAL BANNER TEMPLATE LIBRARY.)

**Background theo tone event:**
- Do/maroon + xich -> Castle Siege / PvP / clan war
- Tim/violet hall -> class/skill reveal
- Lua/vang -> class conversion teaser, combat/power
- Vang/castle light -> system/cosmetic update
- Cat/ruins -> dungeon/dao content (Dao Co Dai)
- Near-black (no fire) -> detail/mechanic/info slide (moi event)

**Typography:** H1 gold/amber ornate, max 4 tu dong dau · date `DD/MM ~ DD/MM` hoac `Den 23:59 ngay DD/MM` · section header co ornament divider.

**Format/Size (verify bang PIL tren corpus 109 banner):**
- **1:1 vuong ap dao**: 1200x1200 standard · 1000x1000 (guide text/UI-heavy) · 1080x1080 (teaser).
- **Landscape phuc vu 2 muc dich:** (1) cinematic hero key-art (1920x1280 + crop 2:1 1200x600, multi-ratio cung 1 creative — vd 11.05 Anniversary); (2) layout reward/calendar dan ngang (1200x800 — vd 06.05 Ve Vang theo ngay). Khong gan cung 1 template — theo mat do noi dung + vai tro.
- **1:1 verify 1200×1200** (JS) — xac nhan lai qua pilot 2026-07-04 tren nhieu banner (Catacomb, Maintenance...).

---

## PHASE 0 — CONTENT MAPPING

**Trigger:** Nguoi dung gui file brief (Word .docx / Excel .xlsx / text chi tiet).
> Khong can NLM trung gian. Doc truc tiep file full → map → propose.

### Buoc 1 — Doc toan bo brief

- **.docx:** Dung docx skill doc full content. Chap nhan file multi-section (event overview + mechanic + reward table).
- **.xlsx:** Doc tung sheet lien quan — thuong co sheet Event Info, Reward, Schedule.
- Giu lai: ten event, ngay/deadline, ten boss/class/item, cong thuc mechanic (neu co), reward list, **phi kich hoat / gia (neu pass/package)**.

### Buoc 1b — Tim "appeal magnet" (BAT BUOC)

Xac dinh **diem hap dan nhat** cua event: World Boss dac trung / nhan vat moi / mascot / item signature (vd Season Pass thang 7 = **World Boss "Soccermon"**). Day se la **hero/visual centerpiece** banner flagship. Manh moi nam ca trong phan mission/mechanic, khong chi reward. KHONG de no thanh chi tiet phu.

### Buoc 2 — Map noi dung → Template type

Doi chieu voi REAL BANNER TEMPLATE LIBRARY + Campaign Archetypes (section tren).
> ⚠️ Arc chi tiet = canonical o bang **Campaign Archetypes** (tren). Bang duoi chi la entry-point content → archetype/type (tranh 2 nguon le nhau).

| Content type | Archetype / Template arc |
|---|---|
| Class reveal / hero moi | **Class/Weapon Reveal**: G/H → J(×N) → R (neu ≥3 char) → L (~6–8 slot) |
| System update (Thang Cap, Lien Ket...) | G (light bg) → I → J (3 slot) |
| Event co mechanic (quest → shop) | G → L → M (3 slot) |
| Boss / dungeon return | N (1 slot) |
| Limited-time reminder / deadline | L (1 slot) |
| PvE dungeon event (VS, battle) | L-VS → I → M → K (4 slot) |
| Castle Siege / chuyen server (ops) | **Castle Siege/Server Ops**: O + P-variant + Q + I + S (utility, nhieu slot) |
| Dungeon/dao content guide (LAUNCH) | N + N/S + M + U + S + R (~6 slot) |
| Reward distribution (lord/member) | S (showcase item/chest + Cach Nhan flow) |
| Su kien tong hop / nhieu event 1 dot | **Anniversary/Milestone Wave**: G-landscape + S + V + W + S + guide (cluster) |
| Goi nap / membership / package / pass | W (package showcase + benefits + **phi/CTA mua** + highlight final reward) |

### Buoc 3 — Xac nhan detail con thieu

Truoc khi propose, kiem tra du:
- [ ] Ten event (VN)
- [ ] Ngay mo / deadline
- [ ] Ten nhan vat / boss / item chinh (+ appeal magnet)
- [ ] Cong thuc mechanic (neu batch co template M)
- [ ] Boss name + thu + gio (neu batch co template N)
- [ ] Phi kich hoat / gia + final/grand reward (neu pass/package/reward)

Neu thieu → hoi user, khong tu dien.

### Buoc 4 — Present Banner Proposal (phai confirm truoc khi lam Phase 1)

> **So banner = do phuc tap event.** Event don gian -> **1 banner du**, dung over-propose. Flagship center vao appeal magnet.

```
BANNER PROPOSAL — [Ten patch/update]
=====================================
Tong so banner de xuat: [N]   (don gian = 1)
Appeal magnet: [boss/nhan vat/item lam hero]
=====================================
[Banner 1] "[Ten banner]" · TYPE: [Education / Sales]
  Subject:    [Ten tinh nang / item]
  Message:    [1-2 cau tom tat message chinh]
  Key points: [Headline du kien + 2-3 points]
  CTA:        [Neu Sales: CTA du kien]
  Layout:     [Mo ta ngan: e.g. "hero key-art + reward showcase"]
  Ratio:      [1:1 / 4:5 / 16:9]
-------------------------------------
[Banner 2] ...
=====================================
BO QUA:
  - [Noi dung] — Ly do: [fix bug / dieu chinh nho / khong co banner potential]
=====================================
Confirm de toi viet copy + soan prompt?
```

Chi chuyen sang Phase 1 sau khi user confirm.

---

## PHASE 1 — COPY WRITING

> **EN master cho ChatGPT, giu VN cho designer.** Cac vi du VN duoi day la chuan giong dieu/do dai; voi duong hi-fi ChatGPT -> viet ban **EN tuong duong** de render, va luu CA HAI (EN + VN) trong **bang handoff** de designer localize. Term game verify qua Glossary KB (luu y: KB la KR↔VN, chua co chieu EN -> term EN quan trong cho TuanQG xac nhan 1 lan hoac lay theo naming L2M Global).

### Copy template — Education Banner

```
HEADLINE:    [Ten tinh nang] — [Loi ich ngan] (max 8 tu)
              Vi du: "Khắc Ấn Tâm Linh — Tăng sức mạnh theo thời gian thực"

SUBHEAD:     [Mo ta 1 cau don gian] (max 15 tu)
              Vi du: "Trang bị Khắc Ấn, nhận buff tự động mỗi khi giết quái"

KEY POINTS:  [2-3 bullet, moi bullet max 8 tu]
              • [Cach hoat dong — co the lam gi]
              • [Dieu kien hoac cach mo khoa]
              • [Meo / loi khuyen thuc te — optional]

VISUAL NOTE: [Goi y cho designer: e.g. "icon Khắc Ấn + skill effect glow tím"]
```

### Copy template — Sales Banner

```
HEADLINE:    [Ten subject MANH] (max 6 tu, goi cam xuc)
              Vi du: "THẦN THƯƠNG PHỤC SINH" / "AGATHION RỒNG LỬA — RA MẮT"

TAGLINE:     [1 cau ban chat / dac biet nhat] (max 12 tu)
              Vi du: "Class đầu tiên sở hữu Hệ Tâm Linh trong lịch sử L2M"

USP 1:       [Suc manh / kha nang dac biet — ngan, manh] (max 8 tu)
USP 2:       [Loi ich thuc te / so sanh voi truoc] (max 8 tu)
USP 3:       [FOMO: gioi han / su kien / bonus neu co] (max 8 tu)

CTA:         [Hanh dong ro rang + urgency neu co]
              Vi du: "Nhận ngay từ 10/5" / "Tham gia sự kiện hôm nay"

VISUAL NOTE: [Goi y cho designer: asset nao dung, tone mau, ki tu chinh]
```

### Nguyen tac copy

- **EN master cho ChatGPT** (render on dinh) — giu VN trong bang handoff cho designer localize
- **Giu chuoi NGAN** — headline/CTA uu tien pixel-clean; >6-8 tu/dong = de loi render (ke ca EN)
- **Khong dung jargon ky thuat** — "Hệ số sát thương PvE tăng 12%" → "Đánh boss mạnh hơn 12%"
- **Sales USP phai co con so hoac so sanh** khi patch note cung cap
- **Education key points phai hanh dong duoc** (nguoi choi biet phai lam gi)
- **Chi dua so THAT** vao prompt (total/final/cost) — dung de ChatGPT tu bia so luong reward

---

## PHASE 2 — OUTPUT

### 2A-AUTO — Claude tu lai Chrome -> ChatGPT (⭐ mac dinh moi, v7.6)

**Muc dich:** Claude tu chay het khau render — khong can TuanQG thao tac. Tai dung co che Chrome->ChatGPT da kiem chung o scope_b (Ngu Ba 6/6).

**Chuan bi:** prompt EN da soan (Phase 1) + asset trong `outputs/[event]/assets/` danh so dung thu tu upload (khop "vai tro tung anh" trong prompt).

**Cac buoc (Claude-in-Chrome):**
1. Load tool Claude-in-Chrome (ToolSearch) -> `list_connected_browsers` -> `select_browser` -> `tabs_context`.
2. `navigate` https://chatgpt.com (VNGGames da login, model **Instant / GPT-4o image**). Mo **chat moi** cho moi lo banner.
3. Upload asset (`file_upload`) theo dung thu tu. ⚠️ **>=7 anh doi khi loi "error on my side"** -> retry ngay trong cung chat (ref con do).
4. Click o nhap -> `type` prompt **1 dong** (khong xuong dong keo gui som). ⚠️ **Go khong vao o** (chi 1 gach) -> click lai o + Ctrl+A + Delete + go lai; **LUON screenshot xac nhan co chu** truoc khi gui.
5. Click nut gui. ⚠️ **Nut Gui tut xuong** sau khi khung gian -> screenshot lai roi click toa do moi.
6. Cho ~40-90s/banner. Neu ChatGPT ra 1 anh/lan -> `type` "next" cho tung banner con lai.
7. Tai tung banner: click anh -> modal Share/lightbox -> **Download** -> luu `outputs/[event]/YYYY-MM-DD_[Event]_B[N].png`.
8. -> chuyen **Phase 3 AUTO cross-check** (soat chu render + iterate).

> ⚠️ Khac scope_b: banner **de ChatGPT ve chu EN** (khong overlay Python) -> khau **soat chu render + iterate** (Phase 3) la BAT BUOC (chu EN de sai chinh ta/so).
> **Fallback -> 2A-MANUAL** neu: browser khong connect · account ChatGPT bi chan · TuanQG muon tu chay.

### 2A-MANUAL — ChatGPT prompt (TuanQG paste — fallback)

**Muc dich:** 1 prompt TuanQG paste vao ChatGPT (kem upload anh) -> render banner gan-final.

**Cach lam:** dung template `prompts/chatgpt-banner-prompt_TEMPLATE.md`. Fill cac slot tu rules:
1. **SHARED block (noi 1 lan):** ROLE (L2M dark-fantasy key-art) · aspect ratio · luat "render text EN dung tung chu" · brand marks + vi tri (theo Universal Rules) · vai tro tung anh upload.
2. **Per-banner block:** composition theo **template type** (G-W) + **text strings render EXACTLY** (EN, ngan) + art direction (palette theo BG-tone, lighting, FX — khoi FREE) + creative latitude.
3. **Sequencing line** (neu >1 banner): "generate tuan tu, neu 1 anh/lan thi cho 'next'".
4. **LOCKED vs FREE** ro rang. **Pass/reward:** show phi unlock + highlight FINAL reward; KHONG de AI bia so icon.
5. Luu file `outputs/YYYY-MM-DD_[Event]/..._chatgpt-prompt.md` + upload checklist + iteration cheat-sheet + **bang VN<->EN handoff** + source cross-check.

**Iteration (mach TuanQG):** doi 1 thu/lan, luon "keep everything else" — vd "Keep the image identical, only fix the text to read EXACTLY: ...".

### 2B — Zone-map HTML + PPTX (low-fi, fallback)

> Dung khi: brief gap / chua co asset / chi can designer hieu cau truc / banner toan bang du lieu day.

**Output 1 — HTML Reference.** Designer mo browser xem layout zone, hierarchy text, vi tri placeholder asset.
- Nen toi (dark fantasy L2M tone): `#0d0d1a` hoac tuong duong
- Headline: mau vang gold `#f5c842`, font-size lon nhat
- Subhead + body: mau trang `#ffffff` hoac `#d4d4d4`
- Placeholder zone cho asset: box co nét gach bo, nhan ro "[ ASSET: ten asset ]"
- Kich thuoc canvas: tuong ung ratio (1:1 = 800x800px, 16:9 = 1200x675px, 4:5 = 800x1000px)
- Annotation nho o goc: "REFERENCE DRAFT — designer swap asset vao"

**Education layout zones:**
```
+---------------------------+
|  [ HEADLINE ]             |
|  [ SUBHEAD ]              |
+---------------------------+
|  [ ASSET PLACEHOLDER ]    |  ← box gach bo, nhan asset
+---------------------------+
|  • KEY POINT 1            |
|  • KEY POINT 2            |
|  • KEY POINT 3            |
+---------------------------+
|  [ VISUAL NOTE nho ]      |
+---------------------------+
```

**Sales layout zones:**
```
+-------------+-------------+
|             |  HEADLINE   |
|   [ ASSET   |  TAGLINE    |
|    HERO     |             |
|  PLACEHOLDER|  • USP 1    |
|    ZONE ]   |  • USP 2    |
|             |  • USP 3    |
|             |             |
|             |  [ CTA ]    |
+-------------+-------------+
```

**Output 2 — PPTX Layout.** Designer mo PowerPoint, edit text truc tiep, swap asset vao placeholder shape.
- Dung pptx skill · 1 slide = 1 banner · Background dark (#0d0d1a hoac navy)
- Text boxes: vi tri tuong ung HTML reference
- Placeholder shape: rectangle border gach, fill trong suot, text = "[ ASSET: ten asset ]"
- Kich thuoc slide: 1:1 = 20x20cm, 16:9 = default PPT, 4:5 = 20x25cm

**Thu tu (2B):** HTML ref tat ca banner -> present cho user review -> chinh den khi OK -> PPTX 1 file (moi slide = 1 banner).

---

## PHASE 3 — REVIEW & DELIVER

### User review + AUTO cross-check (v7.6)

- **AUTO (Claude tu soat):** Claude **doc tung banner da tai** (Read thay PNG) -> content-crosscheck: text EN dung **chinh ta / so / term** vs prompt? brand marks dung cho? asset fidelity? aspect ratio? -> **sai thi iterate ngay trong chat**: "keep the image identical, only fix the text to read EXACTLY: ..." -> tai lai -> chi ban PASS moi giao -> present TuanQG duyet visual.
- **MANUAL:** TuanQG test ChatGPT -> gui ban render -> Claude content-crosscheck text/term/so -> chinh prompt neu can.
- **Low-fi:** "Copy co can chinh gi khong?" / "Layout zone co dung khong?" -> chinh -> generate lai.

### Designer Handoff Note

```
DESIGNER HANDOFF — [Ten patch/update] — [Education / Sales]
=============================================================
Ngay tao: [date] | Tool: ChatGPT prompt (hi-fi) hoac HTML+PPTX (low-fi) | SKILL.md v7.0
=============================================================
[Banner N] — [Ten banner] · [Education / Sales]
-------------------------------------------------------------
COPY — bang VN<->EN (EN = ban render; VN = ban localize chinh thuc):
  Headline:   EN "..."  | VN "..."
  Subhead:    EN "..."  | VN "..."
  Key/USP:    EN "..."  | VN "..."
  CTA:        EN "..."  | VN "..."
  Period:     [DD/MM - DD/MM]

VISUAL DIRECTION (designer thay vao):
  Appeal magnet:  [hero/boss/nhan vat chinh]
  Main asset:     [ten asset L2M can dung]
  Tone mau:       [e.g. "tim huyen bi + vang gold"]
  Tier color:     [neu co — Legend=tim #8040C0 / Epic=do #C02020 / Unique=lam #2860C0]
  Giu nguyen:     [bo cuc, brand placement]
  Thay the:       [text EN -> VN; so icon AI bia -> reward THAT hoac showcase khong so]

FILES:
  ChatGPT prompt: outputs/[Event]/[filename]_chatgpt-prompt.md
  (hoac) HTML/PPTX: outputs/[filename]_ref.html / _layout.pptx
=============================================================
```

---

## ADOBE MCP — POST-PROCESSING (OPTIONAL)

> ⚠️ Yeu cau **Adobe MCP connector** (verify da connect tren may dang dung). ChatGPT da bao phu phan lon composite/style; section nay chi dung khi can thao tac pixel chuyen sau NGOAI ChatGPT (vd tach nen de composite vao layout designer, mo rong canvas sang ratio khac).

Chi dung khi designer hoac user yeu cau xu ly them sau khi co anh:

| Nhu cau | Adobe MCP tool |
|---------|---------------|
| Tach nhan vat khoi nen (de composite) | `image_remove_background` |
| Chinh mau ve L2M dark fantasy tone | `image_adjust_hsl` + `image_adjust_brightness_and_contrast` |
| Them color overlay theo tier color | `image_apply_color_overlay` |
| Mo rong canvas (e.g. 1:1 → 16:9) | `image_generative_expand` |
| Fix vung anh loi / thieu | `image_fill_area` |
| Tim reference image tren Adobe Stock | `asset_search` (entityScope: StockAsset, pricing: free) |

**Bat buoc goi `adobe_mandatory_init` truoc khi dung bat ky Adobe tool nao.**

---

## OUTPUT NAMING CONVENTION

Moi event/campaign co subfolder rieng trong outputs/:

```
outputs/
├── YYYY-MM-DD_[EventName]/          ← 1 subfolder per event
│   ├── YYYY-MM-DD_[EventName]_chatgpt-prompt.md          ← HI-FI: ChatGPT one-paste prompt (+ handoff)
│   ├── YYYY-MM-DD_[EventName]_B[N]_[Edu|Sales]_ref.html  ← LOW-FI: HTML reference (2B)
│   ├── YYYY-MM-DD_[EventName]_layout.pptx                 ← LOW-FI: PPTX layout (2B)
│   ├── YYYY-MM-DD_[EventName]_HANDOFF.md                  ← Handoff note (neu save rieng)
│   └── archive/                     ← version cu (neu co nhieu revision)
└── YYYY-MM-DD_[SingleFile]_layout.pptx   ← event chi co 1 file low-fi → giu flat

scripts/                             ← utility scripts (gen_layout.js, ...)
prompts/                             ← ChatGPT prompt template + saved prompts (.md)
README.md                            ← area overview
```

---

## ANTI-PATTERNS

| Van de | Nguyen nhan | Fix |
|--------|-------------|-----|
| Bo qua appeal magnet (banner nhat) | Khong tim hero/boss dac trung | Buoc 1b BAT BUOC: tim diem hap dan nhat -> lam centerpiece flagship |
| Over-propose banner cho event don gian | Khong bam do phuc tap | So banner = do phuc tap; don gian = 1 banner |
| ChatGPT render so reward bia | Khong khoa so trong prompt | Chi dua so THAT (total/final/cost); con lai showcase khong so / designer dien |
| Pass/package thieu phi + final reward | Quen 2 thong tin chuyen doi | LUON show phi unlock gan CTA + highlight FINAL/grand reward |
| Ep ChatGPT ve bang du lieu day | Sai gioi han render text | Giu text ngan; bang chi tiet -> designer overlay hoac duong 2B zone-map |
| Text tieng Viet co dau loi tren render | ChatGPT yeu font VN | Dung EN master; designer localize tu bang handoff |
| Copy sai/thieu/paraphrase | Khong paste full copy | Text render EXACTLY tu Phase 1, khong doi |
| Phase 0 bi bo qua | Muon lam nhanh | BAT BUOC confirm banner proposal truoc Phase 1 |

---

## Game Term Lookup

Khi viết copy banner cần verify tên skill, item, class, agathion, địa danh KR → VN:

```bash
cd 03_Glossary-Termbase/Claude_Glossary
python3 01_scripts/lookup_term.py "[KR term]"
# Ví dụ: python3 01_scripts/lookup_term.py "클래스 스킨"
```

> KB Final (`03_kb-final/glossary_kb_final_central.csv`) là nguồn chân lý — ưu tiên hơn memory hay assumption.
> ⚠️ KB la KR↔VN — chua co chieu EN. Voi EN master copy: term EN quan trong (class/skill/item) -> TuanQG xac nhan 1 lan hoac lay theo naming L2M Global, roi cache.

---

## Changelog

| Date | Ver | Changes |
|------|-----|---------|
| 2026-07-19 | 7.6 | **+Che do AUTO — Claude tu lai Chrome->ChatGPT** (upload asset drop-folder + paste prompt + generate + tai anh + tu cross-check + iterate), tai dung co che kiem chung o scope_b story-comic (Ngu Ba). Reframe **2 che do**: 2A-AUTO (mac dinh) / 2A-MANUAL (fallback). Asset qua **drop-folder** `outputs/[event]/assets/` (danh so thu tu upload). Phase 3 them **AUTO cross-check** (Claude doc anh render -> soat chu EN/so/term -> iterate "keep image, only fix text"). Gotcha Chrome (go khong vao o / nut Gui tut / >=7 anh loi) o §2A-AUTO. Khac scope_b: banner de ChatGPT ve chu EN nen soat-chu BAT BUOC. **Chua pilot** — TuanQG chay sau khi co brief+asset. |
| 2026-07-05 | 7.5 | **Chot scope "Community Engagement / Poll" — GIU trong Area 01** (TuanQG duyet 2026-07-05). Chuyen note "cho chot / co the Area 04" (§Template Library) thanh **category chinh thuc NGOAI thu vien event-banner G-W**: social post cau hoi tuong tac (poll), muc dich keo comment, KHONG event/date/reward/CTA-mua. **Track RIENG, KHONG cong vao 109 event-banner VN** (mau hien tai n=2 EN: 23.06 "Reboot ONE Class?" · 25.06 "Unlimited Adena 24h?"). +Mini-spec (khi nao dung / layout / localize VN / confidence LOW). Corpus event-banner giu **109 VN**. |
| 2026-07-05 | 7.4 | **Học batch T6-IH (June) + T7 (July) tu Source A file production** (`2026_T6`/`2026_T7`, ảnh render full-res, KHONG OCR). **+23 banner MOI** (IH_09-12.06 x7 + July x16: Haven of Dusk x7 / Lien Minh x5 / Agathion x3 / Season Pass x1) → cumulative **86 → 109 banner VN**. Da doi chieu overlap: 6 batch pilot (28.05-13.06 = bucket "20") KHONG double-count, doc lai = tai xac nhan (phan loai khop 100%). **Nang confidence (>=2-3 mau that): O MED→HIGH · R MED→HIGH · U MED→HIGH.** R **mo rong scope** → char/boss/**mount/agathion-companion** (Carus·Talos · Timitris/Matura/Enkura · Core Susceptor · 4-agathion row). N phu bien the **"boss + named-loot grid"** (cap Thanatos/Rahha, 10.06). **+Candidate archetype "New Game Mode Launch"** (Haven of Dusk PvPvE roguelike, n=1 watch-list — suite O/Q/U-heavy, khong boss-reveal). **Cross-market rule v7.3 TAI XAC NHAN** tren production June: `26.06_3` four-market EN/ID/TH/VN art identical, chi khac ngon ngu + wordmark (VN=VNGGAMES×NC · EN/ID/TH=NCV GAMES×NC). Type moi = 0 (G-W du phu). Landscape ratio tai xac nhan: 1920×960 · 1920×1080 · 2000×1000. **⚠️ AUDIT (re-check cung ngay):** phat hien folder `2026_T7/23.06` (2 file EN social-engagement "poll": "Reboot ONE class?" + "Unlimited Adena 24h?", wordmark NCV GAMES×NC) — **KHONG phai VN event banner → giu 109 VN**, ghi nhan candidate category "Community Engagement/Poll" (n=2, ngoai G-W, cho TuanQG chot scope). Bo qua dung: video `IH_08.06/RENDER*.mp4`, brief `June Operation Banners.pptx`, xlsx cost-quote, PSD source (T6-002). Doc: `00_Misc-Outputs/2026-07-05_banner-pattern-learning_T6-IH-T7.md`. |
| 2026-07-04 | 7.3 | **⚠️ ROLL BACK toan bo "SGMY cross-market" (v7.1 + v7.2).** Pilot 2026-07-04 (tai anh full-res tu 2 page OFFICIAL: VN `lineage2mvng` 117K · SGMY `lineage2m.sgmy` 117K, doc `_pilot-compare/2026-07-04_VN-vs-SGMY_identical-creative_pilot-finding.md`) chung minh creative **VN ≡ SGMY** (cung nguon SX + NC duyet) — chi khac ngon ngu + wordmark publisher. Bang chung: cap Catacomb "Clan Tier Max Rewards" giong het item/icon/so luong/bo cuc. → SGMY **KHONG** phai corpus doc lap. **Da go:** §Cross-Market Validation (thay bang note ROLL BACK) · count ve **86 VN** (bo "98") · W **MED→LOW-MED** (huy nang) · G sub-variant system-launch · R sub-variant stat-card · subtype S community-contest · candidate archetype watch-list · SGMY branding/ratio bullets. **Giu:** pipeline "FB→tai anh full-res→doc" (validated) + 1 note localization (wordmark theo thi truong). Nguyen nhan sai v7.1/v7.2: so file production VN (1 thoi diem) vs screenshot FB SGMY (thoi diem khac) + OCR rac. |
| 2026-07-04 | 7.2 | **SGMY-06 synthesis — dong cua so thu thap 3 thang (VN 86 + SGMY 12 = 98 banner).** ⚠️ SUPERSEDED boi v7.3 (roll back). Nguon: batch SGMY-06 (Albums/Cover + Featured tab) trong `banner-analysis_sgmy-batch.md`. **+1 cover Anniversary "Happy 1 Year Anniversary Lineage II" (2026-05-20)** → **G-landscape count 2->3** (use-case thu 3 = anniversary milestone; VN cung dung nhung SGMY chi 1 cover, khong wave). **+ratio landscape thu 4 = 1920x1080 (16:9)** (JS xac nhan) vao §Format/Size. **+branding placement thu 5 = bottom-left lockup** vao §Universal Rules (tong 5 placement SGMY → chot: SGMY chon branding theo mood/layout, khong cong thuc co dinh). **RESOLVE reconcile note Server Transfer:** tim o tab Featured (post 2026-03-20, NGOAI window → khong tinh bo dem), xac nhan nhan pilot **O+Q dung**; +cross-market confirm archetype "Castle Siege/Server Ops" (archetype-level, ngoai window). Type/subtype moi = 0 — gia tri = cung co G-landscape + dong cua so thu thap. |
| 2026-07-04 | 7.1 | ⚠️ SUPERSEDED boi v7.3 (roll back). **Cross-market validated (VN 86 + SGMY 11 = 97 banner).** Nguon: 6 batch SGMY-00->05 (facebook.com/lineage2m.sgmy, thu bang Sonnet + protocol F1-F5), doc `00_Misc-Outputs/2026-07-03_facebook-sgmy-pilot/banner-analysis_sgmy-batch.md`. **+§Cross-Market Validation** (bo dem confidence: S=5·N=2·K=1·G-landscape=2·O=1·W=1·R=1). **W LOW-MED -> MED** (validated 2 thi truong). Resolve 2 ⚑REVIEW (SGMY-05): "Awaken Your Power with Agathion" → **G-landscape sub-variant system-launch** (refine rule G: cho phep benefit box ≤2 o o landscape system-launch); "New Epic Agathion" → **R sub-variant stat-card comparison** (R mo rong sang card mang stat/skill sau). +subtype **S community-contest/UGC gift-card** (SGMY-04, 0 tien le VN). +2 **candidate archetype** watch-list (Companion/Collection System Launch · Community Contest, n=1). Branding: SGMY = "NCV GAMES × NC" (rebrand ~25/02/2026), placement da dang (top-right-only · bottom-center tren 1:1). Format +2000×1000 (2:1). |
| 2026-06-27 | 7.0 | **Hi-fi path: Claude Design → ChatGPT (GPT-4o image).** Pilot Season Pass (Soccermon) ~9/10 validated. 3 quyet dinh: EN master text · ChatGPT thay Claude Design · bo buoc asset (TuanQG upload thang). Nguyen tac **LOCKED vs FREE** · output **one-paste multi-banner** · quy tac noi dung (appeal-magnet-first · so banner = do phuc tap · pass/reward show phi+final · ChatGPT tu bia so · dense table -> designer/2B). Phase 2 tach 2A ChatGPT prompt (default) + 2B zone-map (fallback). Phase 0 +Buoc 1b appeal magnet. Phase 1 EN-master. Handoff +bang VN<->EN. Template: `prompts/chatgpt-banner-prompt_TEMPLATE.md`. Design doc: `reference/2026-06-27_chatgpt-pipeline_pilot-design.md`. |
| 2026-06-19 | 6.9 | **Pilot UC2 validated (batch 28.05 Tam Quoc).** 3 banner that chay qua Claude Design + design system v1.0 → reference gan-final **~8.5/10** (copy 100% khop, utility B2/B3 ~8.7 manh nhat, hero B1 ~8.0 can polish). Asset trich tu PSD (psd-tools). +2 cai tien: title ornate (design system v1.1 TODO) · hero scale prompt. Package `outputs/2026-06-19_TamQuoc-28.05-pilot/`. |
| 2026-06-19 | 6.8 | **UC2 pivot Codex -> Claude Design** (claude.ai/design): 3-tier (T1 zone-map / T2 prompt-only / T3 asset-grounded hi-fi); DESIGN PACKAGE (`DESIGN_PROMPT.md` + `assets/`) thay CODEX_BRIEF; handoff = export PPTX; **L2M Banner design system** tai dung (import 1 lan). **Audit fixes:** frontmatter (Phase 0 = Content Mapping, bo NLM); gop bang arc Phase 0 Buoc 2 ve Campaign Archetypes (single source, fix Class/Anniversary lech); Handoff Note v6.0->v6.8; '25 batches'->'86 banner'; Adobe MCP them caveat (can connector). Nguon: review session 06-19. |
| 2026-06-18 | 6.7 | **T5 expansion (30 VN banner / 13 batch, cumulative 86).** U LOW->MEDIUM (Zepar map 2nd), K MED->HIGH, N MED-HIGH->HIGH; **+V Event Digest, +W Package/Monetization** (type moi, TuanQG duyet); **P, T fold** thanh variant (P->O, T->list trong N/R/S). Branding RESOLVED (layout-driven, GIONG VN/TH; bottom-center = cinematic landscape; partner = VNGGAMES x NC). Format: landscape 2 muc dich. +Archetype #6 Anniversary/Milestone Wave; Class Reveal R optional. Nguon: pilot.md PART 3. |
| 2026-06-18 | 6.6 | **Template library 8 -> 15 types (G-U)** -- them O Info/Rules · P Comparison · Q Numbered-Steps · R Roster · S Reward-Showcase · T Entry-List · U Map-Guide tu T3/T4 analysis (36 banner, cumulative 56). Nang confidence H/J/M/N. Them 5 Campaign Archetypes + 3 row Phase 0 mapping. Sua rule: branding top-right = convention tu ~T4 (banner T3 dung bottom-center); format 1:1 vuong ap dao (verify PIL), landscape hiem. Nguon: pilot.md PART 2. |
| 2026-06-18 | 6.5 | **Phase 0 rewrite** — "Message Extraction" → "Content Mapping"; input moi = .docx/.xlsx full (bo NLM); Buoc 2 map content type → template arc; Buoc 3 checklist detail con thieu. |
| 2026-06-18 | 6.4 | **Them "REAL BANNER TEMPLATE LIBRARY"** — 7 template types (G/H/I/J/K/L/M/N) + universal rules tu cross-batch analysis 6 batches VN (20 banners). Campaign arc by size. BG color rule, branding placement, typography. Reference cho Phase 0 layout proposal + Phase 2 generate. |
| 2026-06-15 | 6.3 | **Them muc "UC2 — Codex hi-fi handoff"** (duong nang cap optional): flow 6 buoc Claude->Codex, EN master, tro template `00_Misc-Outputs/2026-06-15_codex-handoff_uc2-banner-template.md` + AGENTS.md. Workflow Claude-only ben duoi giu nguyen. |
| 2026-05-15 | 6.2 | Thêm section "Game Term Lookup" — reference Glossary KB Final (03_kb-final/glossary_kb_final.csv) cho verify game term khi viết copy. |
| 2026-05-12 | 6.1 | **Folder restructure.** outputs/ nay dung subfolder per event (YYYY-MM-DD_[EventName]/). Scripts → scripts/. Prompts → prompts/. README.md → area root. EternalBond v1/v2 → archive/. |
| 2026-05-10 | 6.0 | **REWRITE — Bo Canva MCP, chuyen sang HTML + PPTX.** Ly do: Canva MCP force 4 candidates, khong kiem soat duoc output. |
