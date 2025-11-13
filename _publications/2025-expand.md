---
title: "Expand Neurons, Not Parameters"
collection: publications
category: manuscripts
permalink: /publication/2025-expand
excerpt: ''
date: 2025-10-06
venue: 'arXiv'
preprint: true
selected: true
paperurl: 'https://arxiv.org/abs/2510.04500'
authors: 'Linghao Kong*, <strong>Inimai Subramanian*</strong>, Yonadav Shavit, Micah Adler, Dan Alistarh, & Nir N. Shavit'
citation: 'Kong, L.*, <strong>Subramanian, I.*<strong>, Shavit, Y., Adler, M., Alistarh, D., & Shavit, N. N. (2025, October). Expand neurons, not parameters. arXiv preprint. https://arxiv.org/abs/2510.04500'
---

This work demonstrates how increasing the number of neurons in a network without increasing its number of non-zero parameters improves performance. We show that this gain corresponds with a decrease in interference between multiple features that would otherwise share the same neurons. To reduce such entanglement at a fixed non-zero parameter count, we introduce Fixed Parameter Expansion (FPE): replace a neuron with multiple children and partition the parent's weights disjointly across them, so that each child inherits a non-overlapping subset of connections. On symbolic tasks, specifically Boolean code problems, clause-aligned FPE systematically reduces polysemanticity metrics and yields higher task accuracy. Notably, random splits of neuron weights approximate these gains, indicating that reduced collisions, not precise assignment, are a primary driver. Consistent with the superposition hypothesis, the benefits of FPE grow with increasing interference: when polysemantic load is high, accuracy improvements are the largest. Transferring these insights to real models (classifiers over CLIP embeddings and deeper multilayer networks) we find that widening networks while maintaining a constant non-zero parameter count consistently increases accuracy. These results identify an interpretability-grounded mechanism to leverage width against superposition, improving performance without increasing the number of non-zero parameters. Such a direction is well matched to modern accelerators, where memory movement of non-zero parameters, rather than raw compute, is the dominant bottleneck.