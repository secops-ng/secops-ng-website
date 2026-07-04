---
title: "Field note #117 — GDPR Art. 33/34 breach-notification latency triad lands, closing the four-regime coverage ring (G-04)"
description: "Field note one hundred and seventeen from the SecOps-NG Digital Commons. A GDPR Article 33/34 personal-data breach notification latency triad now ships in content/metrics/, alongside the CRA, DORA, and NIS2 triads landed in field note #116 — the four-regime incident-notification latency ring is closed in the KPI/KRI catalogue at G-04."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "kri", "kpi", "gdpr", "art-33", "art-34", "personal-data-breach", "latency", "ocsf", "sovereign-stack", "four-regime-ring", "digital-commons", "field-note-117"]
---

Field note one hundred and seventeen. A companion to field note #116.
The fourth clock joins the wall: a GDPR Article 33/34 personal-data
breach notification latency triad now sits under `content/metrics/` in
the framework, on the same schema and the same seven-field shape as
the CRA, DORA, and NIS2 triads that landed earlier today. The
four-regime incident-notification latency ring is closed.

## What shipped

**F-MET-GDPR-LATENCY (PR #636).** Three residual-risk (KRI) metric
definitions, each anchored to a specific GDPR clause, each with a
committed `.viz.md` reference visualisation:

- **`gdpr_breach_supervisory_authority_notification_latency_hours`** —
  GDPR Article 33(1) supervisory-authority notification dispatch
  latency. Statutory 72-hour bound. This one is the hard clock: the
  controller must notify the supervisory authority "without undue
  delay and, where feasible, not later than 72 hours after having
  become aware of it."
- **`gdpr_breach_data_subject_notification_latency_hours`** — GDPR
  Article 34(1) communication-to-data-subjects dispatch latency.
  Article 34(1) sets no statutory hard-hour cap — the text is
  "without undue delay" — so this KRI carries a 72-hour *operational*
  benchmark aligned with the Article 33(1) supervisory-authority
  floor, and the metric's YAML summary is explicit about that. The
  Article 34(3) exemptions (data rendered unintelligible by
  encryption, subsequent measures that made the high risk unlikely,
  disproportionate effort where a public communication suffices)
  are noted as skip conditions inside the same metric — not modelled
  as separate metrics.
- **`gdpr_breach_dpa_escalation_latency_days`** — GDPR Article 33(4)
  phased supplementary-report dispatch latency. 30-day *operational*
  ceiling matched to the NIS2 Article 23(4)(d) / CRA / DORA Article
  19(4)(c) final-report siblings for four-regime latency-ring parity.
  Not a regulatory hard limit — Article 33(4) sets no numeric
  deadline, only "in phases" and "without undue further delay". The
  ceiling is a practitioner's tripwire, and the YAML and viz both
  flag it as non-statutory.

Files: `content/metrics/gdpr_breach_supervisory_authority_notification_latency_hours.yaml`,
`content/metrics/gdpr_breach_data_subject_notification_latency_hours.yaml`,
`content/metrics/gdpr_breach_dpa_escalation_latency_days.yaml`,
each with a sibling `.viz.md`.

## The four-regime ring, closed

Field note #116 landed the CRA (PR #622), DORA (PR #634), and NIS2
(PR #635) triads together and named the shape they share: an
early-warning gate on the scale of hours, an intermediate- or full-
notification gate at the day-scale, and a final-report gate at the
week-to-month scale. GDPR fits the shape once you read Art. 33 and
Art. 34 alongside Art. 33(4):

- Art. 33(1) — supervisory-authority notification at 72 hours from
  awareness. The hard hour-scale gate.
- Art. 34(1) — communication to data subjects "without undue delay"
  where the breach is likely to result in a high risk. The
  data-subject-facing day-scale gate.
- Art. 33(4) — phased supplementary information to the supervisory
  authority "in phases". The final-report / follow-up gate.

Four regimes now on the same measurement discipline: CRA Article 14,
DORA Article 17/19, NIS2 Article 23, and GDPR Article 33/34. Every
metric definition carries the same seven-field shape — a stable id,
title and summary, unit, `calculation_method` naming the two
timestamps the operator must anchor (awareness and dispatch, no
derived clocks), a `target` block with the statutory or operational
bound and its rationale, `thresholds` for warn/high/breach bands, an
OCSF Compliance Finding class binding under `data_source.ocsf`, and a
`sovereign_stack_note` pinning the notification chain against
EU-hostable endpoints.

## What the GDPR triad binds

Beyond the numeric target, each of the three metrics carries the same
four portable bindings:

- **A regulatory anchor.** Article and sub-clause named explicitly —
  Art. 33(1), Art. 34(1), Art. 33(4). Where the number on the wall is
  operational rather than statutory, the metric says so, and the viz
  says so.
- **An external reference.** ISO/IEC 27004 for the measurement
  discipline, EDPB Guidelines 9/2022 on personal-data breach
  notification for the interpretive layer regulators actually apply.
- **A calculation method.** Awareness and dispatch, always. The
  awareness anchor is the moment the controller became aware within
  the meaning of Article 33 (or, for Art. 34, the moment the "likely
  high risk" determination was made). If the evidence store cannot
  serve those two timestamps, that gap is the first finding — not
  the metric.
- **A sovereign_stack_note.** The notification chain terminates at
  the competent supervisory authority (an EU public authority by
  construction) and, for Art. 34, at the affected data subjects
  through channels the controller operates. No non-EU default is
  assumed in the dispatch path.

## Why an operational cap on Art. 34 and Art. 33(4)

Neither Art. 34(1) nor Art. 33(4) sets a numeric hard limit. The
temptation would be to leave those metrics without a `target.value`.
That temptation is wrong. A latency KRI with no target is a chart
without a red line; it reads slippage but does not warn on it. What
the commons ships instead is an *operational* target the operator can
set as a working commitment — 72 hours on Art. 34 to match the Art.
33(1) supervisory-authority floor, 30 days on Art. 33(4) to match the
final-report siblings in the other three regimes — with the YAML
summary and the viz both stating in plain language that the number is
a practitioner's tripwire rather than a statutory bound.

This is the same discipline the CRA / DORA / NIS2 triads apply to the
warn thresholds sitting well inside the statutory bounds: the wall is
the wall, but a good KRI does not wait for the wall.

## What a controller does with these tomorrow

For a controller whose evidence store already carries breach records
with awareness and dispatch timestamps:

1. Pull the three YAML definitions from `content/metrics/`.
2. Read `calculation_method` and confirm the store carries the two
   timestamps each metric requires. If it does not, that gap is the
   first finding.
3. Emit observations as OCSF Compliance Finding records against the
   class each metric names in `data_source.ocsf`, one observation per
   dispatched notification.
4. Point the dashboard tile at the `.viz.md` reference and hold the
   red line where the metric says it goes — at the statutory bound
   for Art. 33(1), at the operational bound (with the caveat visible)
   for Art. 34(1) and Art. 33(4).
5. Wire the Art. 34(3) exemptions as skip conditions on the Art. 34
   metric, not as suppressions of the observation. The commons keeps
   the exemption in the metric, not outside it.

The observation contract is portable. n8n, Temporal, LangGraph, or an
operator's own runtime — the OCSF shape is the same. G-04 does not
promise a dashboard library; it promises the schema and the anchor.

## Where this sits against G-04

G-04 is the KPI/KRI catalogue maturity goal. It asks that every metric
definition be regulator-anchored, computationally honest (named
timestamps, no derived clocks), OCSF-bound, sovereignty-noted, and
shipped with a reference visualisation. The three GDPR metrics
landing in this wave — `gdpr_breach_supervisory_authority_notification_latency_hours`,
`gdpr_breach_data_subject_notification_latency_hours`, and
`gdpr_breach_dpa_escalation_latency_days` — all pass that bar.

Read together with the CRA, DORA, and NIS2 triads from field note
#116, the catalogue now covers the incident-notification clock
cascades for every one of the four EU regulations a controller,
processor, essential entity, important entity, financial entity, or
manufacturer of a product with digital elements is likely to sit
inside at once. The shape is portable across all four. The wall does
not move.

## Where to look

- `secops-ng-framework/content/metrics/gdpr_breach_supervisory_authority_notification_latency_hours.yaml`
  and its `.viz.md` sibling — Art. 33(1) 72-hour statutory gate.
- `secops-ng-framework/content/metrics/gdpr_breach_data_subject_notification_latency_hours.yaml`
  and its `.viz.md` sibling — Art. 34(1) data-subject notification,
  operational 72-hour benchmark.
- `secops-ng-framework/content/metrics/gdpr_breach_dpa_escalation_latency_days.yaml`
  and its `.viz.md` sibling — Art. 33(4) phased supplementary report,
  operational 30-day ceiling.
- Field note #116 — the CRA, DORA, and NIS2 latency triads. Read
  first if you have not.
- Field note #114 — the F-WF-DPIA trilogy, the Art. 35 half of the
  same regulation.

Four clocks, twelve metrics, one measurement shape. PR #636 is the
wave that closes the ring. The tile is on the shelf.
