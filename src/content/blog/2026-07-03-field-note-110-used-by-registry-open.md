---
title: "Field note #110 — the USED-BY.md registry is open, self-attestation lives at the framework root (F-ADOPT-01, G-07)"
description: "Field note one hundred and ten from the SecOps-NG Digital Commons. The self-attesting adoption registry is live at the framework repository root. If you are running SecOps-NG playbooks — in production, in staging, in evaluation, or in a research setting — add your organisation and let the community see it in the open."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-07", "adoption", "used-by", "self-attestation", "community", "digital-commons", "field-note-110"]
---

Field note one hundred and ten. The framework now carries a
self-attesting adoption registry at `USED-BY.md`, and the
contributor walkthrough at `docs/contributing/self-attesting-adoption.md`
covers the step-by-step. The registry is open. If you are running
SecOps-NG playbooks in any capacity, the community would like to
see your row.

## What the registry is

`USED-BY.md` lives at the root of `secops-ng-framework`. It is a
single markdown table with five columns — organisation, deployment
type, playbooks in use, since (as a `YYYY-Qn` quarter), and a
public evidence link — and it is voluntary end to end. There is
no telemetry, no adoption pixel, no analytics endpoint underneath
it. The registry only knows what an operator writes into it in a
public pull request.

The four deployment types are `production`, `staging`,
`evaluation`, and `research`, and the framing is intentionally
flat: a single-team pilot counts, a university course counts, a
production SOC counts. The signal is the same — an operator
willing to say so in public.

## Why the commons wants the signal

Operators evaluating a new security framework look for two things
before they run it against anything that matters: is there a
review trail on the code, and is anyone else already running it in
the open. The first question the project answers through the PR
trail and the CI gates. The second is the question `USED-BY.md`
lets the community answer for itself.

A commons-owned registry is different from a vendor case-study
page in three ways worth naming:

- **Self-attestation, not curation.** Nobody on the maintainer
  side chooses who is listed. The gate is a format check — column
  count, ordered insertion, reachable evidence link, hygiene
  linter clean — not a fit-for-marketing check.
- **Removable in one PR.** Taking a row out is the same
  one-line PR as putting one in, needs no justification, and gets
  merged on the same format check. The registry is a signal, not
  a lock-in.
- **Public evidence only.** Every row carries a URL a reader
  without an account can open — a blog post, a talk recording, a
  public write-up, a repository, a page on the operator's own
  site. Login-walled dashboards and internal wikis do not
  qualify.

## Who this note is for

The commons runs on operators, not observers. If you belong to
any of the following, the registry is asking for your row:

- **A SOC or platform team piloting a SecOps-NG playbook.**
  `evaluation` covers the shape where a scoped pilot is running
  but nothing production-critical is bound to the output yet.
  Adding your row while you are still evaluating is the ordinary
  case, not the exceptional one.
- **A team already routing live operations through a playbook.**
  `production` is exactly this. If the framework is defending
  something that matters, the community would like to know.
- **A researcher or academic group.** `research` covers a
  master's thesis, a lab investigation, a course module using
  the framework as its worked example. The evidence link can be
  a course page, a paper, or a public repository.
- **A working group or coordination body running the
  playbooks as part of a shared exercise.** Working-group names
  are fine — the registry accepts team names and initiative
  names, not personal names.

If none of those quite fit but you are still running the
framework somewhere the public could see, open the PR anyway and
describe the shape in the PR body. Maintainers will either
extend the deployment-type list or help you pick.

## What the row looks like

The registry table today carries one placeholder row so the
format is unambiguous:

    | Example community SOC | evaluation | vuln_intake, posture_audit | 2026-Q3 | https://example.org/secops-ng-eval-notes |

Everything you need to shape yours to match is in
`docs/contributing/self-attesting-adoption.md`. The two fields
worth checking twice are **deployment type** (one of the four
above) and **evidence link** (public, reachable, and returns a
2xx — a scheduled CI job pings every link daily and turns red on
rot so a maintainer can reach out or prune the row).

## Hygiene and voice

Two things trip contributors up on the first PR against
`USED-BY.md`. Both come from the project's community-voice
posture:

- **No individual names.** List the organisation, the team, or
  the working-group. A person's name attached to an organisation
  creates pressure the project's governance model is designed to
  avoid.
- **Practitioner-to-practitioner voice.** The registry
  documents adoption, not selling. Commercial framing —
  "leading provider of", "certified by", "trusted partner" —
  is out of place here. Skip it in the row and in the PR body;
  the maintainers will ask for a rewrite otherwise.

The hygiene linter runs on the file in CI, so voice drift shows
up as a red check rather than a merge surprise.

## How to add your row

1. Fork `secops-ng/secops-ng-framework`.
2. Edit `USED-BY.md` at the repository root — add one row,
   keeping the table alphabetically ordered on the first word
   of your organisation name.
3. Open a PR against `main`. Title it
   `docs(community): add <organisation> to USED-BY.md`. The
   body only needs the evidence link and a one-line description
   of what you are running.
4. A maintainer merges after the format check.

The full walkthrough, with the picky bits called out, is at
`docs/contributing/self-attesting-adoption.md` in the framework
repository.

## Where to look

- `secops-ng-framework/USED-BY.md` — the registry itself.
- `secops-ng-framework/docs/contributing/self-attesting-adoption.md`
  — the contributor walkthrough.
- `.github/workflows/used-by-link-check.yml` — the scheduled CI
  job that keeps the evidence links honest.
- Field note #106 — the F-CONTRIB-01 onboarding trilogy that
  set the tone for how the commons welcomes new contributors,
  and which this registry sits alongside.

The infrastructure is in place. The registry is empty on
purpose — the community fills it, not the maintainers. If your
team is running the framework in the open, the commons would
like to see your row.
