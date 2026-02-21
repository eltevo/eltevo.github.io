---
layout: projects
title: "Cylindrical cosmological simulations with StePS"
published: true
featured: true
status: active
summary: "Cosmological N-body simulations in $S^1 \\times \\mathbb{R}^2$ topological manifold."
tags:
  - cosmology
  - simulations
  - N-body
links:
  code: https://github.com/eltevo/steps
  paper:
    - TBA
---

## Overview

The global topology of the Universe can affect the long‑range gravitational forces through the boundary conditions. To study non-trivial topologies in detail, simulations that natively adopt such geometries are required. In this project, we introduce a compactified simulation framework that is only periodic along a single axis, while having infinite topology with isotropic boundary conditions towards the perpendicular directions. This non-trivial $S^1\times\mathbb{R}^2$ topological manifold has cylindrical symmetry, and the Lagrangian of a self-gravitating particle system in this space is invariant under translation along the cylinder's axis. As a consequence of Noether's theorem, the linear momentum along the cylinder's axis and the angular momentum along the same axis are both conserved. Such a topology is particularly well-suited for studying naturally anisotropic environments such as filamentary structures.

## Main simulation

To demonstrate the new simulation method, we run a new cosmological $N$-body simulation with our [StePS](https://github.com/eltevo/StePS) simulation code in $S^1\times\mathbb{R}^2$ topology. We used best-fit Planck 2018 $\Lambda$CDM cosmological parameters, and a 2LPT method to generate the initial conditions of a periodic cylinder with height $L_{z} = 1.0\,\mathrm{Gpc}$, resolved radius $R_{\mathrm{sim}}= 500\,\mathrm{Mpc}$, and $N_{p} = 2.4 \cdot 10^7$ dark matter particles. The generated particle snapshots, halo catalogues, power spectra, and example notebooks can be downloaded from here.


## Download links
 
### Snapshots

These files are the primary output of the Simulation. They are in GAGDET-compatible [HDF5](https://www.hdfgroup.org/solutions/hdf5/) format, and containing particle positions, velocities, masses, and IDs. Overall 138 snapshots were saved during the simulation. These can be visualized with [gadgetviewer](https://github.com/jchelly/gadgetviewer) or [topsy](https://github.com/pynbody/topsy). 
 
<figure class="image" style="display: flex; justify-content: center;">
  <video autoplay loop muted playsinline style="width: 100%; height: auto;" poster="">
    <source src="/assets/images/projects/cylindrical-simulation/CylindricalExampleCenter.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
</figure>

**Uncompressed size:** 1.5 GB / snapshot

**Mirrors**
- ELTE Kooplex: TBA
- helsinkifi-my.sharepoint.com (only 4 snapshots): [Download](https://helsinkifi-my.sharepoint.com/:f:/g/personal/gracz_ad_helsinki_fi/IgCmwFcqlHBiTZ-Jdp1bfwV8AQq4NnzWcJJwmDV4h4-rn6o?e=GJVG1a)

---

### Power spectra

<figure class="image">
  <button type="button" class="zoom-trigger">
    <img src="/assets/images/projects/cylindrical-simulation/LCDM_N24M_Sim_Pk_all.svg" alt="Real-space dark matter power spectra of all available snapshots">
  </button>
</figure>

The isotropic $P(k)$ power spectrum of the dark matter density field is a standard statistic used to quantify the clustering. We estimated the power spectra from particle snapshots using the Feldman--Kaiser--Peacock (FKP) method.

**Mirrors**
- ELTE Kooplex: TBA
- helsinkifi-my.sharepoint.com: [Download](https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQCfdHpygkwOQJM4R0hAF0a9ASukMk5devFf7r6rWDY6O6k?e=Sj8kEo)

---

### Halo Catalogues

These files contain all available information about the identified haloes. The haloes were identified with our own StePS_HF Spherical Overdensity (SO) halo finder code. Two formats are available to download:

<ol class="catalogue-formats">
  <li> <details>
    <summary><strong>ASCII</strong> &mdash; one halo per row (click to expand)</summary>
    <nav class="field-nav">
    {% for group in site.data.halo-catalogue.groups %}
      <a href="#{{ group.id }}">{{ group.label }}</a>
    {% endfor %}
    </nav>
    {% for group in site.data.halo-catalogue.groups %}
    <section id="{{ group.id }}" class="field-group">
      <h4>{{ group.label }}</h4>
      <p>{{ group.description }}</p>
      <table>
        <thead>
          <tr><th>Column index</th><th>Field</th><th>Description</th></tr>
        </thead>
        <tbody>
          {% for field in group.fields %}
          <tr>
            <td>{{ field.col }}</td>
            <td><code>{{ field.name }}</code></td>
            <td>{{ field.desc }}</td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </section>
    {% endfor %}
  </details></li>
  <li>
    <strong>Binary HDF5</strong> &mdash; containing the same information as the ASCII catalogues, plus particle data (IDs, coordinates, velocities, masses) within \(r < 1.5\cdot R_{\mathrm{vir}}\).
  </li>
</ol>


<figure class="image">
  <button type="button" class="zoom-trigger">
    <img src="/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halos_0032.svg" alt="SO overdensity halo catalogue at redshift 2.0">
  </button>
  <button type="button" class="zoom-trigger">
    <img src="/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halos_0137.svg" alt="SO overdensity halo catalogue at redshift 0.0">
  </button>
  <button type="button" class="zoom-trigger">
    <img src="/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halo42.svg" alt="Visualisation of halo #42 at redshift 0">
  </button>
  <!-- <figcaption>Figure caption placeholder.</figcaption> -->
</figure>

**Mirrors**
- ELTE Kooplex (ASCII): TBA
- ELTE Kooplex (HDF5 + particles): TBA
- helsinkifi-my.sharepoint.com (ASCII): [Download](https://helsinkifi-my.sharepoint.com/:f:/g/personal/gracz_ad_helsinki_fi/IgBQLQnqx65HQpL1rxNQcSkSAVktbtJeXylQ8VSCqGyjyiU?e=rdBary)
- helsinkifi-my.sharepoint.com (HDF5 + particles): [Download](https://helsinkifi-my.sharepoint.com/:f:/g/personal/gracz_ad_helsinki_fi/IgATNo6G7U9UQIrlCrYaEt5hAcOt-QUn60tAH2EX2MpUfIE?e=D1nXgM)

---

### Notebooks:

These [jupyter](https://jupyter.org/) notebooks contain examples of how to load, visualise, and analyse the provided simulation data. 

**Mirrors**
- helsinkifi-my.sharepoint.com: [Download](https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQDupYMDLIydQo0EVBhcySmeAQKA7DdEPfH7kNjuERpCIDk?e=5fpamf)

## Companion simulations

These $S^1\times\mathbb{R}^2$ simulations were run with the same code and cosmological parameters as the simulation above, but with lower resolution and in smaller volumes. The purpose of these is to test analysis pipelines on much smaller datasets in $S^1\times\mathbb{R}^2$ topological manifold. The compressed files contain the initial conditions, the particle snapshots, the estimated power spectra, and the SO halo catalogues.

<div class="table-wrapper">
<table class="sim-table">
  <colgroup>
    <col class="col-run">
    <col class="col-r">
    <col class="col-lz">
    <col class="col-np">
    <col class="col-size">
    <col class="col-download">
  </colgroup>
  <thead>
    <tr>
      <th>Run</th>
      <th>\(R_{\mathrm{sim}}\)</th>
      <th>\(L_{z}\)</th>
      <th>\(N_{p}\)</th>
      <th>Uncompressed Size</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Small #1</td>
      <td>\(750\,\mathrm{Mpc}\)</td>
      <td>\(50.0\,\mathrm{Mpc}\)</td>
      <td>\(5.0\cdot10^5\)</td>
      <td>441&nbsp;MB</td>
      <td>
        <a href="https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQDa4_cUufnTRoDVMhIuzq6sAV3KJ8Kv4Jyd3bsoYkz8XvM?e=52UEaj">
          Download
        </a>
      </td>
    </tr>
    <tr>
      <td>Small #2</td>
      <td>\(750\,\mathrm{Mpc}\)</td>
      <td>\(100.0\,\mathrm{Mpc}\)</td>
      <td>\(1.0\cdot10^6\)</td>
      <td>840&nbsp;MB</td>
      <td>
        <a href="https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQCs_FApczY7Q5lif0NxWDcFAYx2TUktwIeDCwHXJdJFZNM?e=3ousSP">
          Download
        </a>
      </td>
    </tr>
    <tr>
      <td>Small #3</td>
      <td>\(750\,\mathrm{Mpc}\)</td>
      <td>\(200.0\,\mathrm{Mpc}\)</td>
      <td>\(2.0\cdot10^6\)</td>
      <td>1730&nbsp;MB</td>
      <td>
        <a href="https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQCP2rPKW-3wQLKuYMMDb2LdAQqYTQf0BmLjZJQ_4FP8Ijg?e=d60tRM">
          Download
       </a>
      </td>
    </tr>
  </tbody>
</table>
</div>

**Particle mass range (all companion runs):**  
$M_{p} = 1.89 \cdot 10^{11}\,\mathrm{M_\odot} - 1.85 \cdot 10^{14}\,\mathrm{M_\odot}$.



