---
title: "DORA year-one — sovereign incident reporting and the EU operator's posture"
description: "DORA's first supervisory year closed on 2 July 2026 and the first tranche of supervisory incident data is now public. The pattern is clear: the gap that hurts is not 'did something happen' but 'can you produce an Article 19-shaped report from your own timeline, on your own soil, on the regulator's clock'. This post walks through what the year-one data shows, how the SecOps-NG commons frames the same problem as a portable open workflow, and what 'sovereign' actually has to mean for DORA reporting to hold up."
pubDate: 2026-07-02
author: "The SecOps-NG commons"
tags: ["DORA", "incident-reporting", "regulatory", "sovereignty", "digital-commons", "EU", "playbook", "CACAO", "F-SV-03", "community"]
---

DORA's first supervisory year closed on 2 July 2026. The first
tranche of supervisory incident data is public, the legal commentary
tracking the DORA / NIS2 / CSDDD contract-clause overlap is
catching up, and financial-sector operators across the Union are
looking at their year-one posture and asking a very concrete
question: *can we actually produce an Article 19-shaped report from
our own timeline, on our own soil, on the regulator's clock, without
having to reconstruct the incident narrative from scratch each
time?*

The pattern in the year-one data is worth staring at for a minute
before jumping to any framework answer.

## What DORA year-one is telling operators

Read as an operational signal rather than a compliance headline, the
supervisory data has one very unglamorous message. **The gap that
hurts is not detection.** Operators mostly know something happened.
The gap is between "something happened" and "here is an Article
19-shaped report with the classification verdict, the milestone
timestamps, the impact indicators, the affected services, the root
cause narrative, and the recurring-incident linkage — in the exact
schema the regulator expects, submitted on the initial /
intermediate / final cadence Article 19(4) specifies".

Three practical consequences fall out of that gap:

1. **Structured incident timelines matter more than dashboards.**
   The report the regulator wants is a derivation of a well-kept
   timeline, not a screenshot of a SIEM. If the timeline is not
   captured as structured records at the moment events occur, the
   report is reconstruction under deadline pressure, which is
   exactly when detail is lost and classification drifts.

2. **The classifier is the load-bearing artifact.** DORA's
   supervisory framing — via the RTS on classification of major
   ICT-related incidents (Commission Delegated Regulation (EU)
   2024/1772, Article 18(1)) — means the "is this major?" verdict is
   not a private judgement call. It has to be reproducible from the
   timeline, and the recurring-incident rule under Article 18(2)
   means yesterday's timeline is an input to today's verdict.

3. **The three-milestone cadence is a workflow shape, not a form.**
   Article 19(4)'s initial / intermediate / final rhythm only works
   if the same underlying record set produces all three reports and
   carries the deltas between them. A form-filling posture — three
   separate PDFs assembled by three different people — is exactly
   the shape that leaks detail between milestones.

Layer the recent DORA / NIS2 / CSDDD contract-clause synthesis over
that, and the operator's posture question gets sharper: whatever the
downstream contractual clauses say about incident notification,
subcontractor flow-down, and due-diligence obligations, they all
resolve back to the *same* timeline. If the timeline is not
sovereign, portable, and derivation-ready, none of the downstream
clauses can be honoured cleanly.

## How the commons frames the same problem

The SecOps-NG Digital Commons has been building toward this exact
shape from the workflow side, not from the reporting side — because
the reporting variant is a derivation, and derivations only work
when the upstream artifact is right.

The upstream artifact is the F-WF-05 `incident_management`
workflow's timeline. It is a CACAO playbook with structured
primitives:

- `open_timeline()` creates one `TimelineSession` per `incident_id`.
- `record_event()` appends `TimelineEvent` records at each stage of
  the workflow, including the three regulator-submission stages.
- `classify_significance()` produces a reproducible
  `ClassificationVerdict` against the Article 18(1) classifier, with
  the Article 18(2) recurring-incident rule wired in.
- `close_timeline()` emits a `TimelineClosure` at the end.

That's the sovereign, portable substrate. It's just a structured log
of what actually happened, kept in a shape a regulator can read.

The DORA Article 19 report variant is then a *derivation* off that
timeline, not a separate thing an operator has to assemble by hand.
The framework carries a mapping — F-SV-03, the CORE Article 19
report variant — that traces every field on the Article 19
technical-incident report schema back to the timeline record it
derives from. One framework-agnostic helper implements the
derivation; the three reference compile targets each ship a thin
wrapper that delegates to it. Same timeline, same derivation, three
runtimes.

The regulatory anchors the mapping cites directly:

- Regulation (EU) 2022/2554 (DORA), Article 19(4) — reporting
  milestones for major ICT-related incidents.
- Regulation (EU) 2022/2554 (DORA), Article 19(2) — voluntary
  notification of significant cyber threats.
- Commission Delegated Regulation (EU) 2024/1772 — RTS on
  classification of major ICT-related incidents.
- Commission Implementing Regulation (EU) 2024/2956 — ITS on the
  standard forms, templates and procedures.

The playbook and the mapping live in the framework repo. The three
compile-target examples (n8n, Temporal, LangGraph) show how the same
CACAO artifact executes on whichever orchestrator an operator
already runs. Nothing about the derivation depends on which target
you pick.

This is the commons' recurring posture: **the artifact is portable,
the runtime is yours, the derivation is one helper away.** Whether
you are a DORA-regulated financial entity, an ICT third-party
provider inside a DORA supply chain, or an operator with adjacent
NIS2 obligations reading the same incident through a different
regulator's lens, the same timeline is the source of truth. The
report variants are how it presents itself to each regulator.

## What "sovereign" has to mean for DORA reporting

"Sovereign" is a word that gets flattened in security marketing. For
DORA reporting specifically, it has to carry a concrete operational
meaning. From where the commons sits, the meaning is roughly:

**The timeline lives on EU-hostable infrastructure, end to end.**
The `TimelineSession` records, the `TimelineEvent` sequence, the
`ClassificationVerdict`, the intermediate and final report payloads
— all of these are the raw material of an Article 19 submission and
of any downstream audit. If any of that data transits or rests on
infrastructure outside the operator's jurisdictional control, the
sovereignty claim breaks at the exact moment the regulator asks
where the record was held.

**No silent fallback to non-EU log aggregators.** The failure mode
worth naming is the quiet one: an incident-management workflow that
looks EU-sovereign at the top level but flushes its
`TimelineEvent` records to a log-aggregation SaaS whose primary
region is outside the Union, because that is what the underlying
observability stack does by default. The remedy is not a policy
memo. The remedy is that the timeline binding is a first-class
primitive of the workflow, sinks are explicit, and the compile
target enforces the sink choice before the workflow runs.

**Reproducibility of the classifier from the timeline alone.** A
sovereign report is one an operator can regenerate from their own
records without needing to call back to any external SaaS to explain
what the verdict was. The Article 18(1) classifier logic and the
Article 18(2) recurring-incident rule live inside the playbook,
against types the operator can inspect. That is what makes the
verdict defensible under supervisory review.

**AI-provider neutrality where AI touches the report.** Any
narrative generation, summarisation, or field-level normalisation
that runs against timeline data has to be swappable. If the report
narrative can only be regenerated against one specific hosted model,
the sovereignty claim has a single point of external dependency
sitting exactly where it hurts the most.

None of this is a product story. It is the plain shape of what
DORA-year-one is quietly demanding of every operator inside its
scope, and it is why the commons keeps the timeline, the classifier,
and the report variant in one portable artifact set rather than
scattered across a stack.

## For operators reading this in year two

If you are looking at your DORA year-one posture and the gap in the
supervisory data resonates, the practical starting point is the
`incident_management` playbook and the F-SV-03 report variant
mapping. The playbook is a CACAO artifact; the mapping is a
plain-English trace of how each Article 19 field derives from the
timeline; the three compile-target examples show how the same
artifact lands on the orchestrator you already run. All of it is
open, all of it is portable, and none of it asks you to adopt a new
runtime to get value out of it.

The commons is community-built. If the mapping is missing a field,
the classifier edge-case list is incomplete, or the timeline binding
does not match your regulator's expectations in a jurisdiction we
have not covered yet, the useful move is to open an issue or a PR.
Year two is where operator experience with the year-one data starts
compounding, and the commons is the place where that experience can
be captured as portable content rather than as a private lesson
learned.

DORA's second supervisory year begins tomorrow. The timelines you
keep from here forward are the ones the classifier of 2027 will read
against.
