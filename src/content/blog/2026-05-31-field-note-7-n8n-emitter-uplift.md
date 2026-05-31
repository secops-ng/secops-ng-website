---
title: "Field note #7 — the n8n emitter learns to read CACAO, and the validation sweep catches up"
description: "Seventh field note from the SecOps-NG Digital Commons: the n8n compile target stops hand-waving on action-without-commands steps and starts deriving Set-node bodies from the portable CACAO source, then the ransomware-containment and identity-compromise references get re-validated against the uplift."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "n8n", "cacao", "compile-target", "ransomware", "identity-compromise", "validation", "digital-commons", "m0"]
---

Field note #6 was about substrate density — controls and the compile-target
triplet filling in across the catalogue. This one is narrower and a level
down the stack: one of the three reference compile targets, n8n, gets
faithful to the portable source for the cases it was previously paving
over. Then the two playbooks that exercise that surface hardest get
re-validated against the new shape.

Read it as compile-target maturity, not feature work. The portable CACAO
artefact has not changed; the runtime emission has caught up to it.

## What the n8n emitter was doing before

CACAO's `action` step type covers a wide surface. Some steps carry an
explicit `commands` block — a shell line, an HTTP call, a clear thing to
execute. Others are `action` steps without `commands`: the intent is
expressed entirely in the step's `in_args`, `out_args`, and the
`x_secops_ng` extension shape. Decide, record, set, branch, route.

The n8n emitter used to emit those as placeholder Set nodes — structurally
correct, semantically empty. Faithful to the playbook shape, not faithful
to the playbook content. For demos that was acceptable; for a reference
compile target it was the kind of debt that shows up later as a quiet
mismatch between what the CACAO says and what the workflow actually runs.

## What changed

PR [#122](https://github.com/secops-ng/secops-ng-framework/pull/122)
lands the first cut of the Set-node uplift in the n8n emitter. The
SKELETON is intentionally constrained: it derives the Set node body
directly from the CACAO step's `in_args`, `out_args`, and `x_secops_ng`
metadata for the action-without-commands case. Where the portable source
has structure, the n8n workflow now carries that structure too.

Concretely, the uplift regenerates seven reference workflows and nine
goldens. The diff against the old goldens is the audit trail: every
Set node that was previously a placeholder now has a derived body
traceable to a specific field in the CACAO source. The emitter does not
invent surface; it lifts what the artefact already declared.

This is the kind of change a compile target should be able to make
without the portable layer noticing. The CACAO source files did not
change. The n8n workflows are different in body, identical in shape,
and now legibly faithful.

## Validation wave: the two playbooks that needed it most

Two of the reference playbooks lean heavily on action-without-commands
steps — the ones where most of the work is decisions and routing rather
than shell-outs. Both got re-validated against the new emitter in the
same shipping window.

- PR [#123](https://github.com/secops-ng/secops-ng-framework/pull/123)
  re-validates the CORE-ransomware-containment reference against the
  Set-node uplift. The semantic check is the interesting bit: the
  regenerated n8n workflow has to round-trip back to a structure that
  matches the CACAO source's intent, not just its skeleton.

- PR [#124](https://github.com/secops-ng/secops-ng-framework/pull/124)
  does the same for CORE-identity-compromise. Same uplift, same
  semantic validation pass. In passing, this PR also picks up a
  forward-public hygiene fix-up — internal kanban-id tokens that had
  drifted into a small number of comment fields were dropped from the
  playbook bodies. The repos are will-be-public; the bar is that every
  commit already reads like a public one.

Across the three PRs, the practical outcome is that the n8n column of
the reference compile-target matrix is no longer carrying placeholder
debt for the two playbooks where the cost of that debt was highest.

## Why this matters for the M0 framing

The Digital Commons pitch rests on one structural claim: a portable
intent artefact can be compiled into several runtimes the community
already operates, and the compilation can stay faithful enough that
operators trust what comes out. As we approach M0 — the public website,
the Digital Commons framing live — that claim has to be more than
hand-wave for the reference playbooks shipped at launch.

What this wave does is move the n8n compile target from "structurally
correct" to "faithful to source on the cases where faithfulness is
non-trivial". That is one of the three reference runtimes lining up
with the standard the substrate has been claiming for itself.

The other two — Temporal, LangGraph — sit on top of programmable
runtimes where faithfulness is more natural; n8n was the one where the
emitter had to do real work to keep up. It now does.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the CACAO playbooks, the n8n emitter, the regenerated workflows
  and goldens, the validation pass.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ones that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the kanban, the auto-generated roadmap.

If you compile any of these reference playbooks into n8n today, the
Set-node bodies you get are derived from the portable source, not
paving over it. If you spot a case the uplift does not yet cover, the
kanban is the place to flag it.

Substrate stabilising. More from the lanes as M0 approaches.
