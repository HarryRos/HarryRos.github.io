---
title: "Working for Rolls Royce"
layout: post
category: Projects
avatar: "/images/X-ray_imaging/RR.svg"
skills:
  - "Industrial microCT"
  - "Tilted-angle laminography"
  - "Scatter reduction"
  - "CAD"
  - "3D printing"
  - "Non-destructive examination"
---

**Tilted-angle laminography** and **scatter reduction** are the two principal methods that I employed while working on an X-ray imaging project for _Rolls Royce_ at $\mu$-<a href="https://www.southampton.ac.uk/muvis/">VIS X-ray Imaging Centre</a>. The goal was to optimally image a dense metallic part under development for a next-generation jet engine.

This particular part was challenging to image with <nobr>X-ray</nobr> <nobr>micro-computed</nobr> tomography ($\mu$CT) because it was tabular in shape and made of a very dense metal. These two properties call for **two advanced approaches** when it comes to $\mu$CT imaging:

Tilted angle laminography (TAL) is an unconventional method to position the part with respect to the X-ray gun and detector in order to minimise the X-ray path through the part. To perform TAL, I designed and **3D-printed** a bracket for accurate positioning of the part inside the CT scanner. I then **formulated a mathematical representation** of the geometry and **customized an open-source** <a href="https://github.com/CERN/TIGRE">CT reconstruction package</a> for this purpose.

X-ray Compton scattering inevitably occurs when high X-ray energies are employed to penetrate dense materials. I used an **experimental approach** to estimate and remove the scatter that involved designing a perforated lead sheet and subsequent image processing.

Combining the two methods enabled Rolls Royce to put a workflow together for **non-destructive examination** (NDE) of parts designed for next-generation jet engines with high performance and reliability.
