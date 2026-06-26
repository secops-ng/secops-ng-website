---
title: "Field note #80 — the NIS2 Article 21(2) basic-measures cluster grows portable worked examples on all three reference compile targets: `backup_recovery` closes G-03 three-target parity, `mfa_secured_comms` opens its parity lane on Temporal"
description: "Eightieth field note from the SecOps-NG Digital Commons: four PRs against the framework. Three PRs land worked examples on n8n, Temporal, and LangGraph for the `backup_recovery` playbook (NIS2 Art.21(2)(c), DORA Art.12) — closing the G-03 three-target compile parity contract from the same canonical CACAO source. A fourth PR opens the same parity lane on the `mfa_secured_comms` playbook (NIS2 Art.21(2)(j)) by shipping the Temporal worked example. Each worked example mirrors the canonical CACAO byte-for-byte, regenerates deterministically through the reference compilers, and carries a per-example byte-parity golden test."
pubDate: 2026-06-26
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf", "f-wf-bcr", "f-wf-mfa", "playbooks", "cacao", "nis2", "nis2-art21", "dora", "g-03", "compile-parity", "n8n", "temporal", "langgraph", "worked-example", "backup-recovery", "mfa", "digital-commons"]
---

The previous field note read a four-playbook CORE wave landing across
the NIS2 Article 21(2) basic-measures cluster — crypto-posture,
backup-recovery, MFA-secured-communications, cyber-hygiene-training —
each promoted from SKELETON to CORE with per-step D3FEND v1.0.0
bindings, OCSF Compliance Finding (2003) emit-side bindings, and DORA
mapping-graph closure. The open behind that row was the G-03 axis:
worked examples on all three reference compile targets, emitted
deterministically from the same canonical CACAO source, so an
operator running n8n, Temporal, or LangGraph reads the same playbook
discipline rendered into the orchestrator they already run.

This note reads that G-03 axis advancing. The `backup_recovery`
playbook closes full three-target parity in one window — Temporal,
n8n, and LangGraph worked examples each land with per-example
byte-parity golden tests. The `mfa_secured_comms` playbook opens the
same parity lane by shipping its Temporal worked example. The
canonical CACAO content is unchanged on all four PRs; the work is
the compile-side rendering and the determinism guard.

## What landed in this window

Four PRs against the framework, all merged to `main`.

### F-WF-BCR SKELETON-EXAMPLE — `backup_recovery` Temporal worked example (PR #487)

[PR #487](https://github.com/secops-ng/secops-ng-framework/pull/487)
opens the G-03 parity lane on the `backup_recovery` playbook by
shipping the Temporal end of the three-target contract.

The artefacts under `examples/temporal/backup_recovery/` emit byte-
deterministic from `content/playbooks/backup_recovery/playbook.cacao.json`
through `python -m tools.compile --target temporal`:

- `playbook.cacao.json` — co-located mirror of the canonical CACAO
  source, byte-identical to the upstream artifact under
  `content/playbooks/`, so the worked example reads as a standalone
  starting point and the byte-parity guard reads against a known
  anchor.
- `workflow.temporal.py` — the emitted Temporal workflow stub, not
  hand-written. Activity names match the CACAO action ids in both
  directions.
- `regenerate.sh` — the deterministic mirror-and-emit contract: an
  operator who clones the repo regenerates both files from the
  canonical source with a single command.
- `README.md` — operator-facing readme with the regeneration command
  and the sovereignty-stance reminder.

The per-example golden test at
`tests/examples/temporal/backup_recovery/test_golden.py` pins five
happy-path checks: artefacts committed, byte-parity vs the live
emitter, byte-parity vs the canonical CACAO mirror, emit
determinism across runs, and activity-name ↔ CACAO action-id parity
in both directions. Five of five pass; the hygiene linter reads
clean on the new paths.

### F-WF-BCR CORE-FANOUT-N8N — `backup_recovery` n8n worked example (PR #488)

[PR #488](https://github.com/secops-ng/secops-ng-framework/pull/488)
fans the same canonical CACAO source onto the n8n compile target.
The layout under `examples/n8n/backup_recovery/` mirrors the existing
`examples/n8n/ransomware_containment/` worked example, so the n8n
side of the catalogue reads consistently across playbooks.

The emitter output `workflow.n8n.json` carries eight nodes — one per
CACAO step — with the start, the dated-examination set nodes, the
restore-drill if-branch, and the end node wired by the canonical
sequencing. Set-node uplift carries the `in_args` / `out_args` /
`x_secops_ng.*` blocks as assignment rows, and only the `end` step
emits a `noOp` shape under the post-uplift contract.

The byte-parity golden at
`tests/examples/n8n/backup_recovery/test_golden.py` reads eleven
checks: byte-parity drift guard vs the n8n emitter, mirrored CACAO
byte-parity vs the canonical playbook, emitter determinism across
runs, node-id ↔ CACAO step-id parity in both directions, node-label
↔ CACAO step-name parity, n8n shape validity on the required
workflow / node fields and the meta blocks, the Set-node uplift
contract on action-without-commands steps, and the `noOp` discipline.
Eleven of eleven pass; the hygiene linter reads clean.

### F-WF-BCR SKELETON-EXAMPLE-LG — `backup_recovery` LangGraph worked example (PR #489)

[PR #489](https://github.com/secops-ng/secops-ng-framework/pull/489)
closes the G-03 three-target parity triplet for `backup_recovery` by
landing the LangGraph end. All three reference compile targets now
emit from the same canonical CACAO source on this playbook.

The layout under `examples/langgraph/backup_recovery/` mirrors the
existing `examples/langgraph/ransomware_containment/` example:

- `playbook.cacao.json` — byte-mirror of the canonical CACAO source.
- `graph_spec.json` — the emitted GraphSpec output of
  `compilers.langgraph.emit`.
- `state_bindings.py` — the emitted TypedDict and tool wrappers from
  `compilers.langgraph.state`.
- `_audit_mirror.py` — a dependency-free audit-mirror sibling, so an
  operator can read the graph topology without installing the
  `langgraph` runtime.
- `assemble.py` — the reference `StateGraph` assembly that an
  integrator runs in their own deployment.
- `regenerate.sh` — the deterministic mirror-and-emit contract.
- `README.md` — integrator guide.

The byte-parity golden at
`tests/examples/langgraph/backup_recovery/test_golden.py` pins the
mirrored CACAO against the canonical source, the emitted
`graph_spec.json` against the live `compilers.langgraph.emit` output,
the `state_bindings.py` against the emitter output (xfail-strict-false,
matching the rest of the LangGraph suite — the CORE-LG-GOLDENS
sibling closes that strictness setting on its own pass), and asserts
that `assemble.py` imports cleanly without the `langgraph` package
installed. Four pass and one xpasses on the new paths; across the
full LangGraph example suite forty-seven pass and two xpass; the
hygiene linter reads clean.

### F-WF-MFA SKELETON-EXAMPLE — `mfa_secured_comms` Temporal worked example (PR #490)

[PR #490](https://github.com/secops-ng/secops-ng-framework/pull/490)
opens the G-03 parity lane on the second basic-measures playbook in
this wave, `mfa_secured_comms`, by pinning its Temporal end. The
shape mirrors PR #487 exactly — the F-WF lane's SKELETON-EXAMPLE
contract reads mechanically across playbooks rather than per-playbook.

The artefacts under `examples/temporal/mfa_secured_comms/` emit
byte-deterministic from
`content/playbooks/mfa_secured_comms/playbook.cacao.json` through
`python -m tools.compile --target temporal`. The per-example golden
at `tests/examples/temporal/mfa_secured_comms/test_golden.py` pins
the same five happy-path checks the `backup_recovery` Temporal
golden carries — artefacts committed, byte-parity vs emitter, byte-
parity vs canonical mirror, emit determinism, activity-name ↔ CACAO
action-id parity. Five of five pass; the hygiene linter reads zero
findings on the new paths.

The regulatory anchor is NIS2 Article 21(2)(j) — multi-factor and
continuous authentication, secured communications — already pinned
on the canonical content side and on the inbound DORA Article
9(4)(b) mapping. The CORE content tier is unchanged on this PR;
this is the compile-side rendering only.

## Why a three-target parity wave reads honestly on this row

The G-03 axis carries a specific definition the previous CORE wave
left open. The honest framing:

- **What ships on a SKELETON-EXAMPLE / CORE-FANOUT PR.** A worked
  example under `examples/<target>/<playbook>/` emitted deterministic
  from the canonical CACAO source through the reference compiler for
  that target; a co-located CACAO mirror byte-identical to the
  canonical source; the `regenerate.sh` mirror-and-emit contract; a
  per-example byte-parity golden test that pins the emitter output,
  the canonical mirror, the determinism guard, and the
  step-id ↔ target-id parity in both directions; an operator-facing
  README. The hygiene linter reads clean on the new paths.
- **What stays on the CORE content tier.** The CACAO v2 playbook
  artifact, the per-step D3FEND v1.0.0 detection bindings, the OCSF
  Compliance Finding (2003) emit-side binding, the inbound NIS2 and
  DORA mapping entries and outbound `nis2:` / `dora:` blocks on the
  playbook overlay, the GDPR Article 30 RoPA entry on the lawful-
  basis guard template. Those were the CORE deliverables and they
  are unchanged on the SKELETON-EXAMPLE / CORE-FANOUT passes.
- **What waits behind these PRs.** EXTEND-tier byte-parity goldens
  that close the LangGraph emitter's `state_bindings.py` strictness
  the F-WF-BCR LG example currently carries as xfail-strict-false;
  CORE-FANOUT n8n and LangGraph worked examples for
  `mfa_secured_comms` to bring it to three-target parity alongside
  `backup_recovery`; the same SKELETON-EXAMPLE / CORE-FANOUT lane on
  the other two NIS2 Article 21(2) basic-measures playbooks
  promoted in the previous wave — `crypto_posture_management` and
  `cyber_hygiene_training`; and the per-playbook KPI / KRI
  catalogue entries the CORE pass referenced, walking on the F-MET
  lane's own SKELETON / CORE / EXTEND cadence.

The shared shape across PRs #487–#490 — same emit path, same mirror
contract, same per-example byte-parity test pattern, same hygiene
floor — is deliberate. G-03 parity reads as a discipline the project
applies mechanically across playbooks once the CORE content tier
lands, rather than as bespoke per-playbook compile work.

## Why deterministic regeneration matters on this row

A worked example that an operator clones, reads, and adapts is only
useful if it can be regenerated against the canonical source on
demand and the regeneration is byte-identical to the committed file.
The `regenerate.sh` contract every worked example carries codifies
that — an operator (or a downstream contributor) runs one command,
the mirror is refreshed from `content/playbooks/`, the emitter is
re-run, and the result reads bit-identical to the committed
artifact. The per-example byte-parity golden test is the guard: if
a compiler change or a content change drifts the emitter output,
the golden fails in CI before the drift lands on `main`.

The audit-readable claim across PRs #487–#490 is: the canonical
CACAO source is the only place playbook content is authored; every
target-side rendering is emitted, not hand-written; and every
rendering carries a byte-parity guard against the emitter and
against the canonical source. The compile-side surface does not
fork from the content surface, ever.

## Honest framing on what stays open behind the row

The four PRs close the G-03 parity contract for `backup_recovery`
across all three reference compile targets, and open it for
`mfa_secured_comms` on the Temporal side. They do not close G-03 on
the basic-measures cluster as a whole. The honest open beats:

- **CORE-FANOUT for `mfa_secured_comms` on n8n and LangGraph.** The
  Temporal end on PR #490 opens the parity lane; the two siblings
  bring it to three-target parity. Sibling cards per target.
- **SKELETON-EXAMPLE + CORE-FANOUT for the other two basic-measures
  playbooks.** `crypto_posture_management` and `cyber_hygiene_training`
  reached CORE on the previous wave but have not yet grown worked
  examples on any of the three targets. Sibling cards per playbook
  per target — six PRs to reach the same parity bar
  `backup_recovery` now carries.
- **LangGraph `state_bindings.py` strictness.** The F-WF-BCR
  LangGraph golden carries `xfail-strict-false` on the
  `state_bindings.py` byte-parity check, matching the rest of the
  LangGraph example suite. The CORE-LG-GOLDENS pass closes the
  strictness on its own card; this wave inherits the convention
  rather than driving it.
- **The EXTEND-tier KPI / KRI catalogue entries the CORE pass
  referenced.** Restore-drill cadence, backup-integrity failures,
  cipher-suite-floor and rotation-cadence KPIs, session-staleness
  and OOB-reachability KPIs, per-cohort training-overdue KPIs — each
  walks on the F-MET lane on its own SKELETON / CORE / EXTEND
  cadence.

The accurate claim on this row is: the `backup_recovery` playbook
now reaches full G-03 three-target compile parity — n8n, Temporal,
LangGraph — each emitted from the same canonical CACAO source with
a per-example byte-parity golden guard; `mfa_secured_comms` opens
the same parity lane with its Temporal worked example; the canonical
CORE content tier is unchanged on all four PRs; and the remaining
two-target fan-outs on `mfa_secured_comms`, the parity lanes on the
other two basic-measures playbooks, and the EXTEND-tier strictness
and catalogue work walk as the next passes behind the row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-WF-BCR Temporal worked example at
  [PR #487](https://github.com/secops-ng/secops-ng-framework/pull/487);
  the F-WF-BCR n8n worked example at
  [PR #488](https://github.com/secops-ng/secops-ng-framework/pull/488);
  the F-WF-BCR LangGraph worked example closing G-03 three-target
  parity at
  [PR #489](https://github.com/secops-ng/secops-ng-framework/pull/489);
  and the F-WF-MFA Temporal worked example opening the
  `mfa_secured_comms` parity lane at
  [PR #490](https://github.com/secops-ng/secops-ng-framework/pull/490).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-nine that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two beats close this window. The `backup_recovery` playbook —
NIS2 Article 21(2)(c), DORA Article 12 — now carries worked examples
on all three reference compile targets, emitted deterministic from
the same canonical CACAO source, each with a per-example byte-
parity golden guard. And the `mfa_secured_comms` playbook —
NIS2 Article 21(2)(j) — opens its G-03 parity lane on the Temporal
side, mirroring the same SKELETON-EXAMPLE shape. The CORE-FANOUT
siblings for `mfa_secured_comms`, the parity lanes on the other two
basic-measures playbooks the previous CORE wave promoted, and the
EXTEND-tier strictness and catalogue work open as the next passes
behind the row.
