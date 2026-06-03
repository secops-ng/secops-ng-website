---
title: "Field note #24 — alert-triage opens as the second worked-example axis, vuln-intake gains its CORE primitives, and an EU-resident LM guard lands at compile-time"
description: "Twenty-fourth field note from the SecOps-NG Digital Commons: a second worked-example axis opens with alert-triage SKELETON across all three compile targets, vuln-intake gains four reusable CORE primitives (dedup keys, DSPy free-text signatures, EPSS canonicalisation, CVSS v3.1 parsing), and a sovereignty guard refuses non-EU LM endpoints by default at compile-time."
pubDate: 2026-06-03
author: "The SecOps-NG commons"
tags: ["shipping-update", "alert-triage", "vuln-intake", "worked-examples", "compilers", "cacao", "langgraph", "n8n", "temporal", "sovereignty", "eu-residency", "dspy", "epss", "cvss", "digital-commons"]
---

Note #23 recorded the observability axis opening through F-CR-04 on the
LangGraph target. This wave moves on three independent axes at once:
the worked-example surface widens to a second canonical playbook, the
first playbook's content primitives land in reusable form, and the
sovereignty commitment the project carries at the prose layer gains a
compile-time guard that refuses to emit an artefact pointing at a non-EU
language-model endpoint.

Ten merged PRs on `secops-ng-framework` main carry the wave.

## What landed in this wave

### A second worked-example axis: alert-triage SKELETON across all three targets

The `vuln-intake` worked example has been the single canonical playbook
the parity goldens gate against for the last several waves. With this
wave, `alert-triage` joins it as the second worked example with
SKELETON parity across every compile target the project ships:

- [PR #201](https://github.com/secops-ng/secops-ng-framework/pull/201)
  — alert-triage CACAO source. The portable playbook lands in the
  canonical four-file shape — intent, state-bindings, expected, and
  red-test contract — alongside the `vuln-intake` canonical source it
  now sits beside. The CACAO document carries the alert-triage intent
  framework-agnostic; the three compilers are what render it onto a
  runtime.
- [PR #202](https://github.com/secops-ng/secops-ng-framework/pull/202)
  — alert-triage LangGraph SKELETON. The LangGraph compiler emits the
  alert-triage graph end to end, with the same span-wrap scaffolding
  the OTel emitter wave landed and the same red-test contract gating
  the artefact shape.
- [PR #203](https://github.com/secops-ng/secops-ng-framework/pull/203)
  — alert-triage n8n SKELETON. The n8n compiler renders the same
  alert-triage intent into a no-code workflow, gated by the same
  red-test contract the LangGraph target satisfies.
- [PR #204](https://github.com/secops-ng/secops-ng-framework/pull/204)
  — alert-triage Temporal SKELETON. The Temporal compiler emits the
  durable workflow shape, closing the SKELETON contract across all
  three compile targets.

Alongside the SKELETON triple, byte-parity goldens record the artefact
shape the n8n and Temporal compilers write for the new playbook:

- [PR #208](https://github.com/secops-ng/secops-ng-framework/pull/208)
  — alert-triage Temporal byte-parity golden.
- [PR #209](https://github.com/secops-ng/secops-ng-framework/pull/209)
  — alert-triage n8n byte-parity golden.

The worked-example surface the parity goldens gate now reads two-deep
on the canonical axis: a contributor can take the alert-triage CACAO
source, point the compiler of their choosing at it, and read the same
artefact-shape contract that `vuln-intake` has carried since the
framework opened. The second axis confirms the first axis was not a
one-shot — the canonical playbook shape generalises.

### vuln-intake CORE primitives: the reusable content layer

The wave that landed `vuln-intake` SKELETON across the three targets
left the question of where the content-side primitives live — the
deterministic dedup, the structured field extraction, the EPSS and
CVSS handling — open. This wave answers it by landing those primitives
as standalone, reusable modules the per-target CORE wiring cards will
consume on the next beat:

- [PR #205](https://github.com/secops-ng/secops-ng-framework/pull/205)
  — deterministic dedup with an idempotency-key shape. The primitive
  computes a stable identity for a vuln advisory across re-ingest and
  re-emit, so a playbook re-running against the same source produces
  the same downstream action and the same audit-trail row. Idempotency
  is a content concern, not a runtime concern; landing it as a
  primitive lets the three compile targets share the same identity.
- [PR #206](https://github.com/secops-ng/secops-ng-framework/pull/206)
  — DSPy free-text signatures plus schema introspection. The
  primitive carries the typed signatures for the free-text fields a
  vulnerability advisory exposes — description, mitigation guidance,
  references — and the schema introspection that lets a compiler
  render the signature into its target's structured-output shape. DSPy
  is the declarative layer the canonical playbook reaches for; the
  primitive keeps the signatures portable across the targets.
- [PR #207](https://github.com/secops-ng/secops-ng-framework/pull/207)
  — EPSS validate and canonicalise. The primitive validates an EPSS
  score and percentile against the documented value range, normalises
  the timestamp, and produces the canonical field shape the
  alert-triage and vuln-intake intents both consume. EPSS reads the
  same way whichever compiler renders it.
- [PR #210](https://github.com/secops-ng/secops-ng-framework/pull/210)
  — CVSS v3.1 vector parse and base-score. The primitive parses a
  CVSS v3.1 vector string, validates the metric grammar, computes the
  base score against the v3.1 specification, and surfaces the
  structured metrics the playbook intent reasons over. CVSS arithmetic
  belongs in shared code the compilers share — not in each compiler's
  own emitter.

The four primitives together are what the next beat — F-WF-01 CORE
wiring across the three targets — will consume. The split lets the
content primitives carry their own tests, their own changelogs, and
their own version surface, independent of the per-target wiring that
imports them.

### F-SV-01: a sovereignty guard at compile-time

The Digital Commons prose has carried an EU-residency commitment since
the framework opened — the operator's collector is theirs, the
artefact's hosting is theirs, the LM endpoint the playbook reaches for
is theirs, and the project's bias is toward EU-resident infrastructure.
This wave moves a piece of that commitment from prose into code:

- [PR #200](https://github.com/secops-ng/secops-ng-framework/pull/200)
  — F-SV-01 EU-resident LM endpoint guard. The compiler now reads the
  LM endpoint the playbook intent reaches for, checks its declared
  residency against an allow-list of EU-resident endpoints, and
  refuses to emit the artefact by default when the endpoint sits
  outside the allow-list. An explicit opt-out is available for a
  contributor compiling against a non-EU endpoint by choice; the
  default behaviour is refusal.

The guard runs at compile-time, not runtime — the same scope as the
OTel emitter, the same scope as the parity goldens. An artefact that
the compiler emits is one whose LM endpoint passed the residency
check, and the audit-trail row the compiler records names the endpoint
the check passed. The sovereignty axis the project has carried in
prose now reads in code at the point the artefact is written.

## What this wave unlocks next

The four `vuln-intake` content primitives are the input the next beat
consumes: F-WF-01 CORE wiring across the three compile targets. Each
target's CORE wiring will import the dedup keys, the DSPy free-text
signatures, the EPSS canonicalisation, and the CVSS v3.1 parsing, and
render them into the artefact the target executes — a per-target
wiring beat that the four primitives are now ready to feed.

The `alert-triage` SKELETON triple opens the same staircase the
`vuln-intake` axis walked: CORE-PRIM primitives, per-target CORE
wiring, EXTEND beats that carry the worked-example READMEs and the
operator-facing guidance. With two worked examples now reading at the
SKELETON line, the project's content surface is wider than the
single-playbook proof the first axis carried.

F-SV-01 names the EU-resident LM guard as one face of the sovereignty
axis. The data-residency face — what the artefact carries about where
the operator's data sits — and the dependency-residency face — what
the artefact's libraries declare about their origin — are subsequent
beats on the same axis, to land on later waves.

## Community lane status

The M3 community-ignition launch post — "Open for contributors" —
landed on the website last wave
([PR #32](https://github.com/secops-ng/secops-ng-website/pull/32)),
opening the contribution surface against five good-first-issues on
`secops-ng-framework`: issues
[#193](https://github.com/secops-ng/secops-ng-framework/issues/193),
[#194](https://github.com/secops-ng/secops-ng-framework/issues/194),
[#195](https://github.com/secops-ng/secops-ng-framework/issues/195),
[#196](https://github.com/secops-ng/secops-ng-framework/issues/196),
and
[#197](https://github.com/secops-ng/secops-ng-framework/issues/197).
The lane stays open as the shipping cadence continues; a contributor
walking in from the launch post finds a repo whose main branch is
moving daily and whose worked-example surface is widening underneath
them.

## What this wave does not promise

It does not promise `alert-triage` CORE wiring is in place on any of
the three compile targets. SKELETON is the artefact-shape contract
across the targets; the CORE wiring that brings the content primitives
into the per-target emitters is the next beat on that axis.

It does not promise `vuln-intake` CORE wiring consumes the new
primitives on every target yet. The primitives are the input the per-
target CORE wiring cards will read; the wiring itself is the next
beat, one card per target.

It does not promise F-SV-01 closes the sovereignty axis. The
LM-endpoint guard is one face. Data-residency and dependency-residency
guards are subsequent beats on the same axis.

It does not promise the contributor walking in from the launch post
finds documentation for every primitive yet. The CORE primitives carry
their own tests and changelogs; the worked-example READMEs that
document how a playbook intent uses them are an EXTEND beat the next
wave will pick up.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-SV-01 EU-resident LM guard
  ([PR #200](https://github.com/secops-ng/secops-ng-framework/pull/200));
  alert-triage SKELETON across the three targets
  ([PR #201](https://github.com/secops-ng/secops-ng-framework/pull/201),
  [#202](https://github.com/secops-ng/secops-ng-framework/pull/202),
  [#203](https://github.com/secops-ng/secops-ng-framework/pull/203),
  [#204](https://github.com/secops-ng/secops-ng-framework/pull/204))
  with byte-parity goldens
  ([#208](https://github.com/secops-ng/secops-ng-framework/pull/208),
  [#209](https://github.com/secops-ng/secops-ng-framework/pull/209));
  vuln-intake CORE primitives
  ([#205](https://github.com/secops-ng/secops-ng-framework/pull/205),
  [#206](https://github.com/secops-ng/secops-ng-framework/pull/206),
  [#207](https://github.com/secops-ng/secops-ng-framework/pull/207),
  [#210](https://github.com/secops-ng/secops-ng-framework/pull/210)).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-three that preceded it, plus the M3
  launch post on
  [PR #32](https://github.com/secops-ng/secops-ng-website/pull/32).
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the worked-example surface reads
two-deep on the canonical axis, the vuln-intake content primitives sit
in reusable form ready for per-target wiring to consume, and the
compiler refuses by default to emit an artefact whose LM endpoint
sits outside the EU-resident allow-list. The second worked example is
open, the content primitives are landed, and the sovereignty axis has
its first compile-time guard.

More from the lanes as F-WF-01 CORE wiring lands across the three
targets, alert-triage walks its own staircase from SKELETON to CORE,
and the sovereignty axis grows beyond its first guard.
