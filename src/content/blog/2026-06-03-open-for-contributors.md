---
title: "Open for contributors — the SecOps-NG Digital Commons is ready for first-time hands"
description: "An invitation to the wider community. The repositories are public, the governance documents are merged, the hygiene linter guards the public bar on every PR — and there is now a labelled lane of first contributions waiting to be picked up. This post explains what the project is, what has shipped, and how to land your first playbook, mapping, or example PR without having to read the whole codebase first."
pubDate: 2026-06-03
author: "The SecOps-NG commons"
tags: ["community", "contributors", "good-first-issue", "digital-commons", "governance", "sovereignty", "framework-agnostic", "open-source", "EU"]
---

A short post, because the message is short: the SecOps-NG Digital
Commons is open for contributors, and there is now a labelled lane of
first contributions waiting in the framework repository. If you have
been reading the field notes from a distance, this is the post that
tells you how to join.

## What this project is

SecOps-NG is a community-driven initiative building **sovereign
security for the EU as a Digital Commons**. Not a vendor, not a
consultancy — a commons. The output is portable content (CACAO
playbooks, OSCAL and D3FEND control mappings, OCSF data shapes, a
KPI/KRI catalogue) plus reference compilers that emit that content
into the orchestrator an operator already runs. Three reference
compile targets are maintained side by side: **n8n** for the no-code
audience, **Temporal** for durable code, **LangGraph** for the
agentic frontier. Each is one of three; none is the engine.

The pattern is the opposite of a SOAR. Operators set intent in a
portable artifact, then the compile target executes it durably on the
runtime they already host. Sovereignty is framed as a public good,
not a selling point: EU-hostable runtimes, AI-provider neutrality
enforced at the artifact layer, no preferred vendor.

## What has shipped

The two public repositories — `secops-ng-framework` and
`secops-ng-website` — are live. The community substrate is in:
[CONTRIBUTING](https://github.com/secops-ng/secops-ng-framework/blob/main/CONTRIBUTING.md),
[GOVERNANCE](https://github.com/secops-ng/secops-ng-framework/blob/main/GOVERNANCE.md),
[CODE_OF_CONDUCT](https://github.com/secops-ng/secops-ng-framework/blob/main/CODE_OF_CONDUCT.md),
[SECURITY](https://github.com/secops-ng/secops-ng-framework/blob/main/SECURITY.md)
and a contributor [AGENTS.md](https://github.com/secops-ng/secops-ng-framework/blob/main/AGENTS.md)
for AI coding assistants. A forward-public hygiene linter runs in CI
on every PR and on every commit landed in `main`. Ten worked
playbooks exist in canonical CACAO v2 form, with per-target compiled
examples under `examples/{n8n,temporal,langgraph}/<workflow>/`.
Control mappings cover NIS2 Article 21, DORA core articles, CRA
Annex I §1 and §2, and a D3FEND crosswalk against each. An
OpenTelemetry emitter walks from SKELETON through the first CORE
layer on the LangGraph target, with the cross-target audit-trail
mirror landing alongside.

If you want the running narrative, the [field notes](/blog/)
are the public log; the ROADMAP carries the authoritative status of
each feature.

## What a first contribution looks like

The framework repository now has a labelled lane of issues marked
both `good first issue` and `contributor:welcome`. They are scoped
deliberately: single-file changes where possible, no compiler
internals, no schema design, and the acceptance criteria are written
out in the issue body so you know when you are done. Five are open
today, covering two regulatory regimes that need their first entry
and one documentation polish pass:

- **[#193](https://github.com/secops-ng/secops-ng-framework/issues/193)** — Add the CRA Article 13(9) support-period entry to the CRA mapping. Self-contained YAML, ~30 lines.
- **[#194](https://github.com/secops-ng/secops-ng-framework/issues/194)** — Add the CRA Article 13(11) ten-year record-retention entry. Same shape as #193, different obligation.
- **[#195](https://github.com/secops-ng/secops-ng-framework/issues/195)** — Land the first ISO/IEC 27001:2022 Annex A mapping (A.5.1, *Policies for information security*). Unblocks the rest of the ISO crosswalk.
- **[#196](https://github.com/secops-ng/secops-ng-framework/issues/196)** — Land the first GDPR mapping (Article 32, security of processing). Establishes the regime conventions.
- **[#197](https://github.com/secops-ng/secops-ng-framework/issues/197)** — Add a "Common pitfalls when binding activity bodies" section to the three per-target READMEs for the threat-intel-ingest example. Pure docs polish across three files.

Each issue has a one-paragraph intro, a numbered list of what to do,
explicit acceptance criteria, and pointers to the existing files that
serve as templates. If you finish one and want a second, the
[`good first issue` filter on the framework repo](https://github.com/secops-ng/secops-ng-framework/labels/good%20first%20issue)
is the canonical view.

## How to land your first PR

The contributor flow is documented end-to-end in
[CONTRIBUTING.md](https://github.com/secops-ng/secops-ng-framework/blob/main/CONTRIBUTING.md);
the short version:

1. Comment on the issue you want to take. Maintainers will hold the
   lane for you.
2. Branch off `main`. Branch naming is `<area>/<short-description>` —
   e.g. `mappings/cra-art-13-support-period`.
3. Sign your commits per the DCO instructions in `CONTRIBUTING.md`.
4. Run the tests and the hygiene linter locally before pushing:
   `python -m pytest` and
   `python -m tools.hygiene_linter --min-severity LOW`.
5. Open the PR against `main` and fill in the template — the linter
   acknowledgement is not optional.

A maintainer will review. Expect questions about
sovereignty-stack alignment for anything that touches the compilers
and questions about voice for anything that touches published copy.
The voice the project uses on its public surfaces is documented in
[SOUL.md](https://github.com/secops-ng/secops-ng-framework/blob/main/SOUL.md);
reading it once at the start of a session is the calibration step.

## What the project asks of you

Three things, none of them onerous. Read CONTRIBUTING. Run the
hygiene linter before you push. Treat the public repositories as
already-public history from day one — because that is what they are.
If you do those three, the lane is wide open.

The work is the slow kind: portable content, durable runtimes,
sovereignty as a default rather than a feature. If the project's
shape matches the kind of contribution you want to make, the issue
tracker is the front door. We will see you there.

---

*Field notes resume their normal cadence after this post.*
