---
title: "Field note #149 — F-WF-DORA-TPR trilogy ships: DORA Art.28/30 ICT third-party risk management playbook complete"
description: "Field note one hundred and forty-nine from the SecOps-NG Digital Commons. The F-WF-DORA-TPR trilogy lands: a CACAO v2 playbook for the DORA Article 28 / 30 ICT third-party risk management lifecycle (onboarding → clause-check → register-entry → periodic-review → exit-assessment), three-target compile examples with byte-parity goldens, and a practitioner cookbook. Together with F-WF-DORA-SELFASSESS (Chapter II) and F-WF-DORA-TLPT (Chapter IV), this closes the DORA operational-resilience surface on the framework to three complete lifecycle spines."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "g-03", "dora", "third-party-risk", "ict-tpr", "art-28", "art-30", "chapter-v", "cacao", "playbook", "n8n", "temporal", "langgraph", "digital-commons", "field-note-149"]
---

Field note one hundred and forty-nine. The F-WF-DORA-TPR
trilogy lands. DORA Chapter V — ICT third-party risk
management under Articles 28 and 30 — now has a shipped
lifecycle spine on the framework: pre-contractual
assessment, clause verification, register-of-information
entry, periodic re-scoring, and exit-strategy attestation,
described once as a portable CACAO v2 playbook and
compiled into the three reference targets an operator
already runs.

Alongside `F-WF-DORA-SELFASSESS` (Chapter II ICT risk
management roll-up) and `F-WF-DORA-TLPT` (Chapter IV
threat-led penetration testing programme), the DORA
surface on the commons now carries three complete
lifecycle spines. Chapter V was the last gap.

## What shipped

Three framework PRs, all merged to `main` today:

- **#721 — F-WF-DORA-TPR SKELETON.** The CACAO v2
  playbook. `content/playbooks/dora_tpr_management.yaml`
  pins the five-step lifecycle (onboarding,
  clause-check, register-entry, periodic-review,
  exit-assessment) as an auditable, replayable,
  restart-safe workflow shape. Adapter surfaces are
  declared — critical-or-important-function register,
  pre-contractual risk-assessment rubric, contract
  repository, Article 30 clause-shape rubric, register
  sink, runtime supply-chain-evidence source,
  exit-strategy discipline — and left for the operator
  to wire. The playbook does not embed the rubric, does
  not choose the register store, does not schedule the
  periodic-review cadence. It ships the shape.
- **#722 — F-WF-DORA-TPR CORE.** The three-target
  compile examples land under
  `examples/{n8n,temporal,langgraph}/dora_tpr_management/`
  with the byte-parity golden tests wired into CI. Same
  CACAO source, three compiled artifacts, cross-target
  parity enforced.
- **#723 — F-WF-DORA-TPR EXTEND.** The practitioner
  cookbook at `docs/cookbook/dora_tpr_management.md`
  walks the five lifecycle atoms end to end, wires the
  playbook through all three compile targets, states
  the boundary against neighbouring playbooks
  (`supply_chain_security`, `contractual_obligations_tracker`,
  `dora_ict_risk_selfassess`), and flips the ROADMAP
  entry to Shipped.

## Why an EU financial entity reads this

DORA is directly applicable across the EU financial
sector — credit institutions, payment institutions,
investment firms, insurance and reinsurance
undertakings, crypto-asset service providers under
MiCA, and the long list at Article 2. Chapter V places
ICT third-party risk management inside the same
accountability envelope as Chapter II. The management
body remains ultimately responsible for the risks the
entity carries through its ICT third-party service
providers; the supervisor reads the register-of-
information as the evidence of that discharge.

The five obligation atoms this playbook operates
against:

- **Art. 28(4) — pre-contractual risk assessment.**
  Before entering a contractual arrangement with an ICT
  third-party service provider, the entity assesses
  criticality, sub-outsourcing chain, data-location,
  and concentration exposure. The playbook keys on the
  operator's documented rubric; the shape is portable.
- **Art. 30(2)/(3) — key contractual provisions.**
  Every ICT third-party contract carries a closed
  clause set (service description, data-location, sub-
  outsourcing, service levels, audit rights, exit
  provisions, and the rest). The playbook step verifies
  the negotiated contract against the operator's
  Article 30 clause-shape rubric before it moves.
- **Art. 28 — register of information.** The register
  row composes and publishes to the operator's
  register sink. What the supervisor reads.
- **Art. 28(8) — periodic re-scoring.** On the
  operator's documented cadence, criticality is re-
  scored with the runtime supply-chain-evidence stream
  folded in. Changes propagate to the register.
- **Art. 28(8) — exit-strategy attestation.** A dated
  attestation on a documented trigger. The exit is a
  first-class lifecycle atom, not an afterthought.

An operator running Chapter II against the
`dora_ict_risk_selfassess` playbook, Chapter IV against
`dora_tlpt_programme`, and Chapter V against this one
now has the DORA operational-resilience spine described
once and compiled into whatever target the stack
already runs.

## The three DORA spines on the framework

- **`playbook.dora_ict_risk_selfassess@v1`** — the
  Chapter II ICT risk management framework self-
  assessment roll-up on Articles 6 / 7 / 8 / 10 / 11.
  Whole-framework posture.
- **`playbook.dora_tlpt_programme@v1`** — the Chapter
  IV Articles 24 / 26 threat-led penetration testing
  programme lifecycle.
- **`playbook.dora_tpr_management@v1`** — the Chapter V
  Articles 28 / 30 ICT third-party risk management
  lifecycle. Ships today.

Three chapters, three portable workflows, three
byte-parity golden test suites. Same commons voice
across all three.

## The G-01 / G-02 / G-03 signal

- **G-01 — regime coverage.** DORA Chapters II, IV, and
  V each carry a shipped operational spine now. The
  operational-resilience surface reads as a coherent
  set rather than three separate landings.
- **G-02 — CACAO v2 as the portable substrate.** All
  three DORA playbooks are CACAO v2 source. The
  clause-check step, the register-entry step, and the
  exit-strategy attestation step are all playbook
  atoms the operator's evidence chain can point at.
- **G-03 — three-target parity.** The CORE tier lands
  n8n, Temporal, and LangGraph examples with byte-
  parity golden tests. Operators pick the target that
  matches their stack.

## Where to look

- **Framework repo:**
  - `content/playbooks/dora_tpr_management.yaml` — the
    CACAO v2 source.
  - `examples/n8n/dora_tpr_management/`,
    `examples/temporal/dora_tpr_management/`,
    `examples/langgraph/dora_tpr_management/` — the
    three compile-target examples.
  - `docs/cookbook/dora_tpr_management.md` — the
    practitioner walkthrough.
  - `ROADMAP.md` — the F-WF-DORA-TPR entry now reads
    Shipped.

If you run an EU financial entity under DORA scope and
your Article 28 register-of-information is a
spreadsheet held together by will, the walkthrough is
the shortest path to a portable, auditable spine that
compiles into whichever orchestrator you already run.
