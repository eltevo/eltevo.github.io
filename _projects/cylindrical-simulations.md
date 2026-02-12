---
layout: posts
title: "Cylindrical cosmological simulations with StePS"
featured: true
status: active
summary: "Cosmological N-body simulations in $S^1$x$R^2$ topological manifold."
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

The global topology of the Universe can affect the long‑range gravitational forces through the boundary conditions. To study non-trivial topologies in detail, simulations that natively adopt such geometries are required. In this project, we introduce a compactified simulation framework that is only periodic along a single axis, while having infinite topology with isotropic boundary conditions towards the perpendicular directions. This non-trivial $S^1\times\mathbb{R}^2$ topological manifold has cylindrical symmetry. The Lagrangian of a self-gravitating particle system in this space is invariant under translation along the cylinder's axis, and rotations in the $\mathbb{R}^2$ plane which are described by the $\mathrm{SO}(2)$ group. As a consequence of Noether's theorem, the linear momentum along the cylinder's axis and the angular momentum along the same axis are both conserved. Such a topology is particularly well-suited for studying naturally anisotropic environments and filamentary structures.

## The simulation

To demonstrate the new simulation method, we run a new cosmological $N$-body simulation with our StePS simulation code in $S^1\times\mathbb{R}^2$ topology. We used best-fit Planck 2018 $\Lambda$-CDM cosmological parameters, and a 2LPT method to generate the initial conditions of a periodic cylinder with height $L_{z} = 1.0\,\mathrm{Gpc}$, resolved radius $R_{\mathrm{sim}}= 500\,\mathrm{Mpc}$, and $N_{p} = 2.4\cdot10^7$ dark matter particles. The generated particle snapshots, halo catalogues, power spectra, and example notebooks can be downloaded from here.


## Download links
 
### Snapshots: TBA
 
![DM denisty field](/assets/images/projects/cylindrical-simulation/CylindricalExampleCenter.gif "StePS simulation of structure formation in the new cylindrical topology."){: width="512px" }
 
### Power spectra:

![Power spectra](/assets/images/projects/cylindrical-simulation/LCDM_N24M_Sim_Pk_all.png "Real-space dark matter power spectra of all availabe snapshots"){: width="512px" }

The isotropic $P(k)$ power spectrum of the dark matter density field is a standard statistic used to quantify the clustering. We estimated the power spectra from particle snapshots using the Feldman–Kaiser–Peacock (FKP) method.

helsinkifi-my.sharepoint.com mirror: [Download](https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQCfdHpygkwOQJM4R0hAF0a9ASukMk5devFf7r6rWDY6O6k?e=Sj8kEo)
 
### Halo Catalogues: TBA

![Halo Catalogues](/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halos_0032.png "SO overdensity halo catalogue at redshift 2.0"){: height="300px" } ![Halo Catalogues](/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halos_0137.png "SO overdensity halo catalogue at redshift 0.0"){: height="300px" } ![Halo #42](/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halo42.png "Visualisation of halo #42 at redshift 0"){: height="300px" }

### Notebooks: TBA

## Companion simulations

These $S^1\times\mathbb{R}^2$ simulations were run with the same code and cosmological parameters as the simulation above, but with lower resolution and in smaller volumes. The purpose of these is to test analysis pipelines on much smaller datasets in $S^1\times\mathbb{R}^2$ topological manifold. The compressed files contain the initial conditions, the particle snapshots, the estimated power spectra, and the SO halo catalogues.

#### Small simulation #1
Main parameters: $R_{\mathrm{sim}}= 750\,\mathrm{Mpc}$, $L_{z} = 50.0\,\mathrm{Mpc}$, $N_{p} = 5.0\cdot10^5$, $M_{p} = 1.89\cdot 10^{11}\mathrm{M}_\odot - 1.85\cdot 10^{14}\mathrm{M}_\odot$

Uncompressed size: 441M

helsinkifi-my.sharepoint.com mirror: [Download](https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQDa4_cUufnTRoDVMhIuzq6sAV3KJ8Kv4Jyd3bsoYkz8XvM?e=52UEaj)

#### Small simulation #2
Main parameters: $R_{\mathrm{sim}}= 750\,\mathrm{Mpc}$, $L_{z} = 100.0\,\mathrm{Mpc}$, $N_{p} = 1.0\cdot10^6$, $M_{p} = 1.89\cdot 10^{11}\mathrm{M}_\odot - 1.85\cdot 10^{14}\mathrm{M}_\odot$

Uncompressed size: 840M

helsinkifi-my.sharepoint.com mirror: [Download](https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQCs_FApczY7Q5lif0NxWDcFAYx2TUktwIeDCwHXJdJFZNM?e=3ousSP)

