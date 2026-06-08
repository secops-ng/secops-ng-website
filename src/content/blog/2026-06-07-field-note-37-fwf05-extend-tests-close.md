---
title: "Field note #37 — F-WF-05 incident management closes its EXTEND-tests wave: a cross-target happy-path golden replay and a deterministic same-target replay now sit under CI across n8n, Temporal, and LangGraph, and the three reference workflows F-WF-01, F-WF-03, and F-WF-05 carry the same EXTEND-tests parity bar end to end"
description: "Thirty-seventh field note from the SecOps-NG Digital Commons: F-WF-05 incident management closes its EXTEND-tests wave. The happy-path golden replay across the three reference compile targets (PR #262) and the deterministic same-target replay across each one of them (PR #263) now sit under CI. The lane that field note #36 closed at CORE-WIRE shape across n8n, Temporal, and LangGraph now carries the same EXTEND-tests parity bar the F-WF-01 vuln-intake and F-WF-03 alert-triage lanes already carry — happy-path byte parity across the three targets, and deterministic replay on each one — read against the same CORE-PRIM contract field note #35 named."
pubDate: 2026-06-07
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-05", "incident-management", "extend-tests", "replay-determinism", "golden-tests", "parity", "n8n", "temporal", "langgraph", "nis2", "compilers", "digital-commons"]
---

Field note #36 read F-WF-05 incident management closing its CORE-WIRE
wave: the CORE-PRIM primitives contract bound through CORE-WIRE-N8N,
CORE-WIRE-TEMPORAL, and CORE-WIRE-LANGGRAPH, with the typed stage
clocks against NIS2 Article 23, the significance and cross-border
policy, the regulator-submission contract, the F-PT-02 binding, and
the DSPy signature each rendering end to end through every one of
the three reference compile targets. The note named the
EXTEND-tests wave as the next move on the lane — the runtime and
replay coverage the worked examples needed to carry the guarantees
they already carried the shape of.

This note reads that wave closed. The two EXTEND-tests beats that
match the parity bar the F-WF-01 vuln-intake and F-WF-03 alert-triage
lanes already carry — a cross-target happy-path golden replay and a
deterministic same-target replay — now sit under CI on F-WF-05
incident management across all three reference compile targets.

## What this note reads off `main`

### F-WF-05 EXTEND-tests-happy: cross-target happy-path golden replay across all three targets

The first EXTEND-tests beat lands through
[PR #262](https://github.com/secops-ng/secops-ng-framework/pull/262):
a happy-path golden replay test runs the incident-management worked
example on each of the three reference compile targets against the
same incident payload and reads the rendered artefacts byte-identical
against checked-in goldens. The same typed stage clocks against the
NIS2 Article 23 beats, the same significance and cross-border policy
read, the same regulator-submission shape, the same F-PT-02 binding
on the artefacts the workflow writes, and the same DSPy signature on
the free-text surfaces render through n8n, Temporal, and LangGraph
to the same bytes.

The contract reads the same property the CORE-PRIM contract makes
real: the worked-example output on a typed incident payload is a
function of the content the workflow reads against, not of the
runtime that executes it. Three independent compile targets executing
against the same CACAO source, the same control mappings, the same
primitives package, and the same DSPy signature arrive at the same
artefact bytes — and the test fails the moment one of them does not.

### F-WF-05 EXTEND-tests-replay: deterministic same-target replay across each reference target

The second EXTEND-tests beat lands through
[PR #263](https://github.com/secops-ng/secops-ng-framework/pull/263):
a deterministic same-target replay test runs the incident-management
worked example twice on the same target with the same incident
payload and reads the second pass byte-identical against the first,
on every push, on every one of the three reference targets. The
shape mirrors the same-target determinism contracts the F-WF-01 and
F-WF-03 closeouts already put under CI — the same disclosure
replayed against the same target on the same content writes the
same case, the same envelope, and the same artefact bytes.

The two EXTEND-tests beats together name two independent contracts
under CI on F-WF-05: same-target determinism on replay, and
cross-target byte parity on the happy path. Neither is a property
the CORE-WIRE wiring quietly held; each is a test that fails the
moment the property breaks.

## What this wave closes

It closes F-WF-05 incident management onto the same EXTEND-tests
parity bar the F-WF-01 vuln-intake and F-WF-03 alert-triage lanes
already carry. The three reference workflows the project ships now
each read against the same shape under CI:

- The **happy-path golden replay** across n8n, Temporal, and
  LangGraph — the same payload renders byte-identical artefacts on
  every one of the three reference targets, on every push, against
  checked-in goldens.
- The **deterministic same-target replay** on each reference target
  — the same payload replayed against the same target on the same
  content writes the same bytes, on every push, on every target.

That bar reads the same on F-WF-01 vuln-intake, on F-WF-03 alert
triage, and on F-WF-05 incident management. The launch-window
workflow set now carries the same EXTEND-tests floor across three
worked examples — three independent regulatory anchors, three
shared primitives surfaces, three sets of typed contracts, and on
every one of them the same two CI guarantees that the worked
example reads the same end to end whichever of the three reference
targets the operator already runs, and the same end to end on the
same target across replays.

It closes the F-WF-05 lane onto the substrate F-WF-01 and F-WF-03
read against. A practitioner walking the framework repo today
finds the same EXTEND-tests shape underneath each of the three
reference workflows — the parity reads symmetrically across the
launch-window set, against the same content, against the same
primitives, against the same DSPy confinement, against the same
F-PT-02 binding, and now against the same two CI contracts on
top.

## What this wave does not promise

It does not promise the F-WF-05 lane is closed end to end. The
EXTEND-tests wave matches the parity bar the other two reference
workflows carry; the EXTEND-docs cookbook page that walks the
incident-management worked example end to end for an operator is
the next beat on the lane, against the same shape the F-WF-03
cookbook closeout established. The Shipped flip on the roadmap
sits behind that beat, not behind this one.

It does not promise an operator-side regulator-submission
transport. The EXTEND-tests beats guard the worked example against
the typed contract the CORE-PRIM lane named; the operator-side
landing surface — the CSIRT-facing email, the national-regulator
portal, the sovereign submission API — sits on top of the
substrate as a community contribution, not inside the worked
example the tests guard.

It does not promise byte parity on every output an operator might
extend the worked example with. The cross-target golden replay
guards the worked example as it ships against the goldens checked
in alongside it; operator-side extensions belong in contributor
playbooks composed on top of the substrate, against the same
shared primitives the worked example reads against.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against the good-first-issues on
`secops-ng-framework`, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set with three reference workflows reading
end to end against three reference compile targets, the same
EXTEND-tests parity bar under CI on every one of them, and the
first evidence stream open under `content/evidence/` against the
CP-01 risk-analysis schema.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-05 EXTEND-tests-happy through
  [PR #262](https://github.com/secops-ng/secops-ng-framework/pull/262)
  and EXTEND-tests-replay through
  [PR #263](https://github.com/secops-ng/secops-ng-framework/pull/263).
  The EXTEND-tests wave on F-WF-05 is now closed across the three
  reference compile targets.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-six that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the launch-window workflow set
reads as three reference workflows against a single EXTEND-tests
parity bar: a cross-target happy-path golden replay and a
deterministic same-target replay sit under CI on F-WF-01
vuln-intake, on F-WF-03 alert triage, and now on F-WF-05 incident
management, on each of n8n, Temporal, and LangGraph, against the
same CORE-PRIM contracts the three lanes read against. The next
move on F-WF-05 is the EXTEND-docs cookbook beat that walks the
incident-management worked example end to end for an operator,
against the same shape the F-WF-03 cookbook closeout established.

More from the lanes as the EXTEND-docs cookbook beat lights up.
