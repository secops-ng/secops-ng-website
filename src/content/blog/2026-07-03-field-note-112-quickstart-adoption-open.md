---
title: "Field note #112 — the quickstart guide and the adoption registry land together; the onboarding path is open (F-DOCS-QS-01 + F-ADOPT-01, G-06/G-07)"
description: "Field note one hundred and twelve from the SecOps-NG Digital Commons. A practitioner can now go from clone to first working compile in under thirty minutes, across all three reference targets, and self-attest their deployment in the community registry — no maintainer gatekeeping between the two steps."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "g-07", "quickstart", "adoption", "onboarding", "used-by", "digital-commons", "field-note-112"]
---

Field note one hundred and twelve. Two practitioner-facing pieces
landed today that, together, close the shape the commons has been
carrying in halves for a while: a short path in, and an open place
to stand once you are in. The quickstart guide ships the first,
the adoption registry the second. From today, an operator who
opens the repository at breakfast can be running a compiled
playbook by mid-morning and listed in `USED-BY.md` by the end of
the day, without anyone on the maintainer side gating the
transition.

## What shipped

Three pull requests carried the change:

- **PR #619** — the practitioner quickstart guide at
  `docs/quickstart/README.md`. Clone, compile, first playbook run,
  under thirty minutes as the target budget, and covering all
  three reference compile targets end to end: n8n for the no-code
  path, Temporal for the durable-code path, LangGraph for the
  agentic path. The guide is a single scroll, not a documentation
  tree — the shape a first-time reader wants when they are
  deciding whether the project is worth an evening.
- **PRs #614, #615, #616** — the F-ADOPT-01 ring: the
  self-attesting adoption registry at `USED-BY.md` at the
  framework root, a scheduled CI job that pings every evidence
  link daily and turns red on rot, and a GitHub Discussions
  deployment template that gives operators a place to write up
  the shape of what they are running when they add a row.
- **PR #618** — F-METRICS-04 EXTEND-COMMUNITY: contributor and
  operator adoption KPI and KRI definitions in the catalogue, so
  the community-adoption axis has the same measurement discipline
  as the determinism, operability, sovereignty, and auditability
  axes that landed before it.

Field notes #109, #110, and #111 covered the earlier steps in the
same arc. This note is the point where the loop closes.

## What this opens up

The friction shape a new operator faces at any framework has two
walls in it. The first is *how long to first working thing*. The
second is *whether it is safe to say in public that I am
running it*. The commons now answers both without a maintainer
in the middle:

- **Under thirty minutes to a compiled playbook.** The quickstart
  is timed and target-budgeted. If it takes longer, that is a
  documentation bug, not a user error — open an issue and the
  next PR against the guide will address it.
- **Immediate self-attestation.** The moment the first compile
  runs, the operator can open a one-line PR against `USED-BY.md`
  and be visible in the registry as an `evaluation` row. Moving
  to `production`, `staging`, or `research` later is another
  one-line PR. Removing the row entirely is the same shape.

Nothing in either step requires a conversation with a maintainer.
The quickstart is a document that either works in the given time
budget or does not; the registry is a table that accepts rows
against a format check. The community welcomes both entrances the
same way — through the ordinary PR trail, in public.

## The three targets, the one shape

The quickstart covers the three reference targets deliberately in
the same document, in the same order, with the same worked
playbook running through each of them. The point is not that an
operator has to try all three; the point is that the playbook
artifact is the same in all three cases. A CACAO playbook plus
its OSCAL/D3FEND control map plus its OCSF data shapes compiles
into n8n if the operator runs n8n, Temporal if the operator runs
Temporal, LangGraph if the operator runs LangGraph. The commons
ships content and compilers; the runtime the operator already has
is the runtime the compiled artifact lands in.

That framing runs the whole way through the guide. The reader
picks the target that matches the environment they already
operate, follows the three or four steps for that target, and the
first playbook is running. The other two targets are there for
when the environment changes, or for the operator who wants to
see the same artifact land in three different runtimes as a
sanity check.

## EU-hostable end to end

Every target the quickstart covers runs on EU-resident
infrastructure without contortion. n8n runs on any EU-hostable
container platform (Hetzner, OVHcloud, Scaleway, Nebul); Temporal
runs the same way, plus the sovereign-cloud Temporal deployment
patterns the deployment guide already covers; LangGraph runs on
any Python runtime you point it at, sovereign cloud included.
The commons does not ship a hosted runtime and does not want to.
The compile targets are ones an operator can host themselves,
inside the jurisdiction they operate under, without leaving the
sovereignty posture the project holds itself to.

The quickstart flags this in one paragraph rather than making it
the pitch. It is a property of the reference targets, not a
feature to sell.

## The community call

This note is an invitation. If you have been watching the project
from a distance and wondering whether it is worth an evening of
your time, today is the day the answer is easiest to check:

- Open the framework repository.
- Follow `docs/quickstart/README.md` for the target you already
  run.
- If the first compile lands cleanly, open a PR against
  `USED-BY.md` and add your row as `evaluation`.
- Tell the commons what worked and what did not, either in the
  PR body or in the GitHub Discussions deployment thread.

The maintainers would rather hear from a hundred `evaluation`
rows that never move to `production` than have no signal at all.
The registry is doing its job the moment operators are visible in
it, not only when they graduate to production. If the quickstart
does not work in the time budget it claims, that is exactly the
report the commons needs — the guide is a living document, and
the shortest path to a better one is a red row from someone who
just tried it.

## Where to look

- `secops-ng-framework/docs/quickstart/README.md` — the
  thirty-minute guide, all three targets.
- `secops-ng-framework/USED-BY.md` — the registry, open for
  entries.
- `secops-ng-framework/docs/contributing/self-attesting-adoption.md`
  — the contributor walkthrough for the registry.
- `secops-ng-framework/docs/metrics/` — the KPI/KRI catalogue,
  including the contributor and operator adoption definitions
  that landed with PR #618.
- Field note #110 — the earlier note that opened the registry.
- Field note #111 — the earlier note that closed the
  FOUNDATION-property ring on the metrics catalogue.

The onboarding path is open. The commons is not selling anything
at the other end of it — there is a framework, there is a
registry, there is a table with rows in it. If your team belongs
in that table, the shortest path there is thirty minutes long
and starts at the quickstart.
