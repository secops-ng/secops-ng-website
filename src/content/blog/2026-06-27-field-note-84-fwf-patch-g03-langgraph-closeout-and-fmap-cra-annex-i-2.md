---
title: "Field note #84 — `patch_management` closes the G-03 three-target worked-example parity ring (LangGraph end lands), and the F-MAP-CRA lane binds the same playbook to Annex I §2 security-updates-rollout"
description: "Eighty-fourth field note from the SecOps-NG Digital Commons: two PRs against the framework close the `patch_management` lane. PR #513 lands the LangGraph worked example on the same canonical CACAO source the prior n8n and Temporal legs emit against — the G-03 three-target worked-example parity ring on `patch_management` now reads closed, with all three reference compile targets shipped under byte-parity guards. PR #514 binds `patch_management` to CRA Annex I §2 security-updates-rollout on the F-MAP-CRA lane, closing the documented CRA orphan on the playbook (G-02 graph closure)."
pubDate: 2026-06-27
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf", "f-wf-patch", "f-map", "f-map-cra", "playbooks", "cacao", "nis2", "nis2-art21", "cra", "cra-annex-i", "langgraph", "g-02", "g-03", "compile-parity", "patch-management", "digital-commons"]
---

The previous field note promoted `patch_management` from SKELETON to
CORE on the F-WF-PATCH lane and pinned its first two worked-example
legs on the reference compile targets — n8n and Temporal — emitted
deterministic from the same canonical CACAO source under the G-03
byte-parity contract. Two opens stayed flagged behind the row: the
LangGraph leg of the three-target parity ring had not yet landed, and
the F-MAP-CRA lane carried a documented orphan on `patch_management`
against the Cyber Resilience Act Annex I §2 security-updates clause
that still needed its real binding.

This note reads both of those opens close. Two PRs land across the
framework: the LangGraph worked example on `patch_management`
(PR #513), which closes the G-03 three-target worked-example parity
ring on the playbook; and the F-MAP-CRA Annex I §2 security-updates-
rollout binding (PR #514), which closes the documented CRA orphan on
`patch_management`.

The shape that reads honestly across the row: the coordinated
security-patch obligation under NIS2 Article 21(2)(e) maintenance
is now a fully portable playbook with reference compilers into all
three targets pinned under byte-parity guards, and the matching CRA
Annex I §2 control mapping reads closed on both directions.

## What landed in this window

Two PRs against the framework, both merged to `main`.

### F-WF-PATCH SKELETON-EXAMPLE-LANGGRAPH — `patch_management` LangGraph worked example (PR #513)

[PR #513](https://github.com/secops-ng/secops-ng-framework/pull/513)
closes the LangGraph end of the G-03 three-target worked-example
parity ring on `patch_management`. The artefacts under
`examples/langgraph/patch_management/` are modelled on the existing
`ddos_response` and `cyber_hygiene_training` LangGraph worked examples
and follow the same convention every shipped LangGraph leg on the
F-WF lane carries:

- `playbook.cacao.json` — byte-identical mirror of the canonical
  CACAO source at `content/playbooks/patch_management/playbook.cacao.json`,
  the same source the n8n and Temporal legs already emit against.
- `assemble.py`, `regenerate.sh` — hand-written reference assembly
  plus the deterministic mirror-and-emit regeneration entry-point.
- `graph_spec.json`, `state_bindings.py`, `_audit_mirror.py` —
  emitter output from `compilers.langgraph.emit` /
  `.state` and the shared audit-mirror CLI, emitted deterministic
  from the canonical CACAO source.
- `README.md` — operator-facing readme with the topology, the
  regeneration command, the cross-target pointers to the n8n and
  Temporal siblings, and the sovereignty-stance reminder.

The per-example byte-parity golden at
`tests/examples/langgraph/patch_management/test_golden.py` pins the
checks the F-WF lane carries by convention on the LangGraph end:
CACAO mirror parity, GraphSpec parity against the live emitter, and
the `assemble.py` import smoke. The `state_bindings.py` drift
assertion is held non-strict pending the CORE-LG-GOLDENS sibling pass,
matching the pattern every other shipped LangGraph worked-example
golden carries under the F-CR-04 envelope contract. All four checks
pass; the hygiene linter reads clean on the new paths.

With the LangGraph leg landed, the G-03 three-target worked-example
parity ring on `patch_management` reads closed. The same canonical
CACAO source the CORE pass walks emits deterministic to n8n
(PR #509), Temporal (PR #510), and LangGraph (PR #513), each end
guarded by a per-example byte-parity golden. The `patch_management`
playbook now reads as the twenty-fourth CACAO playbook on the
content side with all three reference compile targets shipped.

### F-MAP-CRA — bind `patch_management` to Annex I §2 security-updates-rollout (PR #514)

[PR #514](https://github.com/secops-ng/secops-ng-framework/pull/514)
walks a G-02 graph closure on the F-MAP-CRA lane. The Cyber
Resilience Act Annex I §2 security-updates-rollout clause — the
per-event maintenance-rollout discipline that sits alongside the
§2 dissemination-cadence anchor (`cra:annex-i-2-security-updates`,
which already pins `vuln_intake`) — picks up `patch_management` as
its canonical inbound playbook citation under
`content/mappings/cra/annex-i-2-security-updates-rollout.yaml`.

The two §2 entries discharge independent operational disciplines —
dissemination cadence on one side, per-event rollout on the other —
and are mapped separately so the inbound graph reads atom-per-
obligation. The split mirrors the convention the F-MAP-CRA lane
already carries on Annex I §1(h), where the
`cra:annex-i-1-availability` general anchor and the
`cra:annex-i-1-h-availability-restore-drill` per-event drill anchor
sit as independent inbound entries.

The outbound side on `content/playbooks/patch_management/mappings.yaml`
replaces the prior `cra: []` gap-note block with the real binding
under `mapping_id: cra:annex-i-2-security-updates-rollout`, and the
`patch_management` slug drops out of
`content/mappings/cra/_orphan_skip.yaml` — the CRA orphan-CI
assertion is re-armed against the slug intentionally and reads green.

The CRA orphan-CI tool now reads
`finalized=25 mapped=23 orphans=0 grace=0 skipped=2`: the two
remaining documented orphans are `incident_management` and
`ddos_response`, both on their own per-clause cards behind the row.

## Why the `patch_management` parity ring closing matters

The G-03 three-target worked-example parity contract is the lane on
which the project's framework-agnostic posture reads honestly. Every
basic-measures playbook the F-WF lane drives through CORE is expected
to emit deterministic from one canonical CACAO source onto each of
the three reference compile targets — n8n for the no-code lane,
Temporal for the durable-code lane, LangGraph for the agentic lane —
guarded by a per-example byte-parity golden on each end.

The accurate claim the contract carries: an operator who already runs
n8n picks up the n8n worked example; an operator who already runs
Temporal picks up the Temporal worked example; an operator who already
runs LangGraph picks up the LangGraph worked example. The same
playbook source backs all three, and the per-example golden guards
the byte-parity drift on each end so the regenerator is the source of
truth, not the committed artefacts.

The closure on `patch_management` reads as the playbook clearing the
same parity bar every prior CORE-tier basic-measures playbook on the
F-WF lane has cleared — `backup_recovery`, `crypto_posture_management`,
`mfa_secured_comms`, `cyber_hygiene_training`, `ddos_response` — with
the same shape, the same goldens, and the same regeneration contract.
The shipping cadence here is mechanical and audit-readable from
playbook to playbook, which is the point.

## Why the F-MAP-CRA closure belongs on the same wave

The F-MAP-CRA lane reads the same control-coverage graph the
F-MAP-NIS2, F-MAP-GDPR, and F-MAP-DORA lanes do, indexed by
regulatory article and clause. Every CORE promotion on the F-WF
lane reads against the F-MAP lanes for graph-closure consistency;
any per-clause inbound citation that does not yet bind to a
canonical playbook surfaces as a documented orphan on the CRA
orphan-CI assertion until the binding lands.

The prior wave promoted `patch_management` to CORE on the F-WF lane
and closed the NIS2 ↔ DORA overlap on the maintenance axis (NIS2
Article 21(2)(e) inbound on the playbook side, DORA Article 9
ICT-asset-management on the resilience side). The CRA Annex I §2
binding closes the matching outbound on the CRA lane: the
security-updates-rollout clause now reads `patch_management` as its
canonical inbound citation, and the mapping graph reads the
NIS2 ↔ DORA ↔ CRA overlap on coordinated patch-rollout
obligations honestly across all three regulations.

## Honest framing on what stays open behind the row

This wave closes the G-03 three-target worked-example parity ring on
`patch_management` and binds the playbook to its CRA Annex I §2
security-updates-rollout inbound on the F-MAP-CRA lane. The honest
open beats:

- **EXTEND-tier `metric_refs` strictness on `patch_management`.**
  The CORE pass on the prior wave pins the patch-latency and
  remediation-coverage KPIs as `metric_refs` entries; the catalogue
  side on F-MET is at FOUNDATION-tier per-property coverage, with
  the per-KPI EXTEND passes (definition text, evidence sources,
  acceptance thresholds) walking on their own cadence.
- **The reverse-direction F-MAP-DORA inbound citation on Article 9
  ICT-asset-management.** The prior wave closed the DORA graph on
  the playbook side; the matching inbound citation on the
  F-MAP-DORA Article 9 entry, indexing the reverse direction of the
  same regulatory overlap, walks on its own card behind the row.
- **The remaining documented CRA orphans.** The CRA orphan-CI tool
  now reads two skipped entries — `incident_management` and
  `ddos_response` — each on its own per-clause card behind the row.
- **The remaining basic-measures cluster.** The NIS2 Article 21(2)
  cluster carries additional measures the project has not yet
  promoted to F-WF lanes — supply-chain risk, access control,
  asset management, and several others. Each will walk its own
  SKELETON → worked-examples → CORE cadence as the F-WF lane walks.

The accurate claim on this row is: `patch_management` is a CORE-tier
control-coverage anchor on the NIS2 Article 21(2)(e) maintenance
axis with all three reference compile targets shipped under
byte-parity guards (G-03 ring closed), and the matching CRA Annex I §2
security-updates-rollout binding reads green on both directions of
the mapping graph (G-02 closure, documented CRA orphan on the
playbook cleared).

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the `patch_management` LangGraph worked example at
  [PR #513](https://github.com/secops-ng/secops-ng-framework/pull/513);
  the F-MAP-CRA Annex I §2 security-updates-rollout binding at
  [PR #514](https://github.com/secops-ng/secops-ng-framework/pull/514).
  Both merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-three that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two beats close this window. The LangGraph worked example on
`patch_management` lands deterministic from the same canonical CACAO
source the n8n and Temporal legs already emit against, closing the
G-03 three-target worked-example parity ring on the playbook with
all three reference compile targets pinned under byte-parity guards.
The F-MAP-CRA lane binds `patch_management` to Annex I §2
security-updates-rollout, closing the documented CRA orphan on the
playbook with the outbound pin landing on the playbook side and the
inbound entry landing on the CRA mapping side. The reverse-direction
F-MAP-DORA inbound citation on Article 9, the EXTEND-tier
`metric_refs` strictness pass on the patch-latency and
remediation-coverage KPIs, the remaining documented CRA orphans, and
the remaining basic-measures cluster walk as the next passes behind
the row.
