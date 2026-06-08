---
title: "Field note #39 — F-CP-01 CORE-FANOUT: the risk-analysis evidence emitter fans out to n8n and LangGraph, closing emitter parity across all three reference compile targets at SKELETON/CORE"
description: "Thirty-ninth field note from the SecOps-NG Digital Commons: F-CP-01 CORE-FANOUT lands the risk-analysis evidence emitter on the two remaining reference compile targets — n8n and LangGraph — on top of the Temporal SKELETON shipped earlier in the lane opening. The framework-agnostic emitter helper sits under compilers/_shared/evidence/, the three target adapters are glue only, and a CORE-FANOUT parity test pins all three writing byte-identical JSON for the same context. The first continuous-posture evidence stream is now end-to-end runnable on whichever of the three reference targets an operator already runs."
pubDate: 2026-06-08
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-01", "continuous-posture", "evidence-stream", "core-fanout", "emitter", "risk-analysis", "compilers", "n8n", "langgraph", "temporal", "byte-parity", "digital-commons"]
---

Field note #34 read the F-CP-01 continuous-posture lane opening across
three landed framework PRs: a typed risk-analysis evidence-artifact
schema under `content/evidence/`, a cross-stream index naming the
seven continuous-posture stream slots with a contributor checklist,
and an emitter SKELETON on the Temporal side writing risk-analysis
evidence-artifact records the schema reads against.

This note reads the follow-on beat: CORE-FANOUT to the two remaining
reference compile targets. The risk-analysis evidence emitter now
binds against n8n and LangGraph on the same shape the Temporal wrapper
already carried, the framework-agnostic helper underneath is the
single point that knows how to assemble a record, and a CORE-FANOUT
parity test pins all three targets writing byte-identical JSON for the
same context. The first evidence stream the substrate opened is now
runnable wherever the operator's reference target already lives.

## What this note reads off `main`

### F-CP-01 CORE-FANOUT — the risk-analysis emitter binds to n8n and LangGraph

Through
[PR #267](https://github.com/secops-ng/secops-ng-framework/pull/267),
the risk-analysis evidence emitter fans out from the Temporal SKELETON
that shipped earlier in the lane opening onto the two remaining
reference compile targets. The framework-agnostic helper lives under
`compilers/_shared/evidence/risk_analysis.py` — record assembly,
artifact identifier derivation, the schema-conforming shape, and the
atomic write all sit on that helper — and the three target adapters
are glue only: each one accepts the surface its compile target already
expects, hands the context to the shared helper, and returns the
written artefact path along with the deterministic identifier.

On the n8n side the adapter sits at
`compilers/n8n/evidence/risk_analysis_node.py` as a Python helper an
operator calls from an `executeCommand` or `Code` node. It accepts a
JSON-native payload — datetimes serialised as ISO-8601 strings, the
producing-workflow identifier, the run identifier, the evidence body —
and returns the artefact identifier and the path the schema-conforming
record was written to.

On the LangGraph side the adapter sits at
`compilers/langgraph/evidence/risk_analysis_node.py` as a plain
`state -> state` node function the integrator registers on a
`StateGraph`. It returns a partial state update carrying the written
path and the deterministic artefact identifier, ready for downstream
nodes to read against.

The Temporal wrapper that shipped with the SKELETON beat keeps its
shape unchanged — the activity wrapper continues to pick the
producing-workflow identifier and the run identifier off the workflow
context and bind them onto the record at write time. The fanout did
not move the shared helper; it added the two missing glue surfaces so
the three reference targets all read against the same emitter from
their own native shape.

### The CORE-FANOUT parity pin

The test suite under
`tests/content_model/test_risk_analysis_evidence_emitter.py` extends
to carry the parity contract the fanout asserts. A
`test_n8n_adapter_wraps_shared_helper` round-trip and a
`test_langgraph_node_wraps_shared_helper` round-trip each pin that
their adapter passes the context through the shared helper and gets
back the same `{artifact_id, artifact_path}` shape. The keystone is
`test_all_three_targets_produce_byte_identical_records` — given the
same context, the three adapters write byte-identical JSON, against
the same schema, with the same deterministic identifier, on every
pass. That is the property an operator running any one of the three
reference targets can rely on: the evidence record their pass writes
is the same record any of the other two would have written from the
same context.

Per-target byte-parity goldens against a checked-in fixture sit in the
EXTEND-tests sibling that walks in next; CORE-FANOUT pins parity
between targets, EXTEND-tests will pin parity between today's bytes
and the fixture the substrate signs against.

### Readme advances

`content/evidence/README.md` — the cross-stream index field note #34
named — now lists the adapter table with all three target bindings
filled in, and the F-CP-01 status section advances from SKELETON to
CORE-FANOUT. `compilers/_shared/evidence/README.md` carries the target
bindings table the helper now drives. A reader walking the index
today reads the seven stream slots, the risk-analysis stream lit up at
CORE-FANOUT against all three reference targets, and the six sibling
slots standing as the same shape the next streams compose into.

## What this beat closes

It closes emitter parity for the first continuous-posture evidence
stream. The F-CP-01 lane opened against Temporal at SKELETON; CORE-FANOUT
reads that opening across n8n and LangGraph against the same shared
helper, with byte-identical output pinned under CI. Whichever of the
three reference targets an operator already runs, the risk-analysis
evidence-artifact records their pass writes conform to the same schema
and resolve to the same deterministic identifier under the same
context.

It closes the bridge from playbook execution to continuous-posture
artefacts on the surface side. The audit-mirror sibling F-CR-04 put
under runtime already reads an OTel span on every pass against any of
the three reference targets; the evidence emitter now reads a typed,
schema-conforming, cadence-banded record on the same pass against any
of the three targets. The two sibling channels — audit-mirror under
runtime, evidence stream under continuous-posture — are end-to-end
runnable wherever the operator already runs.

It closes the shape the six sibling continuous-posture streams compose
into. CP-02 through CP-07 stand on the same index, against the same
schema vocabulary, with the same shared-helper-plus-three-adapters
pattern, and the same CORE-FANOUT parity contract waiting at the
sibling slot once each one's SKELETON beat opens.

## What this beat does not promise

It does not promise EXTEND-tests parity. The CORE-FANOUT pin says the
three adapters agree with each other today; the EXTEND-tests sibling
that lands next pins each adapter against a signed fixture so the
substrate carries a stable reference byte stream the goldens read
against.

It does not promise the drift-detection hook, the KRI/KPI wiring, or
the audit-lane consumption end. Each of those rides its own sibling
beat — the drift hook sits on the same fanout pattern, the KRI/KPI
binding reads off the cadence band the schema already names, and the
audit-lane reader sits on the audit lane's own composition wave.

It does not promise CP-02 through CP-07 are scaffolded. The index
names the seven stream slots; CP-01 risk-analysis is the first slot
lit up end-to-end across all three reference compile targets. The six
sibling slots compose onto the same shape as their own evidence
streams open.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against the good-first-issues on
`secops-ng-framework`, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the launch-window
workflow set — F-WF-01 vulnerability triage, F-WF-03 alert triage,
F-WF-05 incident management — all reading **Shipped** on every
reference compile target, and the first continuous-posture evidence
stream reading CORE-FANOUT against all three reference targets with a
parity pin under CI.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-01 CORE-FANOUT through
  [PR #267](https://github.com/secops-ng/secops-ng-framework/pull/267),
  on top of the lane opening through
  [PR #255](https://github.com/secops-ng/secops-ng-framework/pull/255)
  (SCHEMA),
  [PR #256](https://github.com/secops-ng/secops-ng-framework/pull/256)
  (STREAM-ROOT), and
  [PR #257](https://github.com/secops-ng/secops-ng-framework/pull/257)
  (EMITTER SKELETON).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-eight that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the risk-analysis evidence stream
reads as a fanned-out emitter substrate: a single framework-agnostic
helper under `compilers/_shared/evidence/`, three target adapters that
are glue only, and a parity test pinning the three to byte-identical
output against the same context. The next moves walk the EXTEND-tests
fixtures into the substrate and start lighting up the six sibling
continuous-posture streams against the same shape this first stream
just established end to end.

More from the lanes as the continuous-posture siblings pick up the
shape F-CP-01 just closed parity on.
