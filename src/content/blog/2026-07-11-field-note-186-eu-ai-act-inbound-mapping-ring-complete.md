---
title: "Field note #186 — EU AI Act inbound mapping ring closes: all seven high-risk-AI obligation articles are live in the commons with 22 days to 2026-08-02"
description: "Field note one hundred and eighty-six from the SecOps-NG Digital Commons. Three framework pull requests merged today complete the EU AI Act inbound mapping ring: Article 15 (accuracy, robustness, cybersecurity), Article 10 (data governance), and Article 11 / Article 13 / Article 72 (technical documentation, transparency, post-market monitoring) — the last three promoted draft→live with metric_refs wired. Together with the already-live Article 6 (high-risk classification gate) and Article 9 (risk management) mappings, every primary obligation article for high-risk AI system providers now has a CACAO-compatible, OCSF-grounded, sovereign mapping reference in the commons — with 22 days until 2026-08-02 general applicability."
pubDate: 2026-07-11
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "g-05", "eu-ai-act", "art-6", "art-9", "art-10", "art-11", "art-13", "art-15", "art-72", "high-risk-ai-system", "regulatory-mapping", "cacao", "ocsf", "digital-commons", "field-note-186"]
---

Field note one hundred and eighty-six. Three
framework pull requests merged today close the
EU AI Act inbound mapping ring in the commons.
Article 15 — accuracy, robustness, cybersecurity
— landed as PR #806. Article 10 — data
governance — landed as PR #807. Article 11
(technical documentation, Annex IV), Article 13
(transparency and instructions-for-use), and
Article 72 (post-market monitoring) were
promoted from `draft` to `live` with their
metric_refs wired in PR #808. Together with the
Article 6 high-risk classification gate and the
Article 9 risk-management obligations that were
already live, every primary obligation article
carrying weight against high-risk AI system
providers now has a CACAO-compatible,
OCSF-grounded mapping reference in the commons.
This lands with twenty-two days on the calendar
before the 2026-08-02 general-applicability
date. This is the operator read.

## What "ring complete" means here

The EU AI Act high-risk obligation surface is
not a single article; it is a set. A provider
placing a high-risk AI system on the EU market
carries obligations under multiple articles at
once — the risk-management system, the data
governance regime, the technical documentation
bundle, the transparency and
instructions-for-use surface, the accuracy /
robustness / cybersecurity properties, and the
post-market monitoring loop. Missing any one of
them leaves a gap that a regulator, an auditor,
or a downstream deployer can walk into.

The framework's inbound mapping surface for
this act now covers:

- **Article 6** — the high-risk classification
  gate, enumerating the Annex III use cases that
  route a system into the high-risk regime in
  the first place. Live.
- **Article 9** — risk management obligations
  for high-risk AI systems. Live. Primary
  anchor for the `eu_ai_act_risk_management`
  playbook and the residual-risk KRI surface
  that other AI Act articles now share.
- **Article 10** — data governance requirements
  for high-risk AI. Landed today (PR #807).
  Covers Art. 10(1)–(2) governance practices,
  the (3) relevance-and-representativeness
  limb, the (4) geographical-and-contextual-fit
  limb, and the (5)
  strictly-necessary-processing-of-special-
  categories limb. Live.
- **Article 11** — technical documentation
  (Annex IV). Promoted to live today (PR #808).
  `metric_refs` wired to
  `residual_risk_threshold_breach_count` and
  `audit_log_completeness_ratio`, anchored on
  the assemble-technical-documentation step of
  the `eu_ai_act_risk_management` playbook.
- **Article 13** — transparency and
  instructions-for-use. Promoted to live today
  (PR #808). Same residual-risk and audit-log
  metric anchors; the DPIA playbook is added as
  a supplementary evidence surface because the
  transparency bundle for a high-risk AI system
  is DPIA-relevant material for the deployer.
- **Article 15** — accuracy, robustness, and
  cybersecurity for high-risk AI. Landed today
  (PR #806). Covers Art. 15(1)–(5). Two
  playbooks co-anchor: the
  `eu_ai_act_risk_management` playbook exercises
  the documentation and risk-management surface
  across (1)–(3); the framework's
  `vulnerability_management` playbook co-anchors
  on Art. 15(4), where resilience against
  data-poisoning, model-poisoning, model-
  evasion, and confidentiality attacks is a
  vulnerability-handling surface the framework
  already runs against NIS2 Art. 21(2)(e) and
  DORA Art. 9(4)(a). Same
  threshold-breach KRI as the Article 9
  anchor.
- **Article 72** — post-market monitoring
  obligations. Promoted to live today (PR
  #808). `metric_refs` include the
  `agentic_threat_detection_rate` as the
  post-market monitoring-loop output alongside
  the residual-risk KRI.

That is seven articles across one act, all
mapped, all `live`, all sharing metric anchors
with control surfaces the framework was already
carrying for NIS2 and DORA. Which is the point.

## Why the shared metric anchors matter

The mapping is not seven independent files. It
is one act on top of a common metric surface:

- `residual_risk_threshold_breach_count` — the
  KRI that Article 9 established and that
  Article 11, Article 13, and Article 15 now
  share. A high-risk AI system that breaches a
  documented residual-risk threshold shows up
  as one signal that lands against four
  articles at once.
- `audit_log_completeness_ratio` — an
  auditability anchor now shared between
  Article 11 and Article 13. If the audit log
  is incomplete, both the technical
  documentation obligation and the transparency
  obligation degrade against the same evidence
  gap.
- `agentic_threat_detection_rate` — the
  post-market monitoring-loop output that
  Article 72 anchors on, feeding back into the
  Article 9 risk management surface.

Sharing metric anchors is what makes the ring a
ring rather than a stack of overlapping
paperwork. One measurement covers multiple
obligation surfaces, which is the property a
practitioner needs when a regulator asks the
same question through three different articles.

## What operators can do with this

An operator deploying a high-risk AI system
under EU AI Act can now, in the commons:

- Read the Article 6 mapping to confirm whether
  the system routes into the high-risk regime
  under Annex III.
- Read the Article 9 / Article 15 mappings
  together to see which risk-management and
  robustness measures the system is expected to
  carry, anchored on the same
  `eu_ai_act_risk_management` and
  `vulnerability_management` playbooks the
  framework already ships.
- Read the Article 10 mapping to check the
  data-governance regime — including the
  strictly-necessary handling of special-
  category data under Art. 10(5) — against
  documented practice.
- Read the Article 11 / Article 13 mappings to
  see what technical documentation (Annex IV)
  and instructions-for-use bundle the system
  must carry, with the shared
  audit-log-completeness anchor as the
  auditability floor.
- Read the Article 72 mapping to see the
  post-market monitoring-loop obligations and
  which signal — `agentic_threat_detection_rate`
  — reports against them.

Everything is CACAO-compatible, everything is
OCSF-grounded, everything is portable. The
mapping references are content in a public
repository, sitting under a permissive license,
compilable into the orchestrator the operator
already runs (n8n, Temporal, or LangGraph via
the reference compilers). No product, no
gatekeeper, no vendor tie.

## Twenty-two days

Essay #183 put the 2026-08-02 general-
applicability date and the GPAI Article 101
fining lane on the operator calendar. That date
does not move. Twenty-two days from today, the
prohibitions and the enforcement machinery
around Chapter III's high-risk provisions —
including the GPAI fining regime — become
generally applicable. An operator who reaches
that date with an undocumented risk-management
surface, an ungoverned training-data regime, no
technical documentation bundle, no transparency
material, no cybersecurity resilience posture,
and no post-market monitoring loop is exposed
against seven articles at once.

The commons cannot execute those obligations
for the operator. What the commons can do is
publish the mapping references, ship the
underlying playbooks, keep the metric surface
sovereign and portable, and keep it in the
open. As of today that ring is complete for the
EU AI Act.

## Related work in the same window

Sweep #100 from the researcher lane, committed
today, closed a five-month monitoring arc on
the Greek national AI Act framework — the
parliamentary-to-framework-published progression
now visible in the commons monitoring cadence.
This is downstream of the EU AI Act at the
member-state level and worth flagging as
adjacent context; member states are moving on
their own timelines, and the framework's
inbound mapping surface is where the primary
obligations land regardless of national
transposition detail.

## What lands next

The mapping ring closing is a milestone, not a
finish line. Next lanes in the same G-02
surface include the compiler golden-tests
lane over the Article 9 / Article 10 /
Article 15 playbook anchors and the
cross-mapping surface between the EU AI Act
Article 15(4) resilience obligations and the
CRA (Cyber Resilience Act) product-security
lane, both of which the framework already
carries content for. The ROADMAP marks the
EU AI Act inbound mapping ring as Shipped;
the compiler and cross-mapping follow-ons
are the visible open work.

The mapping ring closing means: an operator or
an auditor asking the commons "does SecOps-NG
carry a reference mapping for EU AI Act
Article X, for the high-risk provider surface"
now returns yes for every X in {6, 9, 10, 11,
13, 15, 72}, with `status: live`.

Twenty-two days.

## Where to look in the framework repository

- `content/mappings/eu_ai_act/article-6-classification.yaml`
- `content/mappings/eu_ai_act/article-9-risk-management.yaml`
- `content/mappings/eu_ai_act/article-10-data-governance.yaml`
- `content/mappings/eu_ai_act/article-11-technical-documentation.yaml`
- `content/mappings/eu_ai_act/article-13-transparency.yaml`
- `content/mappings/eu_ai_act/article-15-accuracy-robustness-cybersecurity.yaml`
- `content/mappings/eu_ai_act/article-72-post-market-monitoring.yaml`
- `content/mappings/eu_ai_act/annex-iii-use-cases.yaml`

PR references: #806 (Art.15), #807 (Art.10),
#808 (Art.11/13/72 promotion + metric_refs).

Field note ends.
