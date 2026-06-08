---
title: "Field note #38 — F-WF-05 incident management is Shipped: the third workflow lane lands across n8n, Temporal, and LangGraph against the same EXTEND-tests parity bar, with a cookbook page on top that walks the worked example end to end against NIS2 Article 23"
description: "Thirty-eighth field note from the SecOps-NG Digital Commons: F-WF-05 incident management flips In Progress → Shipped on the roadmap. The third workflow lane reads end to end against all three reference compile targets (n8n + Temporal + LangGraph) on top of shared primitives — typed stage clocks against NIS2 Article 23, significance and cross-border classification policy, regulator-submission contract, F-PT-02 timeline binding, DSPy signature confined to narrative-only fields — with a happy-path cross-target golden replay and a deterministic same-target replay under CI on each target, and a cookbook walkthrough that takes an operator from a typed incident signal to a closed regulator-shaped artefact on whichever of the three reference targets they already run. F-WF-01, F-WF-03, and F-WF-05 now all read Shipped against the same shape — three regulatory anchors, three shared primitives surfaces, three sets of CI contracts, three cookbook pages."
pubDate: 2026-06-08
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-05", "incident-management", "roadmap", "shipped", "primitives", "cookbook", "golden-tests", "replay-determinism", "nis2", "article-23", "compilers", "temporal", "langgraph", "n8n", "digital-commons"]
---

Field note #37 read the F-WF-05 incident-management EXTEND-tests wave
closed: the cross-target happy-path golden replay and the deterministic
same-target replay sit under CI on every one of the three reference
compile targets, matching the parity bar F-WF-01 vuln-intake and
F-WF-03 alert-triage already carry. The note named the EXTEND-docs
cookbook beat as the last move standing ahead of the Shipped flip.

This note reads that flip landed. The cookbook walkthrough is on
`main`, the roadmap reads F-WF-05 incident management as **Shipped**
alongside F-WF-01 and F-WF-03, and the third workflow lane the
launch-window set names is end-to-end runnable on every reference
target a practitioner already has in their stack.

## What this note reads off `main`

### F-WF-05 incident management — Shipped on the roadmap

The roadmap status flip lands through commit
[`1d2410b`](https://github.com/secops-ng/secops-ng-framework/commit/1d2410b)
([PR #266](https://github.com/secops-ng/secops-ng-framework/pull/266)):
F-WF-05 reads **Shipped** alongside F-WF-01 vulnerability triage and
F-WF-03 alert triage. The three workflow lanes the launch-window set
names now sit on the substrate as runnable worked examples on every
reference compile target, against shared primitives under content,
against replay-determinism and cross-target byte-parity contracts
under CI, and against operator-facing cookbook pages on top.

The regulatory anchor the F-WF-05 workflow names is
**NIS2 Article 23** — the three-stage incident reporting cadence: a
24-hour early warning, a 72-hour notification, and a one-month final
report, with the Article 23(3) significance threshold and the
Article 23(6) cross-border-impact scope read deterministically against
a closed-alphabet rule table the playbook ships under content.

The worked example reads against that anchor end to end: a typed
significant-incident signal lands, the classification primitive reads
the Article 23(3) significance verdict and the Article 23(6)
cross-border scope, the F-PT-02 timeline adapter opens a deterministic
incident timeline, the stage-clock primitive reads the per-stage due
window, the regulator-submission contract resolves the destination for
each of the three stages, the DSPy signature confines the model
surface to the narrative, root-cause, and applied-mitigations fields,
and the close step persists the regulator-shaped JSON artefact under
the path F-CP-02 reads downstream.

### F-WF-05 EXTEND-docs-cookbook: a cookbook page walks the incident-management worked example

The last beat ahead of the Shipped flip lands through
[PR #264](https://github.com/secops-ng/secops-ng-framework/pull/264):
the cookbook gains an `incident-management` walkthrough that takes an
operator from "a typed significant-incident signal lands" to "the
regulator-shaped JSON artefact reads through on the path F-CP-02
consumes" on a single page. The page reads against the same shape the
F-WF-01 vuln-intake and F-WF-03 alert-triage cookbook entries
established — same section ordering, same per-target hand-off shape,
same references block tail.

The shape an operator walks against today reads: pick a target, read
the worked-example README on that target, follow the cookbook page
through the canonical CACAO source, the closed-alphabet
classification policy, the F-PT-02 timeline binding, the typed stage
clocks against the NIS2 Article 23 beats, the per-stage
regulator-submission contract, the DSPy signature on the narrative
fields, the same-target deterministic replay test, and the
cross-target byte-parity replay test — the same sequence, in the
same words, on the same content, against whichever of the three
reference targets the operator already runs.

### The named next move

The cookbook entry names the named next move at the end of its
walkthrough: an operator picks one of the three reference targets,
clones the framework repo, reads the per-target worked-example
README on that target, runs the worked example against the checked-in
example payload, and reads the regulator-shaped JSON artefact the
close step persists. From there the operator binds the connectors
and the regulator destinations against their own environment — the
framework ships no default endpoint per the sovereign-stack
constraint, and the operator-side credentials sit on the data plane
the operator owns, not on the framework.

## What this wave closes

It closes the launch-window workflow set onto three Shipped worked
examples reading end to end against the same substrate: shared
primitives under content, byte-parity goldens across all three
reference compile targets, same-target determinism contracts under
CI, and a cookbook walkthrough an operator reads on a single page.
A practitioner walking the framework repo today finds three complete
worked examples — vuln-intake, alert-triage, and incident-management
— each readable end to end against whichever of the three reference
targets they already run, against the same shared substrate, with
three independent regulatory anchors underneath:

- **F-WF-01 vuln-intake** against NIS2 Article 21(2)(c) and Art. 21(2)(f) — vulnerability handling and disclosure.
- **F-WF-03 alert-triage** against NIS2 Article 21(2)(b) — incident handling.
- **F-WF-05 incident-management** against NIS2 Article 23 — three-stage incident reporting.

It closes the F-WF-05 shared primitives — typed stage clocks against
Article 23, significance and cross-border classification policy,
fail-closed regulator-submission contract, F-PT-02 incident-timeline
binding, and a DSPy signature confined to narrative-only free-text
fields — into a stable package other workflows can compose against.
The DSPy confinement reads against the determinism property
`docs/FOUNDATION.md` names: free-text fields where a model has
something to add are the only surface a model touches; the routing,
the classification, the timeline shape, and the regulator-submission
contract on either side are deterministic code.

## What this wave does not promise

It does not promise every NIS2 workflow lands as a worked example
in the next wave. The launch-window workflow set is complete; the
contributor playbook surface is open for community-contributed
workflows on top of the same substrate, against the same shape this
shipping wave establishes.

It does not promise an operator-side regulator-submission transport.
The worked example reads against a typed regulator-submission
contract that fails closed when no destination is configured; the
operator-side landing surface — the CSIRT-facing email, the
national-regulator portal, the sovereign submission API — sits on
top of the substrate as a community contribution, not inside the
worked example the tests guard.

It does not promise the F-WF-05 cookbook page is the final shape of
the operator documentation. The cookbook is a single page that walks
the worked example end to end; deeper operator guides — per NIS2
article, per asset class, per regulator notification SLA, per late
final-report re-entry shape — land as their own community
contributions on top of the substrate the shipping wave finishes.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against the good-first-issues on
`secops-ng-framework`, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds three
reference workflows reading end to end against three reference
compile targets, the same EXTEND-tests parity bar under CI on every
one of them, three cookbook walkthroughs against the three workflow
lanes, and the first evidence stream open under `content/evidence/`
against the F-CP-01 risk-analysis schema.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-05 EXTEND-docs-cookbook through
  [PR #264](https://github.com/secops-ng/secops-ng-framework/pull/264),
  and the roadmap status flip through commit
  [`1d2410b`](https://github.com/secops-ng/secops-ng-framework/commit/1d2410b)
  ([PR #266](https://github.com/secops-ng/secops-ng-framework/pull/266)).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-seven that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the launch-window workflow set
reads as three Shipped reference workflows against three independent
NIS2 anchors — Article 21(2)(c)/(f), Article 21(2)(b), and Article 23
— each readable end to end on every reference compile target, against
shared primitives under content, against the same EXTEND-tests parity
bar under CI, and against a cookbook walkthrough on top that takes an
operator from a typed input signal to the artefact the downstream
workflow consumes. The next moves walk the same shape onto the
community-contributed workflow surface on top of the substrate the
launch-window set finishes.

More from the lanes as the next workflow seam picks up the same
composition shape on top of the substrate this shipping wave
finishes closing.
