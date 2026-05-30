---
title: "Field note #5 — portable playbooks meet runtimes: vuln-intake on n8n and Temporal, phishing-triage wired to regulators and OCSF"
description: "Fifth field note from the SecOps-NG Digital Commons: the vuln-intake CACAO playbook now ships with two reference compile targets — n8n and Temporal — and phishing-triage on the substrate side picks up regulatory control references and OCSF v1.4.0 telemetry bindings."
pubDate: 2026-05-30
author: "The SecOps-NG commons"
tags: ["shipping-update", "cacao", "n8n", "temporal", "vuln-intake", "phishing-triage", "ocsf", "nis2", "dora", "gdpr", "digital-commons"]
---

Field note #4 reported on substrate hardening: control references that
actually resolve, drift gated in CI, vuln-intake reaching CORE. This
wave is what that substrate is for. The portable artefacts start
showing up in the runtimes operators already run, and the next
playbook in line picks up the same regulatory and telemetry surface
the catalogue already exposes elsewhere.

## Same intent artefact, two runtimes

The vuln-intake CACAO v2 playbook is one file in the framework
repository. It describes intent: the steps, the state, the
regulator-notification deadlines from CRA Article 14, the handoffs.
It does not describe how those steps execute.

This wave ships two reference compile targets for that one artefact.

- A SKELETON-n8n reference example
  (PR [#113](https://github.com/secops-ng/secops-ng-framework/pull/113))
  lands as a `workflow.json` that mirrors the playbook one node per
  CACAO step. If you already run n8n, you can import it, point it at
  your scanner feed, and have a vuln-intake pipeline that respects the
  CRA notification chain without writing a custom workflow from scratch.
- A SKELETON-temporal reference example
  (PR [#114](https://github.com/secops-ng/secops-ng-framework/pull/114))
  lands as a `workflow.py` that mirrors the same playbook as a durable
  Temporal workflow. If your shop already runs Temporal, the
  early-warning / incident-report / final-report cadence becomes
  workflow state with timers and signals rather than a calendar
  reminder in someone's head.

The two reference examples are not two different playbooks. They are
the *same* playbook, compiled twice. That is what "framework-agnostic
content" looks like in practice: the intent is portable, the
operator picks the runtime they already operate.

LangGraph is the third declared compile target on the milestone. It
is not in this wave; expect it in a later note.

## Phishing-triage picks up the regulatory and telemetry surface

The other half of the wave is on the substrate side, on the next
playbook in line.

- CORE-controls for phishing-triage
  (PR [#110](https://github.com/secops-ng/secops-ng-framework/pull/110))
  wires NIS2 Article 21, DORA Article 17, and the GDPR breach-notification
  obligations into `playbook.cacao.json` as resolved `control_refs`.
  Because the cross-reference linter from the last wave now runs in
  CI, those identifiers are not just present in the file — they have
  to resolve against the in-repo catalogue index or the build fails.
- CORE-telemetry for phishing-triage
  (PR [#112](https://github.com/secops-ng/secops-ng-framework/pull/112))
  binds the playbook to OCSF v1.4.0 telemetry: `email_activity` (4009),
  `email_url_activity` (4012), and `file_activity` (1001). The
  `email_url_activity` rename mirrors the upstream OCSF v1.4.0
  schema change so the wire format on the way in matches what
  off-the-shelf email-security tooling actually emits.

The practical consequence is that any future compile target for
phishing-triage — n8n, Temporal, LangGraph, or a community contribution
to something else entirely — inherits the regulatory references and
the telemetry shape without anyone reaching back into the playbook to
re-author them. The substrate work is upstream of the runtime work.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the playbooks, the reference compile targets, the OCSF bindings,
  the resolved control references.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ones that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the kanban, the auto-generated roadmap.

If you run vuln-intake on n8n or Temporal today, the reference
examples are intended to be the shortest distance between your scanner
feed and a CRA-aware notification chain. If you run phishing-triage,
the substrate now carries the regulatory and telemetry surface for
you. If you would like to see the same treatment for a playbook that
is not yet in the catalogue, the kanban is the place to say so.

More soon, from the lanes.
