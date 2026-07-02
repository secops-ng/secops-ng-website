---
title: "Field note #98 — G-01 cookbook wave continues with four more walkthroughs (framework PRs #573-#576)"
description: "Ninety-eighth field note from the SecOps-NG Digital Commons: four more cookbook entries land against secops-ng-framework in the same window, bringing documented end-to-end walkthroughs to twenty-two of twenty-seven shipped playbooks. Ransomware containment (#573), cloud misconfiguration (#574), threat-intel ingest (#575), and cyber-hygiene training (#576) each land a full operator-facing walkthrough — CACAO topology, three-target compile view across n8n / Temporal / LangGraph, NIS2 / DORA / CRA / OSCAL anchors, operator customisation points, replay-and-audit story. G-01 cookbook coverage continues to close in."
pubDate: 2026-07-02
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-01", "cookbook", "ransomware-containment", "cloud-misconfiguration", "threat-intel-ingest", "cyber-hygiene-training", "cacao", "n8n", "temporal", "langgraph", "nis2", "dora", "cra", "oscal", "ocsf", "digital-commons"]
---

Four framework PRs land in the same window on the back of the wave
that closed field note #97, and together they keep the G-01
cookbook-coverage number moving. Twenty-seven playbooks ship on the
catalogue; eighteen carried a documented walkthrough at the top of the
window; twenty-two carry one at the bottom of it.
[PR #573](https://github.com/secops-ng/secops-ng-framework/pull/573)
lands the ransomware-containment walkthrough.
[PR #574](https://github.com/secops-ng/secops-ng-framework/pull/574)
lands the cloud-misconfiguration walkthrough.
[PR #575](https://github.com/secops-ng/secops-ng-framework/pull/575)
lands the threat-intel-ingest walkthrough.
[PR #576](https://github.com/secops-ng/secops-ng-framework/pull/576)
lands the cyber-hygiene-training walkthrough. Five shipped playbooks
now remain without a documented cookbook entry.

## What landed

Four PRs against the framework, all merged to `main` in the same
window.

### F-WF-RANSOMWARE EXTEND-DOCS — ransomware_containment cookbook walkthrough (PR #573)

[PR #573](https://github.com/secops-ng/secops-ng-framework/pull/573)
adds `docs/cookbook/ransomware_containment.md`, the operator-facing
walkthrough for `playbook.ransomware_containment@v1`. The entry
documents the ransomware-specific response chain end to end:
detonation-signal hydration (encryption-behaviour telemetry, ransom
notes on disk or in mailboxes, C2 heartbeats from EDR /
network-detection surfaces), blast-radius scoping against the affected
principal and asset graph, containment sequencing (host isolation on
the operator's EDR surface, share unmounting, credential revocation
on the compromised identities, egress-policy tightening on the named
sinks), and the recovery-branch pivot into the backup-recovery
surface where a clean snapshot exists.

The walkthrough is explicit about a chain property that matters for
regulatory reads: ransomware containment is a responder-facing
playbook, not the notification engine. The NIS2 Article 21(2)(c)
incident-handling read anchors on this playbook; the NIS2 Article
23 24-hour early-warning and 72-hour notification chain — the DORA
Article 17 operational-resilience companion — runs on the downstream
`playbook.incident_management@v1` submission engine. The regulatory
reads are NIS2 Article 21(2)(c) and 21(2)(d) (incident handling,
business-continuity / backup management), DORA Article 17 (ICT-related
incident management), and CRA Article 13(6) (vulnerability handling).
The cookbook entry documents where the notification handoff composes
the incident envelope and which downstream playbook renders the
per-stage submissions.

### F-WF-CLOUDMISCONF EXTEND-DOCS — cloud_misconfiguration cookbook walkthrough (PR #574)

[PR #574](https://github.com/secops-ng/secops-ng-framework/pull/574)
adds `docs/cookbook/cloud_misconfiguration.md`, the walkthrough for
`playbook.cloud_misconfiguration@v1`. The entry documents the cloud
configuration-drift surface end to end: signal hydration from the
operator's CSPM / IaC-drift surface (public buckets, permissive IAM
grants, wide-open security groups, unencrypted volumes, exposed
management endpoints), OSCAL control-mapping annotation on the
finding (CM-7 least-functionality and CM-7(2) prevent-program-execution
land as the primary anchors, with CM-2 baseline-configuration and
CM-6 configuration-settings as companion reads), and the remediation
branch — either an automated rollback where the drift is
policy-clean-reversible or a ticketed change on the operator's
change-management surface where it is not.

The walkthrough is explicit about the ownership boundary that
matters here: the playbook detects and classifies configuration
drift; the remediation execution runs on the operator's existing
change surface, not on a runtime shipped by the framework. The
OSCAL profile references are declared on the mappings overlay so a
regulator or an auditor can read the CM-7 / CM-7(2) claim directly
against the shipped artifact. The NIS2 Article 21(2)(b) incident-
response read is the primary regulatory anchor; NIS2 Article
21(2)(f) (policies on the use of cryptography and, where appropriate,
encryption) reads on the unencrypted-volume finding path
specifically.

### F-WF-THREATINTEL EXTEND-DOCS — threat_intel_ingest cookbook walkthrough (PR #575)

[PR #575](https://github.com/secops-ng/secops-ng-framework/pull/575)
adds `docs/cookbook/threat_intel_ingest.md`, the walkthrough for
`playbook.threat_intel_ingest@v1`. The entry documents the
threat-intelligence pipeline end to end: ingestion from upstream
feeds (STIX / TAXII, MISP, per-vendor OSINT), IoC / TTP normalisation
onto the internal indicator model, deduplication against the shipped
indicator store, enrichment against the affected-principal /
affected-asset graph where the operator's telemetry supports it, and
OCSF Threat Intelligence Finding emission onto the operator's
event bus so downstream detection-engineering and response playbooks
can consume the same shape.

The walkthrough is explicit about the OCSF binding property that
carries this playbook: the emit is a structured OCSF Threat
Intelligence Finding, not a per-vendor blob. The mappings overlay
declares the per-field binding onto the OCSF schema so a peer
reviewer can verify — and the byte-parity goldens can enforce — that
the same normalised indicator lands identically across the three
reference compile targets. The regulatory read is NIS2 Article
21(2)(e) (security in network and information systems acquisition,
development and maintenance, including vulnerability handling and
disclosure) with CRA Article 13(6) vulnerability-handling companion.

### F-WF-HYGIENE EXTEND-DOCS — cyber_hygiene_training cookbook walkthrough (PR #576)

[PR #576](https://github.com/secops-ng/secops-ng-framework/pull/576)
adds `docs/cookbook/cyber_hygiene_training.md`, the walkthrough for
`playbook.cyber_hygiene_training@v1`. The entry documents the staff
cyber-hygiene / security-awareness surface end to end: annual and
role-scoped training-campaign scheduling, per-cohort delivery via the
operator's LMS surface, phishing-simulation ingestion (report-rate,
click-rate, credential-submit-rate) into the training-effectiveness
signal, remedial-cohort composition where a role or a team falls
under threshold, and the completeness / attestation register that
lands on the operator's compliance surface.

The walkthrough is explicit about the artefact the playbook produces:
a per-cohort attestation register and an effectiveness-signal
snapshot, both audit-evident and both readable by a regulator. The
NIS2 Article 21(2)(g) cyber-hygiene / basic-security-training read is
the primary anchor. The DORA Article 13(6) ICT-security-awareness /
digital-operational-resilience-training read and the CRA Article
13(6) awareness-of-cybersecurity read land as companion anchors on
the same artefact — three distinct obligations reading against one
operational deliverable.

## Why this reads against G-01

G-01 on the published roadmap is the catalogue-coverage goal: at
least twenty-five CACAO v2 playbooks covering the top-5 NIS2 Article
21 control families. Twenty-seven playbooks ship, and — with this
wave — twenty-two carry a documented end-to-end operator walkthrough.
The counting threshold on G-01 has been carried since the shipped
catalogue reached twenty-five; the usability half of G-01 continues
to close in on this shape.

Coverage state after this window:

- **Twenty-seven playbooks shipped** on the framework catalogue.
- **Twenty-two cookbook walkthroughs available** — over four fifths
  of the shipped catalogue now carries a full end-to-end
  operator-facing entry.
- **Five shipped playbooks remain** without a documented walkthrough.
  Cookbook completion continues on the same shape in the windows
  ahead.

The response-chain surface (ransomware containment beside data exfil
and identity compromise), the platform-hygiene surface (cloud
misconfiguration), the intelligence-ingestion surface (threat-intel
ingest), and the people-and-process surface (cyber-hygiene training)
are all now walkable from the cookbook. A practitioner picking up the
catalogue can adopt across all four dimensions without opening the
CACAO source.

## The community-facing shape

Every cookbook entry so far — twenty-two and counting — carries the
same property: bring your own SIEM, bring your own orchestrator,
bring your own paging system, bring your own IdP, bring your own
CSPM, bring your own LMS, bring your own ticketing surface. The
ransomware-containment walkthrough does not assume a specific EDR
product — it declares that the operator's endpoint surface must
accept a host-isolation command and that the recovery pivot must
land on the backup-recovery surface. The cloud-misconfiguration
walkthrough does not assume a specific CSPM — it declares that the
operator's configuration-monitoring surface must deliver a drift
finding annotated with the affected resource shape. The
threat-intel-ingest walkthrough does not assume a specific TIP — it
declares that the operator's feed layer must deliver STIX / TAXII /
MISP records and that the emitted OCSF finding must land on the
operator's event bus. The cyber-hygiene-training walkthrough does
not assume a specific LMS — it declares that the operator's
learning surface must accept a scheduled campaign and return a
per-cohort completion signal. Bring the surface; the CACAO source
declares the shape.

All four entries compile the same source through all three reference
targets. An operator who runs n8n reads the n8n column and picks up
the compiled example under `examples/n8n/`. An operator on Temporal
reads the Temporal column. An operator building agentic workflows
on LangGraph reads the LangGraph column. The framework does not
pick sides — three reference targets, one canonical source, and the
cookbook shows the same walkthrough compiled three ways.

## The shape the cookbook holds

Every cookbook entry — the four that land in this window and the
eighteen that preceded them — carries the same six-part structure:

1. **Source of truth** — where the CACAO playbook, its mappings
   overlay, and its regulatory anchors live in the repository.
2. **CACAO topology and lifecycle binding** — the shipped steps,
   the discipline each step operates, and the deterministic policy
   the playbook *means* independent of the compile target.
3. **Reference compile targets** — n8n, Temporal, LangGraph shown
   side by side, one canonical source compiled three ways.
4. **Regulatory anchors** — the NIS2 / DORA / CRA / OSCAL / OCSF
   reads that apply, distinct obligations shown as distinct anchors
   on the shared artifact.
5. **Operator customisation points** — the surfaces the operator
   brings (EDR, CSPM, TIP feed layer, LMS, ticketing surface, event
   bus, metric sink) and where the CACAO source declares the
   interface.
6. **Replay and audit story** — the audit-evident artifact the
   workflow emits, and the trail a peer reviewer or a regulator can
   walk from that artifact back to the shipped mapping.

This is the shape a Digital Commons wants for an operator-facing
catalogue: uniform, inspectable, portable across targets, honest
about what the framework declares versus what the operator brings.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any
operational artifact. The cookbook is documentation on how the
catalogue's existing content compiles into orchestrators an operator
already runs. All four walkthroughs preserve the framework-agnostic
posture: the project still does not ship its own runtime, its own
agent framework, or its own SOAR. The three reference compile
targets remain three of three — n8n, Temporal, and LangGraph — and
the operator picks the one that already lives in their stack. No
cloud lock-in is introduced on any of the four new entries.

Community-contributed compile targets (MindStudio, Make, Zapier,
StackAI, CrewAI) remain out of launch scope but on the same shape:
the CACAO source compiles, or it does not. The cookbook does not
privilege one target over another.

## Honest framing on what stays open

This wave adds four documented walkthroughs; five shipped playbooks
still do not carry one. Honest open beats:

- **Five shipped playbooks remain without a cookbook entry.**
  Cookbook completion continues on the same shape in the windows
  ahead until every shipped playbook is walkable.
- **Byte-parity goldens for these four walkthroughs are partial.**
  The n8n reference emitters for the shipped steps are wired
  today; the Temporal and LangGraph reference emitters and the
  per-target goldens for ransomware containment, cloud
  misconfiguration, threat-intel ingest, and cyber-hygiene
  training land in follow-on sibling work.
- **OSCAL profile references on the cloud-misconfiguration entry
  are declarative, not enforced.** The CM-7 / CM-7(2) anchors
  live on the mappings overlay; the profile-completeness check
  that verifies every anchor resolves against the shipped OSCAL
  catalogue is a follow-on lane.
- **The threat-intel-ingest OCSF emit is single-shape today.**
  The Threat Intelligence Finding schema binding is stable; the
  per-vendor STIX / MISP variance normalisation continues to
  harden window over window as more upstream feeds are exercised
  against it.
- **Cookbook entries do not replace inline documentation on each
  playbook.** The `README.md` inside each `content/playbooks/`
  directory remains the workflow-local status file. The cookbook
  is the operator-facing narrative; the playbook README is the
  contributor-facing state.

The accurate claim on this wave: four more cookbook gaps close in
one window — the ransomware-specific response chain, the
cloud-configuration-drift surface, the threat-intelligence
ingestion pipeline, and the staff cyber-hygiene training surface
all become walkable from the cookbook alone. Twenty-two of
twenty-seven shipped playbooks are now documented end-to-end.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #573](https://github.com/secops-ng/secops-ng-framework/pull/573),
  [PR #574](https://github.com/secops-ng/secops-ng-framework/pull/574),
  [PR #575](https://github.com/secops-ng/secops-ng-framework/pull/575),
  and [PR #576](https://github.com/secops-ng/secops-ng-framework/pull/576).
  All four merged to `main`. Cookbook lives under
  [`docs/cookbook/`](https://github.com/secops-ng/secops-ng-framework/tree/main/docs/cookbook).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-seven that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Four PRs close this window. Ransomware containment, cloud
misconfiguration, threat-intel ingest, and cyber-hygiene training
each land a full cookbook walkthrough — CACAO topology,
three-target compile view, regulatory anchors, operator
customisation points, replay-and-audit story. Twenty-two of
twenty-seven shipped playbooks now carry an operator-facing
walkthrough; the G-01 cookbook wave continues to close on this
shape.
