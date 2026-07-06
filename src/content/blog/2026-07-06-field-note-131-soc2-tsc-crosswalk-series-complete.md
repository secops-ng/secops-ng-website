---
title: "Field note #131 — SOC 2 TSC crosswalk series complete, all five Trust Service Categories in the commons (G-06/G-07)"
description: "Field note one hundred and thirty-one from the SecOps-NG Digital Commons. Three more merges close the SOC 2 Trust Service Criteria crosswalk end-to-end: Confidentiality (C1.1–C1.2), Processing Integrity (PI1.1–PI1.5), and Privacy (P-series). With Security (CC1–CC9) and Availability (A1.1–A1.3) already in tree, all five TSC categories now sit alongside the ISO 27001, NIS2, DORA, CRA, and GDPR mappings against the same versioned playbooks and controls."
pubDate: 2026-07-06
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "g-07", "soc2", "tsc", "crosswalk", "mappings", "digital-commons", "field-note-131"]
---

Field note one hundred and thirty-one. Three more pull
requests landed against `secops-ng-framework` since field
note #130, and with them the SOC 2 Trust Service Criteria
crosswalk closes the loop. All five Trust Service
Categories — Security, Availability, Confidentiality,
Processing Integrity, and Privacy — now sit in the
mapping tree against the same versioned playbooks and
controls that already carry the NIS2, DORA, CRA, GDPR,
and ISO 27001 crosswalks.

## What landed

- **PR #675 — SOC 2 TSC Confidentiality C1.1–C1.2.**
  C1.1 identification and maintenance of confidential
  information, with a gap note against the future
  information-classification-scheme control (same
  pattern used by ISO 27001 A.5.12) and
  `playbook.asset_management@v1` as the asset-scope
  anchor. C1.2 disposal of confidential information,
  wired to `control.asset_inventory_delta@v1`,
  `control.jml_evidence@v1`, and
  `playbook.asset_management@v1` — the same triple that
  discharges CC6.5 asset removal, cross-referenced to
  ISO 27001 A.8.10 information deletion and A.7.14
  secure disposal or re-use of equipment.
- **PR #676 — SOC 2 TSC Processing Integrity
  PI1.1–PI1.5.** Five criteria: PI1.1 quality of
  information anchored on `control.control_effectiveness_test@v1`
  and `playbook.executive_metrics@v1`; PI1.4
  authorised-users delivery on
  `control.access_enforcement@v1` and
  `control.least_privilege@v1`; PI1.5 storage on
  `control.backup_attestation@v1`,
  `control.asset_inventory_delta@v1`, and
  `playbook.backup_recovery@v1`. PI1.2 input controls
  and PI1.3 processing controls ship as explicit gap
  notes — application-layer input validation, batch
  reconciliation, and transaction-integrity logic sit
  in the operator's application and integration layer,
  not the security-operations catalogue. The
  security-adjacent surfaces are already anchored under
  CC6.1, CC6.3, CC7.1, and CC8.1 in the Security file.
- **PR #677 — SOC 2 TSC Privacy P-series.** Ten
  entries: notice of privacy practices (P1.1), choice
  and consent (P2.1), collection limited to purpose
  (P3.1), use limited to purpose (P4.1), retention
  (P4.2), disposal of personal information (P4.3),
  data-subject access (P5.1), disclosure to authorised
  parties (P6.1), notification of privacy incidents
  (P6.7), and quality of personal information (P7.1).
  Anchors discharge the operations-layer overlap where
  the SecOps-NG catalogue already carries an artifact —
  access enforcement, incident-management capability
  and crisis-communication for breach notification,
  `playbook.data_subject_rights@v1` for access and
  quality, `playbook.data_protection_impact_assessment@v1`
  for collection and purpose limitation, asset-
  inventory delta plus `playbook.asset_management@v1`
  for secure disposal.

## Where the SOC 2 crosswalk surface is now

- **Security (Common Criteria CC1–CC9):** in tree.
- **Availability (A1.1–A1.3):** in tree with control
  references.
- **Confidentiality (C1.1–C1.2):** in tree.
- **Processing Integrity (PI1.1–PI1.5):** in tree.
- **Privacy (P-series, ten entries):** in tree.

All five categories now carry the `soc2:<slug>` id
scheme, all five sit under `content/mappings/soc2/`
against a single theme index, and all five are wired
into the same OSCAL blocks and versioned playbooks that
carry the ISO 27001, NIS2, DORA, CRA, and GDPR
crosswalks.

## Scope caveat — operations-layer coverage

The SOC 2 crosswalk is a structural pointer against
report-time evidence, not a legal or auditor
interpretation. It covers the operations-layer overlap
between the Trust Service Criteria and the SecOps-NG
security-operations catalogue. Three surfaces remain
operator-owned by design and ship as gap notes on the
relevant entries:

- **Policy documents.** Privacy notice text, purpose
  register, retention schedule, information-
  classification scheme text, and the accompanying
  operator-facing policies are authored by the operator
  and are not artifacts the security-operations
  catalogue emits.
- **Consent tooling.** Consent-capture UI, preference
  centres, and the identity-graph plumbing that binds
  a consent record to a data subject sit in the
  application and integration layer, not the SOC.
- **Privacy-programme artefacts.** The programme-level
  scaffolding a privacy office maintains — DPIA
  workflow ownership, records of processing activities,
  privacy-notice change management, subject-rights
  case management above the technical fulfilment layer
  — is operator-owned. The catalogue anchors the
  technical fulfilment side (access, deletion,
  breach notification, DPIA-input signals); the
  programme wraps around it.

For the EU statutory privacy surface, the parallel
GDPR entries in `content/mappings/gdpr/` remain
authoritative. The SOC 2 Privacy crosswalk is a
structural pointer for organisations that carry a SOC 2
report obligation in addition to their GDPR
obligations; it does not replace the GDPR crosswalk and
does not substitute for legal counsel on either
regime.

## What this means for an operator

Practitioners can now use the SOC 2 TSC crosswalk
alongside the ISO 27001, NIS2, DORA, CRA, and GDPR
mappings already in the catalogue. One evidence run
against the shipped controls and playbooks produces
artefacts that read against all six regimes at once,
against a single set of versioned ids.

Three properties still hold:

1. **One posture, multiple certifications.** The
   mapping layer does the translation across regimes.
   An operator does not maintain six evidence trees;
   they run one, and the crosswalks project the
   evidence into each regime's language.
2. **Certification substrate is not vendor-locked.**
   The crosswalk is a public artifact under community
   governance. Nothing in the mapping requires a
   proprietary GRC platform to read it, and an
   operator moving auditors, clouds, or GRC substrates
   carries the crosswalk with them.
3. **Gap notes are load-bearing.** Where a Trust
   Service Criterion is discharged against operator-
   side policy, consent tooling, or programme
   scaffolding rather than a versioned artifact, the
   entry says so and names the adjacent anchors that
   structure the discipline. A future artifact can
   replace the gap without breaking the id or the
   cross-regime hooks.

## Where to look

- **Framework repo:**
  - `content/mappings/soc2/README.md` — theme index
    across all five categories.
  - `content/mappings/soc2/tsc-security.yaml` — CC1
    through CC9.
  - `content/mappings/soc2/availability.yaml` — A1.1
    through A1.3.
  - `content/mappings/soc2/tsc-confidentiality.yaml`
    — C1.1 through C1.2.
  - `content/mappings/soc2/tsc-processing-integrity.yaml`
    — PI1.1 through PI1.5.
  - `content/mappings/soc2/tsc-privacy.yaml` — the
    ten P-series entries.

Five categories, one theme index, one id scheme, one
versioned set of controls and playbooks underneath. The
SOC 2 Trust Service Criteria crosswalk joins the
existing ISO 27001, NIS2, DORA, CRA, and GDPR
crosswalks as another lens onto the same operational
spine. The Digital Commons keeps its rhythm.
