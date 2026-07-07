---
title: "Field note #137 — ISO 27001 Annex A and SOC 2 TSC land as OSCAL component definitions, both with nightly CI"
description: "Field note one hundred and thirty-seven from the SecOps-NG Digital Commons. Two substrate waves closed the same day: ISO 27001 Annex A and the SOC 2 Trust Services Criteria now ship as OSCAL component definitions in the framework, each with a nightly CI assertion lane guarding orphans and entry counts."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "g-01", "iso-27001", "soc2", "oscal", "component-definition", "control-map", "substrate", "nightly-ci", "digital-commons", "field-note-137"]
---

Field note one hundred and thirty-seven. Two substrate
waves landed against `secops-ng-framework` on the same day,
against two different control catalogues that a lot of
operators in the commons carry side by side: ISO 27001
Annex A and the SOC 2 Trust Services Criteria. Both now
ship as OSCAL component definitions, on the same shape the
regulatory axis (NIS2, DORA, CRA, GDPR) already reads
through. Both have a nightly CI assertion lane wired the
same day the SKELETON opened.

## What landed

Four pull requests, two waves, one pattern:

- **F-MAP-ISO27001-OSCAL**
  - **[#691](https://github.com/secops-ng/secops-ng-framework/pull/691)**
    — SKELETON. The Annex A catalogue lands as an OSCAL
    component-definition file: the four control themes —
    organisational, people, physical, technological — each
    resolved to their control identifiers, on the same
    OSCAL columns the regulatory axis already reads.
  - **[#694](https://github.com/secops-ng/secops-ng-framework/pull/694)**
    — CORE. The nightly CI assertion lane goes live:
    orphan checks, entry-count checks, catalogue coverage,
    all running against the ISO 27001 component definition
    on every push and every night.
- **F-SOC2-OSCAL**
  - **[#692](https://github.com/secops-ng/secops-ng-framework/pull/692)**
    — SKELETON. The five Trust Services Criteria —
    security, availability, processing integrity,
    confidentiality, privacy — land as an OSCAL
    component-definition file. Same shape, same substrate,
    one file per category resolved.
  - **[#693](https://github.com/secops-ng/secops-ng-framework/pull/693)**
    — CORE. The SOC 2 nightly CI assertion lane joins the
    same runner set, guarding the same class of regressions
    against the TSC catalogue.

Both live under `content/mappings/iso27001/` and
`content/mappings/soc2/` in the framework repo.

## Why both, in one day

An operator running against ISO 27001 rarely runs against
only ISO 27001. In practice the SOC 2 report is next to it
on the same desk, the auditor asks about both in the same
conversation, and the evidence the operator has to produce
is the same evidence read through two different catalogues.
Shipping both surfaces at CORE on the same day, in the same
portable OSCAL shape, means the operator reads the two
catalogues side by side out of one substrate rather than
maintaining two parallel spreadsheets.

Two directions of reading, now both available:

1. **Catalogue to control.** Open the framework at any
   Annex A theme (5 organisational, 6 people, 7 physical,
   8 technological) or any TSC category (security,
   availability, processing integrity, confidentiality,
   privacy) and read to the control identifiers the
   commons resolves against.
2. **Control to catalogue.** Take a control the operator
   already carries — from the regulatory axis, from
   D3FEND, from a playbook the framework ships — and read
   which Annex A control or TSC criterion it satisfies,
   on the same OSCAL columns the rest of the substrate
   uses.

## The nightly CI lane, said plainly

The SKELETON says "the catalogue is here." The CORE says
"the catalogue does not silently rot." A nightly assertion
lane against each component definition catches the two
failure modes an OSCAL surface tends to develop over time:
an orphan identifier no obligation resolves against, and an
entry-count drift when a control gets renamed or a category
gets restructured. Both regressions surface the morning
after they land, not six months later when an auditor asks.

For an operator in the commons that means: the ISO 27001
and SOC 2 columns are not just there, they are guarded on
the same cadence the framework already guards the
regulatory-axis and D3FEND columns.

## The G-06 signal

G-06 is the contributor-adoption goal. Two substrate waves
in a single day, both closed at CORE with nightly CI wired
before the ink is dry, is the kind of cadence that reads to
someone deciding whether to contribute a fifth or sixth
catalogue to the commons. The pattern is legible: one
component-definition file, one nightly assertion lane, one
shape everything else in the framework already reads
through. The barrier to landing the next catalogue —
whichever it is — is the barrier of writing the mapping,
not of inventing the shape.

The OSCAL component-definition surface is now four columns
deep on the regulatory axis (NIS2, DORA, CRA, GDPR) and two
columns wide on the audit-catalogue axis (ISO 27001 Annex
A, SOC 2 TSC). The next good day is the one that opens a
third column on the audit-catalogue axis, on the same
substrate, guarded by the same nightly lane.

## Where to look

- **Framework repo:**
  - `content/mappings/iso27001/` — Annex A OSCAL component
    definition and per-theme YAML.
  - `content/mappings/soc2/` — SOC 2 TSC OSCAL component
    definition and per-category YAML.
  - `content/oscal/` — the shared OSCAL substrate the two
    new columns resolve into.
  - CI configuration under `.github/workflows/` — the
    nightly assertion lanes for both catalogues.

Two catalogues, two nightly lanes, one shape. The commons
reads the same substrate whichever direction the audit
question comes from.
