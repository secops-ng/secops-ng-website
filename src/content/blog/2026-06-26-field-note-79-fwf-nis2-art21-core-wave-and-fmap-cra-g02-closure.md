---
title: "Field note #79 — the NIS2 Article 21(2) basic-measures cluster crosses from SKELETON to CORE on four playbooks in one window (crypto, backup-recovery, MFA, cyber-hygiene), and F-MAP-CRA closes the G-02 grace window to zero"
description: "Seventy-ninth field note from the SecOps-NG Digital Commons: five PRs against the framework. Four CORE waves promote the NIS2 Article 21(2) basic-measures playbooks — crypto_posture_management, backup_recovery, mfa_secured_comms, cyber_hygiene_training — from SKELETON to CORE with per-step D3FEND v1.0.0 bindings, OCSF Compliance Finding (2003) emissions, and DORA cross-graph closure on Articles 9, 12, and 13. A fifth PR drives the F-MAP-CRA G-02 orphan-CI grace window to zero by authoring the four matching CRA inbound mappings against Annex I §1(d/e/h) and Article 13(6) before the seven-day grace lapses."
pubDate: 2026-06-26
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf", "f-map", "f-map-cra", "playbooks", "cacao", "nis2", "nis2-art21", "dora", "cra", "core", "d3fend", "ocsf", "compliance-finding", "crypto", "backup-recovery", "mfa", "cyber-hygiene", "g-01", "g-02", "digital-commons"]
---

The previous field note read four SKELETON playbooks opening the F-WF
lane on the NIS2 Article 21(2) basic-measures cluster — backup-recovery
on §(c), crypto-posture on §(h), MFA-secured-communications on §(j),
cyber-hygiene-training on §(g) — and a per-property minimum-coverage
floor on the F-MET G-04 axis. The honest open behind that row was that
SKELETON ships the framework-agnostic content layer but the operator-
side bindings — detection techniques, structured-finding emissions,
sibling-regulator graph closure — wait for CORE.

This note reads that CORE wave landing across all four playbooks in
one window, and the F-MAP-CRA pass that closes the orphan-CI grace
window the new playbooks opened on the CRA mapping graph. Each CORE
PR promotes one playbook from SKELETON to CORE with per-step D3FEND
v1.0.0 bindings on the dated-examination steps, an OCSF Compliance
Finding (2003) emission on the evidence side, and closure of the DORA
mapping graph in the same PR — no one-sided edges, no unannounced
inbound stubs. The F-MAP-CRA pass mirrors the convention the CRA
closure waves established: orphan-CI grace at zero before the seven-
day window lapses, not after.

## What landed in this window

Five PRs against the framework, all merged to `main`.

### F-WF-CRYPTO CORE — crypto_posture_management (PR #482)

[PR #482](https://github.com/secops-ng/secops-ng-framework/pull/482)
promotes `playbook.crypto_posture_management@v1` from SKELETON to CORE
and closes the DORA mapping graph in one PR. Sibling to the SKELETON
landing the prior wave shipped at PR #479.

Per-step D3FEND v1.0.0 bindings on the playbook overlay:

- `probe-cert-posture` → **D3-CA Certificate Analysis**. Per-endpoint
  dated examination of certificate validity and chain, days-to-expiry,
  negotiated TLS version and cipher, mandated extensions against the
  declared policy floor. Read-only posture-probe framing — no
  connection coercion, no downgrade.
- `check-key-rotation` → **D3-CA Certificate Analysis**. Adjacent
  dated examination of last-rotation timestamps against declared
  per-key-class cadence. D3FEND v1.0.0 carries no distinct
  cryptographic-key-analysis technique separate from Certificate
  Analysis; anchoring both halves of the cryptographic-posture
  surface on D3-CA names the discipline consistently.
- `inventory-crypto-policy`, `evidence-capture`, `notify-crypto-owner`
  are **deliberately not pinned**. Policy inventory is the upstream
  of the dated-examination discipline; evidence emission is an
  attestation-stream discipline; notification is a delivery
  discipline. Gap notes mirror the per-step pin-where-it-fits /
  document-the-gap precedents already on `infra_posture_management`
  (D3-CI), `iam_auditor` (D3-UAP gap), and `on_call_rotation`
  (handoff-brief gap).

An OCSF Compliance Finding (2003) emit-side binding lands as the
per-endpoint and per-key posture-deviation record the certificate-
analysis pass produces — expired or short-dated certs, sub-floor TLS,
sub-floor cipher, missing extensions, overdue rotations. Upstream of
any Sigma detection-binding a SIEM consumes; the project does not
pin stable Sigma rule ids on this overlay, the operator's posture-
management layer owns those fingerprints.

DORA mapping graph closure in the same PR — `content/mappings/dora/`
gains the matching inbound entry on the Article 9 cryptographic-
controls surface, and the outbound `dora:` block on the playbook
overlay closes the graph. No one-sided edge.

### F-WF-BCR CORE — backup_recovery (PR #483)

[PR #483](https://github.com/secops-ng/secops-ng-framework/pull/483)
promotes `playbook.backup_recovery@v1` from SKELETON to CORE and
closes DORA Article 12 in one PR. Mirrors the F-WF-CRYPTO CORE
pattern.

Detection bindings:

- `validate-backup-integrity` → **D3-FH File Hashing** — per-artifact
  integrity check (checksum / manifest, decryption-key availability,
  presence vs documented backup scope). Read-only by contract; a
  false outcome short-circuits the drill into the failure-attestation
  branch. The same technique anchors the backup-snapshot verification
  step on `ransomware_containment`, so the discipline is named
  consistently across both halves of the continuity surface.
- `execute-restore-drill` → **D3-SRA System Recovery Analysis** —
  non-destructive restore against the documented isolated drill
  target with RTO / RPO recorded against documented objectives.
  D3-SRA is the `d3fend_ref` already pinned on
  `control.restore_drill@v1` and on the inbound DORA Article 12 and
  Article 11 and NIS2 Article 21(2)(c) regulatory bindings under
  `content/mappings/d3fend/` — the playbook overlay now reads the
  same anchor on the step side.
- `detect-restore-drill-trigger`, `evidence-capture`,
  `notify-continuity-owner` deliberately not pinned. Gap notes mirror
  the `crypto_posture_management` / `infra_posture_management` /
  `iam_auditor` / `on_call_rotation` precedents.

DORA graph closure: `content/mappings/dora/article-12.yaml` —
`playbook_refs` now cites `playbook.backup_recovery@v1`; `metric_refs`
extends with `kpi.restore_drill_cadence@v1` and
`kri.backup_integrity_failures@v1` alongside the existing
`kpi.backup_integrity_pass_rate@v1`. The matching outbound `dora:`
entry on the playbook overlay closes the graph. Article 11 is not
pinned directly — mirrors the convention `crypto_posture_management`
established by pinning the specific Article 9 cryptographic-controls
entry rather than the broader Article 9 family.

### F-WF-MFA CORE — mfa_secured_comms (PR #484)

[PR #484](https://github.com/secops-ng/secops-ng-framework/pull/484)
promotes `playbook.mfa_secured_comms@v1` from SKELETON to CORE and
closes DORA Article 9(4)(b) in one PR.

Per-step D3FEND v1.0.0 bindings:

- `probe-mfa-coverage` → **D3-AM Account Monitoring** — per-principal
  dated examination of MFA enrolment state on the identity-provider
  surface and enforcement state on the access policy against the
  declared coverage policy. Read-only posture-probe framing — no
  enrolment, no factor reset, no policy mutation.
- `assess-continuous-auth` → **D3-AM Account Monitoring** — adjacent
  dated examination of session age and observed re-authentication
  events against the declared continuous-authentication policy. The
  same account-monitoring walk against the same authentication
  surface, paired with the enrolment / enforcement side.

The CORE binding anchors on Detect-tactic D3-AM rather than Harden-
tactic D3-MFA, on purpose. MFA itself is the runtime enforcement
discipline owned by the identity provider and exercised under
containment by the `identity_compromise` factor-reset step; this
playbook *measures whether the discipline is in force*, it does not
enforce it. Pinning D3-MFA on the probe steps would represent the
playbook as a Harden-tactic countermeasure it does not discharge —
the project's standing rule against runtime-countermeasure
misrepresentation. The D3-AM anchor names the dated-examination
discipline honestly.

`verify-oob-channels`, `evidence-capture`, `notify-authentication-
owner` deliberately not pinned. OOB-channel reachability is a
delivery-discipline health check with no D3FEND v1.0.0 anchor
distinct from the channel-delivery surface; evidence emission is an
attestation-stream discipline; notification is a delivery discipline.

OCSF Compliance Finding (2003) emit-side binding records the per-
principal and per-channel posture-deviation outcomes — missing-MFA,
coverage-below-policy, stale-session, continuous-auth policy gap,
unreachable-OOB. DORA Article 9(4)(b) closes on the same PR with the
matching inbound entry and outbound `dora:` block.

### F-WF-HYG CORE — cyber_hygiene_training (PR #485)

[PR #485](https://github.com/secops-ng/secops-ng-framework/pull/485)
promotes `playbook.cyber_hygiene_training@v1` from SKELETON to CORE
and closes DORA Article 13(6) in one PR. Follow-on to the SKELETON
landing PR #481.

OCSF binding on the emit side: **Compliance Finding (2003)** as the
per-staff and per-cohort training and simulation-outcome deviation
record the `track-completion` and `run-phishing-simulation` steps
produce — mandatory-awareness overdue, role-based overdue, completion-
rate below target, simulation click-rate above threshold, report-rate
below threshold, and the policy-gap branch (staff with no declared
training requirement in the operator's policy, reported separately
from completion gaps). Read-only posture-readiness framing — no
roster mutation, no completion-state override.

The D3FEND block is **intentionally empty with a documented gap**.
D3FEND v1.0.0 carries no defensive technique whose discipline matches
the producer surface this playbook operates. **D3-UA User Behavior
Analysis** is referenced from the `control_xref` files on
`control.training_attestation@v1` and `control.phishing_simulation@v1`,
but D3-UA names the *downstream analytic consumer* of the per-cycle
artifacts this playbook produces, not the producer. Pinning D3-UA on
any of the inventory / schedule / simulate / track / evidence /
notify steps would force the technique onto a producer surface it
does not discharge. The block stays empty rather than carrying a
forced tag, with the gap rationale documented in the header. Mirrors
the gap-note precedent on `mfa_secured_comms`, `crypto_posture_
management`, `backup_recovery`, `infra_posture_management`,
`iam_auditor`, and `on_call_rotation`.

DORA Article 13(6) closes on the same PR — the inbound entry under
`content/mappings/dora/` is added and the outbound `dora:` block on
the playbook overlay closes the graph.

### F-MAP-CRA G-02 grace closure for the four CORE playbooks (PR #486)

[PR #486](https://github.com/secops-ng/secops-ng-framework/pull/486)
closes the CRA orphan-CI grace window for the four playbooks the
CORE wave shipped, before the seven-day grace lapses. Four new
inbound CRA mapping yamls land under `content/mappings/cra/`,
anchored to the correct Annex I and Article 13 clauses, with matching
outbound `cra:` blocks on each playbook overlay.

| Playbook | Inbound CRA entry | CRA anchor |
|---|---|---|
| `backup_recovery` | `cra:annex-i-1-h-availability-restore-drill` | Annex I §1(h) availability |
| `crypto_posture_management` | `cra:annex-i-1-e-confidentiality-crypto-posture` | Annex I §1(e) confidentiality |
| `cyber_hygiene_training` | `cra:article-13-6-staff-cyber-hygiene-awareness` | Art. 13(6) third-party information |
| `mfa_secured_comms` | `cra:annex-i-1-d-access-control-mfa-coverage` | Annex I §1(d) access control |

Each new yaml mirrors the canonical CRA mapping shape —
`regime` / `entries` / `regulation` / `obligation` / `control_refs` /
`playbook_refs` / `metric_refs` / `evidence_stream_refs` / `notes`.
The orphan-CI lint reads `finalized=23 mapped=22 orphans=0 grace=0`
on the CRA graph after the PR; the eleven CRA orphan-tests under
`tests/content/test_cra_playbook_orphans.py` are green.

Scope discipline on the closure is deliberately narrow: one artifact
type, one standard — CRA only. The identical four-playbook GDPR
grace gap is queued as a separate follow-on card per task scope, so
each closure walks on its own review surface rather than packing
sibling standards into one PR.

## Why a four-playbook CORE wave reads honestly on this row

The CORE tier on this lane carries a specific definition the SKELETON
note left open. The honest framing:

- **What ships on CORE.** Per-step D3FEND v1.0.0 detection bindings
  on the dated-examination steps where a technique reads honestly
  (with a documented gap note on steps where no technique fits),
  an OCSF Compliance Finding (2003) emit-side binding for the
  posture-deviation record, and closure of the sibling-regulator
  graph (in this wave, DORA Articles 9, 12, and 13) in the same PR
  — no one-sided edges, no inbound stubs landed without the matching
  outbound block.
- **What stays on the SKELETON contract.** The CACAO v2 playbook
  artifact, the control references, the inbound NIS2 mapping, the
  GDPR Article 30 RoPA entry on the lawful-basis guard template —
  those were the SKELETON deliverables and they are unchanged on the
  CORE pass.
- **What waits for EXTEND.** Per-target compiler emissions for n8n,
  Temporal, and LangGraph with byte-parity goldens; the new KPI / KRI
  catalogue entries the SKELETON named but did not introduce (the
  `restore_drill_cadence` KPI, the `backup_integrity_failures` KRI,
  the cipher-suite-floor and rotation-cadence KPIs, the session-
  staleness and OOB-reachability KPIs, the per-cohort training-
  overdue KPIs), each on the F-MET lane's SKELETON / CORE / EXTEND
  cadence; and any further sibling-regulator closure beyond DORA
  on the cluster.

The four CORE PRs share the same shape — per-step D3FEND pins where
they read honestly with gap notes where they do not, an OCSF
Compliance Finding emit-side binding, and DORA graph closure in the
same PR — because the CORE authoring pattern the F-WF lane carries
reads mechanically rather than per-playbook. The pattern is the same
recipe the SKELETON wave established, applied one tier up.

## Why driving G-02 to zero on the CRA graph matters

The G-02 KRI text on the regulatory-mapping graph reads:

> the framework's mapping graph carries unmapped playbooks beyond the
> configured grace window.

A new SKELETON playbook lands on the framework-agnostic content side,
but the sibling-regulator graphs each carry their own orphan-CI
guards. The CRA closure cadence the project established on prior
waves is: a new playbook opens a grace window on the CRA graph, the
window is seven days, and the closure card lands the matching CRA
inbound mapping before the window lapses — orphan-CI grace at zero,
not deferred.

On this wave the four CORE playbooks opened that window when they
landed; PR #486 closes it before lapse, driving the CRA orphan-CI
lint to `mapped=22 orphans=0 grace=0`. The G-02 KRI on the CRA
graph reads at zero rather than on the grace ramp. The audit-readable
claim is: each new playbook on the framework-agnostic side closes on
each sibling-regulator graph within the project's published grace
window, not after.

## Honest framing on what stays open behind the row

The four-playbook CORE wave closes the SKELETON-to-CORE promotion on
the NIS2 Article 21(2) basic-measures cluster; it does not close the
cluster. The honest open beats:

- **EXTEND siblings for all four playbooks.** Per-target compiler
  emissions for n8n / Temporal / LangGraph with byte-parity goldens
  walk on the EXTEND lane on their own cadence. The CORE pass lands
  the content-layer detection bindings and the regulator-graph
  closure; the compiler-emission pass is a sibling card per playbook
  per target.
- **New catalogue entries the CORE pass referenced but did not
  introduce.** `restore_drill_cadence`, `backup_integrity_failures`,
  the cipher-suite-floor and rotation-cadence KPIs, the session-
  staleness and OOB-reachability KPIs, and the per-cohort training-
  overdue KPIs each ship through the F-MET lane on its own
  SKELETON / CORE / EXTEND cadence — the F-WF CORE pass cites the
  catalogue entries from the mapping side, the F-MET lane authors
  them as standalone catalogue work.
- **The identical four-playbook GDPR grace gap.** The CRA closure on
  this row is scoped CRA-only on purpose. The GDPR-side grace window
  on the same four playbooks is queued as a separate follow-on card
  so the closure walks on its own review surface.
- **Status on the four NIS2 articles stays `draft`.** Article 21(2)
  sub-clauses (c), (g), (h), and (j) sit on `draft` after this CORE
  wave, mirroring the convention the prior sibling articles on
  `draft` carry. Promotion to `ready` is a sibling decision once
  EXTEND-tier compiler emissions land alongside the CORE detection
  bindings and the catalogue entries the EXTEND lane introduces.

The accurate claim on this row is: the NIS2 Article 21(2) basic-
measures cluster crosses from SKELETON to CORE on four playbooks in
one window — crypto-posture-management, backup-recovery, MFA-secured-
communications, and cyber-hygiene-training — with per-step D3FEND
v1.0.0 bindings, OCSF Compliance Finding (2003) emit-side bindings,
and DORA graph closure on Articles 9, 12, and 13; the F-MAP-CRA pass
closes the orphan-CI grace window on the CRA graph for the same four
playbooks to zero before the seven-day grace lapses; and the EXTEND-
tier compiler emissions, new catalogue entries, and the matching
GDPR-side grace closure walk as the next passes behind the row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-WF-CRYPTO CORE lands at
  [PR #482](https://github.com/secops-ng/secops-ng-framework/pull/482);
  the F-WF-BCR CORE at
  [PR #483](https://github.com/secops-ng/secops-ng-framework/pull/483);
  the F-WF-MFA CORE at
  [PR #484](https://github.com/secops-ng/secops-ng-framework/pull/484);
  the F-WF-HYG CORE at
  [PR #485](https://github.com/secops-ng/secops-ng-framework/pull/485);
  and the F-MAP-CRA G-02 grace closure at
  [PR #486](https://github.com/secops-ng/secops-ng-framework/pull/486).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-eight that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two beats close this window. The NIS2 Article 21(2) basic-measures
cluster crosses from SKELETON to CORE on four playbooks in one pass —
crypto-posture-management, backup-recovery, MFA-secured-communications,
and cyber-hygiene-training — each with per-step D3FEND v1.0.0
bindings, an OCSF Compliance Finding (2003) emit-side binding, and
sibling DORA graph closure in the same PR. And the F-MAP-CRA pass
drives the G-02 orphan-CI grace window on the CRA graph to zero
across the four new playbooks before the seven-day grace lapses.
The EXTEND-tier compiler emissions, the new KPI / KRI catalogue
entries the CORE pass referenced, the matching GDPR-side grace
closure, and the path to promoting the four NIS2 sub-clauses from
`draft` to `ready` open as the next passes behind the row.
