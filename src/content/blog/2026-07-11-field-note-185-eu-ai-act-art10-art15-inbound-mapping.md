---
title: "Field note #185 — EU AI Act Art.10 + Art.15 inbound mapping lands: data governance and accuracy/robustness/cybersecurity join the G-02 ring ahead of the 2026-08-02 deadline"
description: "Field note one hundred and eighty-five from the SecOps-NG Digital Commons. Two framework pull requests merged today extend the EU AI Act inbound mapping surface with Article 10 (data governance) and Article 15 (accuracy, robustness, cybersecurity). Together they close the last major EU AI Act mapping-ring gap that was open ahead of the 2026-08-02 general-applicability grace-period-end, alongside the Art.11 / Art.13 / Art.72 CORE work still under review. Practitioners running high-risk AI systems now have CACAO-compatible mapping references for Art.10 and Art.15 anchored on the same risk-management and vulnerability-management playbooks the framework already carries."
pubDate: 2026-07-11
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "eu-ai-act", "art-10", "art-15", "data-governance", "accuracy", "robustness", "cybersecurity", "high-risk-ai-system", "regulatory-mapping", "cacao", "digital-commons", "field-note-185"]
---

Field note one hundred and eighty-five. Two pull
requests landed against `secops-ng-framework`
today that together close the last major open gap
in the EU AI Act inbound mapping ring ahead of
the 2026-08-02 general-applicability
grace-period-end that essay #183 already put on
the operator calendar. Article 10 — data
governance for high-risk AI systems — joins the
inbound mapping surface, and Article 15 —
accuracy, robustness, and cybersecurity — joins
it on the same day. The article-11 / article-13 /
article-72 CORE follow-on is under review as a
separate change. This is the operator read.

## What landed

- **PR #806 — Article 15 inbound mapping.** Adds
  `content/mappings/eu_ai_act/article-15-accuracy-robustness-cybersecurity.yaml`
  covering the accuracy, robustness, and
  cybersecurity obligations high-risk AI system
  providers carry under Art. 15(1)–(5). The
  article-9 / article-72 schema shape is
  preserved. Two playbooks anchor: the
  `eu_ai_act_risk_management` playbook stays the
  primary exerciser of the documentation and
  risk-management surface across Art. 15(1)–(3);
  `vulnerability_management` co-anchors on Art.
  15(4), where data-poisoning, model-poisoning,
  model-evasion, and confidentiality-attack
  resilience is a vulnerability-handling surface
  the framework already carries against NIS2
  Art. 21(2)(e) and DORA Art. 9(4)(a). Same
  threshold-breach KRI as the Art. 9 anchor.
- **PR #807 — Article 10 inbound mapping.** Adds
  `content/mappings/eu_ai_act/article-10-data-governance.yaml`
  covering Art. 10(1)–(5). The Art. 10(1)–(2)
  data-governance-practices surface, the Art.
  10(3) relevance-and-representativeness limb,
  the Art. 10(4) geographical-and-contextual-fit
  limb, and the Art. 10(5) strictly-necessary
  carve-out for processing GDPR Art. 9(1)
  special-category data for bias detection and
  correction are each named against the
  `eu_ai_act_risk_management` playbook as the
  primary anchor, with the
  `data_protection_impact_assessment` playbook as
  the secondary anchor — the Art. 10(5) leg is a
  GDPR Art. 35(3)(b) mandatory-DPIA trigger, and
  the DPIA lifecycle is the ex-ante process that
  documents necessity, proportionality, and
  safeguards.

## Why this closes the ring

Field note #133 shipped the
`eu_ai_act_risk_management` CACAO v2 playbook
last week. Field note #134 closed the G-02
traceability triangle around it with the first
inbound mapping wave — Art. 9, Art. 11, Art. 13,
Art. 72 at SKELETON scope. Today's two merges
extend that same triangle to two more Chapter III
provider obligations that carry direct 2026-08-02
enforcement weight: the data-quality obligations
that make an Art. 9 risk case defensible, and the
accuracy / robustness / cybersecurity obligations
that make an Art. 15 attack surface auditable.

The mapping shape stays the same one the
community has been publishing against all year.
An operator points at Article 15(4). The clause
YAML names both anchoring playbooks. The
`eu_ai_act_risk_management` mappings file carries
the backlink from the primary anchor. The
`vulnerability_management` mappings file carries
the backlink from the co-anchor. The same
`kri.residual_risk_threshold_breach_count@v1` KRI
that the Art. 9 anchor already exercises carries
through — one residual-risk acceptability line,
three obligation surfaces, one auditable metric.
A change to any corner is required to keep the
others consistent.

Article 10 lands the same way. The clause file
names the primary and secondary playbook
anchors. The `eu_ai_act_risk_management` mappings
file carries the backlink alongside the existing
Art. 9 / 11 / 13 / 15 / 72 entries. The Art.
10(5) special-category leg is explicitly reached
through the DPIA lifecycle, which the framework
already ships against GDPR Art. 35 as its own
playbook and inbound mapping — so the
cross-regime edge between the AI Act's
strictly-necessary bound and GDPR's
data-minimisation reader is not asserted in
prose, it is followed by two mapping files that
both reach the DPIA workflow.

## What this means for practitioners

For a community member running a high-risk AI
system in the EU today, the two obligations that
carry the sharpest operator-side workload against
the 2026-08-02 date are the data-governance
surface — the one that requires you to be able to
say what your training, validation, and testing
data actually is, and how you looked at it for
bias — and the accuracy / robustness /
cybersecurity surface — the one that requires you
to be able to say what accuracy you declared,
what adversarial resilience you validated, and
what cybersecurity posture your system was
deployed under.

Neither of those is a paperwork surface. Both are
lifecycle surfaces. Both need a workflow to hang
against, and both need a metric to close against.
The commons now carries CACAO-compatible mapping
references that name that workflow and pin that
metric for practitioners who want to read them,
adopt them, or fork them. There is no product
here — the artefacts are YAML in a public
framework tree, the same shape as every other
regulation family the commons already carries.

## What is still moving

The article-11 (technical documentation) /
article-13 (transparency toward deployers) /
article-72 (post-market monitoring) CORE inbound
mapping is under review as a separate change and
will follow this note when it merges. Together
with the Art. 9 / Art. 10 / Art. 15 files now in
tree, the Chapter III provider-obligation surface
the 2026-08-02 date lands against is what the
G-02 milestone was scoped to cover, and the
commons is publishing that surface in the open,
one article at a time, against a public
deadline.

Twenty-two days remain to general applicability.
The ring is closing.

— The SecOps-NG commons
