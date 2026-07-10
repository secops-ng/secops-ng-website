---
title: "Field note #173 — G-04 threat-intelligence pair lands: indicator ingestion-rate KPI and stale-IoC ratio KRI close the last operator-facing gap on the NIS2 Art. 23 / DORA Art. 19 information-sharing surface"
description: "Field note one hundred and seventy-three from the SecOps-NG Digital Commons. Framework PR #783 (F-MET-G04-THREATINTEL SKELETON) and PR #784 (CORE) land two new YAML metric definitions under content/metrics/: kpi.threat_intel_indicator_ingestion_rate@v1 (target ≥100 admitted indicators per rolling hour, bound to the playbook.threat_intel_ingest@v1 admission step and the OCSF Detection Finding / Security Finding classes 2004 / 2001) and kri.threat_intel_stale_ioc_ratio@v1 (warn >0.10, alert >0.20, breach >0.35, rolling 7-day window). Regulatory anchors span NIS2 Art. 23 (early-warning and information-sharing), NIS2 Art. 26(2) (reporting-quality obligation on shared cyber-threat information), and DORA Art. 19 (information sharing among financial entities). Both metrics are wired into the nightly orphan-CI assertion lane (58/58 green)."
pubDate: 2026-07-10
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "kpi", "kri", "threat-intelligence", "threat-intel", "ioc", "stix", "taxii", "misp", "nis2", "nis2-art-23", "nis2-art-26", "dora", "dora-art-19", "ocsf", "digital-commons", "field-note-173"]
---

Field note one hundred and seventy-three.
Framework PR #783 (F-MET-G04-THREATINTEL
SKELETON) and PR #784 (CORE) land two sibling
metric definitions under `content/metrics/`:

- `kpi.threat_intel_indicator_ingestion_rate@v1` —
  the aggregate throughput of normalised
  threat-intelligence indicators the operator's
  ingest lane admits to the internal indicator
  surface over a rolling one-hour window,
  higher-is-better with an unscoped catalogue
  target at `≥ 100` admitted indicators per hour.
- `kri.threat_intel_stale_ioc_ratio@v1` — the
  share of the operator's active indicator-of-
  compromise surface whose last-refresh timestamp
  has aged past the freshness horizon the
  operator's declared feed-refresh policy sets.
  Lower-is-better residual-risk indicator with
  warn at `>0.10`, high at `>0.20`, breach at
  `>0.35`. Rolling seven-day window.

Two new YAML definitions, two committed reference
visualisations, two OCSF class bindings, and both
metrics wired into the nightly orphan-CI assertion
lane on merge — the CI run on PR #784 CORE closed
green on 58 / 58 checks.

## Why threat-intel-operations, and why now

The G-04 catalogue tracks operator-readable
KPI/KRI pairs across the NIS2 Article 21(2)
risk-management-measure limbs and the broader
NIS2 / DORA / CRA information-sharing surface.
The identity/access-management pair closed the
last Article 21(2) limb on
[field note #172](/blog/2026-07-10-field-note-172-g04-identity-access-skeleton/).
Threat-intelligence operations is the adjacent
gap: an operator can hold every Article 21(2)
control primitive and still ship stale or empty
indicator feeds into detection and blocklist
propagation — the failure mode Article 23's
early-warning obligation and Article 26(2)'s
reporting-quality obligation both read against.

The question a supervisor asks on a NIS2
inspection is not "does the entity subscribe to
threat-intelligence feeds"; it is "does the entity
know its feeds are working, does it know they are
fresh, and can it produce, on examination, the
dated ratios that show both". DORA Article 19 asks
the same question of financial entities' voluntary
cyber-threat information-sharing arrangements. The
two metrics in this SKELETON give operators the
numbers to answer.

## `kpi.threat_intel_indicator_ingestion_rate@v1` — Art. 23 as a number

The KPI counts, for each rolling one-hour
evaluation window, the normalised threat-intel
indicators the shipped
`playbook.threat_intel_ingest@v1` starter
playbook's normalise-STIX-to-OCSF step emitted
onto the internal indicator surface where the
downstream confidence gate admitted the indicator
for propagation. Indicators dropped at the
above-confidence-threshold if-condition are
excluded from the count on purpose — the KPI
reads the admitted-throughput slice, not the
raw-pull slice.

- **Target:** `≥ 100` admitted indicators per
  rolling hour (community-recommended unscoped
  starting point; ENISA and MISP community
  guidance converge on the low-hundreds-per-hour
  range for a minimally-plural feed portfolio
  once TAXII poll cadences and dedup are
  stable). Zero-throughput hours are the failure
  signal this KPI is meant to surface — the
  value drops to zero when the pull, the
  normalisation, or the confidence gate stops
  emitting indicators onto the internal surface.
- **Bindings:** the ingest lane's input contract
  is a STIX 2.1 bundle delivered over TAXII (not
  an OCSF event class — OCSF v1.3.0 does not yet
  expose a threat-intel ingest class), and the
  admission observation binds to the OCSF
  Security Finding (`class_uid: 2001`) and
  Detection Finding (`class_uid: 2004`) event
  classes the propagate-to-blocklist and
  activate-detection-rule steps emit downstream.
  The normalised indicators counted here are the
  ones later addressable by those two OCSF-bound
  emission steps.
- **Reference viz:** throughput headline
  (indicators-per-hour) with warn / high /
  breach threshold bands over a stacked-bar
  drill-down of admitted indicators sliced by
  upstream feed source, so operators can see
  which feed carries the ingest lane when
  another feed silently drops out.

## `kri.threat_intel_stale_ioc_ratio@v1` — Art. 26(2) as a number

The KRI reads the drift of the *active* indicator
surface, not the volume of the historical
archive. For each indicator observed as active
during the evaluation window (admitted by the
ingest lane and not explicitly retired), the KRI
classifies the indicator as stale when its
last-refresh timestamp has aged past the
freshness horizon the operator's declared
feed-refresh policy sets against that
indicator's upstream feed. The compile target
resolves the concrete per-feed freshness horizon
against the operator's feed registry.

Two design calls make the number honest:

1. Explicitly retired indicators drop out of the
   denominator. The KRI does not conflate a
   deliberate retirement with a drift into
   staleness — the numerator is drift, the
   denominator is the active surface.
2. Indicators admitted inside the current
   freshness horizon are counted as fresh even
   when no subsequent refresh has arrived; their
   first-admission timestamp anchors the
   freshness computation. A fresh indicator that
   arrived once and does not yet need re-pulling
   is not a stale indicator.

- **Thresholds:** warn `> 0.10`, high `> 0.20`,
  breach `> 0.35`. ENISA cyber-threat-
  intelligence practice notes and MISP community
  operational guidance converge on stale-IoC
  ratios in the single-digit percentile once
  feed-refresh cadences and indicator-expiry
  policies are disciplined against the
  operator's declared freshness policy.
- **Bindings:** OCSF Detection Finding
  (`class_uid: 2004`) anchors the stale
  classification to the same source-data shape
  the ingestion-rate KPI reads, so operators can
  read across from stale-ratio to the share of
  stale indicators still firing detections — the
  evidence-trail risk NIS2 Article 26(2) names.
- **Reference viz:** ratio-headline gauge with
  warn / high / breach bands over a stacked-bar
  drill-down of fresh-versus-stale counts sliced
  by upstream feed.

## Why the OCSF anchor matters for sovereignty

Both metrics resolve their calculation surface
against OCSF event classes — 2001 Security
Finding and 2004 Detection Finding — even though
the upstream ingest contract is STIX 2.1 over
TAXII. The catalogue definition names the class
and the input shape the formula reads; the
compile target resolves the concrete threat-
intel platform, feed registry, and detection
store on the operator's side.

That indirection is the sovereign-security move.
The catalogue definition does not name any
particular threat-intel platform, any particular
national CSIRT feed, any particular sector ISAC,
any particular vendor blocklist. An operator on
a European MISP instance, an operator on a
self-hosted STIX / TAXII lane, and an operator
on a US-hyperscaler threat-intel platform all
read the same aggregate throughput and the same
freshness ratio against the same OCSF class
shape — the metric is portable across the
threat-intel substrate, and the operator retains
the freedom to swap the substrate without
re-arguing either number with a competent
authority.

That freedom matters most on the Article 23
early-warning surface: an entity that treats its
threat-intel plumbing as sovereign infrastructure
carries the early-warning obligation as an
operator property, not as a vendor-managed
service. When the reporting clock trips, the
evidence is the dated OCSF-shaped ratio on the
operator's own dashboard.

## Where the G-04 catalogue stands now

The threat-intel-operations pair extends the
G-04 catalogue's coverage across the NIS2 /
DORA information-sharing surface. The catalogue
now carries operator-readable numbers across:

- Vulnerability-management — Art. 21(2)(e)
- Supply-chain security — Art. 21(2)(d)
- Business continuity and backup — Art. 21(2)(c)
- Incident-handling — Art. 21(2)(b)
- Cryptography and encryption — Art. 21(2)(h)
- Identity and access management — Art. 21(2)(i)/(j)
- Threat-intelligence operations — Art. 23 + Art. 26(2), DORA Art. 19

Plus the agentic-security cross-regime triad
covered in
[field note #160](/blog/2026-07-09-field-note-160-agentic-metrics-eu-ai-cybersec/)
and the NIS2 Article 21 metrics pack covered in
[field note #161](/blog/2026-07-09-field-note-161-nis2-art21-metrics-plus-pitfalls-guide/).
G-04 advances against the ≥40-definitions
target for Q4 2026.

## Where to find it

- Framework repository:
  <https://github.com/secops-ng/secops-ng-framework>
- KPI definition:
  `content/metrics/threat_intel_indicator_ingestion_rate.yaml`
- KRI definition:
  `content/metrics/threat_intel_stale_ioc_ratio.yaml`
- Reference visualisations:
  `content/metrics/threat_intel_indicator_ingestion_rate.viz.md`,
  `content/metrics/threat_intel_stale_ioc_ratio.viz.md`
- Companion playbook:
  `content/playbooks/threat_intel_ingest.yaml`
  (`playbook.threat_intel_ingest@v1`)

Read the YAML, wire the OCSF class bindings into
the detection store and the threat-intel
platform already in the stack, and the two
ratios drop into the existing dashboard next to
the other G-04 numbers. No vendor step, no
bespoke integration — the catalogue definition
is the contract, STIX 2.1 is the ingest shape,
and OCSF is the observation substrate.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- G-04 identity/access-management pair: [field note #172](/blog/2026-07-10-field-note-172-g04-identity-access-skeleton/)
- G-04 batch 3 context: [field note #162](/blog/2026-07-09-field-note-162-g04-batch3-vuln-supply-bcp/)
- NIS2 Art. 21 metrics pack: [field note #161](/blog/2026-07-09-field-note-161-nis2-art21-metrics-plus-pitfalls-guide/)
- Agentic-security KPI/KRI triad: [field note #160](/blog/2026-07-09-field-note-160-agentic-metrics-eu-ai-cybersec/)
- Roadmap goals: G-04 (KPI/KRI catalogue growth toward ≥40 definitions, Q4 2026).
