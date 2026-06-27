---
title: "Field note #82 — `cyber_hygiene_training` closes the G-03 three-target worked-example ring, `ddos_response` lands end-to-end (playbook → 3 worked examples → CORE), `patch_management` opens; GDPR Article 32 picks up two more inbound citations"
description: "Eighty-second field note from the SecOps-NG Digital Commons: eleven PRs against the framework. PRs #498–#500 close the G-03 three-target worked-example parity ring on `cyber_hygiene_training`, finishing worked-example parity across all four NIS2 Article 21(2) basic-measures playbooks the project has driven through CORE so far. PRs #501–#505 land `ddos_response` end-to-end in one wave: the SKELETON CACAO playbook, three worked examples (Temporal, n8n, LangGraph) with byte-parity guards, and the CORE pass that pins D3FEND bindings and closes the DORA graph. PR #497 lands the F-MAP-GDPR CORE-3 per-clause mapping on Article 32(1)(a) encryption / pseudonymisation; PR #506 registers `ddos_response` and `cyber_hygiene_training` as inbound citations under the same Article 32 lane. PR #507 opens the next basic-measures playbook on the F-WF-PATCH lane: `patch_management` SKELETON, the NIS2 Article 21(2)(e) maintenance anchor."
pubDate: 2026-06-27
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf", "f-wf-hyg", "f-wf-dos", "f-wf-patch", "f-map-gdpr", "playbooks", "cacao", "nis2", "nis2-art21", "gdpr", "gdpr-art32", "dora", "d3fend", "g-01", "g-02", "g-03", "compile-parity", "n8n", "temporal", "langgraph", "worked-example", "cyber-hygiene", "ddos-response", "patch-management", "digital-commons"]
---

The previous field note closed the G-03 three-target worked-example
parity ring on `crypto_posture_management` and `mfa_secured_comms`,
and noted the open behind the row: the fourth NIS2 Article 21(2)
basic-measures playbook, `cyber_hygiene_training`, still read as
CORE-without-examples; a dedicated availability / DDoS response
playbook had not yet been promoted on the F-WF lane; and the
coordinated patch-management obligation under Article 21(2)(e) was
still untouched by a playbook of its own.

This note reads three of those opens close in one window. Eleven PRs
land across the framework: the `cyber_hygiene_training` worked-example
ring closes (PRs #498–#500); `ddos_response` lands end-to-end as a new
F-WF lane — SKELETON playbook, three worked examples on the three
reference compile targets, and a CORE pass that pins D3FEND bindings
and closes the DORA graph (PRs #501–#505); the GDPR mapping lane picks
up the Article 32(1)(a) per-clause CORE entry and registers the two
new playbooks as inbound citations under the same article (PRs #497,
#506); and the next basic-measures playbook opens its SKELETON pass on
the F-WF-PATCH lane (PR #507).

## What landed in this window

Eleven PRs against the framework, all merged to `main`.

### F-MAP-GDPR CORE-3 — Article 32(1)(a) encryption / pseudonymisation per-clause mapping (PR #497)

[PR #497](https://github.com/secops-ng/secops-ng-framework/pull/497)
walks the F-MAP-GDPR lane's CORE-3 pass on Article 32(1)(a) — the
encryption-and-pseudonymisation obligation. The per-clause entry
under `content/mappings/gdpr/article-32-security-of-processing.yaml`
now reads the clause text, the inbound citation set, and the
graph-closure properties the F-G02 lane carries by convention, in
line with the CORE-1 and CORE-2 passes the previous waves landed on
Article 32(1)(b) and Article 32(1)(c).

The canonical playbook content is unchanged on this PR; the work is
the per-clause mapping entry and its graph-closure properties.
Downstream tooling that resolves a per-playbook coverage view by
GDPR clause now reads Article 32(1)(a) as a CORE-tier anchor
alongside the existing Article 32(1)(b) and (1)(c) entries.

### F-WF-HYG SKELETON-EXAMPLE — `cyber_hygiene_training` Temporal worked example (PR #498)

[PR #498](https://github.com/secops-ng/secops-ng-framework/pull/498)
opens the G-03 three-target parity lane on the fourth NIS2 Article
21(2) basic-measures playbook, `cyber_hygiene_training`, by pinning
its Temporal end.

The artefacts under `examples/temporal/cyber_hygiene_training/` emit
byte-deterministic from
`content/playbooks/cyber_hygiene_training/playbook.cacao.json`
through `python -m tools.compile --target temporal`:

- `playbook.cacao.json` — co-located mirror of the canonical CACAO
  source, byte-identical to the upstream artifact under
  `content/playbooks/`.
- `workflow.temporal.py` — the emitted Temporal workflow stub, not
  hand-written. Activity names match the CACAO action ids in both
  directions.
- `regenerate.sh` — the deterministic mirror-and-emit contract.
- `README.md` — operator-facing readme with the regeneration command
  and the sovereignty-stance reminder.

The per-example golden at
`tests/examples/temporal/cyber_hygiene_training/test_golden.py` pins
the same five happy-path checks the F-WF lane carries by convention:
artefacts committed, byte-parity vs the live emitter, byte-parity vs
the canonical CACAO mirror, emit determinism across runs, and
activity-name ↔ CACAO action-id parity in both directions. All pass;
the hygiene linter reads clean on the new paths.

### F-WF-HYG SKELETON-EXAMPLE-N8N — `cyber_hygiene_training` n8n worked example (PR #499)

[PR #499](https://github.com/secops-ng/secops-ng-framework/pull/499)
fans the same canonical CACAO source onto the n8n target. Layout
under `examples/n8n/cyber_hygiene_training/` mirrors the existing
n8n worked examples on the other three basic-measures playbooks —
one node per CACAO step, Set-node uplift carrying the `in_args` /
`out_args` / `x_secops_ng.*` blocks as assignment rows, and `noOp`
shape only on the `end` step under the post-uplift contract. The
eleven-check byte-parity golden at
`tests/examples/n8n/cyber_hygiene_training/test_golden.py` passes
in full; the hygiene linter reads clean on the new paths.

### F-WF-HYG SKELETON-EXAMPLE-LG — `cyber_hygiene_training` LangGraph worked example (PR #500)

[PR #500](https://github.com/secops-ng/secops-ng-framework/pull/500)
closes the G-03 three-target parity ring on `cyber_hygiene_training`
by landing the LangGraph end. All four NIS2 Article 21(2)
basic-measures playbooks the project has driven through CORE so far
— `backup_recovery`, `mfa_secured_comms`,
`crypto_posture_management`, and now `cyber_hygiene_training` — now
carry worked examples on all three reference compile targets,
emitted deterministic from the same canonical CACAO source on each.

Layout under `examples/langgraph/cyber_hygiene_training/` mirrors
the existing LangGraph worked examples: byte-mirrored CACAO source,
the emitted `graph_spec.json` and `state_bindings.py`, the
`_audit_mirror.py` dependency-free sibling, the reference
`assemble.py`, the `regenerate.sh` mirror-and-emit contract, and
an operator-facing README. The byte-parity golden at
`tests/examples/langgraph/cyber_hygiene_training/test_golden.py`
pins the mirrored CACAO, the emitted GraphSpec, the
`state_bindings.py` byte-parity (xfail-strict-false, matching the
LangGraph suite convention), and the dependency-free import surface.
Pass on the new paths; the hygiene linter reads clean.

### F-WF-DOS SKELETON — `ddos_response` CACAO playbook (PR #501)

[PR #501](https://github.com/secops-ng/secops-ng-framework/pull/501)
opens a new F-WF lane on the canonical content side. The
`ddos_response` CACAO playbook addresses the
availability-incident response obligation under NIS2 Article
21(2)(b) — incident handling — with a focus on volumetric and
application-layer denial-of-service events that degrade the
availability of essential services.

The canonical source at
`content/playbooks/ddos_response/playbook.cacao.json` carries the
step graph the SKELETON tier requires: an entry condition that
reads the availability-incident signal, detection-and-classification
steps that distinguish volumetric from application-layer attack
shapes, traffic-engineering and upstream-scrubbing branches, an
operator-notification step pinned to the G-01 24→25-hour reporting
window for significant incidents, a containment-and-recovery loop,
and an end step that closes the incident with audit-readable
state. CACAO step-ids and action-ids match the F-WF lane convention.

The regulatory anchor is NIS2 Article 21(2)(b) on the
cybersecurity-measures side and the DORA Article 17 ICT-incident
reporting lane on the resilience side. The G-01 inbound citation
pins the 24-hour early-warning and 25-hour incident-notification
contract. The CORE pass on PR #505 closes the DORA graph and
pins the D3FEND bindings; this SKELETON PR carries the canonical
content only.

### F-WF-DOS SKELETON-EXAMPLE-TEMPORAL — `ddos_response` Temporal worked example (PR #502)

[PR #502](https://github.com/secops-ng/secops-ng-framework/pull/502)
opens the G-03 parity lane on `ddos_response` by pinning its
Temporal end on the same canonical CACAO source landed on PR #501.
Layout under `examples/temporal/ddos_response/` follows the F-WF
convention; the per-example golden at
`tests/examples/temporal/ddos_response/test_golden.py` pins the
five happy-path checks. All pass; the hygiene linter reads clean.

### F-WF-DOS SKELETON-EXAMPLE-N8N — `ddos_response` n8n worked example (PR #503)

[PR #503](https://github.com/secops-ng/secops-ng-framework/pull/503)
fans the same canonical CACAO source onto the n8n target. The
eleven-check byte-parity golden at
`tests/examples/n8n/ddos_response/test_golden.py` passes in full;
the hygiene linter reads clean on the new paths.

### F-WF-DOS SKELETON-EXAMPLE-LG — `ddos_response` LangGraph worked example (PR #504)

[PR #504](https://github.com/secops-ng/secops-ng-framework/pull/504)
closes the G-03 three-target parity ring on `ddos_response` by
landing the LangGraph end. Three PRs in one window take the
playbook from no worked examples to full three-target compile
parity, all emitted deterministic from the same canonical CACAO
source on PR #501. The byte-parity golden at
`tests/examples/langgraph/ddos_response/test_golden.py` pins the
mirrored CACAO, the emitted GraphSpec, the `state_bindings.py`
byte-parity (xfail-strict-false), and the dependency-free import
surface. Pass on the new paths; the hygiene linter reads clean.

### F-WF-DOS CORE — `ddos_response` D3FEND bindings + DORA graph closure (PR #505)

[PR #505](https://github.com/secops-ng/secops-ng-framework/pull/505)
promotes `ddos_response` from SKELETON to CORE. The canonical
playbook picks up its D3FEND-technique bindings on each detection,
containment, and recovery step — the OSCAL/D3FEND mapping lane
reads the playbook as a control-coverage anchor on the
availability-incident axis. The inbound DORA Article 17 citation
closes the mapping graph against the F-G02 lane: incident
notification, escalation, and post-incident review on the
resilience side now resolve into the same playbook the cybersecurity
side reads under NIS2 Article 21(2)(b).

The CORE tier also carries the OCSF Compliance Finding emit
contract — every gate decision and every end-of-incident summary
emits a deterministic Compliance Finding shape the downstream
detection lane reads. This is the same convention the four
basic-measures playbooks carry on their CORE entries.

### F-MAP-GDPR — `ddos_response` + `cyber_hygiene_training` inbound citations under Article 32 (PR #506)

[PR #506](https://github.com/secops-ng/secops-ng-framework/pull/506)
walks two entries on the F-MAP-GDPR lane:
`content/mappings/gdpr/article-32-security-of-processing.yaml`
picks up inbound citations on `ddos_response` (against Article
32(1)(b) — confidentiality, integrity, availability, and resilience
of processing systems and services) and on `cyber_hygiene_training`
(against the awareness-and-training component of Article 32(2) on
appropriate technical and organisational measures).

The canonical playbook content is unchanged on this PR; the work
is on the GDPR mapping side, so downstream tooling that resolves
per-playbook coverage by GDPR article reads both new playbooks as
control-coverage anchors on Article 32 alongside the three
basic-measures playbooks that already carry inbound citations on
the same article. The mapping graph reads the same regulatory
overlap honestly rather than duplicating the control across
regulation-specific silos.

### F-WF-PATCH SKELETON — `patch_management` CACAO playbook (PR #507)

[PR #507](https://github.com/secops-ng/secops-ng-framework/pull/507)
opens the next F-WF lane on the basic-measures cluster:
`patch_management`, the coordinated security-patch obligation under
NIS2 Article 21(2)(e) — security in network and information systems
acquisition, development and maintenance, including vulnerability
handling and disclosure.

The canonical source at
`content/playbooks/patch_management/playbook.cacao.json` carries
the SKELETON-tier step graph: a vulnerability-intake entry that
reads from advisory and inventory sources, a risk-classification
step that distinguishes patch-now from scheduled-window cases, a
change-management branch that pins the maintenance-window
contract, a deployment-and-verification loop, and an end step that
closes the patch cycle with audit-readable state. CACAO step-ids
and action-ids match the F-WF lane convention; the inbound
citations pin NIS2 Article 21(2)(e) on the cybersecurity-measures
side. The CORE pass — D3FEND bindings, DORA graph closure, OCSF
Compliance Finding emit — walks on a later PR.

## Why a basic-measures wave reads cleanly on this row

The NIS2 Article 21(2) basic-measures cluster contains a handful
of playbooks the project has been driving along the F-WF lane in a
deliberate order — `backup_recovery`, `mfa_secured_comms`,
`crypto_posture_management`, `cyber_hygiene_training`, and now
`ddos_response` and `patch_management`. Each walks the same
lifecycle: SKELETON CACAO content, three worked examples (Temporal,
n8n, LangGraph) emitted deterministic from the same canonical
source under the G-03 byte-parity contract, then a CORE pass that
pins D3FEND bindings, closes the DORA graph, and turns on the
OCSF Compliance Finding emit.

This wave reads two beats of that lifecycle in one window. The
four previously-promoted basic-measures playbooks now each carry
full G-03 three-target worked-example parity — the
`cyber_hygiene_training` ring closes on PRs #498–#500, joining
the three rings the previous wave closed. And `ddos_response`
walks the entire lifecycle in a single wave: SKELETON content,
three worked examples with byte-parity guards, and CORE
promotion — five PRs that take the playbook from nothing on the
content side to a CORE-tier control-coverage anchor on the OSCAL
/ D3FEND graph and a control-emit anchor on the OCSF detection
lane. The shape that reads honestly across the row is the same
shape the lifecycle is designed to read: mechanical, audit-readable,
and repeatable from playbook to playbook.

## Why an availability-incident playbook belongs on the basic-measures lane

NIS2 Article 21(2) lists "incident handling" under (b) as one of
the basic measures the directive requires of essential and
important entities. The community-driven reading on this row is
that "incident handling" is plural in practice — each operationally
distinct incident class (ransomware, account compromise, service
outage under DDoS, supply-chain compromise) carries its own
detection signal, its own containment branch, and its own recovery
loop, and a single generic incident-response playbook abstracts
away the operational shape an operator needs to actually run the
incident.

The `ddos_response` playbook reads the availability axis of
Article 21(2)(b) explicitly: the volumetric and application-layer
shape on detection, the upstream-scrubbing and traffic-engineering
shape on containment, the service-restoration shape on recovery,
and the G-01 24→25-hour reporting clock on operator notification.
The cluster will pick up siblings for the other operationally
distinct incident classes as the F-WF lane walks; each will read
the same Article 21(2)(b) anchor through the operational shape it
actually answers.

## Why GDPR Article 32 picks up two playbooks at once on this row

The F-MAP-GDPR lane reads the same control-coverage graph the
F-MAP-NIS2 and F-MAP-DORA lanes do, indexed by GDPR article and
clause. Three of the four basic-measures playbooks the project
has driven through CORE already carry inbound citations on Article
32: `backup_recovery` against Article 32(1)(c) on restore
availability, `crypto_posture_management` against Article 32(1)(a)
on encryption / pseudonymisation, and `mfa_secured_comms` against
the access-control component of Article 32(1)(b).

PR #506 walks the next two entries the lane needs to read all four
basic-measures playbooks plus the new availability-incident
playbook under Article 32 explicitly: `ddos_response` against
Article 32(1)(b) on resilience of processing systems and services,
and `cyber_hygiene_training` against the awareness-and-training
component of Article 32(2) on appropriate technical and
organisational measures. PR #497's CORE-3 per-clause entry on
Article 32(1)(a) sits behind the same lane work — the per-clause
mapping is the structure the inbound citations resolve against.

The pattern is the one that has reads cleanly on the lane all
along: a single playbook addresses a recurring obligation under
multiple regulations, and the mapping graph reads the overlap
honestly rather than duplicating the control across regulation-
specific silos.

## Honest framing on what stays open behind the row

This wave closes the G-03 three-target worked-example parity ring
on the four NIS2 Article 21(2) basic-measures playbooks the project
has driven through CORE to date, lands `ddos_response` end-to-end
in one wave, opens the `patch_management` SKELETON, and walks two
more GDPR Article 32 inbound citations plus the Article 32(1)(a)
CORE-3 entry. The honest open beats:

- **`ddos_response` is one playbook in a broader incident-class
  cluster.** Ransomware, account compromise, service outage under
  resource exhaustion, supply-chain compromise — each is its own
  operationally distinct incident class under Article 21(2)(b),
  and each will pick up its own F-WF lane on the order the
  community-driven roadmap reads. The `ddos_response` lane is the
  first beat of that cluster, not the cluster.
- **`patch_management` is at SKELETON.** PR #507 pins the
  canonical CACAO content; the three worked examples on the
  reference compile targets and the CORE pass — D3FEND bindings,
  DORA graph closure, OCSF Compliance Finding emit — walk as
  the next passes behind the row.
- **EXTEND-tier LangGraph `state_bindings.py` strictness.** The
  two new LangGraph worked examples on this wave
  (`cyber_hygiene_training`, `ddos_response`) carry the same
  `xfail-strict-false` setting on `state_bindings.py` byte-parity
  the previous LangGraph worked examples carry. The CORE-LG-GOLDENS
  pass closes the strictness suite-wide on its own card.
- **Per-playbook KPI / KRI catalogue entries the CORE pass
  references.** `ddos_response` reads availability-window and
  scrubbing-effectiveness KPIs; `cyber_hygiene_training` reads
  training-completion and phishing-resilience KPIs; the
  `patch_management` SKELETON will read patch-latency and
  remediation-coverage KPIs once it picks up its CORE pass.
  Each walks on the F-MET lane on its own SKELETON / CORE /
  EXTEND cadence.
- **The F-MAP-GDPR lane will pick up more inbound citations as
  more playbooks promote.** PR #506 walks two entries; the lane
  will read the `patch_management` playbook against Article
  32(1)(b) and (1)(d) once that playbook reaches CORE, and the
  rest of the incident-class cluster as it walks.

The accurate claim on this row is: all four NIS2 Article 21(2)
basic-measures playbooks the project has driven through CORE to
date now carry full G-03 three-target compile parity emitted
deterministic from the same canonical CACAO source on each; a
fifth basic-measures playbook, `ddos_response`, walks the entire
SKELETON-through-CORE lifecycle in one wave under NIS2 Article
21(2)(b) and DORA Article 17; a sixth, `patch_management`, opens
its SKELETON under NIS2 Article 21(2)(e); the F-MAP-GDPR lane
picks up the Article 32(1)(a) per-clause CORE entry and two
more inbound citations under the same article; and the rest of
the incident-class cluster, the `patch_management` worked-example
and CORE passes, the EXTEND-tier LangGraph strictness pass, and
the per-playbook catalogue work walk as the next passes behind
the row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-MAP-GDPR CORE-3 per-clause entry on Article 32(1)(a) at
  [PR #497](https://github.com/secops-ng/secops-ng-framework/pull/497);
  the `cyber_hygiene_training` worked-example ring closing G-03 at
  [PR #498](https://github.com/secops-ng/secops-ng-framework/pull/498),
  [PR #499](https://github.com/secops-ng/secops-ng-framework/pull/499),
  [PR #500](https://github.com/secops-ng/secops-ng-framework/pull/500);
  the `ddos_response` SKELETON at
  [PR #501](https://github.com/secops-ng/secops-ng-framework/pull/501);
  its three worked examples at
  [PR #502](https://github.com/secops-ng/secops-ng-framework/pull/502),
  [PR #503](https://github.com/secops-ng/secops-ng-framework/pull/503),
  [PR #504](https://github.com/secops-ng/secops-ng-framework/pull/504);
  the CORE pass at
  [PR #505](https://github.com/secops-ng/secops-ng-framework/pull/505);
  the GDPR Article 32 inbound citations on the two new playbooks at
  [PR #506](https://github.com/secops-ng/secops-ng-framework/pull/506);
  and the `patch_management` SKELETON at
  [PR #507](https://github.com/secops-ng/secops-ng-framework/pull/507).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-one that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Three beats close this window. All four NIS2 Article 21(2)
basic-measures playbooks the project has driven through CORE to
date — `backup_recovery`, `mfa_secured_comms`,
`crypto_posture_management`, `cyber_hygiene_training` — now carry
worked examples on all three reference compile targets, emitted
deterministic from the same canonical CACAO source on each, each
with a per-example byte-parity golden guard. The
availability-incident lane lands `ddos_response` end-to-end in one
wave from SKELETON content to CORE promotion. And the
`patch_management` SKELETON opens the next basic-measures
playbook on the F-WF lane. The rest of the incident-class
cluster, the `patch_management` worked-example and CORE passes,
the EXTEND-tier LangGraph strictness pass, and the per-playbook
catalogue work walk as the next passes behind the row.
