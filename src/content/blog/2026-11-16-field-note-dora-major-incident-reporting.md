---
title: "Field note #XX — DORA major incident reporting playbook lands with per-cycle KPI/KRI metrics"
description: "Twenty-fifth field note from the SecOps-NG Digital Commons: the DORA major incident reporting playbook now declares and stamps its per-cycle KPI/KRI metrics across initial, intermediate, and final regulator notification steps."
pubDate: 2026-11-16
author: "The SecOps-NG commons"
tags: ["shipping-update", "dora", "kpi", "kri", "incident-reporting", "framework"]
---

The DORA major incident reporting playbook now declares and stamps its per-cycle KPI/KRI metrics across initial, intermediate, and final regulator notification steps. Operators can track statutory deadline compliance against Delegated Regulation (EU) 2025/301 Art. 5 bounds directly in compiled runtimes.

## What landed

- [PR #1069](https://github.com/secops-ng/secops-ng-framework/pull/1069) — DORA major incident reporting playbook with per-cycle KPI/KRI metrics. The playbook declares `kpi.notification_sla_compliance@v1`, `kri.regulator_notification_overrun@v1`, and `kpi.timeline_completeness@v1` across notification authority initial, intermediate, and final steps, measured against Delegated Regulation (EU) 2025/301 Art. 5 `due_at`.

## Why this matters for an operator

Operators running DORA-regulated organisations can now measure how close each report lands to its statutory wall. The playbook provides a structured compliance alignment across the three notification steps, enabling operators to track deadline compliance in real time rather than retrospectively.

## Where the artifacts live

- `content/` in `secops-ng-framework` — the DORA major incident reporting playbook with stamped KPI/KRI metrics keyed to framework primitives
- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework) — PR #1069 merged
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website) — this note and the ones that preceded it
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues, the kanban, the auto-generated roadmap

## The metrics property

Each step stamps what it measures, and every stamp is a subset of its step's `metric_refs`, which the playbook declares. The three metrics — `kpi.notification_sla_compliance@v1`, `kri.regulator_notification_overrun@v1`, and `kpi.timeline_completeness@v1` — give operators visibility into how each report aligns with its statutory deadline. Only the mirrored playbooks change, because refs don't reach the compiled bodies.

What remains is the continuing build-out of the DORA leg of the second axis, which will follow the same substrate shape.