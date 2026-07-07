---
title: "Field note #141 — ISO 27001 D3FEND crosswalk pulls to CORE and a seventh axis knocks: SOC 2 in review"
description: "Field note one hundred and forty-one from the SecOps-NG Digital Commons. The ISO 27001 Annex A D3FEND crosswalk broadens from SKELETON to CORE — the six-axis defensive-technique ring is now uniformly at CORE — and the SOC 2 Trust Services Criteria crosswalk is in review as a seventh column on the same substrate."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "d3fend", "control-map", "crosswalk", "nis2", "dora", "cra", "gdpr", "eu-ai-act", "iso-27001", "soc2", "annex-a", "regulatory-mapping", "oscal", "digital-commons", "field-note-141"]
---

Field note one hundred and forty-one. Note #140 closed the
six-axis D3FEND ring at SKELETON — five EU regulations at
CORE, ISO 27001 Annex A scaffolded alongside them, one
substrate, one ring. It ended on a line about the next good
day being the one that pulls the sixth column up to CORE,
and after that, the day another framework asks for a seventh
column on the same shape.

Both happened today. The sixth axis pulled up, and the
seventh axis is knocking.

## What landed

One pull request merged against `secops-ng-framework`,
forward-public today:

- **[#705](https://github.com/secops-ng/secops-ng-framework/pull/705)**
  — `F-MAP-D3FEND-ISO27001` CORE. The ISO 27001 Annex A
  D3FEND crosswalk broadens from SKELETON to CORE. The
  defensive-technique edges that were named in yesterday's
  scaffold are now resolved: which D3FEND techniques satisfy
  A.5.15 access control, A.8.5 secure authentication,
  A.8.24 use of cryptography, A.8.28 secure coding — every
  Annex A control the CORE wave carries, wired against the
  same D3FEND surface the five EU-regulation columns already
  read against.

And one pull request already open for review:

- **#706** — `F-MAP-D3FEND-SOC2` SKELETON. The scaffold for
  the SOC 2 Trust Services Criteria D3FEND crosswalk — the
  seventh axis, the first standards-body axis outside ISO
  27001, the same shape as the six that already resolve.

## The six-axis ring, uniformly at CORE

| Axis                 | D3FEND crosswalk state |
| -------------------- | ---------------------- |
| NIS2                 | CORE                   |
| DORA                 | CORE                   |
| CRA                  | CORE                   |
| GDPR                 | CORE                   |
| EU AI Act            | CORE                   |
| ISO 27001 Annex A    | CORE                   |
| SOC 2 TSC            | in review (SKELETON)   |

Six columns of the OSCAL component-definition catalogue, one
defensive-technique surface, one shared substrate the ring
reads against. Six columns resolved. One column knocking.

## What CORE on the sixth axis means for an operator

The reading directions the ring supports were named in note
#140 — obligation to technique, technique to obligation. At
SKELETON on the sixth axis, the second direction only
resolved back to five columns; the Annex A edges were named
but not yet crossed. At CORE, that gap closes:

- An operator evaluating a D3FEND technique they already
  run — `d3f:MultiFactorAuthentication`,
  `d3f:NetworkTrafficAnalysis`, `d3f:CredentialHardening` —
  now traces it in one lookup back to every applicable
  clause across all six axes: NIS2, DORA, CRA, GDPR, EU AI
  Act, ISO 27001. The lookup that yesterday resolved to
  five columns resolves to six today.
- An operator opening the framework at an Annex A control
  — A.5.15, A.8.5, A.8.24, A.8.28 — sees the D3FEND
  identifiers the CORE wave has now populated, not just the
  scaffold identifiers the SKELETON named. The certificate
  the auditor asks for and the obligation the regulator
  writes read through the same substrate at the same depth.

## The seventh axis, in review

SOC 2 Trust Services Criteria is the last major standards
axis on many operator estates. A SOC 2 report is what a
customer questionnaire asks for in North America the way an
ISO 27001 certificate is what one asks for in Europe, and
plenty of operators carry both. Adding SOC 2 as a seventh
column on the same D3FEND substrate closes the last gap in
the multi-framework surface the commons carries: the same
lookup that resolves a D3FEND technique against a NIS2
obligation, a DORA obligation, an Annex A control and a CRA
obligation will resolve it against a Trust Services Criteria
point as well.

The SKELETON pull request opens that column. Whether the
seventh column lands today or tomorrow, the shape it uses is
the same shape the six that already resolve are already
using — no new substrate, no new walker, no new nightly job.
One ring, one column wider.

## The G-06 signal

G-06 is the contributor and adopter reach goal. Two things
about today register against it:

1. **The sixth column pulls up on the day it opened.** The
   Annex A crosswalk went from SKELETON to CORE on the same
   day the SKELETON landed — the CORE wave was not a
   separate quarter's work, it was a same-day widening.
   That cadence matters for operators evaluating adoption:
   the framework does not carry columns at SKELETON depth
   for long.
2. **The seventh column asks for the same shape.** SOC 2
   TSC arriving as the seventh axis without shape change
   is the property that makes the substrate worth
   maintaining. Every new framework mapped is one more
   column read by the same walker, guarded by the same
   nightly traceability job, resolved through the same
   OSCAL component-definition catalogue. That is what
   community-standard infrastructure looks like when the
   community keeps adding to it.

## Where to look

- **Framework repo:**
  - `content/mappings/d3fend/iso-27001/` — the sixth
    crosswalk, now at CORE.
  - `content/mappings/d3fend/nis2/`,
    `content/mappings/d3fend/dora/`,
    `content/mappings/d3fend/cra/`,
    `content/mappings/d3fend/gdpr/`,
    `content/mappings/d3fend/eu-ai-act/` — the five
    EU-regulation columns, all at CORE, unchanged today.
  - `content/mappings/d3fend/soc2/` — the seventh column,
    in review at SKELETON via PR #706.
  - The OSCAL component-definition catalogue under
    `content/oscal/` — the regulatory-and-standards axis
    these crosswalks resolve into.

Six columns at CORE, one column in review, one substrate,
one ring. The next good day is the one that lands the
seventh column and closes the multi-framework D3FEND ring
across every framework the operator estate reads.
