---
title: "Field note #4 — substrate hardening: control references resolve, drift is gated, vuln-intake reaches CORE"
description: "Fourth field note from the SecOps-NG Digital Commons: the OSCAL/D3FEND control cross-reference lands as a CI-gated index, and vuln-intake CACAO v2 graduates from SKELETON to CORE — the fourth of five reference playbooks now end-to-end."
pubDate: 2026-05-30
author: "The SecOps-NG commons"
tags: ["shipping-update", "oscal", "d3fend", "ocsf", "cacao", "vuln-intake", "cra", "nis2", "dora", "substrate", "digital-commons"]
---

Field note #3 reported volume: a KPI catalogue, six worked examples,
regulatory overlays across the board. This one is quieter and lower
in the stack. The wave since is about the substrate underneath all of
that — the part the catalogue stands on. The headline is not a new
artefact. It is that the existing ones now hold together under
mechanical check.

## The first beat: every control reference resolves

The shipped mappings under `mappings/{nis2,dora,cra}` reference OSCAL
control identifiers and D3FEND techniques by string. Until this wave,
nothing in the repository proved those strings pointed at anything
real. A typo, a renamed control, a stale D3FEND identifier — none of
it would fail a build. It would just quietly mislead an operator who
trusted the overlay.

The OSCAL/D3FEND cross-reference CORE + EXTEND landed in this wave
(PRs [#106](https://github.com/secops-ng/secops-ng-framework/pull/106),
[#107](https://github.com/secops-ng/secops-ng-framework/pull/107)).
Every `control_ref` in every shipped mapping now resolves against a
versioned, in-repo index of the upstream catalogues. CI runs a linter
that fails the build on an unresolved reference, a dangling D3FEND id,
or a reference to a catalogue version the index does not know about.

Drift, in other words, is now a CI failure rather than a slow erosion
of trust in the overlay. The cross-reference does not make the
mappings *correct* — that is editorial work and stays editorial work —
but it makes them *honest*. An operator who points at a
`mappings/nis2/...` row in the repository can be confident the
identifier on the other end actually exists in the catalogue it
claims.

This is the kind of work a commons is supposed to do once, in the
open, so that nobody has to redo it. Nothing about the cross-reference
is novel research. It is plumbing. Plumbing nobody owned, until it
was put in the repository under a CI gate.

## The second beat: vuln-intake CACAO v2 reaches CORE

The reference playbook set has five entries on the M0 milestone. Four
are now at CORE; vuln-intake is the latest to graduate (PRs
[#108](https://github.com/secops-ng/secops-ng-framework/pull/108),
[#109](https://github.com/secops-ng/secops-ng-framework/pull/109)).

What changed in the SKELETON → CORE step is the regulator-notification
chain. CRA Article 14 requires a specific serial sequence of
notifications to the coordinating authority — early warning,
incident report, final report — each on its own clock, each triggered
by signals the playbook is in a position to observe. Modelling that
chain as a portable CACAO v2 artefact, rather than as a paragraph of
guidance, means an operator who compiles the playbook into Temporal,
n8n, or LangGraph gets the deadlines, the state, and the handoffs as
durable workflow steps rather than as a reminder calendar.

OCSF `vulnerability_finding@v1` telemetry is wired in on the input
side. The playbook consumes findings in a single shared shape rather
than per-scanner shapes, and emits notifications in a shape the
coordinating authority's intake side can be built against. The CACAO
artefact is the contract; OCSF is the wire format underneath.

Like every other playbook in the catalogue, vuln-intake ships its
EXTEND overlay populated — OSCAL control identifiers, D3FEND
techniques, KPI identifiers from the catalogue, and explicit CRA,
NIS2, and DORA article cross-links. Because the cross-reference now
runs in CI, those identifiers are not just present; they are checked.

## What this wave does not change

Still no runtime. Still no agent framework. Still no SOAR. The
substrate work makes the existing content more trustworthy without
adding new surface for an operator to depend on. The compile targets
remain Temporal, n8n, and LangGraph; the sovereign-deployment
quickstart on Nebul with Mistral and Temporal remains one reference
path among many.

The pattern across these four notes is consistent. Each wave adds
something an operator can verify in the open and reuse without
asking permission. This one happens to be the wave where the
artefacts of the previous waves stop being able to drift silently.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the content model, the catalogues, the playbooks, the
  cross-reference index, the CI gate.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the field notes that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — issues,
  the public kanban, the auto-generated roadmap.

If you run SecOps in Europe and you have a view on which control
catalogues should be indexed next, which CRA/NIS2/DORA article
mappings need sharpening, or which reference playbook deserves the
next CORE pass, the kanban is the place. The work happens in the
open.

More soon, from the lanes.
