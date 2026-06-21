---
title: "Field note #67 — F-G02 outbound cross-standard mappings overlay wave lands ten further SKELETONs, the catalogue now reads fourteen of fifteen playbooks carrying an outbound mappings.yaml, with onboarding_offboarding_tracker the single open row before the wave closes out"
description: "Sixty-seventh field note from the SecOps-NG Digital Commons: the F-G02 outbound cross-standard mappings overlay lane lands ten further SKELETON overlays across phishing_triage, data_exfil, cloud_misconfiguration, post_incident_review, codebase_vuln_management, iam_auditor, on_call_rotation, detection_engineering, infra_posture_management, and contractual_obligations_tracker; the catalogue now reads fourteen of fifteen workflow rows each carrying a mappings.yaml outbound overlay cross-linking OSCAL controls, D3FEND techniques, OCSF event classes, and the EU regulatory surfaces (NIS2 / DORA / CRA / GDPR); onboarding_offboarding_tracker is the single open row before the wave closes out and the lane flips from opening to complete on this SKELETON pass."
pubDate: 2026-06-21
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-g02", "mappings", "oscal", "d3fend", "ocsf", "nis2", "dora", "cra", "gdpr", "digital-commons", "catalogue", "audit-readable", "community-contributions"]
---

The last field note read the F-G02 outbound cross-standard
mappings overlay lane opening on the catalogue with SKELETON
overlays on the incident-family quartet of playbooks
(vuln_intake, identity_compromise, ransomware_containment,
incident_management). This note reads the wave behind that
opening: ten further SKELETON overlays merged to framework
`main` in this window, taking the catalogue from four of fifteen
playbooks to fourteen of fifteen each carrying a `mappings.yaml`
outbound overlay. One row remains open
(onboarding_offboarding_tracker) before the SKELETON pass on
the lane closes out.

Ten rows moved in this window, all on the F-G02 lane:

- **phishing_triage** SKELETON outbound mappings overlay
- **data_exfil** SKELETON outbound mappings overlay
- **cloud_misconfiguration** SKELETON outbound mappings overlay
- **post_incident_review** SKELETON outbound mappings overlay
- **codebase_vuln_management** SKELETON outbound mappings overlay
- **iam_auditor** SKELETON outbound mappings overlay
- **on_call_rotation** SKELETON outbound mappings overlay
- **detection_engineering** SKELETON outbound mappings overlay
- **infra_posture_management** SKELETON outbound mappings overlay
- **contractual_obligations_tracker** SKELETON outbound mappings overlay

Each row cross-links its playbook into OSCAL controls, MITRE
D3FEND defensive techniques, OCSF event classes consumed or
emitted, and the EU regulatory clauses (NIS2 Article 21, DORA
Articles 17–28, CRA essential requirements, GDPR Article 30 /
Article 33) the playbook helps operationalise. Inbound mappings
under `content/mappings/{nis2,dora,gdpr}/` close the graph in
both directions, so an operator reading from a regulatory
clause toward the playbooks that discharge it, and an operator
reading from a playbook toward the clauses it satisfies, each
arrive at the same typed surface.

## What the outbound overlay reads, one layer down

The catalogue's workflow rows already carry inbound shape — a
CACAO source, typed inputs, deterministic primitives, evidence
artifacts. The outbound `mappings.yaml` overlay reads the
opposite direction: for each playbook, a single typed file
naming the cross-standard surface the playbook discharges as a
structured, audit-readable lookup. The overlay does not change
the playbook's runtime behaviour. It gives an operator, an
auditor, or a regulator a single typed jump from a playbook id
to the controls, techniques, event classes, and regulatory
clauses it covers.

Each overlay carries five top-level surfaces:

- **oscal** — the NIST SP 800-53 Rev. 5 control identifiers
  the playbook exercises, named against the public OSCAL
  catalogue so a downstream System Security Plan or assessment
  can bind against the playbook by control id rather than by
  free text.
- **d3fend** — the MITRE D3FEND defensive techniques the
  playbook exercises, named against the D3FEND ontology so a
  defender reading a technique can resolve which playbooks
  discharge it.
- **ocsf** — the OCSF event classes the playbook reads or
  emits, so a SIEM, data lake, or downstream catalogue can bind
  against the playbook by event shape rather than by vendor
  field names.
- **nis2** — the NIS2 Article 21 / Article 23 obligations the
  playbook helps satisfy, with the article-level entry that
  appears in the inbound `content/mappings/nis2/` graph.
- **dora** — the DORA ICT-risk-management,
  incident-classification, and significant-incident reporting
  obligations the playbook discharges, with the article-level
  entry that appears in the inbound `content/mappings/dora/`
  graph. Where a playbook is sub-threshold for a given DORA
  article, the carve-out is asserted explicitly on the
  inbound side and the outbound array is intentionally empty,
  so the closure is auditable rather than silent.

Per-playbook narrative comments at the top of each overlay
name the carve-outs explicitly. A reader does not have to
trace the inbound graph to learn that `phishing_triage` is
sub-threshold for DORA Article 18 major-incident
classification on its own and hands off to
`playbook.identity_compromise@v1` (and, where exfil follows,
to `playbook.data_exfil@v1`) for the regulator-notification
chain — the overlay's narrative names it directly, and the
inbound `content/mappings/dora/article-19-and-28.yaml`
asserts the carve-out at the graph level.

## What landed on each of the ten rows

### Incident-adjacent and triage-front

The four overlays that ride directly behind the incident-family
quartet from the prior window each land their own outbound
surface:

- **phishing_triage** through
  [PR #386](https://github.com/secops-ng/secops-ng-framework/pull/386)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the intake,
  enrichment, suppression, intent-classification, and response
  branches exercise; with the explicit DORA Article 18
  carve-out (sub-threshold on its own, with handoffs to
  identity_compromise and data_exfil for the
  regulator-notification chain) named in the overlay's
  narrative and asserted on the inbound side.
- **data_exfil** through
  [PR #387](https://github.com/secops-ng/secops-ng-framework/pull/387)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the
  data-exfiltration playbook exercises across detection,
  containment, evidence preservation, and the GDPR Article 33
  personal-data-breach notification path.
- **cloud_misconfiguration** through
  [PR #388](https://github.com/secops-ng/secops-ng-framework/pull/388)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the
  cloud-misconfiguration remediation playbook exercises against
  NIS2 Article 21(2)(a) risk-management and the CRA
  essential-requirements surface for cloud-hosted product
  posture.
- **post_incident_review** through
  [PR #389](https://github.com/secops-ng/secops-ng-framework/pull/389)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the
  post-incident-review playbook exercises against NIS2 Article
  21(2)(f) lessons-learned obligations, DORA Article 19
  incident-classification handoffs, and the inbound
  graph for the review artifact.

### Vulnerability, identity, and operational-posture rows

The next three overlays cover the rows that surfaced through
the vulnerability, identity-audit, and on-call-rotation
playbooks:

- **codebase_vuln_management** through
  [PR #390](https://github.com/secops-ng/secops-ng-framework/pull/390)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the
  codebase-vulnerability-management playbook exercises against
  NIS2 Article 21(2)(e) vulnerability-handling obligations,
  CRA Article 14 product-side vulnerability handling, and the
  GDPR Article 33 path where a code-level vulnerability touches
  personal data.
- **iam_auditor** through
  [PR #391](https://github.com/secops-ng/secops-ng-framework/pull/391)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the iam-auditor
  capability-inventory playbook exercises against NIS2 Article
  21(2)(i) access-control obligations and the inbound
  capability-inventory graph.
- **on_call_rotation** through
  [PR #392](https://github.com/secops-ng/secops-ng-framework/pull/392)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the
  on-call-rotation playbook exercises against NIS2 Article
  21(2)(b) incident-handling obligations and the inbound
  operational-readiness graph.

### Detection, posture, and contractual rows

The final three SKELETON overlays in this window cover the
detection-engineering, infra-posture, and contractual-tracking
rows:

- **detection_engineering** through
  [PR #393](https://github.com/secops-ng/secops-ng-framework/pull/393)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the
  detection-engineering rule-lifecycle playbook exercises
  against NIS2 Article 21(2)(g) monitoring obligations and the
  inbound rule-lifecycle graph.
- **infra_posture_management** through
  [PR #394](https://github.com/secops-ng/secops-ng-framework/pull/394)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the
  infrastructure-posture-management playbook exercises against
  NIS2 Article 21(2)(a) risk-management obligations and the
  inbound posture-evidence graph.
- **contractual_obligations_tracker** through
  [PR #395](https://github.com/secops-ng/secops-ng-framework/pull/395)
  — outbound mappings.yaml overlay naming the OSCAL controls,
  D3FEND techniques, and OCSF event classes the
  contractual-obligations-tracker playbook exercises against
  NIS2 Article 21(2)(d) supply-chain obligations, DORA
  third-party ICT-risk-management surface, and the inbound
  contractual-evidence graph.

## Where the wave sits on the lane

F-G02 sits on the **catalogue lane** rather than a workflow
spine. Where the F-WF and F-SV rows ship workflow content (a
CACAO playbook, typed inputs, an evidence artifact, a
three-target CORE-FANOUT), the F-G02 row ships a typed overlay
on top of existing catalogue content — a cross-standard
mappings surface that reads the catalogue against OSCAL,
D3FEND, OCSF, and the EU regulatory surfaces as a structured,
audit-readable lookup.

At the close of this wave the catalogue reads **fourteen of
fifteen** workflow rows each carrying a `mappings.yaml`
outbound overlay. The remaining row is
`onboarding_offboarding_tracker`. On the prior wave the lane
read **four of fifteen**; on this wave it reads **fourteen of
fifteen**. The SKELETON pass on the lane closes out when the
final row lands.

## What this wave reads about the contribution funnel

Several of these overlays arrived as external community
contributions rather than maintainer-internal work. The
contribution funnel reads the
[good-first-issue lane](https://github.com/secops-ng/secops-ng-framework/labels/good%20first%20issue)
and the SKELETON-overlay shape — typed file, fixed top-level
keys, schema-validated, narrative comments naming carve-outs —
as a shape an external contributor can read and a maintainer
can review against the public bar in one pass. The
contribution funnel is reading.

## What this gives an operator

A regulated operator (or an auditor or regulator) reading the
catalogue for cross-standard alignment can today resolve the
following directly from the overlay:

- **From a playbook to its cross-standard surface.** Open the
  overlay at `content/playbooks/<slug>/mappings.yaml`. The
  five top-level keys (oscal / d3fend / ocsf / nis2 / dora)
  name the controls, techniques, event classes, and regulatory
  clauses the playbook discharges, each pinned to a public
  catalogue identifier rather than free text.
- **From a regulatory clause to the playbooks that
  discharge it.** Open the inbound graph at
  `content/mappings/{nis2,dora}/<clause>.yaml`. The inbound
  entry names every playbook that asserts the clause on its
  outbound overlay, and any explicit sub-threshold carve-outs
  read as named exclusions rather than silent omissions.
- **Across the catalogue at the structural level.** Fourteen of
  fifteen workflow rows now carry the same typed surface, so a
  downstream consumer (a SSP, a SIEM data model, an
  audit-readiness review) can iterate the catalogue and read
  cross-standard alignment as a structured property rather
  than as per-row narrative.

The overlay is a SKELETON on this pass. The EXTEND surface on
each row — per-mapping rationale, an evidence-artifact pointer
binding the control discharge to the playbook's emitted
artifact, and the residual-risk KRI catalogue binding each row
carries — follows on later passes for each row. Until then,
the overlay reads structure: the cross-standard links are
named and pinned, and a downstream consumer can bind against
them at the identifier level.

## What's open behind this wave

- **F-G02 SKELETON closeout — onboarding_offboarding_tracker.**
  The fifteenth row in the workflow catalogue. The wave closes
  out when this row carries its outbound mappings overlay and
  the lane reads fifteen of fifteen.
- **F-G02 EXTEND — rationale, evidence-pointer, KRI binding.**
  The SKELETON overlay structures the cross-links; the EXTEND
  pass on each row will name per-mapping rationale, point at
  the evidence artifact the playbook emits as discharge of the
  control, and bind any residual-risk KRI catalogue entries.
- **F-G02 fan-out to the sovereignty-lane rows.** F-SV-02
  (eIDAS 2.0 wallet) and F-SV-03 (DORA Article 19 report
  variant) are Shipped on their own lanes; each will carry an
  outbound mappings overlay on a subsequent pass once the
  workflow-catalogue SKELETON pass closes.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the ten SKELETON outbound mappings overlays in this wave:
  phishing_triage
  ([PR #386](https://github.com/secops-ng/secops-ng-framework/pull/386)),
  data_exfil
  ([PR #387](https://github.com/secops-ng/secops-ng-framework/pull/387)),
  cloud_misconfiguration
  ([PR #388](https://github.com/secops-ng/secops-ng-framework/pull/388)),
  post_incident_review
  ([PR #389](https://github.com/secops-ng/secops-ng-framework/pull/389)),
  codebase_vuln_management
  ([PR #390](https://github.com/secops-ng/secops-ng-framework/pull/390)),
  iam_auditor
  ([PR #391](https://github.com/secops-ng/secops-ng-framework/pull/391)),
  on_call_rotation
  ([PR #392](https://github.com/secops-ng/secops-ng-framework/pull/392)),
  detection_engineering
  ([PR #393](https://github.com/secops-ng/secops-ng-framework/pull/393)),
  infra_posture_management
  ([PR #394](https://github.com/secops-ng/secops-ng-framework/pull/394)),
  and contractual_obligations_tracker
  ([PR #395](https://github.com/secops-ng/secops-ng-framework/pull/395)),
  all merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-six that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community
  lane, the auto-generated roadmap.

Ten rows moved in this window, all on a single lane. The
F-G02 outbound cross-standard mappings overlay lane carried
phishing_triage, data_exfil, cloud_misconfiguration,
post_incident_review, codebase_vuln_management, iam_auditor,
on_call_rotation, detection_engineering,
infra_posture_management, and contractual_obligations_tracker
each into a typed `mappings.yaml` overlay cross-linking OSCAL,
D3FEND, OCSF, and the EU regulatory surfaces (NIS2, DORA, CRA,
GDPR). The catalogue moved from four of fifteen workflow rows
carrying an outbound overlay to fourteen of fifteen.
`onboarding_offboarding_tracker` is the single open row on the
SKELETON pass; once it lands, the lane reads fifteen of
fifteen and the SKELETON pass closes out, and the EXTEND
surface on each row — per-mapping rationale, evidence-pointer,
KRI binding — opens as the next pass.
