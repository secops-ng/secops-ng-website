---
title: "Field note #115 — NIS2 enforcement month is here; the Article 21 self-assessment now runs as a playbook in the commons (F-WF-NIS2-SELF-ASSESS, G-06/G-07)"
description: "Field note one hundred and fifteen from the SecOps-NG Digital Commons. NIS2 enforcement is live for in-scope operators. The whole-Article-21(2) self-assessment ships as a durable playbook object: a CACAO v2 scaffold that rolls the ten (a–j) sub-clause atoms into one dated attestation, three reference compilers (n8n, Temporal, LangGraph) with byte-parity goldens, and a cookbook that walks an operator from evidence-store to supervisory-authority-ready attestation."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-06", "g-07", "nis2", "article-21", "self-assessment", "cacao", "playbook", "compilers", "attestation", "digital-commons", "field-note-115"]
---

Field note one hundred and fifteen. NIS2 enforcement month is
here. Essential and important entities across the Union are
inside their first Article 21(2) audit cycle, and the question a
supervisory authority is entitled to ask — "show us how you have
covered the ten measures in Article 21(2)(a) through (j), and on
what cadence you re-assess" — is now a live question with a
non-negotiable answer date.

Today the commons lands the workflow shape of that answer. The
NIS2 Article 21 self-assessment ships as a full trilogy in a
single wave: a CACAO v2 scaffold that rolls the ten sub-clause
atoms into a single dated attestation, three reference compilers
(n8n, Temporal, LangGraph) with a shared attestation shape and
byte-parity goldens, and a cookbook walkthrough that takes an
operator end to end. The playbook object lives at
`content/playbooks/nis2_self_assessment/` in the framework
repository.

## What shipped

Three pull requests, one lifecycle, one obligation:

- **PR #630 (F-WF-NIS2-SELF-ASSESS SKELETON).** The CACAO v2
  playbook scaffold under `content/playbooks/nis2_self_assessment/`.
  The four steps are pinned: collect per-clause evidence from the
  operator's evidence store, bind each record to the sub-clause
  atom it discharges, score coverage against the operator's
  documented rubric, and emit the dated attestation record. The
  ten Art. 21(2)(a–j) sub-clause atoms are pinned as outbound
  backlinks; OSCAL CA-2 (Control Assessments) and CA-7 (Continuous
  Monitoring) are the outbound control anchors; D3-OAM is the
  D3FEND anchor on the coverage-scoring step.
- **PR #631 (F-WF-NIS2-SELF-ASSESS CORE).** The three compile-
  target emitters — n8n, Temporal, LangGraph — with byte-parity
  goldens under `tests/examples/{n8n,temporal,langgraph}/nis2_self_assessment/`.
  For a fixed evidence-store snapshot, the three emitters produce
  the same attestation record. The parity test at
  `tests/content_model/test_nis2_self_assessment_parity.py` is the
  CI check that holds the contract.
- **PR #632 (F-WF-NIS2-SELF-ASSESS EXTEND).** The cookbook
  walkthrough at `docs/cookbook/nis2_self_assessment.md`. It walks
  the operator from "we owe our supervisory authority a
  self-assessment on our documented cadence" to the emitted
  attestation record, with adapter-bound surfaces named honestly:
  the evidence store, the coverage rubric, the declared-exception
  register, the cadence surface, and the attestation sink.

The three PRs landed together because the self-assessment shape
sits on top of playbook objects the commons has been landing for
months. The per-clause work is already done: `alert_triage` is
the axis (b) obligation, `backup_recovery` is axis (c), the MFA
and secure-comms playbook is axis (j), the vulnerability intake
is axis (e), the cyber-hygiene playbook is axis (g), the crypto
posture playbook is axis (h), the IAM playbook is axis (i), and
so on across the ten measures. The self-assessment is the
whole-Article roll-up on top — the artifact a supervisory
authority reads to see the ten covered, together, on a dated
cadence.

## Why an operator inside NIS2 enforcement month cares

The self-assessment is the moment the ten separate obligations
become one visible thing. Before the roll-up ships as a playbook,
that moment is a spreadsheet, a shared document, or a slide deck
someone maintains once a year with best intentions. The
regulator reads it, asks a question about clause (f) — "how do
you know your measures are effective" — and the operator answers
from memory rather than from evidence.

The scaffold that ships today is the workflow shape that inverts
that posture. It has:

- A single collect step that reads the operator's evidence store
  for the current self-assessment window and pulls every record
  whose producing playbook is one of the playbooks the ten
  sub-clauses anchor against. The evidence set is fixed, dated,
  and reproducible.
- A mapping step that binds each evidence record to the
  sub-clause atom it discharges, the playbook that produced it,
  and the content-model overlay refs (control, telemetry, metric)
  that carry across from the producing playbook. The mapping is
  the audit trail: which evidence, from which workflow, for which
  sub-clause.
- A scoring step that runs the operator's documented coverage
  rubric across the ten sub-clause atoms — present-and-current,
  present-but-stale, absent-with-declared-exception, or
  absent-uncovered. The rubric is the operator's; the shape it
  produces is the commons's.
- An attestation-emission step that composes the dated JSON-native
  Article 21 attestation record and publishes it to the
  operator's evidence store. That record is the artifact the
  supervisory authority reads.

The result is that the self-assessment becomes a running
lifecycle rather than an annual document. The evidence trail is
reproducible; the rubric application is deterministic; the
attestation record has a fixed shape and a fixed date. If the
regulator asks how the operator knows a measure is effective,
the answer is the attestation record for the current window, and
the mapping under it points at the evidence, and the evidence
points at the workflow that produced it.

## Three compilers, one attestation, byte-parity goldens

The CORE layer is where the commons keeps its portability
promise honest. `tests/examples/{n8n,temporal,langgraph}/nis2_self_assessment/`
holds the byte-parity goldens: for a fixed evidence-store
snapshot and a fixed rubric, the n8n emitter, the Temporal
emitter, and the LangGraph emitter produce the same attestation
record. The parity test in
`tests/content_model/test_nis2_self_assessment_parity.py` is the
CI check that fails the moment those three diverge.

That property is what makes the compiler fan-out honest for a
supervisory-reporting artifact. An operator running Temporal
today can move to n8n tomorrow, or inherit a peer's LangGraph
graph, and the attestation record the regulator reads is the
same object shape either way. Compiler choice is an operational
decision. The Article 21(2) roll-up is not.

## The cookbook, on enforcement month

The EXTEND layer of a playbook has historically landed weeks
after the SKELETON. For this playbook it landed the same day,
because the calendar demanded it. The cookbook at
`docs/cookbook/nis2_self_assessment.md` walks the operator
through the four steps end to end, names the adapter-bound
surfaces plainly (evidence store, coverage rubric, declared-
exception register, cadence surface, attestation sink), and
shows the same self-assessment run through all three reference
compile targets.

The cookbook is voice-forward on purpose. It is what an operator
who has been staring at Article 21(2) for a month, wondering how
to run their first self-assessment cycle, would read to
understand how the scaffold thinks. The scaffold is what the
operator's runtime reads to actually execute the workflow. The
two artifacts anchor the same object from opposite ends.

## How to run the self-assessment against the shipped playbook

The short version, for an operator with a runtime already in the
stack:

1. Point the CACAO scaffold at the evidence store where the
   per-clause playbooks (alert triage, backup, vulnerability
   intake, MFA, crypto posture, IAM auditor, cyber hygiene, and
   the rest) already emit evidence.
2. Point it at the coverage rubric the operator has documented —
   the four-tier scoring shape the SKELETON expects
   (present-and-current, present-but-stale, absent-with-declared-
   exception, absent-uncovered).
3. Point it at the attestation sink where the dated record
   should land — typically the same evidence store, in the
   attestation-record shape the SKELETON emits.
4. Trigger the playbook on the self-assessment cadence the
   operator has documented. One call in, one attestation record
   out, on the shape the supervisory authority is entitled to
   read.

That is the shape the article was written for. It is not the
shape the industry has historically shipped. The commons is
happy to ship it.

## The community call

Three directions open from today, and enforcement month is a
good time to open all three:

- **Sub-clause extensions.** The ten Article 21(2)(a–j) sub-clause
  atoms are pinned as outbound backlinks in the scaffold. An
  operator whose environment adds a sector-specific measure — a
  finance-sector overlay on top of (e) vulnerability handling, a
  health-sector overlay on top of (h) cryptography, a
  telecom-sector overlay on top of (b) incident handling — can
  extend the playbook in a downstream repository and, when the
  extension generalises, contribute it back.
- **Coverage-rubric shapes.** The scaffold expects a four-tier
  rubric. Operators whose supervisory authority has issued
  member-state-specific rubric guidance can contribute rubric
  overlays that fit that guidance while staying compatible with
  the scaffold's attestation shape.
- **Self-attestation in the USED-BY registry.** Operators who
  run the self-assessment against the shipped playbook and land
  a first attestation record are warmly invited to self-attest
  in `USED-BY.md`. Enforcement month is a strong signal moment;
  the registry is the visible surface where the community can
  see who is running what.

The playbook-authoring guide at
`docs/contributing/playbook-authoring.md` is the entry point for
sub-clause and rubric contributions. The USED-BY registry is the
entry point for adoption self-attestation.

## Where the F-WF wave sits after today

The commons now carries the whole-Article-21 self-assessment as
a durable playbook object, on top of the per-clause playbook set
the F-WF wave has been landing for months. NIS2 sits at multiple
playbook objects; DORA sits at multiple; CRA has its first; GDPR
has two after this week — data subject rights at SKELETON, DPIA
at the full trilogy. The four-regime ring that field note #107
marked closing on the mapping side is now well underway on the
playbook side as well, with NIS2 the most complete regime today.

## Where to look

- `secops-ng-framework/content/playbooks/nis2_self_assessment/`
  — the CACAO v2 scaffold, the ten sub-clause outbound backlinks,
  the OSCAL CA-2 / CA-7 overlays, the D3-OAM D3FEND anchor.
- `secops-ng-framework/tests/examples/{n8n,temporal,langgraph}/nis2_self_assessment/`
  — the byte-parity goldens the CI check enforces across the
  three reference compile targets.
- `secops-ng-framework/tests/content_model/test_nis2_self_assessment_parity.py`
  — the cross-target parity test.
- `secops-ng-framework/docs/cookbook/nis2_self_assessment.md`
  — the walkthrough for operators running their first Article 21
  self-assessment against the shipped playbook.
- Field note #114 — the DPIA trilogy, the second GDPR playbook.
- Field note #113 — the DSR playbook, the first GDPR playbook.
- Field note #107 — the four-regime ring closing on the mapping
  side.

Article 21(2) is not going to move. The audit cycle is not going
to wait. What can move is whether the self-assessment is a
document someone maintains by hand once a year, or a workflow
the operator's runtime runs on the cadence the operator has
documented, emitting a dated attestation the supervisory
authority reads against the same ten atoms every time. From
today, in the commons, it is the second one. PRs #630, #631,
and #632 are the trilogy. The playbook is on the shelf.
