---
title: "Field note #116 — CRA, DORA, and NIS2 incident-notification latency triads all land in the KPI/KRI catalogue (G-04)"
description: "Field note one hundred and sixteen from the SecOps-NG Digital Commons. Three regulatory incident-notification clock cascades — CRA Article 14, DORA Article 17/19, and NIS2 Article 23 — now carry latency KRI triads in content/metrics/, each with a hard statutory bound on the wall, an OCSF Compliance Finding binding, a regulatory anchor, a sovereign_stack_note, and a reference visualisation."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "kri", "kpi", "cra", "dora", "nis2", "incident-notification", "latency", "ocsf", "sovereign-stack", "digital-commons", "field-note-116"]
---

Field note one hundred and sixteen. Three regulatory clocks, one
measurement shape. The KPI/KRI catalogue in the commons now carries
latency triads for the three incident-notification cascades an EU
operator has to hold at the wall: CRA Article 14 for products with
digital elements, DORA Article 17/19 for financial entities, and
NIS2 Article 23 for essential and important entities.

Each triad names three gates, binds each gate to its hard statutory
bound in hours or days, and ships as a KRI (residual-risk indicator)
so an operator can see slippage well before an on-time ratio would
tip below 1.00. The three triads land under `content/metrics/` with
matching `.viz.md` reference visualisations, and every metric
definition carries the same seven fields the KPI/KRI schema requires
at G-04.

## What shipped

Three regulator-anchored latency triads, each on the same shape:

- **F-MET-CRA-LATENCY (PR #622).** The CRA Article 14 Single
  Reporting Platform (SRP) dispatch-latency triad — an early-warning
  gate at 24 hours, a full-notification gate at 72 hours, and a
  final-report gate at 14 days for actively-exploited vulnerabilities
  (with the Article 14(3) severe-incident breach at 30 days).
  Files: `content/metrics/cra_early_warning_latency_hours.yaml`,
  `content/metrics/cra_full_notification_latency_hours.yaml`,
  `content/metrics/cra_final_report_latency_days.yaml`.
- **F-MET-DORA-LATENCY (PR #634).** The DORA major-incident
  reporting-latency triad, anchored on the Article 17 ICT-incident
  management process and Article 19 reporting cadence — an
  initial-report gate at 4 hours (with the outer 24-hour discovery
  ceiling), an intermediate-report gate at 72 hours, and a
  final-report gate at 30 days.
  Files: `content/metrics/dora_incident_initial_report_latency_hours.yaml`,
  `content/metrics/dora_incident_intermediate_report_latency_hours.yaml`,
  `content/metrics/dora_incident_final_report_latency_days.yaml`.
- **F-MET-NIS2-LATENCY (PR #635).** The NIS2 Article 23 significant-
  incident notification-latency triad — an early-warning gate at
  24 hours under Art. 23(4)(a), the incident-notification gate at
  72 hours under Art. 23(4)(b), and a final-report gate at 30 days
  under Art. 23(4)(d).
  Files: `content/metrics/nis2_incident_early_warning_latency_hours.yaml`,
  `content/metrics/nis2_incident_notification_latency_hours.yaml`,
  `content/metrics/nis2_incident_final_report_latency_days.yaml`.

Each metric definition carries the same seven-field shape: a stable
id, a title and summary, the unit (hours or days), a
`calculation_method` clause naming the two timestamps the operator
must anchor, a `target` block carrying the statutory bound with its
comparator and its regulatory rationale, `thresholds` for the warn /
overrun bands, an OCSF Compliance Finding class binding under
`data_source.ocsf.*` for the observation shape, and — the field the
commons has been treating as non-optional for regulator-touching
metrics all along — a `sovereign_stack_note` that pins the
notification chain against EU-hostable endpoints.

Every YAML ships with a sibling `.viz.md` reference visualisation.
The visualisation is the shape a dashboard tile expects, not a
prescribed library — the commons's promise is the observation shape,
not the frontend.

## Why the triad shape, and why land the three regimes together

An on-time ratio KPI reads whether the clock was held for the
window. A latency KRI reads how close to the wall each individual
dispatch landed. The ratio is the audit answer; the latency is the
early-warning signal. An operator whose CRA early-warning ratio has
been 1.00 for a quarter but whose median latency has crept from
6 hours to 21 hours is one bad week from a statutory overrun, and
the ratio does not say so. The latency triad does.

Landing the three regimes together also makes a structural point.
Each of CRA, DORA, and NIS2 sets its own thresholds and its own
regulator, but the notification cascade shape is the same in each
case: an early-warning gate on the scale of hours, an intermediate-
or full-notification gate at the day-scale, and a final-report gate
at the week-to-month scale. An operator who has learned to hold the
cascade shape for one regime already has the measurement discipline
for the others. The catalogue makes that portability visible.

## What each metric binds

Beyond the numeric target, every definition carries four bindings
that make the metric portable rather than framework-specific:

- **A regulatory anchor.** Each KRI names the article and sub-clause
  that fixes its bound — CRA Art. 14(1) for the 24-hour early
  warning, CRA Art. 14(2) for the 72-hour full notification, CRA
  Art. 14(2)/(3) for the 14-day and 30-day final-report windows,
  DORA Art. 19(4)(a) for the 4-hour initial report, DORA Art.
  19(4)(b) for the 72-hour intermediate report, DORA Art. 19(4)(c)
  for the 30-day final report, NIS2 Art. 23(4)(a) for the 24-hour
  early warning, NIS2 Art. 23(4)(b) for the 72-hour incident
  notification, and NIS2 Art. 23(4)(d) for the 30-day final report.
  The bound is not a design choice; it is what the regulation says.
- **An OCSF Compliance Finding binding.** Each metric names the OCSF
  class and profile its observations serialise into, so an operator
  who is already sinking OCSF into a lake does not need a bespoke
  ingestion path for these observations.
- **A calculation method.** Every triad names exactly which two
  timestamps the observation reads — awareness (or classification-
  as-major, for DORA) and dispatch — with no derived clocks. If the
  operator's evidence store has those two timestamps, the metric is
  computable. If it does not, that gap is the actual finding.
- **A sovereign_stack_note.** Every metric definition carries an
  explicit sovereign-stack clause: the notification chain terminates
  at an EU-hostable endpoint (the SRP, the competent authority, the
  CSIRT). No non-EU default is assumed in the dispatch path. This
  aligns with the FOUNDATION sovereignty property; it is not a
  bolt-on.

## How an operator drops these into a dashboard tomorrow

The short version, for an operator whose evidence store already
carries incident records with awareness (or classification) and
dispatch timestamps:

1. Pull the three YAML definitions for the regime you are in — CRA,
   DORA, or NIS2 — from `content/metrics/`.
2. Read `calculation_method` and confirm your evidence store carries
   the two timestamps the metric requires. If it does not, that gap
   is the first finding.
3. Emit observations as OCSF Compliance Finding records against the
   class the metric names in `data_source.ocsf`, one observation per
   dispatched notification.
4. Point your dashboard tile at the `.viz.md` reference and hold the
   red line at the statutory bound in `target.value`.
5. Alert on the `warn` threshold before the `overrun` threshold. The
   overrun is the statutory breach; the warn is the practitioner's
   own tripwire, sitting well inside the bound.

There is no orchestrator lock-in here. The metric definition is
portable; the OCSF observation shape is portable; the visualisation
reference is a shape, not a library. If an operator's runtime is
Temporal, or n8n, or LangGraph, or something else entirely, the
observation contract is the same.

## Where this sits against G-04

G-04 is the KPI/KRI catalogue maturity goal. It asks that every
metric definition be regulator-anchored, computationally honest
(named timestamps, no derived clocks), OCSF-bound, sovereignty-
noted, and shipped with a reference visualisation. The nine metric
definitions landing in this wave — three triads across three
regimes — all pass that bar. The catalogue now covers the incident-
notification clock cascades for the three regulations an EU
operator most commonly holds at once.

The clock cascade is not the whole of any of those regulations. It
is one shape among several — CRA still asks about vulnerability-
handling processes, DORA about ICT third-party risk, NIS2 about the
ten Article 21(2) measures the self-assessment field note (#115)
covered on enforcement month. But the clock cascade is the
regulatory shape a supervisory authority reads first when a real
incident lands, and it is now measured in the commons on the same
schema, in the same fields, with the same sovereign-stack posture.

## Where to look

- `secops-ng-framework/content/metrics/cra_early_warning_latency_hours.yaml`,
  `content/metrics/cra_full_notification_latency_hours.yaml`,
  `content/metrics/cra_final_report_latency_days.yaml` — the CRA
  triad and its viz.md siblings.
- `secops-ng-framework/content/metrics/dora_incident_initial_report_latency_hours.yaml`,
  `content/metrics/dora_incident_intermediate_report_latency_hours.yaml`,
  `content/metrics/dora_incident_final_report_latency_days.yaml` —
  the DORA triad and its viz.md siblings.
- `secops-ng-framework/content/metrics/nis2_incident_early_warning_latency_hours.yaml`,
  `content/metrics/nis2_incident_notification_latency_hours.yaml`,
  `content/metrics/nis2_incident_final_report_latency_days.yaml` —
  the NIS2 triad and its viz.md siblings.
- Field note #111 — F-METRICS-04 CORE, the FOUNDATION-property ring
  closing on the KPI/KRI schema itself.
- Field note #115 — NIS2 Article 21 self-assessment playbook,
  landed on enforcement month.

Three cascades, nine metrics, one measurement shape. The wall does
not move. The catalogue makes sure the operator's dashboard sees
the wall on the same shape the regulator does — in every regime the
operator sits inside at once. PRs #622, #634, and #635 are the
wave. The tiles are on the shelf.
