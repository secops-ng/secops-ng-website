---
title: "Field note #60 — codebase-vuln-management and iam-auditor both flip to Shipped, and the NIS2 Article 21 control-family row fills out across access-control and human-resources-security"
description: "Sixtieth field note from the SecOps-NG Digital Commons: F-WF-07 codebase-vuln-management flips to Shipped on the ROADMAP, F-WF-08 iam-auditor closes its three-target CORE wave and flips to Shipped, and the NIS2 Article 21(2) control-family row now reads end-to-end across risk management and business continuity, incident handling, vulnerability handling and disclosure, and access-control and human-resources-security — with F-WF-06 infrastructure-posture opening its SKELETON behind the closed waves."
pubDate: 2026-06-19
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-07", "f-wf-08", "f-wf-06", "codebase-vuln-management", "iam-auditor", "capability-inventory", "access-evidence", "nis2", "article-21", "digital-commons", "three-target", "byte-parity", "n8n", "temporal", "langgraph"]
---

The last field note read the lawful-basis guard closing on full
seven-section GDPR coverage and the codebase-vuln-management lane
closing its three-target CORE wave across n8n, Temporal, and
LangGraph. The control-family row against NIS2 Article 21(2) had
moved another column.

This note reads the next move on the same row. Two lanes flip to
Shipped in the same window — codebase-vuln-management closes its
ROADMAP entry behind the CORE wave that landed the day before, and
iam-auditor closes a CORE wave of its own and flips alongside it. A
third lane — continuous infrastructure-posture management — opens a
SKELETON behind them. The Article 21(2) control-family row now
reads end-to-end across four columns of the regulation, not as a
plan but as portable content with worked examples on three reference
targets.

## What landed

### F-WF-07 — codebase-vuln-management flips to Shipped

The three-target CORE wave for codebase vulnerability management
closed in the previous window across
[PR #346](https://github.com/secops-ng/secops-ng-framework/pull/346),
[PR #347](https://github.com/secops-ng/secops-ng-framework/pull/347),
and
[PR #348](https://github.com/secops-ng/secops-ng-framework/pull/348)
— one canonical CACAO v2 playbook, three worked examples under
`examples/{n8n,temporal,langgraph}/codebase_vuln_management/`, three
byte-parity goldens, and one shared disclosure-timeline emitter
producing byte-identical evidence records across all three reference
targets.

Through
[PR #350](https://github.com/secops-ng/secops-ng-framework/pull/350),
**F-WF-07 flips to Shipped** on the ROADMAP and gets its cookbook
entry. The deterministic primitives now bound on the canonical
playbook side are: SBOM content-hash pin, finding normalisation,
disclosure-window resolution against the canonical CVD policy, and
disclosure-timeline-record builder against
`schemas/evidence/disclosure_timeline.schema.json`. The default
dependency scanner stays a locally-runnable CLI installable from an
EU-hosted package index — no hosted scanner SaaS, no non-EU default
endpoint, no vendor SDK bundled into the playbook. The lane reads
sovereign-stack neutral on all three targets.

The lane sits against
**[NIS2 Article 21(2)(e)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)**
— "security in network and information systems acquisition,
development and maintenance, including vulnerability handling and
disclosure" — and the same disclosure-timeline record reads against
the
[CRA](https://eur-lex.europa.eu/eli/reg/2024/2847/oj)
expectations for coordinated vulnerability disclosure timelines on
products with digital elements.

### F-WF-08 — iam-auditor closes its three-target CORE wave and flips to Shipped

The previous window left the iam-auditor lane with a SKELETON
playbook and three worked example shells. This window closes the
CORE wave on a single canonical artifact and flips the lane.

Through
[PR #351](https://github.com/secops-ng/secops-ng-framework/pull/351),
the iam-auditor lane gets:

- **One canonical CACAO v2 playbook** under
  `content/playbooks/iam_auditor/` bound fully to deterministic
  primitives — identity enumeration, capability-list construction,
  and access-evidence-artifact builder.
- **Three worked examples** under
  `examples/{n8n,temporal,langgraph}/iam_auditor/`, each carrying a
  compiled artifact, a regenerator, a README, and a byte-stable
  access-evidence snapshot.
- **Three byte-parity goldens** — one per target, pinning each
  compiled workflow against its emitter and the mirrored playbook
  against the canonical source.
- **One access-evidence artifact shape** validated against
  `schemas/evidence/access.schema.json`. Identities in the
  access-evidence record are **role-shaped** — the artifact carries
  the role and capability shape an identity holds, never a personal
  name and never a credential. The same artifact reads byte-
  identically across n8n, Temporal, and LangGraph.

The access-evidence stream the iam-auditor lane emits is the same
stream the **F-CP-07 access-evidence stream** already binds on the
compliance-evidence row — the lane consumes a Shipped seam rather
than opening a new one.

Through
[PR #352](https://github.com/secops-ng/secops-ng-framework/pull/352),
**F-WF-08 flips to Shipped** on the ROADMAP and gets its cookbook
entry. The lane sits against
**[NIS2 Article 21(2)(i)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)**
— "human resources security, access control policies and asset
management" — and also reads against Article 21(2)(j) for the
multi-factor and authentication-posture side of the same row.

### F-WF-06 — infrastructure-posture management opens a SKELETON

Through
[PR #353](https://github.com/secops-ng/secops-ng-framework/pull/353),
**F-WF-06 — infrastructure posture management** opens a SKELETON
behind the two closed waves. The lane carries a continuous-posture
variant — a canonical playbook scaffold under
`content/playbooks/infra_posture_management/`, three worked example
shells under `examples/{n8n,temporal,langgraph}/infra_posture_management/`,
and a posture-evidence schema at
`schemas/evidence/posture.schema.json`. A GDPR data-flow doc lands
in the same push, against the convention the catalogue settled into
two windows ago — every new workflow lane arrives with its
data-flow doc in the same wave as the playbook scaffold, so the
seven-section guard reads green from day one.

The lane sits against
**[NIS2 Article 21(2)(a)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)**
— "policies on risk analysis and information system security" — on
the continuous-posture read of the same family of controls the
incident-management and risk-management lanes cover on the event
side.

## Why this window reads as the Article 21 row filling out

The two flips and the new SKELETON close a shape that has been
forming for several windows. Read the
[NIS2 Article 21(2)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)
list of cybersecurity risk-management measures as a row of columns:

- **(a) risk analysis and information system security policies** —
  F-WF-01 risk-management is Shipped; F-WF-06 infrastructure-posture
  opens its SKELETON in this window for the continuous read of the
  same family.
- **(b) incident handling** — F-WF-02 incident-management is
  Shipped, with the F-CP-04 incident-evidence stream Shipped against
  it.
- **(c) business continuity and crisis management** — covered on
  the risk-management side and read by the cookbook's continuity
  artifacts.
- **(e) security in network and information systems acquisition,
  development and maintenance, including vulnerability handling
  and disclosure** — **F-WF-07 codebase-vuln-management flips to
  Shipped in this window.**
- **(f) policies and procedures to assess the effectiveness of
  cybersecurity risk-management measures** — F-CP-06 effectiveness
  stream is Shipped.
- **(i) human resources security, access control policies and
  asset management** — **F-WF-08 iam-auditor flips to Shipped in
  this window**, consuming the F-CP-07 access-evidence stream that
  shipped in the previous milestone.
- **(j) the use of multi-factor authentication or continuous
  authentication solutions** — read by the iam-auditor capability
  inventory on the auth-posture side.

The
[NIS2 Article 21(2)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)
row is no longer a roadmap of intentions; on the columns the
framework has reached, it is portable content with worked examples
on three reference targets and byte-parity goldens that hold across
all three.

## What this gives an operator

An operator running the reference cookbook against any of n8n,
Temporal, or LangGraph can now stand up two new control-family
lanes alongside the existing six:

- A **codebase vulnerability-management** workflow that pins SBOM
  content hashes, normalises findings, resolves a disclosure window
  against the canonical CVD policy, and emits a disclosure-timeline
  evidence record that lands in the same on-disk shape across all
  three reference targets. The record composes into the F-WF-09
  auditor-bundle pull as a seventh-stream candidate.
- An **iam-auditor** workflow that enumerates identities, builds a
  capability list, and emits an access-evidence record whose
  identities are role-shaped — the on-disk artifact carries no
  personal names and no credentials, and reads byte-identically
  across all three reference targets. The artifact composes into
  the auditor-bundle alongside the other evidence streams.

The auditor-bundle pull continues to be the operator-facing seam: a
single ask against the bundle returns a coherent set of evidence
records across the control-family row the framework has reached.

## What's open behind this wave

- **F-WF-06 infrastructure-posture CORE.** With the SKELETON open,
  the next reads on this lane bind the canonical core_body, build
  the three worked examples, and land per-target byte-parity
  goldens — the same shape every closed CORE wave on this row
  followed.
- **Auditor-bundle composition against the new streams.** The
  F-WF-09 auditor-bundle now has two more candidate streams to
  compose — the disclosure-timeline record from F-WF-07 and the
  access-evidence record from F-WF-08 — both already on the
  evidence schema row.
- **The next NIS2 Article 21 columns.** The columns that remain
  unaddressed on the row are the ones the next workflow lanes will
  arrive against. Each new lane will arrive content-first with its
  data-flow doc in the same wave as the playbook scaffold, so the
  seven-section guard reads green from day one and the catalogue's
  GDPR posture stays a property of the repository rather than a
  discipline of review.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-07 CORE wave landed in the previous window through
  [PR #346](https://github.com/secops-ng/secops-ng-framework/pull/346)
  (n8n),
  [PR #347](https://github.com/secops-ng/secops-ng-framework/pull/347)
  (Temporal), and
  [PR #348](https://github.com/secops-ng/secops-ng-framework/pull/348)
  (LangGraph); the F-WF-07 ROADMAP flip plus cookbook entry through
  [PR #350](https://github.com/secops-ng/secops-ng-framework/pull/350);
  the F-WF-08 CORE wave through
  [PR #351](https://github.com/secops-ng/secops-ng-framework/pull/351);
  the F-WF-08 ROADMAP flip plus cookbook entry through
  [PR #352](https://github.com/secops-ng/secops-ng-framework/pull/352);
  and the F-WF-06 SKELETON through
  [PR #353](https://github.com/secops-ng/secops-ng-framework/pull/353),
  all merged.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-nine that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two lanes flipped to Shipped in this window. The codebase
vulnerability-management lane closed its three-target CORE wave
the day before and now has its ROADMAP entry closed behind it. The
iam-auditor lane closed a CORE wave of its own — one canonical
playbook, three worked examples, three byte-parity goldens, one
role-shaped access-evidence artifact — and flipped alongside it.
A third lane opened a continuous-posture SKELETON behind them. The
NIS2 Article 21(2) row now reads across risk management and
business continuity, incident handling and crisis management,
vulnerability handling and disclosure, effectiveness measurement,
access control and human-resources security, and the
authentication-posture column the iam-auditor capability inventory
covers — as portable content on three reference targets, not as a
plan. The next field notes will read whatever opens behind the
closed waves — the F-WF-06 CORE wave, the auditor-bundle
composition against the two new streams, and the next NIS2 Article
21 column to arrive content-first.
