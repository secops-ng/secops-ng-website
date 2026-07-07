---
title: "Field note #147 — NIST CSF 2.0 crosswalk closes as the eighth axis: SKELETON → CORE → EXTEND on a single day"
description: "Field note one hundred and forty-seven from the SecOps-NG Digital Commons. The NIST CSF 2.0 crosswalk closes end-to-end on the same day it opened: SKELETON (22 Categories across GV/ID/PR/DE/RS/RC), CORE (106 Subcategories with playbook_refs or gap_note against every leaf), and EXTEND (a practitioner cookbook at docs/cookbook/nist_csf_crosswalk.md, with the ROADMAP entry flipped to Shipped). The eighth crosswalk axis is now a full ring — an operator running a CSF programme can navigate into NIS2, DORA, CRA, GDPR, ISO 27001, SOC 2, or D3FEND through the same anchors."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "crosswalk", "nist-csf", "nist-csf-2", "mapping", "oscal", "d3fend", "nis2", "dora", "cra", "gdpr", "iso27001", "soc2", "cookbook", "digital-commons", "field-note-147"]
---

Field note one hundred and forty-seven. Note #146 closed
earlier today with a line about the eighth crosswalk axis
landing as SKELETON and CORE plus EXTEND belonging to a
future wave. That future wave arrived the same day. The
NIST CSF 2.0 crosswalk closed end-to-end — SKELETON, CORE,
and EXTEND in sequence — and the eighth axis is now a
full ring on the crosswalk surface.

## What ships

Three pull requests merged against `secops-ng-framework`,
forward-public today:

- **#717** — `mappings(nist-csf)` SKELETON. The 22 CSF
  Categories across the six Core Functions — Govern (GV),
  Identify (ID), Protect (PR), Detect (DE), Respond (RS),
  Recover (RC) — land in
  `content/mappings/nist_csf/csf-core-functions.yaml` as
  Category-level anchors into the SecOps-NG playbook and
  control catalogue. The Govern Function, promoted out of
  Identify in the 2.0 revision, carries first-class weight
  here.
- **#718** — `mappings(nist-csf)` CORE. All **106
  Subcategory-level outcomes** land under the same file,
  each one carrying either `playbook_refs` (the SecOps-NG
  artifacts that exercise it) or an explicit `gap_note`
  (the boundary where operator-owned evidence discharges
  the outcome — organisational mission, board oversight,
  physical-facility monitoring). Two mutually exclusive
  shapes, one per leaf, so the catalogue boundary is
  visible on the file rather than implied.
- **#719** — `docs(cookbook)` EXTEND. A practitioner
  walkthrough lands at `docs/cookbook/nist_csf_crosswalk.md`.
  It explains what the crosswalk asserts, the anatomy of a
  Category-level and a Subcategory-level entry, the two
  natural reading strategies (function-first and
  anchor-first), and a worked example: a supplier
  questionnaire that names `ID.RA-01`, walked from the CSF
  outcome down to the SecOps-NG playbook anchors and back
  out to the article-level EU mappings. The ROADMAP entry
  for the crosswalk flips to Shipped in the same PR.

Three tiers, one axis, one day, one closed ring.

## The reading direction for an operator

The crosswalk is a **structural pointer**, not
implementation guidance and not a legal interpretation of
the CSF. What an operator gets is a second axis of
navigation into the same catalogue they already read
against NIS2, DORA, CRA, GDPR, ISO 27001, SOC 2, and
D3FEND:

- **CSF-first navigation into EU obligations.** An
  operator whose reasoning already lives in CSF terms —
  common where a supplier attestation, a customer
  questionnaire, or a partner audit is framed against
  CSF Categories — points at the CSF outcome and follows
  the crosswalk down to the SecOps-NG playbook that
  discharges it. From there the article-level EU mappings
  under `content/mappings/{nis2,dora,cra,gdpr}/` are one
  hop across.
- **Outcome-oriented gap analysis at 106 leaves.** The
  Subcategory layer is finer-grained than the article-
  level EU mappings. Where a Subcategory carries a
  `gap_note` instead of `playbook_refs`, that names an
  outcome the SecOps-NG catalogue does not exercise —
  governance-owned, board-owned, or physical-facility
  outcomes. The operator's own evidence discharges
  those, and the crosswalk names the boundary explicitly.
- **Cross-jurisdictional reasoning.** A CSF-native
  practitioner outside the EU can walk into the EU
  regulatory surface through Core Functions they already
  know, and a EU-adjacent operator can respond to a
  CSF-framed request without maintaining a parallel
  CSF-only control catalogue.

Two reading strategies come out of the cookbook:
**function-first** (top-to-bottom in canonical GV → ID →
PR → DE → RS → RC order) and **anchor-first** (grep the
file for a playbook or control id to see every CSF
outcome that anchor exercises).

## The gap_note discipline

The 106 Subcategories are not uniformly exercised, and
the crosswalk is honest about that. The bulk of the
`gap_note` entries sit under Govern (organisational
mission, risk appetite, oversight cadence, policy
authoring — all board-level or executive-owned) and
under a small number of physical-facility outcomes
(`DE.CM-02`, `PR.AA-06`, `PR.IR-02`). Everything else
the CSF 2.0 Subcategory layer names is exercised by at
least one SecOps-NG playbook.

Two consequences:

- A Subcategory with a `gap_note` is not a defect in the
  crosswalk. It is an assertion of catalogue boundary,
  named on the file rather than left implied. The operator
  reading the crosswalk sees exactly which outcomes are
  theirs to discharge with their own evidence.
- The gap surface is a contributor invitation. Where a
  future playbook shape could reasonably exercise a
  currently-gapped Subcategory, that is a place the
  commons can grow — and the `gap_note` text is the brief
  the contributor works against.

## The eighth axis, closed

NIST CSF 2.0 as an axis matters because it is the
framework a great many operators outside the EU already
read against, and because the 2.0 revision promoted the
Govern function to a first-class peer of the five that
CSF 1.1 carried. Landing the axis as a full ring — not
as SKELETON only — means an operator who lives in a
CSF-native shop can walk from a Category through a
Subcategory into a NIS2 or DORA control family through
the SecOps-NG anchor the crosswalk points at, and out
the other side into a D3FEND defensive technique or a
CACAO playbook step the audit will read against.

The ring the commons already carried across NIS2, DORA,
CRA, GDPR, ISO 27001, SOC 2, and D3FEND is now eight
axes deep, and the eighth axis carries all three tiers.

## The G-06 signal

One goal registers cleanly against today's second wave:

- **G-06 — crosswalk axis coverage.** The NIST CSF 2.0
  crosswalk closes end-to-end: 22 Categories, 106
  Subcategories, and a practitioner cookbook. Every leaf
  in the CSF 2.0 Core carries either `playbook_refs` or a
  `gap_note`, and the ROADMAP entry flips to Shipped.
  The eighth axis is a full ring.

## Where to look

- **Framework repo:**
  - `content/mappings/nist_csf/csf-core-functions.yaml` —
    the CSF 2.0 Core Functions file: 22 Categories at the
    top level, 106 Subcategory entries nested underneath,
    each one carrying either `playbook_refs` or a
    `gap_note`.
  - `content/mappings/nist_csf/README.md` — the on-disk
    directory README naming the CSF 2.0 structure and the
    entry conventions.
  - `docs/cookbook/nist_csf_crosswalk.md` — the
    practitioner cookbook: what the crosswalk asserts,
    entry anatomy at both levels, the two reading
    strategies, and a worked example from a supplier
    questionnaire down to the playbook anchors and back
    out to the EU article-level mappings.
  - `ROADMAP.md` — the NIST CSF 2.0 crosswalk entry now
    reads Shipped.

Eight axes on the crosswalk ring. The next good day is
the one that carries the same shape to the ninth. If
you are running a CSF programme and want to reason
about EU regulatory coverage through the anchors you
already know, the cookbook is the shortest path in.
