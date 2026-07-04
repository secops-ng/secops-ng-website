---
title: "Field note #121 — F-MET-AVAILABILITY EXTEND ships: NIS2/DORA residual-risk KRI triad closes the availability sextet (G-04)"
description: "Field note one hundred and twenty-one from the SecOps-NG Digital Commons. The residual-risk counterpart to the F-MET-AVAILABILITY KPI triad now ships in content/metrics/ — three KRIs on NIS2 Art.21(2)(e) and DORA Art.8 that read the exposure the operator's continuity posture accumulates before the aggregate KPIs slip. Availability, RTO, and continuity-test lanes covered on both the performance and the residual-risk axes."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "kri", "nis2", "dora", "art-21", "art-8", "availability", "rto", "business-continuity", "residual-risk", "ocsf", "sovereign-stack", "digital-commons", "field-note-121"]
---

Field note one hundred and twenty-one. Three days ago the KPI side of
F-MET-AVAILABILITY landed — availability rate, RTO-compliance rate,
continuity-test frequency, the performance view on NIS2 Art. 21(1)(b)
and Art. 21(1)(c) and DORA Art. 11. This wave lands the counterpart:
the residual-risk view. Three KRIs on NIS2 Art. 21(2)(e) and DORA
Art. 8, one per lane, reading the exposure the continuity posture
accumulates *before* the aggregate KPI dips below its benchmark.

## What shipped

**F-MET-AVAILABILITY EXTEND (PR #640).** Three KRI definitions on the
same seven-field shape, each with a committed `.viz.md` reference
visualisation:

- **`kri.availability_below_target_exposure@v1`** — count of hours in
  the evaluation window during which the in-scope service dropped
  below its declared availability target. Where the KPI reads the
  aggregate availability *rate*, this KRI reads the *hours of
  exposure* the operator's continuity posture accumulated even when
  the aggregate rate still looks acceptable. Thresholds: warn > 1h,
  high > 4h, breach > 8h. Anchors NIS2 Art. 21(2)(e) (business
  continuity, backup management, crisis management) and the
  ICT-supported business-function-continuity limb of DORA Art. 8
  (ICT risk-management framework).
- **`kri.rto_overrun_exposure_count@v1`** — count of production
  incidents in a trailing P90D window whose observed recovery time
  exceeded the declared RTO. Where the KPI reads the *proportion* of
  incidents that met their RTO, this KRI reads the *count* of
  incidents that breached it. Thresholds: warn ≥ 1, high ≥ 3,
  breach ≥ 5. Same regulatory anchors — NIS2 Art. 21(2)(e) / DORA
  Art. 8. Sibling to `kri.restore_drill_rto_overrun@v1` which reads
  the drill-side residual risk; this one reads the production-
  incident side.
- **`kri.continuity_test_overdue@v1`** — count of in-scope service
  portfolios whose most-recent ICT business-continuity test lies
  outside the operator-configured recurrence window. Default
  recurrence is 12 months, aligned with the DORA Art. 11(6) annual
  cadence floor; operators MAY tighten for essential-service or
  financial-sector ICT tiers via the operator-configured recurrence
  parameter. NIS2 Art. 21(2)(e) / DORA Art. 8 anchors.

Files: `content/metrics/availability_below_target_exposure.yaml`,
`content/metrics/rto_overrun_exposure_count.yaml`,
`content/metrics/continuity_test_overdue.yaml`, each with a sibling
`.viz.md`.

## Why the residual-risk axis was missing something

The KPI triad in field note #118 reads posture on the operational
benchmarks — 99.5% availability, 95% RTO-compliance, ≥ 1 continuity
test per year. That view is honest but it is *aggregate*. An operator
can hold 99.5% availability across a quarter and still have carried
six hours of below-target exposure last Tuesday afternoon that the
continuity register wants to know about. An operator can hold 95%
RTO-compliance and still have breached the RTO on four production
incidents last quarter — the four that mattered. The aggregate rate
smooths the shape of the risk.

NIS2 splits this deliberately. Art. 21(1) names the *what* an
essential entity must ensure — availability, continuity, disaster
recovery. Art. 21(2)(e) names the *risk management measures* that
back those obligations up — business continuity, backup management,
crisis management. DORA does the same shape across Art. 11 (the
continuity policy) and Art. 8 (the ICT risk-management framework
that identifies the business functions the continuity policy covers).
The KPI triad reads the Art. 21(1) / Art. 11 obligation surface. The
KRI triad reads the Art. 21(2)(e) / Art. 8 risk-register surface. Both
axes need instrumentation; the commons catalogue now carries both.

## What the KRI triad binds

Same four portable bindings the KPI triad and the four-regime
notification-latency ring carry:

- **A regulatory anchor.** NIS2 Art. 21(2)(e) named explicitly on
  every one of the three metrics — the business-continuity /
  backup-management / crisis-management measures limb. DORA Art. 8
  named alongside — the ICT risk-management framework limb that
  identifies the business functions the continuity posture protects.
  The KRIs read residual risk against the *measures* obligation; the
  KPIs read performance against the *outcome* obligation. Two clauses,
  one continuity posture, both instrumented.
- **An external reference.** ISO/IEC 27004 for the measurement
  discipline — the same reference the KPI triad points at. The
  vocabulary stays coherent across the sextet.
- **A calculation method.** Below-target exposure: sum of hours the
  health-probe surface reported the service below its declared
  availability envelope. RTO overrun count: count of incident timelines
  whose (service-restored − incident-open) delta exceeded the declared
  RTO for that service in the trailing P90D window. Continuity-test
  overdue: count of portfolios whose most-recent attested test
  timestamp is older than the recurrence window. Named timestamps and
  declared envelopes; no synthetic ratios; no derived clocks.
- **A sovereign_stack_note.** The health-probe, incident-timeline, and
  test-attestation surfaces are EU-hostable endpoints per the
  sovereign-stack bias. No non-EU default endpoints participate in the
  observation chain.

## Reading the KPIs and KRIs together

The point of the residual-risk axis is not to duplicate the KPI
reading — it is to catch the exposure the aggregate rate hides. Four
combinations the operator watches for:

- Clean KPI, clean KRI. Posture holding, risk register empty. Read the
  notification-latency ring next.
- Clean KPI, hot KRI. Aggregate looks fine but exposure is
  accumulating — hours-below-target creeping up, RTO breaches piling
  in the P90D window, a portfolio drifting past its test cadence.
  This is the reading the KRI axis exists to produce. Act before the
  KPI drops.
- Slipping KPI, clean KRI. Rare and worth investigating —
  usually means the aggregate window covers a period of degraded
  observation rather than a genuine posture drop.
- Slipping KPI, hot KRI. Posture is failing and the risk register
  already showed it. The KRIs will have been warning for weeks; the
  KPI drop is the confirmation the incident review already had.

The KRIs do not replace the KPIs. They read the shape of the risk the
KPIs average over.

## What an operator does with these tomorrow

For an operator whose telemetry already emits the health-probe
observations, incident timelines, and continuity-test attestations the
KPI triad reads:

1. Pull the three KRI YAML definitions from `content/metrics/`.
2. Confirm the observation surface carries the inputs — the same
   declared availability envelope, the same incident open / restored
   timestamps with a per-service RTO, and the same continuity-test
   attestation record. If the KPI triad already reads these, the KRI
   triad reads them too; no new observation contract.
3. Emit residual-risk observations as OCSF Compliance Finding records
   against the class each metric names in `data_source.ocsf`, one
   observation per evaluation window.
4. Point the dashboard tile at the `.viz.md` reference. Hold the red
   lines where the KRI YAML says: hours-below-target at warn > 1h /
   high > 4h / breach > 8h; RTO-overrun count at warn ≥ 1 / high ≥ 3
   / breach ≥ 5; continuity-test overdue at warn ≥ 1 / high ≥ 2 /
   breach at the higher band the metric names.
5. Read the KRI tile next to the KPI tile. If they diverge — clean
   KPI, hot KRI — that is the reading the residual-risk axis exists
   to surface.

The observation contract stays portable. n8n, Temporal, LangGraph, or
an operator's own runtime — the OCSF shape is the same.

## Where this sits against G-04

G-04 is the KPI/KRI catalogue maturity goal — regulator-anchored,
computationally honest, OCSF-bound, sovereignty-noted, reference viz
shipped. The three KRIs landing in this wave all pass that bar. Read
together with the KPI triad from field note #118, the F-MET-
AVAILABILITY sextet is complete: the performance view on
Art. 21(1)(b–c) / Art. 11 and the residual-risk view on Art. 21(2)(e)
/ Art. 8, both on the same schema, both bound the same way.

The G-04 catalogue crosses one hundred and ten definitions with this
wave. Four FOUNDATION properties covered. The Q4 2026 milestone holds.

## Where to look

- `secops-ng-framework/content/metrics/availability_below_target_exposure.yaml`
  and its `.viz.md` sibling — NIS2 Art. 21(2)(e) / DORA Art. 8
  below-target hours exposure, warn > 1h / high > 4h / breach > 8h.
- `secops-ng-framework/content/metrics/rto_overrun_exposure_count.yaml`
  and its `.viz.md` sibling — NIS2 Art. 21(2)(e) / DORA Art. 8
  production-incident RTO-overrun count, P90D window, warn ≥ 1 /
  high ≥ 3 / breach ≥ 5.
- `secops-ng-framework/content/metrics/continuity_test_overdue.yaml`
  and its `.viz.md` sibling — NIS2 Art. 21(2)(e) / DORA Art. 8
  continuity-test-cadence overdue count, operator-configured
  recurrence window (12-month default aligned with DORA Art. 11(6)).
- Field note #118 — the KPI triad this KRI triad reads against.
  Read first if you have not.

The performance view and the residual-risk view on the same
availability posture. The sextet closes. The tile is on the shelf.
