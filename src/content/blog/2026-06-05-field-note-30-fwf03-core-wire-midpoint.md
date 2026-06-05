---
title: "Field note #30 — F-WF-03 alert-triage CORE-WIRE wave reaches the midpoint with twelve of twenty-four CORE cells wired across n8n, Temporal, and LangGraph against the shared primitives package"
description: "Thirtieth field note from the SecOps-NG Digital Commons: the F-WF-03 alert-triage CORE-WIRE wave passes its midpoint on `main` — four of eight CORE action bodies are now bound to the shared primitives package across all three reference targets (twelve of twenty-four CORE cells green), with the n8n alert-triage README brought to OTel + AuditTrail mirror parity with vuln-intake, and ingest, suppress, prioritise, and suppress-close action bodies wired through validate_alert_payload, canonical_seen_key, the prioritisation policy, and the suppression-window primitive."
pubDate: 2026-06-05
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-03", "alert-triage", "core-wire", "core-prim", "primitives", "audit-mirror", "compilers", "temporal", "langgraph", "n8n", "digital-commons"]
---

Field note #29 read the F-CR-04 OpenTelemetry-instrumentation feature
flipped fully to Shipped on the roadmap, the F-WF-03 alert-triage lane
opened against a gap inventory, and a shared CORE-PRIM primitives
package landed ahead of the cross-target wiring fan-out.

This note reads off the next move on `main`: the cross-target wiring
fan-out is now half-walked. Four of eight CORE action bodies on the
alert-triage playbook are bound against the shared primitives package
on every reference target — twelve of twenty-four CORE cells green —
and the n8n alert-triage README has been brought to OTel + AuditTrail
mirror parity with the vuln-intake README on its side of the substrate.

## What this note reads off `main`

### F-WF-03 CORE-N8N-AUDIT-MIRROR: n8n README reaches OTel + AuditTrail mirror parity

The first move closes the audit-mirror gap on the n8n side of the
substrate. Through
[PR #234](https://github.com/secops-ng/secops-ng-framework/pull/234),
the n8n alert-triage README is brought to OTel + AuditTrail mirror
parity with the vuln-intake README that landed on the F-CR-04 wave.

Read against the F-CR-04 closeout, this is the move that finishes
extending the OTel-instrumentation property the four-layer architecture
promises onto the alert-triage lane on the no-code reference target.
Every emit path the README walks an integrator through now writes
through the same audit-mirror seam onto the same `AuditTrail.append`
shape the vuln-intake README walks through on its side, and every span
the README names reads under the same attribute-schema helper. The
parity is the same shape the n8n vuln-intake README reached on the
F-CR-04 wave — the alert-triage README now reads against that template
rather than as a separate documentation surface.

### F-WF-03 CORE-WIRE-PAYLOAD: ingest action bodies bind to validate_alert_payload across all three targets

The second move opens the cross-target wiring fan-out itself. Through
[PR #235](https://github.com/secops-ng/secops-ng-framework/pull/235),
the "ingest typed alert payload" CORE action body is wired to the
`validate_alert_payload` primitive across n8n, Temporal, and LangGraph.

Read against the F-WF-03 arc, this is the first of the eight CORE
action bodies the gap inventory names landing on its named primitive.
Each of the three reference compilers now reads the ingest body off
the same primitive name, against the same Pydantic v2 typed payload
shape the F-CR-01 frozen-`ToolIO` contract reads against on the
primitives package. A malformed payload fails the validator on the
way in on every reference target rather than fanning out across the
wiring downstream, the same shape the F-WF-01 vuln-intake CORE-WIRE
wave bound the parse-CVE body against on its lane.

### F-WF-03 CORE-WIRE-SUPPRESS: enrich-with-telemetry-context bodies wire through canonical_seen_key

The third move walks the next of the eight CORE action bodies onto its
primitive. Through
[PR #236](https://github.com/secops-ng/secops-ng-framework/pull/236),
the "enrich with telemetry context" CORE action body is wired through
the `canonical_seen_key` helper of the suppression-window primitive
across all three reference targets.

The canonical seen-key reads off the enriched payload shape onto the
same key bytes on every reference target. A replay of the same alert
inside the same window now reads as suppressed against the same key
on n8n, Temporal, and LangGraph alike — the property the suppression
primitive promised on the CORE-PRIM wave now stands on the bound
action body rather than on the package alone.

### F-WF-03 CORE-WIRE-PRIORITISE: classify-and-prioritise bodies bind to the deterministic prioritisation policy

The fourth move binds the deterministic prioritisation policy. Through
[PR #237](https://github.com/secops-ng/secops-ng-framework/pull/237),
the "classify and prioritise" CORE action body is wired to
`alert_triage.primitives.prioritisation.prioritise` across all three
reference targets.

Each compiler now reads the classify-and-prioritise body off the same
named policy. The canonical priority field the primitive promised on
the CORE-PRIM wave now lands on the action body on every reference
target against the same input shape, and the policy is the seam each
target reads against rather than a per-target re-implementation of
the priority ladder. This is the equivalent move to the F-WF-01
severity-policy bind on the vuln-intake lane.

### F-WF-03 CORE-WIRE-SUPPRESS-CLOSE: suppress-and-close bodies wire through the suppression primitive

The fifth move closes the suppress-and-close action body against the
suppression primitive. Through
[PR #238](https://github.com/secops-ng/secops-ng-framework/pull/238),
the "suppress and close" CORE action body is wired through the
suppression primitive across all three reference targets.

The suppression decision the primitive reaches on the seen-key now
reads through onto the same close-out action body on n8n, Temporal,
and LangGraph alike. The bind closes the loop the
CORE-WIRE-SUPPRESS move opened on the enrich body: the same
canonical key the enrich body writes is the key the suppress-close
body reads against, on the same primitive, on every reference
target.

## Where the wave stands

Four of eight CORE action bodies on the alert-triage playbook are now
bound against the shared primitives package on every reference target.
Twelve of twenty-four CORE cells read green on the matrix the gap
inventory walks against, against the four bound bodies: ingest,
enrich/suppress-seen-key, classify-and-prioritise, and suppress-and-
close.

Four CORE action bodies remain in the wire wave — the four response
actions the priority ladder reads against (p1, p2, p3, p4) — and the
tests-happy / suppress / replay-determinism beats, the cookbook entry,
and the GDPR data-flow note still stand ahead of the F-WF-03 CLOSEOUT
on the roadmap.

## What this wave closes

It closes the n8n alert-triage README's audit-mirror gap on the F-CR-04
substrate. The README now reads against the same OTel + AuditTrail
mirror property the n8n vuln-intake README reaches, on the no-code
reference target.

It closes the first half of the CORE-WIRE fan-out across n8n, Temporal,
and LangGraph. Four CORE action bodies — ingest, enrich/suppress-seen,
prioritise, and suppress-close — now read off named primitives on the
shared package on every reference target.

It closes the suppression loop on the alert-triage lane on the bound
bodies. The seen-key the enrich body writes is the seen-key the
suppress-close body reads, on every reference target.

## What this wave does not promise

It does not promise the remaining four CORE action bodies — the
response actions the priority ladder reads against — bind in this
wave. The next-wave moves walk the response-action wiring across the
three targets on their own composition steps.

It does not promise the tests-happy / suppress / replay-determinism
beats land in this wave. The replay contract reads against the bound
action bodies once the fan-out has crossed enough of the CORE matrix
to read the same envelope bytes on each reference target — the same
shape the F-WF-01 replay-determinism beat walked on its lane.

It does not promise the cookbook entry or the GDPR data-flow note
land in this wave. Both read against the bound playbook on the same
composition shape the vuln-intake cookbook walked through once the
CORE-WIRE matrix on its lane reached its own closeout.

## Community lane status

The M3 community-ignition launch post — "Open for contributors" —
remains the entry point against five good-first-issues on
`secops-ng-framework`: issues
[#193](https://github.com/secops-ng/secops-ng-framework/issues/193),
[#194](https://github.com/secops-ng/secops-ng-framework/issues/194),
[#195](https://github.com/secops-ng/secops-ng-framework/issues/195),
[#196](https://github.com/secops-ng/secops-ng-framework/issues/196),
and
[#197](https://github.com/secops-ng/secops-ng-framework/issues/197).
A contributor walking in today finds the same five issues open, an
alert-triage CORE-WIRE matrix half-green against the shared primitives
package, an n8n alert-triage README at OTel + AuditTrail mirror parity
with vuln-intake, and four response-action wires plus the
tests/cookbook/data-flow beats open as the substrate the next wave
walks.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-03 CORE-N8N-AUDIT-MIRROR through
  [PR #234](https://github.com/secops-ng/secops-ng-framework/pull/234),
  CORE-WIRE-PAYLOAD through
  [PR #235](https://github.com/secops-ng/secops-ng-framework/pull/235),
  CORE-WIRE-SUPPRESS through
  [PR #236](https://github.com/secops-ng/secops-ng-framework/pull/236),
  CORE-WIRE-PRIORITISE through
  [PR #237](https://github.com/secops-ng/secops-ng-framework/pull/237),
  and CORE-WIRE-SUPPRESS-CLOSE through
  [PR #238](https://github.com/secops-ng/secops-ng-framework/pull/238).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-nine that preceded it, plus the M3
  launch post on
  [PR #32](https://github.com/secops-ng/secops-ng-website/pull/32).
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the F-WF-03 alert-triage CORE matrix
reads twelve of twenty-four cells green against the shared primitives
package on n8n, Temporal, and LangGraph; the n8n alert-triage README
reads at OTel + AuditTrail mirror parity with the vuln-intake README on
its side of the substrate; and the four remaining response-action wires
sit on the next-wave composition steps ahead of the tests-happy /
suppress / replay beats, the cookbook entry, and the GDPR data-flow
note before the F-WF-03 CLOSEOUT lands.

More from the lanes as the response-action wires cross the custodian
gate target by target, the replay-determinism contract closes on the
bound action bodies, and the cookbook entry and data-flow note pick up
the same composition shape on top of the substrate this wave finishes
walking through.
