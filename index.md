---
layout: default
title: Antoine Limasset
lang: en
translation_url: /fr/
---

# Antoine Limasset

**English** · [Français]({{ '/fr/' | relative_url }}) · [CV (PDF)]({{ '/assets/antoine-limasset-cv.pdf' | relative_url }})

Chargé de recherche CNRS · CRIStAL · Université de Lille<br>
Bonsai team — Algorithms and data structures for sequence analysis

[Email](mailto:antoine.limasset@univ-lille.fr) · [ORCID](https://orcid.org/0000-0002-0669-4141) · [Google Scholar](https://scholar.google.com/citations?user=EW4USK4AAAAJ) · [GitHub](https://github.com/Malfoy) · [Bluesky @npmalfoy.bsky.social](https://bsky.app/profile/npmalfoy.bsky.social)

[Publications](#publications) · [Software](#software) · [Team](#team--supervision) · [Funding](#grants--funding) · [Teaching](#teaching) · [Contact](#contact)

## About Me

I am a CNRS researcher in the Bonsai team at CRIStAL, Université de Lille. I design algorithms and data structures for large genomic and transcriptomic datasets, connecting theoretical computer science with practical bioinformatics.

My research focuses on sequence indexing, compact k-mer representations, compression, sketching and sequencing error correction. I develop open-source tools to make large-scale sequence analysis more efficient in both memory and computation.

I obtained my habilitation to direct research (HDR) at Université de Lille in September 2025.

## Publications

[Full bibliography with all authors and publication links]({{ '/publications/' | relative_url }}) · [Google Scholar](https://scholar.google.com/citations?user=EW4USK4AAAAJ)

<a href="{{ '/publications.bib' | relative_url }}" download>Download all references (BibTeX)</a>

{% include publication-list.html category="main" %}

## Collaborative Publications

{% include publication-list.html category="collaboration" %}

## Software

Open-source tools developed with my collaborators. Each link leads to the project repository.

{% for tool in site.data.software %}
- **[{{ tool.name }}]({{ tool.url }})**: {{ tool.description }}
{% endfor %}

**BRRR**: A long-read correction tool based on the k-mer spectrum.

## Team & Supervision

### Current PhD Students

- **Étienne Conchon-Kerjan** — PhD director, 2026–present.
- **Yohan Hernandez-Courbevoie** — PhD director, 2024–present. Indexing global transcriptomic databases.
- **Timothé Rouzé** — PhD co-supervisor, 2023–present. Compression of large sequencing collections.

### Research Staff

- **Lucas Robidou** — Research engineer, supervisor, 2026–present. Scalable genomic sequence analysis.
- **Florian Ingels** — Postdoctoral researcher, supervisor, 2025–2026. Minimizer schemes.

### Former Students and Staff

- **Léa Vandamme** — PhD director, 2022–2025. Indexing third-generation sequencing datasets.
- **Caleb Smith** — Engineer, supervisor, 2023–2024. Compression of large sequencing collections.
- **Coralie Rohmer** — PhD co-supervisor, 2019–2023. Multiple sequence alignment algorithms for third-generation sequencing.

## Education

- **2025** — Habilitation à diriger des recherches (HDR), Université de Lille. Defended on 4 September 2025.
- **2017** — PhD in Computer Science, Université de Rennes 1. *Novel approaches for the exploitation of high throughput sequencing data*. Supervised by Pierre Peterlongo and Dominique Lavenier; defended on 12 July 2017.
- **2014** — MSc in Computer Science, École Normale Supérieure de Rennes.
- **2012** — BSc in Computer Science, École Normale Supérieure de Cachan.

## Professional Experience

- **2018–present** — CNRS researcher, Bonsai team, CRIStAL, Lille, France.
- **2017** — Postdoctoral researcher, Université Libre de Bruxelles, Belgium. De novo assembly of heterozygous genomes.

## Grants & Funding

- **2026 — ANR PRC GRANDSMERS**, principal investigator, approximately €585k. *Graph-based Research on Accurate Nucleotide Data via Scalable, Multi-scale, and Efficient RepresentationS*.
- **2026 — ANR PRC PRO-K-MER**, member. *PRObabilistic K-MERs for environmental sequence analysis*.
- **2024 — MIC INSERM**, principal investigator, €554k. *Analyse efficace et évolutive du cancer par exploration transcriptomique avancée à grande échelle*.
- **2024 — ANR Shannon x Cray**, member, €500k.
- **2021 — ANR JCJC**, principal investigator, €227k. *Adequate graph structures for third-generation sequencing data exploration*.
- **2019 — Hauts-de-France Region PhD Grant**, principal investigator, €150k.
- **[CDP PIE — Protein-Interaction-Evolution](https://initiative-excellence.univ-lille.fr/nos-projets-structurants/mener-une-recherche-dexcellence/cross-disciplinary-projects/cdp-pie)** — Université de Lille Initiative d'Excellence. €1.5M total project funding over four years, renewable.

## Teaching

- **2026** — Instructor, *EMBO Practical Course on Pangenomics*, Naples, Italy.
- **2026** — Training team and organiser, *Scalable Genomics and Pangenomics*, Wellcome Genome Campus, Hinxton, UK.
- **2020–2027** — Genome assembly course for master's students, France.
- **2019–2026** — Genome assembly course, Evomics workshop, Czech Republic.
- **2023–2026** — Genome assembly course, CNRS Formation, France.
- **2015–2017** — Functional programming for bachelor's students, France.

## Professional Service

### Conference Committees

- **Program committees**: RECOMB (2020–2026), ECCB/ISMB (2020–2026), SeqBim (2020–2025), ACM-BCB (2020–2024).
- **Organizing committee**: SPIRE (2021).

### Reviewing

Nature Communications, Nature Methods, Genome Research, Genome Biology, Nucleic Acids Research, Bioinformatics, Scientific Reports, and other journals and conferences.

### Thesis Committees

- **Nastasija Mijovic** — PhD committee, 2023–2025.
- **Riku Walve** — Examiner, 2022.
- **Svitlana Lukicheva** — PhD jury, 2021.
- **Théo Lemane** — PhD committee, 2020–2021.
- **Nadege Guiglielmoni** — PhD committee, 2019–2020.

## Talks & Presentations

- **2026** — Invited keynote, JC2B — Junior Conference on Computational Biology, Gif-sur-Yvette, France.
- **2026** — RECOMB and RECOMB-Seq, Thessaloniki, Greece.
- **2024** — EMBL-EBI K-mer/sequence indexing workshop, Cambridge, UK.
- **2024** — Kmer days, Dijon, France.
- **2023** — ISMB, Lyon, France.
- **2022** — RECOMB, San Diego, US.
- **2022** — DSB, Düsseldorf, Germany.
- **2022** — TUDASTIC, Lille, France.
- **2022** — Genopim kickoff, Rennes, France.
- **2021** — Kmer days, Marville, France.
- **2019** — Biata, Saint Petersburg, Russia.
- **2018** — RECOMB, Paris, France.

## Contact

**Antoine Limasset**<br>
CRIStAL (UMR 9189), Université de Lille<br>
Bâtiment ESPRIT, 59655 Villeneuve d'Ascq, France

[antoine.limasset@univ-lille.fr](mailto:antoine.limasset@univ-lille.fr) · [antoine.limasset@cnrs.fr](mailto:antoine.limasset@cnrs.fr)
