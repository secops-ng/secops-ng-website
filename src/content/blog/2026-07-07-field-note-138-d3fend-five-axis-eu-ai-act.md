---
title: "Field note #138 — D3FEND five-axis ring opens: EU AI Act crosswalk lands, defensive-technique traceability now runs on every EU-regulation column"
description: "Field note one hundred and thirty-eight from the SecOps-NG Digital Commons. With the EU AI Act D3FEND crosswalk landing at SKELETON, the defensive-technique traceability ring now extends to every one of the five EU-regulation axes the framework carries — NIS2, DORA, CRA, GDPR and EU AI Act — the same shape, the same substrate, one column further out."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "d3fend", "control-map", "crosswalk", "nis2", "dora", "cra", "gdpr", "eu-ai-act", "regulatory-mapping", "oscal", "digital-commons", "field-note-138"]
---

Field note one hundred and thirty-eight. Note #136 closed
the four-axis D3FEND ring — NIS2, DORA, CRA and GDPR, all
at CORE, defensive-technique traceability resolving against
every EU regulation the framework carried. It ended on a
line about the next good day being the one that opens a
fifth column on the same substrate.

That column opened today. The EU AI Act D3FEND crosswalk
has landed at SKELETON, and the ring the framework carries
now runs on five axes, not four.

## What landed

One pull request against `secops-ng-framework`, merged
forward-public today:

- **[#701](https://github.com/secops-ng/secops-ng-framework/pull/701)**
  — `F-MAP-D3FEND-EUAIACT` SKELETON. The scaffold that
  names every EU AI Act obligation the D3FEND surface will
  resolve against — Art.9 risk-management system, Art.11
  technical documentation, Art.13 transparency and provision
  of information to deployers, Art.72 post-market monitoring.

At SKELETON the shape is in and the identifiers are in. The
D3FEND-side edges — which defensive techniques satisfy each
of those obligations — are what the CORE wave on this axis
fills in next. That wave is already in flight; this field
note is not that announcement, this field note is the ring
one axis wider.

## The five-axis ring, after the wave

| Axis        | D3FEND crosswalk state |
| ----------- | ---------------------- |
| NIS2        | CORE                   |
| DORA        | CORE                   |
| CRA         | CORE                   |
| GDPR        | CORE                   |
| EU AI Act   | SKELETON               |

Five columns of the OSCAL component-definition catalogue,
one defensive-technique surface, the fifth column open on
the same substrate the other four already read.

## What this means for an operator

The two directions of reading note #136 named against four
axes now extend, at SKELETON depth, to a fifth:

1. **Regulation → technique.** An operator opening the
   framework at an EU AI Act obligation — Art.9 risk
   management, Art.11 technical documentation, Art.13
   transparency to deployers, Art.72 post-market monitoring
   — can now see the D3FEND identifiers the CORE wave will
   resolve that obligation against. The scaffold names the
   obligation, the identifier and the direction of read.
2. **Technique → regulation.** An operator evaluating a
   D3FEND technique they already run or plan to run can now
   trace it, once the CORE wave lands, back to a clause under
   any of the five regulations the framework carries — not
   four.

The direction of reading you need is still the one the audit
question in front of you is asking. What has changed is the
set of regulations the ring answers under. Operators working
under any combination of NIS2, DORA, CRA, GDPR and EU AI Act
now read one substrate.

## The G-02 signal

G-02 is the regulatory-mapping coverage goal. Two things
about this wave register against it:

1. **Five regimes, one substrate, one shape.** Every EU
   regulation the framework carries on the D3FEND axis reads
   through `content/mappings/d3fend/` and resolves against
   the same OSCAL component-definition catalogue the
   regulatory axis carries. Nothing about the shape shifts
   for the fifth column — the substrate note #136 named as
   symmetric across four axes is symmetric across five now.
   The next axis, whichever regulation it turns out to be,
   lands on the same substrate again.
2. **CI holds the ring.** The nightly traceability job that
   guards the four-axis ring already covers the fifth column
   at SKELETON depth — `control_refs → content/controls/`
   and `regulation_refs → content/mappings/eu-ai-act/` both
   round-trip on the same walker. Regressions on any of the
   five axes surface on the same signal.

## Where to look

- **Framework repo:**
  - `content/mappings/d3fend/nis2/`,
    `content/mappings/d3fend/dora/`,
    `content/mappings/d3fend/cra/`,
    `content/mappings/d3fend/gdpr/`,
    `content/mappings/d3fend/eu-ai-act/` — the five
    crosswalks, one directory per regulation, four at
    CORE and the fifth at SKELETON.
  - `content/mappings/d3fend/` — the shared substrate the
    five crosswalks read against.
  - The OSCAL component-definition columns for NIS2, DORA,
    CRA, GDPR and EU AI Act under `content/oscal/` — the
    regulatory axis these crosswalks resolve into.

Five axes on one substrate, one at SKELETON, four at CORE,
one ring. The next good day is the one that pulls the fifth
column up to CORE alongside the other four.
