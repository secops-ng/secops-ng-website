---
title: "Field note #59 — the lawful-basis guard covers all seven GDPR sections, and codebase-vuln-management opens its CORE wave on n8n"
description: "Fifty-ninth field note from the SecOps-NG Digital Commons: F-GD-02 EXTEND closes the lawful-basis guard against the full seven-section GDPR data-flow template with a drift check, and F-WF-07 codebase-vuln-management opens its three-target CORE wave on n8n with a worked example and byte-parity golden. Temporal is in review; LangGraph is queued."
pubDate: 2026-06-19
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-gd-02", "f-wf-07", "lawful-basis", "gdpr", "codebase-vuln-management", "sbom", "disclosure-timeline", "n8n", "temporal", "langgraph", "byte-parity", "nis2", "cra", "digital-commons"]
---

The last field note read detection-engineering closing its
three-target CORE wave and iam-auditor opening a capability-inventory
SKELETON in the same window. The compliance-evidence row had pinned
its shape, and new workflow lanes were arriving content-first with
their GDPR data-flow doc in the same push as the playbook scaffold.

This note reads the next move on two seams that have been opening
for several windows. The lawful-basis guard now reads the full
seven-section GDPR data-flow template, with a drift check. And the
codebase vulnerability-management lane — the one the framework opens
against NIS2 Art. 21(2)(e) and the CRA disclosure-timeline read —
opens its three-target CORE wave on the n8n target, with a worked
example and a byte-parity golden.

## What landed

### F-GD-02 — lawful-basis guard EXTEND: full seven-section coverage + drift check, Shipped

The SKELETON of this guard, shipped a few windows back, asserted one
thing: every cookbook playbook's data-flow doc had a non-empty
`## 2. Lawful basis` section. That was the floor — the read that
caught a workflow shipping without a documented lawful basis.

Through
[PR #344](https://github.com/secops-ng/secops-ng-framework/pull/344),
the guard now reads the full canonical template:

- **All seven canonical sections** (Purpose, Lawful basis, Categories,
  Recipients, Retention, Cross-border transfers, Data subject rights)
  must be present and non-empty in every cookbook playbook's
  data-flow doc.
- **Drift check** — the section set in any data-flow doc must match
  the canonical template's section set exactly. No missing, no
  extra, no renamed sections. If the canonical template gets a
  rename in the future, the guard reads that rename live; there is
  no second hard-coded list anywhere.
- **Diagnostic carries the section name** — when the guard fails, it
  names the workflow and the offending section, so the failure is
  actionable in one read.

The test suite that ships with the EXTEND covers thirty-one cases,
including each canonical section individually missing or empty, a
renamed section, an extra appendix, and the full real cookbook tree
as a regression net. F-GD-02 flips to **Shipped** on the ROADMAP in
the same PR.

### F-WF-07 — codebase-vuln-management: CORE wave opens on n8n

Through
[PR #346](https://github.com/secops-ng/secops-ng-framework/pull/346),
the codebase vulnerability-management lane opens its three-target
CORE wave on the **n8n** target. The previous window left this lane
with a SKELETON playbook, a disclosure-timeline schema, and a
NIS2/CRA/GDPR mapping stub. The CORE-N8N slice now adds:

- **A CACAO v2 playbook with four deterministic action steps** —
  pinning the SBOM content hash, normalising the findings, resolving
  the disclosure window, and building the disclosure-timeline record.
  The action bodies bind to small primitives the cookbook can reuse,
  in the same flat-token convention the vuln-intake lane converged
  on.
- **A worked example under `examples/n8n/codebase-vuln-management/`** —
  the compiled `workflow.n8n.json`, a regenerator, a README, and a
  byte-stable disclosure-timeline evidence snapshot.
- **A byte-parity golden** pinning the compiled n8n workflow JSON
  against the emitter, and the mirrored playbook against the
  canonical source.

The default scanner stays a locally-runnable CLI installable from an
EU-hosted package index. No hosted scanner SaaS dependency, no
non-EU default endpoint, no vendor SDK bundled into the playbook —
the fetcher is operator-side, so the lane is sovereign-stack
neutral.

### Also in flight, not yet Shipped

- **F-WF-07 CORE-FANOUT-TMP** — the Temporal sibling of the n8n
  worked example is open as
  [PR #347](https://github.com/secops-ng/secops-ng-framework/pull/347)
  and in review. The disclosure-timeline emitter is the shared seam,
  so the Temporal worked example's evidence record is expected to
  reproduce byte-identically against the n8n one once the slice
  lands.
- **F-WF-07 CORE-FANOUT-LG** — the LangGraph sibling is queued
  behind Temporal in the same sequence the prior workflow lanes
  used.
- **F-WF-07 three-target byte-parity** — the n8n golden is in;
  Temporal and LangGraph byte-parity goldens land alongside their
  respective worked examples. The lane does not flip to Shipped
  until all three targets compile from the same canonical playbook
  with locked goldens.

## Why this wave reads as the next layer

Two reads pin this against the substrate the last few windows laid:

- **F-GD-02 reads the GDPR catalogue seam at full coverage.** The
  SKELETON guard pinned the lawful-basis read on every workflow.
  The EXTEND pins the whole data-flow shape — Purpose, Lawful basis,
  Categories, Recipients, Retention, Cross-border transfers, Data
  subject rights — on every workflow, and reads any drift between a
  workflow's data-flow doc and the canonical template as a
  CI-blocking failure. The catalogue's GDPR posture is now a
  property of the repository rather than a discipline of whoever is
  reviewing a PR.
- **F-WF-07 reads the second NIS2-Art.-21(2)(e)-aligned lane onto
  the three-target compile path.** The lane the framework opens
  against codebase-level vulnerability management — and against
  the CRA's disclosure-timeline expectations — now compiles a
  byte-stable n8n worked example with a byte-stable
  disclosure-timeline evidence record. The same canonical playbook
  drives the Temporal slice in review and the LangGraph slice
  behind it. The shared disclosure-timeline emitter means the
  evidence record reads byte-identically across the three targets
  the moment all three siblings land.

## What this gives an operator

An operator running the reference cookbook against any of the three
reference compile targets can now read the GDPR posture of any new
workflow they author at the same bar as the existing catalogue.
The seven-section data-flow doc is a hard floor; missing a section
or renaming one fails CI with a diagnostic that names the workflow
and the section. The lawful-basis read is no longer a discipline;
it is a property of the repository.

On the codebase-vuln-management side, an operator running the
reference cookbook on n8n can now stand up a SBOM-driven
dependency-review workflow whose disclosure-timeline evidence
record lands in the same on-disk shape the F-CP-06 effectiveness
and F-CP-07 access streams use. The Temporal and LangGraph slices
follow in their own windows, and the same canonical playbook
drives all three.

## What's open behind this wave

- **F-WF-07 CORE-FANOUT-TMP and -LG.** Temporal is in review;
  LangGraph is queued. Byte-parity goldens land per target. The
  lane flips to Shipped on the ROADMAP when all three reference
  targets compile from the canonical playbook with locked goldens.
- **F-WF-07 ↔ auditor-bundle wiring.** The disclosure-timeline
  evidence record is the seventh-stream candidate that composes
  into the F-WF-09 auditor-bundle the moment the three-target
  parity closes — a single auditor-bundle pull then carries a
  codebase-vulnerability-management disclosure-timeline record
  next to the other six evidence streams.
- **F-GD-02 next reads.** The seven-section guard is the floor;
  the read that extends it next is on the catalogue mapping side
  rather than the guard itself — the GDPR data-flow doc on every
  new workflow lane (as F-WF-08 demonstrated last window) is the
  shape that keeps the guard cheap as the catalogue grows.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-GD-02 EXTEND + ROADMAP flip through
  [PR #344](https://github.com/secops-ng/secops-ng-framework/pull/344),
  F-WF-07 CORE-FANOUT-N8N through
  [PR #346](https://github.com/secops-ng/secops-ng-framework/pull/346),
  and F-WF-07 CORE-FANOUT-TMP open for review as
  [PR #347](https://github.com/secops-ng/secops-ng-framework/pull/347).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-eight that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two seams moved this window. The lawful-basis guard now reads the
full seven-section GDPR data-flow template with a drift check, and
F-GD-02 flips to Shipped — the catalogue's GDPR posture is a
property of the repository rather than a discipline of review.
Codebase-vuln-management opens its three-target CORE wave on n8n
with a worked example, a byte-parity golden, and a byte-stable
disclosure-timeline evidence record; Temporal is in review and
LangGraph is queued. The next field notes will read the Temporal
slice landing and the LangGraph slice that follows.
