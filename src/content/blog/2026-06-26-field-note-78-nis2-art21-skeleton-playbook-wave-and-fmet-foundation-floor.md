---
title: "Field note #78 — a four-playbook NIS2 Article 21(2) basic-measures SKELETON wave opens (business-continuity, cryptography, authentication, cyber-hygiene), and the F-MET FOUNDATION axis gets a per-property minimum-coverage floor"
description: "Seventy-eighth field note from the SecOps-NG Digital Commons: five PRs against the framework. Four SKELETON CACAO playbooks close NIS2 Article 21(2) playbook_refs orphans on the basic-measures cluster — backup_recovery on §(c), crypto_posture_management on §(h), mfa_secured_comms on §(j), and cyber_hygiene_training on §(g) — opening the SKELETON tier of the F-WF lane. A fifth PR hardens the F-MET G-04 catalogue with a per-property minimum-coverage floor on the FOUNDATION axis, upgrading the union-coverage CI guard from greater-than-zero anywhere to a per-property minimum across all four properties."
pubDate: 2026-06-26
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf", "f-met", "playbooks", "cacao", "nis2", "nis2-art21", "skeleton", "backup-recovery", "crypto", "mfa", "cyber-hygiene", "g-01", "g-02", "g-04", "foundation", "foundation-property", "coverage-floor", "digital-commons"]
---

The previous field note read the F-MET G-04 executive-metrics
catalogue declaring a required, audited `foundation_property`
classification on every one of its forty-four shipped KPIs and KRIs,
backed by a union-coverage CI guard that mechanically asserts the
catalogue covers all four FOUNDATION properties at least once. The
honest open behind that row was that union coverage only fires on
zero — it cannot see skew. A property carried by a single entry sat
one re-tag away from tripping the G-04 KRI, and the guard could not
read the risk off the catalogue.

This note reads two beats closing on this wave. The F-WF playbook
lane opens its SKELETON tier on four NIS2 Article 21(2) basic-measures
sub-clauses in one window — business-continuity, cryptography,
authentication, and cyber-hygiene — closing four `playbook_refs: []`
orphans on the regulatory-mapping graph and walking the G-01
content-coverage and G-02 regulatory-mapping-coverage axes forward in
the same pass. And the F-MET G-04 axis the previous note left on a
union-coverage guard now reads on a per-property minimum-coverage
floor: every FOUNDATION property is required to be evidenced by at
least N catalogue entries, not just one, with the floor honestly set
to the maximum value the current catalogue can carry.

## What landed in this window

Five PRs against the framework, all merged to `main`.

### F-MET per-property minimum-coverage floor — EXTEND (PR #477)

[PR #477](https://github.com/secops-ng/secops-ng-framework/pull/477)
upgrades the FOUNDATION-property coverage guard from union to
per-property. The pre-change distribution across the forty-four
catalogue entries read:

- `operability` — 34 entries
- `auditability` — 19 entries
- `sovereignty` — 2 entries
- `determinism` — 1 entry

`determinism` at 1/44 was one re-tag away from tripping the G-04 KRI
on the catalogue, and the existing union-coverage assertion could
not detect skew of that kind — it only fires when a property reaches
zero. The PR lands a per-property floor test under `tests/content/`
asserting every FOUNDATION property is carried by at least N entries
(currently `N = 2`), evaluated against `content/metrics/*.yaml`
alongside the union-coverage assertion.

The floor is set at `N = 2`, not `N = 3`. The honest read on the
current catalogue is that `determinism` cannot reach 3 without
mislabelling an entry against `docs/FOUNDATION.md`. The byte-parity /
replay-shaped entries the catalogue legitimately carries are
`releases_without_sbom` (the SBOM supply-chain anchor) and
`timeline_completeness` (mandatory-milestone predicate on the
incident record shape — added as a `determinism` tag on this same
PR). A third honest `determinism` entry waits for new metric authoring
that genuinely evidences the property — a golden-replay-shape KPI for
compiled-artifact reproducibility, or a deterministic-step-budget KRI
for prompt-pinned LM steps — rather than re-tagging existing entries
into a fitted distribution.

Two honest backfills land alongside the floor test, both multi-valued
per `docs/FOUNDATION.md`:

- `timeline_completeness` adds `determinism` — the mandatory-milestone
  set (first observation, detection, triage, containment, eradication,
  recovery, closeout) is a deterministic predicate on the incident
  record shape, and the KPI measures conformance to the pinned shape.
- `notification_sla_compliance` adds `sovereignty` — the catalogue
  entry is recipient-neutral and the compile target binds the
  concrete delivery channel, mirroring the `backup_integrity_pass_rate`
  / `cloud_posture_coverage` convention the prior wave landed.

The post-change distribution reads `sovereignty: 3`, `determinism: 2`,
with both `operability` and `auditability` unchanged at 34 and 19. A
property dropping below the floor is now a CI failure rather than a
reviewer-side reminder, and the catalogue mechanically evidences the
floor rather than the threshold at zero.

### F-WF-BCR SKELETON — backup_recovery (PR #478)

[PR #478](https://github.com/secops-ng/secops-ng-framework/pull/478)
lands a CACAO v2 SKELETON playbook
`playbook.backup_recovery@v1` for the business-continuity /
backup-and-disaster-recovery surface required by **NIS2 Article
21(2)(c)**. The playbook closes the
`content/mappings/nis2/article-21-2-c.yaml` `playbook_refs: []`
orphan the prior NIS2 mapping wave had documented, walking G-01
content-coverage and G-02 regulatory-mapping-coverage forward on the
same row.

Five action steps: `detect-restore-drill-trigger` →
`validate-backup-integrity` → `execute-restore-drill` →
`evidence-capture` → `notify-continuity-owner`, with one if-condition
on integrity outcome. `control_refs` pin
`control.backup_attestation@v1` and `control.restore_drill@v1`, which
already ship in `content/controls/`.

The outbound mapping pins OSCAL `CP-9` (system backup) and `CP-10`
(system recovery and reconstitution), OCSF API Activity on the
evidence-capture side, and the NIS2 Article 21(2)(c) inbound link.
The DORA Article 12 outbound is **deliberately held** on this
SKELETON — the inbound entry at `content/mappings/dora/article-12.yaml`
currently sits on `playbook_refs: []` and a sibling CORE card lands
both directions in one PR so the inbound/outbound pair reads
consistently. The GDPR Article 30 RoPA stub scores the workflow as
*no personal data processed* on the same template the
`codebase_vuln_management` precedent established — the backup
artefacts themselves may carry personal data but the lawful basis
lives on the production-side workflows, and this playbook is the
Article 32(1)(d) periodic-testing discipline against those backups.

Step-level `metric_refs` pin `kpi.backup_integrity_pass_rate@v1`,
the catalogue entry that already ships. `kpi.restore_drill_cadence@v1`
and `kri.backup_integrity_failures@v1` are named on the inbound NIS2
mapping but not yet in the catalogue, and they are not introduced on
this SKELETON — sibling CORE / EXTEND cards land the catalogue
entries on their own cadence.

### F-WF-CRYPTO SKELETON — crypto_posture_management (PR #479)

[PR #479](https://github.com/secops-ng/secops-ng-framework/pull/479)
lands a CACAO v2 SKELETON playbook
`playbook.crypto_posture_management@v1` for the cryptography and
encryption-posture surface required by **NIS2 Article 21(2)(h)**,
closing the `content/mappings/nis2/article-21-2-h.yaml` orphan on
the same G-01 / G-02 contract.

Five action steps: `inventory-crypto-policy` → `probe-cert-posture`
→ `check-key-rotation` → `evidence-capture` → `notify-crypto-owner`,
with `control_refs` pinning `control.crypto_policy_inventory@v1`,
`control.cert_posture_scan@v1`, and `control.key_rotation_evidence@v1`.
The outbound mapping pins OSCAL `SC-13` (cryptographic protection)
and `SC-8` (transmission confidentiality and integrity), OCSF API
Activity, and the NIS2 Article 21(2)(h) inbound link. The DORA
outbound is held until the inbound entry is authored, mirroring the
BCR pattern.

Step-level `metric_refs` are not pinned on the SKELETON — the inbound
mapping already pins `kri.expiring_tls_certs@v1` and
`kri.overdue_key_rotations@v1` at the mapping layer, and step-level
re-pinning lands alongside the EXTEND metrics-emitter card once the
KRI catalogue entries ship under `content/metrics/`. The GDPR
Article 30 stub follows the *no personal data processed* template
the BCR playbook established — the playbook reads the operator's
posture rather than processing principal data.

A note on the CORE wave for this lane: the F-WF-CRYPTO CORE wave is
currently opening, not shipped. Detection bindings on the
expired-cert / weak-cipher / floor-violation upstream rule ids,
per-target compiler emissions for n8n / Temporal / LangGraph, and
the DORA cross-graph closure are the in-flight pieces — they walk
on the F-WF-CRYPTO CORE lane on their own cadence and the next field
notes pick them up as they land.

### F-WF-MFA SKELETON — mfa_secured_comms (PR #480)

[PR #480](https://github.com/secops-ng/secops-ng-framework/pull/480)
lands a CACAO v2 SKELETON playbook `playbook.mfa_secured_comms@v1`
for the multi-factor, continuous-authentication, and
secured-communications posture surface required by **NIS2 Article
21(2)(j)**.

Six action steps: `probe-mfa-coverage` → `assess-continuous-auth` →
`verify-oob-channels` → `evidence-capture` → `notify`, read-only and
side-effect-free against operator infrastructure. `control_refs` pin
`control.mfa_state_probe@v1` and `control.oob_channel_probe@v1`,
both already declared. The outbound mapping pins OSCAL `IA-2`
(identification and authentication) and `CP-8` (telecommunications
services), OCSF API Activity, and the NIS2 Article 21(2)(j) inbound
link. D3FEND is deliberately empty with a gap note, mirroring the
precedent the `crypto_posture_management` and `backup_recovery`
playbooks set on the same wave — the D3FEND technique landing on the
authentication-posture surface needs a Custodian-side anchor decision
on the next CORE pass rather than a SKELETON-side guess.

The GDPR Article 30 entry here is **different** in shape from the
other three on the wave: the workflow legitimately processes
personal data (principal identifiers, authentication-state metadata,
session metadata) under Article 6(1)(f) legitimate interests, with
Article 6(1)(c) available as a secondary basis under
NIS2-implementing national law. No outbound personal-data transfer
in the default configuration. The contract reads honestly against
the workflow rather than fitting the *no personal data processed*
template the posture-probe playbooks carry.

This SKELETON closes the last remaining `playbook_refs: []` orphan
across NIS2 Article 21(2)(a) through (j), walking the regulatory
mapping graph to floor on the basic-measures cluster.

### F-WF-HYG SKELETON — cyber_hygiene_training (PR #481)

[PR #481](https://github.com/secops-ng/secops-ng-framework/pull/481)
lands a CACAO v2 SKELETON playbook
`playbook.cyber_hygiene_training@v1` for the proactive cyber-hygiene
and staff security-training posture surface required by **NIS2
Article 21(2)(g)**. The playbook complements the existing reactive
`playbook.phishing_triage@v1` already wired on the same article —
the two now read side-by-side on the `article-21-2-g.yaml` mapping.

Seven action steps: `start` → `inventory-training-roster` →
`schedule-training-cycle` → `run-phishing-simulation` →
`track-completion` → `evidence-capture` → `notify-gaps` → `end`. The
playbook is read-only against operator HR / LMS surfaces; the
phishing-simulation step is a clearly-labelled exercise that does
not trigger incident response or mutate production mailflow controls.
`control_refs` pin `control.training_attestation@v1` and
`control.phishing_simulation@v1`, both already declared.

The outbound mapping pins OSCAL `AT-2` (literacy training and
awareness), `AT-3` (role-based training), and `AT-4` (training
records); OCSF API Activity on the evidence-capture side; and the
NIS2 Article 21(2)(g) inbound link, which now carries
`[playbook.phishing_triage@v1, playbook.cyber_hygiene_training@v1]`
in `playbook_refs`. The PR does not remove the existing
`phishing_triage` ref — the two playbooks evidence the article from
the reactive and proactive sides and the mapping reads both. Status
stays on `draft` to mirror the sibling Article 21(2)(c/d/e/f/h/j)
convention; promotion to `ready` is a sibling decision once
CORE / EXTEND siblings land detection bindings, compiler emissions,
and per-cohort training-overdue metrics.

The GDPR Article 30 entry covers the training-record and
phishing-simulation telemetry the workflow generates against the
operator's LMS, on the eight-section RoPA template the lawful-basis
guard enforces. Step-level `metric_refs` retain the existing
`kpi.training_completion_rate@v1` and `kpi.phishing_sim_click_rate@v1`
references on the inbound mapping.

## Why a four-playbook SKELETON wave reads honestly

The wave on this window opens the SKELETON tier of the F-WF playbook
lane on four NIS2 Article 21(2) basic-measures sub-clauses in one
pass. The honest framing on what *SKELETON* means on this lane:

- **What ships on SKELETON.** A CACAO v2 playbook artifact with
  named action steps, control references against the existing
  `content/controls/` graph, an outbound mappings overlay pinning
  OSCAL / OCSF / D3FEND anchors where they read honestly (and
  flagged as empty with a gap note where they do not), the inbound
  regulatory mapping wired through, and a GDPR Article 30 RoPA
  entry on the lawful-basis guard's eight-section template.
- **What waits for CORE.** Detection bindings on upstream rule
  ids, per-target compiler emissions for n8n / Temporal / LangGraph
  with byte-parity goldens, DORA cross-graph closure where DORA
  declares a sibling article, and step-level `metric_refs` re-pinning
  against new KPI / KRI catalogue entries the EXTEND lane authors.
- **What waits for EXTEND.** New catalogue entries the SKELETON
  named but did not introduce (the `restore_drill_cadence` KPI, the
  `backup_integrity_failures` KRI, the cipher-suite-floor and
  rotation-cadence KPIs, the session-staleness and OOB-reachability
  KPIs, the per-cohort training-overdue KPIs), each on the standard
  SKELETON / CORE / EXTEND cadence the F-MET lane carries.

The SKELETON tier is the framework-agnostic content layer the project
declares first; CORE wires it into operator-side rule ids and
compile-target emissions; EXTEND grows the catalogue around it.
Holding the line on SKELETON-only scope on a four-playbook wave keeps
each PR small, each review surface tractable, and each subsequent
CORE / EXTEND card scoped against a stable upstream artifact.

The four SKELETON playbooks share the same shape — five-to-seven
action steps, control references against the existing graph, outbound
overlay pinning OSCAL / OCSF / D3FEND, GDPR Article 30 on the lawful-
basis guard template, inbound NIS2 article wired through — because
the CACAO authoring pattern the F-WF lane carries reads
mechanically rather than per-playbook. A community contributor
reading this wave can pick up the pattern as a recipe and walk the
remaining DORA / CRA basic-measures clusters on the same
framework-agnostic shape.

## Why the per-property floor matters

The G-04 KRI text the F-MET lane carries:

> the catalogue lacks coverage for any of the four FOUNDATION
> properties (auditability, determinism, sovereignty, operability).

Pre-this-wave, the union-coverage CI guard the prior field note
documented read the KRI at zero — a property dropping out of the
catalogue entirely tripped the guard. The honest gap behind the row
was that the guard could not see skew: `determinism` at 1/44 was one
honest re-tag away from tripping the KRI, and a reviewer reading
the catalogue would not see the risk on the artifact's structured
side, only in a manual count.

After this wave, the catalogue reads on a per-property floor. A new
entry that fails to declare a property dropping `determinism` or
`sovereignty` below `N = 2` is a CI failure rather than a
reviewer-side reminder; the catalogue mechanically evidences the
floor rather than the threshold at zero; and the path to raise the
floor to `N = 3` is honest metric authoring rather than fitted
re-tagging of existing entries. The audit-readable claim is now: the
catalogue covers all four FOUNDATION properties at a minimum count
that mechanically enforces the G-04 KRI; the threshold is the maximum
value the current catalogue honestly carries; the path to raise the
threshold is new authoring, not relabelling.

## Honest framing on what stays open behind the row

The four-playbook SKELETON wave opens the F-WF lane on the NIS2
basic-measures cluster; it does not close it. The honest open beats:

- **CORE / EXTEND siblings for all four playbooks.** Detection
  bindings, compile-target emissions, DORA / CRA cross-graph
  closure, and new metric catalogue entries each walk on their own
  cadence. The F-WF-CRYPTO CORE wave is currently opening — the
  next field notes pick up the detection bindings and the DORA
  graph closure as they land, not on this row.
- **Status on the four NIS2 articles stays `draft`.** Article 21(2)
  sub-clauses (c), (g), (h), and (j) sit on `draft` after this wave,
  mirroring the convention the prior sibling articles already on
  `draft` carry. Promotion to `ready` is a sibling decision once
  the CORE / EXTEND tier matures across the cluster — the SKELETON
  artifact alone does not flip the gate.
- **The per-property floor is set at `N = 2`, not `N = 3`.** The
  honest path to `N = 3` is new metric authoring that legitimately
  evidences `determinism` or further evidences `sovereignty` — not
  re-tagging existing entries. Recommend queueing this as follow-on
  catalogue authoring on the F-MET lane rather than reading the
  floor as a ceiling.
- **The other governance lanes — F-MAP, F-CTL, F-ART — carry their
  own def-of-done properties** and walk on their own cadences. The
  cluster pattern this wave established (SKELETON playbook →
  inbound-orphan close → outbound overlay → CORE detection +
  compiler → EXTEND catalogue) is the recipe the other lanes adapt
  rather than a one-shot result.

The accurate claim on this row is: a four-playbook NIS2 Article 21(2)
basic-measures SKELETON wave opens the F-WF playbook lane on
backup-recovery (Article 21(2)(c)), cryptography-posture-management
(Article 21(2)(h)), MFA-secured-communications (Article 21(2)(j)),
and cyber-hygiene-training (Article 21(2)(g)); the F-WF-CRYPTO CORE
wave is currently opening on the detection-bindings and DORA-graph
side and is not announced as shipped on this row; and the F-MET
G-04 axis the previous field note left on a union-coverage CI guard
now reads on a per-property minimum-coverage floor at the maximum
threshold the current catalogue honestly carries.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-MET per-property minimum-coverage floor lands at
  [PR #477](https://github.com/secops-ng/secops-ng-framework/pull/477);
  the F-WF-BCR SKELETON at
  [PR #478](https://github.com/secops-ng/secops-ng-framework/pull/478);
  the F-WF-CRYPTO SKELETON at
  [PR #479](https://github.com/secops-ng/secops-ng-framework/pull/479);
  the F-WF-MFA SKELETON at
  [PR #480](https://github.com/secops-ng/secops-ng-framework/pull/480);
  and the F-WF-HYG SKELETON at
  [PR #481](https://github.com/secops-ng/secops-ng-framework/pull/481).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-seven that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two beats close this window. The F-WF playbook lane opens its
SKELETON tier on four NIS2 Article 21(2) basic-measures sub-clauses
in one pass — backup-recovery (c), cryptography-posture (h),
MFA-secured-communications (j), and cyber-hygiene-training (g) —
closing four `playbook_refs: []` orphans on the regulatory mapping
graph and walking G-01 and G-02 forward on the same row. And the
F-MET G-04 FOUNDATION-property axis the prior wave left on a
union-coverage guard now reads on a per-property minimum-coverage
floor with the threshold honestly set to `N = 2`. The F-WF-CRYPTO
CORE wave (detection bindings + DORA graph closure), the CORE / EXTEND
siblings for the other three SKELETON playbooks, and the path to
raising the FOUNDATION floor through new honest metric authoring
open as the next passes behind the row.
