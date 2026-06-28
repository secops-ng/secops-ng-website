---
title: "Field note #85 — `asset_management` ships the full ring (G-01 25th-cookbook content-coverage milestone, three-target parity, NIS2 Art. 21(2)(i) and DORA Art. 8 co-anchored)"
description: "Eighty-fifth field note from the SecOps-NG Digital Commons: the `asset_management` lane on F-WF-ASSET flips Shipped. The full ring is on `main` — canonical CACAO playbook, deterministic primitives, three reference compile targets under byte-parity guards (n8n, Temporal, LangGraph), NIS2 Article 21(2)(i) anchor with DORA Article 8 co-anchored inbound, and the operator cookbook walkthrough. This is the twenty-fifth canonical CACAO playbook on the content side and reads against the G-01 content-coverage milestone."
pubDate: 2026-06-28
author: "The SecOps-NG commons"
tags: ["shipping-update", "milestone", "f-wf", "f-wf-asset", "f-map", "f-map-nis2", "f-map-dora", "playbooks", "cacao", "nis2", "nis2-art21", "dora", "dora-art-8", "g-01", "g-02", "g-03", "compile-parity", "asset-management", "cookbook", "digital-commons"]
---

Six PRs across one F-WF lane close a content-coverage milestone the
project has been walking toward since the SKELETON wave on the basic-
measures cluster opened: `asset_management` flips Shipped. The full
ring is on `main` — canonical CACAO source, deterministic primitives,
all three reference compile targets under byte-parity guards, the
NIS2 Article 21(2)(i) inbound binding with DORA Article 8 co-anchored,
and the operator cookbook walkthrough that ties it together.

The same shape every prior CORE-tier basic-measures playbook on the
F-WF lane has cleared. This one carries a number behind it: with the
cookbook entry landed, the published catalogue reads as twenty-five
canonical CACAO playbooks shipped — the headline bar on the G-01
content-coverage goal.

## What landed across the ring

Six PRs against the framework, all merged to `main`.

### F-WF-ASSET SKELETON — canonical CACAO scaffold (PR #515)

[PR #515](https://github.com/secops-ng/secops-ng-framework/pull/515)
lands the canonical CACAO v2 source at
`content/playbooks/asset_management/playbook.cacao.json`
(`playbook.asset_management@v1`). Eight steps: one `start`, six
`action`, one `end`. The three core-bound action steps each declare
an `x_secops_ng.core_body` reference into the deterministic primitives
package; the ingest, delta-computation, and notification steps are
operator-bound runtime work pinned to documented interfaces, not to
any specific endpoint or vendor.

### F-WF-ASSET CORE-PRIM — deterministic primitives (PR #516)

[PR #516](https://github.com/secops-ng/secops-ng-framework/pull/516)
lands the workflow-local primitives package at
`content/playbooks/asset_management/primitives/`: `reconcile.py`
(`reconcile_inventory_snapshot` — reconcile-authoritative-inventory),
`classify.py` (`classify_inventory_delta` — classify-delta over the
closed delta taxonomy), and `artifact.py`
(`build_asset_inventory_delta_evidence_artifact` — capture-evidence
emitting the per-execution artifact against
`schemas/evidence/inventory.schema.json`, stream `inventory`).

The primitives are the deterministic policy the playbook *means*.
The CACAO source carries the topology; the primitives carry the
arithmetic. Every reference compile target binds to the same
primitives package; only the per-target adapter that marshals the
JSON-native payload differs.

### F-WF-ASSET CORE-FANOUT — n8n leg (PR #517) and Temporal + LangGraph legs with byte-parity goldens (PR #518)

[PR #517](https://github.com/secops-ng/secops-ng-framework/pull/517)
lands the n8n emitter under `compilers/n8n/asset_management/`, the
worked example at `examples/n8n/asset_management/`, and the per-
example byte-parity golden under
`tests/examples/n8n/asset_management/test_golden.py`.

[PR #518](https://github.com/secops-ng/secops-ng-framework/pull/518)
lands the matching Temporal and LangGraph legs. Each end carries the
same convention every F-WF lane already pins: a byte-identical mirror
of the canonical CACAO source at
`examples/{n8n,temporal,langgraph}/asset_management/playbook.cacao.json`,
a deterministic `regenerate.sh` mirror-and-emit entry-point, the
per-target emitter output, a hand-written reference assembly, and a
per-example byte-parity golden that pins CACAO mirror parity, emitter
parity, and the assembly import smoke.

With those two PRs on `main`, the G-03 three-target worked-example
parity ring on `asset_management` reads closed. The same canonical
CACAO source emits deterministic onto each of the three reference
compile targets — n8n for the no-code lane, Temporal for the
durable-code lane, LangGraph for the agentic lane — each end guarded
by a per-example byte-parity golden.

### F-MAP-DORA — bind `asset_management` to DORA Article 8 (PR #519)

[PR #519](https://github.com/secops-ng/secops-ng-framework/pull/519)
walks the G-02 graph closure on the F-MAP-DORA lane. DORA Article 8
(identification function — asset and configuration register,
exercised under the JC RTS on ICT risk management framework,
Commission Delegated Regulation (EU) 2024/1774) picks up
`asset_management` as its canonical inbound playbook citation at
`content/mappings/dora/article-8.yaml`
(`dora:art-8-identification`). The outbound side on
`content/playbooks/asset_management/mappings.yaml` carries the matching
pin, and the slug drops out of the DORA orphan-skip set on its own
re-armed CI assertion.

The NIS2 ↔ DORA overlap on the identification axis now reads
honestly on both directions of the mapping graph: NIS2 Article
21(2)(i) on the basic-measures side, DORA Article 8 on the resilience-
framework side, both binding to the same canonical playbook source.

### F-WF-ASSET EXTEND-DOCS — operator cookbook (PR #520)

[PR #520](https://github.com/secops-ng/secops-ng-framework/pull/520)
lands the cookbook entry at `docs/cookbook/asset_management.md`.
This is the operator walkthrough: source-of-truth tree, CACAO topology
and primitives binding, per-target adapter pointers, the regeneration
contract, the per-execution evidence-artifact shape, the operator
data plane (inventory sources, evidence sink, notification channel),
and the sovereignty-stance reminder.

With the cookbook entry on `main`, the last named acceptance checkbox
on F-WF-ASSET reads closed. The lane flips Shipped on the roadmap.

## What `asset_management` does

`playbook.asset_management@v1` is a scheduled reconciliation playbook.
On each documented reconciliation window it walks the same five-beat
shape: ingest the documented inventory-source set, reconcile the
per-source observations into the operator-authoritative snapshot for
the current window, compute the per-asset delta against the previous
documented snapshot, classify each delta against the closed delta
taxonomy, capture the dated asset-inventory-delta evidence record,
and notify the documented inventory owner.

The workflow operationalises a reconciliation posture against pre-bound
inventory sources. It does not author the operator's inventory-source
architecture itself — the inventory-source set is documented operator
intent, and the playbook reads against whatever is wired in.
Operators who already run a CMDB pin it as one of their sources;
operators who run declarative IaC state as their authoritative
register pin the state backend; operators who lean on cloud-provider
asset APIs or endpoint-management agent control planes pin those.
The playbook does not assume which.

## Sovereignty stance on this row

The same shape every prior CORE-tier basic-measures playbook on the
F-WF lane carries.

- **No hosted CMDB-correlation SaaS in the data plane.** The
  reconciliation step is deterministic primitives running against
  the operator's documented inventory-source set. There is no third-
  party correlation layer in the path, and none is suggested by the
  worked examples.
- **No default non-EU endpoint.** The notification step is bound to
  the operator's documented inventory-owner channel. There is no
  default channel binding to a non-EU endpoint in the worked
  examples; the operator wires their own.
- **Operator-supplied evidence sink.** The per-execution evidence
  artifact is shaped against
  `schemas/evidence/inventory.schema.json` and written to the
  operator's evidence sink. The persistence path is the operator's
  data plane.
- **Framework-agnostic by construction.** n8n, Temporal, and LangGraph
  are *three of three* reference compile targets. Operators run
  whichever target already lives in their stack.

The accurate claim the row carries: an operator who needs to meet
the NIS2 Article 21(2)(i) asset-management measure on their
documented reconciliation cadence picks up a portable playbook,
compiles it into the orchestrator they already run, wires it against
their documented inventory sources and evidence sink, and accepts
the per-execution evidence artifact as their dated reconciliation
record.

## Regulatory anchoring reads on both sides

`asset_management` lands as a two-anchor playbook on the F-MAP graph.

- **NIS2 Article 21(2)(i)** — the basic-measures inbound at
  `content/mappings/nis2/article-21-2-i.yaml`
  (`nis2:art-21-2-i`) pins `playbook.asset_management@v1` as its
  canonical inbound playbook citation. This is the asset-management
  measure under the NIS2 basic-measures cluster; the binding closes
  the NIS2-side G-02 graph hole on the slug.
- **DORA Article 8** — the resilience-framework inbound at
  `content/mappings/dora/article-8.yaml`
  (`dora:art-8-identification`) pins the same playbook as its
  canonical inbound citation under the JC RTS on ICT risk management
  framework. PR #519 lands this end of the closure.

The NIS2 ↔ DORA overlap on the identification axis reads as the same
operational discipline indexed by both regulations: the operator who
walks the NIS2 Article 21(2)(i) measure is the same operator who
discharges the DORA Article 8 identification function on the same
register. One canonical playbook, two co-anchored regulatory
citations, deterministic graph closure on both sides.

## Why the 25th-cookbook milestone reads against G-01

The G-01 goal on the project's published roadmap reads as content
coverage on the canonical CACAO catalogue: a published set of
portable playbooks broad enough that an operator walking a NIS2 /
DORA / CRA / GDPR basic-measures programme finds the relevant
playbook on the catalogue, not a documented gap-note.

With `asset_management` Shipped, the catalogue carries twenty-five
canonical CACAO playbooks on the content side. The shape of the
catalogue: the alert-triage and incident-management spine; the NIS2
Article 21 basic-measures family (backup-and-recovery, crypto posture,
MFA-secured comms, cyber-hygiene training, DDoS response, patch
management, asset management); the supply-chain and codebase axes;
the cloud and infra posture-management lanes; the contractual-
obligations and onboarding-offboarding trackers; and the operator-
facing lanes that complete the cluster (IAM auditor, IT-security
support agent, on-call rotation, phishing-triage, post-incident
review, identity-compromise, data-exfil, ransomware-containment,
executive-metrics, and the rest).

The G-01 headline reads cleared at twenty-five canonical playbooks.
The work behind the row continues: every promoted playbook still has
its own EXTEND-tier passes on the F-MAP graphs (the matching CRA and
GDPR inbound citations where they apply, the reverse-direction
overlaps that walk on their own cards), the F-MET catalogue passes on
the KPI / KRI side, and the F-OPS lanes on the operator-facing
documentation. G-01 is a content-coverage marker, not a completeness
claim on every basic-measures axis.

## Honest framing on what stays open behind the row

This wave flips `asset_management` Shipped and clears the G-01
content-coverage milestone at twenty-five canonical CACAO playbooks
on the catalogue. The honest open beats:

- **EXTEND-tier `metric_refs` strictness on `asset_management`.**
  The CORE pass pins the reconciliation-cadence and inventory-drift
  KPIs as `metric_refs` entries; the catalogue side on F-MET is at
  FOUNDATION-tier per-property coverage, with per-KPI EXTEND passes
  (definition text, evidence sources, acceptance thresholds) walking
  on their own cadence.
- **Reverse-direction F-MAP-NIS2 inbound citation drift checks.**
  The Article 21(2)(i) entry pins the playbook as its canonical
  inbound citation; the reverse-direction graph closure on the
  playbook's outbound `nis2:` block reads green at the slug-pair
  level. The full per-anchor drift contract walks on its own card
  behind the row.
- **CRA Annex I coverage on the identification axis.** The CRA lane
  does not currently carry an Article 21(2)(i)-equivalent
  identification clause that maps cleanly to `asset_management`; the
  per-clause coverage walk on the F-MAP-CRA lane continues on its
  own cadence.
- **The remaining basic-measures cluster.** The NIS2 Article 21(2)
  cluster carries additional measures the project has not yet
  promoted to F-WF lanes — supply-chain risk on its outbound graph,
  access control, several others. Each will walk its own SKELETON →
  CORE → EXTEND-DOCS cadence.

The accurate claim on this row is: `asset_management` is a Shipped
CORE-tier control-coverage anchor on the NIS2 Article 21(2)(i)
basic-measures axis with all three reference compile targets pinned
under byte-parity guards (G-03 ring closed), with the matching DORA
Article 8 binding reading green on the F-MAP-DORA inbound (G-02
closure on the identification axis), and the operator cookbook
walkthrough on the documentation side (EXTEND-DOCS). The catalogue
on the content side reads twenty-five canonical CACAO playbooks
shipped, against the G-01 content-coverage headline.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-WF-ASSET ring across
  [PR #515](https://github.com/secops-ng/secops-ng-framework/pull/515),
  [PR #516](https://github.com/secops-ng/secops-ng-framework/pull/516),
  [PR #517](https://github.com/secops-ng/secops-ng-framework/pull/517),
  [PR #518](https://github.com/secops-ng/secops-ng-framework/pull/518),
  [PR #519](https://github.com/secops-ng/secops-ng-framework/pull/519),
  and [PR #520](https://github.com/secops-ng/secops-ng-framework/pull/520).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-four that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

One ring closes this window. The `asset_management` lane on
F-WF-ASSET flips Shipped with the full ring on `main` — canonical
CACAO source, deterministic primitives, three reference compile
targets under byte-parity guards, the NIS2 Article 21(2)(i) and DORA
Article 8 co-anchored inbound citations, and the operator cookbook
walkthrough. The catalogue on the content side reads twenty-five
canonical CACAO playbooks shipped, against the G-01 content-coverage
headline. The EXTEND-tier `metric_refs` strictness passes on the
reconciliation-cadence and inventory-drift KPIs, the per-clause
F-MAP coverage walks on the remaining regulations, and the remaining
basic-measures cluster walk as the next passes behind the row.
