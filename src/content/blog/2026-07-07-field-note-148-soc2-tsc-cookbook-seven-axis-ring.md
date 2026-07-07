---
title: "Field note #148 — SOC 2 TSC crosswalk cookbook ships: seven-axis regime ring carries a practitioner walkthrough per axis"
description: "Field note one hundred and forty-eight from the SecOps-NG Digital Commons. The SOC 2 Trust Services Criteria crosswalk gains its EXTEND tier — a cookbook walkthrough at docs/cookbook/soc2_crosswalk.md — closing SOC 2 to a full three-tier ring alongside Security (CC1-CC9), Availability (A1.1-A1.3), Confidentiality (C1.1-C1.2), Processing Integrity (PI1.1-PI1.5), and Privacy (P-series) already on-disk. Together with ISO 27001 Annex A, NIS2, DORA, GDPR, CRA, and NIST CSF 2.0, this is the seven-axis regime ring carrying a practitioner cookbook per axis."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "g-07", "crosswalk", "soc2", "trust-services-criteria", "tsc", "cookbook", "mapping", "oscal", "nis2", "dora", "gdpr", "cra", "iso27001", "nist-csf", "digital-commons", "field-note-148"]
---

Field note one hundred and forty-eight. The SOC 2 Trust
Services Criteria crosswalk gains its cookbook tier and
closes to a full three-tier ring on the crosswalk
surface. Alongside ISO 27001 Annex A, NIS2, DORA, GDPR,
CRA, and NIST CSF 2.0, the regime ring is now
seven axes deep with a practitioner walkthrough per
axis.

## What ships

Framework PR **#720** — `docs(cookbook)` F-MAP-SOC2
EXTEND — merged to main. A practitioner walkthrough
lands at `docs/cookbook/soc2_crosswalk.md`. It sits on
top of the SOC 2 TSC crosswalk YAML that shipped over
the preceding waves and gives an operator the
connective narrative for reading it.

The catalogue underneath the cookbook has been in place
for a while:

- `content/mappings/soc2/tsc-security.yaml` — Common
  Criteria CC1.1–CC9.2 (33 criteria). The mandatory
  baseline for any SOC 2 report.
- `content/mappings/soc2/tsc-availability.yaml` — A1.1–A1.3.
- `content/mappings/soc2/tsc-confidentiality.yaml` —
  C1.1–C1.2.
- `content/mappings/soc2/tsc-processing-integrity.yaml` —
  PI1.1–PI1.5.
- `content/mappings/soc2/tsc-privacy.yaml` — the
  P-series (P1.1, P2.1, P3.1, P4.1–P4.3, P5.1, P6.1,
  P6.7, P7.1).
- `content/mappings/soc2/oscal-component-definition.json` —
  an OSCAL 1.1.2 component definition for the whole SOC
  2 surface, pinned in nightly CI against a round-trip
  test.

The cookbook is the tier that turns a set of
machine-readable YAMLs into something an operator can
sit down with once and read end-to-end.

## What the cookbook does

Three concrete things, framed for the community reader
rather than the auditor or the sales floor:

- **Names what the crosswalk asserts, and what it does
  not.** SOC 2 is a private-sector assurance framework
  maintained by the AICPA. It is not an EU statutory
  instrument, and the crosswalk does not turn a SOC 2
  report into evidence of NIS2 / DORA / CRA / GDPR
  compliance (or the other way around). The cookbook
  states that boundary up front so the operator does
  not misread the artifact.
- **Explains the criterion anatomy.** Each entry
  carries a stable `soc2:<criterion-slug>` id, the
  AICPA criterion label (`CC6.1`, `A1.2`, `P4.2`), the
  obligation text as the outcome to discharge,
  `control_refs` at the catalogue level,
  `playbook_refs` at the workflow level, and a `notes`
  paragraph naming which slice of the criterion the
  catalogue exercises and which slice remains
  operator-owned. Where the SecOps-NG catalogue does
  not exercise a criterion operationally, the entry
  ships with `playbook_refs: []` and a `notes`
  paragraph explaining why — the boundary is stated on
  the file, not left implied.
- **Two reading strategies.** *Category-first* — read
  the per-category file top-to-bottom against the
  report scope. Security is always in scope; the other
  four categories are included only when the entity
  commits to them. *Anchor-first* — grep the files for
  a playbook or control id to see every TSC criterion
  that anchor exercises. Either strategy walks the
  same graph, and both walk back out through the
  EU regime mappings under
  `content/mappings/{nis2,dora,cra,gdpr}/`.

## Why an EU-adjacent operator reads this

An operator who already discharges NIS2 Art. 21,
DORA Chapter II, CRA vendor obligations, and GDPR
Art. 32 against the SecOps-NG catalogue picks up three
concrete uses:

- **US-vendor due diligence.** When a US SaaS vendor,
  a cross-border customer, or an outsourced processor
  frames the due-diligence surface in SOC 2 terms, the
  operator points at the TSC criterion and walks the
  crosswalk down to the shipped artifact — no parallel
  SOC 2-only catalogue to maintain.
- **US-to-EU posture gap analysis.** An organisation
  that already carries a SOC 2 report (Type I or Type
  II) and is bringing its posture into the EU
  statutory frame can walk the same catalogue from the
  TSC side and see, criterion by criterion, which
  anchors the EU regime mappings pick up in turn.
- **Bridging vocabulary, not replacing evidence.** The
  crosswalk lets a practitioner navigate between two
  vocabularies against the same shipped artifacts. It
  does not fold either surface into the other, and it
  does not turn a SOC 2 opinion into EU statutory
  evidence.

The cookbook holds that framing steady across the
whole document.

## The seven-axis regime ring

The regime axes on the crosswalk surface each carry a
practitioner walkthrough now:

- ISO 27001 Annex A
- NIS2 (Art. 21, self-assessment surface)
- DORA (Chapter II ICT risk management; Chapter IV TLPT)
- GDPR (Art. 32 technical and organisational measures)
- CRA (vendor obligations for products with digital
  elements)
- NIST CSF 2.0 (22 Categories, 106 Subcategories, and
  the cookbook that closed the eighth crosswalk axis
  on the same day it opened)
- SOC 2 TSC (Security, Availability, Confidentiality,
  Processing Integrity, Privacy)

Every axis has an operator sitting on it somewhere in
the community, and every axis now has a cookbook
they can read without a legal or assurance
translation layer in between.

## The G-06 / G-07 signal

Two goals register cleanly against this ship:

- **G-06 — crosswalk axis coverage.** The SOC 2 axis
  closes to a full three-tier ring. Five per-category
  YAMLs, an OSCAL component definition round-trip test
  in nightly CI, a D3FEND-against-SOC-2 crosswalk under
  `content/mappings/d3fend/soc2.yaml`, and now a
  cookbook. The commons carries the same three-tier
  shape (SKELETON / CORE / EXTEND) across every regime
  axis.
- **G-07 — operator adoption signal.** The reader an
  operator has been waiting for — the one who runs an
  EU catalogue and has to answer a SOC 2 questionnaire
  from a US counterparty tomorrow morning — now has a
  document that reads in one sitting and points at the
  shipped artifacts every step.

## Where to look

- **Framework repo:**
  - `content/mappings/soc2/` — the five per-category
    YAML files, the OSCAL component definition, and
    the on-disk README.
  - `docs/cookbook/soc2_crosswalk.md` — the
    practitioner cookbook: regime scope, criterion
    anatomy, both reading strategies, and a worked
    walkthrough of a criterion from the TSC label down
    to the SecOps-NG anchors and back out to the EU
    regime mappings.
  - `content/mappings/d3fend/soc2.yaml` — the D3FEND
    defensive-technique crosswalk against the SOC 2
    surface, for practitioners who reason in D3FEND
    terms.
  - `ROADMAP.md` — the F-MAP-SOC2 entry now reads
    Shipped.

Seven regime axes on the ring, each carrying a
cookbook a community operator can read on their own
terms. If you run a catalogue against EU statutory
obligations and someone across the Atlantic asks you
to answer for it in TSC vocabulary, the walkthrough is
the shortest path in.
