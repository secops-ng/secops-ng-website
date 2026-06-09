---
title: "Field note #46 — F-CP-02 CORE-FANOUT fans the incidents evidence emitter out to n8n and LangGraph, and the first external community contribution lands a CRA Article 13(8) support-period mapping entry"
description: "Forty-sixth field note from the SecOps-NG Digital Commons: two moves on the framework repo, read together because the second is the one the Digital Commons posture was built to see. F-CP-02 CORE-FANOUT lands the incidents evidence emitter on n8n and LangGraph on top of the Temporal SKELETON shipped on the lane opening, closing the three-target parity beat for the incidents stream's SKELETON layer. Alongside it, the first external code-level contribution into the public framework repo merges on the content side: a CRA Article 13(8) support-period mapping entry from a contributor walking in through the public lane."
pubDate: 2026-06-09
author: "The SecOps-NG commons"
tags: ["shipping-update", "community", "f-cp-02", "continuous-posture", "evidence-stream", "core-fanout", "emitter", "incidents", "n8n", "langgraph", "temporal", "byte-parity", "cra", "article-13", "support-period", "external-contribution", "digital-commons"]
---

Field note #45 read the F-CP-02 incidents lane opening at SCHEMA +
EMITTER SKELETON: a typed incidents evidence-artifact schema with the
NIS2 Article 23(4) three-milestone vocabulary promoted on the typed
substrate, and a Temporal emitter SKELETON wrapping the incident-
management write-path on the same shape the F-CP-01 risk-analysis and
F-CP-04 vulnerabilities emitters already close on.

This note reads two moves off `main` that landed in the same hour, and
reads them together on purpose. The first is the expected next beat on
the F-CP-02 lane: CORE-FANOUT to the two remaining reference compile
targets. The second is the one the Digital Commons posture was built
to see: the first external code-level contribution merging into the
public framework repo, on a CRA Article 13(8) support-period mapping
entry, from a contributor who walked in through the public lane and
not through any private channel.

## What this note reads off `main`

### F-CP-02 CORE-FANOUT — the incidents emitter binds to n8n and LangGraph

Through
[PR #280](https://github.com/secops-ng/secops-ng-framework/pull/280),
the incidents evidence emitter fans out from the Temporal SKELETON
that shipped on the lane opening onto the two remaining reference
compile targets. The framework-agnostic helper lives under
`compilers/_shared/evidence/incidents.py` — record assembly, artifact
identifier derivation, the schema-conforming shape, the three-milestone
vocabulary binding, and the atomic write all sit on that helper — and
the three target adapters are glue only: each one accepts the surface
its compile target already expects, hands the context to the shared
helper, and returns the written artefact path along with the
deterministic identifier.

The shape mirrors F-CP-01 CORE-FANOUT and F-CP-04 CORE-FANOUT one-for-
one for review symmetry. The Temporal adapter binds `producing_workflow`
and `run_id` off the workflow context. The n8n adapter binds them off
the execution surface its nodes already carry. The LangGraph adapter
binds them off the graph state the incident-management graph already
threads. All three call the same shared helper; the helper is the
single point that knows how to assemble an incidents evidence record on
the schema #45 promoted.

A CORE-FANOUT parity test pins the lane: the three target adapters,
given the same incident context, write byte-identical JSON onto disk.
A silent serialisation drift on the shared helper fails the parity
test for the affected target by name on the next push; the SKELETON
layer of the incidents stream is now closed against the same three-
target shape the two sibling streams already close on.

The lane does not yet pin per-target byte-parity goldens against
checked-in fixtures (that is EXTEND-tests-goldens, ahead on the lane),
does not yet thread the `DriftHook` contract through the incidents
adapter (drift-detection SKELETON, the beat after), does not yet carry
its NIS2 mapping document at clause granularity (EXTEND-NIS2-MAPPING,
the beat ahead of the ROADMAP flip), and does not yet read **Shipped**
on the F-CP-02 row. The CORE-FANOUT beat closes the parity-at-emission
shape; the four beats ahead carry the rest of the lane to Shipped on
the same waves F-CP-01 and F-CP-04 walked.

### Community: the first external code-level contribution lands

Through
[PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281),
a contributor — [@omobolajiadeyan](https://github.com/omobolajiadeyan)
on GitHub — landed a CRA Article 13(8) support-period mapping entry
under `content/mappings/cra/`. It is the first external code-level
contribution to merge into the public framework repo since the
community lane opened.

What the entry binds, in the same shape the existing CRA mapping
entries on disk already carry: a typed mapping document tying a
field set on the substrate to the obligation surface of CRA Article
13(8) — the manufacturer's obligation to define and communicate the
support period during which security updates are provided — at clause
granularity, with a reference back into the regulatory text and a
forward pointer at the substrate field it discharges against. The
entry reads against the same shape every prior CRA mapping on the
substrate reads against, which is the surface the community lane has
been built to invite contributors onto.

Two things are worth calling out about how it got there. First, it
came in through the public PR lane against the public repo, reviewed
on the public bar, and merged on the public history — the same shape
every internal contribution lands through. Second, the surface the
contribution composes onto is the typed mapping substrate the
framework carries; the contributor wrote against the shape the
substrate already published, not against a private convention. That
is the shape the substrate was published to invite, and the shape
every subsequent external mapping contribution will read against on
the same lane.

## Why these two moves read in the same note

The two PRs landed in the same hour, against the same repo, and on
the same bar — but they read against two different axes the substrate
was built to extend.

CORE-FANOUT reads the parity axis: the framework-agnostic helper
sitting under `compilers/_shared/evidence/`, the three reference
target adapters composing onto it as glue only, and the byte-identical
emission a parity test pins. The incidents stream's SKELETON layer
now closes that axis on the same shape the two sibling streams
already close on.

The CRA Article 13(8) entry reads the community axis: a contributor
walking in through the public PR lane, composing onto the typed
mapping substrate the framework publishes, against the same review
bar every other contribution lands through. The Digital Commons
posture the project has been carrying is the posture under which a
contribution like this one is read as expected — the public surface,
the typed mappings, and the contributor lane are the three things the
substrate exists to invite an external contribution onto.

The two axes are independent, and both read green off `main` in the
same hour.

## Where this fits in the cross-stream evidence index

The cross-stream root at `content/evidence/README.md` now reads three
of its seven slots with their three-target SKELETON layer closed.
F-CP-01 risk-analysis and F-CP-04 vulnerabilities are the two slots
reading **Shipped** end-to-end across all three reference compile
targets, with the NIS2 Article 21(2)(a) and Article 21(2)(e) ties
pinned underneath. F-CP-02 incidents is the third slot: its schema
lit up on `content/evidence/incidents/`, its emitter SKELETON
wrapping the Temporal compile target, and now its CORE-FANOUT beat
binding n8n and LangGraph onto the same helper at byte parity.

The contributor checklist for the incidents row reads the same way
it reads for the risk-analysis and vulnerabilities rows: schema →
stream root → emitter → fanout → tests/goldens → drift hook →
regulatory mapping → ROADMAP flip. CORE-FANOUT closes the fourth box
on that checklist for incidents; three boxes remain ahead of the
ROADMAP flip, on the same beats the sibling streams walked.

## What comes next on the F-CP-02 lane

The lane composes through the same waves F-CP-01 and F-CP-04 walked,
against the same shared-helper-plus-three-adapters shape:

- **EXTEND-tests-goldens** — per-target byte-parity goldens against
  checked-in fixtures, one per reference target. A silent
  serialisation drift on the shared helper fails the golden for the
  affected target by name on the next push.
- **drift-detection SKELETON** — the typed `DriftHook` contract on
  the shared emitter threads through the incidents adapter for every
  target. The SKELETON default stays noop until CORE-WIRE rides its
  own sibling beat.
- **EXTEND-NIS2-MAPPING** — a mapping document tying the incidents
  schema to Article 21(2)(b) on the technical-and-organisational
  measures side and Article 23 on the notification-timeline side, at
  clause granularity, the same way F-CP-01 closed against §21(2)(a)
  and F-CP-04 closed against §21(2)(e).
- **ROADMAP-FLIP** — In Progress → Shipped on the F-CP-02 row once
  the acceptance criteria above all read green.

The beats walk in the order the sibling streams walked them, because
the substrate they walk against is the one F-CP-01 and F-CP-04 closed
on. The incidents lane does not re-invent the shape; it composes onto
it.

## What this note does not promise

It does not promise the incidents lane reads Shipped. CORE-FANOUT
closes the parity-at-emission beat; three beats remain ahead of the
ROADMAP flip on the same shape the sibling streams walked.

It does not promise the per-target goldens are pinned for the
incidents emitter. The shared helper underneath it is pinned by the
F-CP-01 and F-CP-04 fixtures already on disk; the incidents-specific
goldens ride their own EXTEND-tests-goldens beat ahead on the lane.

It does not promise the drift hook is wired on the incidents adapter.
The contract sits on the shared emitter; the adapter threads it
through the same way every F-CP-01 and F-CP-04 adapter threads the
noop default through today.

It does not promise the Article 13(8) entry exhausts the CRA mapping
surface. The CRA mapping substrate carries one more entry today than
it carried yesterday; further entries — and further external
contributions — ride the same lane the same way.

## Community lane status

The community-ignition entry point — "Open for contributors" — remains
live against the good-first-issues on `secops-ng-framework`, and the
free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the launch-
window workflow set (F-WF-01 vulnerability triage, F-WF-03 alert
triage, F-WF-05 incident management) reading **Shipped** on every
reference compile target, F-CP-01 risk-analysis and F-CP-04
vulnerabilities reading **Shipped** end-to-end on the continuous-
posture side, F-CP-02 incidents reading SKELETON-layer parity closed
across all three targets at CORE-FANOUT, and the CRA mapping
substrate carrying its first external-contributor entry on the
support-period clause.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-02 CORE-FANOUT through
  [PR #280](https://github.com/secops-ng/secops-ng-framework/pull/280),
  composing onto the Temporal SKELETON shipped through
  [PR #279](https://github.com/secops-ng/secops-ng-framework/pull/279);
  CRA Article 13(8) support-period mapping entry through
  [PR #281](https://github.com/secops-ng/secops-ng-framework/pull/281).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-five that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
three slots with their SKELETON layer closed at three-target parity,
two of them shipped end-to-end, and the CRA mapping substrate reads
one more entry than it carried yesterday — landed by a contributor
walking in through the same public PR lane every contribution rides.

More from the lanes as the F-CP-02 EXTEND beats pick up the shape
CORE-FANOUT just closed against, and as the community lane carries
the next contribution onto the substrate.
