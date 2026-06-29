---
title: "Field note #88 — incident_management lands on NIS2 Art. 23(4) per-clause refs, closing the last G-02 orphan on the article"
description: "Eighty-eighth field note from the SecOps-NG Digital Commons: one framework PR wires playbook.incident_management@v1 directly into the per-clause playbook_refs for NIS2 Art. 23(4)(a) early-warning, 23(4)(b) incident-notification, and 23(4)(d) final-report — and retires the matching orphan-skip. The regulator-notification engine is now an auditable artifact on the public tree, reachable from each of the three §23(4) clauses it serves."
pubDate: 2026-06-29
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-02", "f-map", "f-map-nis2", "incident-management", "nis2", "art-23", "regulatory-traceability", "orphan-ci", "digital-commons"]
---

A single framework PR closes a long-standing G-02 orphan on the NIS2
side: `playbook.incident_management@v1` — the regulator-notification
engine — is now cited directly on the per-clause `playbook_refs:` for
each of the three Art. 23(4) clauses it serves, and the matching
orphan-skip entry has been retired. The narrative document already
walked an operator through this wiring against the milestone schema;
this PR lands the citation in the machine-readable mapping so the
orphan-CI ring covers it without a skip.

## What landed

One PR against the framework, merged to `main`.

### F-MAP-NIS2 — playbook.incident_management@v1 cited on Art. 23(4) per-clause refs (PR #532)

[PR #532](https://github.com/secops-ng/secops-ng-framework/pull/532)
adds `playbook.incident_management@v1` to `playbook_refs:` on three
clauses in `content/mappings/nis2/article-23.yaml`:

- **§23(4)(a)** — the early-warning limb (24-hour window).
- **§23(4)(b)** — the incident-notification limb (72-hour window).
- **§23(4)(d)** — the final-report limb (one-month window).

The companion narrative `article-23-incident-handling.md` had already
documented this wiring against the milestone schema the playbook
emits, so the operator-facing story did not change with this PR. What
changed is the machine-readable surface: the per-clause `playbook_refs`
now name the playbook directly, which is the surface the orphan-CI
assertion walks.

The PR also removes the `incident_management` entry from
`content/mappings/nis2/_orphan_skip.yaml`. The skip was the placeholder
that kept the orphan ring honest while the citation lived only in the
narrative; the direct citation re-arms the assertion against the
playbook, which is the intended end state. The `executive_metrics`
reporting-playbook skip is left in place per the documented convention
that reporting playbooks are not expected to anchor on substantive
clauses.

## Why this reads against G-02

G-02 on the published roadmap is the regulatory-mapping coverage goal:
every shipped playbook is reachable from a clause on each regulatory
framework where it has work to do. Before this PR, `incident_management`
was reachable from NIS2 only via the narrative document and an
orphan-skip — a defensible bridge while the per-clause schema was
catching up to the way the article is shaped (three timed milestones
against one obligation chain), but a bridge that did not satisfy the
orphan-CI assertion mechanically.

After this PR, the orphan-CI lane on NIS2 reads:

```
finalized=26 mapped=25 orphans=0 grace=0 skipped=1
```

Twenty-five finalized playbooks reachable from at least one NIS2 clause
on the per-clause surface, zero orphans, zero grace-window entries, and
one skip (the `executive_metrics` reporting playbook, which is
documented as out of scope for substantive anchoring). The article that
the regulator-notification engine serves is now also the article where
that playbook is mechanically traceable to each of its three clauses.

## Sovereignty stance on this row

The wave does not change the sovereignty stance on any operational
artifact. The change is metadata against the existing mapping plus the
retirement of one skip; no playbook, primitive, control, metric, or
compiler artifact moves. The sovereignty discipline against
`incident_management` reads the same as before: operator-supplied
notification endpoint shaped against the milestone schema, no default
non-EU endpoint, no hosted third-party correlation in the data plane,
and three reference compile targets the operator runs inside their
own stack.

The traceability story does strengthen one beat. Art. 23 is the
clause where a NIS2-covered organisation has to talk to a competent
authority on a clock, and the playbook the project ships against that
article is now anchored on each of the three timed limbs as a
machine-readable artifact on the public tree — not as a project claim
in a sentence on a website, but as a row a regulator or an internal
auditor can pull and walk.

## Honest framing on what stays open

This is a narrow row. It does not flip a workflow lane to Shipped, it
does not declare a regulatory framework complete, and it does not
change what `incident_management` does at runtime. The honest open
beats:

- **G-02 catalogue depth continues.** Art. 23(4)(c) — the
  intermediate-information limb — and the rest of Art. 23 walk on
  their own cards. The narrative document on `article-23` is the
  source of truth for how those limbs relate to the milestone schema
  in the interim.
- **Orphan-CI green is a green frame, not a finished frame.** Zero
  orphans on NIS2 on the evaluation commit reflects the catalogue at
  this commit; the grace-clock discipline keeps the ring honest as
  new playbooks ship into the orphan window.
- **The skip-list is not the citation surface.** Retiring the
  `incident_management` skip is the cleanup that follows landing the
  citation, not a result on its own. The skip-list discipline (skips
  are documented and time-bounded) continues as before.

The accurate claim on this wave is: the regulator-notification engine
is now an auditable artifact on the per-clause NIS2 Art. 23(4) surface
across early-warning, incident-notification, and final-report, and the
orphan-skip that bridged the gap during the transition has been
retired.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #532](https://github.com/secops-ng/secops-ng-framework/pull/532).
  Merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-seven that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

One PR closes this window. `playbook.incident_management@v1` is cited
directly on each of the three NIS2 Art. 23(4) per-clause `playbook_refs`
that it serves — early-warning, incident-notification, and final-report
— and the orphan-skip that held the line during the transition has
been retired. The article the regulator-notification engine was always
meant to serve is now the article where the citation is mechanical.
