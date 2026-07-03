---
title: "Field note #113 — the GDPR data subject rights playbook ships; Art. 15 through Art. 22 land in one CACAO scaffold (F-WF-DSR SKELETON, G-01/G-02)"
description: "Field note one hundred and thirteen from the SecOps-NG Digital Commons. The first GDPR Art. 15–22 data subject rights playbook lands as a portable CACAO v2 scaffold with OSCAL and D3FEND overlays and a full inbound clause mapping — operators running GDPR-in-scope workloads now have a machine-readable DSR handling workflow with regulatory traceability, framework-agnostic, ready for compiler fan-out."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "gdpr", "data-subject-rights", "dsr", "cacao", "playbook", "digital-commons", "field-note-113"]
---

Field note one hundred and thirteen. The commons has been carrying
NIS2, DORA, and CRA content since the earlier waves; GDPR has sat
alongside them at the mapping layer, waiting for the first
playbook that treats a GDPR obligation as its primary subject
rather than as a downstream overlay. Today that playbook lands.
The first data subject rights (DSR) scaffold — Art. 15 through
Art. 22 — is in the framework at `content/playbooks/data_subject_rights/`,
with the inbound GDPR clause map anchored underneath it.

## What shipped

PR #621 (F-WF-DSR SKELETON) squash-merged to main. It carries:

- A CACAO v2 playbook covering the six operative articles: Art. 15
  (access), Art. 16 (rectification), Art. 17 (erasure), Art. 18
  (restriction), Art. 20 (portability), and Art. 21 (objection).
  Art. 19 (notification obligation to recipients) is folded into
  the outcome-recording step where it belongs procedurally, and
  Art. 22 (automated decision-making) is referenced as an
  adjacent-scope hook for a later playbook of its own.
- The seven-step workflow shape: request intake, identity
  verification, request classification against the article table,
  data-store-owner notification, evidence aggregation, controller
  response, outcome recording.
- An OSCAL overlay against AC-2(11) and AU-9 so the account-management
  and audit-record-protection controls line up with the DSR
  workflow the operator ends up running.
- A D3FEND overlay against D3-IAA (identity and authentication)
  so the identity-verification step of the playbook has a defensive
  taxonomy anchor rather than sitting bare.
- Audited NIS2, DORA, and CRA orphan-skip entries with rationale —
  DSR handling is a GDPR-only obligation, and the orphan-CI guard
  now records that as an explicit decision rather than as silence
  across three regimes.
- The GDPR Art. 15–22 inbound mapping in
  `content/mappings/gdpr/`, so the article table is machine-readable
  from the mapping side and traces back to the playbook slugs from
  the regulatory side.

Field note #105 covered the earlier GDPR mapping wave (Art. 25 and
Art. 35). This note is the point where GDPR gets its first
playbook object in the framework, not only its mapping rows.

## Why an EU mid-market operator cares

DSR handling is one of the noisier corners of GDPR operationalisation.
The regulatory text is clear on outcomes and timing, but the
workflow shape — who verifies the requester, which data stores are
in scope, what the evidence bundle looks like, how the outcome is
recorded — is where most in-house playbooks fragment. The result,
in practice, is that the same operator handles Art. 15 requests
one way and Art. 17 requests a different way, with different
evidence retention and different audit trails, and the regulator
sees the seam.

The scaffold that ships today collapses the six articles into a
single workflow that branches on request classification and
converges on a shared outcome-recording step. The identity
verification, the data-store-owner notification, and the evidence
aggregation are the same shape across all six articles. Only the
classification and the response are article-specific, because that
is where the articles actually differ.

Two consequences flow from that:

- **One place to audit.** The regulator or the internal auditor
  reads one playbook, not six, when they want to see how the
  operator handles data subject rights end to end. The evidence
  bundle has the same shape whether the request was an access
  request or an erasure request.
- **One place to change.** When the operator's data-store
  inventory changes, or the identity-verification policy tightens,
  or the retention window on outcome records moves, the change
  lands in one place and propagates to all six article paths.

Neither of those properties is exotic. They are the properties an
operator would build if they wrote the playbook from scratch. The
commons ships the scaffold so no operator has to.

## Framework-agnostic first, compilers next

The SKELETON layer of the playbook is deliberately framework-agnostic.
It is a CACAO v2 artifact with OSCAL and D3FEND overlays; it does
not assume n8n, Temporal, or LangGraph as its runtime. The next
layer — the CORE compilers — is the point at which the same
scaffold fans out into the three reference targets: an n8n
workflow for the no-code path, a Temporal workflow for the
durable-code path, and a LangGraph graph for the agentic path.

That order is the pattern the commons has been holding across the
content library. The portable artifact lands first, so an operator
who runs a fourth runtime — Make, StackAI, CrewAI, or something
in-house — can compile the playbook themselves against the shape
they already run. The reference compilers land next, so the
operator who runs one of the three targets the project ships gets
the compiled artifact for free.

Field notes have covered the same arc across the F-WF-* wave for
NIS2 Art. 21 and the earlier alert-triage playbook. DSR is the
first GDPR object to travel it.

## The orphan-CI guard, now anchored across four regimes

A small piece of housekeeping worth naming. The orphan-CI guard —
the check that fails a PR when a playbook has no anchoring
regulatory mapping — is now recording audited skips for NIS2,
DORA, and CRA against this playbook, with the rationale attached
in the skip entry itself. GDPR is the anchoring regime for DSR
handling; the other three regimes do not carry a data subject
rights obligation, and the guard now records that as a decision
in the audit trail rather than as an unexplained gap.

The practical effect is that the four regulatory rings — NIS2,
DORA, CRA, GDPR — now each have at least one playbook that
carries them as its primary anchor, with the guard rejecting any
future playbook that lands without an explicit anchor decision
across all four.

## The community call

The scaffold is the foundation, not the finished shape. Two
directions are open to contribution from today:

- **Additional GDPR article coverage.** Art. 22 (automated
  decision-making) is the closest adjacent playbook the commons
  wants; Art. 33 and Art. 34 (breach notification, controller and
  subject) belong in a separate playbook of their own. If either
  is the article an operator handles most often, the shortest
  path to that playbook is a PR against
  `content/playbooks/` with the same scaffold shape as the DSR
  one that landed today.
- **Operator-specific extensions.** The scaffold covers the
  common-shape workflow. Operators whose environment adds a step
  — a data-broker takedown branch, a subprocessor cascade, a
  regional variance for a specific member state — can extend the
  playbook in a downstream repository and, when the extension
  generalises, contribute it back. The contributor guide covers
  the shape both paths take.

The authoring guide at `docs/contributing/authoring-playbooks.md`
in the framework repository is the entry point for either
direction.

## Where to look

- `secops-ng-framework/content/playbooks/data_subject_rights/` —
  the CACAO v2 scaffold, the seven-step workflow, the OSCAL and
  D3FEND overlays.
- `secops-ng-framework/content/mappings/gdpr/` — the Art. 15–22
  inbound mapping, machine-readable from either side.
- `secops-ng-framework/docs/contributing/authoring-playbooks.md`
  — the contributor guide for additional article coverage and
  operator-specific extensions.
- Field note #105 — the earlier GDPR mapping wave (Art. 25 and
  Art. 35).
- Field note #107 — the point at which the four-regime ring
  (NIS2, DORA, CRA, GDPR) closed on the mapping side.

GDPR now has its first playbook object in the framework, not only
its mapping rows. The scaffold is portable, the overlays are in
place, the compiler fan-out is the next step. If DSR handling is
one of the shapes a team runs today, the shortest path to a
machine-readable, auditable version of that workflow is the
scaffold that landed with PR #621.
