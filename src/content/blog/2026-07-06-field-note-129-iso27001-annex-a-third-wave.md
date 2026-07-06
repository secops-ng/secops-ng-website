---
title: "Field note #129 — ISO 27001 Annex A crosswalk third wave (A.5.7–A.5.18 + A.8.28–A.8.34 close-out) (G-06)"
description: "Field note one hundred and twenty-nine from the SecOps-NG Digital Commons. Three merges land the ISO/IEC 27001:2022 Annex A crosswalk further: A.5 organisational-controls extend from 6 to 18 of 37 entries (A.5.7–A.5.18), and A.8 technological-controls close their final batch (A.8.28–A.8.34, 34/34 pending the A.8.18–A.8.22 sibling PR). The Annex A surface now carries every A.8 technological-controls entry once the in-flight rebase lands, and A.5 is halfway populated."
pubDate: 2026-07-06
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "iso27001", "annex-a", "crosswalk", "mappings", "digital-commons", "field-note-129"]
---

Field note one hundred and twenty-nine. Three more pull
requests landed against `secops-ng-framework` in the last
day, continuing the ISO/IEC 27001:2022 Annex A crosswalk
that opened in field notes #126 and #127 and became a
contributor-adoption milestone in #128. This wave is a
content update: the A.5 organisational-controls surface
doubles, and the A.8 technological-controls theme closes its
final batch.

## What landed

- PR #666 — Annex A.8.28 through A.8.34, the closing batch
  of the A.8 technological-controls theme. A.8.28 secure
  coding, A.8.29 security testing in development and
  acceptance, A.8.30 outsourced development, A.8.31
  separation of dev/test/prod environments, A.8.32 change
  management, A.8.33 test information, and A.8.34
  protection during audit testing.
- PR #667 — Annex A.5.7 through A.5.12, extending the A.5
  organisational-controls theme. A.5.7 threat intelligence,
  A.5.8 ISMS in project management, A.5.9 inventory of
  assets, A.5.10 acceptable use of assets, A.5.11 return of
  assets, and A.5.12 classification of information.
- PR #668 — Annex A.5.13 through A.5.18, continuing A.5.
  A.5.13 labelling of information, A.5.14 information
  transfer, A.5.15 access control, A.5.16 identity
  management, A.5.17 authentication information, and A.5.18
  access rights.

Every entry ships alongside the crosswalk conventions the
A.5.1 file established: id scheme
`iso27001:a-<theme>-<number>-<slug>`, control text quoted
from the standard as a fair-use excerpt, and the SecOps-NG
playbook and control references that satisfy each anchor —
or, where the operational discharge belongs to operator-side
policy rather than a versioned artifact, an explanatory gap
note naming the adjacent anchors and the governance surface
the obligation lands on in practice.

## Where the Annex A surface is now

- **A.5 organisational-controls:** 18 of 37 entries landed
  (A.5.1 through A.5.18). Roughly half the theme populated.
- **A.6 people-controls:** anchor entries (A.6.1 screening,
  A.6.3 awareness).
- **A.7 physical-controls:** anchor entries (A.7.1
  perimeters, A.7.2 entry).
- **A.8 technological-controls:** 27 of 34 entries in tree,
  with the closing A.8.28–A.8.34 batch merged and the
  A.8.18–A.8.22 sibling PR (#664) in flight to close the
  theme end-to-end at 34/34.

The mapping layer now speaks a substantially wider slice of
ISO 27001 vocabulary alongside NIS2, DORA, CRA, GDPR, and
D3FEND. Cross-regime coverage travels with the entries: the
A.8.28–A.8.34 close-out calls out NIS2 Article 21(2)(d/e/i)
parallels, DORA Article 9(3) via the JC RTS (Commission
Delegated Regulation (EU) 2024/1774) plus Articles 24–30 on
testing and third-party ICT risk, CRA Article 13 and Annex I
§1/§2, and GDPR Article 5(1)(c/e) and Article 32 for the
test-information anchor. The A.5.15–A.5.18 access-and-
identity block wires the same underlying access-enforcement,
least-privilege, JML, and privileged-access-review controls
that carry the corresponding NIS2 and DORA identifiers on
their OSCAL blocks.

## What this means for an operator

If you already run against NIS2 or DORA and want the ISO
27001 certification story to travel with the same
operational spine, that story now has more of its Annex A
surface pinned to concrete playbooks and controls in this
tree. Two properties matter:

1. **Standards alignment without duplicated evidence.** The
   crosswalk points every Annex A anchor at the same
   versioned artifacts that discharge the equivalent NIS2
   Article 21(2), DORA Chapter II, and CRA Article 13
   obligations. One posture audit against the shipped
   controls generates evidence the auditor can read against
   the ISO 27001 clause map without re-instrumenting.
2. **Sovereignty is not conditional on the certification
   substrate.** The crosswalk is a public artifact under
   community governance. It runs on EU-hostable
   orchestrators (Temporal, n8n, LangGraph) via the
   reference compilers, and it does not require a
   proprietary GRC vendor to interpret the mapping between
   Annex A and the operational controls. If an operator
   wants to move certification substrates or move sovereign
   cloud providers, the crosswalk moves with them.

The gap notes on the empty-list entries are deliberate.
Where an Annex A control is discharged against operator-side
policy rather than a versioned artifact (A.5.8 project
management, A.5.10 acceptable use, A.5.12 classification,
A.5.13 labelling, A.5.17 authentication information, A.8.31
environment separation, A.8.33 test information, A.8.34
audit-testing protection), the entry says so and names the
adjacent anchors that structure the discipline. A future
artifact can replace the gap without changing the anchor id
or the cross-regime hooks.

## What comes next

The A.8 theme closes at 34/34 once the in-flight A.8.18–A.8.22
sibling PR rebases and merges. The A.5 theme has 19 entries
left (A.5.19–A.5.37) before the organisational block is
complete. A.6 and A.7 each have their remaining
people-controls and physical-controls entries to populate.
Every one of them follows the same shape the A.5.1 file
established, and the good-first-issue list carries the
outstanding controls waiting for a crosswalk entry.

The mapping-authoring guide at
[`docs/contributing/playbook-authoring.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/docs/contributing/playbook-authoring.md)
and the ISO 27001 theme index at
[`content/mappings/iso27001/README.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/content/mappings/iso27001/README.md)
are the two starting points for anyone who wants to open the
next crosswalk PR.

## Where to look

- **Framework repo:**
  - `content/mappings/iso27001/annex-a-5-organisational.yaml`
    — A.5.1 through A.5.18 after this wave.
  - `content/mappings/iso27001/annex-a-8-technological.yaml`
    — A.8.1–A.8.17 and A.8.23–A.8.34 in tree; A.8.18–A.8.22
    lands in the next merge to close the theme.
  - `content/mappings/iso27001/README.md` — the theme index,
    the id scheme, and the per-theme coverage rows.

Three merges in a day is a normal-cadence day for a Digital
Commons that has found its rhythm. The next wave picks up at
A.5.19 and works A.5 to close.
