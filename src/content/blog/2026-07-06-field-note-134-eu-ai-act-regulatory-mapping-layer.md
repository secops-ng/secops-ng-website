---
title: "Field note #134 — EU AI Act regulatory mapping layer lands: the G-02 traceability ring closes on the high-risk AI playbook (G-02)"
description: "Field note one hundred and thirty-four from the SecOps-NG Digital Commons. Framework PR #685 lands the inbound regulatory-mapping layer for the EU AI Act — four clause YAMLs across Art. 9, Art. 11, Art. 13, and Art. 72, an OSCAL 1.1.2 component definition mirroring the GDPR/CRA/NIS2 peers, and cross-regime edges to NIS2 Art. 21(2)(a) and GDPR Art. 35 DPIA. The traceability chain from EU AI Act obligation through OSCAL control to compiled playbook artefact is now auditable end-to-end."
pubDate: 2026-07-06
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "eu-ai-act", "art-9", "art-11", "art-13", "art-72", "regulatory-mapping", "oscal", "nis2", "gdpr", "traceability", "high-risk-ai-system", "digital-commons", "field-note-134"]
---

Field note one hundred and thirty-four. One pull
request lands against `secops-ng-framework` and with it
the fourth regulation family joins the inbound mapping
layer already in tree for NIS2, DORA, CRA, and GDPR:
**F-MAP-G02-EUAIACT**, the machine-readable mapping
surface between the EU AI Act's high-risk provider
obligations and the CACAO playbook that operationalises
them. Field note #133 landed the playbook itself last
week; this note closes the graph around it. The
traceability chain that a G-02 milestone was scoped to
deliver — from a Union regulation clause, through the
versioned control catalogue, into the compiled workflow
artefact — now runs edge-to-edge on the EU AI Act
surface.

## What landed

- **PR #685 — SKELETON.** A new inbound mapping family
  under `content/mappings/eu_ai_act/` with four
  clause-scoped YAML files, one per SKELETON-scoped
  high-risk-provider obligation:
  - **Art. 9** — risk-management system obligations.
  - **Art. 11 + Annex IV** — technical documentation.
  - **Art. 13** — transparency obligations towards
    deployers.
  - **Art. 72** — post-market monitoring by providers.
  Each per-article file backlinks the
  `eu_ai_act_risk_management` playbook and pins the
  OSCAL controls the playbook already anchors on. An
  OSCAL 1.1.2 component definition ships alongside,
  mirroring the shape used by the GDPR, CRA, and NIS2
  peers. G-02 goal link.

## The mapping shape, in plain terms

The G-02 layer answers a specific question an auditor,
a regulator, or a practitioner should be able to ask
of the commons and get a byte-checkable answer back:
**given a clause in a Union regulation, what workflow
in tree implements it, and against which control does
the workflow anchor?**

For the EU AI Act surface that answer now runs like
this. An operator points at Article 9(2). The clause
YAML under `content/mappings/eu_ai_act/` names the
`eu_ai_act_risk_management` playbook as the
implementing workflow and pins RA-3 as the OSCAL
control the risk-assessment phase anchors on. The
OSCAL component definition carries the same pin in
the standardised OSCAL 1.1.2 shape a component-level
audit tool consumes. The playbook's own `mappings.yaml`
carries the same RA-3 pin from the other direction.
Three artefacts, one control id, one workflow id — a
traceability triangle a change to any corner is
required to keep consistent.

Art. 11 read with Annex IV, Art. 13, and Art. 72 each
sit on the same shape. The four obligations are the
SKELETON scope; CORE-scoped follow-on work will layer
the remaining Chapter III provider obligations onto
the same surface without moving the artefacts already
in tree.

## Cross-regime edges

The EU AI Act does not sit outside the regulatory ring
the commons already carries. Two edges land explicitly
with this SKELETON:

- **NIS2 Art. 21(2)(a) — risk analysis.** The
  Art. 21(2)(a) risk-analysis policy obligation on
  essential and important entities and the Art. 9(2)
  identify / analyse / evaluate cycle land on the same
  playbook. The inbound NIS2 entry is updated so an
  operator anchoring their posture against NIS2 sees
  the AI-system-specific execution surface for that
  policy without running a parallel risk process.
- **GDPR Art. 35 — data protection impact assessment.**
  Recital 9 of Regulation (EU) 2024/1689 preserves the
  GDPR obligations that already apply to the personal
  data a high-risk AI system may process. The
  interaction is wired explicitly: a controller
  deploying a high-risk AI system that processes
  personal data operates on a high-risk profile the
  Art. 35 DPIA is required to document, and the
  playbook's post-market monitoring feedback is the
  natural signal that will trigger a DPIA re-run.

DORA and CRA were reviewed as candidate inbound edges.
Neither ships a direct interaction that would justify
one — the outbound overlay's `dora` and `cra` arrays
stay empty with the rationale in tree, so a future
contributor does not need to re-derive the null
finding from scratch.

## Where G-02 stands after this

The G-02 milestone is scoped to deliver an inbound
regulatory-mapping layer for the regulatory surfaces
in scope for the commons. Before this note the layer
carried NIS2, DORA, CRA, and GDPR. After this note it
carries five families, and the fourth regulation added
to the ring is the one that regulates AI systems
directly. The traceability chain from an Art. 9
obligation on a high-risk AI provider through the
OSCAL control catalogue into the compiled n8n /
Temporal / LangGraph artefact is auditable end-to-end
in one repository the operator can clone.

Schema deltas keep the surface consistent with the
peer families:

- The regime enum on the mapping schema and the
  playbook-mapping schema gain the `eu_ai_act` key.
- A top-level `eu_ai_act` block and a
  `regulatory_entry_eu_ai_act` definition land on the
  playbook-mapping schema, mirroring the GDPR
  precedent.

Every mapping entry is validated against the schema
in CI, and the OSCAL component definition is
validated against the vendored OSCAL 1.1.2 schema on
every push.

## What this means for a practitioner

- **A portable audit trace for high-risk AI
  obligations.** A high-risk AI provider in the EU
  now has a single artefact set that binds Art. 9,
  Art. 11, Art. 13, and Art. 72 to a CACAO playbook
  compiled for n8n, Temporal, or LangGraph. The
  audit path is documented as data, not as a slide.
- **No parallel risk board for AI-system posture.**
  Operators already anchoring their posture against
  NIS2 pick up the AI-system-specific execution
  surface for their Art. 21(2)(a) risk-analysis
  policy without running a second workflow.
- **DPIA legibility.** Controllers running a DPIA
  under GDPR Art. 35 for a high-risk AI system see
  the Art. 9 risk-management cycle and the Art. 72
  post-market monitoring signal as first-class
  inputs to that DPIA, wired by the mapping layer
  rather than reconstructed from prose.
- **Community-governed and versioned.** The next
  Chapter III obligation added to the surface, the
  next OSCAL pin, the next cross-regime edge lands
  through a pull request against the same versioned
  ids rather than as a vendor release note.

## Where to look

- **Framework repo:**
  - `content/mappings/eu_ai_act/` — the four
    clause-scoped mapping YAMLs (Art. 9, Art. 11,
    Art. 13, Art. 72), each backlinking the
    `eu_ai_act_risk_management` playbook.
  - `content/mappings/eu_ai_act/component-definition.json`
    — the OSCAL 1.1.2 component definition mirroring
    the GDPR / CRA / NIS2 peers.
  - `content/mappings/nis2/` — updated Art. 21(2)(a)
    entry carrying the outbound edge into
    `eu_ai_act_risk_management`.
  - `content/mappings/gdpr/` — updated Art. 35 entry
    carrying the DPIA interaction wire for high-risk
    AI systems processing personal data.
  - `schemas/mapping.schema.json` and
    `schemas/playbook-mappings.schema.json` — the
    `eu_ai_act` regime key on the schemas.

One playbook, four clause anchors, one OSCAL
component definition, two cross-regime edges, one
traceability ring closed. The Digital Commons picks
up the EU AI Act as the fifth regulation family in
its inbound mapping layer, and the practitioners
reading against it get the audit path the G-02
milestone was scoped to deliver.
