---
title: "Field note #48 — F-CP-03 supply-chain evidence stream lands its three-target CORE-FANOUT wave, with the LangGraph mirror closing the n8n + Temporal parity grid and a worked example exercising the sovereignty band on a 1× EU-sovereign data feed + 1× non-EU AI provider call"
description: "Forty-eighth field note from the SecOps-NG Digital Commons: F-CP-03 — the supply-chain evidence stream — lands a full three-target CORE-FANOUT wave on the framework repo in a single hour. The lane opens with a SKELETON carrying the schema narrative, the cross-stream root, and an NIS2 Article 22 mapping stub; promotes the typed supply-chain evidence-record schema with Article 21(2)(d) tightening; lands the framework-agnostic shared emitter helper; and fans the emitter out across n8n, Temporal, and LangGraph against the same shared helper. A LangGraph worked example on vuln-intake exercises the sovereignty-band stamp on a concrete external-call surface: one EU-sovereign data feed and one non-EU AI provider call, both classified per emission. The third continuous-posture lane to reach three-target parity at the emitter layer, against a different surface of NIS2 — the supply-chain risk-management baseline and the Union-level coordinated-assessment overlay."
pubDate: 2026-06-10
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-03", "continuous-posture", "evidence-stream", "core-fanout", "supply-chain", "sovereignty", "sovereignty-band", "nis2", "article-21", "article-21-2-d", "article-22", "cooperation-group", "compilers", "n8n", "temporal", "langgraph", "worked-example", "vuln-intake", "digital-commons"]
---

Field note #47 read the F-CP-02 incidents lane flipping Proposed →
Shipped against NIS2 Article 23(4), the third continuous-posture
evidence stream in the catalogue lit end-to-end on the same substrate
the F-CP-01 risk-analysis and F-CP-04 vulnerabilities lanes closed on.

This note reads off `main` a wave on the next lane in the queue — the
**F-CP-03 supply-chain evidence stream** — and reads the wave whole on
purpose. In the same hour the F-CP-03 lane opens at SKELETON, promotes
its typed schema with the NIS2 Article 21(2)(d) tightening, lands its
shared emitter helper on the same substrate the three sibling streams
emit through, and fans out across all three reference compile targets
— n8n, Temporal, and LangGraph — with a LangGraph worked example
exercising the sovereignty-band stamp on a real external-call surface.
F-CP-03 is the third continuous-posture evidence stream in the
catalogue to reach three-target parity at the emitter layer, against a
different surface of NIS2 than the three sibling streams closed on:
Article 21(2)(d) for the supply-chain risk-management baseline and
Article 22 for the Union-level coordinated-assessment overlay.

## What this note reads off `main`

### F-CP-03 SKELETON — schema narrative, stream root, Article 22 stub

Through
[PR #285](https://github.com/secops-ng/secops-ng-framework/pull/285),
the supply-chain lane opens at SKELETON in the same shape the three
sibling lanes opened on: a contributor-facing record-schema narrative
at `content/evidence/supply-chain/SCHEMA.md`, the supply-chain entry on
the cross-stream evidence root, and an `nis2/article-22.yaml` mapping
stub naming the Cooperation-Group coordinated-assessment surface as
the regulator-visible obligation the stream reads against. The
SKELETON does not yet carry the typed schema or the emitter; it names
the shape ahead, the obligation ahead, and the worked example ahead so
a reader walking the repo at this beat already sees the lane's
contour.

### F-CP-03 SCHEMA — supply-chain evidence-record schema lands, Article 21(2)(d) tightens

Through
[PR #286](https://github.com/secops-ng/secops-ng-framework/pull/286),
the typed supply-chain evidence-record schema lands on the substrate
at `schemas/evidence/supply-chain.schema.json`. Each record is one
artifact, emitted per execution of a workflow that calls external
providers — software dependencies, hosted APIs, third-party data
feeds, AI providers, managed runtimes — and carries the dependency
surface enumerated for that execution, classified per dependency for
sovereignty.

The shared envelope mirrors the three sibling streams one-for-one:
`producing_workflow`, `run_id`, `attestation_state`, the
`attestation_state_delta`, the audit-mirror sibling pointer, and the
signing surface, all reading against the same vocabularies on the same
substrate. The stream-specific body carries the per-execution
dependency snapshot — one entry per dependency the execution touched
— each entry carrying provider identity, residency, beneficial
ownership, the sub-processor chain it sits on, and the rolled-up
**sovereignty band** computed deterministically from the three classes
above.

Alongside the schema, the Article 21(2)(d) tightening: the
risk-management mapping for the supply-chain baseline now ties the
supply-chain evidence stream's typed dependency surface to the clause
at field granularity. A reader walking from Article 21(2)(d) lands on
the schema field that discharges the obligation; a reader walking
from a supply-chain record on disk lands back at the regulator-visible
clause.

### F-CP-03 CORE-FANOUT-SHARED — the framework-agnostic emitter helper

Through
[PR #287](https://github.com/secops-ng/secops-ng-framework/pull/287),
the shared emitter helper lands at
`compilers/_shared/evidence/supply_chain.py`. Record assembly,
artifact-identifier derivation, the schema-conforming shape, the
sovereignty-band rollup binding, and the atomic write all sit on this
helper, on the same shape the `risk_analysis`, `vulns`, and
`incidents` siblings sit on. The helper imports nothing target-shaped
— no `temporalio`, no `langgraph`, no n8n shim — and does no network
I/O. Same context in, same record out, same `artifact_id`. The id is
the SHA-256 of `<workflow_id>|<execution_id>|<captured_at>`, per the
schema's `artifact_id` contract, so a replay of the same execution at
the same captured-at instant re-derives the same id and downstream
deduplication is trivial.

The CORE-FANOUT keeps the contract small on purpose. One execution
per artifact; the per-dependency sovereignty classification follows
the shared `sovereignty_band` rollup (a deterministic function of
residency, beneficial ownership, and the sub-processor-chain bands);
the `aggregates` block is optional and forwarded only when the caller
already tracks it. Per-target byte-parity goldens, the full Article 22
narrative, and the ROADMAP flip each ride their own sibling beat
ahead on the substrate.

### F-CP-03 CORE-FANOUT-N8N — the n8n adapter

Through
[PR #288](https://github.com/secops-ng/secops-ng-framework/pull/288),
the n8n target adapter binds against the shared helper. The adapter
is glue only: it accepts the surface the n8n compile target already
expects, hands the execution context to the shared helper, and
returns the written artefact path along with the deterministic
identifier. The CORE-FANOUT parity test pins the n8n adapter against
its Temporal and LangGraph siblings byte-for-byte for the same
context.

### F-CP-03 CORE-FANOUT-TMP — the Temporal adapter

Through
[PR #289](https://github.com/secops-ng/secops-ng-framework/pull/289),
the Temporal target adapter binds against the shared helper. Same
glue-only shape: the adapter wraps the helper inside the activity
surface a Temporal worker already runs, and hands the execution
context through without re-deriving any of the typed shape on the
target side. The parity test pins the Temporal adapter against its
n8n and LangGraph siblings.

### F-CP-03 CORE-FANOUT-LG SKELETON — the LangGraph node adapter

Through
[PR #290](https://github.com/secops-ng/secops-ng-framework/pull/290),
the LangGraph target adapter binds against the shared helper. The
node-adapter shape mirrors the way the `incidents`, `vulns`, and
`risk_analysis` LangGraph adapters already sit on top of their shared
helpers: a node callable on a typed graph state, with an
OpenTelemetry span keyed `node.evidence.supply_chain`, the audit-mirror
sibling appending one record per node entry so audit holds even when
no OTLP exporter is configured, and the framework itself depending on
neither `langgraph` nor `opentelemetry` at runtime — both are
reference compile-target concerns the operator wires on their side.

### F-CP-03 CORE-FANOUT-LG EXAMPLE — vuln-intake worked example

Through
[PR #291](https://github.com/secops-ng/secops-ng-framework/pull/291),
the LangGraph worked example for the supply-chain emitter lands at
`examples/langgraph/vuln-intake/`. The example wires the GraphSpec
and the generated state bindings into a runnable `StateGraph`, and
exercises the supply-chain emitter on the two external-provider
calls vuln-intake actually makes:

- One **EU-sovereign data feed** — a hosted vulnerability-intelligence
  feed running on an EU-sovereign cloud, classified by the
  sovereignty-band rollup into the EU-sovereign band on residency +
  ownership + sub-processor chain.
- One **non-EU AI provider call** — an LLM call routed through a
  non-EU AI provider, classified into a non-EU band by the same
  rollup.

The worked example does not abstract the sovereignty band away. The
emitted artifact carries both dependencies side-by-side on the same
record, each with its band stamped, and the rolled-up summary on the
record envelope reads honestly: this execution touched both bands.
An operator copying the example into their own runtime sees the
sovereignty stack working on a concrete external-call surface, not
on a synthetic stub.

## What this wave actually carries

It carries a typed evidence shape on the same substrate the three
sibling streams emit through. Every record on the supply-chain stream
validates against `schemas/evidence/supply-chain.schema.json`. The
envelope reads against the shared four-state attestation vocabulary,
the audit-mirror sibling pointer, and the signing surface that the
risk-analysis, vulnerabilities, and incidents streams already read
against. The shape does not depend on which reference compile target
emitted it.

It carries the sovereignty band as typed state on the record, not as
a free-text comment. Per-dependency, the band rolls up
deterministically from residency, beneficial ownership, and the
sub-processor chain — three classes that are each independently
typed on the schema. The emitter cannot ship a supply-chain record
that drops the band; a downstream reader cannot misread which
sovereignty surface the dependency sits on. Drift on the
classification surfaces as a type error, not as a semantic
disagreement weeks later.

It carries cross-target byte parity at emission. All three reference
target adapters — n8n, Temporal, LangGraph — sit on top of the same
framework-agnostic helper the F-CP-01, F-CP-04, and F-CP-02 lanes
closed on. Under the same execution context the three adapters
produce byte-identical JSON; the CORE-FANOUT parity test pins that
on every push.

It carries an NIS2 Article 21(2)(d) tightening at field granularity.
A reader walking from Article 21(2)(d) lands on the supply-chain
schema fields that discharge the supply-chain risk-management
obligation: the dependency enumeration, the per-dependency classes,
and the sovereignty band the operator is on record carrying for the
dependency surface. A reader walking from a supply-chain record on
disk lands back at the clause.

It carries an NIS2 Article 22 stub at the stream root. Article 22 sits
on top of Article 21(2)(d): the Cooperation-Group coordinated
risk-assessment on specific critical supply chains operates on the
per-entity inputs the framework's supply-chain stream emits. The stub
names the obligation; the full narrative — and the ROADMAP flip —
ride sibling beats ahead on the substrate.

## Where this lands the continuous-posture catalogue

The cross-stream root at `content/evidence/README.md` reads four
continuous-posture lanes lit at the emitter layer on the same
substrate:

- **F-CP-01 risk-analysis** — Shipped, NIS2 Article 21(2)(a).
- **F-CP-04 vulnerabilities** — Shipped, NIS2 Article 21(2)(e).
- **F-CP-02 incidents** — Shipped, NIS2 Article 23(4).
- **F-CP-03 supply-chain** — CORE-FANOUT landed across three targets,
  Article 21(2)(d) tightened, Article 22 stub at the stream root.
  EXTEND-tests-goldens, the full Article 22 narrative, and the
  ROADMAP flip ride sibling beats ahead.

Three of seven continuous-posture slots read **Shipped** end-to-end;
the fourth — F-CP-03 — has the emitter substrate lit on all three
reference compile targets and the Article 21(2)(d) tightening on
disk, with the closeout beats queued.

## Why the sovereignty-band stamp matters

The three sibling streams read NIS2 obligations the operator has
already framed around their own technical-and-organisational
measures: risk analysis, vulnerability handling, incident handling.
The supply-chain surface is the one where the operator is also on
record carrying obligations about **the providers themselves** — who
runs the dependency, where it runs, what jurisdiction the data and
the runtime sit under, what the sub-processor chain looks like.
Article 21(2)(d) names that surface as a baseline. Article 22 names
it again as a Union-level coordinated-assessment surface.

A free-text description of the dependency surface is not enough to
discharge either clause meaningfully. Two operators reading the same
prose can come to different sovereignty conclusions; a Cooperation-
Group assessment composing across hundreds of operator inputs cannot
even start without typed fields. The schema promoted on this wave
makes the sovereignty band a typed value on the record, computed
deterministically from typed sub-fields. The worked example
exercises that on a real two-provider surface, so the contract is
not just on paper.

## What comes next

EXTEND-tests-goldens rides ahead on the F-CP-03 lane in the same
shape the three sibling streams' goldens closed on: per-target
checked-in fixtures under `tests/fixtures/supply_chain_evidence/`,
each adapter pinned byte-for-byte against the on-disk shape, with a
silent serialisation drift from a shared-helper refactor failing the
golden for the affected target by name.

EXTEND-NIS2-MAPPING rides ahead on the Article 22 surface: the
stream-root stub turns into a clause-granularity narrative document
under `content/mappings/nis2/article-22-supply-chain.md`, in the
same shape as the Article 21(2)(a), 21(2)(e), and 23(4) narratives.

ROADMAP-FLIP rides ahead on the supply-chain row when the two
EXTEND beats close.

The good-first-issues lane on the framework repo remains open
against the catalogue, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A reader walking the framework repo today finds
three continuous-posture lanes reading **Shipped** end-to-end with
NIS2 ties at clause granularity on three distinct clauses, a fourth
lane reading three-target parity at the emitter layer with the
sovereignty-band stamp threaded through, and the typed mapping
substrate carrying its growing contributor surface on disk.

## What this note does not promise

It does not promise F-CP-03 is Shipped. The CORE-FANOUT wave is in;
EXTEND-tests-goldens, the full Article 22 narrative, and the ROADMAP
flip ride sibling beats ahead.

It does not promise the sovereignty-band rollup speaks every
operator's classification convention. The rollup is deterministic
on the three typed classes the schema carries — residency,
beneficial ownership, and the sub-processor chain — against the
shared `sovereignty_band` vocabulary. An operator whose conventions
diverge has the substrate to surface that divergence as a typed
disagreement, not a free-text one; the framework does not adjudicate
the underlying classification policy.

It does not promise Article 22 in full. The stream-root stub names
the Cooperation-Group coordinated-assessment surface as the
regulator-visible obligation the supply-chain stream reads against;
the surrounding Article 22 surface — the Member-State aggregation
pipeline, the Cooperation-Group reporting envelope, the Commission /
ENISA inputs — reads off the regulatory text the mapping points at,
not off the substrate, and stays where it lives.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-03 SKELETON through
  [PR #285](https://github.com/secops-ng/secops-ng-framework/pull/285),
  SCHEMA through
  [PR #286](https://github.com/secops-ng/secops-ng-framework/pull/286),
  CORE-FANOUT-SHARED through
  [PR #287](https://github.com/secops-ng/secops-ng-framework/pull/287),
  CORE-FANOUT-N8N through
  [PR #288](https://github.com/secops-ng/secops-ng-framework/pull/288),
  CORE-FANOUT-TMP through
  [PR #289](https://github.com/secops-ng/secops-ng-framework/pull/289),
  CORE-FANOUT-LG SKELETON through
  [PR #290](https://github.com/secops-ng/secops-ng-framework/pull/290),
  and CORE-FANOUT-LG EXAMPLE through
  [PR #291](https://github.com/secops-ng/secops-ng-framework/pull/291).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-seven that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
three slots Shipped end-to-end against three distinct NIS2 clauses,
a fourth slot with three-target emitter parity and the
sovereignty-band stamp threaded through on every supply-chain
record, and a worked example carrying the band on a concrete EU-
sovereign + non-EU two-provider surface.

More from the lanes as the F-CP-03 EXTEND beats close and the
supply-chain row turns on ROADMAP.
