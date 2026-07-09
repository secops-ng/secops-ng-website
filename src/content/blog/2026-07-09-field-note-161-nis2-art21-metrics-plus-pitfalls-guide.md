---
title: "Field note #161 — NIS2 Art. 21 operational metrics triad lands in the catalogue, and the contributor pitfalls guide closes good-first-issue #197"
description: "Field note one hundred and sixty-one from the SecOps-NG Digital Commons. Two community-facing landmarks land in the same cycle: framework PR #752 adds three NIS2 Art. 21 operational-compliance metric definitions (a security-measure conformance KPI, an audit-finding remediation-lag KRI, and a cyber-awareness training-completion KPI) to content/metrics/, each with OCSF class binding, units, calculation method, playbook refs, and reference viz. Framework PR #753 lands a 'Common pitfalls when binding activity bodies' section on all three per-target threat_intel_ingest READMEs (n8n, Temporal, LangGraph), closing good-first-issue #197 and reducing friction for first-time contributors."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "g-06", "metrics", "kpi", "kri", "nis2", "nis2-art-21", "ocsf", "contributor-experience", "good-first-issue", "threat-intel-ingest", "digital-commons", "field-note-161"]
---

Field note one hundred and sixty-one. Two landings in
the same cycle, aimed at two different audiences in the
commons.

Framework PR #752 adds a NIS2 Art. 21 operational-
compliance metric triad to `content/metrics/`. Framework
PR #753 lands the contributor pitfalls skeleton on the
three `threat_intel_ingest` per-target READMEs and closes
good-first-issue #197. One is for the operator running
dashboards; the other is for the practitioner opening
their first PR.

## The metrics triad — NIS2 Art. 21 as numbers, not just prose

Playbooks discharge an obligation. Metrics tell you
whether the discharge is actually happening. PR #752
adds three definitions under `content/metrics/`, each
with the same structural fields the catalogue already
carries: OCSF class binding, units, calculation method,
playbook refs, and a reference visualisation.

- **`kpi.nis2_security_measure_conformance_rate`** — the
  headline conformance-posture KPI for NIS2 Art. 21(2).
  Ratio of implemented risk-management measures to the
  measures in scope for the entity, sampled over a
  reporting window. Binds to the OCSF compliance class,
  ships with a stacked-bar reference viz, and names the
  playbook refs it draws its evidence from.
- **`kri.nis2_audit_finding_remediation_lag`** — the
  audit-side KRI. Time-to-close on findings raised by
  internal or external audits against the Art. 21
  measures. Days-open distribution as the reference
  viz; the playbook refs point at the incident and
  vulnerability workflows that carry the remediation
  primitives.
- **`kpi.nis2_cyber_awareness_training_completion_rate`** —
  the people-security KPI. Completion rate on the
  training cycles that discharge Art. 21(2)(g). Binds to
  the training-programme OCSF class, pairs cleanly with
  the `cyber_hygiene_training` playbook that shipped in
  field note #159, and carries a per-cycle completion-
  curve reference viz.

Each definition is a `content/metrics/*.yaml` file with
the full schema the catalogue enforces. An operator can
drop the calculation into a query engine, wire the
reference viz into a dashboard, and read the result
against the NIS2 article the metric is bound to. The
playbook refs make the trace bidirectional: from a
metric back to the workflow that produces the evidence,
from a workflow forward to the metric that reads it.

## The pitfalls guide — first PRs stop being a discovery exercise

PR #753 is docs-only, and that is the point. Every
`threat_intel_ingest` per-target README (n8n, Temporal,
LangGraph) picks up a new `## Common pitfalls when
binding activity bodies` section. Rate-limiting,
idempotency keys, credential hygiene pointers, and the
per-target gotchas that a contributor would otherwise
discover the hard way by opening a PR against the wrong
edge-case.

The pattern is symmetric across the three targets:

- **n8n** — the webhook trigger's retry semantics, the
  credential-store binding for the intel-feed API key,
  the deduplication expression on the ingest node.
- **Temporal** — activity idempotency via a
  deterministic key, the rate-limiter policy on the
  activity, and the workflow-versioning gotcha when the
  intel-feed schema shifts.
- **LangGraph** — the state-machine dedup on the ingest
  node, the credential injection surface, and the
  retry-with-backoff on the transient-failure edge.

Good-first-issue #197 had asked for exactly this: a
place where a first-time contributor can read the
edge-cases before they run into them. PR #753 closes
the issue and lands the skeleton three-way. The follow-
on issues that build on it (deeper worked examples per
gotcha, cross-links into the primitives library) are
now scoped against a section that exists.

## Why the two land together

Different surfaces, same maturity signal. The metrics
catalogue is the operator-side artifact — the numbers
someone in a SOC or a compliance function reads against
NIS2 Art. 21. The pitfalls guide is the contributor-side
artifact — the on-ramp someone opening their first PR
reads before they touch the tree. Both closed in the
same cycle. Both without commercial framing. Both
under the same Digital Commons voice: practitioners
shipping tools for practitioners.

## The G-04 / G-06 signal

- **G-04 — KPI/KRI catalogue maturity.** Three NIS2
  Art. 21 metric definitions with OCSF class binding
  and playbook refs. The catalogue is now readable
  alongside the article: a compliance lead can walk
  from Art. 21(2) to the discharge playbook to the
  metric that measures the discharge, and back.
- **G-06 — contributor adoption.** A good-first-issue
  closed with a pitfalls skeleton that sits on all
  three compile-target READMEs. First-time contributors
  can now read the edge-cases before they discover
  them the hard way.

## Where to look

- **Framework repo:**
  - `content/metrics/kpi.nis2_security_measure_conformance_rate.yaml`
    — the Art. 21(2) conformance-posture KPI.
  - `content/metrics/kri.nis2_audit_finding_remediation_lag.yaml`
    — the audit-lag KRI.
  - `content/metrics/kpi.nis2_cyber_awareness_training_completion_rate.yaml`
    — the training-completion KPI, paired with the
    `cyber_hygiene_training` playbook.
  - `content/playbooks/threat_intel_ingest/examples/{n8n,temporal,langgraph}/README.md`
    — the new `## Common pitfalls when binding
    activity bodies` section on each target.

The catalogue now carries three more NIS2 Art. 21
numbers an operator can drop into a dashboard, and the
contributor on-ramp for `threat_intel_ingest` carries
the edge-cases someone would otherwise discover the
hard way.
