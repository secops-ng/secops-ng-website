---
title: "Field note #106 — first-contributor onboarding toolkit ships (G-06)"
description: "Field note one hundred and six from the SecOps-NG Digital Commons. Three framework PRs — #599, #600, and #601 — land the contributor onboarding trilogy: good-first-issues and issue templates, a playbook-authoring guide with a compiler walkthrough, and a review-process guide with community norms. The commons now has a documented, end-to-end path a first contributor can walk from a starter issue to a merged mapping overlay."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "contributor-onboarding", "community", "good-first-issue", "playbook-authoring", "review-process", "digital-commons", "field-note-106"]
---

Field note one hundred and six. Three framework PRs merged today —
PR #599, PR #600, and PR #601 — and with them the first-contributor
onboarding toolkit lands on `main`. The commons now carries a
documented path from a first good-first-issue through authoring a
playbook or a mapping overlay to opening the PR and walking it
through review. Everything a new contributor needs to move from
"interested" to "merged" lives in the same public repository as the
work itself.

## What shipped

Three PRs, all in `secops-ng-framework`, all G-06:

- **PR #599 — F-CONTRIB-01 SKELETON.** The first-contributor entry
  point. A good-first-issues guide describing the kinds of starter
  work the project keeps open, together with two GitHub issue
  templates: one for good-first-issues (labelled and scoped for a
  first PR), one for playbook requests (structured so a maintainer
  can triage without a round trip). The templates live under
  `.github/ISSUE_TEMPLATE/` and are visible on the repo issue-open
  page.
- **PR #600 — F-CONTRIB-01 CORE.** The authoring guide and the
  compiler walkthrough. `docs/contributing/playbook-authoring.md`
  documents the CACAO shape, the per-clause mapping overlay pattern,
  and the parametrised orphan-CI helper — the same shape carried by
  every recent GDPR, NIS2, DORA, and CRA mapping wave. The
  compiler walkthrough at `docs/contributing/compiler-walkthrough.md`
  takes a contributor from a portable artifact in `content/` through
  the three reference compilers (n8n, Temporal, LangGraph) and out
  to a runnable example. `CODEOWNERS` lands alongside so review
  routing is deterministic.
- **PR #601 — F-CONTRIB-01 EXTEND.** The review-process guide, a
  standing pool of good-first-issues, and the community norms that
  govern PR review. `docs/contributing/review-process.md` documents
  what a reviewer looks for — voice, sovereignty framing, byte-parity
  on compiled output, hygiene-linter posture — and the expectations
  a contributor should carry into a review conversation. The
  good-first-issues pool means someone arriving on the repo has real,
  scoped work waiting rather than an empty queue.

## Why an onboarding toolkit, and why now

A commons is only as durable as its contributor path. The technical
surface of SecOps-NG has grown quickly this quarter — nine playbooks
on the catalogue, mapping trees on four regulations, three reference
compilers, a hygiene linter, a byte-parity test lane. That surface is
useful to an operator running the framework, but it is intimidating
to a first contributor if the path in is not documented. Every one
of those additions was authored under a pattern; the pattern was in
the maintainers' heads and in the diffs, not on the shelf. PRs #599,
#600, and #601 put the pattern on the shelf.

What a first contributor now gets, in order:

- **A starter issue that fits.** The good-first-issues guide and the
  standing pool describe the kinds of work available and how they
  are scoped. Documentation clarifications, mapping overlays on
  under-covered clauses, compiler tests, hygiene-linter rules — the
  categories are enumerated with concrete examples.
- **A shape to author against.** The playbook-authoring guide walks
  through the CACAO structure, the mapping overlay pattern, and the
  orphan-CI helper. If a contributor is writing a new playbook, a
  new mapping YAML, or a new compiler test, they are working from
  the same shape every existing artifact uses.
- **A path from artifact to executable.** The compiler walkthrough
  connects the portable content to the three reference compile
  targets. A contributor authoring in `content/` can see how the
  same artifact reaches n8n, Temporal, and LangGraph, and can add a
  test that pins the byte-for-byte output on all three.
- **A review posture that is written down.** The review-process
  guide describes what a reviewer will ask about, the hygiene bar
  that every PR passes through, and how the community handles
  disagreements. First-time contributors know what they are walking
  into before they open the PR.

The point is not that the toolkit is finished — the guides will grow
as the framework grows, and the good-first-issues pool is maintained
continuously. The point is that the commons no longer relies on a
maintainer being available to explain the pattern to every new
contributor. The pattern is on `main`.

## What the Digital Commons is doing with this

For operators, PRs #599–#601 do not change the runtime. What they do
is make the framework's growth surface open to anyone who wants to
extend it. If you run a SecOps-NG playbook stack against real EU
traffic and you notice a mapping is thin on a clause you care about,
you can now open a scoped PR against that clause and walk it through
review using the same shape every other mapping PR uses. If you run
on a jurisdiction the catalogue does not cover yet — a national
data-protection regime, a sectoral overlay, a supervisory guidance
that ships as per-article obligations — the authoring guide is the
starting point.

For contributors who have not touched the repo before: the
`good-first-issue` label on `secops-ng-framework` now carries real,
scoped work. Pick one, read the linked guide, open a branch, and the
review posture will be the same one that carried these three PRs to
main.

The commons runs on contribution. What shipped today is the shape
of that contribution written down, in the same repository, under the
same review discipline, as the framework itself.

## Where to look

- `secops-ng-framework` on GitHub — PRs #599, #600, #601 on `main`.
- `docs/contributing/good-first-issues.md` — the starter-work guide.
- `docs/contributing/playbook-authoring.md` — CACAO shape, mapping
  overlay pattern, orphan-CI helper.
- `docs/contributing/compiler-walkthrough.md` — portable content
  through the three reference compilers.
- `docs/contributing/review-process.md` — the review posture and
  community norms.
- `.github/ISSUE_TEMPLATE/` — good-first-issue and playbook-request
  templates.
- `CODEOWNERS` — deterministic review routing on merged PRs.

The path from first issue to first merge is on the shelf. Pick a
clause, open a branch, and the review posture is the one every other
contribution walks through.

— the SecOps-NG commons
