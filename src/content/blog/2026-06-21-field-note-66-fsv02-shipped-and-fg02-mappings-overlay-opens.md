---
title: "Field note #66 — F-SV-02 eIDAS 2.0 wallet integration pattern flips to Shipped with three-target parity closed, and F-G02 outbound cross-standard mappings overlay lane opens"
description: "Sixty-sixth field note from the SecOps-NG Digital Commons: F-SV-02 eIDAS 2.0 wallet integration pattern lands its LangGraph CORE-FANOUT, closing three-target parity across n8n, Temporal, and LangGraph for a Pydantic-typed EU Digital Identity Wallet attestation input, and flips ROADMAP Proposed→Shipped on the sovereignty lane; F-G02 outbound cross-standard mappings overlay lane opens with SKELETON mappings.yaml overlays on the vuln_intake, identity_compromise, and ransomware_containment playbooks cross-linking OSCAL / D3FEND / OCSF plus NIS2 / DORA / CRA / GDPR — incident_management overlay still ahead, so the row is opening, not complete."
pubDate: 2026-06-21
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-sv-02", "f-g02", "eidas2", "eudiw", "sovereignty", "mappings", "oscal", "d3fend", "ocsf", "nis2", "dora", "cra", "gdpr", "digital-commons", "three-target", "byte-parity", "n8n", "temporal", "langgraph"]
---

The last field note read the eIDAS 2.0 wallet integration
pattern opening on the sovereignty lane — a typed EU Digital
Identity Wallet attestation input model plus n8n and Temporal
CORE-FANOUT, with LangGraph fan-out the explicit closeout
blocker. This note reads the tail of that row — LangGraph
landing and the row flipping to **Shipped** with three-target
parity closed — and the opening of a new lane on the catalogue:
the **F-G02 outbound cross-standard mappings overlay**, which
cross-links the workflow catalogue against OSCAL, D3FEND, OCSF,
and the EU regulatory surfaces (NIS2, DORA, CRA, GDPR) as a
typed overlay on each playbook.

Two rows moved in this window:

- **F-SV-02 eIDAS 2.0 wallet integration pattern** closes its
  three-target CORE-FANOUT — LangGraph emitting an
  attestation-evidence artifact byte-identically against the
  n8n and Temporal siblings — and lands its EXTEND-closeout:
  the ROADMAP flip to Shipped and a three-target parity pass
  across the worked-example READMEs. Three of three reference
  compile targets. The catalogue now reads eIDAS 2.0 wallet
  attestation as a first-class, portable, framework-agnostic
  input across all three.
- **F-G02 outbound cross-standard mappings overlay** opens on
  the catalogue lane: SKELETON mappings.yaml outbound overlays
  on the vuln_intake, identity_compromise, and
  ransomware_containment playbooks, each cross-linking the
  playbook into OSCAL controls, D3FEND techniques, OCSF event
  shapes, and the EU regulatory surfaces (NIS2 Article 21,
  DORA Articles 17–23, CRA essential requirements, GDPR
  Article 33). The incident_management overlay is still
  ahead — the row is opening on the lane, not complete.

## What landed on F-SV-02

### F-SV-02 LangGraph CORE-FANOUT — node, worked example, byte-parity golden

The LangGraph CORE-FANOUT lands through
[PR #380](https://github.com/secops-ng/secops-ng-framework/pull/380):
the LangGraph adapter sits as a state-mapping
attestation-evidence node delegating to the same shared,
framework-agnostic emitter the n8n and Temporal siblings ride.
The LangGraph worked example at
`examples/langgraph/eidas2_wallet/` re-imports the Temporal
sibling's typed Pydantic context, so the field-by-field input
values to the emitter are pinned at the source level. The
byte-parity golden pins the LangGraph adapter's output
byte-for-byte against the Temporal and n8n siblings: a refactor
of the shared emitter that silently changes serialisation gets
caught at the byte level, naming which target drifted.

The result is a Pydantic-typed EU Digital Identity Wallet
attestation input that emits a byte-identical
attestation-evidence artifact across all three reference compile
targets. An operator on n8n, Temporal, or LangGraph reading a
wallet-issued attestation has a single typed entry point, the
same shared emitter, and the same artifact shape — pinned at
the byte level.

### F-SV-02 EXTEND-closeout — ROADMAP flip, README reconciliation

The EXTEND-closeout pass lands through
[PR #381](https://github.com/secops-ng/secops-ng-framework/pull/381).
The ROADMAP entry for `F-SV-02 eidas2_wallet` flips from
Proposed to **Shipped**, and the worked-example READMEs across
`examples/{n8n,temporal,langgraph}/eidas2_wallet/` are
reconciled to read the same three-target shape consistently.
The catalogue now reads three-target parity on the sovereignty
lane's first row.

### F-SV-02 status — three of three, Shipped

F-SV-02 reads on the ROADMAP as **Shipped** at the close of
this wave. Three reference compile targets carry a worked
example and a byte-parity golden against the typed EU Digital
Identity Wallet attestation input; the catalogue carries the
`pattern.eidas2_wallet@v1` content-level identifier, the
Pydantic-typed attestation envelope (issuer identifiers,
signature metadata, the consented claim set), the field-level
types mapping onto the eIDAS 2.0 / EUDIW reference
architecture's attestation shape, and worked examples reading
the shape end-to-end across all three targets.

This is the headline of this window. The **sovereignty lane**
now carries an EU-native identity primitive — eIDAS 2.0 / EUDIW
— as a first-class, portable, framework-agnostic workflow input.
A downstream playbook or mapping entry that wants to read an
eIDAS-attested claim names `pattern.eidas2_wallet@v1` as a
typed dependency and binds against the shared shape, regardless
of which compile target the operator runs.

## What opened on F-G02

### F-G02 — what the outbound mappings overlay reads

The catalogue's playbooks already carry inbound shape (CACAO
source, typed inputs, deterministic primitives, evidence
artifacts). The **F-G02 outbound cross-standard mappings
overlay** reads the opposite direction: for each playbook, a
`mappings.yaml` overlay file naming the controls, techniques,
event shapes, and regulatory clauses the playbook satisfies as
a typed, audit-readable surface. The overlay does not change
the playbook's runtime behaviour; it gives an operator,
auditor, or regulator a single typed lookup from a playbook to
the cross-standard surface it discharges.

Each SKELETON overlay cross-links four standards plus the EU
regulatory surface:

- **OSCAL** — the control identifiers the playbook satisfies,
  named against the OSCAL catalogue shape so a downstream SSP
  or assessment can bind against the playbook by control id
  rather than by free text.
- **D3FEND** — the defensive techniques the playbook
  exercises, named against the D3FEND ontology so a defender
  reading a technique can resolve which playbooks discharge it.
- **OCSF** — the event shapes the playbook reads or emits,
  named against OCSF so a SIEM, data lake, or downstream
  catalogue can bind against the playbook by event class.
- **NIS2 / DORA / CRA / GDPR** — the EU regulatory clauses the
  playbook discharges, with the article-level mapping entry an
  auditor reads when asking "which playbooks satisfy this
  obligation?"

The overlay is a SKELETON on this pass — the cross-links are
named and structured; the EXTEND-level operator-facing surface
(rationale per mapping, evidence-artifact pointer, residual-risk
KRI binding) follows on later passes for each row.

### F-G02 SKELETON overlays — vuln_intake, identity_compromise, ransomware_containment

Three SKELETON overlays land in this window:

- **vuln_intake** through
  [PR #382](https://github.com/secops-ng/secops-ng-framework/pull/382)
  — outbound mappings.yaml overlay cross-linking the vuln_intake
  playbook to its OSCAL controls, D3FEND techniques, OCSF event
  shapes, and the EU regulatory surfaces (NIS2 Article 21
  vulnerability-handling obligations, DORA ICT-risk management,
  CRA essential requirements on vulnerability handling, GDPR
  Article 33 where the vulnerability touches personal data).
- **identity_compromise** through
  [PR #383](https://github.com/secops-ng/secops-ng-framework/pull/383)
  — outbound mappings.yaml overlay cross-linking the
  identity_compromise playbook to its OSCAL controls, D3FEND
  techniques, OCSF event shapes, and the EU regulatory
  surfaces (NIS2 Article 21 incident-handling and
  access-control, DORA incident reporting, CRA essential
  requirements, GDPR Article 33 personal-data breach
  notification).
- **ransomware_containment** through
  [PR #384](https://github.com/secops-ng/secops-ng-framework/pull/384)
  — outbound mappings.yaml overlay cross-linking the
  ransomware_containment playbook to its OSCAL controls,
  D3FEND techniques, OCSF event shapes, and the EU regulatory
  surfaces (NIS2 Article 21 incident-handling and
  business-continuity, DORA significant-incident reporting,
  CRA, GDPR Article 33).

Three of an expanding set; the lane is opening with the
incident-family front-of-funnel and a foundational
vulnerability-intake row.

### F-G02 status — opening, not complete

F-G02 reads on the ROADMAP as **Proposed** with three of
several incident-family playbooks carrying a SKELETON outbound
mappings overlay. The `incident_management` overlay is still
ahead on this row, and additional playbook rows
(phishing-triage, data-exfil, post-incident review, on-call
rotation, and the F-WF/F-SV family Shipped in prior waves) will
each receive their own outbound mappings overlay on subsequent
passes. Until those land and the operator-facing rationale +
evidence-artifact + KRI EXTEND surface follows, this field note
frames F-G02 as **opening on the catalogue lane — not
complete**.

## Where these two rows sit

F-SV-02 sits on the **sovereignty lane** of the project's
roadmap. The sovereignty lane carries content that consumes
EU-native infrastructure primitives — eIDAS 2.0, EUDIW,
GAIA-X-aligned identity, qualified trust services — as typed
inputs to the catalogue. F-SV-02 reading three-target parity
against a Pydantic-typed EUDIW attestation input is the first
Shipped row on this lane: an operator anywhere in the EU can
now bind a wallet-issued attestation against a single typed
shape and run a byte-identical worked example on n8n, Temporal,
or LangGraph.

F-G02 sits on the **catalogue lane** rather than a workflow
spine. Where the F-WF and F-SV rows ship workflow content (a
CACAO playbook, typed inputs, an evidence artifact, a
three-target CORE-FANOUT), the F-G02 row ships a typed overlay
on top of existing catalogue content — a cross-standard
mappings surface that reads the catalogue against OSCAL,
D3FEND, OCSF, and the EU regulatory surfaces as a structured,
audit-readable lookup.

## What this gives an operator

A regulated operator consuming the **EU Digital Identity
Wallet** as an identity primitive on any of the three reference
compile targets can today:

- **Bind against a typed EUDIW attestation input across n8n,
  Temporal, and LangGraph.** The `pattern.eidas2_wallet@v1`
  typed input reads the issuer-signed attestation envelope and
  field-level claim surface as a framework-agnostic boundary.
  Three reference compile targets carry a worked example; the
  byte-parity goldens pin the artifact shape across all three.
  An access-control, KYC, or qualified-electronic-signature
  workflow consuming a wallet-issued attestation has a single
  typed entry point, regardless of which compile target the
  operator runs.

A regulated operator (or an auditor or regulator) reading the
catalogue for cross-standard alignment on the vuln_intake,
identity_compromise, or ransomware_containment playbooks can
today:

- **Look up the cross-standard surface a playbook discharges
  through a typed overlay.** Each playbook now carries a
  `mappings.yaml` outbound overlay naming OSCAL controls,
  D3FEND techniques, OCSF event shapes, and EU regulatory
  clauses (NIS2 / DORA / CRA / GDPR). A downstream SSP, SIEM,
  or audit-readiness review reads the overlay by playbook id
  and resolves the cross-standard surface without
  re-deriving it.

## What's open behind this wave

- **F-G02 incident_management overlay.** The incident_management
  playbook is the missing front-of-funnel sibling on this
  SKELETON pass; the row will not flip beyond opening until
  that overlay lands.
- **F-G02 wave across the F-WF and F-SV Shipped rows.** Each
  Shipped workflow row carries an opening for an outbound
  mappings overlay; the lane will fan out over subsequent
  passes.
- **F-G02 EXTEND — rationale, evidence-pointer, KRI binding.**
  The SKELETON overlay structures the cross-links; the EXTEND
  pass on each row will name per-mapping rationale, point at
  the evidence artifact the playbook emits as discharge of the
  control, and bind any residual-risk KRI catalogue entries.
- **F-SV-02 EXTEND.** The Shipped row carries the typed input
  and three-target byte-parity surface; the next pass will
  carry the operator-facing surface for verifying issuer
  chains, binding the pattern against an access-control or
  qualified-electronic-signature workflow, and naming the
  catalogue mapping entries for the EU regulatory surfaces
  (eIDAS 2.0, NIS2 where the wallet supplies an
  identity-control input).

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-SV-02 LangGraph CORE-FANOUT
  ([PR #380](https://github.com/secops-ng/secops-ng-framework/pull/380))
  and EXTEND-closeout
  ([PR #381](https://github.com/secops-ng/secops-ng-framework/pull/381));
  the F-G02 SKELETON outbound mappings overlays on vuln_intake
  ([PR #382](https://github.com/secops-ng/secops-ng-framework/pull/382)),
  identity_compromise
  ([PR #383](https://github.com/secops-ng/secops-ng-framework/pull/383)),
  and ransomware_containment
  ([PR #384](https://github.com/secops-ng/secops-ng-framework/pull/384)),
  all merged.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-five that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community
  lane, the auto-generated roadmap.

Two rows moved in this window. The eIDAS 2.0 wallet integration
pattern closed its three-target CORE-FANOUT and flipped to
Shipped, giving an EU-native identity primitive — the EU
Digital Identity Wallet attestation — a single typed,
framework-agnostic entry point across n8n, Temporal, and
LangGraph; and the outbound cross-standard mappings overlay
lane opened with SKELETON overlays on three incident-family
playbooks, cross-linking the catalogue against OSCAL, D3FEND,
OCSF, NIS2, DORA, CRA, and GDPR as a typed audit-readable
surface. The catalogue now reads one more Shipped row on the
sovereignty lane and an opening lane on the catalogue itself.
The next field notes will read whatever lands behind this
wave — the F-G02 incident_management overlay, the F-G02 fan-out
across the rest of the Shipped catalogue, the F-G02 EXTEND
surface on each row, and the next workflow or sovereignty-lane
row to arrive content-first.
