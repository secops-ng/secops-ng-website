---
title: "Field note #164 — NIS2 Art. 20 management-body governance playbook lands (SKELETON): the cadence a CISO cannot discharge alone, portably compiled and audit-traceable"
description: "Field note one hundred and sixty-four from the SecOps-NG Digital Commons. Framework PR #762 lands the SKELETON of nis2_art20_governance — a CACAO v2 operational playbook for the NIS2 Directive Article 20(1)/(2) management-body cybersecurity governance cycle. Convene the management-body review on the operator's documented cadence, present Article 21(2)(a)–(j) risk posture, record management approval of cybersecurity risk-management measures, emit a dated OCSF API Activity (6003) governance-record artifact. CORE fans it into n8n, Temporal, and LangGraph next."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "playbook", "nis2", "nis2-art-20", "governance", "management-body", "board-oversight", "ocsf", "cacao", "digital-commons", "field-note-164"]
---

Field note one hundred and sixty-four. A framework PR
closes the SKELETON ring on a workflow that names a
piece of NIS2 the operational security surface tends to
under-serve: the governance-body cadence Article 20(1)
puts on the management body itself.

- PR #762 lands the SKELETON — the CACAO v2 playbook
  artifact for `nis2_art20_governance`, with the outbound
  overlay onto NIS2 Art. 20(1)/(2), the Art. 21(2)(a)–(j)
  measures surface it presents against, OSCAL PM-4 +
  CA-7, and OCSF API Activity (6003) as the
  governance-record emission class.

## Why Article 20 is its own workflow

The everyday phrase "NIS2 compliance" collapses two
different obligations that the directive keeps
carefully separate.

Article 21(2) lists the ten cybersecurity
risk-management measures — the operational surface a
security team owns. That's what the sibling
`nis2_self_assessment` playbook rolls up: whole-Art.21
evidence, one artifact per cycle.

Article 20 is different. Article 20(1) puts the
approval of those risk-management measures on the
**management body** — not the CISO, not the security
function, not the audit lead. Article 20(2) then names
the training obligation on that same body. The
governance-body axis is a distinct discipline, with a
distinct evidence shape.

An operator inside the NIS2 perimeter needs both
workflows discharged. This SKELETON is the one that
names the management-body cadence explicitly, so the
governance record is separable from the operational
posture roll-up.

## The workflow, in one arc

`nis2_art20_governance` reads the four operational
steps an operator runs each governance cycle:

1. **Convene the management-body cybersecurity
   review.** The playbook fires on the operator's
   documented cadence — quarterly, semi-annually,
   annually, whatever the operator committed to. The
   cadence itself is the input; the playbook does not
   prescribe it.
2. **Present Article 21(2)(a)–(j) risk posture and
   compliance status.** The ten measures are named
   explicitly as an ordered presentation surface —
   risk-management policy, incident handling, business
   continuity, supply-chain security, vulnerability
   handling and disclosure, effectiveness assessment,
   cyber hygiene and training, cryptography,
   HR/access/asset management, and multi-factor
   authentication. The playbook reads the current
   posture per limb; nothing is mutated.
3. **Record management approval of cybersecurity
   risk-management measures.** Approval is captured as
   a structured decision — approving body identifier,
   approved-measures set, dissents if any, effective
   date. That's the Article 20(1) discharge.
4. **Emit the dated governance-record evidence
   artifact.** An OCSF API Activity (6003) event is
   emitted carrying the meeting identifier, the
   approving-body identifier, the ordered list of
   Article 21(2) limbs covered, the approval decision,
   and a stable pointer into the operator's evidence
   store. That artifact is the audit trail that Article
   20(1) reads against.

The playbook is read-only against the risk-posture
surface. The approval decision is a first-class
artifact of the workflow itself; the risk-management
measures being approved are not mutated by the
playbook — the measures live in `nis2_self_assessment`
and its downstream operational content.

## Regulatory anchors

Every step carries external references practitioners
running regulated environments will recognise:

- **NIS2** — Directive (EU) 2022/2555 Art. 20(1) on
  management-body approval of cybersecurity
  risk-management measures, and Art. 20(2) on the
  training obligation. The Art. 21(2)(a)–(j) measures
  are named explicitly as the presentation surface.
- **OSCAL** — PM-4 (Plan of Action and Milestones
  Process) and CA-7 (Continuous Monitoring), the
  control anchors for a documented, recurring
  governance cadence with dated approval.
- **OCSF** — API Activity (6003) as the emission class
  for the governance-record event, so the cycle is
  traceable in any OCSF-compliant SIEM/SOAR alongside
  the operational-security surface.

The refs are practitioner-useful, not marketing
material — an operator writing an audit narrative can
walk from Article 20(1) directly into the workflow
step that discharges it, and from the emitted
governance-record artifact back to the specific
management-body meeting that produced it.

## Distinct from the whole-Art.21 self-assessment

The catalogue already ships `nis2_self_assessment` —
the whole-Article-21 evidence roll-up covering all ten
measures at operational granularity. It is not the
same workflow.

- `nis2_self_assessment` reads the ten Article 21(2)
  measures per limb, aggregates evidence, and emits a
  posture snapshot. It is the security function's
  workflow.
- `nis2_art20_governance` runs on the management-body
  cadence, presents that posture snapshot to the
  approving body, and captures the Article 20(1)
  approval decision as its own emission. It is the
  governance-body's workflow.

The two are designed to compose: the self-assessment
snapshot is the natural input to the Article 20
presentation step. Operators who need both discharged
run the two workflows on their respective cadences and
get two distinct, dated, machine-readable artifacts.

## Where the ring goes next — CORE in progress

This field note names the SKELETON. CORE is in
progress and closes the ring the rest of the catalogue
runs on:

- **Three compile targets — n8n, Temporal, LangGraph.**
  The four-step arc fans out into each reference
  target: n8n as an operator-scheduled workflow with a
  presentation step, an approval-capture form, and an
  OCSF emission node; Temporal as a durable workflow
  with the cadence firing as a cron-triggered
  workflow, deterministic replay of the approval
  capture, and OCSF emission as a separate activity;
  LangGraph as an agentic graph with the presentation
  step, an approval-gated edge, and terminal-node
  emission.
- **Byte-parity golden tests.** The G-03 contract —
  the operator can pick the compile target that fits
  their sovereign-stack posture and get an artifact
  whose shape is stable across cycles.
- **Primitives.** The `management_body_approval` and
  `governance_record_emit` primitives are the two new
  reusable pieces this workflow contributes to the
  catalogue's primitive surface; other
  governance-body workflows further along the roadmap
  will compose against them.

For the operator reading this today: the SKELETON of
a portable, sovereignty-aware Article 20 governance
playbook is landed. The management-body cadence is
named as a first-class workflow, the four operational
steps are portable, the OCSF (6003) governance-record
emission is specified. CORE fans it into the three
compile targets next.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- The playbook lives at `content/playbooks/nis2_art20_governance/` in framework PR #762 (SKELETON).
- Sibling workflow: `content/playbooks/nis2_self_assessment/` (whole-Art.21 evidence roll-up).
- Roadmap goals: G-01 (content coverage) and G-02 (compile-target fan-out; CORE in progress).
