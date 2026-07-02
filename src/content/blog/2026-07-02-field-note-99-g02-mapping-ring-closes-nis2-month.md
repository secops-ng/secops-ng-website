---
title: "Field note #99 — the mapping ring closes: 27/27 playbooks carry regulatory overlays, on the eve of NIS2 enforcement"
description: "Ninety-ninth field note from the SecOps-NG Digital Commons: the last outbound regulatory-mapping overlay lands, closing the G-02 ring at 27/27 shipped CACAO v2 playbooks. Alert triage — the most operationally-active workflow in a SOC — was the final gap, and it lands in the same window July 2026 became the NIS2 Article 21 enforcement month. Every shipped playbook now carries OSCAL control anchors, MITRE D3FEND references, OCSF class bindings, and EU regulatory clause references in one per-playbook mappings.yaml an operator can query programmatically."
pubDate: 2026-07-02
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-02", "regulatory-mapping", "alert-triage", "nis2", "dora", "cra", "gdpr", "oscal", "d3fend", "ocsf", "cacao", "digital-commons"]
---

July 2026 is the NIS2 Article 21 enforcement month. It is the
calendar this project has been rowing toward since the first
commit — the hard deadline the European Union set for essential
and important entities to run structured cybersecurity risk
management with an evidenced control basis. The month arrives, and
the ring closes.

Twenty-seven CACAO v2 playbooks ship on the catalogue. As of
[PR #580](https://github.com/secops-ng/secops-ng-framework/pull/580),
merged to `main` in the same window as this note, all twenty-seven
carry an outbound regulatory-mapping overlay. G-02 on the published
roadmap — 100% mapping coverage across shipped playbooks — reaches
the ring-closed state. Alert triage was the last gap; it is closed
now, and closed on the operationally-noisiest workflow in a SOC.

## What landed in this window

[PR #580](https://github.com/secops-ng/secops-ng-framework/pull/580)
adds `content/playbooks/alert_triage/mappings.yaml` and closes the
inbound wire on `content/mappings/nis2/article-21-2-b.yaml`. In
one file, the alert-triage playbook now declares:

- **OSCAL control anchors** — IR-4 (Incident Handling) and SI-4
  (System Monitoring) as the primary NIST SP 800-53 Rev. 5
  references, IR-5 (Incident Monitoring) on the priority-routed
  timeline signals, IR-4(4) (Information Correlation) on the
  suppression branch. These are the language auditors already
  speak — one file per playbook, no spreadsheet remapping in the
  audit engagement.
- **MITRE D3FEND references** — D3-IRA, D3-UBA, D3-NTA per step
  (ingest, enrich, suppress, classify, priority-one response).
  Defensive-technique anchors in the taxonomy defenders already
  use.
- **OCSF class bindings** — Detection Finding (class_uid 2004)
  as the primary consumed class, with Authentication / Account
  Change / API Activity as enrichment-side consumers. No emitted
  class on this playbook: escalation to a downstream
  typed-incident playbook carries that responsibility, which the
  overlay documents explicitly.
- **NIS2 clause reference** — Article 21(2)(b) as the primary
  clause (logging, detection, triage). The inbound wire on the
  clause file is closed in the same PR, so the graph resolves in
  both directions.

DORA and CRA are intentionally empty on this overlay, and that is
documented in the file. Alert triage on its own is sub-threshold
for DORA Article 18 major-classification; the four downstream
typed-incident playbooks (identity compromise, ransomware
containment, data exfil, incident management) carry the DORA
weight on their own overlays. CRA product-side obligations run on
the vulnerability-intake surface, not on triage. The overlay is
honest about what it does and does not anchor.

## The ring, closed

Twenty-seven of twenty-seven shipped playbooks carry an outbound
`mappings.yaml`. The G-02 counting condition on the published
roadmap is met.

Coverage state after this window:

- **Twenty-seven playbooks shipped** on the framework catalogue.
- **Twenty-seven outbound mapping overlays present** — 100%.
- **NIS2 Article 21 clauses** are wired in both directions on
  every shipped playbook that reads against them; the graph
  resolves both ways.
- **DORA Articles 17, 18, 24** carry inbound `playbook_refs`
  arrays on every clause that has one; the DORA-heavy playbooks
  each declare their outbound anchors.
- **CRA Article 13** carries inbound refs on every applicable
  vulnerability-handling playbook.
- **GDPR reads** land where they belong (data-exfil surfaces
  primarily); other playbooks stay silent on GDPR where the
  connection would be speculative rather than operational.

The ring closes on the operationally-noisiest workflow in a
security operations centre. Alert triage is the first playbook
every incoming signal touches. That every incoming signal is now
tied to an OSCAL control, a D3FEND technique, an OCSF schema, and
a NIS2 clause — in the same file, machine-readable, both
directions of the graph closed — is the difference between "we do
detection" and "we do detection, and here is the audit trail."

## What an overlay actually gives you

Per shipped playbook, in one queryable file:

1. **OSCAL control anchors.** NIST SP 800-53 Rev. 5 references
   the playbook contributes evidence toward. The language auditors
   speak. Anchored to specific per-step controls, not vague
   family-level gestures.
2. **MITRE D3FEND defensive-technique references.** What the
   playbook actually *does*, in the taxonomy defenders already
   use for defensive-side reasoning.
3. **OCSF class bindings.** The event shapes the playbook consumes
   and emits, in the Open Cybersecurity Schema Framework the
   detection-engineering community is standardising on. Machine
   readable. Byte-parity checkable across compile targets.
4. **EU regulatory clause references.** NIS2 articles, DORA
   articles, CRA articles, GDPR clauses where relevant — with
   directionality declared. Outbound: which clauses this playbook
   contributes evidence toward. Inbound (on the clause file):
   which playbooks contribute evidence to this clause. The graph
   resolves both ways, so an auditor can walk it from either
   direction.

An operator can query this programmatically. Compliance stops
being a spreadsheet exercise and becomes something a workflow
engine can reason about. That was the shape G-02 committed to
holding, and it is the shape the ring closes on.

## NIS2 specifically, on enforcement month

Every shipped playbook now carries at least one NIS2 clause
anchor. Alert triage wires into Article 21(2)(b) (logging and
detection). Ransomware containment and identity compromise wire
into Article 21(2)(c) (incident handling). Backup and recovery
wire into 21(2)(d). Vulnerability intake wires into 21(2)(e).
Cyber-hygiene training wires into 21(2)(g). Access-control
playbooks wire into 21(2)(i). Encryption-adjacent surfaces wire
into 21(2)(h).

An operator running SecOps-NG playbooks against an in-scope
estate can walk the graph either way: from a specific Article 21
clause to the playbooks contributing evidence toward it, or from
a running playbook to the clauses it anchors. The evidence trail
is declared in-repo, versioned with the workflow, and readable by
both humans and machines.

This is what the project committed to build. On the month the
regulation goes hard, the artifact is on the shelf.

## Where the next work is

The ring closing on G-02 does not close the roadmap. Three other
lanes continue in the same shape:

- **G-04 — KPI/KRI catalogue.** One hundred and twenty-eight
  metrics ship today against the forty-metric floor declared on
  the published roadmap. That threshold cleared some time ago
  and the catalogue keeps growing window over window as
  OCSF-armed per-cluster metric waves land. The next lanes take
  the metric definitions through the same OCSF-binding shape the
  content clusters have followed.
- **G-03 — three-target parity.** The n8n, Temporal, and
  LangGraph reference compile targets continue to close on
  byte-parity goldens per playbook. Content stays
  framework-agnostic; compile targets remain three of three; the
  operator picks the one already running in their stack.
- **G-01 — cookbook coverage.** Twenty-two of twenty-seven
  shipped playbooks now carry a full operator-facing walkthrough
  under `docs/cookbook/`. Five gaps remain and continue to close
  on the same shape as prior waves.

The mapping ring closing is a step, not a destination. Every
playbook that ships from here forward comes with an outbound
overlay in the same file at the same time — that is the shape
the ring-closed state protects.

## The community-facing shape

The regulation exists. The infrastructure meets it. The ring
closes on the operationally-noisiest workflow in a SOC on the
month the deadline becomes real. That is what a Digital Commons
is supposed to do at a regulatory checkpoint: show up on time,
with the work done, in-repo, versioned, machine-readable, and
free for anyone in the commons to use.

Nothing about this note is a pitch. Nothing about the artifact is
sold. The mappings live in a public repository under a permissive
content licence, and the operator who uses them owes nothing to
the project for doing so. That is the whole point of the ring
closing on enforcement month rather than being announced as a
premium tier: the commons showed up.

Bring your own SIEM. Bring your own orchestrator. Bring your own
identity surface. Bring your own paging system. Bring your own
change-management surface. The playbooks compile onto n8n or
Temporal or LangGraph, the mappings resolve against your OSCAL
catalogue and your NIS2 clause graph, and the evidence trail is
walkable from both ends by anyone who cares to walk it.

## Honest framing on what stays open

Ring-closed is not done. The next windows keep closing:

- **Byte-parity goldens still cluster around the n8n reference
  target.** Temporal and LangGraph reference emitters land per
  playbook on the G-03 lane; the golden coverage on those targets
  keeps growing as each per-playbook parity closure lands.
- **OSCAL profile-completeness enforcement is declarative
  today.** The anchors are declared on every overlay; the
  profile-completeness check that verifies every declared anchor
  resolves against a shipped OSCAL catalogue runs on a follow-on
  lane rather than as a hard schema gate.
- **The DORA and CRA carve-outs on the alert-triage overlay are
  intentional and documented.** An operator reading the overlay
  will see the empty DORA and CRA sections and the YAML comment
  explaining which downstream playbooks carry the weight. That
  is the honest shape; the alternative (padding those sections
  with speculative anchors) would be worse.
- **GDPR coverage is intentionally narrow.** GDPR anchors land
  where they operationally belong (data-exfil surfaces, subject
  notification chains). Padding every playbook with a GDPR read
  would be a fake completeness. The current shape is the honest
  one.

The accurate claim on this wave: G-02 reaches the ring-closed
state on 27/27 shipped playbooks in the same window July 2026
becomes NIS2 enforcement month. The mapping graph resolves in
both directions on every clause that has a wired playbook. The
artifact is in-repo, versioned, and available under a permissive
content licence to anyone in the commons who wants to walk it.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the ring-closing overlay at
  [PR #580](https://github.com/secops-ng/secops-ng-framework/pull/580),
  merged to `main`. Outbound overlays live under
  [`content/playbooks/*/mappings.yaml`](https://github.com/secops-ng/secops-ng-framework/tree/main/content/playbooks).
  Inbound clause wires live under
  [`content/mappings/`](https://github.com/secops-ng/secops-ng-framework/tree/main/content/mappings).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-eight that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

The ring closes. The month arrives. The commons is on time.
