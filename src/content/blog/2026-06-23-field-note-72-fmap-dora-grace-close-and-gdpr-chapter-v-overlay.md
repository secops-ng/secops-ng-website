---
title: "Field note #72 — G-02 KRI orphan-closure reaches full four-framework coverage and the GDPR outbound overlay carries a complete Chapter V (Art. 44–49) personal-data-transfer block across every shipped playbook"
description: "Seventy-second field note from the SecOps-NG Digital Commons: the DORA mapping tree's SKELETON wave backlinks the last five playbooks against Art. 9/10/28 and an audited orphan skip retires the it_security_support_agent grace; the CRA supply-chain-security row closes inbound on Art. 13(4) component due-diligence; and the GDPR EXTEND-outbound pass lands a complete Chapter V (Art. 44–49) personal-data-transfer overlay on every shipped playbook's mappings.yaml — processor + identity egress, threat-intel / supply-chain sharing, regulator-submission egress, vuln / posture, and ops / support clusters. The G-02 KRI orphan-closure property is now structurally green across all four covered regimes (NIS2, DORA, CRA, GDPR) without leaning on the finalization grace window."
pubDate: 2026-06-23
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-map-dora", "f-map-cra", "f-map-gdpr", "mappings", "orphan-ci", "g-02-kri", "gdpr", "dora", "cra", "nis2", "chapter-v", "outbound-overlay", "oscal", "d3fend", "digital-commons", "ci-guard", "audit-readable"]
---

The previous field note closed with the regulatory-mapping floor
covering four regimes — Cyber Resilience Act, NIS2, DORA, and
General Data Protection Regulation — and named the open follow-ups
honestly: a residual DORA inbound surface still relying on the
finalization grace window, the CRA supply-chain row open inbound
against Art. 13(4) component due-diligence, and the per-playbook
GDPR outbound overlay still carrying its block as an unpopulated
slot pinned by mapping tests.

This note reads the next window of work landing on `main`. The
DORA SKELETON wave backlinks the last five playbooks against the
Art. 9, Art. 10, and Art. 28 surfaces and an audited orphan skip
retires the remaining it_security_support_agent grace entry; the
CRA supply-chain-security row closes inbound on Art. 13(4)
component due-diligence; and the GDPR EXTEND-outbound pass lands
a complete Chapter V (Art. 44–49) overlay across every shipped
playbook through five cluster passes. Taken together: the G-02
KRI orphan-closure property — "every finalized playbook carries
mappings under every covered regime" — is now structurally green
across all four regimes without leaning on the finalization grace
window, and the GDPR data-flow docs now carry a complete outbound
personal-data-transfer overlay on every shipped playbook.

## What landed in this window

Three lanes of work, all touching the mapping-layer floor.

### F-MAP-DORA grace-window closure (PRs #434–#439)

The DORA mapping tree's last open inbound surfaces close through
a SKELETON wave plus an audited orphan skip. Each PR authors a
narrow per-clause backlink on the existing DORA mapping YAMLs and
retires the matching `_orphan_skip.yaml` SKELETON entry so the
DORA orphan-CI matrix leg stays green on its own contract — no
grace.

- **codebase_vuln_management → Art. 9(4)(a) + JC RTS Art. 10**
  ([PR #434](https://github.com/secops-ng/secops-ng-framework/pull/434))
  backlinks the playbook on the DORA Art. 9 protection-and-prevention
  surface and on the Joint Committee RTS Art. 10 entry that
  covers codebase-side vulnerability-management hygiene.
- **contractual_obligations_tracker → Art. 28 + Art. 30(2)**
  ([PR #435](https://github.com/secops-ng/secops-ng-framework/pull/435))
  closes the contractual-obligations row inbound across both the
  Art. 28 ICT-third-party-risk-management surface and the
  Art. 30(2) contractual-arrangements register, naming the
  playbook as the agentic ground for both clauses.
- **detection_engineering → Art. 10 (Detection)**
  ([PR #436](https://github.com/secops-ng/secops-ng-framework/pull/436))
  backlinks detection_engineering on the DORA Art. 10 detection
  surface, the canonical detection-engineering article in the
  regulation.
- **infra_posture_management → Art. 9 (Protection)**
  ([PR #437](https://github.com/secops-ng/secops-ng-framework/pull/437))
  backlinks infra_posture_management on the DORA Art. 9
  protection-and-prevention surface against the operational
  posture-maintenance leg that Art. 9 carves out.
- **supply_chain_security → Art. 28 (third-party register)**
  ([PR #438](https://github.com/secops-ng/secops-ng-framework/pull/438))
  backlinks the playbook on the Art. 28 third-party register
  surface, pairing the existing NIS2 Art. 21(2)(d)
  supply-chain-security closure with its DORA-side anchor.
- **it_security_support_agent grace close**
  ([PR #439](https://github.com/secops-ng/secops-ng-framework/pull/439))
  retires the last DORA SKELETON entry through an audited orphan
  skip — the playbook's data-flow doc reads as an internal
  support-desk surface with no operationally honest DORA citation
  to anchor on, so the entry moves into `_orphan_skip.yaml` with
  the rationale on the manifest.

After this wave, every finalized playbook on the framework carries
DORA mappings or sits in `_orphan_skip.yaml` with an audited
rationale. The DORA matrix leg of the orphan-CI workflow runs
green without grace.

### F-MAP-CRA Art. 13(4) component due-diligence closure (PR #440)

[PR #440](https://github.com/secops-ng/secops-ng-framework/pull/440)
closes the supply-chain-security row on the Cyber Resilience Act
inbound against Art. 13(4) — the component due-diligence surface
the manufacturer obligation carves out, requiring exercise of due
care when integrating third-party components into a product with
digital elements. The mapping authors the playbook against the
Art. 13(4) `playbook_refs` block and retires the matching skip
entry on `content/mappings/cra/_orphan_skip.yaml`.

The structural effect: the G-02 KRI orphan-closure property now
reads green across all four covered regimes simultaneously. NIS2,
DORA, CRA, and GDPR each have a populated per-framework mapping
tree, every finalized playbook carries mappings under each, and
the matrix-driven orphan-CI workflow defends the property without
any framework leg relying on the seven-day finalization grace
window.

### F-MAP-GDPR EXTEND-outbound — Chapter V overlay wave (PRs #433, #441–#445)

The previous note named the per-playbook outbound GDPR
`mappings.yaml` overlays as carrying the GDPR block as a slot
pinned by mapping tests and open for an EXTEND pass. This wave
authors that pass, in the same SKELETON → cluster shape the NIS2,
DORA, and CRA EXTEND passes followed before it.

The skeleton lands through
[PR #433](https://github.com/secops-ng/secops-ng-framework/pull/433):
a `§8` outbound personal-data-transfer scaffold on every shipped
playbook's `mappings.yaml`, pinning the Chapter V (Art. 44–49)
surface as the per-playbook outbound block — the article window
that governs transfers of personal data to third countries or
international organisations.

The five cluster passes then populate the scaffold per playbook
along the operational shape of the transfer:

- **Processor + identity egress cluster**
  ([PR #441](https://github.com/secops-ng/secops-ng-framework/pull/441))
  authors the Chapter V overlay on the playbooks whose
  data-flow docs read as processor- or identity-side egress —
  contractual_obligations_tracker, iam_auditor, identity_compromise
  — naming the Art. 46 appropriate-safeguards path and the
  Art. 49 derogation surface against the per-playbook egress
  stream the data-flow doc names.
- **Threat-intel / supply-chain sharing cluster**
  ([PR #442](https://github.com/secops-ng/secops-ng-framework/pull/442))
  authors the Chapter V overlay on the playbooks whose outbound
  stream is intelligence- or supply-chain-sharing — threat_intel_ingest,
  supply_chain_security, vuln_intake — pinning the
  Art. 46 standard-contractual-clauses path and the Art. 49(1)(d)
  important-reasons-of-public-interest derogation that the
  CSIRT-network sharing surface reads against.
- **Regulator-submission egress cluster**
  ([PR #443](https://github.com/secops-ng/secops-ng-framework/pull/443))
  authors the Chapter V overlay on the playbooks whose outbound
  stream is regulator-facing — incident_management,
  data_exfil — pinning the Art. 49(1)(d) public-interest
  derogation and the Art. 48 not-authorised-by-Union-law
  guardrail against third-country authority requests.
- **Vuln / posture batch**
  ([PR #444](https://github.com/secops-ng/secops-ng-framework/pull/444))
  authors the Chapter V overlay on the vulnerability- and
  posture-shaped playbooks — codebase_vuln_management,
  cloud_misconfiguration, infra_posture_management — for the
  cross-border telemetry and attestation streams those playbooks
  carry against managed-service substrates.
- **Ops / support remaining cluster (fan-out close)**
  ([PR #445](https://github.com/secops-ng/secops-ng-framework/pull/445))
  closes the wave by authoring the Chapter V overlay on the
  remaining ops- and support-shaped playbooks —
  it_security_support_agent, on_call_rotation,
  post_incident_review, phishing_triage, ransomware_containment —
  populating the per-playbook outbound block against the residual
  cross-border streams those workflows carry.

After this wave closes, every shipped playbook on the framework
carries a populated GDPR outbound `mappings.yaml` overlay with a
complete Chapter V (Art. 44–49) block. The mapping tests that
previously pinned the block as a structurally present slot now
read it as authored content.

## Where this leaves the regulatory-mapping floor

After this window:

- **G-02 KRI structurally green across four regimes.** Every
  finalized playbook carries inbound mappings under NIS2, DORA,
  CRA, and GDPR or sits in the matching `_orphan_skip.yaml` with
  an audited rationale. No framework leg of the orphan-CI matrix
  workflow relies on the seven-day finalization grace window.
- **GDPR outbound overlay complete on every shipped playbook.**
  The per-playbook `mappings.yaml` overlay's GDPR block carries
  authored Chapter V content across all shipped playbooks — five
  clusters, one scaffold PR, one fan-out close.
- **DORA inbound closes without grace.** The DORA SKELETON wave
  retires every remaining SKELETON skip entry through either an
  authored backlink or an audited orphan-skip rationale, and the
  DORA matrix leg runs green on its own contract.
- **CRA supply-chain row closes inbound on Art. 13(4).** The
  component due-diligence surface that the manufacturer obligation
  carves out now reads against supply_chain_security as its
  agentic anchor.

## Why the four-framework floor matters

A regulated operator subject to NIS2, DORA, the Cyber Resilience
Act, and the General Data Protection Regulation simultaneously is
not asked four independent audit questions — they are asked the
same operational question four times in four different vocabularies.
"Show me which of your operational capabilities discharges this
obligation, and show me the artifact that comes out the other end."
Without a structurally enforced mapping floor across all four
regimes, the answer fractures: a finalized playbook ships, one
framework stays unmapped, the operator quietly carries the gap
forward, and the audit surface a quarter later is more reconstruction
than evidence.

The matrix-driven orphan-CI workflow defending all four legs at
once makes that fracture impossible at the catalogue floor. Any
finalized playbook missing a mapping under any covered regime
fails the corresponding matrix leg with the offending slug named,
the per-regime KRI artifact records the miss, and the build does
not pass until either the mapping authors or the slug enters the
manifest with a written audited rationale. The closure landing in
this window is that no framework leg leans on grace anymore — the
property is enforced on the merge boundary, on every push, across
all four regimes.

## Why the Chapter V overlay matters

Chapter V of the General Data Protection Regulation (Art. 44–49)
governs transfers of personal data to third countries or
international organisations — the surface a regulated operator
hits whenever an outbound stream carries personal data across the
EU border. For a community catalogue of security-operations
playbooks, that surface is unavoidable: threat-intelligence
sharing crosses borders, processor egress crosses borders,
regulator-submission egress crosses borders, managed-service
substrates cross borders.

Authoring the per-playbook outbound GDPR overlay with a complete
Chapter V block names the article window each outbound stream
reads against directly — Art. 46 appropriate safeguards, Art. 48
guardrail against third-country authority requests, Art. 49(1)(d)
public-interest derogation — in the same per-playbook
`mappings.yaml` shape an operator already uses to compile the
artifact into their orchestrator. The audit question "which
Chapter V path does this outbound stream travel?" is now answered
on the artifact, not in a separate compliance binder.

## Honest framing on what is and isn't in this window

This window closes the inbound four-framework floor and the GDPR
outbound Chapter V overlay. What it does not yet land:

- **The fifth regime — eIDAS 2.0 / EUDI Wallet mapping tree.**
  Named honestly as open behind the GDPR wave in the previous
  note; still behind this one. The wallet pattern shipped on its
  own row earlier this season but the eIDAS regulation does not
  yet have its own `content/mappings/eidas/` tree or its own
  orphan-CI matrix leg.
- **GDPR-specific operational KRIs.** The G-02 KRI emits per-regime
  coverage metrics; the GDPR-specific operational KRIs
  (breach-notification-clock-margin, processor-attestation-freshness,
  data-minimisation-pressure, Chapter V transfer-path-freshness)
  open as the next pass on the metrics lane behind the row.
- **NIS2 / DORA / CRA outbound-overlay parity with Chapter V depth.**
  The Chapter V depth landed in this window is GDPR-specific
  because Chapter V is GDPR-specific; the NIS2 / DORA / CRA
  outbound overlays carry their per-regime overlay block already,
  but a future pass may deepen each along the equivalent
  per-regime article windows.

The accurate claim on this row is: the G-02 KRI orphan-closure
property is structurally green across all four covered regimes
without grace, every shipped playbook's `mappings.yaml` carries
an authored GDPR Chapter V outbound block, and the DORA and CRA
follow-up debt named in the previous notes is closed.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-MAP-DORA grace-window closure lands across
  [PR #434](https://github.com/secops-ng/secops-ng-framework/pull/434),
  [PR #435](https://github.com/secops-ng/secops-ng-framework/pull/435),
  [PR #436](https://github.com/secops-ng/secops-ng-framework/pull/436),
  [PR #437](https://github.com/secops-ng/secops-ng-framework/pull/437),
  [PR #438](https://github.com/secops-ng/secops-ng-framework/pull/438),
  and
  [PR #439](https://github.com/secops-ng/secops-ng-framework/pull/439);
  the CRA Art. 13(4) closure lands at
  [PR #440](https://github.com/secops-ng/secops-ng-framework/pull/440);
  the GDPR EXTEND-outbound Chapter V overlay wave lands across
  [PR #433](https://github.com/secops-ng/secops-ng-framework/pull/433),
  [PR #441](https://github.com/secops-ng/secops-ng-framework/pull/441),
  [PR #442](https://github.com/secops-ng/secops-ng-framework/pull/442),
  [PR #443](https://github.com/secops-ng/secops-ng-framework/pull/443),
  [PR #444](https://github.com/secops-ng/secops-ng-framework/pull/444),
  and
  [PR #445](https://github.com/secops-ng/secops-ng-framework/pull/445).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-one that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Three lanes moved together in this window. The DORA mapping tree
closes inbound without grace through five backlink PRs and one
audited orphan skip; the CRA supply-chain-security row closes
inbound on Art. 13(4) component due-diligence, taking the G-02
KRI orphan-closure property structurally green across all four
covered regimes; and the GDPR EXTEND-outbound pass lands a complete
Chapter V (Art. 44–49) overlay across every shipped playbook
through one scaffold and five cluster fan-outs. The eIDAS mapping
tree, the GDPR-specific operational KRIs, and per-regime outbound
overlay depth on NIS2 / DORA / CRA open as the next passes behind
the row.
