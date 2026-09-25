---
layout: default
title: Antoine Limasset
lang: fr
permalink: /fr/
translation_url: /
---

# Antoine Limasset

[English]({{ '/' | relative_url }}) · **Français** · [CV (PDF, anglais)]({{ '/assets/antoine-limasset-cv.pdf' | relative_url }})

Chargé de recherche CNRS · CRIStAL · Université de Lille<br>
Équipe Bonsai — Algorithmes et structures de données pour l’analyse de séquences

[Courriel](mailto:antoine.limasset@univ-lille.fr) · [ORCID](https://orcid.org/0000-0002-0669-4141) · [Google Scholar](https://scholar.google.com/citations?user=EW4USK4AAAAJ) · [GitHub](https://github.com/Malfoy) · [Bluesky @npmalfoy.bsky.social](https://bsky.app/profile/npmalfoy.bsky.social)

[Publications](#publications) · [Logiciels](#logiciels) · [Équipe](#equipe) · [Financements](#financements) · [Enseignement](#enseignement) · [Contact](#contact)

## Présentation

Je suis chargé de recherche CNRS dans l’équipe Bonsai du laboratoire CRIStAL, à l’Université de Lille. Je conçois des algorithmes et des structures de données pour analyser de grandes collections de séquences génomiques et transcriptomiques, à l’interface entre informatique théorique et bioinformatique.

Mes travaux portent sur l’indexation de séquences, les représentations compactes de k-mers, la compression, les méthodes d’esquisse et la correction des erreurs de séquençage. Je développe des logiciels libres pour réduire les besoins en mémoire et en calcul de l’analyse de séquences à grande échelle.

J’ai obtenu mon habilitation à diriger des recherches (HDR) à l’Université de Lille en septembre 2025.

## Publications

[Bibliographie complète avec tous les auteurs et les liens]({{ '/fr/publications/' | relative_url }}) · [Google Scholar](https://scholar.google.com/citations?user=EW4USK4AAAAJ)

<a href="{{ '/publications.bib' | relative_url }}" download>Télécharger toutes les références (BibTeX)</a>

{% include publication-list.html category="main" %}

## Publications en collaboration

{% include publication-list.html category="collaboration" %}

## Logiciels

Logiciels libres développés avec mes collaborateurs. Chaque lien mène au dépôt du projet.

{% for tool in site.data.software %}
- **[{{ tool.name }}]({{ tool.url }})** : {{ tool.description_fr }}
{% endfor %}

**BRRR** : Correction de lectures longues à partir du spectre des k-mers.

## Équipe et encadrement
{: #equipe}

### Doctorants actuels

- **Étienne Conchon-Kerjan** — Directeur de thèse, depuis 2026.
- **Yohan Hernandez-Courbevoie** — Directeur de thèse, depuis 2024. Indexation de bases de données transcriptomiques globales.
- **Timothé Rouzé** — Co-encadrant de thèse, depuis 2023. Compression de grandes collections de données de séquençage.

### Ingénieurs et postdoctorants

- **Lucas Robidou** — Ingénieur de recherche, encadrant, depuis 2026. Analyse de séquences génomiques à grande échelle.
- **Florian Ingels** — Postdoctorant, encadrant, 2025–2026. Schémas de minimiseurs.

### Anciens doctorants et collaborateurs

- **Léa Vandamme** — Directeur de thèse, 2022–2025. Indexation de données de séquençage de troisième génération.
- **Caleb Smith** — Ingénieur, encadrant, 2023–2024. Compression de grandes collections de données de séquençage.
- **Coralie Rohmer** — Co-encadrant de thèse, 2019–2023. Algorithmes d’alignement multiple adaptés au séquençage de troisième génération.

## Formation

- **2025** — Habilitation à diriger des recherches (HDR), Université de Lille. Soutenue le 4 septembre 2025.
- **2017** — Doctorat en informatique, Université de Rennes 1. *Novel approaches for the exploitation of high throughput sequencing data*. Sous la direction de Pierre Peterlongo et Dominique Lavenier ; soutenu le 12 juillet 2017.
- **2014** — Master en informatique, École normale supérieure de Rennes.
- **2012** — Licence en informatique, École normale supérieure de Cachan.

## Expérience professionnelle

- **Depuis 2018** — Chargé de recherche CNRS, équipe Bonsai, CRIStAL, Lille, France.
- **2017** — Chercheur postdoctoral, Université libre de Bruxelles, Belgique. Assemblage de novo de génomes hétérozygotes.

## Financements

- **2026 — ANR PRC GRANDSMERS**, responsable scientifique, environ 585 k€. *Graph-based Research on Accurate Nucleotide Data via Scalable, Multi-scale, and Efficient RepresentationS*.
- **2026 — ANR PRC PRO-K-MER**, membre. *PRObabilistic K-MERs for environmental sequence analysis*.
- **2024 — MIC INSERM**, responsable scientifique, 554 k€. *Analyse efficace et évolutive du cancer par exploration transcriptomique avancée à grande échelle*.
- **2024 — ANR Shannon x Cray**, membre, 500 k€.
- **2021 — ANR JCJC**, responsable scientifique, 227 k€. *Adequate graph structures for third-generation sequencing data exploration*.
- **2019 — Financement doctoral de la Région Hauts-de-France**, responsable scientifique, 150 k€.
- **[CDP PIE — Protein-Interaction-Evolution](https://initiative-excellence.univ-lille.fr/nos-projets-structurants/mener-une-recherche-dexcellence/cross-disciplinary-projects/cdp-pie)** — Initiative d’Excellence de l’Université de Lille. Financement total du projet de 1,5 M€ sur quatre ans, renouvelable.

## Enseignement

- **2026** — Intervenant, *EMBO Practical Course on Pangenomics*, Naples, Italie.
- **2026** — Équipe pédagogique et organisation, *Scalable Genomics and Pangenomics*, Wellcome Genome Campus, Hinxton, Royaume-Uni.
- **2020–2027** — Cours d’assemblage de génomes en master, France.
- **2019–2026** — Cours d’assemblage de génomes, atelier Evomics, République tchèque.
- **2023–2026** — Cours d’assemblage de génomes, CNRS Formation, France.
- **2015–2017** — Programmation fonctionnelle en licence, France.

## Responsabilités scientifiques

### Comités de conférences

- **Comités de programme** : RECOMB (2020–2026), ECCB/ISMB (2020–2026), SeqBim (2020–2025), ACM-BCB (2020–2024).
- **Comité d’organisation** : SPIRE (2021).

### Évaluation d’articles

Nature Communications, Nature Methods, Genome Research, Genome Biology, Nucleic Acids Research, Bioinformatics, Scientific Reports et autres revues et conférences.

### Jurys et comités de thèse

- **Nastasija Mijovic** — Comité de thèse, 2023–2025.
- **Riku Walve** — Examinateur, 2022.
- **Svitlana Lukicheva** — Jury de thèse, 2021.
- **Théo Lemane** — Comité de thèse, 2020–2021.
- **Nadege Guiglielmoni** — Comité de thèse, 2019–2020.

## Conférences et présentations

- **2026** — Conférence invitée, JC2B — Junior Conference on Computational Biology, Gif-sur-Yvette, France.
- **2026** — RECOMB et RECOMB-Seq, Thessalonique, Grèce.
- **2024** — EMBL-EBI K-mer/sequence indexing workshop, Cambridge, Royaume-Uni.
- **2024** — Kmer days, Dijon, France.
- **2023** — ISMB, Lyon, France.
- **2022** — RECOMB, San Diego, États-Unis.
- **2022** — DSB, Düsseldorf, Allemagne.
- **2022** — TUDASTIC, Lille, France.
- **2022** — Réunion de lancement de Genopim, Rennes, France.
- **2021** — Kmer days, Marville, France.
- **2019** — Biata, Saint-Pétersbourg, Russie.
- **2018** — RECOMB, Paris, France.

## Contact

**Antoine Limasset**<br>
CRIStAL (UMR 9189), Université de Lille<br>
Bâtiment ESPRIT, 59655 Villeneuve-d’Ascq, France

[antoine.limasset@univ-lille.fr](mailto:antoine.limasset@univ-lille.fr) · [antoine.limasset@cnrs.fr](mailto:antoine.limasset@cnrs.fr)
