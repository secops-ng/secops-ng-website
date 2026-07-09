---
title: "Field note #162 — G-04 batch 3 lands: vulnerability_management, supply_chain, and business_continuity KPI/KRI pairs extend the catalogue across three NIS2 Art. 21 domains"
description: "Field note one hundred and sixty-two from the SecOps-NG Digital Commons. Framework PRs #755, #756, and #757 land three sibling KPI/KRI pairs under content/metrics/ — vuln_remediation_sla_compliance + unpatched_critical_cve_age_days (Art. 21(2)(e)), supplier_attestation_overdue_ratio + supply_chain_audit_coverage (Art. 21(2)(d)), and bcp_exercise_completion_rate + backup_integrity_failure_rate (Art. 21(2)(c)). The G-04 catalogue now carries operator-readable numbers across six operational domains, each with OCSF-bound calculation, playbook refs, and a committed reference visualisation."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "kpi", "kri", "nis2", "nis2-art-21", "vulnerability-management", "supply-chain", "business-continuity", "ocsf", "digital-commons", "field-note-162"]
---

Field note one hundred and sixty-two. Three sibling
framework PRs land in the same cycle, all under G-04:

- PR #756 — `vuln_remediation_sla_compliance` +
  `unpatched_critical_cve_age_days`, the
  vulnerability-management pair (Art. 21(2)(e)).
- PR #755 — `supplier_attestation_overdue_ratio` +
  `supply_chain_audit_coverage`, the supply-chain pair
  (Art. 21(2)(d)).
- PR #757 — `bcp_exercise_completion_rate` +
  `backup_integrity_failure_rate`, the
  business-continuity pair (Art. 21(2)(c)).

Six new catalogue entries in `content/metrics/`. Each is
one YAML definition, one committed `.viz.md` reference
visualisation, one OCSF class binding, one playbook_ref
back into the workflow that emits the evidence.

## The vulnerability-management pair — Art. 21(2)(e) as numbers

**`kpi.vuln_remediation_sla_compliance@v1`** reads the
ratio of CVE findings closed inside the per-severity SLA
window over the total closed-finding population.
Higher-is-better SLA-hit KPI, bound to the OCSF
Vulnerability Finding class (2002), sourced from the
`vulnerability_management` playbook's triage / decide /
verify / evidence steps. Reference viz: a ratio-headline
gauge with warn/high/breach bounds and a per-severity-
band stacked-bar drill-down.

**`kri.unpatched_critical_cve_age_days@v1`** reads the
P95 age in days of the still-open CRITICAL-severity CVE
finding population at the evaluation instant.
Lower-is-better residual-risk KRI on the same OCSF
class; bound to the same playbook. The pair reads the
NIS2 Art. 21(2)(e) vulnerability-handling limb end-to-
end — a KPI for the closure cadence and a KRI for the
tail the closure cadence has not yet caught.

## The supply-chain pair — Art. 21(2)(d) as numbers

**`kri.supplier_attestation_overdue_ratio@v1`** reads
the share of critical direct suppliers whose most-recent
attestation exceeds the operator's documented staleness
threshold (unscoped default: 90 days). Lower-is-better,
ratio-shaped counterpart to the raw-count sibling
`kri.supplier_attestation_staleness@v1` that already
shipped. OCSF API Activity (6003) as the source class.

**`kpi.supply_chain_audit_coverage@v1`** reads the
share of critical direct suppliers with at least one
audit-class supply-chain-evidence artifact on file in
the trailing 12-month window (`evidence_kind=audit`,
distinct from re-attestation-class evidence the sibling
`kpi.supply_chain_coverage@v1` counts).
Higher-is-better, on the same OCSF class.

Both bind to the `supply_chain_security` playbook's
emit step, and their `external_refs` anchor on NIS2
Art. 21(2)(d), DORA Art. 28, NIST SP 800-53 SR-3/SR-6,
ISO/IEC 27001 A.5.19, and ENISA. The two shapes — an
attestation-freshness residual-exposure KRI and an
audit-cadence coverage KPI — read distinct sub-limbs
of the same Art. 21(2)(d) surface without stepping on
the ratio-normalised siblings already on main.

## The business-continuity pair — Art. 21(2)(c) as numbers

**`kpi.bcp_exercise_completion_rate@v1`** reads the
ratio of scheduled BCP exercises completed on cadence
over the total scheduled exercises in a rolling
12-month window. Higher-is-better on-cadence-completion
KPI; source classes are OCSF API Activity (6003) for
the scheduler call plus Compliance Finding (2003) for
the close attestation. Bound to the
`business_continuity` playbook's activate-BCM-plan and
post-incident-review steps.

**`kri.backup_integrity_failure_rate@v1`** reads the
ratio of backup-verify jobs whose
validate-backup-integrity step reported an integrity
error over total attempts in a rolling 30-day window.
Lower-is-better residual-risk KRI, on the OCSF File
System Activity class (1001); bound to the
`backup_recovery` playbook's validate-backup-integrity
step. Complements the count-shape sibling
`kri.backup_integrity_failures@v1` and the pass-side
sibling `kpi.backup_integrity_pass_rate@v1`.

The pair reads both limbs the regulation names: the
periodic-testing limb of NIS2 Art. 21(2)(c) and DORA
Art. 11(6), and the backup-integrity limb that
DORA Art. 12 puts under supervisory review.

## Why the batch lands together

Three domains, one shape. Every one of the six entries
carries the same required fields the catalogue
enforces: `definition`, `units`,
`calculation_method`, `telemetry_refs` (OCSF class
binding), `playbook_refs` (workflow that emits the
evidence), `foundation_property` axis, and a
`reference_visualisation` companion `.viz.md` file
committed alongside the YAML. That committed
reference-viz requirement is what closes the G-04
Definition-of-Done on each entry, and it is what makes
the catalogue portable across compile targets — the
viz is a Mermaid rendering the operator can wire into
whatever dashboard surface they already run, not a
screenshot from someone else's tool.

The trace is bidirectional in the same way field note
#161's triad set it up: from a NIS2 article to the
discharge playbook to the metric that measures the
discharge, and back. An operator reading Art. 21(2)(c),
(d), or (e) can now walk directly from the article to
a portable number they can drop into a dashboard, and
walk back from the number to the workflow that
produces its evidence.

## The G-04 signal

The catalogue's coverage now extends end-to-end across
six operational domains — the agentic-security triad
from field note #160, the NIS2 Art. 21 operational-
compliance triad from field note #161, and the three
Art. 21(2)(c)/(d)/(e) pairs that land in this cycle.
Six domains, sixteen catalogue entries between them,
all OCSF-bound and playbook-linked. G-04's Q4-2026
target of forty definitions is now closer than it was
at cycle open, and the surface it lands on is
domain-balanced rather than clustered on one lane.

Every entry ships maturity `experimental`. The
community-recommended thresholds named in each YAML
are starting points, not ceilings — operators running
scoped variants against their own observed cadence
should re-baseline against local ground truth. That is
what the schema is for.

## Where the ring goes next

The G-04 batch cadence continues on the domains the
catalogue still under-covers: identity, cloud-
misconfiguration, and the DORA-side lanes that pair
with the ICT third-party-risk playbook. The pattern is
now established — one KPI + one KRI per operational
domain, each with an OCSF binding, a playbook_ref, and
a committed reference visualisation. Anyone can propose
one; the review criteria live in `GOVERNANCE.md` and
the `content/metrics/_schema` folder in the framework
repository.

For the operator reading this today: six new portable
metric definitions across three NIS2 Art. 21 domains,
each with a workflow behind it and a reference viz
beside it. That is where the ring is.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- The six catalogue entries live under `content/metrics/` in framework PRs #755, #756, and #757.
- Roadmap goal: G-04 (KPI/KRI catalogue maturity).
