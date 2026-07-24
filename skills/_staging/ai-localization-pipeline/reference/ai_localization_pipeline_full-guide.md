# AI Game Localization SOP — Multilingual v2.1.0

**Version:** 2.1.0  
**Last updated:** 2026-07-06  
**Owner:** Localization / PM / Glossary Owner  
**Derived from:** AI + Glossary + Human Review pipeline v1.0; SOP v2.0.1 pilot; AI Localization Project Review 2026-07-06  
**Applies to:** EN → VI, EN → TH, EN → ID, and future target locales for game live-ops localization  
**Primary content types:** patch notes, update notes, event notices, promotion notices, item/reward tables, skill/system guides, game news, CMS live-ops text  
**v2.1.0 upgrade focus:** Translation Memory, master glossary governance, automated terminology QA, automated placeholder QA, consistency audit, context metadata, UI length validation, and pilot metrics

---

## 0. One-page SOP summary

Use this SOP to run a controlled AI-assisted localization workflow:

> **Source + Context Metadata + Master Glossary + Style Guide + Translation Memory -> AI Draft A -> Automated QA Gate -> Controlled Style Audit A+ -> Automated Final QA Gate -> Human Review -> Final -> Update TM/Glossary/Style Guide/Metrics**

The goal is not to let AI freely rewrite game content. The goal is to use AI as a **pre-localization + pre-QA + pre-editing layer** that produces a clean A+ draft and a clear exception package for human review.



v2.1.0 adds production controls learned from the pilot optimization review:

| Control | Purpose | Blocking rule |
|---|---|---|
| Translation Memory (TM) reuse | Reuse approved segments and reduce repeated human edits. | Exact TM conflicts must be reported before A+. |
| Master glossary governance | Track status, version, deprecation, owner, and evidence. | `LOCKED` / `INGAME_LOCKED` conflicts cannot be silently resolved. |
| Automated placeholder QA | Preserve `{0}`, `%d`, tags, line breaks, and CMS variables. | Placeholder drift must be 0 before Final. |
| Automated terminology QA | Enforce locked terminology and forbidden variants. | `LOCKED` / `INGAME_LOCKED` compliance must be 100%. |
| Consistency audit | Detect same source -> different target, and term drift across files. | High-risk inconsistencies require owner/action before handoff. |
| Context + UI length metadata | Reduce wrong-context translations and UI overflow risk. | UI/CMS strings missing context are flagged, not guessed. |
| Pilot metrics log | Convert human review corrections into measurable process learning. | Every Final should feed TM, glossary, style guide, and metrics. |

The most important rule:

> AI may improve the translation, but AI must never become more confident while becoming less correct. Anything uncertain must be flagged for human decision.

---

## 1. Scope

### 1.1. Supported language pairs

Default supported source/target setup:

| Source language | Target language | Target locale | Glossary target column |
|---|---|---|---|
| EN | Vietnamese | vi-VN | `vn` or `vi` |
| EN | Thai | th-TH | `th` |
| EN | Indonesian | id-ID | `id` |

Future languages can be added if the glossary and language appendix exist.

### 1.2. Supported content

This SOP is optimized for:

- game patch notes;
- update notes;
- event notices;
- promotion/sale notices;
- item package tables;
- reward tables;
- skill/system guides;
- dungeon/raid/boss notices;
- maintenance notices;
- web/CMS live-ops content;
- repeated game terminology with high data risk.

### 1.3. Not recommended without extra review

Use additional human or source-owner review for:

- legal notices;
- refund/payment terms;
- app store descriptions;
- marketing slogans requiring creative copywriting;
- highly emotional community announcements;
- text with cultural/political/regulatory sensitivity;
- languages without a native reviewer.

### 1.4. SOP language note

This SOP is written for a Vietnamese-speaking localization team, with English section titles and Vietnamese prompt templates.

If this SOP is handed to a non-Vietnamese vendor or another AI system that does not reliably follow Vietnamese instructions, translate the prompt pack and runbook instructions into that operator language first. Preserve these items exactly during translation:

- variable names such as `{SOURCE_LANGUAGE}`, `{TARGET_LANGUAGE}`, `{GLOSSARY_TARGET_COLUMN}`;
- exception markers such as `[MISSING_GLOSSARY]`, `[DATA_RISK]`, `[INGAME_CHECK]`;
- glossary column names such as `en`, `vn`, `th`, `id`;
- file naming conventions and status labels.

---

## 2. Core principles

### 2.1. Source is the source of truth

The approved source file is the primary truth. AI must not change source facts, even when they look suspicious.

Locked data includes:

- numbers: `x 1`, `x 10`, `400`, `1,000`;
- percentages: `10%`, `+25%`;
- dates: `1 July 2026`, `15 July 2026`;
- times: `4:59 AM`, `22:00`, `5:00`;
- currencies: `$1.99`, `Adena x 100`, `Diamond x 800`;
- purchase limits: `once per account`, `10 times per week`;
- levels: `Lv. 70`, `Level 60`;
- durations: `14 hours per week`, `10 minutes`;
- reset schedules;
- item/skill/boss/NPC names;
- placeholders, tags, variables, symbols;
- table row/column structure.

If AI sees suspicious data, it must flag it instead of correcting it.

Example:

```text
[DATA_RISK] Sale period shows "1 July 2026 – 15 June 2026". End date may be earlier than start date. Please verify source/in-game.
```

### 2.2. Glossary is the terminology source of truth

If the glossary contains a term with status `LOCKED` or `INGAME_LOCKED`, AI must use the target term exactly as specified for the selected target language.

If the glossary sounds unnatural or appears to conflict with context, AI must not silently replace it. AI must keep the glossary term and report the issue.

Example:

```text
[GLOSSARY_CONFLICT] Source term: "Mirror of Return" | Glossary target: "..." | Context suggests another term | Need in-game/glossary owner check.
```

### 2.3. No pivot translation unless explicitly approved

For multilingual localization, always translate from the approved source language directly to the target language.

Correct:

```text
EN → TH
EN → ID
EN → VI
```

Not recommended unless PM explicitly approves:

```text
EN → VI → TH
EN → VI → ID
EN → TH → ID
```

Localized files in other languages may be used as reference only, not as the primary source of truth.

### 2.4. A+ is controlled style audit, not free rewrite

The A+ stage may improve readability, grammar, consistency and tone. It may not freely rewrite content or change locked data/terms.

AI may edit:

- awkward or literal phrasing;
- grammar;
- punctuation;
- spacing/casing;
- heading/bullet readability;
- consistency of table headers;
- repeated mechanical errors;
- style issues covered by the target language appendix.

AI must not edit without approval:

- numbers;
- dates/times;
- prices/currency;
- purchase limits;
- percentages;
- item/skill/boss/NPC names;
- locked glossary terms;
- reward list contents;
- table row/column counts;
- unresolved comments;
- unresolved markers;
- source meaning.

### 2.5. Human reviewer remains final owner

AI prepares the A+ draft and exception package. Human reviewer/PM/glossary owner still finalizes:

- in-game terminology;
- item/skill/boss/NPC names;
- glossary conflict decisions;
- source ambiguity;
- reward/promotion data;
- publish readiness;
- final style sign-off.

---

## 3. Required batch configuration

Every localization batch should start with a config block. This prevents ambiguity when the SOP is used by another team member, freelancer, vendor, or AI system.

### 3.1. Batch config template

```yaml
# Localization Batch Config

game: "{GAME_NAME}"
project_code: "{PROJECT_CODE}"
content_type: "{CONTENT_TYPE}" # patch_note | update_note | event | promotion | system_guide | news | CMS
source_language: "EN"
target_language: "{TARGET_LANGUAGE}" # VI | TH | ID | other
target_locale: "{TARGET_LOCALE}"
source_file: "{SOURCE_FILE}"
glossary_file: "{GLOSSARY_FILE}"
glossary_source_column: "en"
glossary_target_column: "{GLOSSARY_TARGET_COLUMN}"
style_guide_file: "styleguide_{TARGET_LANGUAGE}.md"
reference_files:
  - "{REFERENCE_FILE}"
ingame_reference_files:
  - "{INGAME_REFERENCE_FILE}"
translation_memory_file: "tm_{TARGET_LANGUAGE}.csv" # optional for early pilot, required for production reuse
context_metadata_file: "context_metadata_{BATCH_ID}.csv" # required for UI/CMS/string-level batches when available
ui_length_rules_file: "ui_length_rules.csv" # required for UI/CMS or short-string batches
forbidden_terms_file: "forbidden_terms_{TARGET_LANGUAGE}.csv"

rules:
  preserve_tables: true
  preserve_comments: true
  preserve_track_changes: true
  preserve_placeholders: true
  glossary_locked_required: true
  data_lock_required: true
  no_pivot_translation: true
  allow_ai_new_terms: true
  require_exception_report: true
  require_final_qa_gate: true
  require_tm_reuse_report: true
  require_automated_QA_report: true
  require_placeholder_QA: true
  require_terminology_QA: true
  require_consistency_QA: true
  require_ui_length_QA: "when content_type is UI, CMS, menu, button, table_header, or short_string"

automation:
  terminology_checker: "required"
  placeholder_checker: "required"
  consistency_checker: "required for multi-file, repeated-string, event, promotion, and UI/CMS batches"
  ui_length_checker: "required for UI/CMS/string-level batches"
  tm_match_checker: "required when TM file exists"

output:
  format: "{OUTPUT_FORMAT}" # project-defined; md | docx | xlsx | CMS text | mixed
  deliverables:
    - translated_Aplus
    - QA_report
    - exception_report
    - term_gap_report
    - reviewer_handoff_note
    - TM_reuse_report
    - automated_QA_report
    - terminology_QA_report
    - placeholder_QA_report
    - consistency_QA_report
    - UI_length_warning_report
    - pilot_metrics_log
```

### 3.2. EN → TH example

```yaml
game: "Lineage2M"
content_type: "patch_note"
source_language: "EN"
target_language: "TH"
target_locale: "th-TH"
glossary_source_column: "en"
glossary_target_column: "th"
style_guide_file: "styleguide_TH.md"
rules:
  no_pivot_translation: true
  glossary_locked_required: true
  data_lock_required: true
```

### 3.3. EN → ID example

```yaml
game: "Lineage2M"
content_type: "update_note"
source_language: "EN"
target_language: "ID"
target_locale: "id-ID"
glossary_source_column: "en"
glossary_target_column: "id"
style_guide_file: "styleguide_ID.md"
rules:
  no_pivot_translation: true
  glossary_locked_required: true
  data_lock_required: true
```

### 3.4. Config validation before running

Before running a batch, verify that the config does not accidentally keep a sample target language from another job.

```markdown
- [ ] `target_language` matches the requested output language.
- [ ] `target_locale` matches `target_language`.
- [ ] `glossary_target_column` matches the target mapping: VI=`vn`, TH=`th`, ID=`id`.
- [ ] `style_guide_file` points to the same target language.
- [ ] File naming uses the same `<TARGET>` code as the batch config.
- [ ] No sample TH/ID/VI values remain unless they are intentionally part of the job.
- [ ] `output.format` is explicitly chosen for this job; do not assume Markdown unless requested.
```

---

## 4. Input requirements

### 4.1. Source file

Required:

- correct version;
- complete source content;
- clear source language;
- tables not corrupted;
- comments/track changes preserved if review requires them;
- primary source clearly identified when multiple source files exist.

Recommended source naming:

```text
<Game>_<YYYY-MM-DD>_<content_type>_source_EN_v01.<ext>
```

Example:

```text
L2M_2026-07-01_patch_note_source_EN_v01.docx
```

### 4.2. Glossary / termbase

Recommended glossary shape for current multilingual termbase:

```text
category, kr, vn, vn_origin, th, th_match, id, id_match, en, en_match, string_id
```

The current multilingual glossary does not necessarily contain an explicit `status` column. Treat the CSV match columns as evidence, then assign `status` and `confidence` in the smaller batch glossary. Do not assume every extracted row is automatically `LOCKED`.

Recommended confidence/status derivation:

| Evidence in CSV or review | Suggested batch status | Suggested confidence | Note |
|---|---|---:|---|
| Human/in-game evidence confirms the target term | `INGAME_LOCKED` | 100 | Highest priority. Requires evidence link/screenshot/string ID. |
| Glossary owner approves the term for the project | `LOCKED` | 95–100 | Use exactly until owner changes it. |
| `en_match = nc_tb` and target column is present with clear category context | `PREFERRED` | 85–95 | Good production default, still allow flagging if context conflicts. |
| `th_match` / `id_match` / `vn_origin` indicates official string or central source | `PREFERRED` or `REVIEW` | 75–95 | Choose status based on project trust level and reviewer history. |
| `vn_origin = nc-recovered` or match source is unclear | `REVIEW` | 60–80 | Use cautiously and flag if high-risk. |
| Target column is empty | `MISSING` | 0 | Propose only with `[MISSING_GLOSSARY]`; do not present as official. |
| Duplicate/conflicting target terms exist for same source/context | `REVIEW` | variable | Add `[GLOSSARY_CONFLICT]` or `[INGAME_CHECK]`. |

When translating EN → TH:

```text
source column = en
target column = th
```

When translating EN → ID:

```text
source column = en
target column = id
```

When translating EN → VI:

```text
source column = en
target column = vn
```

Important:

- Do not paste the entire glossary CSV into chat if it is large.
- Extract only relevant terms for the batch.
- Use lookup scripts, filters, grep, or term extraction to create a batch glossary.
- If target column is empty, mark the term as `[MISSING_GLOSSARY]` or `[INGAME_CHECK]` depending on risk.

v2.1.0 production note for the current glossary package:

```text
Current glossary package: localization-glossary snapshot, 44,225 terms
Main data file: data/glossary_multilang.csv
Lookup script: scripts/lookup_term.py
Header: category, kr, vn, vn_origin, th, th_match, id, id_match, en, en_match, string_id
Coverage note: VN is complete in the package; EN/TH/ID may have empty cells. Empty target cells are not official translations.
Operating rule: never paste or load the full CSV into an AI prompt. Extract a batch glossary with lookup script, grep, or a controlled term extraction script.
```

Because the current CSV is a termbase snapshot, not a governed master glossary, the batch glossary must add operational fields such as `status`, `confidence`, `owner`, `evidence_ref`, and `decision`. Do not treat every row as `LOCKED` only because it exists in the CSV.

### 4.3. Batch glossary format

For each batch, create a smaller glossary table like this:

| source_term | target_term | source_column | target_column | category | status | confidence | match_evidence | string_id | context | note |
|---|---|---|---|---|---|---:|---|---|---|---|
| Ancient Seal | {TARGET_TERM} | en | {GLOSSARY_TARGET_COLUMN} | item | PREFERRED | 90 | en_match=nc_tb; target_match=string_id |  | Reward table |  |

Choose exactly one target language and one matching target glossary column per normal batch.

Examples:

```text
EN -> TH batch: source_column=en, target_column=th
EN -> ID batch: source_column=en, target_column=id
EN -> VI batch: source_column=en, target_column=vn
```

Status values:

| Status | Rule |
|---|---|
| `INGAME_LOCKED` | Verified in game. Highest priority. Must use exactly. |
| `LOCKED` | Must use exactly. Do not change without owner approval. |
| `PREFERRED` | Use unless context clearly requires flagging. |
| `REVIEW` | May use, but flag for reviewer. |
| `MISSING` | No target term available. AI may propose and must flag. |
| `DEPRECATED` | Do not use. If found, flag. |

Status is a batch-level control field. If the source glossary does not provide status directly, the AI Operator or Glossary Owner must derive it from match evidence, recent Final files, and in-game evidence before treating a term as locked.

### 4.4. Style guide

Each target language should have its own style guide or appendix.

Minimum required sections:

1. Tone of voice.
2. Player address / pronoun policy.
3. Date/time format.
4. Number/quantity format.
5. Casing and retained English terms.
6. UI path and menu notation.
7. Table header conventions.
8. Item tag conventions.
9. Common forbidden variants.
10. Before/after examples.

### 4.5. Reference files

Use 3–5 recent final files when available.

Reference files help AI and reviewers align:

- opening/greeting style;
- heading style;
- event/promotion wording;
- item/reward table style;
- date/time format;
- quantity format;
- official game terminology.

Reference files do not override the approved source or locked glossary.

### 4.6. In-game reference

Use when available:

- screenshots;
- string dumps;
- CMS/localization exports;
- build text;
- old published notices;
- reviewer comments from previous batches.

In-game evidence is especially important for `INGAME_LOCKED` terms and conflicts between glossary and current build strings.

### 4.7. Translation Memory / approved segment reuse

Translation Memory (TM) stores approved full segments, not only terms. It prevents the team from re-translating the same notice phrases, table labels, reward wording, system messages, and recurring event mechanics.

Recommended TM file for early pilot:

```text
tm_id
source_text
target_text
source_language
target_language
target_locale
content_type
game
context_id
string_id
source_hash
target_hash
final_file
approved_by
approved_date
quality_status
notes
```

Minimum status values:

| TM status | Meaning | Use rule |
|---|---|---|
| `APPROVED` | Final human-approved segment. | Can be reused for exact source match if context is compatible. |
| `APPROVED_WITH_CONTEXT` | Correct only in a defined UI/event/context. | Reuse only when `context_id` or context metadata matches. |
| `REVIEW` | Candidate segment from previous work, not locked. | Use as reference only; flag if used. |
| `DEPRECATED` | Old wording no longer allowed. | Do not reuse; flag if it appears. |

TM priority:

```text
1. Source file facts and current source structure
2. INGAME_LOCKED glossary with evidence
3. LOCKED glossary
4. Exact approved TM match with compatible context
5. Latest approved Final file reference
6. PREFERRED glossary
7. Fuzzy TM match as reference only
8. AI proposal with marker
```

TM rules:

```markdown
- [ ] Exact TM match may be reused only if source text, target locale, content type, and context are compatible.
- [ ] Fuzzy match is a suggestion, not an auto-apply rule.
- [ ] If TM conflicts with `LOCKED` or `INGAME_LOCKED` glossary, glossary wins and `[TM_CONFLICT]` is logged.
- [ ] If TM conflicts with current source data, current source wins and `[DATA_RISK]` or `[TM_CONFLICT]` is logged.
- [ ] Same source with multiple approved targets must trigger a consistency review unless context explains the variant.
- [ ] New Final segments should be extracted back into TM after human review.
```

TM reuse report template:

| ID | Source text | TM target | Match type | Context match | Decision | Risk | Owner |
|---|---|---|---|---|---|---|---|
| TM001 |  |  | exact / fuzzy | yes / no / unknown | reuse / reference / reject |  |  |

### 4.8. Master glossary governance

The distributed glossary is the lookup base. A production master glossary adds governance fields so reviewers can know which terms are official, which are provisional, and which are deprecated.

Recommended master glossary schema:

```text
term_id
category
source_language
source_term
target_locale
target_term
status
confidence
version
effective_from
effective_to
deprecated_by
replacement_term
evidence_type
evidence_ref
owner
last_updated
notes
```

Allowed `status` values:

| Status | Rule |
|---|---|
| `INGAME_LOCKED` | Verified in game/build/string dump. Highest priority. Must use exactly. |
| `LOCKED` | Approved by glossary owner. Must use exactly. |
| `PREFERRED` | Default production term. Use unless context requires a flag. |
| `REVIEW` | Candidate term. Use cautiously and flag. |
| `MISSING` | No approved target term. AI may propose with marker only. |
| `DEPRECATED` | Do not use. Must have `replacement_term` when known. |

Governance rules:

```markdown
- [ ] Every `LOCKED` / `INGAME_LOCKED` term has owner and evidence.
- [ ] Every deprecated term has `deprecated_by` or `replacement_term` when known.
- [ ] Every glossary change is recorded in `glossary_change_log.md`.
- [ ] Conflicting targets for the same source term are not resolved by frequency alone.
- [ ] Priority is `INGAME_LOCKED` > `LOCKED` > latest Final > `PREFERRED` > `REVIEW` > AI proposal.
- [ ] Batch glossary must carry status/confidence derived from the master glossary, current CSV evidence, Final references, and in-game evidence.
```

Glossary change log template:

| Date | Version | Locale | Source term | Old target | New target | Status | Reason | Evidence | Owner |
|---|---|---|---|---|---|---|---|---|---|

### 4.9. Context metadata and UI length rules

Context metadata reduces wrong-context translation, especially for short UI strings and repeated English labels.

Recommended context metadata file:

```text
context_id
string_id
source_file
source_text
screen_name
ui_type
character_limit
screenshot_ref
previous_final_ref
string_dump_ref
risk_level
notes
```

Recommended `ui_type` values:

```text
button
menu_label
tab_label
popup_title
tooltip_title
tooltip_body
table_header
table_cell_short
reward_name
item_name
system_message
notice_heading
notice_body
cms_plain_text
```

Starter UI length matrix. Each project should adjust after real device/CMS testing.

| ui_type | max_chars_TH | max_chars_ID | max_chars_VI | Rule type | Notes |
|---|---:|---:|---:|---|---|
| button | 18 | 22 | 24 | hard | Prefer short verbs. |
| menu_label | 24 | 28 | 30 | hard | Avoid explanatory phrases. |
| tab_label | 18 | 22 | 24 | hard | Keep compact. |
| popup_title | 35 | 40 | 45 | hard | Check line wrap. |
| tooltip_title | 50 | 55 | 60 | soft | Can wrap if UI allows. |
| table_header | 24 | 28 | 32 | hard | Preserve table readability. |
| table_cell_short | 30 | 35 | 40 | soft | Check high-density reward tables. |
| notice_heading | 80 | 90 | 100 | soft | SEO/CMS may have separate limits. |
| item_name | 40 | 45 | 45 | soft | In-game official name can override. |

UI/context rules:

```markdown
- [ ] UI/CMS/string-level batches should include `context_id` and `ui_type` when available.
- [ ] If `ui_type` is button/menu/table header and context is missing, flag `[CONTEXT_MISSING]`.
- [ ] If target text exceeds a hard limit, flag `[UI_LENGTH_RISK]`.
- [ ] Do not shorten locked item/skill/boss/NPC names only to satisfy length; escalate to owner.
- [ ] UI length warnings do not automatically mean wrong translation; they mean layout needs review.
```

### 4.10. Required automation assets for production pilot

For a production pilot, prepare these assets before running A+:

| Asset | Required when | Purpose |
|---|---|---|
| `batch_glossary_<TARGET>.xlsx/csv` | every batch | Target terminology with status/confidence. |
| `forbidden_terms_<TARGET>.csv` | every production batch | Detect deprecated/wrong variants. |
| `placeholder_patterns.yml` | every batch with variables/CMS/game strings | Define placeholders, tags, line breaks, and tokens. |
| `tm_<TARGET>.csv` or TMX | when prior Final exists | Reuse approved segments. |
| `context_metadata_<BATCH_ID>.csv` | UI/CMS/string-level batches | Supply context, screen, UI type, and screenshots. |
| `ui_length_rules.csv` | UI/CMS/string-level batches | Flag overflow risk. |
| `pilot_metrics.xlsx/csv` | every pilot batch | Track quality and efficiency. |

Minimum automation output package:

```text
TM_reuse_report
terminology_QA_report
placeholder_QA_report
consistency_QA_report
UI_length_warning_report
automated_QA_summary
pilot_metrics_log
```

---

## 5. Folder structure

Recommended structure:

```text
project_name/
  00_source/
    <Game>_<YYYY-MM-DD>_<content_type>_source_EN_v01.docx

  01_reference/
    final_examples/
    ingame_screenshots/
    old_notices/
    string_dumps/

  02_glossary/
    glossary_multilang.csv
    batch_glossary_<TARGET>.xlsx
    glossary_change_log.md
    forbidden_terms.csv

  03_styleguide/
    styleguide_core.md
    styleguide_VI.md
    styleguide_TH.md
    styleguide_ID.md

  04_ai_preflight/
    preflight_report.md
    term_gap_report.xlsx
    risk_register.md

  05_ai_draft_A/
    <Game>_<YYYY-MM-DD>_<content_type>_A_<TARGET>_v01.docx

  06_ai_QA_A/
    A_QA_report_<TARGET>_v01.xlsx
    A_exception_report_<TARGET>_v01.md

  07_ai_Aplus/
    <Game>_<YYYY-MM-DD>_<content_type>_Aplus_<TARGET>_v01.docx

  08_ai_QA_Aplus/
    Aplus_QA_report_<TARGET>_v01.xlsx
    Aplus_handoff_report_<TARGET>_v01.md

  09_human_review/
    human_review_<TARGET>_v01.docx
    reviewer_comments_export.xlsx

  10_final/
    <Game>_<YYYY-MM-DD>_<content_type>_FINAL_<TARGET>.docx
    <Game>_<YYYY-MM-DD>_<content_type>_FINAL_clean_<TARGET>.pdf

  11_feedback/
    glossary_updates_from_final.xlsx
    style_guide_updates.md
    prompt_updates.md
    error_log.xlsx
```

v2.1.0 production pilot additions:

```text
project_name/
  02_glossary/
    master_glossary_multilang_governed.csv
    glossary_change_log.md
    forbidden_terms_<TARGET>.csv

  03_styleguide/
    before_after_examples_<TARGET>.md
    forbidden_wording_<TARGET>.csv

  04_ai_preflight/
    context_metadata_<BATCH_ID>.csv
    UI_length_preflight_<TARGET>.xlsx
    TM_reuse_preflight_<TARGET>.xlsx

  08_ai_QA_Aplus/
    automated_QA_report_<TARGET>_v01.xlsx
    terminology_QA_report_<TARGET>_v01.xlsx
    placeholder_QA_report_<TARGET>_v01.xlsx
    consistency_QA_report_<TARGET>_v01.xlsx
    UI_length_warning_report_<TARGET>_v01.xlsx

  12_translation_memory/
    tm_<TARGET>.csv
    tm_change_log.md

  13_automation/
    placeholder_patterns.yml
    ui_length_rules.csv
    qa_checker_config.yml
    checker_run_log.md

  14_metrics/
    pilot_metrics.xlsx
    repeated_error_log.xlsx
```

---

## 6. Naming convention

Format:

```text
<Game>_<YYYY-MM-DD>_<content_type>_<stage>_<TARGET>_v<version>.<ext>
```

Examples:

```text
L2M_2026-07-01_patch_note_A_TH_v01.docx
L2M_2026-07-01_patch_note_A_QA_report_TH_v01.xlsx
L2M_2026-07-01_patch_note_Aplus_TH_v01.docx
L2M_2026-07-01_patch_note_Aplus_QA_report_TH_v01.xlsx
L2M_2026-07-01_patch_note_FINAL_TH.docx
```

Version rules:

| Version | Use when |
|---|---|
| `v01` | First generated version |
| `v02` | Significant fix after QA |
| `v03` | Re-run AI or major human review changes |
| `FINAL` | Signed off |
| `FINAL_clean` | Clean file with comments/track changes removed |
| `FINAL_publish` | CMS/web-ready file |

---

## 7. Roles and responsibilities

### 7.1. Role definitions

| Role | Responsibility |
|---|---|
| PM | Owns scope, schedule, source confirmation, final publish decision. |
| AI Operator | Runs SOP prompts/tools, prepares A/A+/QA outputs. |
| Translator/Editor | Reviews language quality and context, may prepare or edit drafts. |
| QA Checker | Checks mechanical/data/format issues. |
| Human Reviewer | Owns target-language review and final linguistic decision. |
| Glossary Owner | Approves terminology and glossary updates. |
| In-game Checker | Verifies terms against game build/string/screenshot evidence. |
| Final Approver | Signs off publish-ready version. |

### 7.2. RACI

| Task | AI | AI Operator | Translator/Editor | Reviewer | Glossary Owner | In-game Checker | Final Approver | PM |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Project setup | C | R | C | C | C |  |  | A |
| Preflight | R | R | C | C | C | C |  | A |
| Batch glossary extraction | R | R | C | C | A | C |  | C |
| Translation A | R | R | C |  | C |  |  |  |
| Technical QA A | R | R | C | C | C |  |  |  |
| Controlled Style Audit A+ | R | R | C | C | C |  |  |  |
| Final QA Gate | R | R | C | C | C | C |  | C |
| Human Review |  | C | C | R/A | C | C |  |  |
| In-game Check |  | C | C | C | C | R/A |  | C |
| Glossary Update | C | R | C | C | R/A | C |  | C |
| Style Guide Update | C | R | R | C | C |  |  | A |
| Final Sign-off |  | C | C | R | C | C | A | C |
| Publish |  |  |  | C |  |  | A | R/A |

Legend:

```text
R = Responsible
A = Accountable
C = Consulted
```

v2.1.0 additional ownership rules:

| Asset / gate | Primary owner | Backup / consulted |
|---|---|---|
| Translation Memory | Localization / AI Operator | Human Reviewer, PM |
| Master glossary governance | Glossary Owner | In-game Checker, Reviewer |
| Placeholder checker | QA Checker / AI Operator | Dev/CMS owner when patterns are unclear |
| Terminology checker | Glossary Owner / QA Checker | AI Operator |
| Consistency checker | AI Operator / QA Checker | Reviewer |
| UI length rules | PM / UI owner | Reviewer, QA Checker |
| Pilot metrics | PM / Localization Lead | AI Operator, Reviewer |

---

## 8. Severity system

### 8.1. P0 — Blocking

Do not proceed to publish. Do not hand off as clean unless explicitly flagged as requiring human/source decision.

Examples:

- missing section/table/reward list;
- wrong quantity;
- wrong sale period;
- end date earlier than start date without flag;
- important item/skill/boss/NPC name wrong;
- `LOCKED` or `INGAME_LOCKED` term not followed;
- table row/column drift;
- unresolved reviewer comment not reported;
- source meaning changed;
- AI added content not in source;
- internal marker remains in final/publish file;
- placeholder/tag/variable drift not approved by source owner;
- automated terminology checker finds `LOCKED` or `INGAME_LOCKED` mismatch;
- automated placeholder checker finds missing/changed/broken token.

### 8.2. P1 — Major

May proceed to human review if clearly flagged, but must be resolved or approved before Final.

Examples:

- term missing from glossary;
- glossary vs in-game conflict;
- repeated inconsistency;
- ambiguous sentence that may change meaning;
- wrong tone in title/important heading;
- item tag inconsistent;
- untranslated text not known to be intentional;
- style problem repeated across file;
- repeated TM conflict without owner/action;
- context missing for UI-critical short strings;
- hard UI length limit exceeded in button/menu/table header text.

### 8.3. P2 — Minor

Should be fixed before Final but does not block the whole pipeline.

Examples:

- typo;
- spacing;
- punctuation;
- capitalization/casing;
- slightly awkward sentence;
- inconsistent quantity spacing;
- table header not ideal but understandable.

### 8.4. P3 — Preference

Not a clear error. Record only if it should become a future style rule.

Examples:

- reviewer prefers one equally valid phrase over another;
- slightly different tone preference;
- optional retention or translation of a non-critical English term.

---

## 9. Standard exception markers

Use these markers consistently in reports and draft notes. Remove all markers before Final unless the final deliverable is an internal review file.

| Marker | Use when |
|---|---|
| `[MISSING_GLOSSARY]` | Source term has no target term in the selected target column. |
| `[GLOSSARY_CONFLICT]` | Glossary and context/in-game evidence appear inconsistent. |
| `[SOURCE_CHECK]` | Source is unclear or may contain an error. |
| `[INGAME_CHECK]` | Term/text must be verified in game/build/string dump. |
| `[DATA_RISK]` | Number/date/time/price/quantity/limit looks risky or inconsistent. |
| `[STYLE_DECISION]` | AI made a notable style decision reviewers should know. |
| `[TABLE_RISK]` | Possible missing row/column/table/content drift. |
| `[UNTRANSLATED_CHECK]` | Source-language text remains and may or may not be intentional. |
| `[COMMENT_OPEN]` | File has unresolved comment or track-change issue. |
| `[PLACEHOLDER_CHECK]` | Placeholder/variable/tag may have been changed or needs verification. |
| `[FORMAT_RISK]` | Layout, CMS, line break, table, or special character may break. |
| `[CONTEXT_MISSING]` | UI/CMS/string-level text lacks context ID, screenshot, screen name, or UI type. |
| `[UI_LENGTH_RISK]` | Target text may exceed a UI/CMS length budget. |
| `[TM_CONFLICT]` | TM suggestion conflicts with glossary, context, source data, or another approved segment. |
| `[CONSISTENCY_RISK]` | Same source/term/event appears with inconsistent target wording. |
| `[AUTO_QA_BLOCK]` | Automated checker found a blocking issue that must be resolved or explicitly waived. |

Marker format examples:

```text
[MISSING_GLOSSARY: source="Ancient Seal" | proposed="..." | target=TH | context="Reward table"]
```

```text
[GLOSSARY_CONFLICT: source="Timitris" | glossary="Timitriss" | context="Boss name" | action="Need in-game screenshot"]
```

```text
[DATA_RISK: value="1 July – 15 June" | reason="End date earlier than start date" | action="Source check"]
```

## 9A. Placeholder, variable and tag lock

Game notices and CMS strings often contain placeholders, variables, tags and line-break controls. AI must preserve them exactly unless the source owner explicitly instructs otherwise.

Do not translate, normalize, reorder, remove, or add placeholders/tokens such as:

```text
{0}
{1}
{item_name}
{{playerName}}
%s
%d
$VALUE
<br>
<color>
</color>
\n
[item]
[reward]
@username
#tag
```

Placeholder QA requirements:

```markdown
- [ ] Placeholder count matches source vs target.
- [ ] Exact placeholder strings match source vs target.
- [ ] Placeholder order matches source unless the target-language grammar requires a documented reorder.
- [ ] HTML/XML-like tags keep valid open/close pairs.
- [ ] Line breaks such as `\n`, `<br>`, and CMS separators are preserved.
- [ ] Any changed placeholder is flagged `[PLACEHOLDER_CHECK]` with location and reason.
```

---


## 9B. Automated QA gate policy

Automated QA does not replace human review. It catches repeatable mechanical risks before reviewers spend time on style.

Mandatory automated gates:

| Gate | Runs after | Blocks when |
|---|---|---|
| TM match / conflict check | Preflight and after A | exact match conflict, deprecated TM reuse, same source with unexplained target variance |
| Terminology checker | A and A+ | locked term missing/wrong, forbidden term used |
| Placeholder checker | A and A+ | missing/extra/changed token, broken tag pair, undocumented reorder |
| Data snapshot diff | A and A+ | number/date/time/price/quantity drift |
| Consistency checker | A+ and multi-file final gate | repeated source/term/event inconsistent without approved context |
| UI length checker | UI/CMS/string-level A+ | hard length limit exceeded without owner/action |

Gate decision labels:

```text
PASS
PASS_WITH_WARNINGS
BLOCKED_P0
NEEDS_OWNER_DECISION
WAIVED_BY_OWNER
```

Waiver rule:

```markdown
- [ ] A P0 automated finding can be waived only with owner, reason, evidence, and date.
- [ ] Waived findings remain in the audit log and pilot metrics.
- [ ] Waiver does not allow silent publish; it is a documented human decision.
```

---

# Part A — Pipeline workflow

---

## 10. Stage 0 — Project setup

### 10.1. Goal

Confirm scope, source, target language, glossary, style guide, reviewer, output format and final owner.

### 10.2. Checklist

```markdown
## Stage 0 Checklist

- [ ] Source file confirmed.
- [ ] Source language confirmed.
- [ ] Target language confirmed.
- [ ] Target locale confirmed.
- [ ] Glossary target column confirmed.
- [ ] Content type confirmed.
- [ ] Latest glossary available.
- [ ] Latest style guide or language appendix available.
- [ ] Recent final references available if needed.
- [ ] Reviewer confirmed.
- [ ] Glossary owner confirmed.
- [ ] Final approver confirmed.
- [ ] In-game check need confirmed.
- [ ] Output format confirmed.
- [ ] Comment/track-change handling confirmed.
- [ ] No-pivot rule confirmed.
```

### 10.3. Output

```text
project_brief.md
```

Template:

```markdown
# Project Brief

## Project
- Game:
- Content type:
- Source file:
- Source language:
- Target language:
- Target locale:
- Glossary source column:
- Glossary target column:
- Output format:
- Due date:

## References
- Glossary:
- Style guide:
- Previous final:
- In-game reference:

## Rules
- No pivot translation: Yes
- Keep comments: Yes/No
- Keep track changes: Yes/No
- Preserve layout: Yes/No
- Use locked glossary: Yes
- Allow AI to propose new terms: Yes, with marker only

## Human Review
- Reviewer:
- Glossary owner:
- Final approver:
```

---

## 11. Stage 1 — Preflight source + glossary

### 11.1. Goal

Identify risk before translation.

Stage 1 should answer:

- How many headings/sections/tables exist?
- Are comments or track changes present?
- Which terms appear in source but are missing in target glossary?
- Are duplicate/conflicting glossary terms present?
- Are dates/times/quantities/prices suspicious?
- Which tables are high-risk?
- Is previous final wording reusable?

### 11.2. Source preflight checklist

```markdown
## Source Preflight

- [ ] Count main headings.
- [ ] Count tables.
- [ ] Count rows in high-risk tables.
- [ ] Check comments.
- [ ] Check track changes.
- [ ] Check textboxes/header/footer if applicable.
- [ ] Check embedded images if applicable.
- [ ] Check source-language text that should remain unchanged.
- [ ] Check dates/times.
- [ ] Check prices/currencies.
- [ ] Check quantities and percentages.
- [ ] Check reward tables.
- [ ] Check promotion/sale tables.
- [ ] Check placeholders/variables/tags.
```

### 11.3. Glossary preflight checklist

```markdown
## Glossary Preflight

- [ ] Glossary source column exists.
- [ ] Glossary target column exists.
- [ ] Target column matches target language.
- [ ] No duplicate source term with conflicting target unless context is defined.
- [ ] LOCKED terms do not conflict with DEPRECATED terms.
- [ ] Forbidden variants exist for common mistakes if available.
- [ ] Term category is available when possible.
- [ ] Missing target terms are listed.
- [ ] Terms requiring in-game check are listed.
- [ ] Batch glossary is generated.
```

### 11.4. Outputs

```text
preflight_report.md
term_gap_report.xlsx
risk_register.md
batch_glossary_<TARGET>.xlsx
TM_reuse_preflight_<TARGET>.xlsx
context_metadata_check_<TARGET>.xlsx
UI_length_preflight_<TARGET>.xlsx
```

### 11.5. v2.1.0 preflight additions

TM preflight:

```markdown
- [ ] Exact source matches found in TM.
- [ ] Fuzzy matches listed as reference only.
- [ ] Deprecated TM segments excluded.
- [ ] Same source with multiple approved targets flagged.
- [ ] TM conflicts against glossary logged as `[TM_CONFLICT]`.
```

Context/UI preflight:

```markdown
- [ ] `context_id` exists for UI/CMS/string-level rows when available.
- [ ] `ui_type` exists for short strings, buttons, menu labels, table headers, and system messages.
- [ ] `character_limit` exists when UI has a hard limit.
- [ ] Screenshot/string dump references are linked when available.
- [ ] Missing context for high-risk UI rows is flagged `[CONTEXT_MISSING]`.
```

Automation preflight:

```markdown
- [ ] Placeholder patterns loaded.
- [ ] Forbidden terms file loaded.
- [ ] Batch glossary has `status` and `confidence`.
- [ ] UI length rules loaded when required.
- [ ] QA checker config matches target locale.
```

Risk register template:

```markdown
# Risk Register

| ID | Severity | Area | Risk | Evidence | Action | Owner |
|---|---|---|---|---|---|---|
| R001 | P0 | Sale period | End date earlier than start date | "1 July – 15 June" | Source check | PM |
| R002 | P1 | Term | Boss name conflict | Glossary vs old final | In-game check | Glossary owner |
| R003 | P1 | Table | Reward list may be incomplete | Empty reward section | Source check | Reviewer |
```

---

## 12. Stage 2 — AI Translation A: Glossary-first Draft

### 12.1. Goal

Create Draft A: a faithful, glossary-first translation that preserves structure and flags uncertainty.

Priority order:

1. Correct meaning.
2. Correct glossary.
3. Preserve source data.
4. Preserve structure/layout.
5. Flag uncertainty.
6. Acceptable but not final-level style.

### 12.2. Rules for Draft A

AI must:

- use `LOCKED` and `INGAME_LOCKED` terms exactly;
- use `PREFERRED` terms unless context requires flagging;
- flag `REVIEW` terms;
- preserve numbers, dates, times, prices, quantities, limits;
- preserve table structure;
- preserve item tags;
- preserve UI paths;
- preserve placeholders/variables;
- not delete comments;
- not summarize or omit content;
- not add explanations into the localized content;
- not over-polish.

AI may:

- translate source into natural target language at draft level;
- propose missing target terms with markers;
- keep English terms if style guide/glossary requires it;
- report uncertainty in the exception list.

TM-aware Draft A rules:

```markdown
- [ ] Use exact approved TM only when context is compatible.
- [ ] Do not let TM override current source data.
- [ ] Do not let TM override `LOCKED` / `INGAME_LOCKED` glossary.
- [ ] Do not auto-apply fuzzy TM; cite it in the exception or reuse report when helpful.
- [ ] If TM suggests a different style that looks better but conflicts with style guide, follow style guide and log `[TM_CONFLICT]` if needed.
```

### 12.3. Output

```text
<Game>_<YYYY-MM-DD>_<content_type>_A_<TARGET>_v01.docx
A_exception_list_<TARGET>_v01.md
A_term_gap_<TARGET>_v01.xlsx
A_TM_reuse_report_<TARGET>_v01.xlsx
```

---

## 13. Stage 3 — AI Technical QA Gate for A

### 13.1. Goal

Catch mechanical errors before A+ polish.

This prevents style editing from hiding data, table, or glossary errors.

### 13.2. QA checklist

#### Source integrity

```markdown
- [ ] Main heading count matches source.
- [ ] Table count matches source.
- [ ] Row count in high-risk tables matches source.
- [ ] No missing section.
- [ ] No duplicated section.
- [ ] No abnormal empty table cell.
- [ ] No missing reward row.
- [ ] No text moved to wrong column.
```

#### Numeric/data QA

```markdown
- [ ] All `x N` quantities match source.
- [ ] All percentages match source.
- [ ] All dates match source.
- [ ] All times match source.
- [ ] All currencies/prices match source.
- [ ] All levels match source.
- [ ] All durations match source.
- [ ] All purchase limits match source.
- [ ] Suspicious date/time issues are flagged.
```

#### Glossary QA

```markdown
- [ ] 100% of LOCKED terms are correct.
- [ ] 100% of INGAME_LOCKED terms are correct.
- [ ] No forbidden variants used.
- [ ] No two target terms used for the same source term unless context justifies it.
- [ ] Proper names not translated if glossary says to keep them.
- [ ] Missing terms are flagged.
- [ ] Conflicts are flagged.
```

#### Target language mechanics

```markdown
- [ ] No obvious typo.
- [ ] No unexpected source-language leftovers.
- [ ] No missing or extra parentheses.
- [ ] No spacing errors around numbers/symbols based on language appendix.
- [ ] No casing errors for retained English terms.
- [ ] No serious punctuation issue.
- [ ] No broken sentence.
- [ ] No incomplete bullet.
```

#### Comments / track changes

```markdown
- [ ] All comments are exported or reported.
- [ ] No reviewer comment ignored.
- [ ] Comment owner/status recorded if available.
- [ ] Track changes are preserved or accepted according to project rule.
```

### 13.3. Gate rule after Stage 3

Draft A can move to A+ only if:

```markdown
- [ ] No unreported P0.
- [ ] No unhandled missing table/section.
- [ ] Existing comments are reported.
- [ ] Term conflicts are in exception list.
- [ ] Data risks are flagged.
```

If true P0 exists, fix it or wait for human/source decision before polish.

## 13A. Automated QA Gate for A

### 13A.1. Goal

Run machine-checkable QA before A+ so style editing does not hide mechanical issues.

### 13A.2. Required checker contracts

Terminology checker input:

```text
source_file
A_draft
batch_glossary
forbidden_terms_file
target_language
target_locale
```

Terminology checker output:

```text
issue_id
severity
source_term
expected_target
actual_target
status
location
reason
suggested_fix
owner
```

Placeholder checker input:

```text
source_file
A_draft
placeholder_patterns.yml
```

Placeholder checker output:

```text
issue_id
severity
source_placeholder
target_placeholder
issue_type  # missing | extra | changed | order_changed | tag_pair_broken
location
suggested_action
```

Data snapshot diff output:

```text
issue_id
severity
value_type  # number | date | time | price | quantity | percent | level | duration
source_value
target_value
location
reason
```

### 13A.3. Gate rule

```markdown
- [ ] Placeholder drift count = 0, or every difference is documented and owner-approved.
- [ ] `LOCKED` / `INGAME_LOCKED` terminology compliance = 100%.
- [ ] Data drift count = 0.
- [ ] Missing table/row/section count = 0.
- [ ] P0 automated findings = 0 unless `WAIVED_BY_OWNER`.
```

---

## 14. Stage 4 — AI Controlled Style Audit: A -> A+

### 14.1. Goal

Create A+: a polished, target-language-appropriate version that still preserves glossary, data and structure.

Priority order:

1. Do not introduce new errors.
2. Improve readability.
3. Match game update-note style.
4. Normalize casing/format.
5. Preserve glossary/data.
6. Flag risky decisions.

### 14.2. Allowed edits

| Area | Allowed |
|---|---|
| Style | Improve awkward/literal phrases. |
| Grammar | Fix grammar and sentence flow. |
| Heading | Align with target update-note style. |
| Bullet | Make concise without changing meaning. |
| Casing | Normalize retained English terms. |
| Spacing | Normalize symbols, quantity, UI paths. |
| Punctuation | Fix punctuation and parentheses. |
| Consistency | Apply repeated phrasing consistently. |
| Typo | Fix clear typos. |
| UI style | Apply target language UI path convention. |

Table header normalization is allowed only when headers are normal visible translation text. Do not normalize or translate table headers if they are fixed client/CMS/template fields, import/export keys, or locked field labels.

### 14.3. Forbidden edits without evidence

| Area | Forbidden |
|---|---|
| LOCKED term | Do not change. Flag conflict instead. |
| Item/skill/boss/NPC name | Do not change without glossary/in-game evidence. |
| Quantity | Do not change. |
| Date/time | Do not change. |
| Price/currency | Do not change. |
| Purchase limit | Do not change. |
| Reward list | Do not add/remove. |
| Table structure | Do not merge/split/reorder rows unless approved. |
| Fixed table headers | Do not change fixed client/CMS/template headers, import/export field labels, or locked table headers. |
| Comment | Do not delete unresolved comments. |
| Marker | Do not remove unresolved markers. |
| Source meaning | Do not paraphrase into a different meaning. |

### 14.4. Outputs

```text
<Game>_<YYYY-MM-DD>_<content_type>_Aplus_<TARGET>_v01.docx
Aplus_change_summary_<TARGET>_v01.md
Aplus_exception_report_<TARGET>_v01.md
```

---

## 15. Stage 5 — AI Final QA Gate for A+

### 15.1. Goal

Check whether A+ introduced data, glossary, structure, marker or format drift.

### 15.2. A vs A+ diff QA

```markdown
## A vs A+ Diff QA

- [ ] No number changed unless human/source confirmed.
- [ ] No date/time changed unless human/source confirmed.
- [ ] No currency/price changed.
- [ ] No purchase limit changed.
- [ ] No quantity changed.
- [ ] No LOCKED item/skill/boss/NPC term changed.
- [ ] No section removed.
- [ ] No table removed.
- [ ] No reward row removed.
- [ ] No unresolved comment removed.
- [ ] No unresolved marker removed.
- [ ] No term drift due to style polish.
```

### 15.3. A+ glossary QA

```markdown
## A+ Glossary QA

- [ ] 100% LOCKED terms correct.
- [ ] 100% INGAME_LOCKED terms correct.
- [ ] 0 forbidden terms.
- [ ] All REVIEW terms flagged.
- [ ] All missing target terms reported.
- [ ] No inconsistent target terms for same source unless context approved.
- [ ] Term conflicts have owner/action.
```

### 15.4. A+ style QA

```markdown
## A+ Style QA

- [ ] Opening/greeting follows target style guide.
- [ ] Headings are consistent.
- [ ] Bullets are clear and natural.
- [ ] Table headers are consistent.
- [ ] Retained English terms follow casing rules.
- [ ] Date/time format is consistent.
- [ ] Quantity format is consistent.
- [ ] Item tags are preserved.
- [ ] No obvious machine-translation phrasing in main sections.
- [ ] No serious typo.
```

### 15.5. Gate rule for human review

A+ can go to human review when:

```markdown
- [ ] P0 = 0, or all P0 are clearly flagged for human/source decision.
- [ ] LOCKED glossary compliance = 100%.
- [ ] No missing section/table.
- [ ] No unreported data drift.
- [ ] No widespread mechanical issues.
- [ ] Exception report is complete.
- [ ] Handoff note is clear.
```

## 15A. Automated Final QA Gate for A+

### 15A.1. Required final automated reports

```text
Aplus_terminology_QA_report_<TARGET>_v01.xlsx
Aplus_placeholder_QA_report_<TARGET>_v01.xlsx
Aplus_consistency_QA_report_<TARGET>_v01.xlsx
Aplus_UI_length_warning_report_<TARGET>_v01.xlsx
Aplus_automated_QA_summary_<TARGET>_v01.md
```

### 15A.2. Consistency checker rules

Flag when:

```markdown
- [ ] Same `source_text` has different `target_text` without different context.
- [ ] Same `source_term` has different `target_term` in the same content type.
- [ ] Same event name differs across files.
- [ ] Same item/reward/package name differs across tables.
- [ ] Same table header differs within one batch.
```

Do not flag when:

```markdown
- [ ] Context metadata explicitly allows different wording.
- [ ] Glossary contains context-specific variants.
- [ ] Source text is identical but UI type requires different length/style and reviewer approved the variant.
```

### 15A.3. UI length checker rules

```markdown
- [ ] Hard limit exceeded -> P1 or P0 depending on publish risk.
- [ ] Soft limit exceeded -> P2 warning unless screenshot/build confirms overflow.
- [ ] Locked in-game names are not shortened by AI; owner decides.
- [ ] Every hard-limit warning must have status: Fixed, Accepted, Needs UI Check, or Waived by Owner.
```

### 15A.4. Final automated gate decision

A+ can move to human review only when:

```markdown
- [ ] `automated_QA_summary` is attached.
- [ ] P0 automated issues = 0 or owner-waived.
- [ ] P1 issues have owner/action.
- [ ] Placeholder drift = 0.
- [ ] Data drift = 0.
- [ ] Locked terminology compliance = 100%.
```

---

## 16. Stage 6 — Handoff to Human Review

### 16.1. Goal

Human reviewer should not receive only the translation. They should receive an exception-based package that tells them where to focus.

### 16.2. Handoff package

```text
1. A+ document
2. A+ QA report
3. Exception report
4. Term conflict log
5. Missing glossary log
6. Data risk log
7. Comment export
8. Short reviewer instruction
```

### 16.3. Handoff note template

```markdown
# Handoff Note: A+ → Human Review

## File
- A+:
- QA report:
- Exception report:
- Target language:
- Target locale:

## Summary
- Total issues:
- P0:
- P1:
- P2:
- P3:
- Open comments:
- Missing glossary terms:
- Glossary conflicts:
- Data risks:
- Automated QA P0/P1 findings:
- UI length warnings, nếu có:
- In-game check required:

## Recommended Review Focus
1. Check all P0 issues first.
2. Confirm term conflicts.
3. Verify in-game names for item/skill/boss/NPC.
4. Check promotion tables and reward tables.
5. Check all comments imported from previous file.
6. Final pass for target-language style.

## Known High-Risk Areas
| Area | Risk | Action |
|---|---|---|
| Promotion sale period | End date suspicious | Source check |
| Boss reward table | Possible missing rewards | Source check |
| Item name | Glossary vs in-game conflict | In-game check |
```

### 16.4. Human reviewer status labels

| Status | Meaning |
|---|---|
| `ACCEPTED` | Keep A+ text. |
| `CORRECTED` | Reviewer changed the text. |
| `GLOSSARY_UPDATE` | Glossary needs update. |
| `STYLE_GUIDE_UPDATE` | Style guide needs update. |
| `INGAME_CONFIRMED` | Verified against in-game evidence. |
| `SOURCE_CONFIRMED` | Source data confirmed. |
| `FALSE_POSITIVE` | AI flag is not an issue. |
| `NEEDS_PM` | Needs PM/client decision. |
| `NEEDS_DEV` | Needs dev/build/string check. |

### 16.5. Recommended review order

```markdown
## Human Review Order

1. P0 data/table issues
2. Open comments
3. Glossary conflicts
4. Missing glossary terms
5. In-game check terms
6. Promotion tables
7. Reward tables
8. Skill/item/boss/NPC names
9. Full style skim
10. Final clean-up
```

---

## 17. Stage 7 — Finalization

### 17.1. Goal

Create a clean Final file ready for publish.

### 17.2. Final file checklist

```markdown
## Final File Checklist

- [ ] All P0 closed.
- [ ] All P1 closed or approved.
- [ ] No markers remain: [MISSING_GLOSSARY], [DATA_RISK], etc.
- [ ] No internal comments remain.
- [ ] No unresolved track changes remain.
- [ ] No debug/internal text remains.
- [ ] No source text remains outside whitelist.
- [ ] No obvious typo remains.
- [ ] No missing parentheses.
- [ ] No table drift.
- [ ] Date/time final confirmed.
- [ ] Promotion price/purchase limit final confirmed.
- [ ] Reward tables final confirmed.
- [ ] Glossary update list created.
- [ ] Style guide update list created.
```

### 17.3. Publish checklist

```markdown
## Publish Checklist

- [ ] Final file matches client/CMS format.
- [ ] Copy-paste into CMS does not break tables.
- [ ] Special characters checked.
- [ ] Non-breaking spaces checked if needed.
- [ ] Links checked if any.
- [ ] Images checked if any.
- [ ] Timezone checked.
- [ ] Title checked.
- [ ] File name version/date checked.
- [ ] Sign-off completed.
```

### 17.4. Sign-off template

```markdown
# Final Sign-off

- Project:
- File:
- Version:
- Target language:
- Date:
- AI draft completed by:
- AI QA completed by:
- Human review by:
- In-game check by:
- Final approval by:

## Approval
- [ ] Translation approved
- [ ] Glossary approved
- [ ] Style approved
- [ ] Data approved
- [ ] Ready to publish
```

---

## 18. Stage 8 — Feedback loop after Final

### 18.1. Goal

Every Final should improve the next batch.

After Final, extract human changes to update:

- glossary;
- forbidden term list;
- style guide;
- prompt pack;
- QA checklist;
- in-game term database;
- Translation Memory;
- pilot metrics log;
- before/after example bank.

### 18.2. Human edit classification

| Tag | Meaning |
|---|---|
| `GLOSSARY_MISSING` | Glossary lacked term. |
| `GLOSSARY_WRONG` | Glossary target was wrong. |
| `GLOSSARY_OUTDATED` | Glossary older than in-game text. |
| `AI_CONTEXT_ERROR` | AI chose wrong meaning/context. |
| `AI_STYLE_ERROR` | AI was correct but unnatural. |
| `AI_DATA_ERROR` | AI changed or mishandled data. |
| `SOURCE_AMBIGUITY` | Source unclear. |
| `INGAME_OVERRIDE` | In-game text overrides glossary/source. |
| `STYLE_GUIDE_MISSING` | Style rule was absent. |
| `TYPO_MECHANICAL` | Typo/casing/spacing issue. |
| `TABLE_FORMAT_ERROR` | Table/layout issue. |
| `REVIEWER_PREFERENCE` | Preference, not objective error. |

### 18.3. Feedback outputs

```text
glossary_updates_from_final.xlsx
style_guide_updates.md
prompt_updates.md
error_log.xlsx
qa_rule_updates.md
tm_updates_from_final.csv
pilot_metrics.xlsx
repeated_error_log.xlsx
```

---

# Part B — Multilingual glossary rules

---

## 19. Glossary lookup flow

For EN → TH:

```text
1. Extract source terms from EN file.
2. Lookup in glossary using column `en`.
3. Pull target term from column `th`.
4. Create batch glossary.
5. Use batch glossary in Draft A and A+.
6. Flag empty/missing target terms.
```

For EN → ID:

```text
1. Extract source terms from EN file.
2. Lookup in glossary using column `en`.
3. Pull target term from column `id`.
4. Create batch glossary.
5. Use batch glossary in Draft A and A+.
6. Flag empty/missing target terms.
```

For EN → VI:

```text
1. Extract source terms from EN file.
2. Lookup in glossary using column `en`.
3. Pull target term from column `vn`.
4. Create batch glossary.
5. Use batch glossary in Draft A and A+.
6. Flag empty/missing target terms.
```

## 20. Target column mapping

| Target | Use column | Notes |
|---|---|---|
| VI | `vn` | If project uses `vi`, map `vi` → `vn`. |
| TH | `th` | Use Thai official term if present. |
| ID | `id` | Use Indonesian official term if present. |
| EN | `en` | Use as source or retained term. |
| KR | `kr` | Use for Korean source/reference if needed. |

## 21. Term priority

When multiple evidence sources exist, use this priority:

```text
1. INGAME_LOCKED term with evidence
2. LOCKED glossary term
3. Latest approved Final file
4. PREFERRED glossary term
5. Style guide rule
6. AI proposed term with [MISSING_GLOSSARY] flag
```

If evidence conflicts, do not silently choose. Use `[GLOSSARY_CONFLICT]` or `[INGAME_CHECK]`.

## 22. Forbidden term handling

If a forbidden or deprecated term appears:

```text
1. Do not use it in new translation.
2. Report where it appears.
3. Suggest locked/preferred term if known.
4. Ask glossary owner to confirm if unclear.
```

Report format:

```markdown
| ID | Source term | Forbidden target | Preferred target | Location | Action |
|---|---|---|---|---|---|
```

## 23. Missing target term handling

If source term exists but target column is empty:

```text
1. Translate cautiously based on context.
2. Mark as [MISSING_GLOSSARY].
3. Add to term gap report.
4. Do not promote proposed term to LOCKED without human approval.
```

Term gap report:

```markdown
| ID | Source term | Proposed target | Target language | Category | Context | Risk | Owner | Decision |
|---|---|---|---|---|---|---|---|---|
```

## 23A. Master glossary update rules

After each Final, update the governed glossary only from approved evidence.

```markdown
- [ ] Add newly approved terms with `status=PREFERRED` or stronger only if owner confirms.
- [ ] Promote to `LOCKED` only after glossary owner approval.
- [ ] Promote to `INGAME_LOCKED` only with screenshot/string/build evidence.
- [ ] Mark old terms as `DEPRECATED`; do not delete them immediately.
- [ ] Record every change in `glossary_change_log.md`.
- [ ] Add forbidden variants when reviewers repeatedly correct the same wrong wording.
```

## 23B. Translation Memory update rules

After each Final, extract reusable segments into TM.

```markdown
- [ ] Extract complete approved segments, not partial phrases.
- [ ] Store source and target exactly as approved.
- [ ] Include `context_id`, `content_type`, `target_locale`, `approved_date`, and `quality_status`.
- [ ] Exclude segments that contain unresolved placeholders, uncertain terms, or source ambiguity.
- [ ] Mark context-bound segments as `APPROVED_WITH_CONTEXT`.
- [ ] Mark outdated segments as `DEPRECATED` instead of deleting them.
```

---

# Part C — Target language appendices

---

## 24. Core style rules for all languages

Apply these regardless of target language:

- Preserve meaning before style.
- Use official glossary terms.
- Keep game/system terminology consistent.
- Keep headings concise.
- Keep bullets easy to scan.
- Do not over-market patch notes.
- Keep numbers/dates/times/prices exact.
- Keep item/reward table structure intact.
- Keep placeholders/variables/tags intact.
- Do not translate proper names unless glossary says so.
- Flag uncertainty instead of guessing.

## 25. Appendix VI — Vietnamese style guide

### 25.1. Tone

Recommended tone:

- clear;
- polite;
- concise;
- natural update-note style;
- not too casual;
- not too promotional;
- avoid machine-translation phrasing.

### 25.2. Player address

- Use `bạn` if the game/project style uses it.
- In bullets, omit subject when natural.
- Avoid repeating `Bạn có thể...` too often.

Examples:

```text
Có thể nhận EXP thông qua...
Phần thưởng sẽ được phát qua thư trong game.
```

### 25.3. Casing and retained English

Use project-approved casing:

```text
PvP, PvE, Max HP, Max MP, EXP
```

Avoid:

```text
PVP, PVE, HP tối đa if project keeps Max HP
```

### 25.4. Quantity and spacing

Default:

```text
x 1
x 10
x 1,000
PvP +1
+25%
```

### 25.5. Item tags

Use project-approved tags consistently:

```text
(Khóa)
(Sự kiện)
(Cửa hàng)
```

### 25.6. Date/time

Example:

```text
Sau bảo trì ngày 1 tháng 7 năm 2026 – 4:59 sáng ngày 15 tháng 7 năm 2026 (GMT+7)
```

Do not silently correct suspicious dates. Flag `[DATA_RISK]`.

## 26. Appendix TH — Thai style guide

This appendix is production-ready for pilot use but should be locked by a native Thai reviewer or Thai glossary owner after the first 1-3 TH batches. The reviewer should confirm pronoun policy, date/time format, table headers, item tags, UI path style, retained English terms, UI length behavior, forbidden variants, and before/after examples.

### 26.1. Tone

Recommended tone:

- clear and concise;
- suitable for official game notices;
- natural Thai phrasing;
- not overly literal from English;
- not overly casual;
- avoid unnecessary elaboration.

### 26.2. Player address

- Use the project-approved Thai player address style.
- Avoid repeating the player pronoun if the sentence reads naturally without it.
- Keep notice-style phrasing direct and easy to scan.

### 26.3. Glossary and names

- Use Thai terms from the `th` glossary column when present.
- Keep official in-game item/skill/boss/NPC names exactly when locked.
- If the Thai column is empty, propose a term and flag `[MISSING_GLOSSARY]`.
- If the Thai term looks inconsistent with in-game text, keep glossary and flag `[INGAME_CHECK]` or `[GLOSSARY_CONFLICT]`.

### 26.4. Numbers, symbols and retained English

- Preserve all numbers and symbols exactly unless project style guide says otherwise.
- Retain English abbreviations such as `PvP`, `PvE`, `EXP`, `HP`, `MP` when the project style keeps them.
- Do not change quantity values or order in reward tables.

### 26.5. Tables and patch-note style

- Keep table columns and row order unchanged.
- Keep item/reward list compact and readable.
- Avoid adding explanatory text inside table cells unless present in source.
- Keep UI/menu paths consistent with project convention.

### 26.6. Thai UI length and context rules

- Use context metadata for all short UI strings when available.
- Prefer concise Thai phrasing for buttons, menu labels, tabs, and table headers.
- Do not shorten official in-game names without owner approval.
- Flag long button/menu/table-header text as `[UI_LENGTH_RISK]`.

### 26.7. Thai forbidden/style watchlist

Maintain a project-specific Thai forbidden wording list after reviewer feedback.

Minimum watchlist categories:

```text
literal English structure
wrong retained-English casing
unapproved item/skill/boss/NPC variant
inconsistent event period wording
verbose purchase-limit wording
incorrect table header wording
```

### 26.8. Thai before/after example bank

After every Final, add examples for:

```text
opening notice
maintenance notice
event period
sale period
reward table
purchase limit
button/menu short string
skill/item description
```

## 27. Appendix ID — Indonesian style guide

This appendix is production-ready for pilot use but should be locked by a native Indonesian reviewer or Indonesian glossary owner after the first 1-3 ID batches. The reviewer should confirm pronoun policy, formality level, date/time format, table headers, item tags, UI path style, retained English terms, UI length behavior, forbidden variants, and before/after examples.

### 27.1. Tone

Recommended tone:

- clear;
- natural Indonesian;
- suitable for official game notices;
- not too formal;
- not too casual;
- avoid literal English structure.

### 27.2. Player address

- Use the project-approved Indonesian player address style.
- Keep update-note bullets direct.
- Avoid unnecessary repetition of pronouns if the sentence is clear without them.

### 27.3. Glossary and names

- Use Indonesian terms from the `id` glossary column when present.
- Keep official in-game item/skill/boss/NPC names exactly when locked.
- If the Indonesian column is empty, propose a term and flag `[MISSING_GLOSSARY]`.
- If the Indonesian term conflicts with in-game evidence, keep glossary and flag `[INGAME_CHECK]` or `[GLOSSARY_CONFLICT]`.

### 27.4. Numbers, symbols and retained English

- Preserve all numbers, dates, times, prices and quantities.
- Retain English abbreviations such as `PvP`, `PvE`, `EXP`, `HP`, `MP` when the project style keeps them.
- Do not rewrite item names for fluency if they are locked glossary terms.

### 27.5. Tables and patch-note style

- Keep table structure unchanged.
- Keep item/reward naming consistent across tables.
- Avoid verbose explanatory translation inside cells.
- Use consistent wording for reward, purchase limit, sale period and event period.

### 27.6. Indonesian UI length and context rules

- Use context metadata for all short UI strings when available.
- Prefer concise Indonesian phrasing for buttons, menu labels, tabs, and table headers.
- Avoid over-formal or explanatory phrasing in dense UI tables.
- Do not shorten official in-game names without owner approval.
- Flag long button/menu/table-header text as `[UI_LENGTH_RISK]`.

### 27.7. Indonesian forbidden/style watchlist

Maintain a project-specific Indonesian forbidden wording list after reviewer feedback.

Minimum watchlist categories:

```text
literal English structure
wrong retained-English casing
unapproved item/skill/boss/NPC variant
inconsistent event period wording
verbose purchase-limit wording
incorrect reward/table wording
```

### 27.8. Indonesian before/after example bank

After every Final, add examples for:

```text
opening notice
maintenance notice
event period
sale period
reward table
purchase limit
button/menu short string
skill/item description
```

---

# Part D — Output contracts and report templates

---

## 28. Required AI output contract

Unless PM explicitly asks for quick draft only, AI must return:

1. Translated content or translated file.
2. QA summary.
3. Exception report.
4. Missing glossary terms.
5. Glossary conflicts.
6. Data risks.
7. In-game check list.
8. Final gate decision.
9. Reviewer handoff note if A+ is ready.
10. TM reuse report when TM exists.
11. Automated QA summary.
12. Terminology QA report.
13. Placeholder QA report.
14. Consistency QA report when applicable.
15. UI length warning report when applicable.
16. Pilot metrics update after Final.

AI must not return only the translation when using the full SOP.

## 29. Exception report template

```markdown
# Exception Report

## File
- Project:
- Source:
- Target language:
- Target locale:
- A+:
- Date:

## Summary
| Severity | Count |
|---|---:|
| P0 | 0 |
| P1 | 0 |
| P2 | 0 |
| P3 | 0 |

## P0 Blocking Issues
| ID | Location | Issue | Current | Required action | Owner | Status |
|---|---|---|---|---|---|---|

## P1 Major Issues
| ID | Location | Issue | Current | Suggested action | Owner | Status |
|---|---|---|---|---|---|---|

## Glossary Conflicts
| ID | Source term | Glossary target | Current context | AI suggestion | Action | Owner |
|---|---|---|---|---|---|---|

## Missing Glossary Terms
| ID | Source term | Proposed target | Target language | Context | Risk | Action |
|---|---|---|---|---|---|---|

## Data Risks
| ID | Location | Data | Risk | Action | Owner |
|---|---|---|---|---|---|

## In-game Check Required
| ID | Term/Text | Current | Reason | Evidence needed | Owner |
|---|---|---|---|---|---|

## Style Decisions
| ID | Location | Before | After | Reason |
|---|---|---|---|---|
```

## 30. QA spreadsheet columns

Recommended columns:

```text
issue_id
severity
category
sub_category
file
section
table_name
row
column
source_text
current_translation
suggested_translation
glossary_term
glossary_target
target_language
reason
evidence
owner
status
reviewer_comment
final_resolution
needs_glossary_update
needs_style_update
```

Category values:

```text
Data
Glossary
Style
Typo
Casing
Spacing
Punctuation
Table
Comment
Source Integrity
Untranslated
In-game
Format
Placeholder
CMS
```

Status values:

```text
Open
Fixed
Accepted
Rejected
False Positive
Needs Source Check
Needs In-game Check
Needs PM
Needs Glossary Owner
Closed
```

## 30A. Automated QA summary template

```markdown
# Automated QA Summary

## File
- Project:
- Source:
- Target language:
- Target locale:
- A/A+ file:
- Checker config:
- Run date:

## Gate decision
- Decision: PASS / PASS_WITH_WARNINGS / BLOCKED_P0 / NEEDS_OWNER_DECISION
- P0 count:
- P1 count:
- Waived issues:

## Checker results
| Checker | Status | P0 | P1 | P2 | Notes |
|---|---|---:|---:|---:|---|
| Terminology |  |  |  |  |  |
| Placeholder |  |  |  |  |  |
| Data diff |  |  |  |  |  |
| Consistency |  |  |  |  |  |
| UI length |  |  |  |  |  |
| TM conflict |  |  |  |  |  |

## Blocking findings
| ID | Checker | Severity | Location | Issue | Required action | Owner | Status |
|---|---|---|---|---|---|---|---|
```

## 30B. Pilot metrics log columns

```text
batch_id
game
content_type
target_language
target_locale
source_word_count
segment_count
tm_exact_matches
tm_fuzzy_matches
new_glossary_terms
glossary_conflicts
placeholder_errors
terminology_errors
data_errors
consistency_errors
ui_length_warnings
P0_count_A
P0_count_Aplus
P1_count_Aplus
human_edit_count
human_edit_per_1000_words
review_time_minutes
rework_cycles
AI_false_positive_count
useful_exception_count
final_gate_decision
notes
```

## 31. Term conflict log template

```markdown
# Term Conflict Log

| ID | Source term | Target language | Option A | Option B | Current glossary | In-game evidence | Recommendation | Decision | Owner |
|---|---|---|---|---|---|---|---|---|---|
| T001 | Timitris | TH | ... | ... | ... | Need screenshot | Check in-game | Pending | Glossary owner |
```

## 32. Style decision log template

```markdown
# Style Decision Log

| ID | Target language | Area | Old style | New style | Reason | Apply globally? |
|---|---|---|---|---|---|---|
| S001 | ID | Opening | ... | ... | More natural notice style | Yes |
```

---

# Part E — Reusable prompt pack

---

Prompt templates below are written in Vietnamese for the current team. If the SOP is used by an English-speaking vendor or another AI system that follows English instructions more reliably, translate the prompt instructions into English while preserving all variables, markers, status labels, and column names exactly.

## 33. Prompt 1 — Preflight

```markdown
Bạn là localization QA lead cho game MMORPG/mobile RPG.

Hãy preflight source file và glossary trước khi dịch.

## Batch Config
- Source language: {SOURCE_LANGUAGE}
- Target language: {TARGET_LANGUAGE}
- Target locale: {TARGET_LOCALE}
- Glossary source column: {GLOSSARY_SOURCE_COLUMN}
- Glossary target column: {GLOSSARY_TARGET_COLUMN}
- Content type: {CONTENT_TYPE}

## Input
- Source:
- Glossary:
- Style guide:
- Reference final files:

## Tasks
1. Tóm tắt cấu trúc tài liệu.
2. Liệt kê section/bảng có rủi ro cao.
3. Tìm term có trong source nhưng chưa có target term trong glossary.
4. Tìm glossary conflict hoặc duplicate.
5. Tìm data bất thường: ngày, giờ, số lượng, giá, giới hạn mua.
6. Tìm comment/track changes nếu có.
7. Tạo risk register.
8. Tạo batch glossary cho {TARGET_LANGUAGE}.

## Output
- Preflight summary.
- Risk register.
- Term gap list.
- Data risk list.
- Batch glossary.
- Recommended next actions.
```

## 34. Prompt 2 — Glossary-first Translation A

```markdown
Bạn là game localization translator/editor cho ngôn ngữ đích: {TARGET_LANGUAGE}.

Nhiệm vụ: dịch source từ {SOURCE_LANGUAGE} sang {TARGET_LANGUAGE} để tạo bản A — Glossary-first Draft.

## Batch Config
- Content type: {CONTENT_TYPE}
- Target locale: {TARGET_LOCALE}
- Glossary source column: {GLOSSARY_SOURCE_COLUMN}
- Glossary target column: {GLOSSARY_TARGET_COLUMN}
- No pivot translation: Yes

## Input
1. Source document:
[PASTE SOURCE OR PROVIDE FILE]

2. Batch glossary:
[PASTE BATCH GLOSSARY OR PROVIDE FILE]

3. Target style guide:
[PASTE STYLE GUIDE]

4. Reference final examples:
[OPTIONAL]

## Priority
1. Đúng nghĩa.
2. Đúng glossary theo target column.
3. Giữ nguyên số/data/layout.
4. Flag chỗ không chắc.
5. Văn phong tạm ổn, chưa cần polish mạnh.

## Hard Rules
1. Dùng đúng target term cho mọi glossary entry có status LOCKED hoặc INGAME_LOCKED.
2. Không tự đổi số, ngày, giờ, giá, giới hạn mua, quantity, level, tỷ lệ phần trăm.
3. Không tự đổi tên item, skill, boss, NPC nếu đã có glossary.
4. Không xóa hoặc bỏ qua dòng trong bảng.
5. Không tự merge/split table row nếu không cần thiết.
6. Không xóa comment/track changes.
7. Không tự sửa source data kể cả khi thấy sai; hãy flag [DATA_RISK].
8. Nếu glossary thiếu term, dịch theo context và flag [MISSING_GLOSSARY].
9. Nếu glossary conflict với context hoặc in-game style, dùng glossary nhưng flag [GLOSSARY_CONFLICT].
10. Không dùng ngôn ngữ khác làm pivot nếu source chính là {SOURCE_LANGUAGE}.
11. Không rewrite quá sáng tạo. Đây là bản A, ưu tiên fidelity.

## Markers
- [MISSING_GLOSSARY: source => proposed]
- [GLOSSARY_CONFLICT: source | glossary_target | context_suggestion | reason]
- [DATA_RISK: value | reason]
- [SOURCE_CHECK: text | reason]
- [INGAME_CHECK: term | reason]
- [TABLE_RISK: location | reason]
- [PLACEHOLDER_CHECK: placeholder | reason]

## Deliverables
1. Translated document A.
2. Exception list with all markers.
3. Term gap list.
```

## 35. Prompt 3 — Technical QA for A

```markdown
Bạn là localization QA checker.

Hãy QA bản A trước khi polish.

## Batch Config
- Source language: {SOURCE_LANGUAGE}
- Target language: {TARGET_LANGUAGE}
- Target locale: {TARGET_LOCALE}
- Glossary target column: {GLOSSARY_TARGET_COLUMN}

## Input
- Source file:
- A draft:
- Batch glossary:
- Target style guide:

## Check
1. Source integrity: section, table, row, column.
2. Data: number, date, time, price, quantity, percentage, purchase limit.
3. Glossary: LOCKED/INGAME_LOCKED terms, forbidden variants, consistency.
4. Target language mechanics: typo, spacing, casing, punctuation, parentheses.
5. Untranslated text.
6. Comments/track changes.
7. Placeholders/variables/tags.
8. Table risk.

## Output
- QA summary.
- Issue table with severity P0/P1/P2/P3.
- Suggested fixes.
- Gate decision: Pass to A+ / Blocked / Pass with risks.
```

## 36. Prompt 4 — Controlled Style Audit A+

```markdown
Bạn là game localization editor cho ngôn ngữ đích: {TARGET_LANGUAGE}.

Hãy biên tập bản A thành A+.

Đây là controlled style audit, không phải rewrite tự do.

## Input
1. Draft A:
2. Batch glossary:
3. Target style guide:
4. A QA report:

## Allowed
- Sửa câu cứng/literal.
- Sửa typo.
- Sửa spacing/casing.
- Làm heading/bullet tự nhiên hơn.
- Làm văn phong giống update note game hơn.
- Chuẩn hóa table header nếu style guide yêu cầu và không làm đổi meaning.

## Forbidden
- Không đổi số.
- Không đổi ngày/giờ.
- Không đổi giá.
- Không đổi quantity.
- Không đổi purchase limit.
- Không đổi term LOCKED/INGAME_LOCKED.
- Không đổi item/skill/boss/NPC name đã có glossary.
- Không đổi cấu trúc bảng.
- Không xóa marker/comment chưa xử lý.
- Không dùng bản VI/TH/ID khác làm pivot nếu source chính là {SOURCE_LANGUAGE}.

Nếu cần đổi term hoặc data, flag:
- [GLOSSARY_CONFLICT]
- [DATA_RISK]
- [INGAME_CHECK]
- [SOURCE_CHECK]

## Output
1. Bản A+.
2. Change summary.
3. Exception report.
4. Term/in-game check list.
```

## 37. Prompt 5 — Final QA for A+

```markdown
Bạn là localization QA lead.

Hãy kiểm tra bản A+ trước khi đưa human review.

## Input
- Source:
- A draft:
- A+:
- Batch glossary:
- Target style guide:
- Previous QA report:

## Check
1. A+ có làm đổi data so với source/A không?
2. A+ có làm drift term glossary không?
3. A+ có làm mất bảng/dòng không?
4. A+ có còn marker/comment không?
5. A+ có còn lỗi spacing/casing/typo không?
6. Placeholder/variable/tag có còn đúng không?
7. A+ có đủ sạch để human review exception-based không?

## Output
- Pass/Fail gate.
- P0/P1/P2/P3 table.
- Exception report.
- Handoff note for human reviewer.
```

## 38. Prompt 6 — Feedback extraction after Final

```markdown
Bạn là localization process analyst.

Hãy so sánh A+ và Final để rút feedback cải thiện pipeline.

## Input
- A+ file:
- Final file:
- Batch glossary:
- Target style guide:

## Tasks
1. Liệt kê tất cả thay đổi từ A+ sang Final.
2. Phân loại thay đổi:
   - GLOSSARY_MISSING
   - GLOSSARY_WRONG
   - GLOSSARY_OUTDATED
   - AI_CONTEXT_ERROR
   - AI_STYLE_ERROR
   - AI_DATA_ERROR
   - SOURCE_AMBIGUITY
   - INGAME_OVERRIDE
   - STYLE_GUIDE_MISSING
   - TYPO_MECHANICAL
   - TABLE_FORMAT_ERROR
   - REVIEWER_PREFERENCE
3. Đề xuất cập nhật glossary.
4. Đề xuất cập nhật style guide.
5. Đề xuất cập nhật prompt.
6. Tính metrics.
7. Đề xuất segment nên thêm vào TM.
8. Đề xuất deprecated/forbidden wording nếu reviewer sửa lặp lại.

## Output
- Feedback summary.
- Glossary update table.
- Style guide update table.
- Prompt update table.
- TM update table.
- Error metrics.
```

## 38A. Prompt 7 — TM reuse preflight

```markdown
Bạn là localization process analyst.

Hãy kiểm tra Translation Memory trước khi dịch batch mới.

## Input
- Source file:
- TM file:
- Batch config:
- Context metadata, nếu có:
- Batch glossary, nếu có:

## Tasks
1. Tìm exact match giữa source và TM.
2. Tìm fuzzy match có thể dùng làm reference.
3. Tìm TM segment đã deprecated.
4. Tìm same source nhưng nhiều target khác nhau.
5. Tìm TM target conflict với LOCKED/INGAME_LOCKED glossary.
6. Gắn decision: reuse / reference only / reject / need reviewer.

## Output
- TM reuse report.
- TM conflict list.
- Exact match list.
- Fuzzy reference list.
- Gate recommendation before Draft A.
```

## 38B. Prompt 8 — Automated terminology QA

```markdown
Bạn là terminology QA checker cho game localization.

## Input
- Source file:
- Target draft:
- Batch glossary:
- Forbidden terms:
- Target language:
- Target locale:

## Check
1. Mọi term status LOCKED/INGAME_LOCKED phải đúng target term.
2. PREFERRED term nên được dùng nhất quán; flag nếu có variant lạ.
3. REVIEW/MISSING term phải có marker hoặc issue.
4. Forbidden/DEPRECATED target không được xuất hiện.
5. Same source term không được có nhiều target term nếu context không justify.

## Output
- terminology_QA_report table.
- P0/P1/P2 summary.
- Gate decision.
```

## 38C. Prompt 9 — Placeholder, data, consistency, and UI length QA

```markdown
Bạn là automated localization QA lead.

## Input
- Source file:
- Target draft:
- Placeholder pattern rules:
- Context metadata:
- UI length rules:
- Previous files in same batch, nếu có:

## Check
1. Placeholder/token/tag exact match.
2. Number/date/time/price/quantity/percentage/level/duration drift.
3. Same source -> different target consistency.
4. Same event/item/package/table header consistency.
5. UI length warnings based on ui_type and target locale.
6. Missing context for UI-critical strings.

## Output
- placeholder_QA_report.
- data_diff_report.
- consistency_QA_report.
- UI_length_warning_report.
- automated_QA_summary.
- Gate decision.
```

## 38D. Prompt 10 — Post-final governance update

```markdown
Bạn là localization governance owner.

Hãy dùng Final đã được human review để cập nhật tài sản hệ thống.

## Input
- Source file:
- A+ file:
- Final file:
- Batch glossary:
- Master glossary:
- TM file:
- Style guide:
- QA reports:

## Tasks
1. Extract human edits and classify root cause.
2. Propose glossary additions/changes/deprecations.
3. Propose forbidden variants.
4. Propose style guide updates and before/after examples.
5. Propose TM segments to add, review, or deprecate.
6. Update pilot metrics.
7. Identify repeated errors requiring prompt/checker update.

## Output
- governance_update_report.
- glossary_update_table.
- forbidden_terms_update_table.
- style_guide_update_table.
- TM_update_table.
- pilot_metrics_row.
- prompt_or_checker_update_list.
```

---

# Part F — Metrics

---

## 39. Quality metrics

| Metric | Formula / meaning | Target |
|---|---|---|
| P0 count in A | Number of P0 issues in Draft A | Decrease over time |
| P0 count in A+ | Number of P0 issues in A+ | 0 or clearly flagged |
| Glossary compliance | Correct LOCKED terms / total LOCKED terms | 100% |
| Term drift count | Terms changed wrongly during A+ | 0 |
| Data drift count | Numbers/dates/times changed wrongly | 0 |
| Missing content count | Missing section/table/row | 0 |
| Placeholder drift count | Changed/broken placeholders | 0 |
| Comment unresolved count | Open comments before Final | 0 |
| Typo per 1,000 words | Typos / 1,000 words | Decrease over time |

## 40. Efficiency metrics

| Metric | Meaning |
|---|---|
| Human edit count | Number of human edits in Final. |
| Human edit per 1,000 words | Editing load. |
| Review time | Time spent by reviewer. |
| Rework cycles | Number of back-and-forth rounds. |
| AI false positive rate | Incorrect AI flags / total flags. |
| Exception precision | Useful AI flags / total flags. |

## 41. Feedback metrics

| Metric | Meaning |
|---|---|
| New glossary terms per batch | How many terms need adding. |
| Style guide updates per batch | How many rules need adding. |
| Repeated error count | Errors repeated across batches. |
| In-game conflict count | Terms conflicting with current build. |
| Prompt update count | Prompt changes required. |

## 42. Target quality by stage

### Draft A

```markdown
- Glossary compliance: >= 95%
- Data drift: 0
- Missing content: 0
- P0: 0 or flagged
- Style: acceptable draft, not final
```

### A+

```markdown
- Glossary compliance: 100% for LOCKED/INGAME_LOCKED terms
- Data drift: 0
- Missing content: 0
- Placeholder drift: 0
- P0: 0 or clearly flagged
- P1: all have owner/action
- Style: close to human edit
- Reviewer can focus on exceptions instead of rewriting everything
```

### Final

```markdown
- P0: 0
- P1: 0 or approved exception
- Marker: 0
- Internal comment: 0
- Glossary compliance: 100%
- Publish-ready
```

## 42A. Pilot stop/go thresholds

Use these thresholds after each batch to decide whether to expand pilot.

| Metric | Green | Yellow | Red |
|---|---:|---:|---:|
| P0 in A+ not owner-waived | 0 | 1 | 2+ |
| Placeholder drift | 0 | 1 waived | 1+ unwaived |
| Data drift | 0 | 1 flagged before handoff | 1+ missed until human review |
| Locked glossary compliance | 100% | 98-99% with fixes | <98% |
| Human edit per 1,000 words | decreasing | flat | increasing for 2 batches |
| Useful exception precision | >70% | 50-70% | <50% |
| Repeated error count | decreasing | flat | increasing |

Action:

```markdown
- Green for 2-3 batches: expand to more content types/locales.
- Yellow: continue pilot but update glossary/style/prompt/checker.
- Red: pause expansion and fix root cause before next production batch.
```

---

# Part G — Definition of Done

---

## 43. Definition of Done for Draft A

```markdown
- [ ] Full source translated.
- [ ] Main structure preserved.
- [ ] No obvious missing table/row.
- [ ] LOCKED glossary used.
- [ ] Missing glossary terms flagged.
- [ ] Glossary conflicts flagged.
- [ ] Data risks flagged.
- [ ] Placeholder/variable risks flagged.
- [ ] Exception list created.
```

## 44. Definition of Done for A+

```markdown
- [ ] Style is more natural than A.
- [ ] No obvious machine-translation phrasing in main sections.
- [ ] No term drift.
- [ ] No data drift.
- [ ] No missing section/table/row.
- [ ] No placeholder drift.
- [ ] Basic spacing/casing/typo issues cleaned.
- [ ] Unresolved comments/markers reported.
- [ ] Handoff note created.
```

## 45. Definition of Done for Final

```markdown
- [ ] All P0/P1 resolved or approved.
- [ ] No markers remain.
- [ ] No internal comments remain.
- [ ] No track changes remain.
- [ ] Final glossary terms correct.
- [ ] Final data checked.
- [ ] Reward/promotion tables checked.
- [ ] File clean for publish.
- [ ] Feedback pack created.
```

---

# Part H — Quick batch runbook

---

Copy this for every project.

```markdown
# Localization Batch Runbook

## Project Info
- Game:
- Content:
- Date:
- Source:
- Source language:
- Target language:
- Target locale:
- Glossary:
- Glossary source column:
- Glossary target column:
- Style guide:
- Reference:
- Output:

## Stage 0 — Setup
- [ ] Source confirmed
- [ ] Source/target language confirmed
- [ ] Glossary target column confirmed
- [ ] Style guide confirmed
- [ ] Reviewer confirmed
- [ ] Final approver confirmed
- [ ] No-pivot rule confirmed

## Stage 1 — Preflight
- [ ] Source structure checked
- [ ] Tables counted
- [ ] Comments checked
- [ ] Term gap checked
- [ ] Batch glossary created
- [ ] TM reuse checked
- [ ] Context metadata checked
- [ ] UI length risk checked when applicable
- [ ] Data risks checked
- [ ] Risk register created

## Stage 2 — AI Draft A
- [ ] A generated
- [ ] Glossary used
- [ ] Structure preserved
- [ ] Markers inserted where needed
- [ ] Exception list created

## Stage 3 — A Technical QA
- [ ] Numeric QA
- [ ] Date/time QA
- [ ] Glossary QA
- [ ] Table QA
- [ ] Placeholder QA
- [ ] Automated terminology checker run
- [ ] Automated placeholder checker run
- [ ] Data diff checker run
- [ ] Typo/spacing/casing QA
- [ ] Comments exported
- [ ] Gate decision made

## Stage 4 — A+ Controlled Style Audit
- [ ] A+ generated
- [ ] No free rewrite
- [ ] Glossary locked
- [ ] Data locked
- [ ] Style improved
- [ ] Change summary created

## Stage 5 — A+ Final QA
- [ ] A vs A+ diff checked
- [ ] Source vs A+ data checked
- [ ] Glossary drift checked
- [ ] Table drift checked
- [ ] Placeholder drift checked
- [ ] Consistency checker run
- [ ] UI length checker run when applicable
- [ ] Automated QA summary attached
- [ ] Exception report finalized
- [ ] Handoff note created

## Stage 6 — Human Review
- [ ] P0 reviewed
- [ ] P1 reviewed
- [ ] Term conflicts resolved
- [ ] In-game checks completed
- [ ] Promotion/reward tables checked
- [ ] Reviewer comments resolved

## Stage 7 — Final
- [ ] Markers removed
- [ ] Comments resolved
- [ ] Track changes accepted/cleaned
- [ ] Final QA complete
- [ ] Sign-off complete
- [ ] Publish file created

## Stage 8 — Feedback
- [ ] Final vs A+ changes extracted
- [ ] Glossary updates logged
- [ ] Style guide updates logged
- [ ] TM updates logged
- [ ] Forbidden variants logged
- [ ] Prompt/checker updates logged
- [ ] Error metrics recorded
```

---

# Part I — Human reviewer checklist

---

```markdown
# Human Review Checklist for A+

## First pass: blocking
- [ ] Có mất đoạn/bảng không?
- [ ] Có sai số/ngày/giờ/giá không?
- [ ] Có comment open không?
- [ ] Có marker P0/P1 không?
- [ ] Có reward/promotion table cần check không?
- [ ] Có placeholder/variable bị sai không?

## Term pass
- [ ] Tên item đúng in-game.
- [ ] Tên skill đúng in-game.
- [ ] Tên boss/NPC đúng in-game.
- [ ] Term glossary đúng theo target language.
- [ ] Term conflict đã chốt.
- [ ] Missing glossary đã thêm hoặc có decision.

## Style pass
- [ ] Heading tự nhiên.
- [ ] Bullet dễ đọc.
- [ ] Không còn văn dịch máy rõ ràng.
- [ ] Casing/spacing thống nhất.
- [ ] Date/time format thống nhất.
- [ ] Table headers nhất quán.

## Final pass
- [ ] Không còn marker.
- [ ] Không còn comment nội bộ.
- [ ] Không còn track changes.
- [ ] File sạch để publish.
```

---

# Part J — Operating modes

---

## 46. Short file, low table risk

You may combine stages:

```text
Stage 1 + Stage 2 → Stage 3 quick QA → Stage 4 A+ → Human Review → Final
```

Do not skip:

- glossary lock;
- data lock;
- final QA;
- feedback loop.

## 47. Long file with reward/promotion tables

Do not combine stages.

Required:

```text
Preflight
A
A Technical QA
A+
A+ Final QA
Human Review
Final
Feedback
```

Must check:

- table row count;
- date/time;
- price;
- purchase limit;
- quantity;
- item tags;
- boss reward;
- sale package components;
- placeholders/CMS tags.

## 48. Multi-file event batch

Recommended order:

1. Translate the file with the most terms first.
2. Extract term gaps.
3. Update temporary batch glossary.
4. Translate the remaining files.
5. QA cross-file consistency.
6. Human review by group.

Cross-file checklist:

```markdown
- [ ] Event name consistent across files.
- [ ] Item names consistent across files.
- [ ] Skill/boss/NPC names consistent across files.
- [ ] Date/time consistent across files.
- [ ] Promotion package names consistent across files.
- [ ] Reward quantities consistent when same source item appears.
- [ ] Heading style consistent.
```

---

# Part K — Common failure modes and prevention

---

## 49. AI follows glossary but style is stiff

Symptoms:

- long sentences;
- repeated pronouns;
- literal headings;
- target text sounds like machine translation.

Prevention:

- use A+ controlled style audit;
- provide recent Final references;
- update target style appendix;
- build before/after examples.

## 50. AI polish causes glossary drift

Symptoms:

- term changed for fluency;
- item/skill name rewritten;
- synonym used instead of locked term.

Prevention:

- use LOCKED/INGAME_LOCKED status;
- hard-lock prompt;
- glossary QA after A+;
- forbidden term list;
- term drift diff.

## 51. AI changes numbers/dates/times

Symptoms:

- `30` becomes `400`;
- `15 June` becomes `15 July`;
- `x 1` becomes another quantity format;
- timezone lost.

Prevention:

- data lock;
- source vs A vs A+ numeric diff;
- Stage 3 and Stage 5 QA;
- every suspicious date must be flagged, not corrected.

## 52. Table content is lost

Symptoms:

- reward table empty;
- item list cut;
- rows merged incorrectly;
- comments inserted into wrong cells.

Prevention:

- table count;
- high-risk row count;
- P0 for missing reward/promotion table;
- human review critical tables.

## 53. Glossary outdated against in-game text

Symptoms:

- reviewer says “different from in-game”;
- in-game uses another term;
- same item has two target terms across files.

Prevention:

- use `INGAME_LOCKED` with evidence;
- keep screenshot/string dump links;
- maintain term conflict log;
- update glossary after Final;
- assign glossary owner.

## 54. Reviewer has to rewrite too much

Symptoms:

- A+ still reads like raw MT;
- many basic typos;
- target style guide missing rules;
- prompt too vague.

Prevention:

- add Final references;
- strengthen A+ checklist;
- measure human edit per 1,000 words;
- update prompts from actual Final edits;
- create example bank.

## 54A. Approved wording is not reused

Symptoms:

- same notice phrase is translated again every batch;
- reviewer repeatedly changes wording back to previous Final;
- same table header/event mechanic has different target text.

Prevention:

- build TM from Final files;
- run TM reuse preflight;
- flag same source with multiple targets;
- mark context-specific variants in TM.

## 54B. UI text overflows or looks too long

Symptoms:

- Thai/Indonesian UI labels exceed button/menu/table space;
- table headers wrap badly;
- reviewer shortens strings without a recorded rule.

Prevention:

- require `ui_type` and `character_limit` for UI strings;
- run UI length checker;
- add before/after examples for short UI wording;
- escalate locked name overflow instead of shortening silently.

## 54C. Automated QA produces noise

Symptoms:

- too many false positives;
- reviewer ignores QA report;
- checker flags approved context variants.

Prevention:

- add context metadata and waiver rules;
- tune placeholder patterns;
- track false positive rate;
- convert repeated false positives into checker exceptions.

---

# Part L — Team handoff message template

---

```markdown
Hi team,

Mình gửi bản A+ cho {TARGET_LANGUAGE} đã qua:
1. AI glossary-first translation
2. Technical QA
3. Controlled style audit
4. Final QA gate

## Files
- A+:
- QA report:
- Exception report:
- Term gap report:
- TM reuse report:
- Automated QA summary:
- Terminology QA report:
- Placeholder QA report:
- Consistency QA report:
- UI length warning report, nếu có:

## Please focus on
- P0/P1 issues trong exception report
- Term conflict cần in-game check
- Promotion/reward tables
- Open comments
- Missing glossary terms
- Data risks
- Automated QA P0/P1 findings
- UI length warnings, nếu có

## Notes
- AI không tự sửa data bất thường; các case này đã được flag [DATA_RISK].
- AI không tự đổi LOCKED glossary; conflict đã được flag [GLOSSARY_CONFLICT].
- AI dịch trực tiếp từ {SOURCE_LANGUAGE} sang {TARGET_LANGUAGE}; không dùng ngôn ngữ khác làm pivot.
- Sau khi team chốt Final, feedback sẽ được extract để update glossary/style guide/prompt.
```

---

# Part M — SOP maintenance

---

## 55. Review cadence

Review this SOP after every 3–5 batches or whenever a repeated issue appears.

Questions:

```markdown
- Lỗi nào lặp lại nhiều nhất?
- Lỗi nào AI bắt tốt?
- Lỗi nào AI hay bỏ sót?
- Term nào reviewer sửa đi sửa lại?
- Style rule nào chưa rõ?
- Prompt nào làm AI đổi term/data?
- Bảng nào dễ vỡ nhất?
- Human review có nhanh hơn không?
- A+ có đủ tốt để review exception-based chưa?
```

## 56. Update decisions

If repeated error is glossary-related:

```text
Update glossary + forbidden variants.
```

If repeated error is style-related:

```text
Update style guide + add before/after examples.
```

If repeated error is data-related:

```text
Add stricter numeric/date diff QA.
```

If repeated error is table-related:

```text
Add table row/column QA and mark high-risk tables.
```

If repeated error is AI over-editing:

```text
Tighten A+ prompt hard locks.
```

If repeated error is TM reuse-related:

```text
Update TM status/context, deprecate old segment, or add consistency rule.
```

If repeated error is automation false-positive:

```text
Update checker config, placeholder patterns, context exceptions, or UI length rules.
```

If repeated edit is reviewer preference:

```text
Convert preference into explicit style rule, or ignore if not needed.
```

## 57. Change log

| Version | Date | Change |
|---|---|---|
| 1.0 | Previous | Vietnamese-focused AI + Glossary + Human Review pipeline. |
| 2.0 | 2026-07-05 | Converted to multilingual SOP with target-language variables, TH/ID support, no-pivot rule, multilingual glossary column mapping, AI output contract, target language appendices, and stronger batch config. |
| 2.0.1 | 2026-07-05 | Post-audit patch: generic batch config placeholders, explicit one-target batch rule, project-defined output format, glossary status/confidence derivation for current multilang CSV, placeholder/token exact-match QA, fixed table-header guardrails, TH/ID starter-appendix notes, and prompt-pack language policy. |
| 2.1.0 | 2026-07-06 | Production pilot upgrade from optimization review: Translation Memory reuse, master glossary governance, automated terminology QA, automated placeholder QA, consistency audit, UI length validation, context metadata, pilot metrics, stronger TH/ID production appendices, and automated final QA gates. |

---

## 58. Final reminder

Use this SOP as a controlled production workflow, not as a general translation prompt.

For each batch, choose exactly one target language and exactly one matching target glossary column. Do not write shorthand such as `TH/ID/VI` or `th/id/vn` in a live batch config.

Example — EN -> TH:

```text
Source language: EN
Target language: TH
Glossary source column: en
Glossary target column: th
No pivot translation: Yes
Output required: A+ translation + QA report + exception report
```

Example — EN -> ID:

```text
Source language: EN
Target language: ID
Glossary source column: en
Glossary target column: id
No pivot translation: Yes
Output required: A+ translation + QA report + exception report
```

For production pilot, also attach the automation package when available:

```text
TM file
batch glossary with status/confidence
forbidden terms
placeholder patterns
context metadata
UI length rules
automated QA reports
pilot metrics row
```

This is the minimum information needed for another team member or AI system to run the workflow consistently.
