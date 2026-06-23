---
title: "Field note #73 — the F-MET executive-metrics lane opens: breach-notification-clock-margin reaches CORE as the first GDPR operational KRI to bind OCSF + ship a committed reference visualisation, with detection_coverage and the MTTD detection-latency cluster scaffolded along the same pattern"
description: "Seventy-third field note from the SecOps-NG Digital Commons: the framework's executive-metrics / KPI-KRI lane (G-04) opens with a four-PR wave. The GDPR-operational-KRI scaffold lands a SKELETON entry for breach-notification-clock-margin against the Article 33 72-hour clock, and the same metric reaches CORE in the next PR by binding to an OCSF Incident Finding source-data shape and committing a reference visualisation as a sibling artifact. Two more SKELETON entries follow on the same pattern: detection_coverage binds OCSF Detection Finding and ships its reference viz, and the MTTD detection-latency cluster (mttd / mttd_phishing / mttd_ransomware) opens the catch-up wave on committed reference visualisations behind a lightweight presence-and-back-reference regression net."
pubDate: 2026-06-23
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-met", "metrics", "kpi", "kri", "g-04", "ocsf", "gdpr", "article-33", "breach-notification", "detection-coverage", "mttd", "reference-visualisation", "executive-metrics", "digital-commons", "audit-readable"]
---

The previous field note closed with the regulatory-mapping floor
structurally green across four regimes and named the next pass
behind the row honestly: the GDPR-specific operational KRIs
(breach-notification-clock-margin, processor-attestation-freshness,
data-minimisation-pressure, Chapter V transfer-path-freshness)
opening on the metrics lane.

This note reads that lane opening. The framework's
executive-metrics / KPI-KRI surface — tracked under the G-04
catalog property — gains a dedicated lane in `content/metrics/`,
and the lane lands with a four-PR wave: one GDPR operational-KRI
scaffold reaching SKELETON, the same KRI promoted to CORE by
binding an OCSF source-data shape and committing a reference
visualisation, and two more SKELETON entries — detection_coverage
and the MTTD detection-latency cluster — opening on the same
pattern so the lane's shape is set, not narrated.

## What landed in this window

Four PRs against the framework, all merged to `main`.

### F-MET GDPR operational-KRI SKELETON — breach-notification-clock-margin (PR #446)

[PR #446](https://github.com/secops-ng/secops-ng-framework/pull/446)
opens the GDPR-operational-KRI surface in `content/metrics/` with
the scaffold and one KRI end-to-end against the existing
GDPR Article 33/34 personal-data-breach-notification mapping.

The KRI — `kri.breach_notification_clock_margin@v1` — measures
the remaining margin in minutes to the GDPR Article 33(1) 72-hour
personal-data-breach notification deadline for in-flight cases,
aggregated as `min` across the active-case population (the
worst-case in-flight margin an operator reads on the dashboard).
Thresholds carry on the entry directly: warn under 1440 minutes
(less than 24 hours of buffer), high under 240 (less than 4
hours), breach under 0 (clock overrun; the Article 33(1)
reasons-for-delay record becomes required).

The KRI binds to `playbook.incident_management@v1` on two of its
steps — the classification step that supplies the awareness
timestamp at which Article 4(12) is met, and the
submit-72h-notification step that closes the case out of the
active-margin population — and a back-reference lands under the
GDPR mapping's Article 33 `metric_refs[]` block so the nightly
GDPR orphan-CI and the metrics-catalog bidirectional link linter
stay green.

### F-MET CORE — breach-notification-clock-margin OCSF binding + reference viz (PR #447)

[PR #447](https://github.com/secops-ng/secops-ng-framework/pull/447)
promotes the same metric from SKELETON to CORE by closing the
two G-04 definition-of-done elements the SKELETON deliberately
left open: an OCSF source-data-shape binding for the metric's
inputs and a committed reference-visualisation artifact next to
the YAML.

The OCSF binding lands as a new catalog entry under
`content/telemetry/` for the OCSF v1.4.0 Incident Finding class
(`class_uid 2005`, Findings category) — the telemetry shape the
`incident_management@v1` playbook already emits as a personal-data
breach case moves through the Article 33 notification chain. The
metric's `measurement.inputs[]` then wire to that telemetry
`stable_id`: `awareness_timestamp` reads off the OCSF event's
`start_time` at the classification step's status transition into
classified-as-breach; `notification_dispatch` reads off `time` at
the regulator-notification step's status transition into
notified. (The third input — `evaluation_now` — stays unbound on
purpose: that is the compile target's scheduler clock, not an
OCSF event.)

The committed reference-visualisation artifact lands at
`content/metrics/breach_notification_clock_margin.viz.md` as a
sibling to the YAML, establishing the `.viz.md` sibling-file
convention for catalog metrics. The artifact carries the
chart-kind contract (a horizontal bar chart of `margin_minutes`
per active case sliced by classification severity, with warn /
high / breach thresholds overlaid as vertical lines and the
`min` aggregate annotated as the headline figure), an in-tree
Mermaid rendering that renders directly on the public repo
surface, a threshold-band table that points back at the catalog
entry as source of truth, and the OCSF source-data-shape pointer
back at the new telemetry binding.

The structural effect: this is the first metric to reach CORE on
G-04 — every element of the catalog definition-of-done is
authored, no slot stands as a structural placeholder, and the
shape an operator compiles into their orchestrator points at
real telemetry binding plus an artifact they can wire into a
dashboard portably.

### F-MET SKELETON — detection_coverage OCSF binding + reference viz (PR #448)

[PR #448](https://github.com/secops-ng/secops-ng-framework/pull/448)
is the second metric to ship the full G-04 DoD set, opening the
SKELETON wave on the same pattern: definition + units +
calculation method + OCSF source-data-shape binding + committed
`.viz.md` sibling.

The OCSF binding lands as a new catalog entry for the OCSF
v1.4.0 Detection Finding class (`class_uid 2004`) — the
telemetry shape the `detection_engineering@v1` and
`threat_intel_ingest@v1` playbooks already cite from their
mappings and CACAO source. The metric's
`measurement.inputs[production_detections]` then wires to that
binding through the detection_engineering playbook's
`measure-rule-version` step, with the metric reading the OCSF
meta-finding's `finding_info.uid` as the rule-identity field.
The in-scope technique set stays operator-scoped — no telemetry
binding pretends to source that, because honestly, no upstream
event carves it out.

The reference-visualisation sibling lands as
`content/metrics/detection_coverage.viz.md` against the same
contract the breach-notification-clock-margin viz set: per-tactic
stacked horizontal bars of covered-techniques-over-in-scope, an
overall `|C| / |T|` ratio annotated as the headline figure, warn
/ breach overlays at the catalog-entry thresholds, and an
OCSF source-data-shape section that points back at the new
telemetry binding.

### F-MET SKELETON — MTTD detection-latency cluster reference viz (PR #449)

[PR #449](https://github.com/secops-ng/secops-ng-framework/pull/449)
opens the catch-up wave on committed reference visualisations
across the rest of the metrics catalog by landing a coherent
first cluster — the MTTD detection-latency family — and the
regression net that defends the property going forward.

Three `.viz.md` siblings land alongside three existing metric
YAMLs: `mttd.viz.md` against the unscoped baseline, and
`mttd_phishing.viz.md` and `mttd_ransomware.viz.md` against the
two domain-scoped variants. Each viz mirrors the exemplar
contract — chart kind, in-tree Mermaid rendering, threshold-band
table, OCSF source-data-shape section that back-references each
YAML's `measurement.inputs` and `playbook_refs`, and an operator
override note — and each metric YAML gains a *Reference
visualisation:* paragraph in `measurement.formula` pointing at
the committed sibling.

The regression net lands as
`tests/content/test_metrics_reference_viz.py` — a lightweight
presence-and-back-reference check that asserts each allow-listed
metric stem carries a `.viz.md` sibling, a `stable_id`
back-reference, a YAML `measurement.formula` pointer to the
artifact, and a renderable Mermaid block. The allow-list shape
is by metric stem, so the next cluster on the catch-up wave
extends the property by extending one tuple rather than
re-authoring the test.

Honest framing on the SKELETON shape: the unscoped baseline
`kpi.mttd@v1` does not yet pin a single OCSF Detection Finding
binding — the upstream shape an MTTD reads against varies by
domain — and the scoped variants inherit whatever lands there.
The viz files name that deferral on the artifact rather than
invent a binding, and a CORE follow-up sibling handles the OCSF
binding behind the row.

## What this wave does to the metrics catalog floor

After this window, the `content/metrics/` surface carries:

- **44 entries on the catalog** (up from 43 before PR #446),
  against the G-04 catalog target of at least 40 KPI/KRI
  definitions, each carrying definition, units, calculation
  method, and source-data-shape pointer.
- **One CORE-grade metric on G-04** — breach-notification-clock-margin
  — with every definition-of-done element authored: OCSF
  source-data-shape binding present, committed reference
  visualisation present as a `.viz.md` sibling, playbook step
  binding present at both ends of the calculation.
- **Three more entries on G-04 SKELETON shape** — detection_coverage,
  mttd, mttd_phishing, mttd_ransomware — with the OCSF binding
  authored where the upstream shape is unambiguous and the
  committed `.viz.md` sibling present in every case.
- **A `.viz.md` sibling-file convention** for catalog metrics,
  established by PR #447's CORE artifact and ratified by the
  PR #449 regression net as the property the catch-up wave
  defends.
- **The first metric-level OCSF telemetry bindings on the
  catalog** — incident_finding (`class_uid 2005`) and
  detection_finding (`class_uid 2004`) — both authored on
  upstream OCSF v1.4.0 class shapes already cited from shipped
  playbook mappings and CACAO sources.

## Why an executive-metrics lane matters

A regulated operator running this framework needs two reading
surfaces that share an artifact floor — the operational one
(what is the playbook doing right now, against which controls,
emitting which telemetry, breaching which clocks) and the
executive one (what does this look like on a board-facing
dashboard, which KPI/KRI numbers fail-loud against which
thresholds, which audit clock has how much margin left).

Without a structural metrics lane, the executive surface
fractures off the operational one: every operator wires their
own dashboard against their own threshold convention against
their own telemetry shape, and the question "is this number the
same number the audit asks about?" can only be answered through
a reconstruction pass at the back of a compliance binder.

The F-MET lane closes that fracture at the catalogue layer.
Every catalog entry carries a definition, units, calculation
method, source-data-shape pointer, threshold band, and (per
G-04) a committed reference visualisation. The OCSF binding
names which upstream event shape the calculation reads. The
playbook binding names which orchestrated step emits the
telemetry. The committed `.viz.md` names which chart kind, which
threshold overlays, which headline figure, and which back-link
to the catalog entry the operator's dashboard inherits.

The board-facing dashboard becomes a compile target of the
catalog instead of a parallel artifact. The audit question
"which OCSF event shape does this dashboard read against?" is
answered on the metric entry, not in a separate appendix.

## Why breach-notification-clock-margin reached CORE first

The GDPR Article 33(1) 72-hour personal-data-breach notification
deadline is one of the few regulatory clocks in the European
regulatory landscape that runs on real wall time from the moment
an operator becomes aware that Article 4(12) is met — and that
clock continues running through nights, weekends, and bank
holidays. The clock-margin KRI is the metric an operator
running the framework would want on a board-facing dashboard
first: when it dips into the warn band, an on-call carries the
context that a 24-hour buffer is gone; when it crosses the
high band, the reasons-for-delay record at Article 33(1) is
within 4 hours of becoming required; when it crosses zero, the
record is required.

Binding the calculation to an OCSF Incident Finding event class
makes the dashboard portable: any operator whose detection
substrate emits the OCSF shape — and the substrate roster that
emits OCSF natively or through a known canonical adapter is
already substantial across the European market — can compile the
catalog entry into their orchestrator and get the same number
the audit reads.

## Honest framing on what isn't in this window

The lane opens with a CORE-grade exemplar and three SKELETON
entries on the same shape; what stays open behind the row:

- **MTTR remediation-latency cluster reference viz.** The
  detection-latency cluster's sibling — the MTTR
  remediation-latency reference-viz cluster — is currently
  in flight on
  [PR #450](https://github.com/secops-ng/secops-ng-framework/pull/450)
  and not yet merged at the time of this note. The MTTR /
  MTTD pair as the detection-and-remediation latency surface
  closes in the next field note when that lands.
- **More GDPR operational KRIs.** The GDPR operational-KRI
  surface named on the previous note carries three more
  metrics behind breach-notification-clock-margin —
  `processor-attestation-freshness`,
  `data-minimisation-pressure`, and the Chapter V
  `transfer-path-freshness` overlay — opening as CORE and
  EXTEND legs behind the row.
- **Catch-up wave on `.viz.md` coverage.** Forty of the
  catalog's 44 entries do not yet carry a committed `.viz.md`
  sibling. The MTTD cluster opens the catch-up wave; the
  CORE follow-up clusters land on FOUNDATION-property batches
  behind it, and the nightly CI guard that asserts every
  `content/metrics/*.yaml` carries a `telemetry_refs[]`
  binding and a committed `.viz.md` lands as an EXTEND sibling
  behind those clusters.
- **OCSF bindings on the MTTD baseline.** The unscoped
  `kpi.mttd@v1` deliberately does not yet pin a single OCSF
  Detection Finding binding, because the upstream event shape
  an MTTD reads against varies by domain. A CORE follow-up
  sibling handles the binding behind the row, and the scoped
  variants inherit whatever lands there.

The accurate claim on this row is: the F-MET executive-metrics
lane has opened on the framework, the lane is set by a
CORE-grade exemplar with every G-04 DoD element authored
end-to-end, the `.viz.md` sibling-file convention exists with a
regression net behind it, and three more entries are scaffolded
on the same shape.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-MET GDPR operational-KRI scaffold lands at
  [PR #446](https://github.com/secops-ng/secops-ng-framework/pull/446);
  the breach-notification-clock-margin CORE pass lands at
  [PR #447](https://github.com/secops-ng/secops-ng-framework/pull/447);
  the detection_coverage SKELETON lands at
  [PR #448](https://github.com/secops-ng/secops-ng-framework/pull/448);
  and the MTTD detection-latency cluster SKELETON lands at
  [PR #449](https://github.com/secops-ng/secops-ng-framework/pull/449).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-two that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community
  lane, the auto-generated roadmap.

One lane opens this window. The framework's executive-metrics /
KPI-KRI surface gets its own catalogue tree under
`content/metrics/`, the first entry — breach-notification-clock-margin
against the GDPR Article 33 72-hour clock — reaches CORE on G-04
by binding to the OCSF Incident Finding shape and committing a
reference visualisation as a sibling artifact, and two more
SKELETON entries (detection_coverage and the MTTD
detection-latency cluster) open behind it on the same pattern.
The MTTR remediation-latency cluster, the rest of the GDPR
operational KRIs, the catch-up wave on `.viz.md` coverage, and
the OCSF baseline binding on MTTD open as the next passes
behind the row.
