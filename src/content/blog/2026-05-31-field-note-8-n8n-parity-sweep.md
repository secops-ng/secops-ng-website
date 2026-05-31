---
title: "Field note #8 — the n8n compile target catches up to the reference set"
description: "Eighth field note from the SecOps-NG Digital Commons: with the Set-node emitter uplift in hand, the n8n column of the reference compile-target matrix gets filled in across cloud-misconfiguration, data-exfiltration, threat-intel-ingest, vuln-intake, post-incident-review, and on-call-rotation — cross-target parity for the launch playbook set is now substantively complete."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "n8n", "cacao", "compile-target", "parity", "digital-commons", "m0"]
---

Field note #7 was about one compile target learning to read its source
faithfully — the n8n emitter's Set-node uplift, plus the two playbooks
that exercised the new shape hardest. This one is the follow-through:
with the emitter doing real work, the n8n column of the reference
matrix gets filled in across the rest of the launch playbook set.

Read it as parity, not novelty. The portable CACAO artefacts have not
moved. The n8n worked examples that sit next to them have caught up,
and they did so under one regeneration pattern instead of several.

## What "cross-target parity" means here

The Digital Commons substrate ships three reference compile targets —
n8n for the no-code lane, Temporal for the durable-code lane, LangGraph
for the agentic lane. The bar for a reference playbook at M0 is that
each runtime column carries something honest: either a faithful worked
example, or an explicit skeleton with the reason it is still a skeleton.

For most of the playbook set, the Temporal and LangGraph columns landed
first because their runtimes are programmable and the emitters can
express CACAO shapes directly. n8n was the column that lagged — and
field note #7 was about closing the emitter-side gap. This wave is
about pushing that closed gap through the rest of the catalogue.

## The CORE uplifts

Four CORE playbooks get the same shape of change in the same shipping
window: a `regenerate.sh` next to the n8n worked example so the
workflow is reproducible from the CACAO source on demand, and — where
it was missing — a co-located CACAO mirror so the worked example sits
next to the artefact it was derived from instead of pointing into the
catalogue.

- PR [#129](https://github.com/secops-ng/secops-ng-framework/pull/129)
  uplifts the cloud-misconfiguration n8n CORE example. The
  `regenerate.sh` follows the pattern the Set-node uplift made
  possible; the co-located CACAO mirror means a reader can audit the
  worked example without leaving the playbook directory.
- PR [#130](https://github.com/secops-ng/secops-ng-framework/pull/130)
  does the same for the data-exfiltration CORE example, and the
  `workflow.n8n.json` lines up with the regenerated output so the
  committed artefact and the regeneration step agree.
- PR [#131](https://github.com/secops-ng/secops-ng-framework/pull/131)
  applies the pattern to threat-intel-ingest. Same regenerate script,
  same co-located CACAO mirror, same audit trail.
- PR [#132](https://github.com/secops-ng/secops-ng-framework/pull/132)
  finishes the CORE sweep on vuln-intake, and adds a short
  Set-node-uplift README next to the worked example so a reader who
  is meeting the pattern for the first time can see what the emitter
  is now doing without having to read field note #7 first.

The structural change is small per playbook and uniform across all
four: `regenerate.sh` plus the co-located CACAO mirror, both pointing
at the same emitter behaviour described in field note #7. That
uniformity is the point — operators reading any of these examples
should not have to learn a new shape per playbook.

## The cross-target SKELETON + EXTEND wave

Alongside the CORE uplifts, two playbooks pick up the n8n column
that they were previously carrying as an empty slot, and one of
those gets its Temporal column extended in the same window so the
three-target matrix moves together.

- PR [#128](https://github.com/secops-ng/secops-ng-framework/pull/128)
  lands the n8n and Temporal SKELETON for post-incident-review.
  Skeletons here mean honest skeletons: the structure is there, the
  hand-waving is explicit, and a contributor who wants to flesh out
  the runtime body has a known starting point.
- PR [#126](https://github.com/secops-ng/secops-ng-framework/pull/126)
  adds the on-call-rotation n8n SKELETON, and PR
  [#127](https://github.com/secops-ng/secops-ng-framework/pull/127)
  extends the on-call-rotation Temporal column to match. The pair is
  the cleanest illustration of the parity rule for this milestone:
  when a column moves on a playbook, the row should not be left
  visibly lopsided behind it.

## Where the matrix sits now

Across the launch playbook set, the n8n column carries one of two
shapes everywhere: a faithful worked example derived from CACAO via
the uplifted emitter, or an honest skeleton with the work it is
deferring named in the README. There are no placeholder Set-node
workflows pretending to be worked examples; there are no empty
columns pretending to be future work.

That is what cross-target parity means at M0. Not "every runtime
ships every playbook to the same depth" — that bar belongs to M1 —
but "every runtime column is in one of a small number of well-named
states, and a reader can tell at a glance which state they are
looking at."

## Why this wave matters

The Digital Commons claim is that a portable intent artefact can be
compiled into runtimes a community already operates, and that the
compilation stays faithful enough that operators trust the output.
Field note #7 made that true for one emitter's hardest case. This
wave makes it true across the launch playbook set, under one
regeneration pattern, with the co-located CACAO mirrors making the
provenance visible from inside each playbook directory.

The portable layer did not change. The runtime examples around it
caught up. That is the kind of substrate work that lets the public
M0 framing rest on something concrete: walk into any reference
playbook directory, and the three runtime columns are either
honestly worked or honestly skeletal — same uniform shape across
the catalogue.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the CACAO playbooks, the n8n worked examples and their
  `regenerate.sh`, the co-located CACAO mirrors, the SKELETON +
  EXTEND pairs.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ones that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you compile any reference playbook into n8n today, what you get
out is either a derived worked example or a labelled skeleton, with
the regenerator next to it. If a column reads as the wrong shape
for what it is doing, the kanban is the place to flag it.

n8n column substantively at parity. More from the lanes as M0
approaches.
