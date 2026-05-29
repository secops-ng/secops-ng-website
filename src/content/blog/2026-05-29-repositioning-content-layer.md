---
title: "The missing layer — why portable SecOps content needs a commons above the standards"
description: "SecOps-NG repositions: not a framework, not a runtime. A curated content + structure + metrics layer that sits above Sigma, CACAO, OSCAL, D3FEND, and OCSF — and compiles into the orchestrator each operator already runs."
pubDate: 2026-05-29
author: "The SecOps-NG commons"
tags: ["repositioning", "cacao", "sigma", "oscal", "d3fend", "ocsf", "sovereignty", "digital-commons"]
---

A short note up front: this is a repositioning, not a relaunch. The
commons is the same commons. The work landing in the open is the same
work. What follows is a clearer statement of what SecOps-NG is for —
written now that there are working artifacts to point at, rather than
intent to describe.

## The shape of the gap

Security operations already has a lot of good portable standards.

[Sigma](https://sigmahq.io) is the lingua franca for detection rules.
Write the logic once, translate into whichever SIEM the operator runs.
The problem of *portable detection content* is, broadly, solved.

[CACAO v2](https://www.oasis-open.org/committees/cacao/) is the OASIS
standard for portable response playbooks — a JSON shape that describes
incident workflows independently of any SOAR vendor. The standard is
real. The adoption is thin. There is very little curated CACAO content
in the open, very little tooling, and almost no reference path from a
CACAO playbook to a runtime an operator can actually execute.

[OSCAL](https://pages.nist.gov/OSCAL/) and
[D3FEND](https://d3fend.mitre.org) give the controls vocabulary.
[OCSF](https://schema.ocsf.io) gives the data shape on the wire. Each of
those standards solves a layer of the problem the way Sigma solves
detection: cleanly, portably, in the open.

The gap is *above* those standards. It is not a missing format. It is
the missing layer of curation, cross-standard mapping, an open metrics
catalogue, and the reference compilers that turn portable content into
something a SOC actually runs on the orchestrator it already pays for.

That layer is what the commons builds.

## What this is, in five primitives

The canonical content model is now landed and tested in the open. Five
schemas, one stable-ID convention, one worked end-to-end example.

- **Playbook** — a CACAO-aligned response workflow. Portable JSON.
- **Detection** — Sigma rule references, not a re-implementation.
- **Control** — OSCAL and D3FEND identifiers, mapped to the playbooks
  and detections that exercise them.
- **Telemetry** — OCSF event-class shape for the data each step
  consumes and emits.
- **Metrics** — an open KPI/KRI catalogue. MTTD, MTTR, telemetry
  coverage, control effectiveness — defined once, reused across
  playbooks, computed against the telemetry the playbook actually
  produced.

Each primitive carries stable identifiers so a control written today
keeps pointing at the same detection a year from now, even after the
detection rule has been refactored upstream.

The five-layer model sits in `content-model/` in the framework repo.
The first worked example — a vulnerability-intake playbook with its
detection, control, telemetry, and metrics — ships under
`content-model/examples/vuln-intake/`. The schemas, the example, and
the metrics objects are all on `main`, all green under the test suite,
all readable in a browser.

## Bring your own orchestrator

The other half of the gap is the runtime question. The commons takes a
hard position here: the canonical artifact is portable; the orchestrator
is the operator's choice.

Three reference compile targets land at launch. Each takes the same
canonical CACAO playbook as input and produces an executable in a
runtime the wider community already runs:

- **n8n** — the no-code path. The compiler reads the playbook and emits
  a workflow JSON an n8n instance can import directly. A golden test
  pins the compiled output for the vuln-intake example.
- **Temporal** — the durable-code path. The compiler emits a Temporal
  workflow definition so steps survive restarts, retries, and operator
  intervention without losing state.
- **LangGraph** — the agentic path. The compiler emits a TypedDict state
  schema, `@tool` bindings, and an agentic hook for operators who want
  language-model reasoning in the loop.

Each of the three compilers ships with a quickstart and a sovereignty
note in `compilers/<target>/`. None of the three is the canonical
runtime. They are three reference paths, and there is room for more —
community-contributed compilers for MindStudio, Make, Zapier, StackAI,
CrewAI, or anything else operators bring to the commons.

The commons does not ship a runtime of its own. It will not.

## Why "above the standards" matters for sovereignty

The European regulatory baseline — NIS2, DORA, CRA — does not mandate
any particular SecOps platform. It mandates outcomes: detect, respond,
report, demonstrate. Operators are free to choose how, and free to host
where.

The honest read of the current landscape is that operators end up
choosing whichever vendor's interpretation of those outcomes is most
convenient to procure. That is a soft lock-in problem. Once the
playbooks, the data model, and the metrics live inside a single
vendor's product, portability is rhetorical.

A content layer above the open standards solves that softly, without
needing to convince anyone to migrate. The playbook is portable because
CACAO is portable. The detection is portable because Sigma is portable.
The telemetry is portable because OCSF is portable. The metrics catalogue
is open because the commons publishes it. An operator who today runs on
one orchestrator and tomorrow needs to move to a European-resident one
keeps the content; only the compile target changes.

Sovereignty here is not a sales point. It is what a public-good content
layer happens to enable, by not being a product.

## Where the work is

- `secops-ng-framework` — the content model, the worked example, the
  three reference compilers. Moving toward public visibility.
- `secops-ng-website` — this note, the field notes that preceded it,
  and the landing surface. Also moving toward public visibility.
- `github.com/secops-ng` — the umbrella. Issues, design discussions,
  and the kanban-driven roadmap all live here.

If you build, run, or maintain SecOps in Europe — on n8n, on Temporal,
on LangGraph, on something else — the commons would like to know which
playbooks you would write first, which standards you would map against,
and which metrics you would want defined once and reused. There is no
membership form. The work happens in the open.

More soon, from the lanes.
