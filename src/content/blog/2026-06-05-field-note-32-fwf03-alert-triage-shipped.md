---
title: "Field note #32 — F-WF-03 alert triage is Shipped: the worked example reads end to end across n8n, Temporal, and LangGraph with byte-parity goldens, a same-target replay, a suppression-window dedup, and a cookbook page on top"
description: "Thirty-second field note from the SecOps-NG Digital Commons: F-WF-03 alert triage flips to Shipped on the roadmap. The worked example is now live across n8n, Temporal, and LangGraph with a happy-path golden replay, a deterministic same-target replay, and a suppression-window collision contract under CI; shared primitives — deterministic prioritisation policy, suppression-window helper, typed payload validators, and a DSPy signature confined to free-text fields — sit under content; and a cookbook walkthrough reads the playbook end to end. NIS2 Art. 21(2)(b) is the regulatory anchor the workflow names."
pubDate: 2026-06-05
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-03", "alert-triage", "core-wire", "extend-tests", "extend-docs", "primitives", "cookbook", "golden-tests", "replay-determinism", "suppression-window", "nis2", "compilers", "temporal", "langgraph", "n8n", "digital-commons"]
---

Field note #31 read the F-WF-03 alert-triage CORE-WIRE wave at
twenty-one of twenty-four CORE cells across n8n, Temporal, and
LangGraph: the p1-severe, p2-high, and p3-routine response action
bodies bound against sibling primitives on the shared
`alert_triage.primitives.response` module, with the last response
wire and the EXTEND-tests and EXTEND-docs beats still standing ahead
of the closeout.

This note reads off the closeout itself. The remaining CORE wire
crossed, all three EXTEND-tests beats landed against the worked
example, the cookbook gained an alert-triage walkthrough, and the
roadmap flipped F-WF-03 to **Shipped**. The alert-triage worked
example now reads end to end on every reference compile target the
project ships, against the shared primitives package, with three
independent contracts under CI guarding determinism, dedup, and
cross-target parity.

## What this note reads off `main`

### F-WF-03 alert triage — Shipped on the roadmap

The roadmap status flip lands through commit
[`7070b41`](https://github.com/secops-ng/secops-ng-framework/commit/7070b41):
F-WF-03 reads **Shipped** alongside F-WF-01 vulnerability triage and
F-CR-04 OpenTelemetry instrumentation. Two of the launch-window
workflow features now sit on the substrate as runnable worked
examples on the three reference targets, with shared primitives,
replay-determinism contracts, and operator-facing cookbook pages on
top of each.

The regulatory anchor the F-WF-03 workflow names is
**NIS2 Article 21(2)(b)** — incident handling. The worked example
reads against that anchor end to end: a typed alert lands, the
deterministic prioritisation policy classifies it against asset
context and signal strength, the suppression-window helper dedups
against the canonical seen-key, the response actions branch to the
primitive that matches the priority tier, and the audit-mirror
records the whole pass under the OTel span the F-CR-04 emitter
writes.

### F-WF-03 EXTEND-tests-replay: deterministic same-target replay under CI

The first EXTEND-tests beat lands through
[PR #242](https://github.com/secops-ng/secops-ng-framework/pull/242):
a deterministic same-target replay test runs the alert-triage worked
example twice on the same target with the same alert payload and
reads the second pass byte-identical against the first, on every
push. The shape mirrors the vuln-intake same-target replay the
F-WF-01 closeout put under CI — the same disclosure replayed against
the same target on the same content writes the same case, the same
envelope, and the same artefact bytes.

### F-WF-03 EXTEND-tests-dedup: suppression-window collision contract across all three targets

The second EXTEND-tests beat lands through
[PR #244](https://github.com/secops-ng/secops-ng-framework/pull/244):
a suppression-window collision contract test runs two alerts that
collide on the canonical seen-key against the suppression window,
across n8n, Temporal, and LangGraph, and reads the same
suppression decision on every target — the second alert is closed
against the open one, the audit-mirror records the collision with
the same shape, and the response branch is not taken twice.

The contract reads the same property the suppression-window helper
makes real: the dedup decision is a pure function of the canonical
seen-key, the window bound, and the open-case ledger, and three
independent compile targets executing against the same content
arrive at the same decision.

### F-WF-03 EXTEND-tests-happy: happy-path golden replay across all three targets

The third EXTEND-tests beat lands through
[PR #249](https://github.com/secops-ng/secops-ng-framework/pull/249):
a happy-path golden replay test runs the alert-triage worked example
on each of the three reference targets against the same alert
payload and reads the rendered artefacts byte-identical against
checked-in goldens. Byte-parity across n8n, Temporal, and LangGraph
is now a CI contract for alert triage, the same way it has been for
vuln-intake since F-WF-01 closeout.

The three EXTEND-tests beats together name three independent
contracts under CI: same-target determinism on replay, dedup
parity on suppression-window collisions, and cross-target byte
parity on the happy path. None of the three is a property the
wiring quietly held; each is a test that fails the moment the
property breaks.

### F-WF-03 EXTEND-docs-cookbook: an operator cookbook walks the alert-triage worked example

The operator-facing closeout beat lands through
[PR #248](https://github.com/secops-ng/secops-ng-framework/pull/248):
the cookbook gains an alert-triage walkthrough that takes an
operator from "a typed alert lands" to "an audit-mirror append
reads through on the three reference targets" on a single page, and
the worked-example READMEs across n8n, Temporal, and LangGraph pick
up the polish that lets the three reads of the same playbook line
up as parallel.

The shape an operator walks against today reads: pick a target, read
the worked-example README on that target, follow the cookbook page
through the typed-payload validator, the prioritisation policy, the
suppression-window helper, the response-action branches bound to
sibling primitives on the shared package, the OTel span the emitter
writes, and the AuditTrail append the emitter records — the same
sequence, in the same words, on the same content, against whichever
of the three reference targets the operator already runs.

## What this wave closes

It closes the F-WF-03 alert-triage workflow as a worked example that
reads end to end against the same substrate F-WF-01 vuln-intake
reads against: shared primitives under content, byte-parity goldens
across all three reference compile targets, a same-target
determinism contract under CI, a dedup-collision contract under CI,
and a cookbook walkthrough an operator reads on a single page.

It closes the launch-window workflow stretch onto a second runnable
worked example. A practitioner walking the framework repo today
finds two complete worked examples — vuln-intake and alert-triage —
each readable end to end against whichever of the three reference
targets they already run, against the same shared substrate, with
the same shape of regulatory anchor underneath (NIS2 Art. 21(2)(b)
for incident handling, NIS2 Art. 21(2)(c) and Art. 21(2)(f) for the
vulnerability surface).

It closes the F-WF-03 shared primitives — deterministic
prioritisation policy, suppression-window helper, typed payload
validators, and a DSPy signature confined to free-text enrichment
fields — into a stable package other workflows can compose against.
The DSPy confinement reads against the determinism property
`docs/FOUNDATION.md` names: free-text fields where a model has
something to add are the only surface a model touches; the routing
and dedup decisions on either side are deterministic code.

## What this wave does not promise

It does not promise every NIS2 workflow lands as a worked example
in the next wave. F-WF-03 is the second of the launch-window
workflow set; F-WF-05 has its gap inventory open and its status
flipped In Progress, and the rest read against the same shape this
shipping wave establishes.

It does not promise the alert-triage worked example covers every
operator runbook variant. The CORE wire reads against the eight
action bodies the alert-triage playbook names, and the worked
example renders them faithfully on each of the three compile
targets — but operator-side runbook extensions belong in
contributor playbooks composed on top of the substrate, not in the
shipped worked example itself.

It does not promise the F-WF-03 cookbook page is the final shape
of the operator documentation. The cookbook is a single page that
walks the worked example end to end; deeper operator guides — per
NIS2 article, per asset class, per regulator notification SLA — land
as their own community contributions on top of the substrate the
shipping wave finishes.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against five good-first-issues on
`secops-ng-framework`. The free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng), announced
in field note #31's sibling launch post) remains the contributor
chat. A contributor walking in today finds the same five issues
open, two complete worked examples reading end to end against
three reference targets, three independent CI contracts guarding
each one, and two cookbook pages — vuln-intake and alert-triage —
that walk the playbooks end to end against whichever of the three
reference targets the contributor wants to run against.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-03 EXTEND-tests-replay through
  [PR #242](https://github.com/secops-ng/secops-ng-framework/pull/242),
  EXTEND-tests-dedup through
  [PR #244](https://github.com/secops-ng/secops-ng-framework/pull/244),
  EXTEND-tests-happy through
  [PR #249](https://github.com/secops-ng/secops-ng-framework/pull/249),
  EXTEND-docs-cookbook through
  [PR #248](https://github.com/secops-ng/secops-ng-framework/pull/248),
  and the roadmap status flip through commit
  [`7070b41`](https://github.com/secops-ng/secops-ng-framework/commit/7070b41).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-one that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the F-WF-03 alert-triage
worked example reads end to end against the shared primitives
package on every reference target, three independent CI contracts
guard determinism, dedup, and cross-target byte parity, and the
cookbook page reads the playbook end to end against whichever of
the three reference targets the operator already runs. The next
moves walk the launch-window workflow set onto the same shape —
shared primitives under content, byte-parity goldens across all
three targets, replay-determinism and dedup contracts under CI,
and a cookbook page on top — beat by beat from the gap inventories
F-WF-05 and F-CP-01 and F-CP-04 have opened against `main`.

More from the lanes as the next workflow seam picks up the same
composition shape on top of the substrate this shipping wave
finishes binding.
