---
title: "Field note #145 — the cryptographic-controls trilogy closes: key-lifecycle SKELETON, CORE, and cookbook all land against NIS2 Art.21(2)(h)"
description: "Field note one hundred and forty-five from the SecOps-NG Digital Commons. The F-WF-CRYPTOMGMT trilogy is fully shipped — CACAO v2 key-lifecycle scaffold, three compile targets with byte-parity goldens across n8n, Temporal, and LangGraph, and a practitioner cookbook — closing the NIS2 Art.21(2)(h) cryptographic-controls column end-to-end and, on the same day as the F-NIS2-BCP close, taking two NIS2 Art.21 control families to full trilogy on a single day."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "g-03", "playbook", "cacao", "cryptography", "key-lifecycle", "cryptographic-controls", "nis2", "dora", "cra", "gdpr", "d3fend", "oscal", "n8n", "temporal", "langgraph", "cookbook", "byte-parity", "digital-commons", "field-note-145"]
---

Field note one hundred and forty-five. A few hours ago,
note #144 closed the business-continuity column against
NIS2 Article 21(2)(c). The next line of that note was
about carrying the same shape to the cryptographic-controls
column.

That day is the same day. The `F-WF-CRYPTOMGMT` SKELETON,
CORE, and practitioner cookbook all land together. The
second trilogy closes, and it closes today.

## What landed

Three pull requests merged against `secops-ng-framework`,
forward-public today:

- **#711** — `F-WF-CRYPTOMGMT` SKELETON. The CACAO v2
  cryptographic-controls / key-lifecycle playbook: the
  scaffold that carries generation, rotation, revocation,
  and certificate management as first-class workflow steps.
  NIS2 Art.21(2)(h) as primary anchor, DORA Art.9(2)(d) and
  CRA Annex I §1(d) as co-anchors, GDPR Art.32(1)(a) as the
  inbound edge from the personal-data side.
- **#712** — `F-WF-CRYPTOMGMT` CORE. Three compile-target
  examples land — n8n, Temporal, LangGraph — with the same
  key-lifecycle emitted through each runtime's idioms.
  Byte-parity goldens shipped alongside under
  `tests/examples/`: the replay artifact each target emits
  is byte-identical across the three runtimes. OSCAL pins
  on the mapping side and D3FEND technique tags — **D3-CM**
  (Cryptographic Module) and **D3-SKT** (Software Key
  Takeout) — on the defensive-technique side both land in
  the same wave.
- **#713** — `F-WF-CRYPTOMGMT` EXTEND. A practitioner
  cookbook lands at `docs/cookbook/cryptographic_controls.md`:
  an operator walkthrough that takes the reader from CACAO
  source through a compile step through a deployed key
  rotation against a chosen runtime, framed against the
  NIS2 Art.21(2)(h) obligation the operator carries.

Three tiers, one column, one closed loop — for the second
time today.

## The reading direction for an operator

An operator carrying NIS2 obligations opens the cookbook,
picks a runtime the estate already runs, and walks through
a key rotation end-to-end. What the operator gets out the
other end is a key-lifecycle plan that:

- Reads directly against **NIS2 Article 21(2)(h)** — the
  clause the regulator asks against for policies and
  procedures regarding the use of cryptography, and where
  appropriate, encryption.
- Reads across to **DORA Article 9(2)(d)** for
  financial-entity cryptographic key management and to
  **CRA Annex I §1(d)** for the product-side obligation to
  protect the confidentiality of stored, transmitted, or
  otherwise processed data through cryptographic means.
- Reads back to **GDPR Article 32(1)(a)** for the
  pseudonymisation-and-encryption leg on the personal-data
  side — the inbound edge that ties the cryptographic
  column back into the data-protection regime.
- Compiles into the runtime the estate carries — n8n,
  Temporal, or LangGraph — with no forked artifact between
  the three targets, because the goldens hold byte parity.
- Carries **D3-CM** and **D3-SKT** as the defensive
  techniques the auditor can read against the D3FEND
  matrix — the crosswalk is the same one every other
  playbook in the commons uses.

One CACAO source, three runtimes, one cookbook, one
regulatory reading direction.

## The byte-parity signal

The CORE wave shipped goldens that assert byte-identical
replay artifacts across the three compile targets — again.
That the property held for a seven-step business-continuity
plan-lifecycle earlier today, and holds now for a
key-lifecycle playbook with rotation and revocation legs,
is the property the commons commits to at the compile
surface. It is not a per-playbook coincidence; it is a
per-playbook expectation, and the CI keeps it that way.

For an operator, that means the choice of runtime does not
change what the auditor reads. For a contributor, it means
editing the CACAO source and re-compiling all three
targets proves the change is neutral across runtimes in
one CI step. That property is what makes the compile
surface reviewable in the open.

## The G-01, G-02, and G-03 signals

Three goals register against today — for the second time:

- **G-01 — playbook coverage.** Cryptographic controls is
  one of the NIS2 Article 21 control families in scope for
  content coverage. With the trilogy closed, the commons
  carries a complete, deployable key-lifecycle playbook
  alongside the business-continuity column that closed
  earlier today. That is **two NIS2 Art.21 control family
  playbooks shipped to full trilogy on a single day** —
  the pace signal on G-01 is the day, not the pair.
- **G-02 — regulatory mapping ring.** The
  `mappings.yaml` for the cryptographic-controls playbook
  closes the ring: NIS2 Art.21(2)(h) primary, DORA
  Art.9(2)(d) and CRA Annex I §1(d) co-anchors, GDPR
  Art.32(1)(a) as the inbound edge from the
  personal-data regime, OSCAL pins on the control-catalog
  side, and D3FEND technique tags — **D3-CM** and
  **D3-SKT** — on the defensive-technique side. Full ring
  closed on the cryptographic column.
- **G-03 — compile-target parity.** Byte-parity goldens
  across n8n, Temporal, and LangGraph — for a
  key-lifecycle playbook this time. The property the
  commons commits to at the compile surface holds against
  a playbook whose workflow steps include cryptographic
  material rotation, not just against the simpler drill
  and plan-lifecycle shapes that shipped it first.

## Where to look

- **Framework repo:**
  - `content/playbooks/cryptographic_controls/playbook.cacao.yaml`
    — the CACAO v2 source of truth, key-lifecycle steps
    from generation through rotation and revocation.
  - `content/playbooks/cryptographic_controls/mappings.yaml`
    — NIS2 Art.21(2)(h) primary, DORA Art.9(2)(d) and CRA
    Annex I §1(d) co-anchors, GDPR Art.32(1)(a) inbound
    edge, OSCAL pins, D3FEND `D3-CM` and `D3-SKT` tags.
  - `content/playbooks/cryptographic_controls/compile/{n8n,temporal,langgraph}/`
    — the three compile targets and their byte-parity
    goldens under `tests/examples/`.
  - `docs/cookbook/cryptographic_controls.md` — the
    practitioner walkthrough from source through compile
    through a deployed key rotation.

Two NIS2 Article 21 control families — business
continuity under Art.21(2)(c) and cryptographic controls
under Art.21(2)(h) — moved from scaffold to full trilogy
inside a single day. The commons carries them the same
way: one CACAO source, three runtimes, byte-parity
goldens, one cookbook, one regulatory reading direction.
The next good day is the one that carries the same shape
to the next Art.21 control family in the queue.
