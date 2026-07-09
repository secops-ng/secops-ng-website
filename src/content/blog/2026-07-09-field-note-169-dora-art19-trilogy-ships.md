---
title: "Field note #169 — DORA Article 19 major-incident reporting trilogy ships: CORE + EXTEND close, the 4-hour / 72-hour / one-month cycle now portable across n8n, Temporal, and LangGraph with a practitioner cookbook attached"
description: "Field note one hundred and sixty-nine from the SecOps-NG Digital Commons. Framework PRs #770 (CORE) and #771 (EXTEND) close the DORA Article 19 major-ICT-related-incident reporting ring on top of the SKELETON covered by field note #168. The dora_major_incident_reporting CACAO v2 playbook now compiles byte-parity to n8n, Temporal, and LangGraph, and a practitioner cookbook walks operators through the full Art. 18 classification gate, Art. 19(4)(a)/(b)/(c) timeline, CACAO topology, OSCAL anchors, and three-target hand-off. ROADMAP F-DORA-ART19 flips to Shipped."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "playbook", "dora", "dora-art-19", "dora-art-18", "incident-reporting", "financial-sector", "cacao", "cookbook", "n8n", "temporal", "langgraph", "digital-commons", "field-note-169"]
---

Field note one hundred and sixty-nine. Two framework
PRs land the second and third rings of the DORA
Article 19 major-incident reporting workflow, closing
the trilogy that opened with the SKELETON covered in
[field note #168](/blog/2026-07-09-field-note-168-dora-art19-skeleton/).

- PR #770 (CORE) lands the three-target compile
  examples for `dora_major_incident_reporting` — one
  n8n workflow, one Temporal workflow, one LangGraph
  graph — with byte-parity golden tests holding each
  target against the CACAO v2 source.
- PR #771 (EXTEND) lands the practitioner cookbook at
  `docs/cookbook/dora_major_incident_reporting.md`,
  walking an operator from the Art. 18 classification
  gate through the Art. 19(4)(a)/(b)/(c) timeline,
  the CACAO topology, the OSCAL anchors, and the
  three-target hand-off. The ROADMAP entry for
  F-DORA-ART19 flips to Shipped.

## What byte-parity across three targets actually buys

The SKELETON established the reporting arc as one
CACAO v2 artifact. CORE fans that single artifact into
three concrete workflow-engine implementations —
n8n, Temporal, and LangGraph — and the golden tests
hold every compile deterministic against the source.
That is the property that matters: an operator on
Temporal and an operator on n8n running the same
playbook version discharge Article 19 against the
same authority-visible content shape, on the same
milestone clocks, with the same audit-evident record
per submission. The choice of orchestrator is a
deployment concern, not a compliance one.

Three-target byte-parity is also what makes the
playbook portable in the direction that matters for
a Digital Commons: an operator adopting the workflow
today on n8n can migrate to Temporal or LangGraph
tomorrow without re-arguing DORA conformance with
a supervisor. The artifact is the compliance surface;
the runtime is a swap.

## What the cookbook walks

EXTEND ships the practitioner cookbook the SKELETON
and CORE rings pointed at:

- The **Art. 18 classification gate** — reading an
  ICT-related incident against the Commission
  Delegated Regulation (EU) 2024/1772 criteria and
  emitting the dated classification decision that
  fires (or short-circuits) the reporting arc.
- The **Art. 19(4)(a)/(b)/(c) timeline** — the three
  milestone clocks (initial within 4 hours of
  classification and 24 hours of awareness;
  intermediate within 72 hours; final no later than
  one month after the intermediate) mapped step by
  step onto the CACAO topology.
- The **CACAO topology** — the five operational
  steps and the workflow variables carrying the
  classification-decision timestamp forward as the
  anchor every downstream deadline is computed
  against.
- The **OSCAL anchors** — the outbound overlay tying
  each step to its DORA / ITS / Delegated Regulation
  reference so a compiled workflow at runtime can
  emit control-evidence records against the same
  identifiers a supervisor names on examination.
- The **three-target hand-off** — the compile-target
  configuration inputs (authority endpoint,
  credentials, submission-channel binding) that let
  the same source artifact land against a payment
  institution's EBA-via-NCA chain and an investment
  firm's ESMA-via-NCA chain without forking the
  content.

The cookbook is written for the operator who has to
run the arc under time pressure — the on-call reader
whose incident just crossed the Article 18 threshold
and who needs the deadline arithmetic and the
submission shape correct on the first pass. Not a
tutorial; a per-milestone reference.

## The three parallel clocks, disambiguated

An EU financial entity of any real size lives under
multiple reporting regimes at once. The cookbook and
the mapping overlay both name the disambiguation
explicitly so operators do not conflate the lanes:

- **DORA Art. 19 report** — fires on the Article 18
  major-incident classification decision. Three
  milestones (4h/24h initial, 72h intermediate, one
  month final). Files to the operator's sectoral
  European Supervisory Authority via the National
  Competent Authority chain against the Commission
  ITS content shape (Implementing Regulation (EU)
  2024/2956).
- **NIS2 Art. 23 report** — fires on the significant
  incident threshold in Article 23(3). Three
  milestones (24h early warning, 72h notification,
  one month final). Files to the CSIRT / competent
  authority chain named in the national NIS2
  transposition.
- **GDPR Art. 33 report** — fires on personal-data
  breach awareness. One milestone (72h to the lead
  supervisory authority) plus a downstream Art. 34
  data-subject notification branch where the risk
  threshold trips.

Three regimes, three parallel clocks, three separate
authority chains, one underlying incident. The DORA
playbook does not fire the NIS2 or GDPR chain — the
sibling playbooks (`incident_management` for the NIS2
lane; the breach-notification cluster for the GDPR
lane) discharge those in parallel. What the DORA
artifact contributes is a per-cycle archival record
that names the sibling chains at the closure step,
so a supervisor reading any one of the three closure
records can walk to the other two without inferring
the relationship from prose.

## Where this leaves the commons

The DORA Chapter III reporting surface now has a
portable, dated, per-milestone-auditable artifact in
the commons — CACAO v2, byte-parity across n8n,
Temporal, and LangGraph, and paired with a
practitioner cookbook that walks the arc end-to-end
with paragraph-level DORA precision. The G-01 counter
advances against the target of ≥ 25 CACAO v2
playbooks in the commons, and G-02 closes on DORA
Art. 19(4)(a)/(b)/(c) and Art. 18(1) as primary
anchors with NIS2 Art. 23(4)(b) and GDPR Art. 33 as
cross-regime siblings named at the mapping layer.

The playbook stands alongside the NIS2 Article 20
governance ring shipped earlier this week and the
security-awareness training ring covered in
[field note #167](/blog/2026-07-09-field-note-167-security-awareness-training/):
three EU regulatory obligations, three portable
artifacts, one durable commons.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- Practitioner cookbook (EXTEND): `docs/cookbook/dora_major_incident_reporting.md`
- SKELETON context: [field note #168](/blog/2026-07-09-field-note-168-dora-art19-skeleton/)
- Roadmap goals: G-01 (content coverage) and G-02 (regulatory-graph closure).
