---
title: "Field note #33 — F-WF-05 incident management lands its SKELETON wave: a canonical CACAO source on the content side and worked-example skeletons across n8n, Temporal, and LangGraph, each guarded by a drift contract under CI"
description: "Thirty-third field note from the SecOps-NG Digital Commons: F-WF-05 incident management lands its SKELETON wave on main. A canonical CACAO source sits under content with a source-shape guard, and worked-example skeletons on n8n, Temporal, and LangGraph each render against the canonical source with a drift guard under CI. F-WF-05 is now the fourth workflow on the substrate with full three-target SKELETON parity, alongside F-WF-01 vuln intake, F-WF-03 alert triage, and the rest of the SKELETON set."
pubDate: 2026-06-06
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-05", "incident-management", "skeleton", "cacao", "content-model", "drift-guard", "source-shape-guard", "compilers", "temporal", "langgraph", "n8n", "digital-commons"]
---

Field note #32 read F-WF-03 alert triage flipping to **Shipped** on the
roadmap with the worked example end to end on every reference target,
three independent CI contracts on top, and a cookbook walkthrough
beside it. F-WF-05 incident management had been kicked off the wave
before — its ROADMAP entry moved from **Proposed** to **In Progress**,
and the gap inventory opened against `main`.

This note reads off F-WF-05's first composition wave: the SKELETON
wave. A canonical CACAO source for incident management is now under
content, three worked-example skeletons on n8n, Temporal, and
LangGraph render against it, and each one is guarded by a drift
contract under CI. F-WF-05 joins the substrate as the fourth workflow
with full three-target SKELETON parity.

## What this note reads off `main`

### F-WF-05 CORE-SKEL-SRC: canonical CACAO source + source-shape guard

The first move binds the content side. Through
[PR #251](https://github.com/secops-ng/secops-ng-framework/pull/251),
a canonical CACAO playbook for incident management lands under
`content/playbooks/incident_management/` as the single source the
three compile targets read against, and a source-shape guard goes
under CI: the canonical source has to validate against the CACAO
schema the project has been carrying, and any step the playbook names
has to declare the shape downstream compilers will look for.

The regulatory anchor F-WF-05 names is **NIS2 Article 23** — the
notification obligations on a significant incident, the timeline the
workflow has to walk from awareness through early warning, incident
notification, and final report. The canonical source reads that arc
as a CACAO playbook: triggers, intake, classification against the
significance threshold, the notification branches that fan out by
recipient (CSIRT, regulator, affected community), the post-incident
beats, and the audit-mirror sibling every workflow on the substrate
shares.

### F-WF-05 CORE-SKEL-N8N: SKELETON n8n worked example + drift guard

The n8n SKELETON lands through
[PR #252](https://github.com/secops-ng/secops-ng-framework/pull/252):
a worked example on the n8n reference compile target that renders the
F-WF-05 canonical source into the n8n workflow shape, with the step
graph, the typed payload shapes, and the audit-mirror sibling all in
place but the per-step bodies left as the SKELETON markers the
CORE-WIRE wave fills in beat by beat. A drift guard sits under CI:
the rendered worked example has to keep reading against the canonical
source's step list and shape, and any new step or shape change on the
content side fails the build until the worked example is regenerated.

### F-WF-05 CORE-SKEL-LG: SKELETON LangGraph worked example + drift guard

The LangGraph SKELETON lands through
[PR #253](https://github.com/secops-ng/secops-ng-framework/pull/253):
the same arc rendered into LangGraph's graph-of-nodes shape, against
the same canonical CACAO source, with the same SKELETON markers and
the same drift guard under CI. The shape that emerges is the shape
the previous three workflow SKELETONs already established: the
three compile targets read the same content artefact and render it
into the three target-native shapes, and the drift guard makes the
three renders stay in sync as the source moves.

### F-WF-05 CORE-SKEL-TMP: SKELETON Temporal worked example + drift guard

The Temporal SKELETON lands through
[PR #254](https://github.com/secops-ng/secops-ng-framework/pull/254):
the same arc rendered into Temporal's workflow-and-activities shape,
against the same canonical CACAO source, with the same SKELETON
markers and the same drift guard under CI. With this PR the
three-target parity on F-WF-05 reads true: a single canonical
source on the content side, three worked-example skeletons on the
compile side, and four CI contracts on top — the source-shape guard
plus a drift guard on each target.

## What this wave closes

It closes F-WF-05 into the SKELETON shape every other workflow on
the substrate has already taken: a canonical CACAO source under
content with a source-shape guard, a worked-example skeleton on each
of the three reference compile targets, and a drift guard under CI
on each render. F-WF-05 is the fourth workflow to read this shape,
alongside F-WF-01 vuln intake, F-WF-03 alert triage, and the other
SKELETON-complete workflows on the substrate.

It closes the structural half of the F-WF-05 composition: the
canonical source names every step the incident-management workflow
will touch, the three renders bind those steps into target-native
shapes, and the drift guards make the SKELETON wave's promise — that
the three renders read against the same content — a CI contract
rather than a wiring property held by hand.

It closes the gap between F-WF-05 being **In Progress** on the
roadmap and F-WF-05 having a runnable skeleton on `main` that a
contributor can clone and inspect on whichever of the three
reference targets they already run, even before the CORE-WIRE wave
binds the per-step bodies.

## What this wave does not promise

It does not promise the per-step bodies are wired. SKELETON is
deliberately the shape that lets CORE-WIRE land step by step on top.
The action bodies the incident-management playbook names — the
significance classification, the notification fan-out, the
post-incident composition — sit as SKELETON markers on each of the
three worked examples and read into the next composition waves as
the CORE-WIRE work picks them up beat by beat.

It does not promise the EXTEND-tests trio under CI yet. The
same-target determinism contract, the cross-target byte-parity
golden replay, and the dedup or notification-collision contract
each read into their own composition moves once the CORE-WIRE wave
has bodies for them to run against. The drift guards on each
SKELETON render are the contracts this wave puts under CI; the
shipped trio of CI contracts lands as F-WF-05 walks the same
EXTEND-tests arc F-WF-01 and F-WF-03 have already walked.

It does not promise the F-WF-05 cookbook page in this wave. The
operator-facing cookbook walkthrough lands as the EXTEND-docs beat
once the CORE-WIRE bodies and the EXTEND-tests trio are on `main`,
the same shape the two shipped workflows already established.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against five good-first-issues on
`secops-ng-framework`, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the same
five issues open, two complete worked examples reading end to end
against three reference targets (F-WF-01 vuln intake, F-WF-03
alert triage), and now four workflow SKELETONs with three-target
parity on the substrate — the fourth, F-WF-05 incident management,
just landed and is ready for CORE-WIRE contributions on each of
its action bodies on each of the three reference targets.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-05 CORE-SKEL-SRC through
  [PR #251](https://github.com/secops-ng/secops-ng-framework/pull/251),
  CORE-SKEL-N8N through
  [PR #252](https://github.com/secops-ng/secops-ng-framework/pull/252),
  CORE-SKEL-LG through
  [PR #253](https://github.com/secops-ng/secops-ng-framework/pull/253),
  and CORE-SKEL-TMP through
  [PR #254](https://github.com/secops-ng/secops-ng-framework/pull/254).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-two that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and F-WF-05 incident management
reads as a canonical CACAO source under content with a source-shape
guard, three worked-example skeletons on n8n, Temporal, and
LangGraph each guarded by a drift contract under CI, and the
NIS2 Article 23 notification arc named end to end on the source
even before the per-step bodies bind. The next moves walk the
CORE-WIRE wave across the action bodies the playbook names, step
by step on each of the three reference compile targets, against
the same composition shape the two shipped workflows already
established.

More from the lanes as CORE-WIRE picks up the incident-management
action bodies and the SKELETON-complete substrate keeps walking
the launch-window workflow set onto runnable worked examples beat
by beat.
