---
title: "Field note #125 — the cookbook is complete: every shipped playbook now carries a practitioner walkthrough, and the operator on-ramp is end-to-end (G-01/G-07)"
description: "Field note one hundred and twenty-five from the SecOps-NG Digital Commons. As of tonight every shipped playbook in content/playbooks/ has a matching practitioner walkthrough in docs/cookbook/. Thirty-three playbooks, thirty-three walkthroughs, one-to-one. Combined with the sovereign operator quickstart guide landed two field notes ago, the framework now carries a documented on-ramp from bare EU-sovereign infrastructure to any of the shipped playbooks running end-to-end, with zero documentation debt in between."
pubDate: 2026-07-05
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-07", "cookbook", "playbooks", "operator-on-ramp", "documentation", "digital-commons", "field-note-125"]
---

Field note one hundred and twenty-five. Two recent cookbook
merges — an asset-management walkthrough and a DORA ICT-risk
self-assessment walkthrough — closed a slower axis that has
been advancing one playbook at a time for months: the
cookbook. Every shipped playbook in the framework tree now has
a practitioner walkthrough sitting next to it. One-to-one, no
gaps.

## What is complete

Under `content/playbooks/` in the framework repository, each
canonical playbook directory carries the CACAO source of
truth, orchestrator adapters, and content. Under
`docs/cookbook/`, each of those playbooks now has a matching
`.md` file that walks a real operator through adopting it —
from the CACAO topology down to running the compiled artifact
against a chosen target.

The pairing is total. Every canonical playbook directory in
the tree has a corresponding cookbook entry with the same
name. The cookbook README indexes them. No shipped playbook
requires an operator to reverse-engineer the CACAO source or
piece together the compile invocation from tests.

## What each walkthrough carries

The walkthroughs follow the same shape end to end, and the
shape is deliberate:

- **CACAO playbook topology.** The workflow, the steps, the
  control-flow, and the variables the playbook expects —
  read from the CACAO source, explained in operator terms
  rather than schema terms.
- **Cross-target compile examples.** Each walkthrough shows
  the compile invocation for at least two of the four
  supported targets — n8n, Temporal, LangGraph, and, where
  applicable, the reference runtime — so an operator with an
  existing orchestrator finds their target rather than being
  told to adopt a new one.
- **Regulatory anchors.** Where a playbook maps onto NIS2,
  DORA, CRA, or GDPR obligations, the walkthrough names the
  articles it touches and links to the article YAMLs and
  OSCAL component definitions in `content/mappings/`. The
  four-regime OSCAL ring that closed in field note #124 is
  the machine-readable half of this; the cookbook is the
  practitioner half.
- **Sovereign deployment guidance.** Where a playbook has
  deployment shape — where it lives, what it needs from the
  underlying infrastructure — the walkthrough points at the
  sovereign quickstart guide rather than duplicating it,
  keeping deployment guidance canonical in one place.

## Why this is a G-01 moment

G-01 is the content-coverage goal: shipped playbooks should be
adoptable, not archaeological. A CACAO file alone is a data
artifact; a CACAO file with a walkthrough is an on-ramp. The
cookbook has been the difference between an operator being
able to skim a playbook and understand what it does, and an
operator being able to run it against their own orchestrator
in an afternoon.

For most of the framework's life the cookbook trailed the
playbook set — some playbooks had walkthroughs, some did not,
and an operator evaluating adoption had to first check
whether their target playbook was one of the covered ones.
That asymmetry is now gone. Whichever playbook an operator
reaches for, the walkthrough is there.

## Why this is also a G-07 moment

G-07 is the operator-adoption signal goal: the framework
should be legible to a security engineer arriving cold, with
no prior context on the project. The cookbook completion,
taken alongside the sovereign quickstart guide that landed in
field note #123, closes the two ends of an operator on-ramp
that used to have gaps in both directions:

- Deployment side: the quickstart carries an EU-sovereign
  operator from bare infrastructure to a running SecOps-NG
  installation.
- Content side: the cookbook carries that same operator from
  a running installation to any of the shipped playbooks
  compiled against their orchestrator of choice and executing
  end to end.

A security engineer at an EU mid-market organisation can now
evaluate SecOps-NG without writing internal documentation to
bridge the framework's gaps, because the gaps have been
written down inside the framework. That is the whole point of
a Digital Commons carrying its own operator documentation
rather than expecting a vendor relationship to fill the void.

## Bring your own orchestrator, no documentation debt

The compile-to-many-targets posture of the framework — CACAO
as source of truth, adapters into n8n, Temporal, LangGraph,
and the reference runtime — has always been the story of
respecting the orchestrator an operator already runs. What
was missing until now was the documentation half of that
story. It is entirely possible to ship a technically portable
framework whose documentation is only complete for one
target. The cookbook completion is the assertion that this is
not what SecOps-NG is: every playbook, on every documented
target, is walked through in the same shape.

There is no target the operator is nudged toward. The
walkthroughs do not privilege one adapter over another. The
choice of orchestrator stays where it should — with the
operator.

## Where to look

- **Framework repo:**
  - `content/playbooks/` — the shipped playbook set, one
    directory per playbook, CACAO source of truth inside.
  - `docs/cookbook/` — the walkthrough set, one `.md` per
    playbook, indexed by `docs/cookbook/README.md`.
  - `content/mappings/` — the regulatory article YAMLs and
    OSCAL component definitions that the walkthroughs link to
    where a playbook maps onto NIS2, DORA, CRA, or GDPR
    obligations.
  - `docs/deploy/sovereign-quickstart.md` — the deployment
    complement to the cookbook, covered in field note #123.

For any operator who has been waiting for the moment where
the framework's practitioner surface catches up with its
technical surface: this is that moment. The cookbook is not a
partial artefact anymore. Whichever playbook you reach for,
the walkthrough is there.
