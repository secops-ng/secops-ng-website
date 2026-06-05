---
title: "Field note #31 — F-WF-03 alert-triage CORE-WIRE wave clears its response-action stretch with p1 / p2 / p3 wired across n8n, Temporal, and LangGraph (fifteen of twenty-four CORE cells green)"
description: "Thirty-first field note from the SecOps-NG Digital Commons: the F-WF-03 alert-triage CORE-WIRE wave moves from the midpoint to fifteen of twenty-four CORE cells across n8n, Temporal, and LangGraph — the p1-severe, p2-high, and p3-routine response action bodies are now wired against sibling primitives on the shared package (escalation_route, notify_on_call, route_to_review_queue), with one response wire (p4) and the tests-happy / tests-suppress / tests-replay beats plus the cookbook walkthrough and the GDPR data-flow note still standing ahead of the F-WF-03 closeout."
pubDate: 2026-06-05
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-03", "alert-triage", "core-wire", "response-actions", "primitives", "compilers", "temporal", "langgraph", "n8n", "digital-commons"]
---

Field note #30 read the F-WF-03 alert-triage CORE-WIRE wave at its
midpoint: four of eight CORE action bodies bound against the shared
primitives package on every reference target, twelve of twenty-four
CORE cells green across n8n, Temporal, and LangGraph, and the n8n
alert-triage README at OTel + AuditTrail mirror parity with the
vuln-intake README on its side of the substrate.

This note reads off the next move on `main`: the response-action
stretch of the CORE-WIRE wave has opened and three of its four cells
have crossed. The p1-severe, p2-high, and p3-routine response action
bodies are now wired against sibling primitives on the shared
`alert_triage.primitives.response` module on every reference target.
Fifteen of twenty-four CORE cells now read green on the matrix the gap
inventory walks against.

## What this note reads off `main`

### F-WF-03 CORE-WIRE-RESPONSE-P1: page-and-escalate body binds to escalation_route across all three targets

The first move opens the response-action stretch. Through
[PR #239](https://github.com/secops-ng/secops-ng-framework/pull/239),
the "response p1 severe — page and escalate" CORE action body is
wired to the `alert_triage.primitives.response.escalation_route`
primitive across n8n, Temporal, and LangGraph.

The routing decision reads as deterministic code rather than as a
model call on every reference target, against the determinism
property `docs/FOUNDATION.md` names. The paging-tier choice — primary
on-call against an executive page on a crown-jewel asset — the pinned
downstream incident-management playbook handle, and the
regulator-notification SLA gate are all pure functions of the
upstream priority and asset context the prioritisation primitive
emits. The same severe alert against the same asset reads the same
escalation directive on n8n, Temporal, and LangGraph alike, and a
replay against a changed exposure flag reads as a visibly different
verdict on every target through the same inputs digest.

### F-WF-03 CORE-WIRE-RESPONSE-P2: notify-on-call body binds to notify_on_call across all three targets

The second move walks the p2-high response onto its sibling
primitive. Through
[PR #240](https://github.com/secops-ng/secops-ng-framework/pull/240),
the "response p2 high — notify on-call" CORE action body is wired to
the `notify_on_call` primitive across all three reference targets.

The p2 primitive lands as a sibling shape to the p1 escalation
primitive — same upstream input contract, same frozen output
discipline, p2 routing policy in the body. Each compiler now reads
the notify body off the same named primitive, and the
notification-required flag and the pinned incident-management
playbook handle land on the action body on every reference target
against the same input shape. The same p2 alert on the same asset
reads the same notification directive on n8n, Temporal, and
LangGraph alike — and the bind reads as code on every target rather
than as three independent translations of the on-call policy.

### F-WF-03 CORE-WIRE-RESPONSE-P3: queue-for-review body binds to route_to_review_queue across all three targets

The third move closes the routine-priority response. Through
[PR #241](https://github.com/secops-ng/secops-ng-framework/pull/241),
the "response p3 routine — queue for review" CORE action body is
wired to the `route_to_review_queue` primitive across all three
reference targets.

The p3 primitive sits as a sibling to the p1 and p2 primitives on
the same response module. A non-crown-jewel routine alert reads
through the tier queue against a standard review SLA on every
reference target; a crown-jewel routine alert reads through the
primary on-call tier against a best-effort review, non-paging, on
every reference target; and a regulated-data flag opens the same
notification SLA clock the p1 and p2 primitives open on their
priority bands. Each compiler now reads the queue-for-review body
off the same named policy on the shared primitives package rather
than as three target-specific implementations of the review-tier
ladder.

## Where the wave stands

Seven of eight CORE action bodies on the alert-triage playbook are
now bound against the shared primitives package on every reference
target. Fifteen of twenty-four CORE cells read green on the matrix
the gap inventory walks against: ingest, enrich (suppress seen-key),
classify-and-prioritise, suppress-and-close, response-p1, response-p2,
and response-p3 — seven bound bodies across n8n, Temporal, and
LangGraph.

One CORE action body remains in the wire wave: the p4-noise response
action that closes the response stretch against its noise-routing
sibling on the response module. Ahead of the F-WF-03 closeout, the
tests-happy / tests-suppress / tests-replay beats still stand, the
cookbook walkthrough still stands, and the GDPR data-flow note still
stands.

## What this wave closes

It closes three of the four response-action wires in the CORE matrix.
The p1-severe escalation, the p2-high on-call notification, and the
p3-routine review-queue routing now read off named primitives on the
shared `alert_triage.primitives.response` module on every reference
target rather than as per-target translations of the response policy.

It closes the determinism property the foundation document names on
the response action bodies across the bound priority bands. The
routing verdicts read as pure functions of the upstream
prioritisation outputs and the asset context on every reference
target — replay against the same inputs reads the same directive,
and replay against a changed input reads a visibly different one
through the same inputs digest, on each of n8n, Temporal, and
LangGraph.

It closes the response-action stretch down to one remaining cell.
The next-wave move on the wiring matrix is the p4-noise response,
the last of the eight CORE action bodies on the alert-triage
playbook.

## What this wave does not promise

It does not promise the p4 response wire lands in this wave. The
noise-routing sibling on the response module reads against its own
composition step on the next-wave move.

It does not promise the tests-happy / tests-suppress / tests-replay
beats land in this wave. The replay-determinism contract reads
against the bound action bodies once the full CORE matrix on the
alert-triage lane has crossed — the same shape the F-WF-01
replay-determinism beat walked on its lane once that matrix closed.

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
alert-triage CORE-WIRE matrix at fifteen of twenty-four cells green
against the shared primitives package, an n8n alert-triage README at
OTel + AuditTrail mirror parity with vuln-intake, and one response
wire plus the tests / cookbook / data-flow beats open as the
substrate the next moves walk.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-03 CORE-WIRE-RESPONSE-P1 through
  [PR #239](https://github.com/secops-ng/secops-ng-framework/pull/239),
  CORE-WIRE-RESPONSE-P2 through
  [PR #240](https://github.com/secops-ng/secops-ng-framework/pull/240),
  and CORE-WIRE-RESPONSE-P3 through
  [PR #241](https://github.com/secops-ng/secops-ng-framework/pull/241).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty that preceded it, plus the M3 launch
  post on
  [PR #32](https://github.com/secops-ng/secops-ng-website/pull/32).
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the F-WF-03 alert-triage CORE
matrix reads fifteen of twenty-four cells green against the shared
primitives package on n8n, Temporal, and LangGraph; the p1-severe,
p2-high, and p3-routine response actions all read off sibling
primitives on the same `alert_triage.primitives.response` module on
every reference target; and the p4-noise response wire, the
tests-happy / tests-suppress / tests-replay beats, the cookbook
entry, and the GDPR data-flow note sit as the substrate ahead of
the F-WF-03 closeout.

More from the lanes as the p4 response wire crosses the custodian
gate, the replay-determinism contract closes on the bound action
bodies, and the cookbook entry and data-flow note pick up the same
composition shape on top of the substrate this wave finishes
walking through.
