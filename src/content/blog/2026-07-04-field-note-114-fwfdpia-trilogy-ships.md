---
title: "Field note #114 — the GDPR Art. 35 DPIA playbook ships as a full trilogy; scaffold, three compilers, and cookbook land together (F-WF-DPIA, G-01/G-02)"
description: "Field note one hundred and fourteen from the SecOps-NG Digital Commons. The data protection impact assessment playbook lands as a complete lifecycle object: CACAO v2 scaffold anchored on GDPR Art. 35 with an Art. 36 prior-consultation branch, three reference compilers (n8n, Temporal, LangGraph) with a shared evidence schema and byte-parity goldens, and a cookbook walkthrough — all in one wave. GDPR Art. 35 is now a durable, framework-native playbook, not a mapping row."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "gdpr", "dpia", "art-35", "cacao", "playbook", "compilers", "evidence-schema", "digital-commons", "field-note-114"]
---

Field note one hundred and fourteen. Yesterday the commons landed
its first GDPR-anchored playbook — the data subject rights
scaffold covering Art. 15 through Art. 22, at the SKELETON layer.
Today the second GDPR playbook lands, and it lands as a full
trilogy in a single wave: scaffold, compilers, and cookbook,
together. The data protection impact assessment (DPIA) playbook
covering GDPR Art. 35 is now a durable, framework-native object
at `content/playbooks/data_protection_impact_assessment/` in the
framework repository, with the three reference compile targets
lit up and a walkthrough on the docs side.

## What shipped

Three pull requests, one lifecycle:

- **PR #625 (F-WF-DPIA SKELETON).** The CACAO v2 playbook scaffold
  under `content/playbooks/data_protection_impact_assessment/`.
  Art. 35 is the inbound anchor; the Art. 36 prior-consultation
  branch sits in the topology as the escalation path when the
  residual risk after mitigations remains high. The outbound
  overlay carries the OSCAL and D3FEND anchors so the assessment
  workflow lines up with the control catalogue the operator
  already runs.
- **PR #627 (F-WF-DPIA CORE).** The three compile-target emitters
  — n8n, Temporal, LangGraph — with the shared evidence schema at
  `schemas/evidence/dpia.schema.json` and byte-parity goldens
  under every emitter. The evidence object an n8n workflow emits
  and the evidence object a Temporal workflow emits are the same
  bytes for the same inputs; the schema is the contract, and the
  goldens are the CI check that holds it.
- **PR #628 (F-WF-DPIA EXTEND).** The cookbook walkthrough at
  `docs/cookbook/data_protection_impact_assessment.md`. It takes
  an operator from the "we think this processing activity needs
  a DPIA" moment to the completed assessment with the evidence
  bundle and the Art. 36 branch decision recorded.

The SKELETON → CORE → EXTEND arc is the pattern the commons has
been holding across the F-WF-* wave. What is new here is that all
three layers ship together for the same playbook, in one field
note, rather than staggered across three. The DSR playbook that
landed yesterday will follow the same arc; DPIA arrived with the
runway compressed because the scaffold shape was close enough to
the alert-triage and DSR shapes to make the compilers cheap.

## Why an EU operator with GDPR-in-scope processing cares

Art. 35 is not one of the corners of GDPR that most operators
have automated. The regulatory text is procedural — identify the
high-risk processing, describe it, assess necessity and
proportionality, assess risk to data subjects, identify
mitigations, and where residual risk remains high, consult the
supervisory authority under Art. 36 before the processing begins.
In practice that becomes a document that lives in a shared drive,
gets updated by hand once a year if the operator is diligent, and
is very hard to point at when a regulator asks how the assessment
was actually run.

The scaffold that ships today is the workflow shape. It has:

- An inbound trigger for the "does this activity require a DPIA"
  screening, so the Art. 35(1) threshold decision is recorded,
  not implied.
- The assessment steps — description, necessity and
  proportionality, risk to rights and freedoms, safeguards and
  mitigations — as discrete workflow states with evidence emitted
  at each transition.
- The residual-risk determination as an explicit branch: if the
  residual risk is high, the Art. 36 prior-consultation path
  activates, with the evidence bundle already assembled for the
  supervisory authority submission. If the residual risk is not
  high, the assessment closes and the outcome record lands in the
  same shape either way.
- The re-assessment cadence as a durable timer, not a calendar
  reminder, so the assessment revisits itself on the schedule the
  operator sets when the risk profile changes.

The result is that the DPIA becomes a running artifact rather
than a document. The regulator or the internal auditor reads the
evidence bundle, follows the branch decisions, and sees the
Art. 36 path taken or explicitly not taken. That is the shape
the article was written for; it is not the shape the industry
has historically shipped.

## Three compilers, one evidence schema, byte-parity goldens

The CORE layer is the point at which the commons puts weight on a
claim that has been argued in field notes since the F-WF wave
began — that a playbook can ship as a portable artifact and fan
out into three runtimes without losing determinism at the
evidence layer. `schemas/evidence/dpia.schema.json` is the
contract. The goldens under `content/playbooks/data_protection_impact_assessment/goldens/`
are the check: for a fixed input, the n8n emitter, the Temporal
emitter, and the LangGraph emitter produce byte-identical
evidence objects. CI fails the moment they diverge.

That property is what makes the compiler fan-out honest. An
operator running Temporal today can move to n8n tomorrow, or
inherit a peer's LangGraph graph, and the evidence trail the
regulator sees is the same object shape either way. Compiler
choice becomes an operational decision, not a lock-in.

The Art. 36 prior-consultation branch is where the compiler-parity
claim has to hold hardest. That branch produces the submission
evidence the operator will hand to the supervisory authority; it
has to look the same whichever runtime built it. The goldens for
that branch are in the CORE PR alongside the happy path, and the
CI check treats a divergence there as a merge blocker.

## The cookbook, on purpose

The EXTEND layer of a playbook has historically landed weeks
after the SKELETON. For DPIA it landed the same day. The
cookbook at `docs/cookbook/data_protection_impact_assessment.md`
takes an operator through the assessment end to end: the
screening decision, the description, the necessity and
proportionality write-up, the safeguards, the residual-risk
determination, and — where the branch activates — the Art. 36
submission shape.

The cookbook is voice-forward on purpose. It is what an operator
who has never run a DPIA before would read to understand how the
scaffold thinks. The scaffold is what the operator's runtime
reads to actually execute the workflow. The two artifacts anchor
the same object from opposite ends.

## Where GDPR sits after today

The commons now carries two GDPR-anchored playbook objects:

- Data subject rights (Art. 15–22), at the SKELETON layer, from
  yesterday.
- Data protection impact assessment (Art. 35, with Art. 36 branch),
  at the SKELETON + CORE + EXTEND layers, from today.

Art. 25 (data protection by design and by default), Art. 33 and
Art. 34 (breach notification, controller and subject), and Art. 22
(automated decision-making) are the closest adjacent playbook
targets. Each of them is an obligation shape the community is
welcome to scaffold against; the DPIA scaffold that landed today
is the closest shape to Art. 25 in particular, and a contributor
picking that up would find most of the workflow states reusable.

The four-regime ring — NIS2, DORA, CRA, GDPR — that field note
#107 marked closing on the mapping side is now half closed on the
playbook side as well. NIS2 and DORA have multiple playbook
objects each; CRA has its first; GDPR has two. That balance is
the target the F-WF-* wave has been walking toward, and it is
close.

## The community call

Two directions open from today:

- **Adjacent GDPR playbooks.** Art. 25 (DPbDD), Art. 33/34 (breach
  notification), and Art. 22 (ADM) are the three obligations the
  commons wants next. The DPIA scaffold is the closest reusable
  shape for Art. 25 in particular. The playbook-authoring guide
  at `docs/contributing/playbook-authoring.md` is the entry
  point.
- **Sector-specific DPIA extensions.** The DPIA scaffold covers
  the common-shape workflow. Operators whose environment adds a
  step — a joint-controller sign-off, a sector-specific data
  category (health, minors, biometrics), a member-state-specific
  supervisory-authority submission form — can extend the playbook
  in a downstream repository and, when the extension generalises,
  contribute it back.

## Where to look

- `secops-ng-framework/content/playbooks/data_protection_impact_assessment/`
  — the CACAO v2 scaffold, the Art. 36 branch topology, the OSCAL
  and D3FEND overlays.
- `secops-ng-framework/schemas/evidence/dpia.schema.json` — the
  evidence schema the three compilers emit against.
- `secops-ng-framework/content/playbooks/data_protection_impact_assessment/goldens/`
  — the byte-parity goldens the CI check enforces across n8n,
  Temporal, and LangGraph.
- `secops-ng-framework/docs/cookbook/data_protection_impact_assessment.md`
  — the walkthrough for operators running their first DPIA
  against the scaffold.
- Field note #113 — the DSR playbook, the first GDPR playbook
  object, yesterday.
- Field note #107 — the four-regime ring closing on the mapping
  side.

GDPR Art. 35 now runs as a durable, framework-native lifecycle in
the commons. The scaffold is portable, the compilers are lit, the
evidence contract is enforced across all three, and the cookbook
is on the shelf. If DPIA is one of the workflows a team owes its
supervisory authority a defensible account of, the shortest path
to that account is the trilogy that landed with PRs #625, #627,
and #628.
