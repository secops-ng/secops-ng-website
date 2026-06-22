---
title: "Field note #71 — F-MAP-GDPR mapping-closure wave lands and orphan-CI consolidates into one nightly matrix workflow (GDPR joins CRA, NIS2, DORA on the same enforced floor)"
description: "Seventy-first field note from the SecOps-NG Digital Commons: the F-MAP-GDPR mapping-closure wave lands on the framework — Art. 5, Art. 26/28, Art. 32, Art. 33/34 clusters authored across five per-clause CORE passes — the per-framework orphan-CI workflows collapse into a single matrix-driven nightly lane, and a pair of follow-on inbound/outbound closures arm the supply-chain-security row on NIS2 Art. 21(2)(d) and the incident_management row on DORA Art. 19(4). Standards coverage across the catalogue now spans four regulatory regimes — CRA, NIS2, DORA, GDPR — and is machine-checked on every push."
pubDate: 2026-06-22
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-map-gdpr", "f-map-nis2", "f-map-dora", "mappings", "orphan-ci", "g-02-kri", "gdpr", "nis2", "dora", "oscal", "d3fend", "digital-commons", "ci-guard", "audit-readable"]
---

The previous field note read a single playbook lane closing —
F-WF-SCS supply-chain-security flipped Shipped with three-target
parity and a cookbook walkthrough, taking the operational half of
NIS2 Article 21(2)(d) from prose into portable executable content.
That note honestly named what was still open behind the row: the
inbound mapping into NIS2 Article 21(2)(d) was not yet anchored on
the playbook, and the DORA Article 19(4) incident-management
citation lane had a documented follow-up open against it.

This note reads the next window of work landing on `main`. The
General Data Protection Regulation mapping layer closes out across
five per-clause clusters, the per-framework orphan-CI workflows
collapse into a single matrix-driven nightly lane, and the pair of
follow-on closures named in the previous note arm the
supply-chain-security row on NIS2 Article 21(2)(d) inbound +
outbound and the incident_management row on DORA Article 19(4).
Taken together: regulatory-mapping coverage across the catalogue
now spans four regimes — Cyber Resilience Act, NIS2, DORA, and
GDPR — and the orphan-CI assertion that defends the property runs
as one workflow across all four.

## What landed in this window

Three lanes of work, each touching mapping-layer hygiene:

### F-MAP-GDPR mapping-closure wave (PRs #424–#429)

The GDPR regulatory-mapping tree lands across six PRs in the same
SKELETON → CORE-CLUSTER shape the CRA, NIS2, and DORA mapping
waves followed before it.

The skeleton lands through
[PR #424](https://github.com/secops-ng/secops-ng-framework/pull/424):
a per-framework GDPR orphan-CI lane that mirrors the wired CRA,
NIS2, and DORA siblings, with the parametrised assertion at
`tools/lint_playbook_orphans.py` extending to the GDPR axis of the
G-02 KRI (regulatory-mapping coverage). The lane is wired green
out of the gate by a SKELETON skip manifest naming every finalized
playbook slug, and every subsequent CORE pass retires the matching
skip entries as it authors the per-clause `playbook_refs`.

The four CORE clusters land in series, each authoring one per-clause
GDPR mapping YAML against the playbooks whose data-flow docs
already carry the principle as their agentic surface:

- **CORE-1 — Art. 33/34 breach-notification cluster**
  ([PR #425](https://github.com/secops-ng/secops-ng-framework/pull/425))
  authors the personal-data-breach notification cluster at
  `content/mappings/gdpr/article-33-34-personal-data-breach-notification.yaml`,
  pinning the four cluster playbooks — data_exfil,
  identity_compromise, incident_management, ransomware_containment —
  as agentic anchors per their data-flow docs. The Art. 33
  supervisory-authority notification surface and the Art. 34
  affected-subject communication surface land together because the
  72-hour clock and the without-undue-delay clock share the same
  evidence stream at the operator's end.
- **CORE-2 — Art. 32 security-of-processing cluster**
  ([PR #426](https://github.com/secops-ng/secops-ng-framework/pull/426))
  authors `content/mappings/gdpr/article-32-security-of-processing.yaml`,
  pinning six technical-security playbooks (cloud_misconfiguration,
  codebase_vuln_management, iam_auditor, infra_posture_management,
  it_security_support_agent, vuln_intake) against the ongoing
  confidentiality / integrity / availability baseline carved out in
  Art. 32(1)(b).
- **CORE-3 — Art. 5 data-protection-principles cluster**
  ([PR #427](https://github.com/secops-ng/secops-ng-framework/pull/427))
  authors `content/mappings/gdpr/article-5-data-protection-principles.yaml`,
  pinning per-clause `playbook_refs` for Art. 5(1)(b) purpose-
  limitation, Art. 5(1)(c) data-minimisation, and Art. 5(1)(e)
  storage-limitation against the playbooks whose data-flow docs
  carry each principle as their agentic surface — including a
  literal Art. 5(1)(b) purpose cite on supply_chain_security and an
  Art. 5(1)(c) Art. 9 carve-out on threat_intel_ingest.
- **CORE-4 — Art. 26/28 controller-processor cluster**
  ([PR #428](https://github.com/secops-ng/secops-ng-framework/pull/428))
  authors `content/mappings/gdpr/article-26-28-controller-processor.yaml`,
  pinning the processor contractual-obligations surface and the
  joint-controller arrangement surface against the playbooks that
  carry contract-time obligations as their agentic ground.
- **CORE-5 — Art. 33 operational-readiness leg**
  ([PR #429](https://github.com/secops-ng/secops-ng-framework/pull/429))
  extends the Art. 33 entry on the breach-notification YAML to
  wire the operational-readiness leg of the 72-hour
  timely-notification window — on_call_rotation backs the bound
  escalation chain and the rotation-boundary handoff brief,
  post_incident_review backs the post-event learning surface that
  Art. 33(5) records of breaches needs, and phishing_triage backs
  the agentic surface that detects the precipitating event.

After the wave closes, every finalized playbook on the framework
carries GDPR mappings, the per-framework GDPR `_orphan_skip.yaml`
manifest is empty of SKELETON entries (only the permanent audited
exclusions remain), and the GDPR orphan-CI lane stays green
without leaning on the seven-day finalization grace window.

### Orphan-CI consolidation into one matrix workflow (PR #430)

The per-framework orphan-CI workflows — `cra-orphan-ci.yml`,
`nis2-orphan-ci.yml`, `dora-orphan-ci.yml`, `gdpr-orphan-ci.yml` —
collapse into a single matrix-driven workflow at
`.github/workflows/orphan-ci.yml` through
[PR #430](https://github.com/secops-ng/secops-ng-framework/pull/430).
Each framework runs as its own non-fail-fast matrix leg over the
generic `tools.lint_playbook_orphans` entrypoint, preserving
per-framework PASS / FAIL granularity in CI output and the
per-framework KRI artifact shape (`g-02-<framework>-kri`).

The per-framework `_orphan_skip.yaml` manifests, the parametrised
linter helper, and the per-framework KRI emitter are byte-unchanged
across the consolidation — the four-regime orphan-detection
behaviour is structurally identical, just expressed as one
workflow instead of four. The downstream effect for a contributor
is that adding a fifth regulatory regime in the future is a
one-line matrix extension rather than a new workflow file.

### Two follow-on closures named in the previous note (PRs #431, #432)

Two narrow closures land alongside the GDPR wave, each arming a
regulatory citation the previous field notes named honestly as
open.

[PR #431](https://github.com/secops-ng/secops-ng-framework/pull/431)
closes the supply-chain-security regulatory graph on NIS2 Article
21(2)(d) on both sides: inbound, the playbook joins the existing
threat_intel_ingest and contractual_obligations_tracker entries on
the NIS2 mapping tree's Art. 21(2)(d) `playbook_refs` block;
outbound, the `nis2:` block on the playbook's `mappings.yaml`
overlay populates with the matching Art. 21(2)(d) backlink, naming
the orchestration role that composes the runtime supply-chain
stream and the contract-time obligation stream into the periodic
re-attestation surface the article requires.

[PR #432](https://github.com/secops-ng/secops-ng-framework/pull/432)
adds a direct `incident_management` citation to the three DORA
Article 19(4) regulator-notification clauses — initial four-hour,
intermediate seventy-two-hour, and final one-month — alongside the
upstream incident-type playbooks already cited. The corresponding
skip entry on `content/mappings/dora/_orphan_skip.yaml` retires so
the DORA orphan-CI lane re-arms per the manifest's own contract.

## Where this leaves the regulatory-mapping floor

After this window, the regulatory-mapping floor reads:

- **Four regimes covered.** Cyber Resilience Act, NIS2, DORA, and
  GDPR each have a populated per-framework mapping tree, a wired
  orphan-CI lane, and a per-framework G-02 KRI artifact emitted on
  every push.
- **One workflow defending all four.** The consolidated orphan-CI
  lane runs as a matrix over the four regimes, preserves
  per-regime PASS / FAIL granularity, and emits per-regime KRI
  artifacts with no behavioural delta from the four-workflow
  predecessor.
- **One parametrised assertion under the floor.** The single
  helper at `tools/lint_playbook_orphans.py` is the source of
  truth for orphan-detection across regimes; adding a fifth
  regime is a content + manifest exercise, not a workflow-plumbing
  exercise.
- **The follow-up debt from field note #70 is closed.** The
  supply-chain-security inbound mapping into NIS2 Art. 21(2)(d) is
  now anchored, the outbound `nis2:` block on the playbook overlay
  is populated, and the DORA Art. 19(4) reporting clauses cite
  incident_management directly.

## Why structural coverage matters here

A regulated operator facing four regimes at once is asked the
same audit question four times in slightly different vocabularies:
"show me which of your operational capabilities discharges this
obligation, and show me the artifact that comes out the other
end." Without a structurally enforced mapping floor, the answer
drifts — a finalized playbook ships, a regime stays unmapped, the
operator quietly carries the gap forward, and the audit surface
two quarters later is more guesswork than evidence.

The orphan-CI matrix workflow makes that drift impossible at the
catalogue floor. Any finalized playbook missing a mapping under
any of the four regimes fails the corresponding matrix leg with
the offending slug named, the per-regime KRI artifact records the
miss, and the build does not pass until either the mapping
authors or the slug enters the `_orphan_skip.yaml` manifest with a
written audited rationale. The property defended is narrow but
structural — "every finalized playbook carries mappings under
every covered regime" — and it lives in CI, not in a contributor
checklist.

## Honest framing on what is and isn't in this window

The closure flip names the **inbound** half of the four-regime
floor: every finalized playbook is anchored under every covered
regime. What this wave does not yet land:

- **The fifth regime — eIDAS 2.0 / EUDI Wallet mapping tree.** The
  wallet pattern shipped on its own row earlier this season
  ([F-SV-02](https://github.com/secops-ng/secops-ng-framework/blob/main/ROADMAP.md))
  but the eIDAS regulation does not yet have its own
  `content/mappings/eidas/` tree or its own orphan-CI matrix leg.
  That sits behind the GDPR wave as a follow-on, not a regression.
- **Outbound EXTEND on each playbook's GDPR block.** The per-clause
  inbound trees are populated; the per-playbook outbound
  `mappings.yaml` overlays carry the GDPR block as a slot pinned
  by mapping tests, and a follow-up EXTEND pass writes the
  per-playbook backlinks the same way the NIS2 / DORA / CRA EXTEND
  passes did before it.
- **KPI / KRI catalogue depth on the GDPR axis.** The G-02 KRI
  emits per-regime coverage metrics; the GDPR-specific operational
  KRIs (breach-notification-clock-margin, processor-attestation-
  freshness, data-minimisation-pressure) live as follow-on work on
  the metrics lane behind the row.

The accurate claim on this row is: the regulatory-mapping floor
now covers four regimes — Cyber Resilience Act, NIS2, DORA, and
GDPR — every finalized playbook carries mappings under each, the
orphan-CI assertion that defends the property runs as one matrix
workflow, and the supply-chain-security row on NIS2 Art. 21(2)(d)
and the incident_management row on DORA Art. 19(4) close out the
follow-up debt named in field note #70.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-MAP-GDPR wave lands across
  [PR #424](https://github.com/secops-ng/secops-ng-framework/pull/424),
  [PR #425](https://github.com/secops-ng/secops-ng-framework/pull/425),
  [PR #426](https://github.com/secops-ng/secops-ng-framework/pull/426),
  [PR #427](https://github.com/secops-ng/secops-ng-framework/pull/427),
  [PR #428](https://github.com/secops-ng/secops-ng-framework/pull/428),
  and
  [PR #429](https://github.com/secops-ng/secops-ng-framework/pull/429);
  the orphan-CI consolidation lands at
  [PR #430](https://github.com/secops-ng/secops-ng-framework/pull/430);
  the two follow-on closures land at
  [PR #431](https://github.com/secops-ng/secops-ng-framework/pull/431)
  and
  [PR #432](https://github.com/secops-ng/secops-ng-framework/pull/432).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Three lanes moved together in this window. The General Data
Protection Regulation mapping tree lands across five per-clause
clusters with the per-framework orphan-CI lane staying green
without grace, the orphan-CI plumbing collapses from four
per-framework workflows into one matrix-driven nightly lane that
preserves per-regime PASS / FAIL granularity and per-regime KRI
artifacts, and the two follow-up closures named in the previous
note arm the supply-chain-security row on NIS2 Article 21(2)(d)
inbound and outbound and the incident_management row on DORA
Article 19(4). The eIDAS mapping tree, the per-playbook outbound
GDPR EXTEND pass, and the GDPR-specific operational KRIs open as
the next passes behind the row.
