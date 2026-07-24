#!/usr/bin/env python3
"""
lookup_term.py — L2M Glossary Lookup (portable, self-contained) — v2 multilang
===============================================================================
Tra cứu thuật ngữ Lineage2M KR/VN/EN/TH/ID trong bộ glossary đóng kèm skill này
(data/glossary_multilang.csv — 17.338 term; VN chuẩn central, EN official NC Termbase).

Chạy được ở mọi nơi có Python 3.8+ (Cowork bash, code tool của Claude.ai, máy cá nhân).
KHÔNG phụ thuộc workspace: tự tìm CSV theo đường dẫn tương đối cạnh script.

Usage:
    python3 lookup_term.py "파워 스트라이크"
    python3 lookup_term.py "Cường Hóa" --lang vn
    python3 lookup_term.py "Power Strike" --lang en
    python3 lookup_term.py "매직" --category SKILL --limit 15
    python3 lookup_term.py "강화" --lang kr --exact
    python3 lookup_term.py "발라카스" --full
    python3 lookup_term.py --categories

Author: TuanQG x Claude | L2M Glossary (distributable)
"""
import csv
import sys
import argparse
import re
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent

DATA_NAMES = ["glossary_multilang.csv", "glossary_central.csv"]
LANG_COLS = {"kr": "kr", "vn": "vn", "en": "en", "th": "th", "id": "id"}
AUTO_LANGS = ["kr", "vn", "en"]


def find_csv(explicit=None):
    if explicit:
        p = Path(explicit)
        return p if p.exists() else None
    bases = [SCRIPT_DIR.parent / "data", SCRIPT_DIR / "data", SCRIPT_DIR, SCRIPT_DIR.parent,
             Path.cwd() / "data", Path.cwd()]
    for name in DATA_NAMES:
        for b in bases:
            c = b / name
            if c.exists():
                return c
    return None


def normalize(text):
    return re.sub(r"\s+", " ", str(text).lower().strip())


def load_rows(csv_path):
    with open(str(csv_path), encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def search(rows, query, lang="auto", category=None, limit=30, exact=False):
    qn = normalize(query)
    catf = category.upper() if category else None
    langs = AUTO_LANGS if lang == "auto" else [lang]
    out = []
    for row in rows:
        cat = row.get("category", "") or ""
        if catf and catf not in cat.upper():
            continue
        hit = False
        for lg in langs:
            col = LANG_COLS.get(lg)
            val = normalize(row.get(col, "") or "")
            if not val:
                continue
            if (qn == val) if exact else (qn in val):
                hit = True
                break
        if hit:
            out.append(row)
            if len(out) >= limit:
                break
    return out


def fmt(results, query, full=False):
    if not results:
        return ("KHONG tim thay term khop voi '%s'. Thu: rut ngan query, --lang auto, hoac bo --category." % query)
    if full:
        lines = ["'%s' — %d ket qua (full)" % (query, len(results)), ""]
        for r in results:
            lines.append("[%s] %s" % (r.get("category", ""), r.get("kr", "")))
            lines.append("   VN: %s   (nguon VN: %s)" % (r.get("vn", "") or "-", r.get("vn_origin", "") or "-"))
            lines.append("   EN: %s   (nguon EN: %s)" % (r.get("en", "") or "-", r.get("en_match", "") or "-"))
            lines.append("   TH: %s | ID: %s" % (r.get("th", "") or "-", r.get("id", "") or "-"))
            sid = r.get("string_id", "") or ""
            if sid:
                lines.append("   string_id: %s" % sid)
            lines.append("")
        return "\n".join(lines)
    lines = [
        "'%s' — %d ket qua (them --full de xem TH/ID + nguon)" % (query, len(results)),
        "",
        "%-14s %-26s %-32s EN" % ("CATEGORY", "KR", "VN"),
        "-" * 105,
    ]
    for r in results:
        lines.append("%-14s %-26s %-32s %s" % (
            (r.get("category", "") or ""),
            (r.get("kr", "") or "")[:25],
            (r.get("vn", "") or "")[:31],
            (r.get("en", "") or "")[:30],
        ))
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser(description="Tra cuu term L2M Glossary KR/VN/EN/TH/ID",
                                 formatter_class=argparse.RawTextHelpFormatter)
    ap.add_argument("query", nargs="?", help="Term can tim (KR, VN, EN, TH hoac ID)")
    ap.add_argument("--lang", default="auto", choices=["auto", "kr", "vn", "en", "th", "id"],
                    help="auto = quet KR+VN+EN; chi dinh th/id de tra 2 cot do")
    ap.add_argument("--category", "-c", default=None, help="Loc category (VD: SKILL, UI, SYSTEM, ITEM)")
    ap.add_argument("--limit", "-n", type=int, default=30)
    ap.add_argument("--exact", action="store_true", help="Khop tron term thay vi chua")
    ap.add_argument("--full", action="store_true", help="In block day du VN/EN/TH/ID + nguon tung term")
    ap.add_argument("--categories", action="store_true", help="Liet ke tat ca category")
    ap.add_argument("--csv", default=None, help="Duong dan CSV (mac dinh: tu tim canh script)")
    args = ap.parse_args()

    csv_path = find_csv(args.csv)
    if not csv_path:
        print("ERROR: Khong tim thay data/glossary_multilang.csv canh script.\n"
              "       Hay giai nen NGUYEN goi skill (giu thu muc data/).")
        sys.exit(1)

    rows = load_rows(csv_path)

    if args.categories:
        cats = sorted({(r.get("category", "") or "") for r in rows if r.get("category")})
        print("%d categories (%d terms tong):" % (len(cats), len(rows)))
        print(", ".join(cats))
        return

    if not args.query:
        ap.error("thieu 'query' (hoac dung --categories)")

    print(fmt(search(rows, args.query, args.lang, args.category, args.limit, args.exact),
              args.query, args.full))


if __name__ == "__main__":
    main()
