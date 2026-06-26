---
title: "Field note #81 — `crypto_posture_management` and `mfa_secured_comms` close G-03 three-target worked-example parity; `backup_recovery` picks up its GDPR Article 32(1)(c) restore-availability inbound citation"
description: "Eighty-first field note from the SecOps-NG Digital Commons: six PRs against the framework. Two PRs close the G-03 three-target compile-parity ring on `mfa_secured_comms` by landing the n8n and LangGraph worked examples alongside its already-shipped Temporal leg. Three PRs open and close the same ring on `crypto_posture_management` in one window, shipping Temporal, n8n, and LangGraph worked examples emitted deterministically from the same canonical CACAO source. A sixth PR lands the GDPR Article 32(1)(c) restore-availability inbound citation on the `backup_recovery` playbook on the F-G02 mapping lane. Each worked example mirrors the canonical CACAO byte-for-byte, regenerates deterministically through the reference compilers, and carries a per-example byte-parity golden test."
pubDate: 2026-06-26
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf", "f-wf-crypto", "f-wf-mfa", "f-g02", "playbooks", "cacao", "nis2", "nis2-art21", "gdpr", "gdpr-art32", "dora", "g-03", "compile-parity", "n8n", "temporal", "langgraph", "worked-example", "crypto-posture", "mfa", "backup-recovery", "digital-commons"]
---

The previous field note read the `backup_recovery` playbook close
full G-03 three-target compile parity — n8n, Temporal, LangGraph — and
the `mfa_secured_comms` playbook open the same parity lane with its
Temporal worked example. The open behind that row was symmetrical:
the two remaining target legs on `mfa_secured_comms`, and the full
parity ring on `crypto_posture_management`, the third NIS2 Article
21(2) basic-measures playbook the previous CORE wave promoted but
which had not yet grown a worked example on any of the three
targets.

This note reads that open close. Five PRs land the worked-example
work across the two playbooks; a sixth picks up an unrelated but
adjacent inbound citation on `backup_recovery` from the GDPR
mapping side. The canonical CACAO content is unchanged on all six
PRs; the work is the compile-side rendering and the determinism
guards, with one mapping-graph entry on the F-G02 lane.

## What landed in this window

Six PRs against the framework, all merged to `main`.

### F-WF-MFA SKELETON-EXAMPLE (n8n leg) — `mfa_secured_comms` n8n worked example (PR #491)

[PR #491](https://github.com/secops-ng/secops-ng-framework/pull/491)
fans the canonical `mfa_secured_comms` CACAO source onto the n8n
compile target. The layout under `examples/n8n/mfa_secured_comms/`
mirrors the existing `examples/n8n/backup_recovery/` worked example
the previous wave shipped, so the n8n side of the catalogue reads
consistently across playbooks.

The emitter output `workflow.n8n.json` carries one node per CACAO
step, with the start, the per-step set nodes, the gate branches, and
the end node wired by the canonical sequencing. Set-node uplift
carries the `in_args` / `out_args` / `x_secops_ng.*` blocks as
assignment rows, and only the `end` step emits a `noOp` shape under
the post-uplift contract.

The byte-parity golden at
`tests/examples/n8n/mfa_secured_comms/test_golden.py` reads the
eleven-check suite the n8n example side carries by convention —
emitter byte-parity, canonical-mirror byte-parity, emit determinism,
node-id ↔ CACAO step-id parity in both directions, node-label ↔
CACAO step-name parity, n8n shape validity, Set-node uplift contract,
and `noOp` discipline. All pass; the hygiene linter reads clean on
the new paths.

### F-WF-MFA SKELETON-EXAMPLE (LangGraph leg) — `mfa_secured_comms` LangGraph worked example (PR #492)

[PR #492](https://github.com/secops-ng/secops-ng-framework/pull/492)
closes the G-03 three-target parity ring on `mfa_secured_comms` by
landing the LangGraph end. All three reference compile targets — n8n,
Temporal, LangGraph — now emit from the same canonical CACAO source
on this playbook.

The layout under `examples/langgraph/mfa_secured_comms/` mirrors the
existing `examples/langgraph/backup_recovery/` example:

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
`tests/examples/langgraph/mfa_secured_comms/test_golden.py` pins the
mirrored CACAO against the canonical source, the emitted
`graph_spec.json` against the live `compilers.langgraph.emit`
output, the `state_bindings.py` against the emitter output
(xfail-strict-false, matching the LangGraph suite convention), and
asserts that `assemble.py` imports cleanly without the `langgraph`
package installed. Pass on the new paths; the hygiene linter reads
clean.

### F-WF-CRYPTO SKELETON-EXAMPLE — `crypto_posture_management` Temporal worked example (PR #493)

[PR #493](https://github.com/secops-ng/secops-ng-framework/pull/493)
opens the G-03 parity lane on the third NIS2 Article 21(2)
basic-measures playbook in this wave, `crypto_posture_management`,
by pinning its Temporal end.

The artefacts under `examples/temporal/crypto_posture_management/`
emit byte-deterministic from
`content/playbooks/crypto_posture_management/playbook.cacao.json`
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
`tests/examples/temporal/crypto_posture_management/test_golden.py`
pins the same five happy-path checks the F-WF lane carries by
convention — artefacts committed, byte-parity vs the live emitter,
byte-parity vs the canonical CACAO mirror, emit determinism across
runs, and activity-name ↔ CACAO action-id parity in both directions.
All pass; the hygiene linter reads clean on the new paths.

The regulatory anchor is NIS2 Article 21(2)(h) — cryptography and
encryption — already pinned on the canonical content side and on
the inbound DORA Article 9(2) mapping. The CORE content tier is
unchanged on this PR; this is the compile-side rendering only.

### F-WF-CRYPTO SKELETON-EXAMPLE-N8N — `crypto_posture_management` n8n worked example (PR #494)

[PR #494](https://github.com/secops-ng/secops-ng-framework/pull/494)
fans the same canonical CACAO source onto the n8n target. Layout
mirrors the n8n examples shipped on `backup_recovery` and
`mfa_secured_comms` — one node per CACAO step, Set-node uplift on
the `in_args` / `out_args` / `x_secops_ng.*` blocks, `noOp` shape
only on the `end` step under the post-uplift contract. The
eleven-check byte-parity golden at
`tests/examples/n8n/crypto_posture_management/test_golden.py` passes
in full; the hygiene linter reads clean on the new paths.

### F-WF-CRYPTO SKELETON-EXAMPLE-LG — `crypto_posture_management` LangGraph worked example (PR #495)

[PR #495](https://github.com/secops-ng/secops-ng-framework/pull/495)
closes the G-03 three-target parity ring on
`crypto_posture_management` by landing the LangGraph end. Three PRs
in one window take this playbook from no worked examples to full
three-target compile parity, all emitted deterministic from the
same canonical CACAO source.

Layout under `examples/langgraph/crypto_posture_management/` mirrors
the existing LangGraph worked examples: byte-mirrored CACAO source,
the emitted `graph_spec.json` and `state_bindings.py`, the
`_audit_mirror.py` dependency-free sibling, the reference
`assemble.py`, the `regenerate.sh` mirror-and-emit contract, and an
operator-facing README. The byte-parity golden at
`tests/examples/langgraph/crypto_posture_management/test_golden.py`
pins the mirrored CACAO, the emitted GraphSpec, the
`state_bindings.py` byte-parity (xfail-strict-false), and the
dependency-free import surface. Pass on the new paths; the hygiene
linter reads clean.

### F-G02 SKELETON — `backup_recovery` GDPR Article 32(1)(c) inbound citation (PR #496)

[PR #496](https://github.com/secops-ng/secops-ng-framework/pull/496)
walks one entry on the F-G02 (GDPR) mapping lane:
`content/mappings/gdpr/article-32-security-of-processing.yaml`
picks up an inbound citation on the `backup_recovery` playbook
against Article 32(1)(c) — the restore-availability obligation
("the ability to restore the availability and access to personal
data in a timely manner in the event of a physical or technical
incident"). The canonical playbook content is unchanged on this PR;
the work is the inbound citation on the GDPR mapping side, so the
existing NIS2 Article 21(2)(c) and DORA Article 12 inbound citations
read alongside a third regulatory anchor on the same playbook.

## Why a parity-closeout wave reads honestly on this row

The throughline across PRs #491–#495 is mechanical, not narrative.
The NIS2 Article 21(2) basic-measures cluster contains three
playbooks the project has been driving along the F-WF lane —
`backup_recovery`, `mfa_secured_comms`, `crypto_posture_management`
— each promoted to CORE in earlier waves. The G-03 axis pins one
specific contract on top of CORE content: a worked example under
`examples/<target>/<playbook>/` on each of the three reference
compile targets, emitted deterministic from the same canonical
CACAO source, with a per-example byte-parity golden guard.

The previous field note closed that ring on `backup_recovery`. This
note closes it on `mfa_secured_comms` (PRs #491, #492) and opens-
and-closes it on `crypto_posture_management` in one window (PRs
#493, #494, #495). Across this and the previous wave, every PR
follows the same shape: same emit path, same mirror contract, same
per-example byte-parity test pattern, same hygiene floor. G-03
parity reads as a discipline the project applies mechanically
across playbooks once the CORE content tier lands, rather than as
bespoke per-playbook compile work.

## Why deterministic regeneration matters on this row

A worked example that an operator clones, reads, and adapts is only
useful if it can be regenerated against the canonical source on
demand and the regeneration is byte-identical to the committed
file. The `regenerate.sh` contract every worked example carries
codifies that — an operator (or a downstream contributor) runs one
command, the mirror is refreshed from `content/playbooks/`, the
emitter is re-run, and the result reads bit-identical to the
committed artifact. The per-example byte-parity golden test is the
guard: if a compiler change or a content change drifts the emitter
output, the golden fails in CI before the drift lands on `main`.

The audit-readable claim across this five-PR worked-example wave is:
the canonical CACAO source is the only place playbook content is
authored; every target-side rendering is emitted, not hand-written;
and every rendering carries a byte-parity guard against the emitter
and against the canonical source. The compile-side surface does not
fork from the content surface, ever.

## Why a GDPR inbound citation belongs alongside the worked-example wave

The F-G02 entry on PR #496 reads small but pins a specific property
of the mapping graph. The `backup_recovery` playbook addresses a
restore-availability obligation that recurs across the EU regulatory
stack: NIS2 Article 21(2)(c) on the cybersecurity-measures side,
DORA Article 12 on the ICT-resilience side, and GDPR Article 32(1)(c)
on the data-protection-by-design side. Before this PR the GDPR
anchor was implicit; after it the mapping graph reads the same
playbook from three regulatory directions explicitly, and downstream
tooling that resolves inbound citations into a control-coverage view
picks up the GDPR Article 32 lane on the same artifact.

The pattern generalises: a single playbook can carry inbound
citations from multiple regulations because the regulations
themselves overlap on the underlying control. The mapping graph is
designed to read that overlap honestly rather than duplicate the
control across regulation-specific silos.

## Honest framing on what stays open behind the row

This wave closes the G-03 three-target compile-parity ring on the
three NIS2 Article 21(2) basic-measures playbooks the previous CORE
wave promoted — `backup_recovery`, `mfa_secured_comms`,
`crypto_posture_management`. The honest open beats:

- **The fourth basic-measures playbook, `cyber_hygiene_training`,
  still reads as CORE-without-examples.** It reached CORE on the
  earlier wave alongside the other three. Its three-target
  worked-example parity walks on its own SKELETON-EXAMPLE / fan-out
  cadence — three more PRs to reach the bar these three now carry.
- **EXTEND-tier LangGraph `state_bindings.py` strictness.** Both
  new LangGraph worked examples (`mfa_secured_comms`,
  `crypto_posture_management`) carry the same `xfail-strict-false`
  setting on `state_bindings.py` byte-parity that the
  `backup_recovery` LangGraph example carries. The CORE-LG-GOLDENS
  pass closes the strictness suite-wide on its own card; this wave
  inherits the convention rather than driving it.
- **Per-playbook KPI / KRI catalogue entries the CORE pass
  referenced.** Cipher-suite-floor and rotation-cadence KPIs,
  session-staleness and OOB-reachability KPIs, restore-drill
  cadence and backup-integrity KPIs — each walks on the F-MET lane
  on its own SKELETON / CORE / EXTEND cadence.
- **The other inbound citations the F-G02 lane will pick up.** The
  GDPR Article 32 mapping reads other Article 21(2) playbooks on
  the inbound citation side as the lane walks; PR #496 is one entry
  on a longer pass.

The accurate claim on this row is: all three of the
basic-measures playbooks the previous CORE wave promoted to date —
`backup_recovery`, `mfa_secured_comms`,
`crypto_posture_management` — now carry full G-03 three-target
compile parity (n8n, Temporal, LangGraph) emitted from the same
canonical CACAO source with per-example byte-parity golden guards;
the GDPR Article 32(1)(c) restore-availability mapping picks up an
inbound citation on `backup_recovery`; the canonical CORE content
tier is unchanged on all six PRs; and the fourth basic-measures
playbook's worked-example wave, the EXTEND-tier strictness pass,
and the per-playbook catalogue work walk as the next passes
behind the row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the `mfa_secured_comms` n8n worked example at
  [PR #491](https://github.com/secops-ng/secops-ng-framework/pull/491);
  the `mfa_secured_comms` LangGraph worked example closing the G-03
  three-target parity ring at
  [PR #492](https://github.com/secops-ng/secops-ng-framework/pull/492);
  the `crypto_posture_management` Temporal worked example opening
  its parity lane at
  [PR #493](https://github.com/secops-ng/secops-ng-framework/pull/493);
  the n8n fan-out at
  [PR #494](https://github.com/secops-ng/secops-ng-framework/pull/494);
  the LangGraph end closing its G-03 three-target parity ring at
  [PR #495](https://github.com/secops-ng/secops-ng-framework/pull/495);
  and the F-G02 GDPR Article 32(1)(c) inbound citation on
  `backup_recovery` at
  [PR #496](https://github.com/secops-ng/secops-ng-framework/pull/496).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two beats close this window. The three NIS2 Article 21(2)
basic-measures playbooks the previous CORE wave promoted to date —
`backup_recovery`, `mfa_secured_comms`, `crypto_posture_management`
— now each carry worked examples on all three reference compile
targets, emitted deterministic from the same canonical CACAO source,
each with a per-example byte-parity golden guard. And the
`backup_recovery` playbook picks up its third regulatory anchor on
the mapping graph: GDPR Article 32(1)(c) restore-availability,
alongside the already-pinned NIS2 Article 21(2)(c) and DORA Article
12 inbound citations. The `cyber_hygiene_training` worked-example
wave, the EXTEND-tier strictness pass on the LangGraph suite, and
the per-playbook catalogue work open as the next passes behind the
row.
