---
title: "Shipping update — the commons starts to take shape"
description: "First field note from the SecOps-NG Digital Commons: the workflow skeleton, the evidence primitives, and the forward-public hygiene that keeps the work readable from day one."
pubDate: 2026-05-15
author: "The SecOps-NG commons"
tags: ["shipping-update", "posture-audit", "sovereignty", "temporal"]
---

This is the first field note from the SecOps-NG commons. The website is
live, the framework repository is moving, and there is enough on the
ground now to describe what is being built and why.

## What the commons is

SecOps-NG is a Digital Commons for sovereign security operations in
Europe. The premise is simple: the European regulatory baseline is
becoming a permanent feature of how organisations operate, and the
playbooks for meeting it should be shared infrastructure, not private
deliverables. The work is community-driven, auditable in the open, and
biased toward European-resident hosting and European-origin libraries.

Not a vendor. Not a consultancy. A commons.

## What landed this week

The framework now has the shape of a durable system rather than a
prototype. A canonical workflow skeleton anchors the runtime on
Temporal — durable, restartable state machines that survive worker
failures and operator restarts without losing place. On top of that
skeleton, the first two slices of the Posture Audit workflow are in
place: a Cloud Footprint Manifest schema that gives operators a shared
vocabulary for what they are auditing, and a knowledge-base lookup
adapter defined as a protocol so the commons can swap a file-backed
implementation today for richer providers tomorrow without rewriting
the workflow.

The third slice — the PostureAuditWorkflow itself — has also landed as
a skeleton, alongside a durable evidence-collector pattern that lets
long-running audits gather artefacts safely across retries and
restarts. None of this is finished work. It is scaffolding poured in
public so the next contributor can see exactly where the load-bearing
walls go.

A sovereign deployment quickstart is in the repository too, describing
a reference path on Nebul with Mistral and Temporal. It is one path,
not the path; the commons is opinionated about EU sovereignty but
agnostic about which EU operator you choose.

## Hygiene before headline features

A meaningful slice of this week's work was not features at all. It was
the forward-public hygiene that makes a repository safe to read: a
Code of Conduct, a governance document, a contributor onramp, a PR
template that points reviewers and authors at the same shared voice
guidelines, and an auto-generated roadmap so anyone passing through can
see what is next without asking. The repositories are private today and
will be public soon. The bar for what goes in is already the public
bar.

This matters because a commons is only useful if the front door is
unlocked. Documentation that arrives six months after the code does
not lower the entry barrier for new contributors; it just shifts the
work of understanding onto them.

## What the commons is not doing

A short list, because it is worth being explicit. The commons is not
publishing a compliance product. It is not selling readiness. It is
not collecting leads. The regulatory baseline is a shared condition
European organisations live under, and the response — shared playbooks,
durable workflows, evidence primitives — belongs in the open.

## How to read along

The framework, the website, and this field note all live under
[github.com/secops-ng](https://github.com/secops-ng). The repositories
are moving toward public visibility; if you want to follow the work in
the meantime, watching the organisation on GitHub is the most direct
path. Field notes will land here as the workflow lanes mature.

The press is warming up. More soon.
