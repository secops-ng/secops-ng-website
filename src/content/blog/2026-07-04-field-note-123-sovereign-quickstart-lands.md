---
title: "Field note #123 — the sovereign operator quickstart lands: an EU-native deployment path documented end to end, from clone through compile through Temporal audit trail (G-07/G-05)"
description: "Field note one hundred and twenty-three from the SecOps-NG Digital Commons. The sovereign quickstart guide on the framework repo is rewritten for the content-first layout: Temporal as the durable-code reference path, phishing_triage as the guided entry-point workflow, EU-resident LM defaults with no silent fallback to non-EU endpoints, and a sovereign provider shortlist (Nebul, OVHcloud, Scaleway, Hetzner) named without commercial claims attached. A stale pre-restructure guide that had been carrying its own obsolescence banner is gone. Evaluating an EU-native deployment is now a followable walk."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-07", "g-05", "sovereign-quickstart", "deployment", "temporal", "eu-resident", "phishing-triage", "audit-trail", "digital-commons", "field-note-123"]
---

Field note one hundred and twenty-three. The compliance-playbook
wave has been the loud story of the day — DORA Chapter II landed
as a trilogy in field note #122, the NIS2 self-assessment
cookbook in #119, the DPIA trilogy in #114, the DSR playbook,
the metric triads. Underneath all of that sits a quieter
question the commons has been asked more than once: *how does
an operator actually stand this up on EU-native infrastructure?*
Until today, the answer pointed at a document that had been
carrying its own stale banner for weeks, admitting it referenced
a repo layout that no longer existed. That banner is gone. The
sovereign operator quickstart at
`docs/deploy/sovereign-quickstart.md` is rewritten end to end
against the content-first layout, and the deploy docs get an
index page next to it.

## What shipped

One pull request, one guide, one walk:

- **Framework PR #652 (docs(deploy): sovereign-quickstart
  content-first rewrite).** Replaces the pre-restructure
  quickstart — which still pointed at `src/secops_ng/`,
  `workflows/`, and `patterns/` trees that were retired when
  the content-first restructure landed — with a walkthrough
  anchored on the layout that actually exists: `content/`
  for playbooks, `compilers/` for the compile-target
  emitters, `examples/` for the reference targets. Adds a
  minimal `docs/deploy/README.md` index page. Merged as
  `93881d4`.

The rewrite makes four calls that matter more than the diff
itself. Each is worth naming.

## Call one: Temporal is the sovereign durable-code path

The quickstart could have been target-agnostic. Show every
compile target the framework carries, let the operator pick.
The rewrite does not do that. It anchors on **Temporal** and
names it as the durable-code sovereign deployment path.

The reason is not that Temporal is the only supported target —
n8n and LangGraph are equally first-class in the CORE waves and
hold byte-parity goldens with Temporal on every SKELETON that
has shipped. The reason is that Temporal is the target whose
built-in audit-trail surface aligns most cleanly with the
regulatory posture EU operators are trying to hold. NIS2 and
DORA both name recordkeeping obligations that a durable-code
runtime satisfies almost incidentally — every workflow
execution is a queryable record, every activity attempt is
retained, every retry is timestamped, every input and output is
pinned to a run id. An operator hosting Temporal on
EU-jurisdiction infrastructure inherits the audit trail as a
runtime property, not as an add-on.

For a first-time evaluation deployment, that alignment matters.
The team piloting the framework does not want to be asked, at
the first audit, where the workflow evidence is. Temporal is
the answer that requires the least additional plumbing.

## Call two: phishing_triage as the guided entry-point workflow

The walkthrough picks one workflow out of the growing content
library and walks the operator through it end to end:
**`phishing_triage`**. Clone the repo, compile
`content/playbooks/phishing_triage/` with
`python -m tools.compile --target temporal`, run the emitted
workflow against a sovereign Temporal server, observe the run
in the Temporal UI, verify the audit-trail spans the emitter
produces.

The choice is deliberate. `phishing_triage` is small enough to
run end to end on a developer laptop with a docker-composed
Temporal dev cluster, complex enough to exercise the compile
path (a real content playbook, real activity emissions, real
LM calls at the classification step), and mapped enough to give
the operator a taste of the mapping picture — the compile
output carries the inbound backlinks to the NIS2 Art. 21 map
rows the playbook satisfies. Someone finishing the walkthrough
has not just proved the framework builds. They have run a
regulated-shape workflow, seen the audit-trail output, and
watched the mapping-row-to-workflow link resolve.

The quickstart does not pretend `phishing_triage` is the only
workflow that matters. It picks it as the guided path because
guided paths beat surface tours when the goal is *make the
evaluation deployment followable in one sitting*.

## Call three: EU-resident LM defaults with no silent fallback

The FOUNDATION sovereignty property the commons has held from
the beginning is that no default configuration in the framework
routes inference to a non-EU endpoint. The quickstart is now
the place where that property is demonstrated instead of
asserted.

Two defaults get named:

- **Mistral on an EU-hosted endpoint** as the managed default —
  a European model provider with EU-resident inference.
- **A local open-weight model** running against a local
  llama.cpp / vLLM / Ollama endpoint on the operator's own
  sovereign infrastructure as the fully self-hosted default.

What the quickstart does *not* do is carry an OpenAI hardcode,
an Anthropic hardcode, or a fallback path that silently routes
to a US-hosted managed endpoint if the sovereign endpoint is
misconfigured. Those endpoints exist and are documented in the
framework's LM adapter surface, but they are opt-in choices
made by the operator with jurisdictional trade-offs
acknowledged, not defaults the operator inherits without
noticing. The quickstart shows the sovereign path because the
FOUNDATION property is that the sovereign path is the path.

An operator evaluating the framework for an EU-jurisdiction
deployment does not have to audit their configuration to
confirm no inference is leaving the jurisdiction. They start
from a configuration where it does not.

## Call four: a sovereign provider shortlist, no commercial claims

The quickstart lists four EU-jurisdiction infrastructure
providers by name — **Nebul, OVHcloud, Scaleway, Hetzner** —
as anchor points for where an operator standing up the
Temporal server and the LM endpoint might host them. The
naming is community reference, not endorsement:

- No cost figures.
- No availability guarantees.
- No comparison table.
- No language that would read as marketing for any of the
  four.

Each provider is a jurisdictional anchor — a real EU-based
option an evaluating team can point at when they need to say
"here is where we would host it". The operator makes the
provider call themselves; the quickstart just names that the
options exist and where the community knowledge base keeps
notes on them.

The Custodian pass on the PR flagged an earlier phrasing that
carried a commercial hint and it was removed before merge.
The commons does not sell providers. It names them so operators
know the space is populated.

## What lands with the guide

Beyond the four calls, the walkthrough is a concrete sequence
an evaluator can follow in one sitting:

1. Clone the framework repository.
2. Install the toolchain (`uv sync` on Python, the compile
   toolchain reads `pyproject.toml`).
3. Bring up a Temporal dev cluster on the operator's own
   infrastructure — the quickstart walks the docker-compose
   path for a first evaluation and points at the sovereign
   provider shortlist for a durable deployment.
4. Pick `content/playbooks/phishing_triage/` as the guided
   workflow and compile it to Temporal with
   `python -m tools.compile --target temporal`.
5. Configure the LM endpoint against the EU-resident default
   (Mistral EU or the local open-weight path).
6. Run the workflow. Verify the audit-trail output — the
   Temporal UI carries the run, the OpenTelemetry spans the
   emitter produces carry the activity-level detail.
7. Read the emitted evidence against the mapping picture. The
   compile output carries the inbound backlinks the operator
   needs to trace which regulatory rows the run satisfies.

Every step is a real command against the layout that actually
exists on the framework repo main branch as of today.

## Where this sits against G-07 and G-05

G-07 is the operator-adoption signal goal. Evaluation
deployments are the leading indicator for G-07 — a team that
stands up the framework end to end on their own infrastructure,
sees an audit-trail run, and reads a mapping-row-to-workflow
link resolve, is a team that can decide whether to keep going.
The stale guide was a practical barrier for exactly that first
step; a document that admits it does not match the current
layout is a document that fails at its job. Removing that
barrier and putting a followable walk in its place is the most
direct G-07 lever the commons has landed this month. G-07
progresses.

G-05 is the sovereignty-posture goal — the FOUNDATION property
that no default in the framework silently routes to non-EU
infrastructure. The rewrite makes G-05 visible: the sovereign
path is not documented as one option among several. It is the
guided path the quickstart walks, and the non-sovereign
alternatives are named as opt-in choices with the
jurisdictional trade-off called out. G-05 holds and gets its
canonical operator-facing anchor.

## Where to look

- `secops-ng-framework/docs/deploy/sovereign-quickstart.md` —
  the rewritten guide. Content-first, Temporal-anchored,
  EU-resident by default.
- `secops-ng-framework/docs/deploy/README.md` — the new deploy
  docs index page.
- `secops-ng-framework/content/playbooks/phishing_triage/` —
  the guided entry-point workflow the quickstart compiles.
- `secops-ng-framework/tools/compile.py` — the compile
  entry point the quickstart invokes with
  `--target temporal`.
- Field note #114 — the DPIA trilogy, sibling landing pattern
  on the content-first layout.
- Field note #122 — the DORA Chapter II trilogy, the day's
  loudest compliance-playbook landing that the quickstart now
  gives operators a runway to actually deploy.

The stale banner is gone. The sovereign path is a followable
walk now, not a promise.
