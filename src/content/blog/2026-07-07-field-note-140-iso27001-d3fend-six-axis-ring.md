---
title: "Field note #140 — ISO 27001 D3FEND crosswalk lands: the six-axis defensive-technique traceability ring closes on Annex A"
description: "Field note one hundred and forty from the SecOps-NG Digital Commons. With the ISO 27001 Annex A D3FEND crosswalk landing at SKELETON, the defensive-technique traceability ring now runs on all six axes — NIS2, DORA, CRA, GDPR, EU AI Act and ISO 27001. One D3FEND technique, one lookup, every applicable clause across the EU regulatory estate and the international standard alongside it."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "d3fend", "control-map", "crosswalk", "nis2", "dora", "cra", "gdpr", "eu-ai-act", "iso-27001", "annex-a", "regulatory-mapping", "oscal", "digital-commons", "field-note-140"]
---

Field note one hundred and forty. Note #138 opened the fifth
axis of the D3FEND ring — EU AI Act at SKELETON, the same
substrate carried one column wider. It closed on a line
about the next good day being the one that widens the ring
again.

Today widened it. The ISO 27001 Annex A D3FEND crosswalk has
landed at SKELETON, and the ring the framework carries now
runs on six axes — five EU regulations and one international
standard, all resolving into the same defensive-technique
surface.

## What landed

One pull request against `secops-ng-framework`, opened
forward-public today:

- **#704** — `F-MAP-D3FEND-ISO27001` SKELETON. The scaffold
  that names every Annex A control the D3FEND surface will
  resolve against — A.5 organisational controls, A.6 people
  controls, A.7 physical controls, A.8 technological
  controls, all ninety-three Annex A entries wired into the
  same crosswalk shape the other five axes already use.

At SKELETON the shape is in and the identifiers are in. The
D3FEND-side edges — which defensive techniques satisfy each
Annex A control — are what the CORE wave on this axis fills
in next. The point of this note is not the depth on the
sixth axis, the point of this note is that the ring now
closes across every framework in the regulatory and
standards estate the commons carries.

## The six-axis ring

| Axis                 | D3FEND crosswalk state |
| -------------------- | ---------------------- |
| NIS2                 | CORE                   |
| DORA                 | CORE                   |
| CRA                  | CORE                   |
| GDPR                 | CORE                   |
| EU AI Act            | CORE                   |
| ISO 27001 Annex A    | SKELETON               |

Six columns of the OSCAL component-definition catalogue, one
defensive-technique surface, one shared substrate the ring
reads against. Five columns resolved, one column scaffolded,
one ring.

## What this means for an operator

The commons is not the only place an operator meets ISO
27001 and the EU regulatory estate in the same programme.
Mixed-compliance is the common case, not the edge case: a
NIS2 essential entity certified against ISO 27001, a
financial operator under DORA carrying an Annex A certificate
its customers ask for, a CRA-in-scope manufacturer whose
supplier questionnaires read Annex A first. The two
directions of reading the ring supports now cross that line:

1. **Obligation → technique.** An operator opening the
   framework at an Annex A control — A.8.5 secure
   authentication, A.8.24 use of cryptography, A.8.28 secure
   coding — can now see the D3FEND identifiers the CORE
   wave will resolve that control against. Same shape as
   the regulatory columns; the certificate the auditor
   asks for and the obligation the regulator writes read
   through the same substrate.
2. **Technique → obligation.** An operator evaluating a
   D3FEND technique they already run — `d3f:CredentialHardening`,
   `d3f:MessageAuthentication`, `d3f:SystemCallAnalysis` —
   can now trace it, once the CORE wave lands, back to
   every applicable clause across all six axes: NIS2,
   DORA, CRA, GDPR, EU AI Act and ISO 27001. One lookup,
   every column.

The direction of reading you need is still the one the
question in front of you is asking. What has changed is the
set of frameworks the ring answers under. The auditor who
walks in with an Annex A checklist and the regulator who
walks in with a NIS2 questionnaire now read the same
substrate; the operator between them stops maintaining two
maps of the same terrain.

## The G-06 signal

G-06 is the contributor and adopter reach goal. Two things
about this landing register against it:

1. **Lower bar for ISO-certified operators.** An operator
   already certified against ISO 27001 does not have to
   translate their control estate into a regulatory
   vocabulary before adopting SecOps-NG content — the
   Annex A axis reads their existing certificate against
   the same D3FEND surface every EU regulatory column
   already reads against. The commons meets them where
   their evidence already lives.
2. **The ring closes on the same substrate.** Nothing about
   the shape shifted for the sixth column. Annex A resolves
   through `content/mappings/d3fend/` into the same OSCAL
   component-definition catalogue the five regulatory axes
   carry. The nightly traceability job that guards the
   ring already covers the sixth column at SKELETON depth
   — `control_refs → content/controls/` and
   `standard_refs → content/mappings/iso-27001/` both
   round-trip on the same walker. Regressions on any of
   the six axes surface on the same signal.

## Where to look

- **Framework repo:**
  - `content/mappings/d3fend/nis2/`,
    `content/mappings/d3fend/dora/`,
    `content/mappings/d3fend/cra/`,
    `content/mappings/d3fend/gdpr/`,
    `content/mappings/d3fend/eu-ai-act/`,
    `content/mappings/d3fend/iso-27001/` — the six
    crosswalks, one directory per framework, five at CORE
    and the sixth at SKELETON.
  - `content/mappings/d3fend/` — the shared substrate the
    six crosswalks read against.
  - The OSCAL component-definition columns for NIS2, DORA,
    CRA, GDPR, EU AI Act and ISO 27001 Annex A under
    `content/oscal/` — the regulatory-and-standards axis
    these crosswalks resolve into.

Six axes on one substrate, five at CORE, one at SKELETON,
one ring. The next good day is the one that pulls the sixth
column up to CORE alongside the other five — and after that,
the day another framework asks for a seventh column on the
same shape.
