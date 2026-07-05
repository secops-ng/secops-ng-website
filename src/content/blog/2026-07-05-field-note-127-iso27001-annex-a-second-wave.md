---
title: "Field note #127 — the ISO/IEC 27001:2022 Annex A crosswalk continues: A.5 organisational controls fill in and the A.8 technological theme reaches A.8.17 (G-06)"
description: "Field note one hundred and twenty-seven from the SecOps-NG Digital Commons. A second wave of Annex A merges extends the ISO/IEC 27001:2022 crosswalk under content/mappings/iso27001/: the A.5 organisational file fills in A.5.2 through A.5.6, and the A.8 technological file now covers A.8.3 through A.8.17. A.8.18 through A.8.22 are in flight and land in the same wave. Operators reading the framework in Annex A vocabulary now see direct playbook mappings across most of the technological theme and the anchor of the organisational theme."
pubDate: 2026-07-05
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "iso27001", "annex-a", "crosswalk", "mappings", "digital-commons", "field-note-127"]
---

Field note one hundred and twenty-seven. The ISO/IEC 27001:2022
Annex A crosswalk that opened yesterday under field note #126
has continued through four more merges, and the crosswalk now
covers a meaningful stretch of both the organisational and the
technological themes. This is the second wave, in the same
shape as the first.

## What extended today

Under `content/mappings/iso27001/`, the Annex A crosswalk now
extends as follows:

- **A.5 Organisational — filled in.** `annex-a-5-organisational.yaml`
  now carries A.5.2 Information security roles and responsibilities,
  A.5.3 Segregation of duties, A.5.4 Management responsibilities,
  A.5.5 Contact with authorities, and A.5.6 Contact with special
  interest groups (framework PR #660), sitting alongside the A.5.1
  anchor that shipped in the opening wave.
- **A.8 Technological — through A.8.17.** `annex-a-8-technological.yaml`
  now carries A.8.3 Information access restriction, A.8.4 Access
  to source code, A.8.5 Secure authentication, A.8.6 Capacity
  management, A.8.7 Protection against malware (framework
  PR #661), then A.8.8 through A.8.12 (PR #662), then A.8.13
  through A.8.17 (PR #663). Fifteen technological controls now
  read against the shared framework in the same YAML shape as
  the rest of the crosswalks.

A.8.18 through A.8.22 are approved and in flight — the closing
five controls of the A.8 technological theme land imminently in
the same file, in the same shape.

## Why this matters for an operator running ISO 27001

Field note #126 opened the crosswalk with the anchor of each
Annex A theme. That was enough to establish the shape, but not
enough for an operator to trace their working ISMS end to end
against the framework. The second wave changes that for the
technological theme: an operator auditing SecOps-NG playbooks
against A.8 controls now has coverage from A.8.1 through A.8.17
in the shipped crosswalk, which is where most of the day-to-day
technical evidence in an ISMS review actually sits — access
restriction, source-code protection, secure authentication,
capacity, malware, and the operational cluster from A.8.8
onward.

On the organisational side, the A.5 fill-in means the roles,
responsibilities, and duty-segregation controls an auditor
opens an ISMS review with are now in the crosswalk too, mapped
into the playbooks that carry them.

## Same conventions, same forward path

Each new entry follows the same crosswalk conventions the first
wave established: a stable `iso27001:a-<theme>-<number>-<slug>`
id, the Annex A control text quoted from the standard as fair
use, the SecOps-NG playbooks and controls that satisfy it, and
— where relevant — the neighbouring regime articles it lines up
with across NIS2, DORA, CRA, and GDPR. Nothing about the ISMS
entry point into the commons has changed shape; the surface
just covers more of the standard.

The remaining Annex A theme entries — the rest of A.6 people,
the rest of A.7 physical, and the closing A.8.18–A.8.22
technological controls now landing — follow in subsequent
waves, in the same files, in the same shape. An operator
watching a specific Annex A control can predict where it will
land before it lands.

## Where to look

- **Framework repo, this wave:**
  - `content/mappings/iso27001/annex-a-5-organisational.yaml`
    — A.5.1 through A.5.6, organisational controls.
  - `content/mappings/iso27001/annex-a-8-technological.yaml`
    — A.8.1 through A.8.17, technological controls.
  - Framework PRs #660, #661, #662, #663 (merged); #664
    (A.8.18–A.8.22, in flight).
- **Prior wave:** field note #126 for the anchor of each Annex
  A theme and the crosswalk conventions.

For any EU operator whose ISMS is the entry point into their
security programme: the Annex A crosswalk now covers enough of
the technological and organisational surface to be worth
reading end to end against your existing control set. Where a
mapping reads wrong against the Annex A text, the framework
issue tracker is where the correction goes. The crosswalk is
public, versioned in git, and audited on public PRs — no gated
edition, no private path.
