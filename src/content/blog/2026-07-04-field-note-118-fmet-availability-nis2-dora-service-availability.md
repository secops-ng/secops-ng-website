---
title: "Field note #118 — F-MET-AVAILABILITY ships: NIS2/DORA service-availability KPI triad lands in the G-04 catalogue"
description: "Field note one hundred and eighteen from the SecOps-NG Digital Commons. A NIS2 Art.21(1)(b–c) / DORA Art.11 service-availability and continuity KPI triad now ships in content/metrics/, closing the operator-side continuity measurement loop alongside the four-regime incident-notification latency ring at G-04."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "kpi", "nis2", "dora", "art-21", "art-11", "availability", "rto", "business-continuity", "ocsf", "sovereign-stack", "digital-commons", "field-note-118"]
---

Field note one hundred and eighteen. The four-regime latency ring
tells you the notification clocks. This wave tells you whether the
services those clocks protect are staying up. Three service-
availability and continuity KPIs now sit under `content/metrics/` in
the framework, on the same seven-field shape as the CRA / DORA / NIS2
/ GDPR notification-latency triads that landed earlier today.

## What shipped

**F-MET-AVAILABILITY (PR #639).** Three KPI definitions, each
anchored to a specific NIS2 and/or DORA clause, each with a committed
`.viz.md` reference visualisation:

- **`kpi.service_availability_rate@v1`** — proportion of the
  evaluation window during which an in-scope network-and-information
  system was available to its consumers, computed against the
  operator's declared availability envelope. Anchors the "continued
  availability" limb of NIS2 Art. 21(1)(b) and the ICT
  business-continuity policy under DORA Art. 11. Ships a 99.5%
  operational benchmark aligned with the NIS2 high-impact
  classification criteria (recital 101 identifies significant service
  disruption as a threshold-shaping factor). Neither NIS2 nor DORA
  sets a statutory availability floor, so the YAML flags the 99.5%
  figure as guidance the operator MAY tighten against their own
  criticality tiering.
- **`kpi.rto_compliance_rate@v1`** — proportion of incidents in the
  evaluation window whose measured recovery time was at-or-below the
  operator's declared recovery-time objective for the affected
  service. Anchors the disaster-recovery limb of NIS2 Art. 21(1)(c)
  and the recovery objectives under DORA Art. 11(2)(b). Ships a 95%
  operational benchmark — no statutory RTO-compliance ratio exists in
  either regime, so the figure is flagged as guidance. Sliding P90D
  window on the observation surface.
- **`kpi.service_continuity_test_frequency@v1`** — count of ICT
  business-continuity plan tests exercised per rolling year on the
  in-scope service portfolio. Anchors the periodic-testing limb of
  NIS2 Art. 21(1)(c) and the annual continuity-testing requirement
  under DORA Art. 11(6). The ≥ 1 target *is* statutory here: DORA
  Art. 11(6) requires the ICT business-continuity policy to be tested
  at least once a year. NIS2 Art. 21(1)(c) sets no numeric cadence, so
  an operator holding the DORA floor satisfies both. Sliding P365D
  window.

Files: `content/metrics/service_availability_rate.yaml`,
`content/metrics/rto_compliance_rate.yaml`,
`content/metrics/service_continuity_test_frequency.yaml`, each with a
sibling `.viz.md`.

## Where this sits against the notification-latency ring

Field notes #116 and #117 closed the four-regime incident-
notification latency ring — CRA Art. 14, DORA Art. 17/19, NIS2
Art. 23, GDPR Art. 33/34 — twelve KRI metrics reading how quickly the
operator can tell the outside world when the wall gets hit.

The F-MET-AVAILABILITY wave reads the other axis: whether the
services those regimes exist to protect are staying available in the
first place, and whether the operator's declared recovery discipline
survives contact with production incidents. Notification-latency
tells you the reflex; availability and RTO tell you the posture. Both
axes on the same schema, both bound the same way.

## What the availability triad binds

Each of the three KPIs carries the same four portable bindings the
notification-latency ring already established:

- **A regulatory anchor.** Article and sub-clause named explicitly —
  NIS2 Art. 21(1)(b) for availability, NIS2 Art. 21(1)(c) and DORA
  Art. 11(2)(b) for RTO, NIS2 Art. 21(1)(c) and DORA Art. 11(6) for
  continuity-test frequency. Where the number on the wall is
  operational rather than statutory, the metric says so, and the viz
  says so. Only the ≥ 1 test/year on DORA Art. 11(6) is treated as a
  statutory floor.
- **An external reference.** ISO/IEC 27004 for the measurement
  discipline. Each metric points at the same standard so the KPI
  vocabulary stays coherent across the catalogue.
- **A calculation method.** For availability: an availability envelope
  the operator declares and the health-probe surface reads against.
  For RTO: incident timeline anchored on incident-open and
  service-restored timestamps, evaluated against the declared RTO for
  that service. For continuity-test frequency: exercised-test count
  over a rolling P365D window. Two timestamps or one count each — no
  derived clocks, no synthetic ratios.
- **A sovereign_stack_note.** The health-probe / incident-timeline /
  test-attestation surfaces are EU-hostable endpoints per the
  sovereign-stack bias. No non-EU default endpoints participate in
  the availability, RTO, or continuity-testing observation chain.

## Why operational benchmarks on Art. 21(1)(b) and Art. 21(1)(c)

Neither NIS2 Art. 21(1)(b) nor Art. 21(1)(c) sets a numeric
availability floor or a numeric RTO-compliance ratio. DORA Art. 11
sets a *testing cadence* — at-least-annual, which the third KPI in
this wave inherits verbatim — but leaves the *level* of availability
and the *RTO ratio* to the operator's own risk-based scoping.

The temptation would be to leave these KPIs without a `target.value`
and let the operator fill in the number. That temptation is wrong for
the same reason it was wrong on the Art. 34(1) latency KPI in field
note #117: a KPI without a target is a chart without a red line; it
reads posture but does not warn on it. What the commons ships instead
is an *operational* target the operator can adopt as a working
commitment — 99.5% for availability aligned with the NIS2 high-impact
classification signal, 95% for RTO-compliance as the community
reading of a continuity policy that meets its objectives most of the
time — with the YAML summary and the viz stating in plain language
that the number is a practitioner's baseline rather than a statutory
ceiling. The operator raises it where their service criticality
demands and knows exactly what they raised.

## What an operator does with these tomorrow

For an operator whose telemetry already emits health-probe
observations and incident timelines:

1. Pull the three YAML definitions from `content/metrics/`.
2. Read `calculation_method` on each and confirm the observation
   surface carries the inputs the metric requires — a declared
   availability envelope, incident-open and service-restored
   timestamps with a per-service RTO to compare against, and an
   attestation record for each continuity test exercise. If any of
   those are missing, that gap is the first finding.
3. Emit observations as OCSF Compliance Finding records against the
   class each metric names in `data_source.ocsf`, one observation per
   evaluation window.
4. Point the dashboard tile at the `.viz.md` reference and hold the
   red line where the metric says it goes — at the operational
   benchmark (with the caveat visible) for `service_availability_rate`
   and `rto_compliance_rate`, at the DORA statutory floor for
   `service_continuity_test_frequency`.
5. Read the availability and RTO KPIs *alongside* the four-regime
   notification-latency KRIs. Below-target availability with clean
   notification latency means the operator communicates well about a
   posture drifting downward; clean availability with slipping
   notification latency means the reflex is degrading against a
   healthy posture. Both readings are useful. Neither one on its own
   is.

The observation contract is portable. n8n, Temporal, LangGraph, or an
operator's own runtime — the OCSF shape is the same. G-04 does not
promise a dashboard library; it promises the schema and the anchor.

## Where this sits against G-04

G-04 is the KPI/KRI catalogue maturity goal. It asks that every
metric definition be regulator-anchored, computationally honest
(named timestamps and declared envelopes, no derived clocks), OCSF-
bound, sovereignty-noted, and shipped with a reference visualisation.
The three availability KPIs landing in this wave —
`kpi.service_availability_rate@v1`, `kpi.rto_compliance_rate@v1`, and
`kpi.service_continuity_test_frequency@v1` — all pass that bar.

Read together with the twelve notification-latency KRIs from field
notes #116 and #117, the G-04 catalogue now covers both the
notification reflex and the underlying availability posture for the
essential-entity, important-entity, and financial-entity operators
NIS2 and DORA sit over. The catalogue crosses 110+ definitions with
this wave. The Q4 2026 milestone on four FOUNDATION properties covered
holds.

## Where to look

- `secops-ng-framework/content/metrics/service_availability_rate.yaml`
  and its `.viz.md` sibling — NIS2 Art. 21(1)(b) continued-
  availability, 99.5% operational benchmark.
- `secops-ng-framework/content/metrics/rto_compliance_rate.yaml`
  and its `.viz.md` sibling — NIS2 Art. 21(1)(c) / DORA Art. 11(2)(b)
  recovery-objective compliance, 95% operational benchmark, P90D
  window.
- `secops-ng-framework/content/metrics/service_continuity_test_frequency.yaml`
  and its `.viz.md` sibling — NIS2 Art. 21(1)(c) / DORA Art. 11(6)
  continuity-test cadence, ≥ 1 test per rolling year (DORA statutory
  floor), P365D window.
- Field notes #116 and #117 — the four-regime incident-notification
  latency ring these KPIs read against. Read first if you have not.

Twelve clocks and three levels on the wall. The reflex and the
posture, on the same schema. PR #639 is the wave that opens the
availability lane. The tile is on the shelf.
