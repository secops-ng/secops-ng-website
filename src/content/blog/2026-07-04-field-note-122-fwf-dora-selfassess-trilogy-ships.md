---
title: "Field note #122 — the DORA Chapter II ICT risk self-assessment roll-up ships as a full trilogy; scaffold, three compilers, and cookbook land together (F-WF-DORA-SELFASSESS, G-01/G-03)"
description: "Field note one hundred and twenty-two from the SecOps-NG Digital Commons. The DORA Chapter II ICT risk management self-assessment roll-up playbook lands as a complete lifecycle object in a single wave: a CACAO v2 scaffold anchored on Art. 6/7/8/10/11 with the Art. 6(5) annual review cadence and the post-major-incident review trigger modelled explicitly, three reference compilers (n8n, Temporal, LangGraph) with byte-parity goldens, and a cookbook walkthrough. DORA Chapter II is now a durable, framework-native playbook, not five mapping rows."
pubDate: 2026-07-04
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-03", "dora", "chapter-ii", "ict-risk-management", "art-6", "art-7", "art-8", "art-10", "art-11", "self-assessment", "cacao", "playbook", "compilers", "digital-commons", "field-note-122"]
---

Field note one hundred and twenty-two. The NIS2 Article 21 self-
assessment playbook shipped its cookbook walkthrough earlier
today — field note #119, third cookbook in the current
compliance wave. The DORA counterpart lands next, and it lands
the same way the DPIA playbook did in field note #114: as a
full trilogy in a single wave. Scaffold, compilers, and
cookbook, together. The DORA Chapter II ICT risk management
self-assessment roll-up is now a durable, framework-native
object at `content/playbooks/dora_ict_risk_selfassess/` in the
framework repository, with the three reference compile targets
lit up and a walkthrough on the docs side.

## What shipped

Three pull requests, one lifecycle:

- **PR #648 (F-WF-DORA-SELFASSESS SKELETON).** The CACAO v2
  scaffold under `content/playbooks/dora_ict_risk_selfassess/`.
  Five section atoms cover the Chapter II obligation surface
  the roll-up is scored against — Art. 6 (ICT risk management
  framework), Art. 7 (ICT systems, protocols, and tools),
  Art. 8 (identification), Art. 10 (detection), Art. 11
  (response and recovery). Inbound backlinks land on all five
  DORA Chapter II map files so the mapping rows now point at
  the playbook that operationalises them, not just at the
  regulatory text.
- **PR #649 (F-WF-DORA-SELFASSESS CORE).** The three compile-
  target emitters under `examples/n8n/dora_ict_risk_selfassess/`,
  `examples/temporal/dora_ict_risk_selfassess/`, and
  `examples/langgraph/dora_ict_risk_selfassess/`. Byte-parity
  goldens across all three targets — the evidence bundle an
  n8n workflow emits and the evidence bundle a Temporal
  workflow emits are the same bytes for the same inputs. The
  compilers are the CI check that keeps the roll-up portable
  across the reference runtimes.
- **PR #651 (F-WF-DORA-SELFASSESS EXTEND-DOCS).** The cookbook
  walkthrough at `docs/cookbook/dora_ict_risk_selfassess.md`,
  plus the ROADMAP entry. Walks an operator from the "we owe
  our board an annual DORA Chapter II posture read" moment to
  the dated attestation with the five-section roll-up recorded
  and the Art. 6(5) review cadence set.

The SKELETON → CORE → EXTEND arc is the pattern the F-WF-* wave
has held across the compliance playbooks. F-WF-DPIA landed all
three layers in one field note (#114); the DSR playbook staggered
across three; the NIS2 self-assessment landed in two waves plus
a standalone cookbook (field notes #115 and #119). DORA arrives
compressed to one wave because the scaffold shape is close
enough to the NIS2 self-assessment shape to make the compilers
cheap — the roll-up posture is the same, only the regulatory
anchors and the section topology change.

## Why an EU financial entity with DORA in scope cares

DORA Chapter II is the ICT risk management backbone of the EU
financial services digital operational resilience regime. Art. 6
names the risk management framework itself — the governance
scaffold the financial entity is required to operate. Art. 7
names the ICT systems, protocols, and tools that framework
covers. Art. 8 names the identification obligation — the
inventory and mapping of the business functions and information
assets the framework protects. Art. 10 names the detection
obligation. Art. 11 names the response-and-recovery obligation
with the continuity policy and its testing cadence attached.

Five articles, one framework, one annual posture read the board
of the financial entity signs off. In practice that becomes a
board deck that gets rebuilt from scratch every year, cross-
referenced against last year's deck by hand, and is very hard
to point at when the competent authority asks how the
assessment was actually run. The scaffold that ships today is
the workflow shape. It has:

- A collect stage that gathers evidence from the per-article
  playbooks the framework already carries — the risk
  management framework artefacts on Art. 6, the asset
  inventory on Art. 8, the detection posture on Art. 10, the
  continuity-testing register on Art. 11. Nothing new to
  emit; the roll-up reads what the operator's existing
  Chapter II playbooks already produce.
- A map stage that lands each evidence record against the
  section atom it belongs to — five sections mirroring the
  five articles the scaffold anchors.
- A score stage that produces the per-section posture read and
  the aggregate posture read, on a rubric the operator
  configures once and re-uses across cycles.
- An attest stage that lands the dated attestation with the
  full section roll-up recorded and the Art. 6(5) review-
  cadence date set.

## The Art. 6(5) cadence and the post-major-incident trigger

Two lifecycle facts the scaffold pins explicitly, because DORA
pins them explicitly:

- **Art. 6(5) annual review.** The ICT risk management
  framework has to be reviewed at least once per year, and
  the review outcome documented. The scaffold carries the
  cadence surface the operator points at, defaulting to a
  12-month recurrence, and lands the review date on the
  attestation record so the next cycle knows when it is due.
- **Post-major-incident review trigger.** DORA also requires
  a review after a major ICT-related incident. The scaffold
  carries an inbound trigger for the incident-classification
  surface the operator's incident register already emits;
  when a major incident is classified, the roll-up run is
  scheduled as an out-of-cycle review rather than waiting for
  the annual cadence. Both triggers land the same attestation
  shape; the trigger reason is recorded on the record so the
  audit trail carries the *why* alongside the *what*.

Neither cadence is invented by the commons. Both are named by
DORA and both are modelled in the scaffold rather than left as
prose in a policy document.

## Compile-target parity: what byte-parity goldens buy

G-03 is the compile-target parity goal — the same playbook
compiled to n8n, Temporal, and LangGraph produces the same
evidence for the same inputs, and CI enforces it. The DORA
self-assessment roll-up joins that discipline on landing:

- One shared evidence bundle shape across all three targets.
- Golden fixtures committed under each target's example
  directory that pin the emitted bytes.
- A CI check that fails the wave if any target drifts.

The point is not that the reference targets matter in
themselves — an operator running the roll-up on their own
runtime does not care what n8n emits. The point is that if the
same scaffold produces the same evidence across three
independent runtimes, the scaffold itself is portable, and the
operator's runtime is one of many the roll-up can be compiled
to. The commons is not asking the operator to adopt a
particular workflow engine. It is showing that the playbook is
engine-agnostic by making three engines emit the same bytes.

## What an operator does with this tomorrow

For a financial entity that already runs per-article Chapter II
playbooks and lands their evidence in a discoverable store:

1. Pull the scaffold from
   `content/playbooks/dora_ict_risk_selfassess/`. Read the
   inbound backlinks landed on the five Art. 6/7/8/10/11 map
   files to confirm the mapping picture the roll-up reads
   against.
2. Point the collect stage at the evidence store the per-
   article playbooks already emit into. No new emission
   contract; the roll-up reads what is already there.
3. Compile the scaffold to the operator's target runtime.
   Take one of the three reference emitters as the starting
   template, or hand-compile against the scaffold — either
   way, the goldens are the check that the output is right.
4. Configure the Art. 6(5) cadence surface — the default 12-
   month recurrence is the DORA floor; the operator may run
   more frequently. Wire the incident-classification trigger
   to the operator's incident register so a major-incident
   classification schedules an out-of-cycle roll-up.
5. Run the first cycle end to end on last year's evidence,
   confirm the section scoring rubric produces the posture
   read the board expects, and land the attestation. The
   cookbook walkthrough at `docs/cookbook/dora_ict_risk_selfassess.md`
   holds the operator's hand through the first cycle.

The observation contract stays portable. The scaffold reads
what the operator's Chapter II playbooks already emit. Nothing
new to instrument; the roll-up is the read, not another write
axis.

## Where this sits against G-01 and G-03

G-01 is the content-coverage goal — the commons carries a
durable, framework-native playbook for every compliance
obligation the EU digital-operational-resilience regime names.
Chapter II is the ICT risk management heart of DORA; the
roll-up scaffold plus the five article-anchored section atoms
add the most complex multi-regulation self-assessment posture
the compliance wave has landed to date. G-01 progresses.

G-03 is the compile-target parity goal — every SKELETON that
lands gets three compile-target emitters with byte-parity
goldens on the CORE wave. The DORA self-assessment CORE
(PR #649) holds that bar across n8n, Temporal, and LangGraph
on landing. G-03 holds.

The trilogy is on the shelf. The NIS2 Article 21 posture read
lands next to the DORA Chapter II posture read, both anchored
on the same shape, both portable across the same three
runtimes. An operator running under both regimes reads them
side by side without a second workflow engine.

## Where to look

- `secops-ng-framework/content/playbooks/dora_ict_risk_selfassess/`
  — the CACAO v2 scaffold, five section atoms on Art. 6/7/8/
  10/11, inbound backlinks on the five DORA Chapter II map
  files.
- `secops-ng-framework/examples/{n8n,temporal,langgraph}/dora_ict_risk_selfassess/`
  — the three reference compile targets with byte-parity
  goldens under each.
- `secops-ng-framework/docs/cookbook/dora_ict_risk_selfassess.md`
  — the cookbook walkthrough an operator running their first
  Chapter II roll-up cycle reads.
- Field note #114 — the DPIA trilogy, prior instance of the
  all-in-one-wave pattern.
- Field note #119 — the NIS2 Article 21 self-assessment
  cookbook walkthrough, sibling posture read across the
  other major EU regime.

DORA Chapter II is a playbook now, not five mapping rows.
