---
title: "Field note #25 — severity policy composes the vuln-intake primitives, EXTEND-config documents CACAO playbook variables, and the three-target parity matrix's golden refresh closes within a single cell of completion"
description: "Twenty-fifth field note from the SecOps-NG Digital Commons: the vuln-intake CORE primitives gain a fifth member — a severity-policy module that composes CVSS and EPSS into a single decision input — EXTEND-config documents the CACAO playbook_variables decision in operator-facing form, and the three-target parity matrix absorbs the OTel emitter wrap with sixteen goldens regenerated across Temporal and LangGraph."
pubDate: 2026-06-03
author: "The SecOps-NG commons"
tags: ["shipping-update", "vuln-intake", "primitives", "severity-policy", "cvss", "epss", "cacao", "playbook-variables", "byte-parity", "goldens", "temporal", "langgraph", "n8n", "compilers", "digital-commons"]
---

Note #24 recorded the four vuln-intake CORE primitives landing as
reusable modules — dedup keys, DSPy free-text signatures, EPSS
canonicalisation, and CVSS v3.1 parsing — and left two questions open
in plain view. How do CVSS and EPSS combine into the single severity
input the playbook intent reasons over? And what shape does the
operator's per-playbook configuration take when it crosses from the
CACAO source into the compiled artefact?

This wave answers both, and closes the long-running golden refresh
that the OTel emitter wave left in its wake.

## What landed in this wave

### A fifth primitive: severity policy that composes CVSS and EPSS

CVSS is a base-score arithmetic over a vector grammar. EPSS is a
probability and a percentile over the same advisory. Neither is, on
its own, the severity input a vuln-intake playbook acts on — the
playbook needs a single ordered decision that reads "act now",
"queue", or "defer", and that decision sits on top of both inputs.

The wave that landed the four content primitives left that
composition step out by design: each primitive carries its own tests,
its own changelog, its own version surface, and the policy that
composes them sits one layer up.

That layer landed in this wave:

- [PR #211](https://github.com/secops-ng/secops-ng-framework/pull/211)
  — CORE-SEVERITY. The module imports the CVSS base-score primitive
  and the EPSS canonicalisation primitive, composes them through a
  declarative policy surface — a default policy keyed on CVSS bands
  with EPSS overrides, and a contributor-overridable policy hook that
  lets a downstream playbook substitute its own composition — and
  emits a single ordered decision the playbook intent reasons over.
  The composition is a content concern, not a per-target concern;
  every compile target reads the same severity decision because every
  compile target imports the same shared module.

The vuln-intake primitives package now reads five-deep in
`compilers/_shared/primitives/` — dedup, DSPy signatures, EPSS, CVSS,
and severity-policy — and the five together are the reusable content
layer the per-target CORE wiring beats consume on the next move.

### EXTEND-config: CACAO playbook variables, documented

The CACAO source the worked examples carry has a `playbook_variables`
shape — operator-facing configuration that crosses from the portable
playbook into the compiled artefact each compile target writes. The
shape is small, but the decisions it carries are not: what counts as
a variable versus a constant, what shape the variable's type
declaration takes, how the three compile targets each render it into
their own configuration surface, and where the variable's default
value lives when the operator does not override it.

The CACAO specification answers some of those questions and leaves
others to the downstream tooling. This wave records the answers the
project commits to:

- [PR #212](https://github.com/secops-ng/secops-ng-framework/pull/212)
  — EXTEND-config docs for CACAO `playbook_variables`. The decision
  documented in operator-facing form: the typed variable surface, the
  default-value semantics, the per-target rendering — Temporal as a
  workflow input, LangGraph as a graph state binding, n8n as a
  workflow-level constant — and the validation gate that runs at
  compile-time before any target emits.

The docs land in the framework's operator-facing surface, not the
contributor-facing one. A contributor reads the primitive's own tests
and changelog to learn what the primitive does; an operator reads the
EXTEND-config page to learn what the variable surface they will touch
looks like. Both audiences get their own surface.

### F-CR-04 three-target parity matrix: the golden refresh closes

[PR #198](https://github.com/secops-ng/secops-ng-framework/pull/198) —
the long-running stale-golden refresh on the
`ci/three-target-parity-matrix` branch — was opened to absorb the OTel
emitter wrap the F-CR-04 wave landed across the three targets through
PRs
[#180](https://github.com/secops-ng/secops-ng-framework/pull/180),
[#183](https://github.com/secops-ng/secops-ng-framework/pull/183),
[#186](https://github.com/secops-ng/secops-ng-framework/pull/186), and
[#190](https://github.com/secops-ng/secops-ng-framework/pull/190). The
emitter wrap changes the artefact-shape contract the byte-parity
goldens record — every artefact a compiler writes now carries a span
the OTel emitter named — and every golden cell that pre-dates the
emitter wrap needs to be regenerated against the new shape.

This wave closes the refresh down to a single remaining cell:

- Seven Temporal goldens regenerated to absorb the emitter-wrap
  artefact shape.
- Nine LangGraph goldens regenerated to absorb the same.
- Sixteen cells across the two targets reviewed and merged through
  the parity-matrix branch.

The one cell remaining is an n8n ransomware-containment example from
the SKELETON era of the framework, whose artefact shape pre-dates
several intervening waves. Rather than refresh that cell in place,
the project routes its work through a CORE-uplift card — the cell
will return on the byte-parity matrix once its content has been
walked up to the CORE line that the other parity cells now sit on.

With sixteen cells closed, the three-target parity matrix reads
green-but-one for the first time since the OTel emitter wave opened.
Every Temporal and LangGraph parity cell on the matrix now records
the artefact shape the OTel-emitter-wrapped compilers write; every
n8n parity cell but the one held back for CORE-uplift records the
same.

## What this wave unlocks next

The five-primitive vuln-intake content layer is now the input the
per-target F-WF-01 CORE wiring beats consume. Each target's CORE
wiring imports the dedup keys, the DSPy free-text signatures, the
EPSS canonicalisation, the CVSS v3.1 parsing, and the severity-policy
decision — and renders them into the artefact the target executes.
The wiring is per-target; the content the wiring renders is shared.

The CACAO `playbook_variables` documentation lands the operator-facing
surface in time for the next wave's worked-example READMEs to point
at it. A contributor walking in from the launch post — and an
operator reading the worked example to decide what to commit to —
both find the variable surface documented in the form the artefact
actually carries.

The closed parity matrix is the audit-trail handle the next wave
hands off to: a contributor opening a worked-example PR sees the
byte-parity goldens read green across two of the three targets and
green-but-one across the third, and the diff their PR introduces
records exactly against that baseline.

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
The shipping cadence under the launch post stays daily; a contributor
walking in this week finds the same five issues open, a worked-example
surface reading two-deep on the canonical axis, a vuln-intake content
layer reading five-deep in `compilers/_shared/primitives/`, and a
parity matrix reading green-but-one across the three compile targets.

## What this wave does not promise

It does not promise F-WF-01 CORE wiring is in place on any compile
target yet. The five-primitive content layer is the input; the wiring
that imports the layer into the per-target emitters is the next beat,
one card per target.

It does not promise the n8n ransomware-containment cell returns to
the byte-parity matrix in this wave. The cell sits behind a separate
CORE-uplift card and returns to the matrix once its content has been
walked up to the CORE line.

It does not promise the CACAO `playbook_variables` documentation
generalises to the alert-triage worked example yet. The doc lands
against the surface every CACAO source exposes, and the alert-triage
EXTEND beats — the operator-facing READMEs that walk a reader through
the alert-triage variable surface — are subsequent beats on the
alert-triage axis.

It does not promise severity-policy closes the vuln-intake content
layer. Severity is the composition step the four prior primitives
called for; the layer's shape is now five-deep, and subsequent
content primitives — what the playbook does with the severity
decision once it is in hand — sit on top of the five and arrive on
later waves.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — CORE-SEVERITY composes CVSS and EPSS
  ([PR #211](https://github.com/secops-ng/secops-ng-framework/pull/211));
  EXTEND-config documents CACAO `playbook_variables`
  ([PR #212](https://github.com/secops-ng/secops-ng-framework/pull/212));
  the three-target parity matrix's golden refresh
  ([PR #198](https://github.com/secops-ng/secops-ng-framework/pull/198))
  closes sixteen cells across Temporal and LangGraph.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-four that preceded it, plus the M3
  launch post on
  [PR #32](https://github.com/secops-ng/secops-ng-website/pull/32).
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the vuln-intake content layer reads
five-deep in shared primitive form, the operator-facing variable
surface is documented in its own EXTEND-config page, and the
three-target byte-parity matrix reads green across every Temporal and
LangGraph cell with one n8n cell held back for CORE-uplift. The
composition step is landed, the operator surface is named, and the
parity matrix is one cell away from a clean grid.

More from the lanes as F-WF-01 CORE wiring lands across the three
compile targets, the n8n ransomware-containment cell walks its way
back to the matrix through CORE-uplift, and the vuln-intake content
layer grows beyond severity into what the playbook does with the
decision once it is in hand.
