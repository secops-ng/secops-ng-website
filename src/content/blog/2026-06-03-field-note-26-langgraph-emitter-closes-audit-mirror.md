---
title: "Field note #26 — the LangGraph emitter wires audit-mirror end to end, the n8n worked example documents its per-action wiring contract, and the audit-trail story closes across all three reference compile targets"
description: "Twenty-sixth field note from the SecOps-NG Digital Commons: the F-CR-04 LangGraph emitter lands in three siblings — a shared CLI helper, the @tool emit path wired to AuditTrail.append, and a clean golden regeneration that drops every pending xfail marker — and the n8n vuln-intake worked example documents its per-action wiring against the primitives contract, closing the audit-mirror story across n8n, Temporal, and LangGraph."
pubDate: 2026-06-03
author: "The SecOps-NG commons"
tags: ["shipping-update", "audit-mirror", "f-cr-04", "langgraph", "temporal", "n8n", "compilers", "otel", "audit-trail", "byte-parity", "goldens", "primitives", "vuln-intake", "digital-commons"]
---

Field note #23 introduced the OTel emitter as the audit-trail seam the
three reference compilers share. Field note #25 closed the long-running
golden refresh that the emitter wrap left behind on Temporal and
LangGraph, leaving the byte-parity matrix one cell away from a clean
grid. The piece those notes named but did not yet land was the other
half of the seam: a compile-time-bound AuditTrail.append call inside
every emitted tool body, so the audit envelope holds even when no OTLP
exporter is configured at runtime.

That half lands in this wave. The LangGraph emitter now wires the
audit-mirror path end to end, alongside the n8n vuln-intake worked
example documenting its per-action wiring against the same primitives
contract. The audit-mirror story now reads complete across all three
compile targets.

## What landed in this wave

### F-CR-04 LangGraph audit-mirror, in three siblings

The LangGraph half of F-CR-04 lands as a sibling split — the same shape
the Temporal half took on
[PR #186](https://github.com/secops-ng/secops-ng-framework/pull/186)
earlier in the wave. Splitting a compiler change into a helper move, an
emitter wire-up, and a golden regeneration keeps the per-PR review
surface scoped to one concern at a time, and it keeps the byte-parity
matrix readable across the regeneration step.

- [PR #214](https://github.com/secops-ng/secops-ng-framework/pull/214)
  — CORE-LG-CLI. The shared `audit_mirror_cli` helper lands under
  `compilers/_shared/`, and the LangGraph worked-example
  `regenerate.sh` scripts call into it. The helper materialises the
  dependency-free `_audit_mirror.py` sibling alongside every worked
  example, so the audit-trail call inside an emitted tool body has a
  stable import target whether the operator is running the example
  standalone or inside a packaged deployment. The helper is shared with
  the Temporal sibling for cross-target consistency.
- [PR #215](https://github.com/secops-ng/secops-ng-framework/pull/215)
  — CORE-LG-EMITTER. The LangGraph `@tool` emit path in
  `compilers/langgraph/state.py` is wired to call `AuditTrail.append()`
  alongside its existing OTel span emit, and the envelope contract is
  named in shared form: `secops_ng.workflow.run_id` lands as a
  compile-time empty-string placeholder that an integrator rebinds at
  the call site at invocation time, and timestamps stay runtime-only,
  surfaced through the OTel span. The wire-up is byte-parity-by-
  construction with the Temporal sibling — the same shared constant
  drives both targets, so a replay of the same playbook produces a
  byte-identical envelope on Temporal and on LangGraph.
- [PR #216](https://github.com/secops-ng/secops-ng-framework/pull/216)
  — CORE-LG-GOLDENS. The nine LangGraph golden cells regenerate against
  the emitter wrap, the eleven worked-example `state_bindings.py`
  artefacts regenerate alongside, and the `_audit_mirror.py` siblings
  materialise next to every worked example via the CLI helper. The
  twenty-seven `xfail` markers that the emitter sibling
  ([PR #215](https://github.com/secops-ng/secops-ng-framework/pull/215))
  staged on the golden tests — with `unblocks-in: CORE-LG-GOLDENS
  sibling` as the unblock reason — come off in the same commit they
  land green. The verification step on the golden PR records a fresh
  pytest run reading `154 passed, 0 xfail` and an idempotency check on
  every per-example `regenerate.sh` producing an empty diff on the
  second run.

The three together close the LangGraph audit-mirror seam: a compiler
emits a `@tool` body that names an OTel span and appends to the
AuditTrail in the same call, every worked example carries the
dependency-free audit-mirror sibling its imports resolve against, and
the byte-parity goldens record the new artefact shape with no pending
xfail markers in the cell.

### F-WF-01 CORE-N8N: per-action wiring against the primitives contract

The n8n target renders the vuln-intake worked example as
`n8n-nodes-base.set` nodes that carry the CACAO I/O contract as editable
rows — a snapshot of intent, not a runnable playbook, the framing the
worked-example README already names. The CORE body work for n8n,
therefore, is not a code emit; it is a documentation move that records
which primitive each Set node's rows bind to, so an operator wiring the
Set rows to real connectors gets the same replay-deterministic
behaviour the Temporal and LangGraph emitters get from importing the
primitive directly.

- [PR #217](https://github.com/secops-ng/secops-ng-framework/pull/217)
  — F-WF-01 CORE-N8N. The
  `examples/n8n/vuln-intake/README.md` gains a per-action wiring notes
  section covering all seven CORE actions, each named against the
  deterministic primitive it binds to: the dedup-key primitive
  ([PR #205](https://github.com/secops-ng/secops-ng-framework/pull/205)),
  the DSPy free-text signatures primitive
  ([PR #206](https://github.com/secops-ng/secops-ng-framework/pull/206)),
  the EPSS canonicalisation primitive
  ([PR #207](https://github.com/secops-ng/secops-ng-framework/pull/207)),
  the CVSS v3.1 parsing primitive
  ([PR #210](https://github.com/secops-ng/secops-ng-framework/pull/210)),
  and the severity-policy primitive
  ([PR #211](https://github.com/secops-ng/secops-ng-framework/pull/211))
  that composes CVSS and EPSS into the single ordered decision the
  playbook intent reasons over.

Cross-target semantic consistency lives in the primitives package
itself. Temporal binds via activity imports. LangGraph binds via
node-function imports. n8n binds via operator-edited Set rows that
point at the same Python functions. All three replays read the same
disclosure into the same byte-identical case, because all three call
the same primitive on the way in.

## What this wave closes

Read in sequence, the audit-mirror seam now reads complete across the
three compile targets:

- The OTel emitter wrap landed across the three targets through
  [PR #180](https://github.com/secops-ng/secops-ng-framework/pull/180),
  [PR #183](https://github.com/secops-ng/secops-ng-framework/pull/183),
  [PR #186](https://github.com/secops-ng/secops-ng-framework/pull/186),
  and
  [PR #190](https://github.com/secops-ng/secops-ng-framework/pull/190).
- The byte-parity goldens absorbed the wrap on Temporal and LangGraph
  through
  [PR #198](https://github.com/secops-ng/secops-ng-framework/pull/198).
- The Temporal emitter wired audit-mirror end to end through
  [PR #186](https://github.com/secops-ng/secops-ng-framework/pull/186).
- The LangGraph emitter wires audit-mirror end to end through
  [PR #214](https://github.com/secops-ng/secops-ng-framework/pull/214),
  [PR #215](https://github.com/secops-ng/secops-ng-framework/pull/215),
  and
  [PR #216](https://github.com/secops-ng/secops-ng-framework/pull/216)
  in this wave.
- The n8n worked example documents its per-action wiring against the
  primitives contract through
  [PR #217](https://github.com/secops-ng/secops-ng-framework/pull/217)
  in this wave.

Every compiler that emits an artefact now emits a span the OTel
emitter named and an append the AuditTrail recorded, and every worked
example a contributor opens carries the audit-mirror sibling its
imports resolve against. The audit envelope holds whether or not an
OTLP exporter is configured at runtime, because the AuditTrail.append
call is compile-time-bound into the emitted tool body.

## What this wave does not promise

It does not promise the n8n target gains its own emitter wire-up. The
n8n artefact is, by design, a snapshot of intent the operator wires
into the orchestrator the operator already runs — the CORE wiring work
on n8n is a documentation move that names the primitive contract the
Set rows bind to, and the operator's own connector node is what
executes against the primitive at runtime.

It does not promise the n8n ransomware-containment cell returns to the
byte-parity matrix in this wave. That cell sits behind a separate
CORE-uplift card and returns to the matrix once its content has been
walked up to the CORE line, as field note #25 named.

It does not promise the audit-mirror seam grows beyond the
`workflow.run_id` placeholder envelope in this wave. The envelope shape
the three targets share — playbook id, step id, tool name,
`workflow.run_id` placeholder, no compile-time `ts` — is the contract
the integrator rebinds against at invocation time. Subsequent envelope
fields land as their own composition steps on later waves.

## Community lane status

The M3 community-ignition launch post — "Open for contributors" —
remains the entry point against five good-first-issues on
`secops-ng-framework`: issues
[#193](https://github.com/secops-ng/secops-ng-framework/issues/193),
[#194](https://github.com/secops-ng/secops-ng-framework/issues/194),
[#195](https://github.com/secops-ng/secops-ng-framework/issues/195),
[#196](https://github.com/secops-ng/secops-ng-framework/issues/196),
and
[#197](https://github.com/secops-ng/secops-ng-framework/issues/197).
A contributor walking in this week finds the same five issues open, a
vuln-intake content layer reading five-deep in shared primitive form,
a worked-example surface reading two-deep on the canonical axis with
per-action wiring documented against the primitives contract on the
n8n side, and an audit-mirror seam reading wired end to end across
Temporal and LangGraph.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-CR-04 LangGraph audit-mirror sibling split lands through
  [PR #214](https://github.com/secops-ng/secops-ng-framework/pull/214)
  (CLI helper),
  [PR #215](https://github.com/secops-ng/secops-ng-framework/pull/215)
  (emitter wire-up), and
  [PR #216](https://github.com/secops-ng/secops-ng-framework/pull/216)
  (goldens + xfail removal); the F-WF-01 n8n CORE wiring notes land
  through
  [PR #217](https://github.com/secops-ng/secops-ng-framework/pull/217).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-five that preceded it, plus the M3
  launch post on
  [PR #32](https://github.com/secops-ng/secops-ng-website/pull/32).
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the LangGraph emitter wires
audit-mirror end to end with no pending xfail markers in the cell, the
Temporal emitter does the same against the byte-parity contract, the
n8n worked example documents its per-action wiring against the
primitives contract for the operator who walks in next, and the three
targets together close the audit-mirror story the OTel emitter wave
opened. The seam is wired, the envelope is named, and the audit
envelope holds whether or not an exporter is configured at runtime.

More from the lanes as the audit envelope grows beyond the
compile-time placeholder, the n8n ransomware-containment cell walks
its way back to the byte-parity matrix through CORE-uplift, and the
F-WF-01 vuln-intake worked example crosses from CORE documentation
into operator-facing EXTEND-config beats on each target.
