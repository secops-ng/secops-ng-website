---
title: "Field note #170 — NIS2 Article 20 governance ring closes: nis2_art20_governance CACAO v2 playbook now byte-parity across n8n, Temporal, and LangGraph, with the management-body cycle end-to-end auditable"
description: "Field note one hundred and seventy from the SecOps-NG Digital Commons. Framework PRs #765 (CORE-FANOUT) and #766 (CORE-GOLDENS) close the F-CACAO-NIS2-ART20 ring on top of the SKELETON (PR #762, field note #164) and CORE-PRIMITIVES (PR #764, field note #166). The nis2_art20_governance playbook — management-body approval, Art. 21(2)(a)–(j) oversight review, training-completion evidence, and OCSF API Activity (6003) governance-record emission — now compiles byte-parity to n8n, Temporal, and LangGraph, with golden tests holding every target deterministic against the CACAO v2 source. NIS2 Article 20 enforcement is active from July 2026; the artifact is portable, dated, and audit-evident today."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-03", "g-07", "playbook", "nis2", "nis2-art-20", "governance", "management-body", "board-oversight", "byte-parity", "goldens", "ocsf", "cacao", "n8n", "temporal", "langgraph", "digital-commons", "field-note-170"]
---

Field note one hundred and seventy. Two framework
PRs close the F-CACAO-NIS2-ART20 ring on top of the
scaffolding covered in
[field note #164](/blog/2026-07-09-field-note-164-nis2-art20-management-body-governance/)
and the deterministic step bodies covered in
[field note #166](/blog/2026-07-09-field-note-166-nis2-art20-core-primitives/).

- PR #765 (CORE-FANOUT) lands the three-target
  compile examples for `nis2_art20_governance` — one
  n8n workflow, one Temporal workflow, one LangGraph
  graph — generated from the same CACAO v2 source
  and the same four deterministic primitives.
- PR #766 (CORE-GOLDENS) lands the byte-parity golden
  tests across all three targets and flips the
  F-CACAO-NIS2-ART20 ROADMAP entry to Shipped. Every
  compile is held deterministic against the source,
  and every target emits the same OCSF API Activity
  class_uid 6003 governance-record shape.

The ring is closed. NIS2 Article 20 enforcement is
active from July 2026, and the commons now has a
portable, dated, per-cycle-auditable artifact you can
compile against your workflow engine of choice.

## What the playbook actually does

`nis2_art20_governance` names the Article 20(1)/(2)
management-body cadence as a first-class operational
workflow — not a policy PDF, not a calendar reminder,
but a CACAO v2 artifact that runs on your workflow
engine and emits an audit-evident record every cycle.

The four-step arc:

1. **Resolve the governance cycle** — read the
   operator's documented cadence (quarterly, annual,
   or per the entity's own governance rules) against
   the last recorded cycle and decide whether a new
   Article 20 review is due.
2. **Conduct the Art. 20 oversight review** —
   present the Article 21(2)(a)–(j) risk-management
   measures posture to the management body, with the
   corresponding OSCAL PM-4 / CA-7 anchors carried
   into the record.
3. **Record management-body approval** — capture the
   dated approval decision, the members present, and
   the Article 20(2) training-completion attestation
   for management-body members responsible for
   supervising cybersecurity risk-management.
4. **Emit the governance-record evidence** — write
   the OCSF API Activity (class_uid 6003) event that
   ties the cycle timestamp, the management-body
   decision, the reviewed measures posture, and the
   OSCAL anchors into a single archival record any
   OCSF-compliant SIEM or evidence store can accept.

Every step body is deterministic and replay-safe by
construction — the twenty-six unit tests shipped with
the CORE-PRIMITIVES ring hold each function against
its input contract. Re-running a cycle against the
same inputs produces byte-identical outputs, which is
the property a supervisor examination on prior
cycles needs.

## What byte-parity across three targets buys

CORE-FANOUT and CORE-GOLDENS together are the ring
that makes the artifact portable in the direction
that matters for a Digital Commons.

An operator running the workflow on n8n and an
operator running it on Temporal — and an operator
running it on LangGraph — all discharge the same
Article 20(1) cadence against the same measures
surface, emitting the same OCSF governance-record
shape into their evidence store. The compilation is
deterministic against a golden per target; a drift
in any compile output fails the golden and blocks
the merge.

The choice of orchestrator becomes a deployment
concern, not a compliance one. An operator adopting
the playbook today on n8n can migrate to Temporal or
LangGraph tomorrow without re-arguing NIS2
conformance with a competent authority. The artifact
is the compliance surface; the runtime is a swap.

## Why the timing is sharp

NIS2 Article 20 enforcement is active from July 2026.
The obligation is on the management body — not on
the security team the management body oversees — and
it does not discharge itself with an annual
training slide.

Article 20(1) requires the management body to
approve the cybersecurity risk-management measures
taken under Article 21 and to supervise their
implementation. Article 20(2) requires members of
the management body to follow training on a regular
basis and to offer similar training to their staff.
The operational question is not whether an operator
"has" NIS2 governance — it is whether the operator
can produce, on examination, a dated per-cycle
record naming the reviewed measures, the approving
members, and the training attestations.

The playbook produces exactly that record, per
cycle, portably, and with the OSCAL anchors a
supervisor names on examination carried through to
the emitted OCSF event.

## Where to find it

- Framework repository:
  <https://github.com/secops-ng/secops-ng-framework>
- Playbook root:
  `content/playbooks/nis2_art20_governance/`
- Deterministic primitives with unit tests:
  `content/playbooks/nis2_art20_governance/primitives/`
- Three compile-target examples:
  `content/playbooks/nis2_art20_governance/compiled/{n8n,temporal,langgraph}/`
- Byte-parity goldens:
  `content/playbooks/nis2_art20_governance/goldens/`

Compile against your target of choice from the
CACAO v2 source; the golden per target guarantees
your compiled artifact is byte-identical to the
reference and therefore behaves identically against
any downstream OCSF-compliant evidence store.

## Where this leaves the commons

The NIS2 governance surface now has a portable,
dated, per-cycle-auditable artifact in the commons
that closes what Article 20 asks a management body
to do — presented, approved, trained, and evidenced.
G-01 advances against the target of a growing CACAO
v2 playbook catalogue; G-03 records another workflow
validated byte-parity across all three reference
compile targets; G-07 opens the operator-adoption
lane on the Article 20 cadence itself.

The playbook stands alongside the DORA Article 19
major-incident reporting trilogy covered in
[field note #169](/blog/2026-07-09-field-note-169-dora-art19-trilogy-ships/)
and the security-awareness training ring covered in
[field note #167](/blog/2026-07-09-field-note-167-secawareness-extend-cookbook/):
three EU regulatory obligations, three portable
artifacts, one durable commons.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- SKELETON context: [field note #164](/blog/2026-07-09-field-note-164-nis2-art20-management-body-governance/)
- CORE-PRIMITIVES context: [field note #166](/blog/2026-07-09-field-note-166-nis2-art20-core-primitives/)
- Roadmap goals: G-01 (content coverage), G-03 (compile-target parity), G-07 (operator adoption signal).
