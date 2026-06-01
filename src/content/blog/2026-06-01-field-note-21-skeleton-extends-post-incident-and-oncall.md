---
title: "Field note #21 — the worked-example axis extends: post-incident-review and on-call-rotation walk onto three-target byte-parity"
description: "Twenty-first field note from the SecOps-NG Digital Commons: two further SKELETON three-target byte-parity goldens land on framework main — post-incident-review and on-call-rotation — extending the worked-example axis without touching the control-map triangle. Seven reference playbooks now carry the same red-test contract across n8n, Temporal, and LangGraph."
pubDate: 2026-06-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "parity", "three-target", "cacao", "n8n", "temporal", "langgraph", "compile-target", "golden-tests", "worked-examples", "post-incident-review", "on-call-rotation", "digital-commons", "m0"]
---

Note #20 closed the OSCAL trio CORE on the canonical clauses of NIS2,
DORA, and CRA, and moved the identity-compromise n8n leg onto the
canonical four-file shape that the other reference playbooks already
carry. The control-map triangle on the regulatory axis read closed at
CORE across all three columns; the worked-example axis carried the
five reference playbooks at three-target byte-parity that note #15
named as the M0 closure.

This note records two further additions on the worked-example axis.
The control-map triangle is unchanged — no clause moved, no crosswalk
shifted. What landed is two further playbooks walking onto the same
red-test contract every reference playbook already carries.

## What landed in this wave

Two PRs against `secops-ng-framework`, both merged forward-public:

- [PR #174](https://github.com/secops-ng/secops-ng-framework/pull/174)
  — SKELETON three-target byte-parity golden for post-incident-review.
  The CACAO source under `playbooks/post-incident-review/` compiles
  through `tools.compile` against the n8n, Temporal, and LangGraph
  emitters; the golden test regenerates each artefact and asserts
  byte-equality against what is committed, the same shape every prior
  parity golden carries. Deterministic regeneration is verified — two
  runs of `regenerate.sh` produce byte-identical artefacts on every
  target.
- [PR #175](https://github.com/secops-ng/secops-ng-framework/pull/175)
  — SKELETON three-target byte-parity golden for on-call-rotation.
  Same shape: one CACAO source, three emitted workflows, three
  byte-equality assertions, an artefact-existence guardrail, and a
  determinism guardrail underneath. The on-call-rotation source covers
  the rotation handover, escalation chain, and the acknowledgement
  timer the rest of the operational set already references.

Each PR is a worked-example axis extension. Neither touches
`content/mappings/`, `content/controls/`, or the OSCAL
component-definitions; the regulatory axis carries the same shape
it carried at the close of note #20.

## Where the parity count now stands

The byte-parity column on three-target compile carries:

- ransomware-containment
- cloud-misconfiguration
- data-exfil
- identity-compromise
- vuln-intake
- post-incident-review (this wave)
- on-call-rotation (this wave)

Seven reference playbooks, each row carrying the same red-test
contract on all three compile targets, each compile target producing
the same emitted workflow byte-for-byte against what is committed.
The compile-target axis the M0 line named is the same axis these two
rows extend.

## Why two SKELETONs and not CORE

The SKELETON tier on the worked-example axis records that the playbook
compiles end-to-end through every emitter and that the artefacts
regenerate deterministically. CORE on that axis records that the
playbook's CACAO steps resolve back through the controls catalogue
to entries in the regulatory mappings — the same resolver gate the
control-map triangle uses for its `control_ref` and `source-entry-id`
pairs.

Post-incident-review and on-call-rotation will walk onto CORE once
their `control_ref` annotations land against the canonical clauses
the regulatory axis already carries. The SKELETON tier shipping first
is the same pattern the prior worked-example PRs followed: parity
contract first, control-map resolution underneath.

## Where the artifacts live

Contributors can read the substrate directly:

- `playbooks/post-incident-review/` in `secops-ng-framework` — CACAO
  source, the three `examples/<target>/post-incident-review/`
  directories on canonical four-file shape, and the three-target
  byte-parity golden under `tests/`.
- `playbooks/on-call-rotation/` in `secops-ng-framework` — same shape,
  same canonical layout, same parity golden.

The pattern a reader sees on disk is the one the prior five reference
playbooks already carry: one CACAO file, three emitter directories,
one golden per playbook that gates all three targets together.

## What the wave does not promise

It does not promise the worked-example axis is closed. The catalogue
carries more playbooks than the seven the parity column now lists,
and each unswept playbook stays on prior layouts until its SKELETON
PR lands.

It does not promise CORE on the worked-example axis is reached for
these two playbooks. The CORE pass is the `control_ref` resolution
work that follows the SKELETON parity contract; it is the next step
on these two rows, not a step this wave commits to.

It does not promise the control-map triangle moved. The regulatory
axis carries the shape note #20 closed on: NIS2, DORA, and CRA at
CORE on the canonical clauses, on a single OSCAL component-definition
shape and a single per-article-clause directory layout.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the post-incident-review parity golden
  ([SKELETON #174](https://github.com/secops-ng/secops-ng-framework/pull/174))
  and the on-call-rotation parity golden
  ([SKELETON #175](https://github.com/secops-ng/secops-ng-framework/pull/175)).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the kanban, the auto-generated roadmap.

Walk any of the seven worked examples on the substrate today and the
CACAO source compiles, the three emitted workflows regenerate
byte-for-byte against what is committed, and the parity golden gates
the contract. One shape, three targets, seven rows.

More from the lanes as the SKELETON sweep walks onto the next
playbook and the CORE resolution work catches up underneath.
