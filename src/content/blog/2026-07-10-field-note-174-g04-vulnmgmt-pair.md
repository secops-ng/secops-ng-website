---
title: "Field note #174 — G-04 vulnerability-management pair lands: SLA compliance KPI and P99 long-tail KRI make NIS2 Art. 21(2)(e) an operator-readable ratio"
description: "Field note one hundred and seventy-four from the SecOps-NG Digital Commons. Framework PRs #756 and #787 land two paired vulnerability-management metric definitions under content/metrics/: kpi.vuln_remediation_sla_compliance@v1 (target ≥0.90, per-severity SLA windows Critical ≤7d, High ≤30d, Medium ≤90d, bound to OCSF Vulnerability Finding class 2002) and kri.vuln_critical_open_age_p99@v1 (target ≤14 days, long-tail companion to the P95 headline). Regulatory anchors span NIS2 Art. 21(2)(e) vulnerability handling and disclosure, and DORA Art. 9(4)(c) with JC RTS Art. 10 on ICT vulnerability and patch management for financial entities. The G-04 vulnerability-management domain now has both the compliance-view KPI and the tail-view KRI operators need to see the whole ageing distribution, not just its shoulder."
pubDate: 2026-07-10
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "kpi", "kri", "vulnerability-management", "nis2", "nis2-art-21", "dora", "ocsf", "digital-commons", "field-note-174"]
---

Field note one hundred and seventy-four. Framework
PRs #756 (F-MET-G04-BATCH3a) and #787
(F-MET-G04-VULNMGMT SKELETON) land two paired
metric definitions under `content/metrics/`:

- `kpi.vuln_remediation_sla_compliance@v1` — the
  ratio of triaged CVE findings closed inside the
  operator's documented per-severity SLA window on
  the vulnerability-management playbook.
  Higher-is-better, aggregate target `≥ 0.90`.
- `kri.vuln_critical_open_age_p99@v1` — the P99
  age in days of still-open CRITICAL-severity
  vulnerability findings at evaluation instant.
  Lower-is-better long-tail residual-risk
  indicator, target `≤ 14 days`.

Two YAML definitions, two reference visualisations,
one OCSF class binding shared across both, one
domain where the compliance headline and the tail
edge of the ageing distribution are now both
readable numbers.

## Why two metrics for one domain, and why they pair

A single ratio hides more than it reveals on the
vulnerability-management surface. An SLA-compliance
KPI held at 0.92 tells the operator that most
findings close on time — it says nothing about the
handful that do not. The findings that miss the SLA
tend to concentrate at the tail of the ageing
distribution, and the tail is where residual
exposure lives: a single Critical vulnerability
open past two SLA windows carries more
regulator-relevant risk than a hundred Medium
findings closed a day late.

The pair reads the same population from both ends.
The KPI reads the shoulder — did the triage →
decide-remediation → verify-remediation lane hit
its per-severity window on the aggregate. The KRI
reads the far tail — is there a small residual of
Critical findings that the compliance ratio does
not surface. Operators reading only the KPI can be
comfortably at 0.92 and still carry a P99 open-age
of forty-five days on Critical findings; operators
reading only the KRI lose the trend view of whether
the lane is functioning at all. Reading both, side
by side, is the point of the pair.

## `kpi.vuln_remediation_sla_compliance@v1` —
Art. 21(2)(e) as a number

The KPI reads the ratio of triaged CVE findings
closed inside the operator's documented
per-severity SLA window over all triaged CVE
findings closed in the evaluation window. Closure
covers both the verified-remediation path (fix
shipped, dated verification evidence recorded) and
the deterministic risk-acceptance path (accepted
exposure recorded on the operator's
posture-management surface). Accepted-risk closures
count against the denominator on purpose — a
documented exception is a closure the
vulnerability-handling policy owns, not a silent
adjustment that hides behind the aggregate.

- **Target:** `≥ 0.90` on the unscoped baseline;
  mature programmes typically hold the
  critical-severity band above 0.95 and the
  aggregate above 0.90 at steady state.
- **Per-severity SLA windows (community starting
  point):** Critical ≤ 7 days, High ≤ 30 days,
  Medium ≤ 90 days, Low ≤ 180 days. The catalogue
  entry does not author the operator's policy — it
  names the ratio shape the policy is measured
  against.
- **Bindings:** OCSF Vulnerability Finding (class
  2002) at both the triage-observation and
  remediation-close boundaries; bound to
  `playbook.vulnerability_management@v1` triage
  step, verify-remediation step, and the
  risk-acceptance branch.
- **Reference viz:** ratio-headline gauge with warn
  (`< 0.90`) / high (`< 0.75`) / breach (`< 0.50`)
  threshold bands over a stacked-bar drill-down of
  SLA-met versus overdue counts sliced by severity
  band.

## `kri.vuln_critical_open_age_p99@v1` — reading
the far tail

The KRI reads the P99 age in days of the still-open
CRITICAL-severity vulnerability finding population
at evaluation instant. Companion to the P95 headline
KRI (`kri.unpatched_critical_cve_age_days@v1`)
already in the catalogue, this indicator sits one
percentile further into the tail — the small
residual of Critical findings the P95 shoulder does
not surface and that are, in practice, the
population most likely to sit forgotten past the
operator's disclosure-and-handling window.

- **Target:** `≤ 14 days` — 2× the community
  starting point for the Critical SLA window. The
  bar is that even the far tail of open Critical
  findings should stay inside two SLA windows at
  steady state.
- **Thresholds:** warn `> 14`, high `> 30`, breach
  `> 60` days.
- **Bindings:** OCSF Vulnerability Finding (class
  2002) event stream against the still-open
  population; bound to
  `playbook.vulnerability_management@v1` triage and
  remediation-verification steps. The still-open
  set is defined by the absence of a
  remediation-verification evidence record — the
  same closure surface the KPI reads.
- **Reference viz:** age-histogram of the still-open
  Critical population with P95 and P99 marker lines
  overlaid, plus a P99 trend-line panel over the
  rolling window so the operator can see whether
  the tail is stretching or contracting.

## Why the OCSF anchor matters for sovereignty

Both metrics resolve their calculation surface
against a single OCSF class — Vulnerability Finding
2002. The catalogue definition names the class and
the input shape the formula reads; the compile
target resolves the concrete vulnerability scanner,
asset inventory, and remediation-tracking store on
the operator's side.

That indirection is the sovereign-security move.
The catalogue definition does not name any
particular vulnerability scanner, any particular
patch-management platform, any particular vendor.
An operator on a European scanner, an operator on a
self-hosted CVE-scanning pipeline, and an operator
on a US-hyperscaler-native vulnerability service
all read the same two ratios against the same OCSF
class shape — the metrics are portable across the
scanning substrate, and the community retains the
freedom to swap the substrate without re-arguing
the numbers with a competent authority.

## Regulatory grounding

- **NIS2 Article 21(2)(e)** — the maintenance limb
  covering vulnerability handling and disclosure.
  The KPI reads the operator-side handling cadence;
  the KRI reads the residual exposure the handling
  cadence has not yet cleared.
- **DORA Article 9(4)(c)** — the ICT risk
  management framework's protection and prevention
  measures, requiring financial entities to
  identify and remediate vulnerabilities.
  Cross-anchored via Commission Delegated
  Regulation (EU) 2024/1774 JC RTS Article 10
  (vulnerability and patch management procedures).
  Financial entities operating under DORA with
  regulator-declared per-severity SLAs set stricter
  scoped variants of the KPI in their own
  catalogues.
- **ISO/IEC 30111** — vulnerability handling
  processes; the international-standard shape the
  catalogue entries render against.

## Where the G-04 catalogue stands now

The vulnerability-management domain now carries
both the compliance-view KPI and the tail-view KRI.
Combined with the identity/access-management pair
that landed in [field note #172](/blog/2026-07-10-field-note-172-g04-identity-access-skeleton/),
the threat-intelligence pair in [field note
#173](/blog/2026-07-10-field-note-173-g04-threatintel-pair/),
and the batch-3 domain coverage from [field note
#162](/blog/2026-07-09-field-note-162-g04-batch3-vuln-supply-bcp/),
the G-04 catalogue advances against its
≥40-definitions target for Q4 2026 with
operator-readable numbers across every major
NIS2 Article 21(2) risk-management-measure limb.

## Where to find it

- Framework repository:
  <https://github.com/secops-ng/secops-ng-framework>
- KPI definition:
  `content/metrics/vuln_remediation_sla_compliance.yaml`
- KRI definition:
  `content/metrics/vuln_critical_open_age_p99.yaml`
- Reference visualisations:
  `content/metrics/vuln_remediation_sla_compliance.viz.md`,
  `content/metrics/vuln_critical_open_age_p99.viz.md`

Read the YAML, wire the OCSF Vulnerability Finding
class 2002 binding into the scanner and
remediation-tracking store already in the stack,
and the two ratios drop into the existing dashboard
next to the other G-04 numbers. No vendor step, no
bespoke integration — the catalogue definition is
the contract, and OCSF is the substrate.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- Threat-intelligence pair: [field note #173](/blog/2026-07-10-field-note-173-g04-threatintel-pair/)
- Identity/access pair: [field note #172](/blog/2026-07-10-field-note-172-g04-identity-access-skeleton/)
- G-04 batch 3 context: [field note #162](/blog/2026-07-09-field-note-162-g04-batch3-vuln-supply-bcp/)
- NIS2 Art. 21 metrics pack: [field note #161](/blog/2026-07-09-field-note-161-nis2-art21-metrics-plus-pitfalls-guide/)
- Roadmap goal: G-04 (KPI/KRI catalogue growth — ≥40 definitions, Q4 2026).
