---
title: "Field note #133 — F-WF-EUAIACT trilogy ships: an EU AI Act Article 9 risk-management playbook in the commons (G-01/G-03)"
description: "Field note one hundred and thirty-three from the SecOps-NG Digital Commons. Two sequential framework merges land F-WF-EUAIACT SKELETON and CORE: the first community-governed CACAO v2 playbook covering EU AI Act Article 9 risk-management obligations for providers of high-risk AI systems, with OSCAL pins on RA-3, PM-9, and PL-2, a D3FEND tag on the risk-assessment step, and byte-parity compile targets for n8n, Temporal, and LangGraph."
pubDate: 2026-07-06
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-03", "eu-ai-act", "art-9", "risk-management", "cacao", "oscal", "d3fend", "high-risk-ai-system", "digital-commons", "field-note-133"]
---

Field note one hundred and thirty-three. Two sequential
pull requests land against `secops-ng-framework` and
with them the commons picks up its first playbook
covering EU AI Act obligations directly:
**F-WF-EUAIACT**, a CACAO v2 workflow for the Article 9
risk-management system that providers of high-risk AI
systems are now on the hook to establish, implement,
document, and maintain. Practitioners building against
Annex III use-cases in the EU have been asking for a
sovereign, auditable place to anchor that obligation
rather than rolling a bespoke internal process. That
anchor is now in tree.

## What landed

- **PR #682 — SKELETON.** CACAO v2 scaffold for the
  workflow (`playbook.eu_ai_act_risk_management@v1`),
  with the phase model in place: identify the high-risk
  AI system under Art. 6 read with Annex III, iterate
  the Art. 9(2) identify / analyse / evaluate cycle,
  assemble the technical documentation under Art. 11
  read with Annex IV, and close the loop with the
  post-market monitoring feedback under Art. 9(2)(c)
  read with Art. 72. NIS2 Art. 21(2)(a) risk-analysis
  alignment noted; SKELETON placeholders point at the
  anticipated CORE pins. G-01 goal link.
- **PR #683 — CORE.** Real OSCAL pins land against the
  versioned control catalogue — `RA-3` on the
  risk-assessment step, `PM-9` on the strategy layer,
  `PL-2` on the system security and privacy plan — a
  D3FEND tag (`D3-OAM`, Operational Activity Mapping)
  anchors the Art. 9(2) risk-assessment phase, and three
  reference compile targets emit under
  `examples/{n8n,temporal,langgraph}/eu_ai_act_risk_management/`
  with byte-parity goldens checked in CI. G-01 and G-03
  goal links.

## What Article 9 asks operators to do

The Article 9 risk-management system is not a
point-in-time compliance artefact. It is a running
system with four moves that repeat over the lifecycle of
a high-risk AI system:

- **Identify and analyse known and reasonably
  foreseeable risks** that the system poses to health,
  safety, or fundamental rights when used in accordance
  with its intended purpose. The playbook binds this to
  the operator's AI-system inventory and the Annex III
  use-case category the system is deployed against.
- **Estimate and evaluate risks that may emerge** when
  the system is used under conditions of reasonably
  foreseeable misuse, and against post-market monitoring
  data once the system is on the market. The playbook
  keeps the identification and evaluation steps as
  distinct actions with a durable risk-register handle
  between them, so an audit can follow which risks came
  in through which surface.
- **Adopt appropriate and targeted risk-management
  measures** designed to address the risks identified.
  The playbook wires the risk-treatment step to a
  measure catalogue and leaves the specific measures
  operator-tunable rather than hard-coded, so the
  workflow lands the same shape across sectors.
- **Feed the post-market monitoring signal back into
  the cycle.** Art. 9(2)(c) read together with Art. 72
  makes the risk-management system iterative by law.
  The playbook exposes the post-market signal as a named
  external variable and re-enters the identify step
  when a signal arrives, rather than treating the
  cycle as a linear project.

None of the four moves are novel to a security
practitioner reading them against ISO 31000 or NIST SP
800-30. The novelty is expressing them as a portable,
byte-checkable CACAO artefact anchored against the
Union's high-risk AI-system definition and the
technical-documentation obligation that hangs off it.

## Three-target compile parity

F-WF-EUAIACT ships with three compile targets, all
covered by the byte-parity golden fixtures the framework
uses across the workflow catalogue:

- **n8n** for practitioners running the no-code path.
- **Temporal** for practitioners running durable code.
- **LangGraph** for practitioners running an agentic
  orchestration path — where the risk-management
  workflow lands in the same substrate as the AI system
  it is governing.

A change in the source CACAO artefact produces the same
bytes in every compile target. That is the property that
lets a practitioner adopt the playbook on the runtime
they already run, and if they migrate later, the
workflow moves with them at parity rather than through a
re-implementation.

## Where this sits in the regulatory ring

The commons already carries mapping surfaces for NIS2,
DORA, CRA, and GDPR against the same versioned
playbooks and controls. F-WF-EUAIACT slots into that
ring rather than standing outside it:

- **NIS2 Art. 21(2)(a) — risk analysis.** The
  identify / analyse / evaluate cycle aligns with the
  risk-analysis obligation NIS2 places on essential
  and important entities. Operators already anchoring
  their posture against NIS2 do not need to run a
  parallel risk process for their high-risk AI systems.
- **CRA and DORA adjacency.** The Cyber Resilience Act
  and DORA touch product-security and operational-
  resilience surfaces that overlap with the Article 9
  posture in practice; the CORE mappings note the
  adjacency and leave the cross-regime edges for a
  sibling G-02 card once the `eu_ai_act` inbound
  mapping directory opens.
- **GDPR data-flow entry.** A seven-section GDPR
  data-flow entry lands alongside the SKELETON to
  discharge the F-GD-02 EXTEND guard — high-risk AI
  systems processing personal data need to be legible
  from the GDPR side of the ring as well.

The four-regime crosswalk view an operator was already
running now extends into the Article 9 posture without
standing up a fifth board.

## What this means for a practitioner

- **A named, portable playbook for Article 9.** Not a
  policy template and not a governance narrative — a
  first-class CACAO v2 artefact with explicit phases,
  external variables, OSCAL pins, and compile-target
  emissions.
- **Sovereign and community-governed.** The playbook is
  a public artefact under community governance. The
  next Annex III use-case anchor, the next OSCAL pin,
  the next compile target lands through a pull request
  against the same versioned ids rather than a vendor
  release.
- **Anchored against the versioned control catalogue.**
  RA-3, PM-9, and PL-2 are real pins, not references.
  An audit trace from the risk-assessment step back to
  the control catalogue and forward into the technical
  documentation is a byte-checkable path.
- **Iterative by construction.** The post-market
  monitoring feedback is a first-class edge in the
  workflow, not a footnote. Art. 9(2)(c) and Art. 72
  read together as one loop, and the playbook expresses
  it that way.

## Where to look

- **Framework repo:**
  - `content/playbooks/eu_ai_act_risk_management/README.md`
    — theme index and phase model.
  - `content/playbooks/eu_ai_act_risk_management/playbook.cacao.json`
    — the CACAO v2 source artefact
    (`playbook.eu_ai_act_risk_management@v1`).
  - `content/playbooks/eu_ai_act_risk_management/mappings.yaml`
    — the OSCAL pins (RA-3 / PM-9 / PL-2) and the
    D3FEND tag on the risk-assessment step.
  - `examples/{n8n,temporal,langgraph}/eu_ai_act_risk_management/`
    — the three reference compile targets with
    `regenerate.sh`, per-target READMEs, and the
    byte-parity golden fixtures alongside.

One source artefact, three compile targets, one
risk-register handle, one post-market monitoring edge,
one crosswalk into the four-regime ring already in tree.
The Digital Commons picks up its first Article 9
risk-management playbook, and the practitioners reading
against it get a sovereign, auditable place to anchor
an obligation the Regulation put on the table.
