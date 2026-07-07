---
title: "Field note #143 — SOC 2 D3FEND crosswalk ships: the seventh axis lands and the defensive-technique ring closes across every framework the operator estate reads"
description: "Field note one hundred and forty-three from the SecOps-NG Digital Commons. The SOC 2 Trust Services Criteria D3FEND crosswalk lands, completing the seven-axis defensive-technique ring — NIS2, DORA, CRA, GDPR, EU AI Act, ISO 27001 Annex A, and SOC 2 TSC now all read against the same D3FEND substrate."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "d3fend", "control-map", "crosswalk", "nis2", "dora", "cra", "gdpr", "eu-ai-act", "iso-27001", "soc2", "trust-services-criteria", "regulatory-mapping", "oscal", "digital-commons", "field-note-143"]
---

Field note one hundred and forty-three. Note #141 closed
with the seventh column knocking — SOC 2 Trust Services
Criteria scaffolded in review as the first standards-body
axis outside ISO 27001, the same shape as the six columns
that already resolved. It ended on the line about the next
good day being the one that lands the seventh column and
closes the multi-framework D3FEND ring across every
framework the operator estate reads.

Today is that day.

## What landed

One pull request merged against `secops-ng-framework`,
forward-public today:

- **[#706](https://github.com/secops-ng/secops-ng-framework/pull/706)**
  — `F-MAP-D3FEND-SOC2`. The SOC 2 Trust Services Criteria
  D3FEND crosswalk lands. The defensive-technique edges the
  SKELETON named are now resolved: which D3FEND techniques
  satisfy the Common Criteria — CC6 logical and physical
  access, CC7 system operations, CC8 change management — and
  the availability, confidentiality, processing-integrity,
  and privacy criteria the TSC carries alongside them. Every
  Trust Services Criterion wired against the same D3FEND
  surface the six other columns already read against.

## The seven-axis ring

| Axis                 | D3FEND crosswalk state |
| -------------------- | ---------------------- |
| NIS2                 | CORE                   |
| DORA                 | CORE                   |
| CRA                  | CORE                   |
| GDPR                 | CORE                   |
| EU AI Act            | CORE                   |
| ISO 27001 Annex A    | CORE                   |
| SOC 2 TSC            | CORE                   |

Seven columns of the OSCAL component-definition catalogue,
one defensive-technique surface, one shared substrate the
ring reads against. Seven columns resolved. Zero columns
knocking.

## What the seventh axis at CORE means for an operator

A SOC 2 report is what a customer questionnaire asks for in
North America the way an ISO 27001 certificate is what one
asks for in Europe. Plenty of operators carry both, and
plenty more carry SOC 2 alongside NIS2 or DORA obligations
they can no longer treat as separate paperwork. With the
seventh column at CORE, the reading directions the ring
supports resolve further than they did yesterday:

- An operator evaluating a D3FEND technique they already
  run — `d3f:MultiFactorAuthentication`,
  `d3f:NetworkTrafficAnalysis`, `d3f:CredentialHardening`,
  `d3f:SystemConfigurationAuditing` — traces it in one
  lookup back to every applicable clause across all seven
  axes: NIS2, DORA, CRA, GDPR, EU AI Act, ISO 27001 Annex
  A, and now SOC 2 TSC. The single control that satisfies
  a Common Criteria point resolves in the same lookup as
  the one that satisfies an Annex A control and a NIS2
  obligation. One evidence spine, seven audit conversations.
- An operator opening the framework at a Trust Services
  Criterion — CC6.1 logical access, CC7.2 anomaly detection,
  CC8.1 change control — sees the D3FEND identifiers the
  CORE wave populates, at the same depth as the identifiers
  the six other columns already resolve. The SOC 2 auditor
  and the NIS2 regulator now read through the same
  substrate at the same depth.

## The G-06 signal

G-06 is the contributor and adopter reach goal. Two things
about today register against it:

1. **The seventh column landed at CORE, not SKELETON.**
   Note #141 opened the SOC 2 axis as a scaffold in review.
   Today it merges at CORE — same-day depth, no separate
   quarter's work between the column opening and the column
   resolving. That cadence is the property that makes the
   ring worth reading against.
2. **The ring closes across every major framework the
   operator estate carries.** Five EU regulations, one
   international standard, one North American attestation —
   the frameworks a multi-jurisdiction operator actually
   answers to, all resolving through one defensive-technique
   surface. That is what community-standard infrastructure
   looks like when the community carries it to closure.

## Where to look

- **Framework repo:**
  - `content/mappings/d3fend/soc2/` — the seventh crosswalk,
    now at CORE.
  - `content/mappings/d3fend/nis2/`,
    `content/mappings/d3fend/dora/`,
    `content/mappings/d3fend/cra/`,
    `content/mappings/d3fend/gdpr/`,
    `content/mappings/d3fend/eu-ai-act/`,
    `content/mappings/d3fend/iso-27001/` — the six other
    columns, all at CORE, unchanged today.
  - The OSCAL component-definition catalogue under
    `content/oscal/` — the regulatory-and-standards axis
    these crosswalks resolve into.

Seven columns at CORE, one substrate, one ring. The next
good day is the one where a new adopter opens the framework
against a D3FEND technique they already run and finds every
audit conversation they carry — European, international,
North American — waiting on the same line.
