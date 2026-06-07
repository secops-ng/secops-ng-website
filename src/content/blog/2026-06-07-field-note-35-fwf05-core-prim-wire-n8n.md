---
title: "Field note #35 — F-WF-05 incident management binds its primitives contract and wires it into the n8n target: typed stage clocks, a significance and cross-border policy, a regulator-submission contract, an F-PT-02 binding, and a DSPy signature, all rendered through the n8n SKELETON as the first of three wirings"
description: "Thirty-fifth field note from the SecOps-NG Digital Commons: F-WF-05 incident management lands its CORE-PRIM primitives contract on main and wires that contract into the n8n reference compile target. The primitives carry typed stage clocks against the NIS2 Article 23 timeline, a significance and cross-border policy, a regulator-submission contract, an F-PT-02 binding, and a DSPy signature. The n8n SKELETON is the first of three wirings; Temporal and LangGraph follow."
pubDate: 2026-06-07
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-05", "incident-management", "primitives", "stage-clocks", "regulator-submission", "cross-border", "nis2", "n8n", "dspy", "f-pt-02", "compilers", "digital-commons"]
---

Field note #33 read F-WF-05 incident management landing its SKELETON
wave across n8n, Temporal, and LangGraph against a canonical CACAO
source. Field note #34 read F-CP-01 opening the first evidence stream
under `content/evidence/` as a typed schema, a cross-stream index, and
an emitter skeleton.

This note reads off the next move on F-WF-05: the primitives contract
the SKELETON wave was pointing at is now on `main`, and the n8n target
is the first of the three reference compile targets wired into it.
Two PRs landed today against `secops-ng-framework`, both back to back,
both inside the same composition wave.

## What this note reads off `main`

### F-WF-05 CORE-PRIM: shared incident-management primitives contract

The first move binds the content side. Through
[PR #258](https://github.com/secops-ng/secops-ng-framework/pull/258),
a set of shared incident-management primitives lands under content as
the contract every compile target on this workflow reads against. The
contract carries five surfaces, each named end to end:

- **Typed stage clocks** against the NIS2 Article 23 timeline. The
  awareness, early-warning, incident-notification, and final-report
  beats are each a typed clock with a deadline read off the regulatory
  anchor and a state a downstream reader can check against the cadence
  the anchor expects. The clock is a property of the workflow, not a
  comment in prose.
- **A significance and cross-border policy.** Whether an incident
  crosses the significance threshold the regulator names, and whether
  it carries a cross-border dimension a sibling CSIRT also needs to
  read, are each evaluated against a typed policy the workflow consults
  rather than a branch a contributor writes by hand against the
  playbook. The policy reads against the same content vocabulary the
  CACAO source already declares.
- **A regulator-submission contract.** The shape a regulator-facing
  submission carries — recipient, timeline beat, evidence references,
  and the audit-mirror sibling — is a typed contract the workflow
  emits against. The contract names the surface; the operator picks
  the transport.
- **An F-PT-02 binding.** The primitives bind into the F-PT-02
  promotion-and-cadence vocabulary so the stage-clock state and the
  regulator-submission contract participate in the same cadence
  reading the rest of the substrate already speaks. A downstream
  evidence reader can ask the cadence band of an incident artefact
  the same way it asks the cadence band of a risk-analysis artefact
  on F-CP-01.
- **A DSPy signature.** The primitives carry a DSPy signature so the
  classification, significance, and cross-border decisions can be
  expressed against an EU-hostable language model surface without
  the workflow having to encode a specific provider into the
  playbook. Provider neutrality at the artifact layer carries
  through onto the primitives layer.

The CORE-PRIM contract is what makes the three compile targets the
SKELETON wave landed read against the same shape rather than three
parallel renderings of the playbook. The SKELETON is the silhouette;
the primitives are the bones.

### F-WF-05 CORE-WIRE-N8N: the n8n SKELETON wired into the primitives

The second move binds the n8n target. Through
[PR #259](https://github.com/secops-ng/secops-ng-framework/pull/259),
the n8n worked example under `examples/n8n/incident-management/`
picks up the CORE-PRIM contract: the stage clocks render as typed
n8n nodes against the NIS2 Article 23 beats, the significance and
cross-border policy is consulted through the shared policy primitive
rather than re-encoded in the n8n graph, the regulator-submission
contract renders as the typed shape the downstream submission node
emits against, and the F-PT-02 binding carries through onto the
artefacts the workflow writes.

The n8n SKELETON is now the first of three wirings on F-WF-05. The
Temporal and LangGraph SKELETONs that landed in the same wave as
the n8n one stand ready to pick up the same contract through their
own CORE-WIRE cells. The three targets render the same playbook
through three runtimes; the primitives contract is the single shape
each target binds into.

## What this lane opens

It opens the seam where F-WF-05 stops being three parallel SKELETONs
against a canonical CACAO source and starts being a single workflow
with a typed contract three targets render. The operator running n8n
today reads the stage clocks, the significance policy, the
regulator-submission shape, and the F-PT-02 cadence on the same
artefacts the operator running Temporal or LangGraph will read once
the sibling CORE-WIRE cells land. The substrate names the shape; the
runtime picks the rendering.

It opens the bridge into the regulatory anchor the workflow names.
NIS2 Article 23 reads as a typed timeline the workflow walks rather
than a prose obligation the playbook references. The "is this beat
on time" question is a property a downstream reader can check
against the stage clock the primitive declares. The cross-border
dimension is a policy result the workflow records, not a contributor
note in the CACAO body.

It opens the surface the evidence side will compose against. The
audit-mirror sibling every workflow on the substrate carries already
reads through F-CR-04 OpenTelemetry; the F-CP-01 evidence stream
opened under `content/evidence/` last note. The regulator-submission
contract the CORE-PRIM primitives carry is the shape an incident
evidence stream on the continuous-posture side will compose against
when its slot lights up.

## What this lane does not promise

It does not promise Temporal and LangGraph are wired yet. CORE-WIRE
for those two targets sits as the next two cells on the lane; the
n8n CORE-WIRE is the first of the three. The SKELETONs for the two
sibling targets remain on `main` from the field-note-#33 wave and
will pick up the primitives contract through their own CORE-WIRE
cells.

It does not promise an operator-side regulator-submission transport.
The CORE-PRIM contract names the shape a regulator-facing submission
carries; where that submission lands on the operator side — a
CSIRT-facing email, a national-regulator portal, a sovereign
submission API — sits as a community contribution on top of the
substrate, not as part of the primitives wave.

It does not promise the cross-border dimension is closed. The
significance and cross-border policy reads the cross-border question
as a typed decision against the content vocabulary; the
sibling-CSIRT fan-out the cross-border result implies lands through
its own composition wave as the substrate grows.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against the good-first-issues on
`secops-ng-framework`, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set with two complete worked examples,
F-WF-05 incident management at SKELETON parity across three
targets, the first of those three (n8n) now wired into the shared
primitives contract, and the first evidence stream open under
`content/evidence/` against the CP-01 risk-analysis schema.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-05 CORE-PRIM through
  [PR #258](https://github.com/secops-ng/secops-ng-framework/pull/258)
  and CORE-WIRE-N8N through
  [PR #259](https://github.com/secops-ng/secops-ng-framework/pull/259),
  on top of the SKELETON wave field note #33 read off.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-four that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the F-WF-05 lane reads as a
contract: typed stage clocks against NIS2 Article 23, a significance
and cross-border policy, a regulator-submission shape, an F-PT-02
binding, and a DSPy signature, with the n8n target rendering them
end to end. The Temporal and LangGraph CORE-WIRE cells stand as the
next two moves on the lane.

More from the lanes as the two sibling CORE-WIRE cells pick up the
shape CORE-PRIM just bound.
