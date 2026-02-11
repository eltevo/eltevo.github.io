---
layout: posts
title: "Cylindrical cosmological simulations with StePS"
featured: true
status: active
summary: "Cosmological N-body simulations of $S^1$x$R^2$ topological manifold."
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

## Simulation

To demonstrate the new simulation method, we run a new cosmological $N$-body simulation with our StePS simulation code in $S^1\times\mathbb{R}^2$ topology. We used best-fit \textit{Planck} 2018 $\Lambda$CDM cosmological parameters, and a 2LPT method to generate the initial conditions of a periodic cylinder with height $L_{z} = 1.0\,\mathrm{Gpc}$, resolved radius $R_{\mathrm{sim}}= 500\,\mathrm{Mpc}$, and $N_{p} = 2.4\cdot10^7$ dark matter particles. The generated particle snapshots, halo catalogues, power spectra, and example notebooks can be downloaded from here.

![Visualisation](./Images/CylindricalExampleCenter.gif "StePS simulation of structure formation in the new cylindrical topology.")

## Download links
 - Snapshots: TBA
 - Power spectra: TBA
 - Halo Catalogues: TBA
 - Notebooks: TBA