---
title: "Field note #107 — the four-regime mapping ring closes across NIS2, DORA, CRA, and GDPR"
description: "Field note one hundred and seven from the SecOps-NG Digital Commons. With GDPR Article 25 by-design, Article 35 DPIA, and CRA Annex I §1(h) DDoS response landing on main, every anchored playbook on the catalogue now traces to all four EU regulatory regimes in machine-readable per-clause YAMLs. No orphaned regime, no linkage left for the operator to write — and orphan-lint in CI keeps it that way."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "regulatory-mapping", "nis2", "dora", "cra", "gdpr", "four-regime-ring", "cacao", "digital-commons", "field-note-107"]
---

Field note one hundred and seven. With the last structural pieces
merging into `secops-ng-framework` this week, the four-regime
mapping ring on the catalogue is closed. Every playbook that carries
a regulatory anchor now traces to NIS2, DORA, CRA, and GDPR in
machine-readable per-clause YAMLs, in the same repository as the
executable step it maps. There is no regime left dangling, no
linkage left for the operator to write by hand, and the orphan-lint
CI guard means any new playbook that opens a gap fails its check
before it reaches review.

## What shipped

Four framework PRs closed the ring, all G-02:

- **PR #607 — GDPR Article 25 (by-design) cluster.** Wires
  data-protection-by-design onto `codebase_vuln_management`,
  `infra_posture_management`, and `vuln_intake`. Each remediation
  and hardening step that reduces the personal-data attack surface
  carries its Article 25 anchor next to the CACAO step.
- **PR #609 — GDPR schema extension.** Symmetric outbound-key
  parity in the GDPR overlay so the outbound clause references line
  up with the same shape the other three regimes use. Structural,
  small, and the reason PR #610 could land clean.
- **PR #610 — GDPR Article 35 (DPIA) symmetric outbound pins.**
  DPIA triggers pinned on `data_exfil`, `identity_compromise`, and
  `ransomware_containment` with the high-risk-processing conditions
  declared inline — large-scale processing, systematic monitoring,
  special-category data — instead of folded into a narrative
  document maintained on the side.
- **PR #606 — CRA Annex I §1(h) `ddos_response` anchor.** The
  last structural gap on the CRA Annex I coverage surface. With
  `ddos_response` anchored to §1(h), CRA Annex I §1 coverage is
  contiguous across the playbook set that touches product-security
  obligations.

Together with the alert-triage wave from earlier in the week
(PR #603 on DORA Article 10 detection, PR #605 on GDPR Article 6
lawful basis — field note #104) and the Article 25 / Article 35
GDPR wave (field note #105), these four PRs finish the structural
pass. What was in flight is now on main.

## Why a closed ring matters

The value of the ring is not that it is complete for its own sake.
It is that operators running any of the anchored playbooks get all
four regimes' obligations without having to translate between them.
Same file, same review posture, same clause shape.

Before the ring closed, an operator running `ransomware_containment`
under EU jurisdiction had NIS2 Article 23 notification and DORA
Article 19 ICT-incident reporting anchored inline, but had to
reason separately about whether the containment path touched
GDPR Article 35 DPIA-triggering processing conditions, and whether
the product itself carried CRA Annex I product-security
obligations. That reasoning happened after the fact, in a controls
document, under time pressure. Now the DPIA conditions and the
CRA anchors sit on the same step, in the same YAML the workflow
executes from.

For the four playbooks that lit up this week — `codebase_vuln_management`,
`infra_posture_management`, `vuln_intake`, `ddos_response` — plus
the outbound-symmetric containment set (`data_exfil`,
`identity_compromise`, `ransomware_containment`), the practical
effect is:

- **One traceability surface, four regimes.** An audit conversation
  that used to require four separate crosswalks now reads off one
  overlay per playbook. The mapping is in the same repository as
  the code that runs, in the same review discipline, and refers to
  the same clauses in the same machine-readable shape across NIS2,
  DORA, CRA, and GDPR.
- **No orphans, and no way to open one silently.** The orphan-lint
  guard in CI now catches any new anchored playbook that fails to
  declare its four-regime coverage. A contributor opening a
  mapping overlay against a fifth playbook, or extending an
  existing one, gets the failure at PR time rather than at audit
  time. That is what makes the ring durable.
- **The pattern is copyable.** The per-clause YAML shape that
  carried GDPR Article 25 and Article 35 across three playbooks
  each is the same shape that carried CRA Annex I §1(h) onto
  `ddos_response`. It is the same shape the DORA Article 10 and
  GDPR Article 6 waves used last week. One authoring pattern,
  documented in the guide, replicable by anyone opening the
  catalogue for the first time.

## What the Digital Commons is doing with this

Closing the four-regime ring is a structural milestone, not the
end of coverage. There are still downstream obligations that live
in narrative form — record-keeping under GDPR Article 30, transfers
under Chapter V, DORA third-party sub-outsourcing detail, CRA
Annex II documentation obligations — and there will be more
playbooks added to the anchored set. What is finished is the
scaffolding: every anchored playbook is guaranteed a four-regime
traceability surface, and the CI guard keeps that guarantee
honest.

For contributors and operators on the commons, the working posture
from here is straightforward:

- **Adding a playbook to the anchored set?** Follow the per-clause
  YAML shape documented in `docs/contributing/playbook-authoring.md`.
  The four-regime overlay pattern is on the shelf, and the
  orphan-lint guard will tell you if you missed a regime before a
  reviewer does.
- **Extending an existing playbook with a new clause?** The
  per-clause YAML lets you add an article or an annex point without
  touching the other three regimes' overlays. The GDPR outbound-key
  parity work in PR #609 is the pattern for schema extension when
  a regime needs it.
- **Operating an anchored playbook under EU jurisdiction?** The
  regulatory traceability is written in the same files the workflow
  executes from. The playbook run trace and the mapping overlay
  agree by construction — one repository, one review, four regimes.

## Where to look

- `secops-ng-framework` on GitHub — PRs #606, #607, #609, #610 on
  `main`, plus PR #603 and PR #605 from earlier in the week.
- `content/playbooks/codebase_vuln_management/`,
  `infra_posture_management/`, `vuln_intake/`,
  `ddos_response/`, `data_exfil/`, `identity_compromise/`,
  `ransomware_containment/` — per-clause mapping overlays across
  all four regimes.
- `docs/contributing/playbook-authoring.md` — authoring guide with
  the four-regime overlay pattern and the orphan-lint helper.
- `.github/workflows/` — the orphan-lint job that keeps the ring
  closed once you open it.

Four regimes, one shape, one review posture. The scaffolding is
done, the pattern is on the shelf, and the next playbook is open
on your terminal.

— the SecOps-NG commons
