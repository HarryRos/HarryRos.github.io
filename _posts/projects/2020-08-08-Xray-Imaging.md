---
title: "Working for Rolls Royce"
layout: post
category: Projects
avatar: "/images/X-ray_imaging/RR.svg"
skills:
  - Commercial experience
  - Industrial microCT
  - Tilted-angle laminography
  - Scatter reduction
  - CAD
  - 3D printing
  - non-destructive examination
---

Tilted-angle laminography and scatter reduction! These are the two principal technologies that I employed while working for _Rolls Royce_ at <nobr>($\mu$-VIS)[https://www.southampton.ac.uk/muvis/]</nobr> <nobr>X-ray</nobr> Imaging Centre. The goal was to optimally image a dense metallic part under development for a next-generation jet engine.

This particular part was challenging to image with X-ray micro-computed tomography <nobr>($\mu$CT)</nobr> because it was tabular in shape and made of a very dense metal. These two properties call for two advanced approaches when it comes to $\mu$CT imaging:

Tilted angle laminography <nobr>(TAL)</nobr> is an unconventional method to position the part with respect to the X-ray gun and detector in order to minimise the <nobr>X-ray</nobr> path through the part. To perform TAL, I designed and <nobr>3D-printed</nobr> a bracket for accurate positioning of the part inside the CT scanner. I then formulated a mathematical representation of the geometry and customized an open-source CT reconstruction package for this purpose.

X-ray Compton scattering inevitably occurs when high <nobr>X-ray</nobr> energies are used to penetrate dense materials. I employed an experimental approach to estimate the and remove the scatter that involved the design of a lead perforated sheet and subsequent image processing.

The two methods combined enabled Rolls Royce to put together a workflow for non-destructive examination (NDE) of parts designed for next-generation jet engines with high performance and reliability.
