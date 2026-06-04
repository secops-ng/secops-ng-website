---
title: "Field note #29 — F-CR-04 OpenTelemetry instrumentation is fully shipped across the three reference compilers, and the F-WF-03 alert-triage lane opens with a gap inventory and a shared CORE-PRIM primitives package"
description: "Twenty-ninth field note from the SecOps-NG Digital Commons: the F-CR-04 OpenTelemetry-instrumentation feature flips to Shipped on the roadmap with the compiler-emitted audit-mirror and OTel emitter wave closed out across n8n, Temporal, and LangGraph, and the F-WF-03 alert-triage lane opens — a gap inventory lands against the workflow, the roadmap flips it to In Progress, and a shared CORE-PRIM primitives package (prioritisation policy, suppression-window helper with canonical seen-key, typed payload validators, a DSPy free-text signature) lands ahead of the cross-target wiring fan-out."
pubDate: 2026-06-04
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cr-04", "f-wf-03", "alert-triage", "core-prim", "otel", "audit-mirror", "compilers", "temporal", "langgraph", "n8n", "roadmap", "digital-commons"]
---

Field note #28 read the F-WF-01 vuln-intake wave a step further onto
the bound `core_body` mechanism, with two of seven CORE steps binding
against named primitives, a same-target replay test under CI, and an
operator cookbook page walking the playbook end to end.

This note reads off the next move on `main`: the F-CR-04
OpenTelemetry-instrumentation feature flips fully to Shipped on the
roadmap, with the compiler-emitted audit-mirror and OTel emitter wave
closed out across the three reference targets — and the F-WF-03
alert-triage lane opens against the same substrate, with a gap
inventory, a roadmap status flip, and a shared primitives package
ahead of the cross-target wiring fan-out.

## What this note reads off `main`

### F-CR-04 CLOSEOUT: OpenTelemetry instrumentation Shipped across n8n, Temporal, and LangGraph

The first move closes the F-CR-04 feature out on the roadmap. Through
[PR #231](https://github.com/secops-ng/secops-ng-framework/pull/231),
the roadmap entry flips from In Progress to Shipped, against the wave
of audit-mirror siblings, OTel emitters, regenerated goldens, and
`workflow_run_id`-placeholder wiring that landed across n8n, Temporal,
and LangGraph in the preceding field notes.

Read against the F-CR-04 arc, the roadmap flip is the bookend on the
property the four-layer architecture has been promising all along:
every artefact the three reference compilers emit is wrapped in OTel
instrumentation governed by a shared attribute-schema helper, every
emit path writes through the same audit-mirror seam onto the same
`AuditTrail.append` shape, and every replay reads the same span tree
and the same envelope bytes against the same content. The closeout
does not add a new mechanism on top of that — it reads the wave off
`main` as the property the four non-negotiables (auditability,
determinism, sovereignty, operability) now stand on rather than the
property they were sketched against.

The compiler-emitted scope the roadmap entry names is exactly the
scope the wave delivered: each reference compiler emits artefacts
already wrapped in OTel instrumentation, and the `workflow_run_id`
placeholder remains the seam the integrator rebinds against at
invocation time. That placeholder is the contract subsequent envelope
fields land against, as their own composition moves on later waves.

### F-WF-03 alert-triage: gap inventory + roadmap status flip

The second move opens the next workflow lane. Through
[PR #232](https://github.com/secops-ng/secops-ng-framework/pull/232),
the F-WF-03 alert-triage roadmap entry gains a gap inventory and
flips from Proposed to In Progress, against the skeleton the earlier
F-WF-03 wave landed across the three reference targets.

Read against the workflow arc, the gap inventory is the same shape
the F-WF-01 vuln-intake arc walked at the equivalent beat: a written
inventory of what the skeleton is missing before the substrate the
playbook reads against — primitives package, content-side composition,
emit-side wiring, replay-determinism contract — can be brought in on
its own composition steps. The inventory names each gap, the order
the gaps land in, and the seam each gap meets the substrate on. The
status flip then reads on the roadmap as the explicit start of the
lane the inventory walks against.

The dependency the F-WF-03 entry carries on F-CR-04 reads through
unchanged from the roadmap: the alert-triage lane consumes the OTel
instrumentation and audit-mirror seam the closeout above leaves on
`main`. The two moves land together because the substrate the
gap-inventory wave reads against is the substrate F-CR-04 has just
closed.

### F-WF-03 CORE-PRIM: shared alert-triage primitives land ahead of the wiring fan-out

The third move binds the first beat of the gap inventory. Through
[PR #233](https://github.com/secops-ng/secops-ng-framework/pull/233),
a shared CORE-PRIM primitives package lands against the alert-triage
content, ahead of the cross-target wiring fan-out the inventory walks
the rest of.

The package the wave lands carries four primitives:

- a **prioritisation policy** that reads off the alert payload onto a
  canonical priority field, against the same policy shape the
  vuln-intake severity composition reads against on its side of the
  substrate;
- a **suppression-window helper** with a canonical seen-key, so a
  replay of the same alert inside the same window reads as suppressed
  against the same key on every reference target;
- a set of **typed payload validators** that read the alert payload
  through Pydantic v2 against the F-CR-01 frozen-`ToolIO` contract,
  so a malformed payload fails the validator on the way in rather
  than fanning out across the wiring downstream;
- a **DSPy free-text signature** that names the free-text-summary
  beat as a declarative LM call the three reference targets compile
  against, rather than a per-target prompt stub.

Read against the F-WF-03 arc this is the equivalent of the F-WF-01
CORE-PRIM wave: the shared primitives package lands ahead of the
emit-side wiring fan-out, the four primitives sit five-deep under
`content/`, and the fan-out across n8n, Temporal, and LangGraph then
reads against the same primitive names on every target. The DSPy
signature in particular is the seam the free-text-summary beat of the
alert-triage playbook reads against, in the same shape the
vuln-intake disclosure-summary beat reads against on its lane.

The cross-target wiring fan-out the inventory names is now in flight
behind these primitives, the same way the F-WF-01 CORE-MECH-EMIT
fan-out walked the three targets against the `core_body` mechanism
once the vuln-intake primitives package had landed.

## What this wave closes

It closes F-CR-04 on the roadmap. The four-layer architecture's
OTel-instrumentation property is now Shipped on every reference
target, against the wave of audit-mirror siblings and OTel emitters
the preceding field notes walked through.

It closes the F-WF-03 alert-triage lane open on the roadmap.
Proposed flips to In Progress against a gap inventory that names the
order the substrate beats land in, and the lane reads against the
F-CR-04 substrate the wave above closes.

It closes the first composition beat of the alert-triage gap
inventory. Four shared primitives land five-deep under `content/`,
ahead of the cross-target wiring fan-out that walks the inventory's
remaining beats.

## What this wave does not promise

It does not promise the F-WF-03 cross-target wiring lands in this
wave. The fan-out across n8n, Temporal, and LangGraph reads against
the CORE-PRIM package on its own composition steps as the next-wave
moves walk each target.

It does not promise the alert-triage worked examples regenerate
against the bound primitives yet. The regenerate beat lands once the
wiring fan-out has crossed enough targets to read the goldens
byte-identical against the shared package — the same shape the
F-WF-01 worked-example regeneration walked against on its lane.

It does not promise the audit envelope grows beyond the compile-time
`workflow_run_id` placeholder on the alert-triage lane any more than
it does on the vuln-intake lane. The envelope shape the three
targets share remains the contract the integrator rebinds against at
invocation time, and subsequent envelope fields land as their own
composition steps on later waves.

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
OTel-instrumentation property Shipped across the three reference
targets, an alert-triage gap inventory naming the beats the next
wave walks against, and a shared CORE-PRIM primitives package ready
for the wiring fan-out to read against on whichever of the three
targets the contributor wants to walk first.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CR-04 closeout through
  [PR #231](https://github.com/secops-ng/secops-ng-framework/pull/231),
  F-WF-03 gap inventory + status flip through
  [PR #232](https://github.com/secops-ng/secops-ng-framework/pull/232),
  and F-WF-03 CORE-PRIM shared primitives through
  [PR #233](https://github.com/secops-ng/secops-ng-framework/pull/233).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-eight that preceded it, plus the M3
  launch post on
  [PR #32](https://github.com/secops-ng/secops-ng-website/pull/32).
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the F-CR-04 OpenTelemetry-
instrumentation property reads Shipped on the roadmap against the
three reference compilers, the F-WF-03 alert-triage lane reads
In Progress against a written gap inventory, and the shared
CORE-PRIM primitives package sits five-deep under `content/` ready
for the cross-target wiring fan-out to read against. The next-wave
moves walk the wiring fan-out across n8n, Temporal, and LangGraph
against the bound primitives, regenerate the alert-triage worked
examples against the same package, and continue the F-WF-03 arc
through its EXTEND beats target by target.

More from the lanes as the alert-triage wiring crosses the custodian
gate target by target, the worked examples regenerate against the
shared primitives, and the next gap-inventory beat picks up the
same composition shape on top of the substrate this wave finishes
opening.
