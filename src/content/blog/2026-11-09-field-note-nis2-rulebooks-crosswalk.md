---
title: "Field note #XX — NIS2 operational incident-handling rulebooks crosswalk lands in the framework"
description: "Twentieth field note from the SecOps-NG Digital Commons: the NIS2 operational incident-handling rulebooks crosswalk lands as a CORE artifact, providing structured compliance alignment across NIS2 Rulebooks 0–8 for incident response."
pubDate: 2026-11-09
author: "The SecOps-NG commons"
tags: ["shipping-update", "nis2", "crosswalk", "incident-response", "framework"]
---

The NIS2 operational incident-handling rulebooks crosswalk lands as a CORE artifact in the framework, providing structured compliance alignment across NIS2 Rulebooks 0–8. Operators can now align their incident response with each rulebook for structured compliance.

## What landed

- [PR #1060](https://github.com/secops-ng/secops-ng-framework/pull/1060) — NIS2 operational incident-handling rulebooks crosswalk CORE. Every rulebook entry is now reachable from framework primitives, enabling operators to align incident response with NIS2 Rulebooks 0–8.

## Why this matters for an operator

Operators running NIS2-regulated organisations can now measure their incident response coverage against each of the eight rulebooks. The crosswalk provides a direct mapping from framework artefacts to rulebook entries, moving the mapping out of spreadsheets and onto a community‑governed substrate.

## Where the artifacts live

- `content/mappings/` in `secops-ng-framework` — the NIS2 rulebook mappings keyed to framework primitives
- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework) — PR #1060 merged
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website) — this note and the ones that preceded it
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues, the kanban, the auto-generated roadmap

## The crosswalk property

Every rulebook entry in the crosswalk resolves to a framework primitive via `control_ref`, and every framework primitive has at least one rulebook entry referencing it. A resolver pass gated this merge: merges that drift off the substrate fail on dangling references.

What remains is the continuing build-out of the defensive‑technique axis and the CRA leg of the second axis, which will follow the same substrate shape.