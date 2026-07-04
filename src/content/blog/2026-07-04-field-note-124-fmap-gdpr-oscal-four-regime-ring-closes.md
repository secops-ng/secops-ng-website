---
title: "Field note #124 — F-MAP-GDPR-OSCAL ships: a GDPR OSCAL component definition lands with a nightly parity lane, and the four-regime OSCAL ring closes across CRA, DORA, NIS2, and GDPR (G-02)"
description: "Field note one hundred and twenty-four from the SecOps-NG Digital Commons. The GDPR OSCAL component definition lands under content/mappings/gdpr/oscal-component-definition.json, mirroring the CRA, DORA, and NIS2 pattern already in the tree, and a nightly orphan-CI lane now asserts schema, coverage, and a fifty-five implemented-requirement floor out-of-band from PR CI. All four regulatory regimes the framework carries now expose machine-readable OSCAL component definitions with the same nightly parity floor. The regulatory OSCAL ring is closed."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "gdpr", "oscal", "component-definition", "cra", "dora", "nis2", "orphan-ci", "regulatory-mapping", "digital-commons", "field-note-124"]
---

Field note one hundred and twenty-four. The compliance-playbook
wave has been the loud thread of the day, but underneath it a
quieter axis has been closing an item at a time: the machine-
readable OSCAL surface of the regulatory mappings. NIS2 shipped
its OSCAL component definition weeks ago. CRA followed. DORA
followed. GDPR was the last regime carrying article YAMLs
without an OSCAL companion. Today it stops being the last. The
four-regime OSCAL ring is closed.

## What shipped

Two pull requests, one component definition, one nightly lane:

- **Framework PR #653 (F-MAP-GDPR-OSCAL SKELETON,
  `feat(mappings/gdpr)`).** Adds
  `content/mappings/gdpr/oscal-component-definition.json`,
  an OSCAL 1.1.2 component definition mirroring the pattern
  already shipped for NIS2, CRA, and DORA — one
  `implemented-requirement` per `(entry, control_ref)` pair
  across the GDPR article YAMLs in the tree: Art. 5
  principles, Art. 6 lawful basis, Art. 15–22 data-subject
  rights, Art. 25 data protection by design and by default,
  Art. 26–28 controller / processor and joint-controller
  arrangements, Art. 32 security of processing, Art. 33–34
  personal-data-breach notification, Art. 35 data protection
  impact assessment. Ships alongside
  `tests/content/test_oscal_gdpr_component_definition.py`
  with OSCAL 1.1.2 schema validation, per-pair round-trip,
  obligation-verbatim description parity, source-article
  round-trip, and control-id slug derivation.
- **Framework PR #654 (F-MAP-GDPR-OSCAL CORE,
  `ci(orphan-ci)`).** Wires a nightly orphan-CI lane that
  runs the schema and coverage tests against the shipped
  component definition and asserts the implemented-
  requirement count stays at or above the SKELETON baseline
  of fifty-five IRs. Silent shrinkage — an accidental drop
  of GDPR coverage because an article YAML was refactored
  without updating the OSCAL companion — now surfaces out
  of band from PR CI, on the same nightly cadence that
  guards CRA, DORA, and NIS2.

Both PRs also register the F-MAP-GDPR-OSCAL entry against a new
**Epic MAP** on the roadmap — *regulatory OSCAL component-
definition coverage* — with F-MAP-GDPR-OSCAL marked shipped and
its SKELETON and CORE PRs listed as the acceptance evidence.

## Why the fourth regime matters more than the third

Three regimes with OSCAL component definitions was already
enough for many operator workflows — CRA, DORA, and NIS2 cover
the security-obligation surface most EU operators score
themselves against on a quarterly cadence. GDPR sat on the
side. It has always had article YAMLs and the same mapping
plumbing every other regime carries; what it did not have was
the OSCAL companion an OSCAL-aware tool chain expects.

That gap mattered for one specific reason: the OSCAL surface
is where the mappings stop being human documents and start
being machine data. An operator running a GRC platform, a
compliance-as-code pipeline, or a static assessment tool that
speaks OSCAL 1.1.2 could ingest the CRA, DORA, and NIS2
mappings today. GDPR had to be re-derived by hand every time.
Silent asymmetry — three regimes fluent in OSCAL, one still
requiring a bridge — is exactly the kind of thing that quietly
erodes the four-regime coverage story the framework carries in
prose. Now it does not require prose.

## What the nightly lane actually asserts

The orphan-CI lane is named that way for a reason: it runs
detached from PR CI, on the nightly `main` build, and it
guards content-shaped invariants that no per-PR job would
naturally see. For F-MAP-GDPR-OSCAL CORE the invariants are
three:

1. The component definition file parses against the vendored
   OSCAL 1.1.2 JSON schema.
2. Every `(entry, control_ref)` pair present in the shipped
   GDPR article YAMLs appears as an `implemented-requirement`
   in the component definition, and the description round-
   trips verbatim.
3. The implemented-requirement count is greater than or equal
   to the SKELETON baseline of fifty-five. New GDPR entries
   can grow the file; a refactor that quietly drops entries
   breaks the nightly.

The floor number — fifty-five — is not a target. It is a
witness. The moment an article YAML is edited in a way that
would silently shrink OSCAL coverage, the nightly says so on
`main` instead of that surface degrading unnoticed until an
operator discovers a mapping gone missing from their pipeline.

## The four-regime OSCAL ring, in one sentence

CRA, DORA, NIS2, and GDPR now all carry an OSCAL 1.1.2
component definition under `content/mappings/<regime>/oscal-
component-definition.json`, backed by per-regime schema and
coverage tests, and guarded by a nightly orphan-CI lane
enforcing an implemented-requirement floor against silent
shrinkage. That is the whole story.

For a Digital Commons whose posture is that regulatory content
is portable data rather than vendor deliverable, the OSCAL
ring closing is not a feature launch. It is a symmetry
correction. Four regimes were always claimed as first-class.
As of today, four regimes are first-class the same way the
compilers are first-class — with machine-readable artifacts,
with tests, and with a nightly witness that catches drift.

## Where to look

- **Framework repo:**
  - `content/mappings/gdpr/oscal-component-definition.json` —
    the shipped component definition.
  - `content/mappings/cra/oscal-component-definition.json`,
    `content/mappings/dora/oscal-component-definition.json`,
    `content/mappings/nis2/oscal-component-definition.json` —
    the three regime companions the GDPR file now stands
    alongside.
  - `tests/content/test_oscal_gdpr_component_definition.py` —
    schema and coverage tests.
  - `.github/workflows/orphan-ci.yml` — the nightly lane,
    including the four regime jobs.
  - `ROADMAP.md` — Epic MAP entry, F-MAP-GDPR-OSCAL marked
    shipped with PRs #653 and #654 as evidence.
- **PRs:** framework PRs #653 (SKELETON) and #654 (CORE).

An operator wiring an OSCAL-aware pipeline into the SecOps-NG
mappings can now, as of tonight, point at four regimes and get
the same shape of data back from each. That is the entire
point of the ring closing.
