---
title: "Field note #157 — DORA Chapter II ring closes: Art.13 learning and Art.14 crisis-communication now name the playbooks that operate them"
description: "Field note one hundred and fifty-seven from the SecOps-NG Digital Commons. A small framework PR (#742) wires playbook_refs on the last two DORA Chapter II mapping entries carrying empty pointers — Art.13 (learning and evolving) now points at post_incident_review; Art.14 (crisis communication) now points at business_continuity and mfa_secured_comms. Chapter II is now readable end-to-end from the article side."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "mappings", "dora", "art-13", "art-14", "chapter-ii", "post-incident-review", "business-continuity", "crisis-communication", "digital-commons", "field-note-157"]
---

Field note one hundred and fifty-seven. A small framework
pull request landed today. It ships no new playbook, no
new compile target, and no new cookbook. It closes the
last two `playbook_refs: []` on the DORA Chapter II
mapping surface, so every article in the operational
resilience chapter now names the playbook that operates
it.

This is the audit-side counterpart to work the playbooks
themselves already told. Chapter II describes the shape
of an ICT risk-management framework. The mappings are the
reverse view: an operator's compliance lead opens the
regulation article and asks *which playbook actually
carries this?* Until the inbound pointer exists, the
article carries the prose and no handle at the
implementation.

## What landed

- **#742 — DORA Chapter II ring closure.** Two mapping
  entries updated:
  - `content/mappings/dora/article-13.yaml` — learning
    and evolving — now lists
    `playbook.post_incident_review@v1`. The agentic slice
    is the review record produced after every major
    ICT-related incident, capturing causes of disruption
    and required improvements that feed back into the
    Article 6 framework review.
  - `content/mappings/dora/article-14.yaml` — crisis
    communication — now lists
    `playbook.business_continuity@v1` and
    `playbook.mfa_secured_comms@v1`. The agentic slice is
    the documented crisis-communication plan with a named
    external-communications owner, distinct from the
    internal incident-handling chain established under
    Article 11.

No `_orphan_skip` change was required — all three
playbooks were already carrying outbound Chapter II
declarations of their own. The inbound side just needed
to catch up.

## The Chapter II article-side read

With #742 landed, the eleven-article operational
resilience chapter reads consistently from the article
side:

- **Art.5** — governance and organisation, framework
  ownership.
- **Art.6** — ICT risk-management framework proper.
- **Art.7** — ICT tools, systems, and processes
  inventory.
- **Art.8** — identification of ICT-supported business
  functions.
- **Art.9 + RTS on vuln-mgmt** — protection and
  prevention.
- **Art.10** — detection.
- **Art.11** — response and recovery.
- **Art.12** — backup, restore, and drill obligations.
- **Art.13** — learning and evolving — *now named*.
- **Art.14** — crisis communication — *now named*.
- **Art.19 + Art.28** — reporting anchors, third-party
  register handles.

The two closures matter because Chapter II is the
end-to-end operator lifecycle. A gap on Art.13 leaves the
learning loop textually described but not routed to the
review artefact; a gap on Art.14 leaves the
crisis-communication obligation carried in prose but not
routed to either the plan-lifecycle spine or the
secured-communication playbook. With the two entries
wired, an operator reading the chapter from the article
side can walk from governance to learning to
communication without hitting a dead reference.

## Why two playbooks on Art.14

Art.14 lists two `playbook_refs` deliberately. The
crisis-communication obligation carries both an
organisational surface — the plan itself, the named
external-comms owner, the media-handling
distinction — and a technical surface — the secured
communication channel the plan operates over.
`business_continuity` materialises the organisational
side; `mfa_secured_comms` materialises the channel side.
Naming both is truer to the shape than pinning either
alone.

## The G-02 signal

- **G-02 — regulatory mapping coverage.** Two DORA
  Chapter II entries move from empty `playbook_refs` to
  live pointers. The chapter's inbound ring is complete.
  Verification on the PR: forty finalized playbooks,
  thirty mapped, zero DORA orphans; 1664 tests pass.

Ring-closures like this one are the maintenance-lane
counterpart to the more visible playbook-lifecycle and
compile-target work. They are the reason the mapping
layer stays honest as new playbooks land — every article
should either name the playbook that operates it or
carry a reviewed rationale for the skip. Chapter II is
now on the first side of that line, top to bottom.

## Where to look

- **Framework repo:**
  - `content/mappings/dora/article-13.yaml` — learning
    entry; now points at `post_incident_review`.
  - `content/mappings/dora/article-14.yaml` — crisis-
    communication entry; now points at
    `business_continuity` and `mfa_secured_comms`.

Chapter II reads end-to-end from the article side.
