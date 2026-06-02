---
title: "Field note #22 — community substrate lands on framework, ROADMAP retires the F-CR-* runtime features the architecture no longer carries"
description: "Twenty-second field note from the SecOps-NG Digital Commons: the framework repo gains its public-contributor substrate (CONTRIBUTING, CODE_OF_CONDUCT, GOVERNANCE, SECURITY), and the ROADMAP retires the F-CR-01/02/03/05 runtime-layer feature definitions that the content-first refactor made obsolete. Two integrity beats — one forward, one tail — landing as one merge wave."
pubDate: 2026-06-02
author: "The SecOps-NG commons"
tags: ["shipping-update", "community", "governance", "contributing", "code-of-conduct", "security-policy", "roadmap", "content-first", "framework-agnostic", "digital-commons", "repo-flip-readiness"]
---

Note #21 extended the worked-example axis with two further SKELETON
three-target byte-parity goldens — post-incident-review and
on-call-rotation — bringing seven reference playbooks onto the same
red-test contract across n8n, Temporal, and LangGraph. The control-map
triangle on the regulatory axis read closed at CORE on its canonical
clauses; the worked-example axis carried seven rows at parity.

This note records two beats on a different axis: the public-contributor
substrate the framework repo needs before it can flip from private to
public, and the ROADMAP cleanup that retires feature definitions the
architecture no longer carries.

## What landed in this wave

Two PRs against `secops-ng-framework`, both merged forward-public:

- [PR #177](https://github.com/secops-ng/secops-ng-framework/pull/177)
  — community substrate. `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`,
  `GOVERNANCE.md`, and `SECURITY.md` land at the framework repo root.
  The contributor guide names the three reference compile targets the
  catalogue ships against (n8n, Temporal, LangGraph) and the four-file
  canonical playbook shape the parity goldens gate. The governance
  document records the commons-stewardship posture — community-driven,
  non-commercial, framework-agnostic — and the security policy names
  the disclosure channel and the response window the project commits
  to. None of these documents promises a runtime, an engine, or a
  vendor relationship; the framework-agnostic commitment carries
  through every paragraph.
- [PR #178](https://github.com/secops-ng/secops-ng-framework/pull/178)
  — ROADMAP cleanup. The F-CR-01, F-CR-02, F-CR-03, and F-CR-05 feature
  rows are marked **Removed**. F-CR-04 is reshaped to compiler-emitted
  OpenTelemetry scope (the OTel signal lives in what the emitter writes,
  not in a runtime the project ships); the F-CR-04 reshape lands on a
  separate review (PR #179). The four removed rows defined a runtime
  layer the project stopped shipping when PR #34 retired the runtime
  in favour of the content-first architecture; the feature definitions
  no longer fit the codebase and now read as such on the ROADMAP.

Together these two merges sit on the same architectural beat from
opposite ends — the forward beat is the substrate that lets the
public-contributor lane open; the tail beat is the ROADMAP keeping
its own architectural promises visible after a refactor that retired
a layer.

## Why the community substrate matters now

The framework repo is staged to flip from private to public. The
parity goldens, the OSCAL component-definitions, the controls
catalogue, the worked examples, and the three reference compilers
are the technical substrate the flip will publish. The community
substrate is the *social* layer the flip needs alongside the
technical layer.

`CONTRIBUTING.md` names the canonical playbook shape a contribution
walks onto: one CACAO source, three emitter directories, one parity
golden gating all three targets together. The Pull Request template
references the red-test contract and the forward-public hygiene
the project runs every merge through. `CODE_OF_CONDUCT.md` adopts
the Contributor Covenant baseline. `GOVERNANCE.md` records who
owns merge authority on which surface — content vs. compilers vs.
control mappings — and how disagreements are resolved on the
public-substrate path. `SECURITY.md` names the disclosure channel
and the triage window.

A reader who clones the repo on flip day will find four documents
at the root that say, in plain language: what the project ships,
what shape a contribution takes, how the community decides, and how
to report a security issue. That is the substrate the public flip
needs and the substrate that was missing.

## Why the F-CR-* removals matter

The ROADMAP carries a per-feature table. Each row names a feature
identifier, a tier (SKELETON / CORE / EXTEND), a status, and a
short description of what shipping that feature looks like. The
F-CR-* rows defined runtime-layer features — execution semantics,
runtime telemetry, in-process control-flow — that fit the
architecture the project carried *before* the content-first
refactor.

PR #34 retired that runtime layer. The project's commitment after
that merge is framework-agnostic: content + structure + metrics +
compilers, executed by whatever durable orchestrator an operator
already runs. A runtime-layer feature row on the ROADMAP after that
merge reads as a promise the architecture no longer carries.

Marking F-CR-01/02/03/05 Removed is the integrity tail of the
architectural decision: the ROADMAP now matches what the codebase
actually ships. F-CR-04 is the one row of the four that survives
in a reshaped form — the telemetry intent reshapes into
compiler-emitted OpenTelemetry scope, where the compiler writes
OTel-compatible spans into the artefact the operator's runtime
executes. That reshape sits on its own review (PR #179) and is
not closed by this wave.

## What this wave does not promise

It does not promise the framework repo flips public on this beat.
The substrate landing is one of the gates on the flip; the
forward-public audit pass across the whole repo is a separate
checkpoint and stays outstanding.

It does not promise F-CR-04 is closed. The compiler-emitted OTel
scope is still in review on PR #179 and the ROADMAP row will move
when that lands.

It does not promise the control-map triangle moved or that the
worked-example axis gained a row. The regulatory axis carries the
shape note #20 closed on; the worked-example axis carries the seven
rows note #21 extended it to. Neither moved on this wave.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the community substrate
  ([PR #177](https://github.com/secops-ng/secops-ng-framework/pull/177))
  and the ROADMAP cleanup
  ([PR #178](https://github.com/secops-ng/secops-ng-framework/pull/178)).
  The reshape of F-CR-04 into compiler-emitted OTel scope is on
  [PR #179](https://github.com/secops-ng/secops-ng-framework/pull/179),
  still in review.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-one that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the kanban, the auto-generated roadmap.

Walk the framework repo today and the four community files read at
the root next to the catalogue, the compilers, and the parity goldens.
The ROADMAP reads what the codebase ships, not what an earlier
architecture promised. Two beats, one wave, same commitment the
project has carried since the content-first refactor: framework-
agnostic, no runtime, content + structure + metrics + compilers.

More from the lanes as the substrate audit closes and the F-CR-04
reshape lands.
