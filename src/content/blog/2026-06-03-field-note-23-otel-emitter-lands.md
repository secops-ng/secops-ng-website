---
title: "Field note #23 — the observability axis opens: F-CR-04 OTel emitter lands on the LangGraph target, SKELETON through CORE-A in one wave"
description: "Twenty-third field note from the SecOps-NG Digital Commons: the compiler-emitted OpenTelemetry scope reshaped in note #22 ships as code. Shared emitter helpers, LangGraph span-wrap, vuln-intake golden regenerated against the emitter, and observability + audit-trail assertions land across four PRs on framework main. Repo-flip blockers clear and the contributor guide is rewritten public-first alongside."
pubDate: 2026-06-03
author: "The SecOps-NG commons"
tags: ["shipping-update", "observability", "opentelemetry", "otel", "langgraph", "compilers", "audit-trail", "framework-agnostic", "content-first", "digital-commons", "repo-flip-readiness"]
---

Note #22 recorded two architectural beats — the community substrate
landing on the framework repo, and the ROADMAP retiring the F-CR-*
runtime-layer feature rows the content-first refactor made obsolete.
F-CR-04 was the one row of the four that survived in reshaped form:
the telemetry intent reshapes into compiler-emitted OpenTelemetry
scope, where each compiler writes OTel-compatible spans into the
artefact the operator's runtime executes. The acceptance criteria
landed on that wave; the SKELETON implementation was named as the
next beat.

This note records that next beat landing as code — four merged PRs
on `secops-ng-framework` main that walk the LangGraph target from
SKELETON through CORE-A, the first of the three compile targets to
carry the OTel emitter end to end.

## What landed in this wave

Four PRs against `secops-ng-framework`, all merged forward-public:

- [PR #180](https://github.com/secops-ng/secops-ng-framework/pull/180)
  — F-CR-04 SKELETON. The shared OTel emitter helpers land in a
  per-target observability module the three compilers can import,
  alongside scaffolding for an audit-trail mirror that records the
  same span shape the OTel emitter writes. The helpers cover span
  naming, attribute keys, status semantics, and the vendor-neutral
  OTLP-shape contract the operator's collector reads — framework-
  agnostic at the artefact layer, no preferred endpoint baked into
  the helpers.
- [PR #183](https://github.com/secops-ng/secops-ng-framework/pull/183)
  — F-CR-04 CORE-A1. The LangGraph emitter wires the shared helpers
  into its span-wrap pass, and `assemble.py` gains node-span
  scaffolding so each compiled node renders an OTel-named span in
  the emitted graph. The span shape matches the SKELETON contract
  one-for-one; the LangGraph emitter is the first of the three
  targets to wire it.
- [PR #184](https://github.com/secops-ng/secops-ng-framework/pull/184)
  — F-CR-04 CORE-A2. The `vuln-intake` worked example — one of the
  seven canonical playbooks the parity goldens gate — has its
  LangGraph golden regenerated against the CORE-A1 emitter. The
  `state_bindings` and the `expected.py` golden record the OTel
  span shape the emitter writes; the parity contract gains an
  observability column without losing the byte-parity guarantee on
  the existing columns.
- [PR #185](https://github.com/secops-ng/secops-ng-framework/pull/185)
  — F-CR-04 CORE-A3. The red-test contract for the LangGraph target
  gains explicit observability span assertions and audit-trail
  mirror assertions, and `regenerate.sh` is hardened so a regen run
  is idempotent against the OTel scope — running it twice produces
  byte-identical goldens.

Together the four PRs walk the LangGraph target from "the helpers
exist" through "the emitter writes the spans" and "the goldens
record the span shape" to "the red tests gate the shape and the
regen is reproducible". The SKELETON contract for F-CR-04 is met on
one of the three compile targets, and the parity goldens carry the
observability column the contract added.

## Why the OTel scope is compiler-emitted rather than runtime

The reshape note #22 recorded was the architectural choice: the
OTel signal lives in what the compiler writes into the artefact,
not in a runtime the project ships. The framework-agnostic
commitment is that an operator runs their own durable orchestrator
— n8n, Temporal, LangGraph, or a community-contributed target —
and the artefact the compiler emits is what carries the
observability shape.

That choice lets the OTel scope travel with the playbook. A
contributor who adopts a canonical CACAO source, lets the LangGraph
compiler emit the artefact, and runs it on their own orchestrator
gets the OTel spans named the same way and attributed the same way
as every other operator running that playbook. The collector the
operator points the artefact at is theirs; the shape the artefact
emits is the project's.

The audit-trail mirror is the second face of the same emitter
contract. The same span shape the OTel emitter writes to the
collector is written to a structured audit trail the operator can
keep independently of the telemetry pipeline — durable, replayable,
regulator-readable. SKELETON ships the mirror scaffolding; the
co-location decision and the plumbing are the CORE-C beat.

## What this wave does not promise

It does not promise F-CR-04 is closed across the three compile
targets. CORE-A is the LangGraph leg. The Temporal leg — emitter
span-wrap, temporal golden regen against the emitter, and the
shared vendor/OTLP/idempotency negative tests — is the CORE-B beat
and is in flight on a separate review.

It does not promise the audit-trail mirror is plumbed end to end.
The mirror scaffolding lands on SKELETON; the co-location decision
document and the plumbing across the targets are the CORE-C beat.

It does not promise the worked-example READMEs document the OTel
pattern yet. The EXTEND beat writes the per-example README guidance
and the operator collector wiring notes; it stays outstanding on a
separate review.

It does not promise a vendor-preferred OTLP endpoint or a
collector recommendation. The emitter writes vendor-neutral OTLP-
shape; the collector the artefact points at is the operator's
decision and stays out of the framework prose.

## Repo-flip readiness landed alongside

Two further merges on the same architectural axis landed in this
wave:

- The repo-flip BLOCKER pass cleared the two outstanding items
  ([PR #181](https://github.com/secops-ng/secops-ng-framework/pull/181)
  and [PR #182](https://github.com/secops-ng/secops-ng-framework/pull/182))
  — the residual private-context references the forward-public
  audit flagged are removed and replaced with community-facing
  equivalents. The substrate that note #22 recorded as the social
  layer is now sitting alongside a repo whose every file reads
  public.
- `AGENTS.md` is rewritten as a public contributor guide. The
  document the framework repo carries at its root for contributors
  walking in from a fresh clone now names the three compile
  targets, the four-file canonical playbook shape, the red-test
  contract, the parity-golden gate, and the forward-public hygiene
  the project runs every merge through. It is a contributor guide
  in the Digital Commons voice, not an internal handbook.

The ROADMAP F-CR hygiene pass also closed in this wave
([PR #178](https://github.com/secops-ng/secops-ng-framework/pull/178)
and [PR #179](https://github.com/secops-ng/secops-ng-framework/pull/179)),
recording F-CR-01/02/03/05 as Removed and reshaping F-CR-04
acceptance criteria onto compiler-emitted OTel scope — the
architectural decision note #22 named, now read on the ROADMAP in
its final shape against which this wave's SKELETON implementation
is measured.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CR-04 SKELETON
  ([PR #180](https://github.com/secops-ng/secops-ng-framework/pull/180)),
  LangGraph CORE-A1
  ([PR #183](https://github.com/secops-ng/secops-ng-framework/pull/183)),
  vuln-intake golden regen CORE-A2
  ([PR #184](https://github.com/secops-ng/secops-ng-framework/pull/184)),
  observability + audit assertions and regen idempotency CORE-A3
  ([PR #185](https://github.com/secops-ng/secops-ng-framework/pull/185)).
  Repo-flip BLOCKER closure on
  [PR #181](https://github.com/secops-ng/secops-ng-framework/pull/181)
  and
  [PR #182](https://github.com/secops-ng/secops-ng-framework/pull/182);
  ROADMAP F-CR hygiene on
  [PR #178](https://github.com/secops-ng/secops-ng-framework/pull/178)
  and
  [PR #179](https://github.com/secops-ng/secops-ng-framework/pull/179).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-two that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

Walk the framework repo today and the LangGraph compiler emits an
OTel-named span at every node in the graph it writes, gated by a
parity golden that records the span shape and a red-test contract
that asserts both the OTel scope and the audit-trail mirror. The
SKELETON helpers sit ready for the Temporal compiler to wire the
same shape on the next beat. The observability axis the project
named in the reshape is open.

More from the lanes as the Temporal leg of CORE lands, the
audit-trail mirror co-location decision closes, and the
worked-example READMEs document the pattern.
