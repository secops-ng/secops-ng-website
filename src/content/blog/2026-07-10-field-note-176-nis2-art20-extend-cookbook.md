---
title: "Field note #176 — F-CACAO-NIS2-ART20 EXTEND ships: the practitioner cookbook for the NIS2 Article 20 management-body governance cycle is on main"
description: "Field note one hundred and seventy-six from the SecOps-NG Digital Commons. The F-CACAO-NIS2-ART20 EXTEND phase ships docs/cookbook/nis2_art20_governance.md — the operator walkthrough for the four-step management-body governance cycle (schedule → present → approve → log) that discharges NIS2 Article 20(1) approval of the Article 21 risk-management measures and Article 20(2) management-body training attestation, with auditable OCSF 6003 governance-record emission."
pubDate: 2026-07-10
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "playbook", "nis2", "nis2-art-20", "governance", "management-body", "cacao", "cookbook", "ocsf", "digital-commons", "field-note-176"]
---

Field note one hundred and seventy-six. The
project ships the EXTEND phase of
F-CACAO-NIS2-ART20 today. With it, the
nis2_art20_governance playbook family is now
complete on all four phases the catalogue owes
for a first-class regulatory anchor: SKELETON
(field note #164) put the four-step arc in
place, CORE-PRIMITIVES (#166) landed the
deterministic step bodies and OCSF 6003
governance-record emission, the ring-close and
three-target byte-parity milestone (#170) proved
the management-body cycle compiles identically
across n8n, Temporal, and LangGraph, and EXTEND
now hands the operator the cookbook that reads
the whole cycle end-to-end.

## What EXTEND ships

`docs/cookbook/nis2_art20_governance.md` in the
framework is a first-person practitioner
walkthrough of the management-body governance
cycle. It is companion documentation to the
`playbook.nis2_art20_governance@v1` CACAO v2
playbook and its three reference-target compile
examples. The cookbook covers:

- **When to reach for this playbook.** The
  management-body approval discipline the NIS2
  Article 20(1) obligation names on the
  governance-body axis, distinct from the
  whole-Article-21 evidence roll-up
  (`nis2_self_assessment`) and from the
  per-metric effectiveness snapshots (F-CP-06).
  The self-assessment composes the risk-posture
  the management body reads; this playbook
  records the management body's decision on that
  posture and closes the governance ledger.
- **The four-step cycle.** Schedule the
  management-body review on the operator's
  declared cadence; present the current Article
  21(2)(a)–(j) risk-posture to the management
  body; record the management-body approval,
  carrying the Article 20(2) training-completion
  attestation for management-body members; and
  emit the dated OCSF 6003 governance-record
  artifact that binds the cycle to auditable
  evidence.
- **Where each step lands in each reference
  target.** The walkthrough wires the shipped
  playbook through n8n, Temporal, and LangGraph
  and shows where each lifecycle stage lands in
  each compile output. The three targets are byte-
  parity by construction (the ring-close in field
  note #170 proved that contract); the cookbook
  is what turns byte-parity from a test-suite
  property into an operator-visible workflow.
- **The adapter surfaces the operator wires.**
  Governance-cadence catalogue, evidence-store
  read, management-body-decision record surface,
  training-completion attestation source, and
  evidence sink are declared as adapter-bound
  surfaces — the framework describes the shape,
  the operator wires it into whichever
  governance-body forum and evidence store their
  stack already runs.

## Why the walkthrough matters — the two Article 20 obligations, side by side

Article 20 is short in the text and load-bearing
in practice. It puts two distinct obligations on
the management bodies of essential and important
entities:

- **Article 20(1) — approval and oversight.**
  Management bodies approve the cybersecurity
  risk-management measures taken to comply with
  Article 21, oversee their implementation, and
  are held liable for infringements. This is not
  a downstream report the management body
  receives; it is a governance-body decision
  whose recording is a precondition for the
  Article 21 measures being in force.
- **Article 20(2) — mandatory training.**
  Members of the management body follow training
  on a regular basis to gain sufficient knowledge
  and skills to identify risks and assess
  cybersecurity risk-management practices, and
  to encourage the entity to offer similar
  training to all employees.

The playbook makes both first-class. The approval
step records the management-body decision on the
Article 21(2)(a)–(j) posture, and the same step
carries the Article 20(2) attestation for the
management-body members present — one recorded
decision, two obligations discharged with a single
piece of auditable evidence. The cookbook is what
explains that shape to an operator without them
having to reverse-engineer it from the CACAO
source.

## The evidence artifact — OCSF 6003, dated and machine-readable

The terminal step of the cycle emits a
governance-record artifact shaped against OCSF
6003. The record binds the management-body forum,
the review cadence anchor, the Article 21(2)
risk-posture the body reviewed, the management-
body decision (approval, conditional approval,
deferral, refusal), the training-attestation
roster for the members present, and the dated
timestamp that closes the cycle for the
supervisory-authority conversation. Because the
record is portable OCSF, it lands in whichever
SIEM or evidence store the operator already
runs — no bespoke schema for the governance-body
axis.

The point of the walkthrough is not documentation
for its own sake. It is what lets an operator
inside the NIS2 perimeter read one file, wire the
four adapter surfaces the playbook names into
their stack, and run a management-body cycle
whose approval decision is durable, restart-safe,
and auditable end-to-end — without leaving the
sovereign-stack posture they already ship on.

## What practitioners can do today

The EXTEND phase is on `main`. An operator inside
scope of NIS2 can already:

- Read `docs/cookbook/nis2_art20_governance.md`
  once and see, in one place, how the four-step
  governance cycle discharges Article 20(1) and
  Article 20(2) with a single dated evidence
  artifact.
- Pick the compile target that matches the stack
  they already run — n8n, Temporal, or LangGraph —
  and drop in the shipped
  `examples/{n8n,temporal,langgraph}/nis2_art20_governance/`
  reference output. Byte-parity across the three
  targets is a tested property, not a promise.
- Wire the five adapter surfaces (governance-
  cadence catalogue, evidence-store read,
  management-body-decision record surface,
  training-completion attestation source,
  evidence sink) into the governance-body forum
  and evidence store their operator stack already
  runs.
- Compose the playbook with `nis2_self_assessment`
  on the operator's declared self-assessment
  cadence: the self-assessment shapes the risk-
  posture the management body reads; this
  playbook records what the management body then
  decides.

## Roadmap posture

- **G-01 (content coverage).** Another playbook
  fully cookbook-documented end-to-end. The
  nis2_art20_governance family now closes on all
  four phases — SKELETON, CORE-PRIMITIVES, ring-
  close/three-target parity, and EXTEND cookbook.
- **G-02 (regulatory mapping).** NIS2 Article 20
  is anchored in the catalogue with a portable
  workflow shape, a machine-readable OCSF 6003
  evidence artifact, and an operator walkthrough
  that reads the two Article 20 obligations
  side-by-side.

The framing the commons cares about: Article 20
names the management body as a first-class actor
on the operator's cybersecurity control surface.
A Digital Commons that takes that framing
seriously does not paper over the governance-
body decision behind a slide deck. It ships the
approval discipline as portable content, wires it
into the three reference compile targets an
operator might already run, and hands the
operator a cookbook that reads the whole cycle
end-to-end.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- The playbook lives at `content/playbooks/nis2_art20_governance/playbook.cacao.json`.
- The operator cookbook: `docs/cookbook/nis2_art20_governance.md`.
- Reference-target compile examples: `examples/{n8n,temporal,langgraph}/nis2_art20_governance/`.
- Sibling walkthrough: `docs/cookbook/nis2_self_assessment.md` — the Article 21 evidence roll-up the management body reads before it approves.
- Prior field notes in the family: #164 (SKELETON), #166 (CORE-PRIMITIVES), #170 (ring closes / three-target byte-parity).
- Roadmap goals: G-01 (content coverage — nis2_art20_governance fully cookbook-documented) and G-02 (regulatory mapping — NIS2 Article 20 anchored). F-CACAO-NIS2-ART20: Shipped.
