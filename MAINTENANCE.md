# Updating the website

The site uses Jekyll on GitHub Pages. Commit and push changes with plain `git`; the configured remote uses SSH.

## Shared content

Edit these files once to update both languages:

- `_data/profile.yml`: supervision, grants and talks. Names, years and grant amounts are shared; translated descriptions have `en` and `fr` values. Use `end: null` for an ongoing supervision. `amount_eur` is the amount in euros; `scope: project` explicitly identifies total project funding.
- `_data/publications.yml`: publication metadata, author lists, links and BibTeX fields. Keep each `bibtex.key` unique and stable. The bibliography, homepage lists, individual citations and full BibTeX download all use this source. The type filter follows the cited BibTeX version (`article`, `inproceedings` or `misc` for a preprint); the display year can differ from the preprint year for an accepted conference paper.
- `_data/software.yml`: descriptions, repository and README links, category and optional `paper` pointing to a publication's `bibtex.key`. Linked tool names are also searchable in the bibliography. Omit unavailable links rather than adding placeholders.
- `_data/software_groups.yml`: software category names in both languages.
- `_data/ui.yml`: translated interface labels.

The remaining prose, education, teaching and service sections are in `index.md` and `fr/index.md`; update both when changing them.

## Presentation and assets

- `_layouts/default.html`: shared page structure and profile links.
- `assets/css/site.css`: responsive layout, typography, keyboard focus and print styles.
- `assets/js/publications.js`: local publication filtering and clipboard actions. The full bibliography and expandable BibTeX remain usable without JavaScript.
- `assets/images/antoine-limasset.webp`: optimized portrait, 360 × 465 pixels. Keep the width and height in the layout consistent if replacing it.
- `assets/antoine-limasset-cv.pdf`: public CV download; regenerate this PDF separately when editing the local LaTeX CV.

## Check before publishing

Build with `jekyll build` in an environment with Jekyll and `jekyll-theme-minimal` installed. Check `/`, `/fr/`, `/publications/` and `/fr/publications/` at desktop and mobile widths. Verify combined search/year/type filters, copying a citation and BibTeX, and the complete `/publications.bib` export.

Stage explicit website paths. Local CV sources, bibliography email drafts and the original group-photo screenshot are deliberately excluded from the built site and should remain uncommitted.
