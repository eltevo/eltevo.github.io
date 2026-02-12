---
layout: projects
title: "Cylindrical cosmological simulations with StePS"
published: false
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

The global topology of the Universe can affect the long‑range gravitational forces through the boundary conditions. To study non-trivial topologies in detail, simulations that natively adopt such geometries are required. In this project, we introduce a compactified simulation framework that is only periodic along a single axis, while having infinite topology with isotropic boundary conditions towards the perpendicular directions. This non-trivial $S^1\times\mathbb{R}^2$ topological manifold has cylindrical symmetry, and the Lagrangian of a self-gravitating particle system in this space is invariant under translation along the cylinder's axis. As a consequence of Noether's theorem, the linear momentum along the cylinder's axis and the angular momentum along the same axis are both conserved. Such a topology is particularly well-suited for studying naturally anisotropic environments such as filamentary structures.

## The simulation

To demonstrate the new simulation method, we run a new cosmological $N$-body simulation with our [StePS](https://github.com/eltevo/StePS) simulation code in $S^1\times\mathbb{R}^2$ topology. We used best-fit Planck 2018 $\Lambda$-CDM cosmological parameters, and a 2LPT method to generate the initial conditions of a periodic cylinder with height $L_{z} = 1.0\,\mathrm{Gpc}$, resolved radius $R_{\mathrm{sim}}= 500\,\mathrm{Mpc}$, and $N_{p} = 2.4\cdot10^7$ dark matter particles. The generated particle snapshots, halo catalogues, power spectra, and example notebooks can be downloaded from here.


## Download links
 
### Snapshots:

These files are the primary output of the Simulation. They are in GAGDET-compatible [HDF5](https://www.hdfgroup.org/solutions/hdf5/) format, and containing particle positions, velocities, masses, and IDs. Overall 138 snapshots were saved during the simulation. These can be visualized with [gadgetviewer](https://github.com/jchelly/gadgetviewer) or [topsy](https://github.com/pynbody/topsy). 
 
![DM denisty field](/assets/images/projects/cylindrical-simulation/CylindricalExampleCenter.gif "StePS simulation of structure formation in the new cylindrical topology."){: width="512px" }

Uncompressed size: 1.5GB/snapshot

ELTE Kooplex mirror: \[TBA\]

### Power spectra:

![Power spectra](/assets/images/projects/cylindrical-simulation/LCDM_N24M_Sim_Pk_all.png "Real-space dark matter power spectra of all availabe snapshots"){: width="512px" }

The isotropic $P(k)$ power spectrum of the dark matter density field is a standard statistic used to quantify the clustering. We estimated the power spectra from particle snapshots using the Feldman–Kaiser–Peacock (FKP) method.

ELTE Kooplex mirror: \[TBA\]

helsinkifi-my.sharepoint.com mirror: [Download](https://helsinkifi-my.sharepoint.com/:u:/g/personal/gracz_ad_helsinki_fi/IQCfdHpygkwOQJM4R0hAF0a9ASukMk5devFf7r6rWDY6O6k?e=Sj8kEo)
 
### Halo Catalogues:

These files contain all available information about the identified haloes. The haloes were identified with our own StePS_HF Spherical Overdensity (SO) halo finder code. Two formats are available to download here: 
 1. plain ASCII tables with the following fields: 1-ID 2-Npart 3-VolResolved 4-Mvir 5-X 6-Y 7-Z 8-Rvir 9-Vvir_X 10-Vvir_Y 11-Vvir_Z 12-VRMSvir 13-Vcircvir 14-VMax 15-Rs_klypin 16-Jvir_X 17-Jvir_Y 18-Jvir_Z 19-Spin_Bullock 20-M200b 21-R200b 22-V200b_X 23-V200b_Y 24-V200b_Z 25-VRMS200b 26-Vcirc200b 27-J200b_X 28-J200b_Y 29-J200b_Z 30-M200c 31-R200c 32-V200c_X 33-V200c_Y 34-V200c_Z 35-VRMS200c 36-Vcirc200c 37-J200c_X 38-J200c_Y 39-J200c_Z 40-M500c 41-R500c 42-V500c_X 43-V500c_Y 44-V500c_Z 45-VRMS500c 46-Vcirc500c 47-J500c_X 48-J500c_Y 49-J500c_Z 50-M1000c 51-R1000c 52-V1000c_X 53-V1000c_Y 54-V1000c_Z 55-VRMS1000c 56-Vcirc1000c 57-J1000c_X 58-J1000c_Y 59-J1000c_Z 60-M2500c 61-R2500c 62-V2500c_X 63-V2500c_Y 64-V2500c_Z 65-VRMS2500c 66-Vcirc2500c 67-J2500c_X 68-J2500c_Y 69-J2500c_Z
 2. binary HDF5 format containing tha same information as the ASCII catalogues, and additional particle data (IDs, Coordinates, Velocities, Masses) within $r<1.5\cdot R_{vir}$.

![Halo Catalogues](/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halos_0032.png "SO overdensity halo catalogue at redshift 2.0"){: height="300px" } ![Halo Catalogues](/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halos_0137.png "SO overdensity halo catalogue at redshift 0.0"){: height="300px" } ![Halo #42](/assets/images/projects/cylindrical-simulation/LCDM_N24M_Halo42.png "Visualisation of halo #42 at redshift 0"){: height="300px" }

ELTE Kooplex mirror (ASCII format): \[TBA\]

ELTE Kooplex mirror (HDF5 format with particle data): \[TBA\]

helsinkifi-my.sharepoint.com mirror (ASCII format): \[TBA\]

helsinkifi-my.sharepoint.com mirror (HDF5 format with particle data): \[TBA\]

### Notebooks:

These [jupyter](https://jupyter.org/) notebooks contain examples of how to load, visualise, and analyse the provided simulation data. 

helsinkifi-my.sharepoint.com mirror: \[TBA\]

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

#### Small simulation #3
Main parameters: $R_{\mathrm{sim}}= 750\,\mathrm{Mpc}$, $L_{z} = 200.0\,\mathrm{Mpc}$, $N_{p} = 2.0\cdot10^6$, $M_{p} = 1.89\cdot 10^{11}\mathrm{M}_\odot - 1.85\cdot 10^{14}\mathrm{M}_\odot$

Uncompressed size: TBA

helsinkifi-my.sharepoint.com mirror: TBA




