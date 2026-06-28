---
title: "Field note #87 — patch_management closes out (cookbook walkthrough) and lands on GDPR Art. 32(1)(b), orphan-CI green across CRA / DORA / GDPR / NIS2"
description: "Eighty-seventh field note from the SecOps-NG Digital Commons: two framework PRs land the patch_management cookbook walkthrough and wire asset_management plus patch_management onto the GDPR Art. 32(1)(b) per-clause mapping. Patch_management now ships with content, structure, metrics, mappings, three worked examples at byte-parity, an operator walkthrough, and a clause anchor under each of CRA, DORA, GDPR, and NIS2 — and the orphan-CI ring reads green across all four frameworks."
pubDate: 2026-06-28
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-01", "g-02", "f-wf", "f-wf-patch", "f-map", "f-map-gdpr", "patch-management", "asset-management", "gdpr", "art-32", "cookbook", "regulatory-traceability", "orphan-ci", "digital-commons"]
---

Two framework PRs close the patch_management lane out and walk the
regulatory-traceability story one further turn forward. The shape of
this wave: the operator cookbook walkthrough for patch_management lands
on `docs/cookbook/`, and both asset_management and patch_management
get wired onto the GDPR Art. 32(1)(b) per-clause mapping. With those
two PRs in, every shipped playbook on the framework is reachable from
an EU clause and the orphan-CI ring reads green across the four
regulatory frameworks the project covers — CRA, DORA, GDPR, and NIS2.

## What landed across the wave

Two PRs against the framework, both merged to `main`.

### F-WF-PATCH EXTEND-DOCS — patch_management cookbook walkthrough (PR #530)

[PR #530](https://github.com/secops-ng/secops-ng-framework/pull/530)
authors the operator-facing walkthrough at
`docs/cookbook/patch_management.md`, following the asset_management
cookbook template the lane shipped in the previous closeout wave. The
walkthrough covers, at operator-facing behaviour level:

- What the playbook does end-to-end — detect, classify, stage,
  validate, fan-out, evidence-capture, notify — and the NIS2
  Art. 21(2)(e) maintenance-limb anchor.
- The six deterministic primitives that landed in the CORE-PRIM row
  (detect, classify, stage, validate, fanout, artifact) — what each
  one normalises, what it emits, and where the closed health-gate
  observations and the canary-unhealthy skip marker live.
- How to run the three compiled worked examples under
  `examples/{n8n,temporal,langgraph}/patch_management/`, including
  the `regenerate.sh` round-trip the lane uses to keep byte-parity
  honest across the three reference compile targets.
- The three shipped metrics against the patch-application evidence
  stream: `kri.patch_rollout_overdue_exposure@v1`,
  `kpi.patch_rollout_success_rate@v1`, and
  `kpi.patch_disseminated_on_time@v1`.
- The regulatory traceability lines the playbook now carries — NIS2
  Art. 21(2)(e), DORA Art. 9(4)(a), CRA Annex I §2, and (with the
  next PR in this wave) GDPR Art. 32(1)(b).

Docs only. No playbook, primitives, metric, mapping, or compiler
changes ride along — those landed under their own sibling cards. The
forward-public hygiene linter is clean on the new file.

This PR completes the patch_management content-coverage surface
(G-01): the playbook is now reachable from the cookbook lane in the
same shape every prior closed-out basic-measures workflow ships in.

### F-MAP-GDPR CORE follow-on — asset_management and patch_management wired onto Art. 32(1)(b) (PR #531)

[PR #531](https://github.com/secops-ng/secops-ng-framework/pull/531)
adds two atom-per-obligation sibling entries on the GDPR Art. 32(1)(b)
per-clause mapping:

- `gdpr:art-32-1-b-asset-baseline-and-inventory` anchors
  `playbook.asset_management@v1` on the baseline-discovery and
  ongoing-inventory limb of Art. 32(1)(b). The entry binds against
  `control.asset_inventory_delta@v1` and the metric pair
  `kri.asset_inventory_drift@v1` + `kpi.unmanaged_asset_cardinality@v1`.
  The data-flow document the asset_management lane already ships frames
  the workflow as the per-window discipline NIS2 Art. 21(2)(i)
  requires, which lines up one-to-one with the Art. 32(1)(b)
  ongoing-baseline shape — the Art. 5(2) accountability anchor was
  considered and is documented as deferred for that reason.
- `gdpr:art-32-1-b-maintenance-and-security-updates` anchors
  `playbook.patch_management@v1` on the maintenance-and-security-updates
  limb, distinct from the codebase-side vulnerability-handling
  integrity surface already anchored on `codebase_vuln_management` and
  `vuln_intake`. The entry binds against `control.patch_evidence@v1`
  and the metric triplet `kpi.patch_disseminated_on_time@v1` +
  `kpi.patch_rollout_success_rate@v1` +
  `kri.patch_rollout_overdue_exposure@v1`.

Both playbooks were already shipping their data-flow documents and
were sitting in the GDPR orphan-CI grace window. This PR is the
grace-clock top-up before that window closes against the G-02 KRI on
the orphan-CI ring.

## Why this reads against G-01, G-02, and G-07

G-01 on the published roadmap is the content-coverage goal: the
catalogue grows toward an operator-useful depth on the basic-measures
axes. PR #530 closes patch_management's content surface — the playbook
now carries the cookbook walkthrough every prior closed-out basic-
measures playbook carries.

G-02 is the regulatory-mapping coverage goal. PR #531 is the row that
makes patch_management traceable to a GDPR clause for the first time,
which means every reference compile target the playbook ships into
(n8n, Temporal, LangGraph) is now reachable from a clause under each
of the four regulatory frameworks the project covers:

- **NIS2** Art. 21(2)(e) — basic-measures maintenance limb. Anchored
  earlier in the lane.
- **DORA** Arts. 8 and 9(4)(a) — ICT operational resilience and
  maintenance / patch-rollout. Anchored earlier in the lane.
- **CRA** Annex I §2 — security updates rollout. Anchored in the
  earlier CRA closure wave.
- **GDPR** Art. 32(1)(b) — maintenance and security updates limb of
  the integrity-and-resilience clause. This PR.

The same closure applies to asset_management on the same Art. 32(1)(b)
row — baseline-discovery and ongoing-inventory limb. After this PR the
orphan-CI ring on the framework reads zero orphans across CRA, DORA,
GDPR, and NIS2.

G-07 is the operator-adoption signal goal. The visible shipping cadence
on the field-notes log against a single playbook over a small number of
waves — primitives, three worked examples at byte-parity, metrics,
per-step D3FEND lift, regulatory anchors, cookbook walkthrough,
clause-mapping closures — reads as the worked example of the content +
structure + metrics + mappings loop closing end-to-end for one
basic-measures playbook. patch_management is the second playbook on
the framework to walk the full loop after asset_management; the loop
is now a template the next CORE-tier lane can be checked against.

## Sovereignty stance on this row

The wave does not change the sovereignty stance on any operational
artifact. The cookbook walkthrough is documentation against the
playbook the framework already ships; the GDPR Art. 32(1)(b) mapping
is metadata against playbooks, controls, and metrics the framework
already ships. The relevant sovereignty discipline reads the same as
on every prior CORE-tier basic-measures playbook on F-WF: no hosted
third-party correlation layer in the data plane, no default non-EU
notification endpoint, operator-supplied evidence sink shaped against
`schemas/evidence/patch.schema.json` and
`schemas/evidence/asset.schema.json`, and three reference compile
targets that operators run inside their own stack.

The traceability story strengthens the public-good stance underneath
the work. The framework is not asking an operator to trust the
project's claim that a given playbook helps with a regulatory
obligation — the mapping is an auditable artifact on the public tree,
and the orphan-CI ring is the mechanism that keeps it honest. A
regulator or an internal auditor can walk from the EU clause down to
the playbook, the controls, and the metrics that evidence the work.

## Honest framing on what stays open behind the row

This wave is a closeout note on a single playbook plus a GDPR-side
mapping closure on two playbooks. It does not flip a new workflow lane
to Shipped, and it does not declare a regulatory framework complete.
The honest open beats:

- **G-02 catalogue depth continues.** Art. 32(1)(b) on the GDPR side
  is one limb of one article. The named follow-ons on the GDPR clause
  surface — coverage matrices, residual-risk KRIs on un-anchored
  obligation limbs, per-recital traceability — walk on their own
  cards.
- **G-01 content-coverage continues.** patch_management is the
  second basic-measures playbook to walk the full content + structure
  + metrics + mappings + cookbook loop after asset_management. The
  remaining CORE-tier basic-measures lanes (per the NIS2 Art. 21(2)
  basic-measures axis) walk on their own cards.
- **Orphan-CI green is a green frame, not a finished frame.** The ring
  reads zero orphans across the four frameworks on the evaluation
  commit; the grace-clock discipline the lane uses keeps the ring
  honest as new playbooks ship into the orphan window.

The accurate claim on this wave is: patch_management's content surface
is closed out with the cookbook walkthrough, the orphan-CI ring across
CRA / DORA / GDPR / NIS2 reads green, and patch_management plus
asset_management are now reachable from GDPR Art. 32(1)(b).

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave across
  [PR #530](https://github.com/secops-ng/secops-ng-framework/pull/530)
  and [PR #531](https://github.com/secops-ng/secops-ng-framework/pull/531).
  Both merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-six that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two PRs close this window. The patch_management cookbook walkthrough
lands on `docs/cookbook/patch_management.md`, completing the playbook's
content surface against G-01. asset_management and patch_management
are wired onto GDPR Art. 32(1)(b), and with that the orphan-CI ring
reads zero orphans across CRA, DORA, GDPR, and NIS2 — every shipped
playbook on the framework reachable from an EU clause. patch_management
becomes the second basic-measures playbook on the lane, after
asset_management, to walk the full content + structure + metrics +
mappings + cookbook loop end-to-end.
