---
title: "Field note #119 — the NIS2 Article 21 self-assessment cookbook walkthrough ships, third cookbook in the current compliance wave"
description: "Field note one hundred and nineteen from the SecOps-NG Digital Commons. The nis2_self_assessment cookbook walkthrough is now on the shelf: a full practitioner walk from evidence store to dated attestation, wired through all three reference compile targets (n8n, Temporal, LangGraph), and joining the DPIA and DSR walkthroughs as the third cookbook in the current NIS2/GDPR compliance wave."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "nis2", "article-21", "self-assessment", "cookbook", "playbook", "compilers", "cacao", "digital-commons", "field-note-119"]
---

Field note one hundred and nineteen. The trilogy that field
note #115 marked landing has one more artifact worth calling out
on its own: the cookbook walkthrough for the NIS2 Article 21
self-assessment playbook. It is the third practitioner cookbook
in the current compliance wave — after the DPIA walkthrough
(field note #114) and the data-subject-rights walkthrough that
preceded it — and it is the entry point an operator staring at
their first Article 21 self-assessment cycle actually reads.

## What shipped

**PR #632 (F-WF-NIS2-SELF-ASSESS EXTEND).** A single file,
`docs/cookbook/nis2_self_assessment.md`, that walks the operator
end to end through the four-step lifecycle the SKELETON pins
(collect → map → score → attest) and shows the same run through
all three reference compile targets. The walkthrough is the
paired-artifact companion the CACAO scaffold has been designed
against from day one: the scaffold is what the operator's
runtime reads to execute; the cookbook is what the operator
reads to understand how the scaffold thinks.

The walkthrough names the adapter-bound surfaces plainly and
without hedging. The evidence store where per-clause playbooks
already emit their records. The coverage rubric the operator
has documented. The declared-exception register that carries
the deviations the operator has explicitly acknowledged. The
cadence surface that carries the self-assessment schedule. The
attestation sink where the dated record lands. None of those
surfaces are chosen by the commons; all of them are named by
the commons, so the operator wiring the playbook into their
stack does not have to guess where the seams are.

## Where it sits in the current compliance wave

Three cookbook walkthroughs in the current wave, three
regulatory anchors, one shape:

- **DSR (`docs/cookbook/data_subject_rights.md`).** GDPR
  Articles 15–22. Practitioner walk for handling a single
  data-subject request end to end against the shipped DSR
  playbook.
- **DPIA (`docs/cookbook/data_protection_impact_assessment.md`,
  field note #114).** GDPR Article 35. Practitioner walk for
  running a DPIA against the shipped DPIA playbook.
- **NIS2 self-assessment
  (`docs/cookbook/nis2_self_assessment.md`, today).** NIS2
  Article 21(2)(a–j). Practitioner walk for running the
  whole-Article roll-up against the shipped self-assessment
  playbook.

All three cookbooks are keyed the same way — one CACAO
playbook object, one operator-facing walkthrough, three
reference compile targets on byte-parity goldens. All three sit
against the playbook-authoring guide at
`docs/contributing/playbook-authoring.md` so the pattern is
visibly replicable. The wave is not three one-offs; it is one
authoring pattern applied three times, and today the third
instance lands.

## Why the whole-Article roll-up is a different shape

The per-clause playbooks discharge the ten Article 21(2)
obligations on their own axes. `alert_triage` sits over (b),
`backup_recovery` over (c), the MFA and secure-comms playbook
over (j), the vulnerability intake over (e), the cyber-hygiene
playbook over (g), the crypto posture playbook over (h), the
IAM auditor over (i), and so on across the ten measures. Each
one is a workflow the operator's runtime executes on its own
cadence, producing its own evidence stream.

The self-assessment is the artifact on top. It reads the
evidence those per-clause playbooks have already produced,
binds each record to the sub-clause atom it discharges against,
scores coverage against the operator's four-tier rubric
(present-and-current, present-but-stale,
absent-with-declared-exception, absent-uncovered), and emits a
single dated JSON-native attestation record composed against
the ten Article 21(2)(a–j) sub-clause atoms. One roll-up, ten
atoms, one dated shape.

The cookbook is where that shape becomes concrete for an
operator who has not read a CACAO scaffold before. It shows the
collect step against a fixed evidence-store snapshot; it shows
the mapping step producing the audit trail from evidence record
to sub-clause atom; it shows the scoring step running the
operator's rubric; it shows the attestation step composing the
dated record. And it shows all four steps running through n8n,
Temporal, and LangGraph — each with the same input surface and
the same output attestation — because the byte-parity goldens
in the CORE PR (PR #631) hold that contract at CI.

## Three compile targets, one record

The G-01 promise on the compiler fan-out is that the operator's
runtime choice does not change the artifact the supervisory
authority reads. The walkthrough exercises that promise
end-to-end: same evidence store snapshot, same coverage rubric,
same attestation sink, three different runtime skeletons under
`tests/examples/{n8n,temporal,langgraph}/nis2_self_assessment/`.
The cookbook shows each of the three runtimes side by side on
the same self-assessment scenario. For an operator with n8n
already in the stack, the walkthrough is the n8n path. For an
operator on Temporal, it is the Temporal path. For an operator
on LangGraph, it is the LangGraph path. Same page, same
scenario, same result at the end. G-01 held in prose.

## The replicable pattern for contributors

The cookbook is intentionally boring in structure. Every
cookbook walkthrough in the current wave follows the same
sections in the same order: what the playbook does, why the
operator cares, the four (or however many) lifecycle steps
named plainly, the adapter-bound surfaces enumerated, the
three-target compile fan-out walked in sequence, and the
authoring guide backlinked so the next contributor knows what
to imitate.

That structural sameness is the point. A contributor who wants
to land a jurisdiction-specific overlay — a DORA Article 6
cross-reference on top of the NIS2 self-assessment for
financial-entity operators, a sector-specific rubric shape a
supervisory authority in one member state has issued, a
telecom-sector overlay on axis (b) or a health-sector overlay
on axis (h) — has a template to work from. The scaffold at
`content/playbooks/nis2_self_assessment/` is the object to
extend; `docs/contributing/playbook-authoring.md` is the
authoring guide that walks the mechanics; the shipped cookbook
is the shape the operator-facing walkthrough should take when
the extension is documentation-ready.

Nothing in that pattern is proprietary. Every artifact is
in-repo, on the same YAML/CACAO/OCSF spine the rest of the
framework rides on, and every extension the community lands
against it inherits the same byte-parity CI contract the three
reference compile targets already carry.

## What an operator does with this tomorrow

For an operator who has the per-clause playbooks running and
now wants to close the whole-Article roll-up:

1. Read `docs/cookbook/nis2_self_assessment.md` end to end
   against the compile target already in the operator's stack.
   The walkthrough is written to be read once and executed
   from.
2. Wire the CACAO scaffold at
   `content/playbooks/nis2_self_assessment/` against the
   operator's evidence store, coverage rubric, cadence surface,
   and attestation sink. The adapter-bound surfaces are named
   in the walkthrough; there is no guesswork about where the
   seams sit.
3. Run the playbook on the self-assessment cadence the
   operator has documented. One call in, one attestation record
   out, keyed against the ten Article 21(2)(a–j) sub-clause
   atoms every time.
4. Read the attestation record against Chapter VII of NIS2.
   The record is dated, reproducible, and shaped to the
   sub-clause atoms the supervisory authority is entitled to
   ask about.

The cookbook is the on-ramp. The scaffold is the vehicle. The
byte-parity goldens are the contract that says the vehicle
does not change shape depending on which runtime the operator
happens to be driving today.

## Where this sits against G-01 and G-02

G-01 is the content-coverage goal — practitioners can adopt
end-to-end from what is in the repository. The nis2_self_assessment
walkthrough is the third cookbook in the current wave that
holds G-01 in a form an operator can lift into production
without writing their own tooling first: scaffold + parity
goldens + walkthrough, all shipped, all in-repo, all on the
same authoring pattern.

G-02 is the regulatory mapping goal. The walkthrough anchors
against NIS2 Article 21(2)(a) through (j) — all ten control
families in a single portable workflow — with the sub-clause
atoms named as outbound backlinks and the attestation record
keyed to them at emit time. Ten families, one roll-up, one
dated shape. The mapping is explicit, not implicit.

## Where to look

- `secops-ng-framework/docs/cookbook/nis2_self_assessment.md` —
  the practitioner walkthrough that landed today. Read first
  if you are running an Article 21 self-assessment cycle for
  the first time.
- `secops-ng-framework/content/playbooks/nis2_self_assessment/`
  — the CACAO v2 scaffold the walkthrough walks against.
- `secops-ng-framework/tests/examples/{n8n,temporal,langgraph}/nis2_self_assessment/`
  — the byte-parity goldens the walkthrough exercises across
  the three reference compile targets.
- `secops-ng-framework/docs/contributing/playbook-authoring.md`
  — the authoring guide for contributors landing overlays and
  new cookbook walkthroughs against the same pattern.
- `secops-ng-framework/docs/cookbook/data_protection_impact_assessment.md`
  (field note #114) and
  `secops-ng-framework/docs/cookbook/data_subject_rights.md` —
  the two other cookbook walkthroughs in the current wave.
- Field note #115 — the trilogy landing (SKELETON + CORE +
  EXTEND) of the F-WF-NIS2-SELF-ASSESS wave.

Three cookbooks in the wave. One authoring pattern. One
supervisory-reporting shape the whole-Article roll-up produces
every time it runs. PR #632 is the artifact; the walkthrough is
on the shelf.
