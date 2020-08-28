---
title: "Super-resolution imaging"
layout: post
category: Projects
avatar: "/images/super_resolution/superresolution.svg"
skills:
  - "Sensor fusion"
  - "Advanced signal processing"
---

is a **sensor-fusion** technique where multiple observations of the same ground truth are combined to reconstruct an image with higher resolution than the individual observations.

When it comes to X-ray imaging, technical constraints limit the spatial resolution that a detector can provide. In essence the detector's pixel size cannot go lower than a threshold value. Applying **super-resolution imaging** to this problem allows one to improve the spatial resolution of a given setup by recording the same signal multiple times.

I am currently working on a project to double the spatial resolution of a <a href="https://www.southampton.ac.uk/muvis/about/equipment/hutch.page">Nikon X-tek micro-computed tomographic imager</a> at at VIS X-ray Imaging Centre. So far I have formulated the algorithm and performed _in silico_ simulations as a proof-of-concept.

Looking forward to experimental validation...

<div class="columns spacing">
	<div style="text-align:center">
		<img src='/images/super_resolution/super_resolution.jpg'>
	</div>
</div>
