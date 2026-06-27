---
title: "Field note #83 — `patch_management` promotes to CORE and picks up its first two worked-example legs (n8n + Temporal), with the LangGraph end still open; F-MAP-CRA and F-MAP-DORA each walk a G-02 mapping-integrity closure"
description: "Eighty-third field note from the SecOps-NG Digital Commons: five PRs against the framework. PR #508 promotes the `patch_management` playbook from SKELETON to CORE — D3FEND bindings on each lifecycle step, `metric_refs` pins on the patch-latency and remediation-coverage KPIs, and the DORA graph closure under NIS2 Article 21(2)(e). PRs #509 and #510 land the first two worked-example legs on the same canonical CACAO source — n8n and Temporal — emitted deterministic under the G-03 byte-parity contract; the LangGraph end is still to land, so the three-target parity ring on `patch_management` is NOT yet closed (two of three legs). PR #511 binds `crypto_posture_management` to CRA Annex I §1(e) confidentiality on the F-MAP-CRA lane (G-02 graph closure on an external-contributor mapping). PR #512 repoints the F-MAP-DORA Article 11 availability-response control reference to `incident_handling_capability@v1` (G-02 KRI mapping integrity, red-CI fix)."
pubDate: 2026-06-27
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf", "f-wf-patch", "f-map", "f-map-cra", "f-map-dora", "playbooks", "cacao", "nis2", "nis2-art21", "cra", "cra-annex-i", "dora", "dora-art11", "d3fend", "g-01", "g-02", "g-03", "compile-parity", "n8n", "temporal", "patch-management", "digital-commons"]
---

The previous field note opened the `patch_management` SKELETON on the
F-WF-PATCH lane — canonical CACAO content for the coordinated
security-patch obligation under NIS2 Article 21(2)(e), with worked
examples and the CORE pass flagged as opens on the row. The same
note also flagged two F-MAP closures still pending on the
mapping-integrity side: a CRA Annex I §1(e) binding for
`crypto_posture_management`, and a DORA Article 11 control-reference
repoint that was reading red on CI.

This note reads three of those opens close. Five PRs land across the
framework: the `patch_management` playbook promotes from SKELETON to
CORE (PR #508); its first two worked-example legs land on the
reference compile targets — n8n (PR #509) and Temporal (PR #510) —
emitted deterministic from the same canonical CACAO source; the
F-MAP-CRA lane closes the `crypto_posture_management` ↔ Annex I §1(e)
binding (PR #511); and the F-MAP-DORA lane repoints the Article 11
availability-response control reference to the canonical
`incident_handling_capability@v1` playbook id (PR #512).

The honest open beat behind the row: the LangGraph leg of the G-03
three-target worked-example parity ring on `patch_management` is
still to land. Two of three legs are pinned. The ring is not yet
closed.

## What landed in this window

Five PRs against the framework, all merged to `main`.

### F-WF-PATCH CORE — `patch_management` D3FEND bindings + `metric_refs` + DORA graph closure (PR #508)

[PR #508](https://github.com/secops-ng/secops-ng-framework/pull/508)
promotes `patch_management` from SKELETON to CORE. The canonical
playbook at `content/playbooks/patch_management/playbook.cacao.json`
picks up its D3FEND-technique bindings on each operational step —
vulnerability intake, risk classification, change-management gating,
deployment and verification, and end-of-cycle close — so the
OSCAL/D3FEND mapping lane now reads the playbook as a
control-coverage anchor on the maintenance axis.

The CORE tier also pins the playbook's `metric_refs`: the
patch-latency KPI (mean time from advisory ingestion to deployment,
by severity tier) and the remediation-coverage KPI (proportion of
in-scope assets carrying the patch by the SLA window). Each entry
resolves into the F-MET catalogue under the convention the prior
CORE-tier basic-measures playbooks already carry; downstream tooling
that reads the per-playbook metric coverage now reads
`patch_management` alongside `backup_recovery`,
`crypto_posture_management`, `mfa_secured_comms`,
`cyber_hygiene_training`, and `ddos_response`.

On the F-G02 mapping-graph side, the inbound citation on NIS2
Article 21(2)(e) — security in network and information systems
acquisition, development and maintenance, including vulnerability
handling and disclosure — pins the cybersecurity-measures anchor.
The G-01 inbound citation pins the coordinated-disclosure and
vulnerability-handling contract. The DORA graph closure walks the
ICT-asset-management lane on the resilience side: maintenance and
patching obligations under DORA Article 9 resolve into the same
canonical playbook the NIS2 lane reads, with the mapping graph
reading the regulatory overlap honestly rather than duplicating the
control across regulation-specific silos.

The CORE tier also turns on the OCSF Compliance Finding emit
contract: every gate decision and every end-of-cycle summary emits
a deterministic Compliance Finding shape the downstream detection
lane reads, in line with the convention the prior CORE-tier
basic-measures playbooks carry.

### F-WF-PATCH SKELETON-EXAMPLE-N8N — `patch_management` n8n worked example (PR #509)

[PR #509](https://github.com/secops-ng/secops-ng-framework/pull/509)
opens the G-03 three-target parity lane on `patch_management` by
pinning its n8n end. The artefacts under
`examples/n8n/patch_management/` emit byte-deterministic from
`content/playbooks/patch_management/playbook.cacao.json` through
`python -m tools.compile --target n8n`:

- `playbook.cacao.json` — co-located mirror of the canonical CACAO
  source, byte-identical to the upstream artifact under
  `content/playbooks/`.
- `workflow.n8n.json` — the emitted n8n workflow JSON, not
  hand-written. One node per CACAO step, Set-node uplift carrying
  the `in_args` / `out_args` / `x_secops_ng.*` blocks as
  assignment rows, and `noOp` shape only on the `end` step under
  the post-uplift contract.
- `regenerate.sh` — the deterministic mirror-and-emit contract.
- `README.md` — operator-facing readme with the regeneration
  command and the sovereignty-stance reminder.

The eleven-check byte-parity golden at
`tests/examples/n8n/patch_management/test_golden.py` pins the
mirrored CACAO, the emitted workflow JSON, the per-step node
shape, the Set-node uplift contract, the `noOp` shape on the `end`
step, and emit determinism across runs. All pass; the hygiene
linter reads clean on the new paths.

### F-WF-PATCH SKELETON-EXAMPLE-TEMPORAL — `patch_management` Temporal worked example (PR #510)

[PR #510](https://github.com/secops-ng/secops-ng-framework/pull/510)
fans the same canonical CACAO source onto the Temporal target.
Layout under `examples/temporal/patch_management/` follows the
F-WF convention: mirrored CACAO source, the emitted
`workflow.temporal.py` workflow stub with activity names matching
the CACAO action ids in both directions, `regenerate.sh`, and an
operator-facing README.

The per-example golden at
`tests/examples/temporal/patch_management/test_golden.py` pins the
five happy-path checks the F-WF lane carries by convention:
artefacts committed, byte-parity vs the live emitter, byte-parity
vs the canonical CACAO mirror, emit determinism across runs, and
activity-name ↔ CACAO action-id parity in both directions. All
pass; the hygiene linter reads clean.

With the n8n and Temporal legs landed, the G-03 three-target
worked-example parity ring on `patch_management` reads two of
three legs pinned. The LangGraph end is still to land; the ring
is NOT yet closed.

### F-MAP-CRA — bind `crypto_posture_management` to Annex I §1(e) confidentiality (PR #511)

[PR #511](https://github.com/secops-ng/secops-ng-framework/pull/511)
walks the F-MAP-CRA lane's G-02 graph closure on an
external-contributor mapping. The Cyber Resilience Act Annex I §1(e)
clause — confidentiality of stored, transmitted or otherwise processed
data, including by encryption — picks up `crypto_posture_management`
as its canonical inbound playbook citation under
`content/mappings/cra/annex-i.yaml`.

The clause text resolves into the same playbook the F-MAP-NIS2 and
F-MAP-GDPR lanes already read on Article 21(2)(h) and Article 32(1)(a)
respectively. Downstream tooling that resolves CRA-clause coverage
now reads `crypto_posture_management` as a control-coverage anchor on
the confidentiality axis; the mapping graph reads the
NIS2 ↔ GDPR ↔ CRA overlap on encryption obligations honestly rather
than duplicating the control across regulation-specific silos.

The canonical playbook content is unchanged on this PR; the work is
on the F-MAP-CRA mapping side, closing one of the per-clause G-02
gaps that the prior F-MAP-CRA wave had flagged as open behind the row.

### F-MAP-DORA — repoint Article 11 availability-response `control_refs` to `incident_handling_capability@v1` (PR #512)

[PR #512](https://github.com/secops-ng/secops-ng-framework/pull/512)
closes a G-02 KRI mapping-integrity gap on the F-MAP-DORA lane. The
Article 11 availability-response entry under
`content/mappings/dora/article-11-response-and-recovery.yaml`
previously carried a `control_refs` pointer to a playbook id that
did not resolve into a canonical playbook under
`content/playbooks/`, which read red on the F-MAP graph-closure CI
check.

The repoint pins `incident_handling_capability@v1` as the
canonical control reference for the availability-response clause —
the same playbook the F-MAP-NIS2 lane already reads on Article
21(2)(b) incident handling, and the same playbook the F-WF-DOS
CORE pass closed the DORA Article 17 inbound citation against on
the prior wave. The graph closure now reads consistent across both
the NIS2 and DORA control-mapping lanes on the availability axis.

The CI check that previously read red on the unresolved reference
now reads green; the canonical playbook content is unchanged.

## Why the `patch_management` lifecycle reads cleanly on this row

The F-WF lane drives every basic-measures playbook through the same
lifecycle: SKELETON CACAO content, three worked examples on the
reference compile targets emitted deterministic under the G-03
byte-parity contract, then a CORE pass that pins D3FEND bindings,
closes the DORA graph, registers the `metric_refs` against the F-MET
catalogue, and turns on the OCSF Compliance Finding emit.

This wave reads two beats of that lifecycle on `patch_management` in
one window. The CORE promotion lands first: D3FEND bindings on the
maintenance axis, `metric_refs` on the patch-latency and
remediation-coverage KPIs, the DORA Article 9 inbound citation
closing the mapping graph against NIS2 Article 21(2)(e), and the
OCSF Compliance Finding emit contract turning on. The first two
worked-example legs land next: n8n and Temporal, emitted deterministic
from the same canonical CACAO source the CORE pass walks, each
with a per-example byte-parity golden guard.

The shape that reads honestly across the row is the same shape the
lifecycle is designed to read: mechanical, audit-readable, and
repeatable from playbook to playbook. The accurate claim is that
`patch_management` is now a CORE-tier control-coverage anchor on
the maintenance axis with two of three reference compile targets
pinned under byte-parity guards.

## Why two F-MAP closures belong on the same wave

The F-MAP-CRA and F-MAP-DORA lanes both read the same
control-coverage graph the F-MAP-NIS2 and F-MAP-GDPR lanes do,
indexed by regulatory article and clause. Both lanes carry a
G-02 graph-closure CI check that reads red whenever a `control_refs`
pointer fails to resolve into a canonical playbook under
`content/playbooks/`, or whenever a per-clause entry is missing an
inbound playbook citation the F-WF lane has already shipped a
playbook for.

PR #511 closes the first kind of gap: the CRA Annex I §1(e)
confidentiality clause was missing an inbound citation on
`crypto_posture_management`, which has already shipped through CORE
on the F-WF lane and already carries citations on the matching NIS2
and GDPR clauses. The mapping graph now reads the overlap
honestly.

PR #512 closes the second kind of gap: the DORA Article 11
availability-response entry was carrying a `control_refs` pointer
to a non-canonical playbook id, which read red on CI. The repoint
to `incident_handling_capability@v1` pins the canonical control
reference and the CI check now reads green.

Both closures are mechanical mapping-integrity work, not
content-side promotion. They land alongside the `patch_management`
CORE pass on this wave because the F-MAP lanes walk in lockstep
with the F-WF lane — every CORE promotion on the content side
reads against the mapping lanes for graph-closure consistency, and
gaps on the mapping side surface as opens on the row until the
inbound citations and control references walk green.

## Honest framing on what stays open behind the row

This wave promotes `patch_management` to CORE, lands its first
two worked-example legs (n8n and Temporal) under G-03 byte-parity,
and closes two G-02 mapping-integrity gaps on the F-MAP-CRA and
F-MAP-DORA lanes. The honest open beats:

- **The LangGraph leg of `patch_management` is still to land.**
  PRs #509 and #510 pin the n8n and Temporal ends. The G-03
  three-target worked-example parity ring on `patch_management`
  reads two of three legs pinned. The ring is NOT yet closed. The
  LangGraph end walks on its own card behind the row, under the
  same canonical CACAO source PR #509 and PR #510 emit against.
- **The F-WF-PATCH lane is the sixth basic-measures playbook
  driven through CORE on the F-WF lane, not the last.** The NIS2
  Article 21(2) cluster carries additional measures the project
  has not yet promoted to F-WF lanes — the security-of-network-and-
  information-systems clauses on supply-chain risk, access control,
  asset management, and several others. Each will walk its own
  SKELETON → worked-examples → CORE cadence as the F-WF lane
  walks; this wave does not close the basic-measures cluster.
- **EXTEND-tier `metric_refs` strictness.** The CORE pass on
  `patch_management` pins the patch-latency and remediation-
  coverage KPIs as `metric_refs` entries; the catalogue side on
  F-MET is at FOUNDATION-tier per-property coverage, with the
  per-KPI EXTEND passes (definition text, evidence sources,
  acceptance thresholds) still walking on their own cadence.
- **The F-MAP-CRA lane will pick up more inbound citations.**
  PR #511 closes one external-contributor mapping gap; the
  remaining Annex I clauses that overlap with F-WF basic-measures
  playbooks already shipped (incident handling, access control,
  resilience of processing) walk on their own per-clause cards
  behind the row.
- **The F-MAP-DORA lane will pick up the `patch_management` CORE
  inbound citation next.** PR #508 closes the DORA graph on the
  `patch_management` side; the matching inbound citation on the
  F-MAP-DORA Article 9 ICT-asset-management entry, indexing the
  reverse direction of the same regulatory overlap, walks on its
  own card behind the row.

The accurate claim on this row is: `patch_management` is a
CORE-tier control-coverage anchor on the NIS2 Article 21(2)(e)
maintenance axis with two of three reference compile targets pinned
under byte-parity guards (LangGraph still to land); two G-02
mapping-integrity gaps close on the F-MAP-CRA and F-MAP-DORA lanes;
and the remaining basic-measures cluster, the LangGraph leg of
`patch_management`, the EXTEND-tier `metric_refs` strictness pass,
and the reverse-direction F-MAP-DORA inbound citation walk as the
next passes behind the row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the `patch_management` CORE pass at
  [PR #508](https://github.com/secops-ng/secops-ng-framework/pull/508);
  the n8n and Temporal worked-example legs at
  [PR #509](https://github.com/secops-ng/secops-ng-framework/pull/509)
  and
  [PR #510](https://github.com/secops-ng/secops-ng-framework/pull/510);
  the F-MAP-CRA Annex I §1(e) binding at
  [PR #511](https://github.com/secops-ng/secops-ng-framework/pull/511);
  the F-MAP-DORA Article 11 control-reference repoint at
  [PR #512](https://github.com/secops-ng/secops-ng-framework/pull/512).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-two that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Three beats close this window. The `patch_management` playbook
promotes from SKELETON to CORE on the F-WF-PATCH lane, with D3FEND
bindings, `metric_refs` pins, DORA graph closure, and the OCSF
Compliance Finding emit contract turning on. The first two
worked-example legs on the reference compile targets — n8n and
Temporal — land deterministic from the same canonical CACAO
source under G-03 byte-parity guards. And two G-02 mapping-integrity
gaps close on the F-MAP-CRA and F-MAP-DORA lanes:
`crypto_posture_management` picks up its inbound citation on CRA
Annex I §1(e), and the DORA Article 11 availability-response entry
repoints to the canonical `incident_handling_capability@v1`
control reference. The LangGraph leg of `patch_management`, the
reverse-direction F-MAP-DORA inbound citation, the EXTEND-tier
`metric_refs` strictness pass, and the remaining basic-measures
cluster walk as the next passes behind the row.
