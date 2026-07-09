---
title: "Field note #168 — DORA Article 19 major-incident reporting playbook lands (SKELETON): the 4-hour / 72-hour / one-month reporting cycle, portably compiled and cross-regime-aware"
description: "Field note one hundred and sixty-eight from the SecOps-NG Digital Commons. Framework PR #769 lands the SKELETON of dora_major_incident_reporting — a CACAO v2 operational playbook for the DORA Chapter III major-ICT-related-incident reporting cycle a financial entity discharges to its competent authority under DORA Regulation (EU) 2022/2554 Article 19. Five operational steps — Art. 18 classify → initial (4h / 24h) → intermediate (72h) → final (one month) → close-and-archive — anchored on the Commission ITS content shape (2024/2956) and the Commission Delegated Regulation classification criteria (2024/1772). CORE fans it into n8n, Temporal, and LangGraph next."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "playbook", "dora", "dora-art-19", "dora-art-18", "incident-reporting", "financial-sector", "cacao", "nis2-art-23", "gdpr", "digital-commons", "field-note-168"]
---

Field note one hundred and sixty-eight. A framework PR
closes the SKELETON ring on a workflow the EU financial
sector has been discharging on paper and on private
runbooks for a year and a half: the three-milestone
reporting cycle DORA Article 19 puts on a regulated
financial entity every time an ICT-related incident is
classified as **major** under Article 18.

- PR #769 lands the SKELETON — the CACAO v2 playbook
  artifact for `dora_major_incident_reporting`, with the
  outbound overlay onto DORA Art. 19 (4)(a) / (b) / (c),
  Art. 18(1), the Commission ITS content shape
  (Implementing Regulation (EU) 2024/2956), and the
  Commission Delegated Regulation classification
  criteria (2024/1772). Cross-regime sibling references
  onto NIS2 Art. 23(4)(b) and GDPR Art. 33 are named at
  the mapping layer so the parallel-notification arc is
  visible from the artifact.

## Why Article 19 is its own workflow

DORA is live. The Regulation entered application on
17 January 2025 and the Chapter III reporting obligation
lands on every financial entity in scope — banks,
insurers, investment firms, payment institutions, and
the ICT third-party providers designated as critical.
The obligation is procedurally strict in a way NIS2
Art. 23 reporting is not, and the two are not
interchangeable.

Article 18 defines when an incident becomes reportable:
the classification decision that reads the incident
against the criteria Commission Delegated Regulation
(EU) 2024/1772 operationalises. Article 19 then defines
the reporting cycle that fires from that decision — a
distinct three-milestone arc, not one submission:

- **Initial notification** — as soon as possible, within
  **4 hours** of classification as major, and no later
  than **24 hours** from awareness. ITS content shape
  per Commission Implementing Regulation (EU) 2024/2956.
- **Intermediate report** — within **72 hours** of
  classification, or earlier if regular activities have
  recovered.
- **Final report** — no later than **one month** after
  the intermediate report. Root-cause analysis, final
  impact figures, remediation, lessons learned, action
  plan, residual-risk statement.

Three milestones, three separate clocks, three separate
submissions against the same ITS content shape, one
authority chain. Missing any one of them is a
regulatory finding. Collapsing them into a single
generic incident-response runbook is what tends to
break under supervisor examination — the audit trail
the regulation names is per-milestone, not
per-incident.

## The workflow, in one arc

`dora_major_incident_reporting` reads the five
operational steps a regulated financial entity runs
from the moment an ICT-related incident becomes a
candidate for major-incident reporting:

1. **detect-and-classify.** Evaluate the incident
   against the Art. 18 classification criteria
   (Commission Delegated Regulation (EU) 2024/1772) and
   emit the classification-decision record. On the
   not-major branch the notification chain
   short-circuits, but the dated decision is still
   emitted so the audit-evident chain is closed either
   way — the "we looked at it and decided it was not
   major" evidence is itself reportable-on-request.
2. **notify-authority-initial.** Package the initial
   notification against the ITS content shape
   (Commission Implementing Regulation (EU) 2024/2956)
   and dispatch to the operator's competent authority.
   Fires within 4 hours of classification as major /
   24 hours from awareness.
3. **notify-authority-intermediate.** Package the
   intermediate report against the ITS content shape
   and dispatch. Fires within 72 hours of
   classification, or earlier if regular activities
   have recovered.
4. **notify-authority-final.** Package the final report
   — root-cause analysis, final impact figures,
   remediation, lessons learned, action plan, residual-
   risk statement — and dispatch. Fires no later than
   one month after the intermediate report.
5. **close-and-archive.** Compose the dated cycle-
   archival record referencing the classification
   decision, the three submissions, the authority
   acknowledgements, and any cross-regime notification
   chains fired in parallel (NIS2 Art. 23, GDPR
   Art. 33-34). The archival record is the audit-
   evident cycle closure.

The playbook is the durable timekeeper. Each milestone
is a distinct step with its own deadline anchored on
the classification-decision timestamp — replay-safe,
dated, and per-submission auditable rather than
folded into a single incident-response invocation.

## The authority chain, as a compile-target input

The competent authority a financial entity files to is
the operator's sectoral supervisor — one of the three
European Supervisory Authorities (EBA, ESMA, EIOPA) via
the national competent authority (NCA) chain
prescribed by the operator's sector. The three ESAs
receive aggregated reporting from the NCAs; the
operator files to its NCA.

That authority chain is not hardcoded into the
playbook. It is a compile-target configuration input —
the operator's sectoral NCA endpoint, credentials, and
submission-channel binding — because operators
straddling multiple sectors or multiple Member States
have multiple chains, and the playbook has to compile
against each one identically. Naming the chain at the
config layer rather than the artifact layer is what
lets one SKELETON playbook serve a payment institution
under EBA-via-DNB and a MiFID investment firm under
ESMA-via-AFM without forking the content.

## When to invoke this vs the NIS2 lane

Most large EU financial entities are in scope of
**both DORA and NIS2 simultaneously**, and the two
regimes discharge parallel — not interchangeable —
notification obligations on the same underlying
incident against different authority chains:

- `playbook.dora_major_incident_reporting@v1` (this
  playbook) — DORA-flavoured lane. Fires on the Art. 18
  classification decision. Three milestones (4h/24h,
  72h, one month). Files to the ESA / NCA chain against
  the Commission ITS content shape.
- `playbook.incident_management@v1` (sibling) —
  NIS2-flavoured lane. Fires on the NIS2 Art. 23
  significant-incident threshold. Three milestones
  (24h early warning, 72h notification, one-month
  final). Files to the CSIRT / competent-authority
  chain.

On a dual-regime operator the two fire in parallel on
the same underlying incident. Where personal data is
involved, the GDPR Art. 33 / 34 breach-notification
chain fires as a third lane, discharged by the existing
breach-notification cluster (`data_exfil`,
`identity_compromise`, `ransomware_containment`,
`incident_management`). The three lanes are separate,
dated, and separately auditable — that is the
regulator-visible shape.

The mapping overlay names the cross-regime siblings
explicitly. The playbook does not itself fire the NIS2
or GDPR chain — invocation of the parallel lanes is
the operator's orchestration concern. What the artifact
gives back is a per-cycle audit trail that names the
parallel chains at the archival step, so a supervisor
reading the closure record can walk from a DORA
submission to its NIS2 / GDPR siblings without
inferring the relationship from prose.

## When to invoke this vs the DORA testing lane

`playbook.dora_tlpt_programme@v1` is the DORA
**Chapter IV** testing-programme discipline —
Art. 24 general testing requirements plus Art. 26
threat-led penetration testing, on a cadenced
programme. This playbook is the DORA **Chapter III**
reporting discipline — an incident-driven reporting
cycle on the Art. 19 milestones. Two separate
Chapters, two separate obligation surfaces, no
runtime touchpoint. Naming both under one "DORA
compliance" workflow is what an operator does on
day one and then unpicks under examination.

## Status and where the ring goes next

SKELETON. The CACAO v2 scaffold and the outbound
overlay (`mappings.yaml`) are populated. Per-target
compile examples
(`examples/{n8n,temporal,langgraph}/dora_major_incident_reporting/`),
byte-parity goldens
(`tests/examples/{n8n,temporal,langgraph}/dora_major_incident_reporting/`),
per-milestone submission-adapter bindings, competent-
authority notification-channel bindings, and any
per-cycle metrics (missed-milestone KRI, milestone-
on-time KPI) are owned by CORE and EXTEND sibling
cards queued behind this one.

The G-01 / G-02 goals it advances are the ones the
roadmap already names: content coverage against the
target of ≥ 25 CACAO v2 playbooks, and regulatory-graph
closure with DORA Art. 19 (4)(a)/(b)/(c) and
Art. 18(1) as primary anchors and NIS2 Art. 23(4)(b) +
GDPR Art. 33 named at the cross-regime edges.

For the operator reading this today: a portable
DORA Art. 19 major-incident reporting cycle,
CACAO v2, with the classification gate and the three
milestone clocks named at the artifact level rather
than in a runbook margin. The reporting arc is the
same shape whether the operator eventually compiles
it into n8n, Temporal, or LangGraph — that fanout
lands in the CORE ring next.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- The playbook lives at `content/playbooks/dora_major_incident_reporting/` in framework PR #769 (SKELETON).
- Roadmap goals: G-01 (content coverage) and G-02 (regulatory-graph closure).
