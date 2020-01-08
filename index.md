# 	Working with Sequence Data Lab: Assembly


![alt text][logo3]

[logo3]: https://github.com/Malfoy/malfoy.github.io/blob/master/assembly.png?raw=true

## Steps

1. Assemble your genome
2. Evaluate your assembly
3. Compare it to the state of the art
4. Go to 1.




## Context

Imagine there is a cholera outbreak in Krumlov. “Luckily”, we have access to nearby sequencers, and we produced sequencing datasets from bacterial isolates. So you have both a PacBio run and an Illumina run. Now the task is to assemble the data in order to do various analyses later: check the phylogeny of that strain, what makes it different from other strains in terms of gene content, SNPs, structural variants, etc. And remember: don’t drink the water, it’s a known vector of contamination. Czech beer is perfectly safe, though.

You are given several sequencing datasets from the same organism:  _V. cholerae_, which has a genome size of ~4 Mbp. The goal is to perform an assembly of the _V. cholerae_ genome. It is known that the genome has 2 chromosomes and has around 3,800 annotated genes.

![alt text][logo2]

The following datasets are provided in the Workshop AMI but can also be downloaded by using the ERRxxxxxx identifiers on the Sequence Read Archive with fastq-dump from the SRA toolkit (https://ncbi.github.io/sra-tools/install_config.html).

PacBio sequencing (these are raw noisy “CLR” reads, not “CCS” or high fidelity  reads):
ERR1716491.fastq
Illumina sequencing (paired-end, insert size 150 bp):
SRR531199.fastq

## Practical sketch

Part 1 consists of playing a bit with the datasets to have a rough idea of their characteristics.
You will also subsample the datasets to be able to perform quick tests.

The goal of Part 2 is to obtain a quick, initial assembly of the _V. cholerae_ genome using any of these datasets.
You could use any of the assemblers which have been pre-installed on your Instance.
 “But, which one?”, you ask. Well, the point of this part is to let you to take initiatives and pick one!
So, for this first attempt, if the assembler asks for any parameter, try to guess a reasonable value but do not over-think it. At this point, it does not matter if the assembly is of poor quality.
In this step, you can try to work with a subsampling of your datasets to accelerate the process.

In Part 3, you will measure the quality of your initial assembly and recognize that it could possibly be improved. Once you have generated your first assembly, move to Part 3. If you are stuck, don’t panic and ask a TA.

Finally in Part 4 you submit your assembly statistics to the state of the art:
https://docs.google.com/spreadsheets/d/1WJ_AYZ8tkrexKSPRNl1dpr5F1Z2PHReNDbVGnzdnuAA/edit?usp=sharing



PART 1: Play with datasets
---------------------------

__Q:__ *How many bases are there in the datasets?*

__Q:__ *What is your mean read length?*

__Q:__ *Find the longest read!*

__Q:__ *What is the estimated coverage?*

__Q:__ *Make datasets containing 10% of the initial coverage to make "quick" assembly tests.*

__HINT__: Use seqkit (https://bioinf.shenwei.me/seqkit/usage/)



[//]: #   seqkit stats ERR1716491.fasta
[//]: #   seqkit sort -l ERR1716491.fasta -r --line-width 0 > LRS.fasta
[//]: #   seqkit sample -p 0.1 ERR1716491.fasta --line-width 0 > LR_0.1.fa





PART 2: Your first assembly!
---------------------------
__Q:__ *Choose a dataset (subsampled or not)*

__Q:__ *Choose an assembly strategy*

__Q:__ *Assemble!*


__HINT__: You can read the assemblers paper/website during the runtim to decide what you will do next

### Available long reads assemblers
1. Miniasm
2. Raven
3. Flye


#### 1. Miniasm

Miniasm is a rather particular long-read assembler as it does not include a consensus step.
The resulting contigs are just merged erroneous long reads and still contains many sequencing errors.
Produced contigs are structurally correct, but at the nucleotide level, there are many, mismatches and indels.
For most applications, the contigs need to be polished. E.g., using the Racon software
or Minipolish.

  Miniasm Work in two steps:
  1. Find overlaps (minimap2)
  2. Generate contigs (miniasm)
  3. Miniasm do not include a polishing step, but you can try Minipolish (https://github.com/rrwick/Minipolish)

Minimap2 Website: https://github.com/lh3/minimap2

Miniasm Website: https://github.com/lh3/miniasm



[//]: # minimap2 -x ava-pb -t8 ERR1716491.fastq.gz ERR1716491.fastq.gz | gzip -1 > reads.paf.gz
 [//]: # miniasm -f ERR1716491.fastq.gz reads.paf.gz > assembly.gfa
 [//]: # minipolish -t 8 ERR1716491.fastq.gz assembly.gfa > polished.gfa



#### 2. Raven

Raven is overlap graph assembler based on existing components: Minimap (overlap detection) and Racon (polishing) and use them to produce a clean and contiguous assembly.

[//]: # raven LR_0.1.fa  --graphical-fragment-assembly raven_graph.gfa -t 8 > raven_contigs.fa

Raven website: https://github.com/lbcb-sci/raven

__HINT__: You can obtain a .gfa with the  `--graphical-fragment-assembly` option


#### 3. Flye

Flye is a long read assembler based on an original paradigm. It builds a repeat graph that is conceptually similar to  De Bruijn graph but using approximate matches.
Flye is also able to assemble metagenomes.


 [//]: # flye --pacbio-raw LR_0.1.fa --threads 8 --out-dir flye01  --genome-size 4000000


Flye website: https://github.com/fenderglass/Flye


##### 4. Canu

Canu is one of the reference assemblers for long reads data. It gives good results, however, in the context of this workshop it might take a while to run and
will not be used for this workshop.


 Canu website: https://github.com/marbl/canu

### Available short reads assemblers
1. Spades
2. MEGAHIT
3. Minia



#### 1. Spades

  Spades is an Illumina assembler designed for prokaryotic and small eukaryotic genomes. It does an excellent job of assembling bacteria with short-read sequencing, either multi-cell or single-cell data, and also small metagenomes. It uses multiple sizes of _k_ (k-mer size in the De Bruijn graph) to construct the best possible contigs. It generally takes longer time and memory than other assemblers. It can also improve its contigs using long reads.

  Spades website: https://github.com/ablab/spades


  [//]: # spades.py --12 SRR531199.fastq -o work_dir
  [//]: # spades.py --12 SRR531199.fastq -o work_dir --pacbio ERR1716491.fastq


 __HINT__:  Spades runtime can be  long. You can use a single size of _k_ to get results faster with the `-k` option

 __HINT__:  For real, Spades can be very long. You can skip the correction module to get results faster with the `--only-assembler` option


  [//]: # spades.py --12 SRR531199.fastq -o work_dir -k 33



   __HINT__: If you run the multiple _k_ assembly, you can take a look at the successive contigs files produced from different values of _k_ in the work_dir/K21/final_contigs.fasta,  work_dir/K33/final_contigs.fasta before the whole process is finished.

#### 2. MEGAHIT

  MEGAHIT is an Illumina assembler designed to assemble large metagenomic experiments. It is very conservative and is able to assemble even low coverage regions. It is very fast and memory-efficient despite the fact that it uses several k-mer sizes.

  Megahit website: https://github.com/voutcn/megahit


  [//]: # megahit --12 SRR531199.fastq -o out -t 8

  __HINT__:  Like Spades, you can specify your own k-mer sizes to use with `--k-list  parameter`


[//]: #   megahit --12 SRR531199.fastq -o out -t 8 --k-list 21,41,61,81,101,121,141



#### 3. Minia

  Minia is an Illumina assembler designed to be resource-efficient and able to assemble very large genomes.
  You can run the GATB pipeline that try to remove sequencing errors from the reads (Bloocoo), generate contigs (Minia) and scafold them (BESST)

  __HINT__:  You can also just use minia to generate a contigs set without reads correction or scafolding


  [//]: # ./gatb --12 interleaved_reads.fastq

  Minia website: https://github.com/GATB/gatb-minia-pipeline


### Other assemblers (long reads)

+ Canu (https://github.com/marbl/canu/commits/master)
+ Redbean (https://github.com/ruanjue/wtdbg2)
+ FALCON (https://github.com/PacificBiosciences/FALCON)
+ SMARTdenovo (https://github.com/ruanjue/smartdenovo)

### Other assemblers (short reads)

+ AByss (https://github.com/bcgsc/abyss)
+ Unicycler (https://github.com/rrwick/Unicycler)
+ Discovardenovo (https://software.broadinstitute.org/software/discovar/blog/)






## PART 3: Assembly Evaluation

### Evaluate your assembly with Quast
To evaluate your assembly, you will run  Quast on your contigs file.

 A (very nice) manual can be found here http://quast.bioinf.spbau.ru/manual.html.

```
quast.py -o output_directory assembly.fa
```

 Move into your QUAST output directory and examine the report.txt file. You may also take a look at the HTML file.

 __HINT__: Only "large" contigs will be considered. Contigs smaller than 500bp are ignored by Quast by default.

Now we will compare your contigs with the reference genome.
With the `-r` option, Quast will align your contigs on your reference genome and estimate their accuracy.

```
quast.py -o output_directory assembly.fa -r vcholerae_h1.fasta
```


In real life, you will likely not have a reference genome, but if you have a closely related genome, you can use it as a reference and get some nice stats from QUAST such as `genome fraction` (genome coverage).

__Q:__ *How many large/small misassemblies were made by the assembler?*

__Q:__  *What part of your genome is covered by your contigs?*

__Q:__  *How contiguous is your assembly (N50/N75/NGA50/NGA75 metrics)*

__HINT__: If your contigs contain too many errors, Quast will not align them on the reference. In such cases (ie, miniasm unpolished assembly), you can use the `--min-identity` Quast parameter.

```
quast.py -o output_directory assembly.fa -r vcholerae_h1.fasta  --min-identity 0.8
```


### Visualize your assembly graph (optional)

Use the Bandage software to visualize the assembly graph.
It is generally the file that ends with “.gfa”.

If you do not have a gfa file, you may skip this step.

```
Bandage assembly.gfa
```

__Q:__ *Is your graph well connected?*

__Q:__ *How many disjoint components is there?*

This provides some indications of whether you had sufficient coverage to perform the assembly. It could also mean that the sequencer produced some reads that did not overlap others.

__Q:__  *Does the graph has many branching nodes?*

This is indicative of variants or repetitions that could not have been resolved by the assembler.




### Annotate your assembly (optional)
You may use the tool Prokka to annotate the assembly.
```
prokka assembly_file
```

__Q:__ *How many annotated proteins were predicted by Prokka?*



__Q:__  *Across all reported assemblies in the Google Docs, what is the variability of the number of annotated genes?*


### Call SNP (optional^2)
Actually, the reference genome, the Illumina, and  Pacbio datasets aren’t from the same exact strain, so they may differ one from another.
To visualize those differences, you may align your Illumina reads to the reference genome and/or a Pacbio assembly and call SNPs.
To do so, you may use samtools mpileup: http://samtools.sourceforge.net/mpileup.shtml.

__Q:__ *How many SNPs were found between the two strains?*

As a check, do the same procedure by aligning reads from the Illumina dataset to an Illumina-only assembly.

__Q:__ *Does SNP calling of a dataset on its own assembly report “false positive” SNPs?*

## Part 4 Assembly comparison

__Q:__ *Report your assembly on google doc and compare with the results from the other participants.*

https://docs.google.com/spreadsheets/d/1WJ_AYZ8tkrexKSPRNl1dpr5F1Z2PHReNDbVGnzdnuAA/edit?usp=sharing

At this point, you may be tempted to re-run your assembly with better parameters, with a higher coverage or to test another assembler.

Now is your time for your brain (and your computer) to shine and to perform the best assembly!


The best assembly get a ~~cookie~~ waffle!













## Part 5 Treasure Hunt (HARD)
![alt text][logo]

[logo]: https://i2.wp.com/www.wikitree.com/blog/wp-content/uploads/2014/07/dna1-263x300.jpg?resize=263%2C300

[logo2]: https://www.cdc.gov/cholera/images/cholera-banner.jpg
If you are brave enough, you can try to assemble this set of reads:



CAGATGTCCT

GACCTTTTCT

TAAGATCTTT

TCTTTAGCCG

TTTCTTCTTT

GAGCTTTACT

TTACTTCATT

TCATTCACAT

CACATGAGCT

GTCCTGAACA

GAGCTGATCA

TCTTTCAGAT

AGCCGGACCT

TATGATCATT

TCATTAGGCG

AGGCGGAGCT


__HINT__:  There is NO sequencing errors

__HINT__: Overlaps are at least of length 5
