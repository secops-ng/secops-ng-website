---
title: "Field note #74 — the F-MET G-04 reference-visualisation catch-up wave: nine PRs across MTTR, CRA Article 14, per-scenario MTTD/MTTR, identity-lifecycle, regulator-notification SLA, coverage, remediation-throughput, and phishing-detection close the .viz.md sibling-file property across the executive-metrics catalogue"
description: "Seventy-fourth field note from the SecOps-NG Digital Commons: the F-MET executive-metrics lane opened in the previous note moves from exemplar to coverage. Nine PRs land cluster-by-cluster .viz.md siblings across eight families — MTTR remediation-latency, CRA Article 14 regulatory-reporting clocks, per-scenario MTTD/MTTR variants, identity-lifecycle (JML + identity-compromise containment), regulator-notification SLA, coverage (cloud posture, on-call schedule, threat-intel feed), remediation-throughput (corrective-action close-rate/overdue + patch dissemination), and phishing-detection (simulation click-rate + suppression rate). The committed reference-visualisation property the regression net defends is now structurally honoured across the catalogue."
pubDate: 2026-06-23
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-met", "metrics", "kpi", "kri", "g-04", "reference-visualisation", "viz-md", "mttr", "mttd", "cra", "article-14", "identity-lifecycle", "regulator-notification", "coverage", "remediation-throughput", "phishing-detection", "digital-commons", "audit-readable"]
---

The previous field note opened the F-MET executive-metrics lane on
the framework, named the `.viz.md` sibling-file convention with a
CORE-grade exemplar and three SKELETON entries against it, and
named the catch-up wave on `.viz.md` coverage as the next pass
behind the row — forty of the catalogue's forty-four entries did
not yet carry a committed sibling at the time of writing.

This note reads that catch-up wave landing. Nine PRs against the
framework move the property from one CORE exemplar + four
SKELETON entries to broad cluster-by-cluster coverage across the
catalogue — every cluster on the same exemplar contract, every
metric YAML carrying the `Reference visualisation:` paragraph the
regression net asserts, every sibling renderable directly on the
public repo surface.

## What landed in this window

Nine PRs against the framework, all merged to `main`. Each
follows the cluster pattern set by PR #449 — chart-kind +
headline-figure annotation, in-tree Mermaid reference rendering,
threshold-band table pointing back at the catalogue YAML as
source of truth, OCSF source-data-shape section back-referencing
the YAML's `measurement.inputs` and `playbook_refs`, and an
honest deferral where no unambiguous OCSF class covers the
intersection at the catalogue level.

### MTTR remediation-latency cluster (PR #450)

[PR #450](https://github.com/secops-ng/secops-ng-framework/pull/450)
lands sibling `.viz.md` artifacts for the MTTR remediation-latency
family: `kpi.mttr_critical@v1`, `kpi.mttr_containment@v1`, and
`kpi.mttr_phishing_triage@v1`. The unscoped baseline pins the
band geometry; the scoped variants inherit threshold shape from
`kpi.mttr_critical@v1`. The MTTR / MTTD pair now closes as the
detection-and-remediation latency surface on the same `.viz.md`
contract.

### CRA Article 14 regulatory-reporting clock cluster (PR #451)

[PR #451](https://github.com/secops-ng/secops-ng-framework/pull/451)
lands sibling viz artifacts for the four CRA Article 14
regulator-notification on-time-rate KPIs:
`cra_early_warning_on_time` (Art. 14(1), 24h),
`cra_notification_72h_on_time` (Art. 14(2), 72h),
`cra_severe_incident_on_time` (Art. 14(3), 24h / 72h / 1mo
chain), and `cra_final_report_on_time` (Art. 14(2), 14d). Chart
contract: per-notification horizontal bars on
`dispatch_margin_minutes` with a zero-line on-time predicate and
the ratio headline against the active-case population.

### MTTD per-scenario detection-latency cluster (PR #452)

[PR #452](https://github.com/secops-ng/secops-ng-framework/pull/452)
closes the per-scenario MTTD family — `mttd_cloud_misconfig`,
`mttd_exfil`, `mttd_identity_compromise`, and
`mttd_threat_intel_indicator` — by landing sibling viz artifacts
on the same contract the unscoped baseline established. The
catalogue now carries every MTTD entry with a committed
reference visualisation, threshold-band geometry inherited from
the unscoped baseline.

### MTTR per-scenario remediation-latency cluster (PR #453)

[PR #453](https://github.com/secops-ng/secops-ng-framework/pull/453)
mirrors PR #452 on the remediation side: sibling viz artifacts
land for `mttr_blocklist_propagation`, `mttr_cloud_misconfig`,
and `mttr_on_call_ack`. The per-scenario MTTR family closes on
the same contract as the unscoped baseline, with band geometry
inherited from `kpi.mttr_critical@v1`.

### Identity-lifecycle cluster (PR #454)

[PR #454](https://github.com/secops-ng/secops-ng-framework/pull/454)
lands sibling viz artifacts for the JML + identity-compromise
containment family: `kri.joiner_to_provisioned_time@v1`,
`kri.leaver_to_revoked_time@v1`, and
`kpi.mttc_identity_compromise@v1`. The leaver-to-revoked KRI is
the audit-loud one — the longer the gap between a leaver event
and the revoke-of-access transition, the wider the
post-termination access window an operator carries on the
risk register.

### Regulatory-notification SLA cluster (PR #455)

[PR #455](https://github.com/secops-ng/secops-ng-framework/pull/455)
lands sibling viz artifacts for the operator-facing notification
SLA family: `kpi.notification_sla_compliance@v1`,
`kri.regulator_notification_overrun@v1`, and
`kpi.vuln_disclosure_sla@v1`. The trio reads against the
notification clocks across regimes — internal-comms SLA, the
regulator-side overrun KRI an audit asks about directly, and the
coordinated-vulnerability-disclosure intake SLA on the CVD
intake surface.

### Coverage cluster (PR #456)

[PR #456](https://github.com/secops-ng/secops-ng-framework/pull/456)
lands sibling viz artifacts for the coverage family:
`kpi.cloud_posture_coverage@v1`,
`kpi.coverage_on_call_schedule@v1`, and
`kpi.coverage_threat_intel_feed@v1`. Honest deferral on the
unscoped OCSF binding: the upstream tools that emit these (the
posture surface, the paging system, the threat-intel ingest
pipeline) are operator-tool decisions, not a single OCSF class —
the viz sibling names that deferral on the artifact rather than
invent a binding.

### Remediation-throughput cluster (PR #457)

[PR #457](https://github.com/secops-ng/secops-ng-framework/pull/457)
lands sibling viz artifacts for the remediation-throughput
family: `kpi.corrective_action_close_rate@v1`,
`kri.corrective_action_overdue@v1`, and
`kpi.patch_disseminated_on_time@v1`. The trio reads the audit
question on close-rate against an in-period denominator, the
overdue-count KRI against the active backlog, and the dissemination
on-time rate against the patch-window predicate. The playbook
step transition is the binding for the lifecycle / dispatch
event where no unambiguous OCSF class covers the intersection
at the catalogue level.

### Phishing-detection cluster (PR #458)

[PR #458](https://github.com/secops-ng/secops-ng-framework/pull/458)
lands sibling viz artifacts for the phishing-detection family:
`kpi.phishing_sim_click_rate@v1` and
`kri.phishing_suppression_rate@v1`. The simulation-platform
click telemetry stays operator-tool deferred — the phishing-triage
playbook step transition is the binding for the lifecycle event,
not an OCSF class.

## What this wave does to the catalogue floor

After this window, the `content/metrics/` surface carries:

- **Thirty-three committed `.viz.md` siblings on the catalogue
  floor** (up from four at the close of the previous note —
  the CORE exemplar plus the unscoped/phishing/ransomware MTTD
  trio). The catch-up wave moves the property from
  exemplar-with-regression-net to broad cluster coverage on the
  same exemplar contract.
- **Eight clusters closed on the `.viz.md` property** across the
  detection-and-remediation latency surface (MTTD baseline +
  per-scenario, MTTR baseline + per-scenario), the
  regulatory-clock surface (CRA Article 14 family), the
  notification-SLA surface (operator + regulator + CVD), the
  identity-lifecycle surface, the coverage surface, the
  remediation-throughput surface, and the phishing-detection
  surface.
- **The `.viz.md` sibling-file convention exercised against every
  shape the catalogue carries** — unscoped baselines, scoped
  variants inheriting band geometry, regulator-clock families
  on zero-line on-time predicates, coverage ratios with
  operator-tool deferred bindings, lifecycle KRIs on playbook-step
  bindings — and the regression net at
  `tests/content/test_metrics_reference_viz.py` extends across
  each new cluster by extending the allow-list tuple, not by
  re-authoring the test.

## Why this property matters at scale

A committed reference visualisation as a sibling to the catalogue
YAML closes a question an operator running this framework
otherwise has to answer twice: *which chart does this metric
read as on a board-facing dashboard, and against which thresholds?*
Without the sibling, the chart definition lives in whichever
dashboarding tool the operator picked first, and the audit-side
question "is the number on the dashboard the number the catalogue
defines?" requires a reconstruction pass.

With the sibling, the chart kind is committed alongside the
metric. The threshold-band overlay reads from the YAML and is
mirrored as a table on the artifact, so a divergence between the
catalogue and the dashboard surface becomes a visible diff in
the source tree, not a discovery during the audit. The Mermaid
block renders directly on the public repo surface, so a
contributor reading the catalogue sees the chart shape inline
without provisioning the operator's dashboarding tool first.

Across the catalogue floor, that means a regulated operator
compiling the framework into their orchestrator gets a board-facing
dashboard that is a compile target of the catalogue, not a
parallel artifact maintained against a separate convention.

## Honest framing on what stays open behind the row

The catch-up wave closes the property across eight clusters; the
remaining shape of the lane:

- **OCSF binding on the unscoped MTTD baseline.** The unscoped
  `kpi.mttd@v1` still defers a single OCSF Detection Finding
  binding behind the row — the upstream event shape an MTTD
  reads against varies by domain. A CORE follow-up sibling
  handles the binding behind the row, and the per-scenario
  variants inherit whatever lands there.
- **More GDPR operational KRIs.** The GDPR operational-KRI
  surface still carries three metrics behind
  `breach-notification-clock-margin` — `processor-attestation-freshness`,
  `data-minimisation-pressure`, and the Chapter V
  `transfer-path-freshness` overlay — opening as CORE and
  EXTEND legs behind the row.
- **Catalogue entries beyond this wave.** Eight clusters close
  on the `.viz.md` property; entries the catalogue carries
  outside those clusters open on the same exemplar contract on
  subsequent passes.
- **Nightly CI guard on telemetry refs + viz coverage.** The
  EXTEND sibling that asserts every `content/metrics/*.yaml`
  carries both a `telemetry_refs[]` binding and a committed
  `.viz.md` sibling lands behind the cluster wave, lifting the
  property from regression-net-on-allow-list to floor-wide CI.

The accurate claim on this row is: the F-MET executive-metrics
lane's `.viz.md` sibling-file convention is structurally exercised
across the catalogue floor, eight clusters close on the
property, every artifact mirrors the exemplar contract, and the
regression net extends cluster-by-cluster as the catch-up wave
walks the remaining surface.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the MTTR remediation-latency cluster lands at
  [PR #450](https://github.com/secops-ng/secops-ng-framework/pull/450);
  the CRA Article 14 regulatory-reporting clock cluster at
  [PR #451](https://github.com/secops-ng/secops-ng-framework/pull/451);
  the MTTD per-scenario detection-latency cluster at
  [PR #452](https://github.com/secops-ng/secops-ng-framework/pull/452);
  the MTTR per-scenario remediation-latency cluster at
  [PR #453](https://github.com/secops-ng/secops-ng-framework/pull/453);
  the identity-lifecycle cluster at
  [PR #454](https://github.com/secops-ng/secops-ng-framework/pull/454);
  the regulatory-notification SLA cluster at
  [PR #455](https://github.com/secops-ng/secops-ng-framework/pull/455);
  the coverage cluster at
  [PR #456](https://github.com/secops-ng/secops-ng-framework/pull/456);
  the remediation-throughput cluster at
  [PR #457](https://github.com/secops-ng/secops-ng-framework/pull/457);
  and the phishing-detection cluster at
  [PR #458](https://github.com/secops-ng/secops-ng-framework/pull/458).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-three that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community
  lane, the auto-generated roadmap.

One property closes this window. The `.viz.md` sibling-file
convention on the F-MET executive-metrics lane moves from one
CORE exemplar plus four SKELETON entries to broad cluster-by-cluster
coverage across the catalogue floor — eight clusters, thirty-three
committed siblings, every artifact mirroring the exemplar
contract, every metric YAML carrying the `Reference visualisation:`
paragraph the regression net asserts. The OCSF baseline binding
on the unscoped MTTD, the rest of the GDPR operational-KRI surface,
the catalogue entries beyond this wave, and the floor-wide CI
guard on telemetry refs + viz coverage open as the next passes
behind the row.
