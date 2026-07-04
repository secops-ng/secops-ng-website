---
title: "Field note #120 — four-regime playbook_refs ring closes: DORA/NIS2/GDPR latency KRIs wire back into the CACAO chains (G-02/G-04)"
description: "Field note one hundred and twenty from the SecOps-NG Digital Commons. Nine latency KRI entries across DORA Art. 19(4), NIS2 Art. 23(4), and GDPR Art. 33/34 now carry canonical playbook_refs back into the shipped incident_management and data_exfil CACAO chains — joining the CRA triad from PR #622 and closing the four-regime metric-to-playbook back-reference ring at G-02 and G-04."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "g-04", "metrics", "kri", "playbook-refs", "traceability", "dora", "nis2", "gdpr", "cra", "art-19", "art-23", "art-33", "art-34", "cacao", "four-regime-ring", "digital-commons", "field-note-120"]
---

Field note one hundred and twenty. The natural successor to #116 and
#117. The four latency clocks on the wall now carry return addresses.

Field note #116 landed the CRA, DORA, and NIS2 incident-notification
latency triads; field note #117 landed the GDPR Art. 33/34 breach
triad and closed the coverage side of the ring — twelve metrics, four
regimes, one measurement shape. What each of those entries still
owed the operator was the return trip: a canonical link from the KRI
back to the exact dispatch step in the CACAO playbook the metric
measures. That trip is now paid.

## What shipped

Nine metric YAML files in `content/metrics/` now each carry a
`playbook_refs` block pointing at the notification-dispatch action
inside the corresponding shipped CACAO playbook.

**DORA Art. 19(4) triad — `playbook.incident_management@v1`:**

- `kri.dora_incident_initial_report_latency_hours@v1` → the Art. 19(4)(a)
  initial-report dispatch step.
- `kri.dora_incident_intermediate_report_latency_hours@v1` → the
  Art. 19(4)(b) intermediate-notification dispatch step.
- `kri.dora_incident_final_report_latency_days@v1` → the Art. 19(4)(c)
  final-report dispatch step.

**NIS2 Art. 23(4) triad — `playbook.incident_management@v1`:**

- `kri.nis2_incident_early_warning_latency_hours@v1` → the Art. 23(4)(a)
  24-hour early-warning dispatch step.
- `kri.nis2_incident_notification_latency_hours@v1` → the Art. 23(4)(b)
  72-hour notification dispatch step.
- `kri.nis2_incident_final_report_latency_days@v1` → the Art. 23(4)(d)
  one-month final-report dispatch step.

**GDPR Art. 33/34 triad — `playbook.data_exfil@v1`:**

- `kri.gdpr_breach_supervisory_authority_notification_latency_hours@v1` →
  the Art. 33(1) supervisory-authority notification dispatch step.
- `kri.gdpr_breach_data_subject_notification_latency_hours@v1` → the
  Art. 34(1) communication-to-data-subjects dispatch step.
- `kri.gdpr_breach_dpa_escalation_latency_days@v1` → the Art. 33(4)
  phased supplementary-report dispatch step on the same regulator-
  notification chain.

The CRA Art. 14 latency triad already carried this back-reference into
`playbook.cra_srp_notify@v1` when it shipped as part of the F-MET-CRA-
LATENCY skeleton. With this wave, all four regimes are cross-linked in
both directions.

## What "the ring is closed" actually means

Every incident-notification and breach-notification latency KRI in the
catalogue now resolves in two directions:

- **Outbound (regulatory anchor).** The metric already named the
  article and sub-clause it measures, the awareness and dispatch
  timestamps it needs, the OCSF Compliance Finding class it emits
  against, and the sovereign endpoint the notification terminates at.
- **Inbound (playbook back-reference).** The metric now also names the
  stable `playbook_id` and `step_id` of the CACAO action inside the
  shipped playbook that produces the dispatch event the KRI is timing.

The pairing is what makes the catalogue self-consistent. A dashboard
tile reading a `kri.gdpr_breach_supervisory_authority_notification_latency_hours@v1`
value can now, without operator glue, walk directly to the exact
action in `playbook.data_exfil@v1` that emitted the timestamp the
tile is measuring against the 72-hour wall. The traceability chain
is complete end-to-end: regulatory obligation → KRI metric →
CACAO dispatch step → dashboard.

## Why that matters at G-02 and G-04

G-02 is the regulatory-mapping coverage goal — every regulatory
obligation the framework claims to help operators meet has to be
resolvable to a portable artifact. G-04 is the KPI/KRI catalogue
maturity goal — every metric has to be regulator-anchored,
computationally honest, OCSF-bound, sovereignty-noted, shipped with a
reference visualisation, and reachable from the playbook it measures.

The inbound half of the traceability ring — playbook step → metric —
existed already through each CACAO action's own observation
declarations. The outbound half — metric → playbook step — is what
this wave adds. Both directions now resolve. There is no metric in the
four-regime latency set that a reader can hold without also holding
the exact dispatch action the metric measures.

## What an operator does with the back-references

A team wiring the catalogue into an existing dashboard does not have
to hand-annotate the mapping any more. The five things the metric
already promised (article, calculation method, OCSF class, target,
sovereign endpoint) plus the two new fields (`playbook_id`, `step_id`)
give the operator:

1. A one-hop lookup from a red tile to the CACAO action to
   investigate — no manual glossary, no side spreadsheet.
2. A rebuild path when the operator swaps compile targets: the
   `step_id` is stable across n8n, Temporal, and LangGraph emissions
   of the same playbook, because the reference compilers preserve it.
3. A change-detection anchor: if a playbook step moves or a KRI
   changes id, the resolver test in the framework catches it before
   merge. `tests/content/test_metrics_catalog_links.py::test_catalog_playbook_refs_resolve`
   is the wall.

That last one is not a footnote. The playbook_refs field is a
maintenance obligation as much as a convenience — the framework
promises the resolution stays green, and the CI holds the promise.

## Where to look

- `secops-ng-framework/content/metrics/dora_incident_initial_report_latency_hours.yaml`
  (and the two DORA siblings) — Art. 19(4) triad wired into
  `playbook.incident_management@v1`.
- `secops-ng-framework/content/metrics/nis2_incident_early_warning_latency_hours.yaml`
  (and the two NIS2 siblings) — Art. 23(4) triad wired into
  `playbook.incident_management@v1`.
- `secops-ng-framework/content/metrics/gdpr_breach_supervisory_authority_notification_latency_hours.yaml`
  (and the two GDPR siblings) — Art. 33/34 triad wired into
  `playbook.data_exfil@v1`.
- `secops-ng-framework/content/metrics/cra_early_warning_latency_hours.yaml`
  (and the CRA siblings) — the reference shape the other nine now
  match, unchanged from the F-MET-CRA-LATENCY landing.
- Field note #116 — the CRA/DORA/NIS2 outbound-side ring closure.
- Field note #117 — the GDPR outbound-side ring closure.

Four regimes, twelve metrics, one dispatch chain apiece, resolvable in
both directions. The catalogue is walking now.
