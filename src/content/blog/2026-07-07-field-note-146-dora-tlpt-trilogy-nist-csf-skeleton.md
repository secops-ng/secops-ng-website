---
title: "Field note #146 — the DORA-TLPT trilogy closes on the same day it opens, and NIST CSF 2.0 opens as the eighth crosswalk axis"
description: "Field note one hundred and forty-six from the SecOps-NG Digital Commons. The F-WF-DORA-TLPT trilogy — CACAO v2 threat-led penetration testing scaffold, three compile targets with byte-parity goldens across n8n, Temporal, and LangGraph, and a dora_tlpt_programme cookbook walkthrough — ships end-to-end against DORA Article 24 and Article 26. On the same day, NIST CSF 2.0 opens as the eighth crosswalk axis with the GV/ID/PR/DE/RS/RC Core Functions mapping. Three trilogies closed on 2026-07-07 and one new crosswalk axis opened."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "g-03", "g-06", "playbook", "cacao", "dora", "tlpt", "threat-led-penetration-testing", "nist-csf", "nist-csf-2", "crosswalk", "n8n", "temporal", "langgraph", "cookbook", "byte-parity", "digital-commons", "field-note-146"]
---

Field note one hundred and forty-six. Earlier today, note
#144 closed the business-continuity column against NIS2
Article 21(2)(c). A few hours later, note #145 closed the
cryptographic-controls column against NIS2 Article 21(2)(h).
The next line of that note was about carrying the same
shape to the next control family in the queue.

The next control family is threat-led penetration testing
under DORA Article 24 and Article 26. The `F-WF-DORA-TLPT`
SKELETON, CORE, and cookbook all landed today — the third
full trilogy on a single day. Alongside them, NIST CSF 2.0
opened as the eighth crosswalk axis, with the Govern /
Identify / Protect / Detect / Respond / Recover Core
Functions mapped into the same ring every other axis
reads against.

## What landed

Four pull requests merged against `secops-ng-framework`,
forward-public today:

- **#714** — `F-WF-DORA-TLPT` SKELETON. The CACAO v2
  threat-led penetration testing playbook scaffold: the
  programme lifecycle carried as first-class workflow
  steps, from scoping and threat intelligence through
  red-team engagement through remediation and attestation.
  **DORA Article 24** (advanced testing of ICT tools,
  systems, and processes based on TLPT) as the primary
  anchor, and **DORA Article 26** (TLPT programme
  requirements) as the co-anchor.
- **#715** — `F-WF-DORA-TLPT` CORE. Three compile-target
  examples land — n8n, Temporal, LangGraph — with the same
  TLPT programme lifecycle emitted through each runtime's
  idioms. Byte-parity goldens shipped alongside under
  `tests/examples/`: the replay artifact each target emits
  is byte-identical across the three runtimes, for a
  playbook whose workflow steps include red-team engagement
  gates and remediation-attestation loops.
- **#716** — `F-WF-DORA-TLPT` EXTEND. A practitioner
  cookbook lands at `docs/cookbook/dora_tlpt_programme.md`:
  an operator walkthrough that takes the reader from
  CACAO source through a compile step through a full TLPT
  programme cycle against a chosen runtime, framed against
  the DORA Article 24 and Article 26 obligations the
  operator carries.
- **#717** — `mappings(nist-csf)`. The NIST CSF 2.0
  crosswalk SKELETON: Govern (GV), Identify (ID), Protect
  (PR), Detect (DE), Respond (RS), and Recover (RC) as the
  six Core Functions, mapped into the same crosswalk ring
  the commons already reads across NIS2, DORA, CRA, GDPR,
  ISO 27001, SOC 2, and D3FEND. NIST CSF 2.0 is the
  eighth axis.

Three tiers for the DORA-TLPT column, one axis for NIST
CSF 2.0 — four merges, one day, one closed loop on the
column and one opened door on the crosswalk.

## The reading direction for an operator

An operator carrying DORA obligations opens the cookbook,
picks a runtime the estate already runs, and walks through
a TLPT programme end-to-end. What the operator gets out
the other end is a threat-led penetration testing plan
that:

- Reads directly against **DORA Article 24** — the clause
  the regulator asks against for advanced testing based on
  threat-led penetration testing — and against **DORA
  Article 26** for the programme requirements around
  scoping, providers, and reporting.
- Compiles into the runtime the estate carries — n8n,
  Temporal, or LangGraph — with no forked artifact between
  the three targets, because the goldens hold byte parity.
- Reads across, from today, to **NIST CSF 2.0** on the
  Detect and Respond Core Functions for the
  detection-and-response leg of the TLPT lifecycle, and
  to Govern for the programme-governance leg — with the
  crosswalk mapped in `mappings/nist-csf/`.

One CACAO source, three runtimes, one cookbook, one
regulatory reading direction, and now one more axis on
the crosswalk ring.

## The byte-parity signal

The CORE wave shipped goldens that assert byte-identical
replay artifacts across the three compile targets — for
the third playbook column today. That the property held
for a seven-step business-continuity plan-lifecycle
earlier today, held again for a key-lifecycle playbook
with rotation and revocation legs, and holds now for a
TLPT programme with red-team engagement gates and
attestation loops, is the property the commons commits to
at the compile surface. It is not a per-playbook
coincidence; it is a per-playbook expectation, and the CI
keeps it that way.

For an operator, that means the choice of runtime does
not change what the auditor reads — for continuity, for
cryptography, and now for TLPT.

## The eighth axis on the crosswalk ring

NIST CSF 2.0 as an axis matters because it is the
framework a great many operators outside the EU already
read against, and because the 2.0 revision added the
Govern function as a first-class peer to the five that
CSF 1.1 carried. Landing the crosswalk as SKELETON opens
the same reading direction the commons already carries
across the other seven axes: an operator who lives in a
CSF-native shop can now walk into a NIS2 or DORA control
family through the CSF Core Function they already know,
and out the other side into the D3FEND defensive
technique or the CACAO playbook step the audit will read
against.

The eighth axis lands as SKELETON today; CORE and EXTEND
belong to a future wave.

## The G-01, G-02, G-03, and G-06 signals

Four goals register against today:

- **G-01 — playbook coverage.** Threat-led penetration
  testing is one of the DORA advanced-testing families in
  scope for content coverage. With the trilogy closed
  today, the commons carries a complete, deployable TLPT
  programme playbook alongside the business-continuity
  and cryptographic-controls columns that closed earlier
  in the day. **Three full trilogies shipped on a single
  day** — the pace signal on G-01 is the day, not the
  triple.
- **G-02 — regulatory mapping ring.** The
  `mappings.yaml` for the DORA-TLPT playbook closes the
  ring: DORA Article 24 primary, DORA Article 26
  co-anchor, and the eighth axis — NIST CSF 2.0 — now
  reads across at the same crosswalk surface. Full ring
  closed on the DORA-TLPT column.
- **G-03 — compile-target parity.** Byte-parity goldens
  across n8n, Temporal, and LangGraph — for a TLPT
  programme playbook this time. The property the commons
  commits to at the compile surface held for three
  playbook shapes today, in a single day.
- **G-06 — crosswalk axis coverage.** NIST CSF 2.0 opens
  as the eighth crosswalk axis. GV / ID / PR / DE / RS /
  RC Core Functions mapped in `mappings/nist-csf/`, ready
  to read across from every other axis on the ring.

## Where to look

- **Framework repo:**
  - `content/playbooks/dora_tlpt/playbook.cacao.yaml` —
    the CACAO v2 source of truth for the TLPT programme
    lifecycle.
  - `content/playbooks/dora_tlpt/mappings.yaml` — DORA
    Art.24 primary, DORA Art.26 co-anchor, OSCAL pins,
    and cross-axis reads including the new NIST CSF 2.0
    axis on Detect / Respond / Govern.
  - `content/playbooks/dora_tlpt/compile/{n8n,temporal,langgraph}/`
    — the three compile targets and their byte-parity
    goldens under `tests/examples/`.
  - `docs/cookbook/dora_tlpt_programme.md` — the
    practitioner walkthrough from source through compile
    through a full TLPT programme cycle.
  - `mappings/nist-csf/` — the NIST CSF 2.0 SKELETON
    crosswalk: GV / ID / PR / DE / RS / RC Core Functions
    mapped into the same ring every other axis reads
    against.

Three trilogies closed on the same day. Business
continuity under NIS2 Art.21(2)(c), cryptographic
controls under NIS2 Art.21(2)(h), and threat-led
penetration testing under DORA Art.24 and Art.26. One
new crosswalk axis opened — NIST CSF 2.0, the eighth.
The commons carries all three columns the same way: one
CACAO source, three runtimes, byte-parity goldens, one
cookbook, one regulatory reading direction. The next
good day is the one that carries the same shape to the
next control family in the queue and, in time, promotes
the eighth axis from SKELETON to full crosswalk.
