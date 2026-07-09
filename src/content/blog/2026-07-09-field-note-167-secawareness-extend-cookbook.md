---
title: "Field note #167 — F-WF-SECAWARENESS EXTEND ships: the governance-to-delivery bridge for NIS2 Art. 21(2)(g) is now a two-layer, machine-readable playbook pair with an operator cookbook"
description: "Field note one hundred and sixty-seven from the SecOps-NG Digital Commons. The F-WF-SECAWARENESS trilogy closes with an EXTEND phase that ships the operator cookbook — docs/cookbook/security_awareness_training.md — for the two-layer NIS2 Art. 21(2)(g) training scaffold. security_awareness_training governs the annual programme cycle; cyber_hygiene_training delivers per-cohort runs. Both are CACAO v2 playbooks, deterministic and replay-safe, anchored to NIS2 Art. 21(2)(g), GDPR Art. 32(1)(b), and ISO/IEC 27001 A.6.3."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "playbook", "nis2", "nis2-art-21", "security-awareness", "training", "cacao", "gdpr", "iso-27001", "cookbook", "digital-commons", "field-note-167"]
---

Field note one hundred and sixty-seven. The
project ships the EXTEND phase of the
F-WF-SECAWARENESS trilogy today, and with it the
F-WF-SECAWARENESS roadmap entry flips to
Shipped. The headline: NIS2 Article 21(2)(g)
now has a complete two-layer training scaffold
in the catalogue — a management-layer playbook
that governs the annual programme cycle, an
operational-layer playbook that delivers each
per-cohort training run, and an operator
cookbook that explains how to wire the two
together end-to-end.

## The two layers, and why the split matters

Article 21(2)(g) is small in the text and
wide-scoped in practice. The directive puts a
"basic cyber hygiene practices and cybersecurity
training" obligation on essential and important
entities and pins it to *management bodies and
staff*. Two different cadences hide inside that
one line:

- **Programme governance — annual / quarterly.**
  Who owns the programme, what the curriculum is
  supposed to cover, which populations are in
  scope, how effectiveness is measured, when the
  management body signs the programme off. That
  is the cadence a supervisor asks about when
  they want to see the operator's *training
  programme* rather than a specific class.
- **Operational delivery — per-cohort.** Which
  humans got what content when, with what
  completion evidence, tied back to the current
  programme. That is the cadence a per-employee
  audit trail reads against.

Collapsing these into a single playbook is what
a slide-deck compliance approach does. The
catalogue does the opposite: one playbook per
cadence, both machine-readable, both replay-safe
by construction.

- `content/playbooks/security_awareness_training/`
  — the management layer. Governs the annual
  programme cycle: curriculum, populations,
  cadence, management-body sign-off. CACAO v2.
- `content/playbooks/cyber_hygiene_training/` —
  the operational layer. Delivers a per-cohort
  training run and emits the completion
  evidence the programme layer rolls up on
  review. CACAO v2.

The management layer delegates cadence. The
operational layer executes it. Both produce
machine-readable evidence that binds back to
the same regulatory anchors.

## The EXTEND phase — the operator cookbook

EXTEND ships `docs/cookbook/security_awareness_training.md`
in the framework — a first-person operator
walkthrough covering:

- When to reach for `security_awareness_training`
  (annual and quarterly programme governance,
  management-body sign-off, curriculum ownership)
  vs `cyber_hygiene_training` (per-cohort
  training-run delivery, completion capture).
- The CACAO topology of the programme-governance
  playbook, with the OSCAL, NIS2, and GDPR
  anchors highlighted step by step so an
  operator can walk the mapping without leaving
  the file.
- End-to-end wiring: how the programme layer
  hands off to the shared
  `cyber_hygiene_training` compile examples
  under `examples/{n8n,temporal,langgraph}/
  cyber_hygiene_training/`, so the same twenty-
  one golden-parity compiled targets carry the
  operational layer across all three reference
  runtimes.

The point of the cookbook is not documentation
for its own sake. It is what turns two playbooks
sitting next to each other into a workflow an
operator can actually run: read the cookbook
once, understand which layer answers which
question, wire them together the way the
walkthrough shows, and the Article 21(2)(g)
obligation is discharged with an audit trail
that reads mechanically end-to-end.

## Regulatory anchors — three surfaces, one arc

The two layers share a mapping surface:

- **NIS2 Article 21(2)(g).** The primary anchor:
  "basic cyber hygiene practices and
  cybersecurity training" as a cybersecurity
  risk-management measure applied to management
  bodies and staff. The programme layer covers
  the *programme* half of that obligation; the
  operational layer covers the *training* half.
- **GDPR Article 32(1)(b).** The ongoing
  confidentiality and integrity obligation on
  processing — the anchor that makes staff
  security awareness a data-protection control,
  not only a cybersecurity control. Training
  evidence rolls up under this heading for
  processing-related populations.
- **ISO/IEC 27001 A.6.3.** Information security
  awareness, education, and training as a
  management-system control. The programme layer
  is the natural home for the A.6.3 evidence
  loop; certified operators get a clean crosswalk
  with no re-authoring.

The mappings surface for security awareness is
now closed. That is the G-02 half of the
milestone.

## What the CORE phase did — and did not do

A note on how the trilogy shaped up. In most
catalogue entries CORE is where the compiled
n8n, Temporal, and LangGraph examples land. On
this playbook CORE was retired as a no-op — and
that is the right shape, not a shortcut.

The compiled examples already exist. They live
under `examples/{n8n,temporal,langgraph}/
cyber_hygiene_training/`, with twenty-one golden
tests green covering the byte-parity contract.
The programme-governance layer and the
operational-delivery layer share the same
compile targets because both cadences ultimately
land in the same per-cohort training run — the
management layer delegates *when* and *what*, the
operational layer *does*. Duplicating the
compiled examples under a second folder name
would have burned bytes without adding a single
new behaviour to test. The catalogue prefers the
honest shape: one set of compile examples, two
CACAO source playbooks pointing into them, and a
cookbook that explains the wiring.

## What practitioners can do today

The EXTEND phase is on `main`. An operator inside
the NIS2 perimeter can already:

- Read `docs/cookbook/security_awareness_training.md`
  once and see, in one place, how the two-layer
  training scaffold answers Article 21(2)(g)
  end-to-end.
- Wire the programme-governance playbook into
  their annual or quarterly management-body
  cycle and let it delegate cohorts down to the
  operational layer.
- Reuse the existing
  `cyber_hygiene_training` compile examples in
  whichever of n8n, Temporal, or LangGraph
  matches the operator's sovereign-stack posture —
  no new compiler wiring required.
- Roll the resulting completion evidence up under
  GDPR Article 32(1)(b) and, for certified
  operators, against ISO/IEC 27001 A.6.3, with
  the same artifact serving all three surfaces.

The framing the commons cares about: the
directive named an obligation that hides two
cadences. Rather than paper over the split, the
catalogue makes both cadences first-class,
portable, and machine-readable — and then hands
the operator a cookbook that spells out the
governance-to-delivery bridge. That is what a
Digital Commons ships when it takes the text of
a regulation seriously.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- The playbooks live at `content/playbooks/security_awareness_training/` and `content/playbooks/cyber_hygiene_training/`.
- The operator cookbook: `docs/cookbook/security_awareness_training.md`.
- Shared compile targets: `examples/{n8n,temporal,langgraph}/cyber_hygiene_training/` (twenty-one golden tests green).
- Roadmap goals: G-01 (content coverage — NIS2 Art. 21(2)(g) training-programme lifecycle) and G-02 (regulatory mapping — the security-awareness surface is now closed). F-WF-SECAWARENESS: Shipped.
