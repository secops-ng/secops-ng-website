---
title: "Field note #36 — F-WF-05 incident management closes the CORE-WIRE wave across all three reference targets: the n8n, Temporal, and LangGraph SKELETONs are now each bound to the shared primitives contract through their own CORE-WIRE cell, with the typed stage clocks, the significance and cross-border policy, the regulator-submission contract, the F-PT-02 binding, and the DSPy signature rendered end to end in every compile target"
description: "Thirty-sixth field note from the SecOps-NG Digital Commons: F-WF-05 incident management closes its CORE-WIRE composition wave. The CORE-PRIM primitives contract (PR #258) now binds through CORE-WIRE-N8N (PR #259), CORE-WIRE-TEMPORAL (PR #260), and CORE-WIRE-LANGGRAPH (PR #261). The same typed stage clocks against NIS2 Article 23, the significance and cross-border policy, the regulator-submission contract, the F-PT-02 binding, and the DSPy signature now render through each of the three reference compile targets. The worked examples sit at SKELETON shape; the next wave is the EXTEND-tests triplet that brings runtime and replay coverage."
pubDate: 2026-06-07
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-05", "incident-management", "primitives", "core-wire", "stage-clocks", "regulator-submission", "cross-border", "nis2", "n8n", "temporal", "langgraph", "dspy", "f-pt-02", "compilers", "digital-commons"]
---

Field note #35 read F-WF-05 incident management binding its CORE-PRIM
primitives contract on `main` and wiring the first of three reference
compile targets — n8n — into that contract through CORE-WIRE-N8N. The
Temporal and LangGraph CORE-WIRE cells stood as the two next moves on
the lane.

This note reads those two moves off `main`. The CORE-WIRE wave on
F-WF-05 is now closed: every one of the three reference compile
targets is bound to the same primitives contract through its own
CORE-WIRE cell, and the worked examples render the same playbook
through three runtimes against a single typed shape.

## What this note reads off `main`

### F-WF-05 CORE-WIRE-TEMPORAL: the Temporal SKELETON wired into the primitives

Through
[PR #260](https://github.com/secops-ng/secops-ng-framework/pull/260),
the Temporal worked example under
`examples/temporal/incident-management/` picks up the CORE-PRIM
contract. The typed stage clocks render as Temporal timer surfaces
against the NIS2 Article 23 beats, the significance and cross-border
policy is consulted through the shared policy primitive rather than
re-encoded inside the workflow body, the regulator-submission
contract renders as the typed shape the downstream submission
activity emits against, the F-PT-02 binding carries through onto the
artefacts the workflow writes, and the DSPy signature names the
free-text surface a language-model decision is allowed to touch.
Where the n8n target renders the contract as a typed node graph, the
Temporal target renders it as a durable state machine that walks the
same beats.

### F-WF-05 CORE-WIRE-LANGGRAPH: the LangGraph SKELETON wired into the primitives

Through
[PR #261](https://github.com/secops-ng/secops-ng-framework/pull/261),
the LangGraph worked example under
`examples/langgraph/incident-management/` picks up the same
CORE-PRIM contract. The stage clocks render as typed nodes on the
LangGraph state graph against the same NIS2 Article 23 timeline, the
significance and cross-border policy is consulted through the shared
primitive, the regulator-submission contract renders as the typed
shape the downstream submission node emits against, the F-PT-02
binding carries through, and the DSPy signature is confined to the
free-text fields where the agentic surface earns its keep. The
agentic target picks up the same contract; the runtime shape is
where the three renderings differ.

## What this lane closes

It closes the CORE-WIRE wave on F-WF-05. The three reference compile
targets that landed at SKELETON parity on field note #33 now each
read against the same shared primitives contract. The same typed
stage clocks, the same significance and cross-border policy, the
same regulator-submission shape, the same F-PT-02 binding, and the
same DSPy signature render through all three runtimes:

- The **typed stage clocks** against NIS2 Article 23 — the
  awareness, early-warning, incident-notification, and final-report
  beats — are each a property of the workflow in every target. The
  downstream reader asks the same question in n8n, Temporal, and
  LangGraph and reads the same shape.
- The **significance and cross-border policy** is the same typed
  primitive in every target. A contributor does not write three
  branches of the same regulatory threshold against three target
  graphs; the policy reads against the shared content vocabulary
  the CACAO source already declares.
- The **regulator-submission contract** is the same typed shape in
  every target. The transport — where that submission lands on the
  operator side — sits as a community contribution on top of the
  substrate; the substrate names the shape.
- The **F-PT-02 binding** carries through onto every artefact each
  of the three workflows writes. The cadence reading is the same on
  an incident artefact from the n8n target, the Temporal target,
  and the LangGraph target.
- The **DSPy signature** sits in the same place in every target:
  confined to the free-text surfaces where a language-model decision
  earns its keep, and provider-neutral against the EU-hostable
  language-model layer. The classification, significance, and
  cross-border decisions are expressed against the same signature
  in all three renderings.

It closes the F-WF-05 lane against the same shape the F-WF-03 lane
closed at field note #31: a worked-example triplet that renders the
same playbook through three runtimes against a single typed
contract, with a regulatory anchor read off the substrate rather
than the prose. F-WF-03 alert triage and F-WF-05 incident management
now read symmetrically across n8n, Temporal, and LangGraph.

## What this lane does not promise

It does not promise the worked examples are runtime-ready. The three
CORE-WIRE cells render the primitives contract through each target
at **SKELETON shape**: the typed surfaces are in place, the wiring
walks the beats, the contract is the same end to end. Runtime and
replay coverage — the EXTEND-tests triplet that proved out the
F-WF-03 lane — sits as the next composition wave on F-WF-05. The
worked examples carry the shape today; the tests will carry the
guarantees.

It does not promise an operator-side regulator-submission transport.
The CORE-PRIM contract names the shape a regulator-facing submission
carries; the CSIRT-facing email, the national-regulator portal, the
sovereign submission API — those sit on top of the substrate. The
substrate is the contract; the transport is the operator's call.

It does not promise the cross-border fan-out is closed. The
significance and cross-border policy reads the cross-border question
as a typed decision against the content vocabulary; the sibling-CSIRT
fan-out the cross-border result implies will land through its own
composition wave as the substrate grows.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against the good-first-issues on
`secops-ng-framework`, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set with two complete worked examples,
F-WF-05 incident management at SKELETON parity across three targets
with all three now wired into the shared primitives contract, and
the first evidence stream open under `content/evidence/` against
the CP-01 risk-analysis schema.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-05 CORE-PRIM through
  [PR #258](https://github.com/secops-ng/secops-ng-framework/pull/258),
  CORE-WIRE-N8N through
  [PR #259](https://github.com/secops-ng/secops-ng-framework/pull/259),
  CORE-WIRE-TEMPORAL through
  [PR #260](https://github.com/secops-ng/secops-ng-framework/pull/260),
  and CORE-WIRE-LANGGRAPH through
  [PR #261](https://github.com/secops-ng/secops-ng-framework/pull/261).
  The CORE-WIRE wave is now closed across all three reference
  compile targets.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-five that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the F-WF-05 lane reads as a
single shape rendered through three runtimes: the typed stage
clocks against NIS2 Article 23, the significance and cross-border
policy, the regulator-submission contract, the F-PT-02 binding,
and the DSPy signature each render end to end in n8n, Temporal,
and LangGraph against the same CORE-PRIM contract. The next move
on the lane is the EXTEND-tests triplet that brings runtime and
replay coverage onto the worked examples the wave just closed.

More from the lanes as the EXTEND-tests triplet lights up.
