---
title: "Field note #101 — CRA Article 14 SRP notification lands as a three-target playbook, and a full trilogy closes in one window (framework PRs #583-#585)"
description: "The Cyber Resilience Act Article 14 single-reporting-platform (SRP) obligation now has a portable, deterministic CACAO v2 implementation on the SecOps-NG framework. SKELETON, CORE, and EXTEND-DOCS ship in the same window: the cra_srp_notify playbook scaffold, three-target durable-timer emitters across n8n, Temporal, and LangGraph, and the operator-facing cookbook walkthrough for the 24-hour / 72-hour / 14-day CRA cascade. G-01 count moves. G-02 mapping stays closed at 27/27. G-03 gains one more three-target-parity member."
pubDate: 2026-07-02
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-01", "g-02", "g-03", "cra", "cra-article-14", "srp", "enisa", "cert-cc", "cra-srp-notify", "durable-timer", "cookbook", "three-target-parity", "cacao", "n8n", "temporal", "langgraph", "digital-commons", "field-note-101"]
---

Field note one hundred and one, and the first entry after the mile
marker keeps the same shape as the ninety-nine before it: what
merged, what it means, what an operator can do with it, what stays
open.

Three PRs against
[`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
close a full SKELETON → CORE → EXTEND-DOCS trilogy in the same
window against a single new playbook,
`playbook.cra_srp_notify@v1` — the Cyber Resilience Act Article 14
single-reporting-platform (SRP) notification cascade. The obligation
is time-bound and unambiguous: manufacturers of products with digital
elements notify the coordinating CSIRT and ENISA on a 24-hour early
warning, a 72-hour follow-up, and a 14-day final report when an
actively exploited vulnerability or a severe incident having an
impact on the security of the product is detected. The playbook
lands that cascade as durable, deterministic, three-target-portable
CACAO source. [PR #583](https://github.com/secops-ng/secops-ng-framework/pull/583)
ships the scaffold. [PR #584](https://github.com/secops-ng/secops-ng-framework/pull/584)
lands the three-target CORE with durable-timer primitives on all
three reference emitters. [PR #585](https://github.com/secops-ng/secops-ng-framework/pull/585)
ships the operator-facing walkthrough. One trilogy, one window.

## What landed

Three PRs against the framework, all merged to `main` in the same
window.

### F-WF-CRA-SRP SKELETON — cra_srp_notify scaffold (PR #583)

[PR #583](https://github.com/secops-ng/secops-ng-framework/pull/583)
introduces `playbook.cra_srp_notify@v1` at the SKELETON milestone.
The CACAO v2 source lands under
`content/playbooks/cra_srp_notify/`, with the shipped step topology,
the outbound mappings overlay, and the placeholder emitters that
subsequent milestones replace with deterministic primitives.

The regulatory shape the SKELETON declares up front. CRA Article
14 sits on manufacturers of products with digital elements and
prescribes three notification obligations against the same triggering
event:

- **Early-warning notification** — no later than 24 hours after the
  manufacturer becomes aware of the actively exploited vulnerability
  or the severe incident, an early warning goes to the coordinating
  CSIRT designated under the CRA and, in parallel, to ENISA on the
  single-reporting-platform surface.
- **Vulnerability / incident notification** — no later than 72 hours
  after the same awareness point, a fuller notification lands on
  the SRP. This carries the corrective or mitigating measures
  taken, the nature of the exploitation, and any indicators the
  manufacturer can share without compromising an ongoing
  investigation.
- **Final report** — no later than 14 days after a corrective or
  mitigating measure is available (for exploited vulnerabilities)
  or one month after the incident notification (for severe incidents),
  the final report closes the artifact chain with root-cause
  analysis, corrective measures shipped, and cross-border impact
  reads where they apply.

The SKELETON declares the mappings overlay at
`content/playbooks/cra_srp_notify/mappings.yaml`, anchoring the
playbook to the CRA regime file at
`content/mappings/cra/article-14-and-annex-i.yaml`. That mapping is
what closes the CRA orphan for this playbook in nightly CI — the
overlay resolves against the shipped regime file, and the
mapping-coverage check treats the playbook as fully anchored.

### F-WF-CRA-SRP CORE — three-target durable-timer emitters (PR #584)

[PR #584](https://github.com/secops-ng/secops-ng-framework/pull/584)
promotes `cra_srp_notify` from SKELETON to CORE. The single defining
property of this milestone: **durable timers**. The 24-hour, 72-hour,
and 14-day windows the regulation prescribes are not sleep-loop
timers, not cron ticks off the wall clock, not application-level
countdowns that vanish when a worker restarts. They are durable
timer primitives on each of the three reference targets — the same
primitive the underlying orchestrator uses for its own long-running
sagas — and they carry the deterministic-restart property the
framework FOUNDATION lane guarantees.

Concretely, the three reference emitters under
`examples/n8n/cra_srp_notify/`, `examples/temporal/cra_srp_notify/`,
and `examples/langgraph/cra_srp_notify/` all land in the same PR:

- **Temporal reference** — the durable timer is `workflow.sleep()`
  on a Temporal workflow, checkpointed to the workflow history.
  If the worker restarts, if the cluster fails over, if the process
  is killed and respawned twenty times inside the 72-hour window,
  the timer fires on schedule. The Temporal example is the shape
  the property is named after.
- **n8n reference** — the durable timer is n8n's Wait node with
  the resume-on-webhook plus scheduled-resume pattern, with the
  execution state persisted to the n8n database. Restart survival
  is a property of the n8n execution store; the emitter declares
  the pattern that keeps the timer alive across n8n process
  restarts.
- **LangGraph reference** — the durable timer is a LangGraph
  interrupt with a scheduled-resume checkpoint against the
  configured checkpointer (SQLite, Postgres, or Redis). The
  emitter names the checkpointer contract the operator must
  satisfy; where the operator runs LangGraph in-memory-only, the
  timer degrades and the emitter documents the degradation
  explicitly.

The byte-parity goldens under `tests/goldens/cra_srp_notify/` verify
that all three emitters carry the same shipped-step topology, the
same durable-timer step markers, and the same downstream envelope
shape onto the operator's compliance surface. One canonical CACAO
source. Three reference targets. Byte-parity across the ring.

The mappings overlay lands the CRA anchors explicitly. CRA Article
14(1) — the early-warning obligation on manufacturers — is the
primary anchor. CRA Article 14(2) and 14(3) — the follow-on
notification and final report — anchor onto the same overlay.
Annex I of the CRA (essential cybersecurity requirements and
vulnerability handling) reads as a companion where the exploited
vulnerability drives the notification. NIS2 Article 23 (incident
reporting) reads on the same shape where the operator is themselves
in scope of NIS2 as an essential or important entity — the
notification obligations are distinct, but the same underlying
incident data lands on both regime surfaces where both apply.

### F-WF-CRA-SRP EXTEND-DOCS — cra_srp_notify cookbook walkthrough (PR #585)

[PR #585](https://github.com/secops-ng/secops-ng-framework/pull/585)
adds `docs/cookbook/cra_srp_notify.md`, the operator-facing walkthrough
that lands alongside the CORE milestone in the same window. The
entry documents the notification cascade end to end: the awareness
event that starts the 24-hour clock, the durable-timer primitives
that carry the three windows without wall-clock drift, the SRP
submission surface the notification lands on, the artifact chain
the final report closes, and the audit trail a coordinating CSIRT
or an ENISA reviewer can walk back to the shipped mapping.

The walkthrough is explicit about the ownership boundary — the
playbook drives the notification cascade against the SRP surface
the operator has already registered against; the SRP itself is an
ENISA-hosted platform, not a runtime shipped by the framework.
The playbook does not host, mirror, or proxy the SRP. It formats
the CRA-required fields against the SRP submission schema, drives
the durable timers that gate the three submission windows, and
lands audit-evident artifacts on the operator's compliance surface
for each submission.

## Why this reads against G-01, G-02, and G-03

G-01 on the published roadmap is the catalogue-coverage goal. This
wave lands a new shipped playbook (cra_srp_notify) with its
cookbook walkthrough in the same window — the playbook count moves,
and it moves with its walkthrough already in the operator adoption
library. That is the shape the catalogue-coverage goal was written
around: playbooks land with their walkthroughs, not months apart.

G-02 on the published roadmap is the mapping-coverage ring, closed
at 27/27 in field note #99. The cra_srp_notify overlay lands as
part of the SKELETON PR and resolves against the shipped CRA regime
file in nightly CI on the same day. The ring stays closed, with
one more playbook riding under its CRA anchor.

G-03 on the published roadmap is three-target byte-parity across
n8n, Temporal, and LangGraph. PR #584 lands byte-parity goldens
for cra_srp_notify across all three reference emitters in one PR.
The three-target parity ring gains one more member on the same
milestone the durable-timer primitives land.

## The durable-timer property, said plainly

The CRA cascade is a regulation about deadlines. 24 hours. 72 hours.
14 days. Those deadlines do not care whether the orchestrator
running the notification workflow rebooted, whether a worker
crashed, whether the operator's process supervisor decided to
restart the fleet at 3am the night before the follow-up window
closes. The regulation still expects the notification to land.

The durable-timer primitive is the deterministic property the
framework FOUNDATION lane requires against exactly this shape of
obligation. A timer that lives inside the workflow's own persisted
state — Temporal's workflow history, n8n's execution database,
LangGraph's checkpointer — survives a restart because the
orchestrator replays the workflow state on recovery and knows the
timer has not yet fired. A timer that lives in application memory,
or on the wall clock via `sleep()`, or as an in-memory task in a
process supervisor, silently disappears on restart and the
notification window silently slips. The CORE milestone rules out
the second shape and lands the first shape across all three
reference targets in one PR.

That is the property an operator relying on this playbook against
a CRA-scoped product estate should be able to read off the
reference emitters directly: durable timer, deterministic replay,
audit-evident window boundaries on each submission.

## The community-facing shape

Every entry in this wave carries the same property the catalogue
has carried from the beginning. The cra_srp_notify playbook does
not assume a specific SRP-submission-surface implementation — it
declares the CRA-required fields, formats them against the ENISA
SRP schema, and hands off to the operator's registered SRP
credentials. It does not assume a specific orchestrator — it
compiles through all three reference targets from one canonical
CACAO source. It does not assume a specific compliance store —
it declares an audit-evident-artifact interface and lands the
submission trail onto whatever compliance surface the operator
has bound.

Bring the SRP registration; bring the orchestrator; bring the
compliance store. The CACAO source declares the shape, and the
three reference emitters compile the same behaviour into the
target that already lives in the operator's stack.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any
operational artifact. The cra_srp_notify trilogy lands one new
shipped playbook, its byte-parity three-target emitters, and its
cookbook walkthrough on the same shape as every playbook the
framework already ships. No runtime is introduced. No hosted SRP
proxy is introduced. No cloud-lock-in dependency is introduced.
The three reference compile targets remain three of three — n8n,
Temporal, and LangGraph — and an EU operator running any of the
three picks up the compiled example without adopting a runtime
the project owns.

The regulatory read matters here on its own merits. The CRA sits
on manufacturers of products with digital elements, and its
Article 14 obligations are enforceable on a schedule that does
not wait for a market cycle. A playbook that lands the cascade
in the open, under a permissive content licence, and compiles
into orchestrators the operator already runs, is exactly the
shape a Digital Commons should carry against a regulation with
this footprint.

## Honest framing on what stays open

This wave lands a full trilogy on a single playbook; gaps remain.
Honest open beats:

- **The SRP submission surface is operator-owned.** The playbook
  formats the CRA-required fields against the ENISA SRP schema
  and lands the submission via the operator's registered SRP
  credentials. Where the operator has not yet registered against
  the SRP, or where the coordinating CSIRT assignment has not been
  confirmed, the playbook still lands the durable timers and the
  formatted artifact — but the submission handoff itself will not
  succeed until the operator's SRP registration is in place.
- **Awareness-event upstream is operator-defined.** The 24-hour
  clock starts at the "becomes aware" event. What constitutes
  awareness under CRA Article 14 is a legal-and-operational
  judgement the operator makes on their own detection surface;
  the playbook consumes an awareness-event envelope from the
  operator's detection or vulnerability-management surface and
  does not attempt to define the semantic threshold itself.
- **Byte-parity goldens are a snapshot, not a proof.** The ring
  verifies that the three reference emitters compile the same
  canonical source into behaviourally equivalent outputs on the
  shipped tests. It does not prove that every possible operator
  extension compiles the same across all three targets — the
  ring is a starting point on the parity property, not the end
  state.
- **The CRA regime file is a working artifact.** The mapping at
  `content/mappings/cra/article-14-and-annex-i.yaml` is anchored
  on the published CRA text and revised as the delegated acts
  and technical implementation details land. Where the delegated
  acts introduce fields or windows that are not present in the
  current mapping, follow-on PRs will land the updates and the
  changelog will name them explicitly.
- **G-03 count is not yet 27/27.** cra_srp_notify joins the
  three-target parity ring in this window; other shipped playbooks
  close the ring on their own CORE waves. Honest framing on the
  G-03 lane holds through the closure.

The accurate claim on this wave: the CRA Article 14 SRP notification
cascade lands as a shipped playbook with its scaffold, its
three-target CORE with durable-timer primitives, and its
operator-facing cookbook walkthrough all merged to framework
`main` in the same window. G-01 catalogue coverage moves by one
playbook with its walkthrough already present. G-02 mapping
coverage stays closed at 27/27. G-03 three-target parity gains
one more member.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #583](https://github.com/secops-ng/secops-ng-framework/pull/583),
  [PR #584](https://github.com/secops-ng/secops-ng-framework/pull/584),
  and [PR #585](https://github.com/secops-ng/secops-ng-framework/pull/585).
  All three merged to `main`. Playbook source lives under
  [`content/playbooks/cra_srp_notify/`](https://github.com/secops-ng/secops-ng-framework/tree/main/content/playbooks/cra_srp_notify);
  three-target reference emitters live under
  [`examples/n8n/cra_srp_notify/`](https://github.com/secops-ng/secops-ng-framework/tree/main/examples/n8n/cra_srp_notify),
  [`examples/temporal/cra_srp_notify/`](https://github.com/secops-ng/secops-ng-framework/tree/main/examples/temporal/cra_srp_notify),
  and [`examples/langgraph/cra_srp_notify/`](https://github.com/secops-ng/secops-ng-framework/tree/main/examples/langgraph/cra_srp_notify);
  byte-parity goldens live under
  [`tests/goldens/cra_srp_notify/`](https://github.com/secops-ng/secops-ng-framework/tree/main/tests/goldens/cra_srp_notify);
  cookbook walkthrough lives at
  [`docs/cookbook/cra_srp_notify.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/docs/cookbook/cra_srp_notify.md).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the one hundred that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

A regulation with a 24-hour clock, a 72-hour clock, and a 14-day
clock now has a portable, deterministic, three-target-parallel
playbook shipping in the open on a permissive content licence.
The commons carries the shape. The operator picks the target.
The timers hold.
