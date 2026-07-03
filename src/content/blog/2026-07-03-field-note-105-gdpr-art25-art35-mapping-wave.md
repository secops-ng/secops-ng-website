---
title: "Field note #105 — GDPR Art.25 by-design and Art.35 DPIA land, completing the GDPR clause tree"
description: "Field note one hundred and five from the SecOps-NG Digital Commons. Two framework PRs — #607 and #608 — bring GDPR Article 25 data-protection-by-design and Article 35 data-protection-impact-assessment into the machine-readable mapping tree. The GDPR surface on the catalogue now carries eight per-clause YAMLs, from Article 5 through Article 35, and every alert, incident, and vulnerability-management step can trace itself to the article it discharges."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "regulatory-mapping", "gdpr", "gdpr-article-25", "gdpr-article-35", "data-protection-by-design", "dpia", "vulnerability-management", "cacao", "digital-commons", "field-note-105"]
---

Field note one hundred and five. Two framework PRs merged in the
last twenty-four hours — PR #607 and PR #608 — and with them the
GDPR machine-readable clause tree finishes its first full pass.
Eight per-clause YAMLs now cover the GDPR operational surface end
to end: Article 5 (principles), Article 6 (lawful basis), Article
25 (by-design), Articles 26–28 (controllers, joint controllers,
processors), Article 32 and 32(1)(a) (security of processing),
Articles 33–34 (breach notification), and Article 35 (DPIA). That
is the whole operational spine of the regulation, and it is now on
the catalogue in a shape the compilers and the audit tooling both
consume.

## What shipped

Two PRs, both in `secops-ng-framework`, both G-02:

- **PR #607 — F-MAP-GDPR CORE-7 (Article 25).** Wires the Article 25
  data-protection-by-design cluster onto three of the catalogue's
  vulnerability-posture playbooks: `codebase_vuln_management`,
  `infra_posture_management`, and `vuln_intake`. Each remediation
  step that reduces the personal-data attack surface — patch cadence,
  hardening controls, intake filtering — carries its Article 25
  reference alongside the CACAO step, so the by-design obligation is
  discharged where the work happens rather than in a controls
  document maintained on the side.
- **PR #608 — F-MAP-GDPR CORE-8 (Article 35).** Lands the DPIA per-
  clause YAML across `data_exfil`, `identity_compromise`, and
  `ransomware_containment`. Where a playbook step touches high-risk
  processing conditions — large-scale processing, systematic
  monitoring, special-category data on the containment path — the
  Article 35 trigger is declared explicitly, with the DPIA conditions
  written as first-class metadata rather than folded into narrative.

These are the first machine-readable by-design and DPIA anchors in
the SecOps-NG content layer. Together with the earlier Article 6
lawful-basis wave (PR #605) and the DORA Article 10 detection wave
(PR #603) from earlier in the week, the operational side of GDPR
now moves through the catalogue on the same rails as NIS2, DORA,
and CRA — one shape, one review posture, one authoring pattern.

## Why by-design and DPIA, and why this matters

Article 25 and Article 35 are the two GDPR articles that most often
get treated as paperwork obligations, then discovered — under
supervisory pressure or after an incident — to be operational ones.
By-design is not a document; it is the choice a codebase makes
about what it collects, retains, and exposes, expressed in the
patch cadence and hardening posture that vulnerability management
enforces. A DPIA is not a template; it is the reasoning about
high-risk processing that a containment playbook either records
in-band or reconstructs after the fact under time pressure.

What operators get with these two PRs on main:

- **By-design, at the step level.** Every remediation and hardening
  step in the three vuln-management playbooks now carries the
  Article 25 obligation it discharges. Reducing the exposed surface
  in `codebase_vuln_management` is not just a security metric; it
  is a data-protection-by-design step, and the mapping YAML says so
  in the same repository the executable step lives in.
- **DPIA triggers, at the trigger.** For `data_exfil` and
  `identity_compromise`, the conditions that would require a DPIA
  under Article 35 — high-risk processing, large-scale processing,
  special-category data, systematic monitoring — are enumerated in
  the mapping overlay next to the step that meets them. An operator
  running the playbook on real traffic can see which run touched
  DPIA-triggering conditions and produce that evidence without
  reconstructing it from logs after the fact.
- **Containment with its obligations named.** For
  `ransomware_containment`, Article 35 sits on the containment
  decisions that touch large-scale processing at the moment the
  decision is made. The regulatory reasoning is in the same file as
  the executable step.

The point of the machine-readable shape is not that it is elegant.
It is that it stops the auditor conversation from being a
translation exercise. The playbook, the mapping, and the run trace
are all in the same repository, in the same review posture, and
they refer to the same clauses in the same shape.

## What the Digital Commons is doing with this

Eight articles is not the end of GDPR coverage — some of the
downstream obligations (record-keeping under Article 30,
transfers under Chapter V) still live in narrative documentation
rather than in the mapping tree. What eight articles is, is enough
to say the operational surface of the regulation now has a first-
class home on the catalogue. An operator running a SecOps-NG
playbook stack against real EU traffic can discharge the GDPR
operational stack from the same files that run the workflow, with
the same review discipline that governs the code.

For contributors: the GDPR clause tree pattern is copyable to other
jurisdictions. If you are working on a national data-protection
regime, a sectoral overlay, or a supervisory guidance that ships as
per-article obligations, the per-clause YAML shape used across
these eight articles is exactly the shape you would replicate. The
authoring guide at `docs/contributing/playbook-authoring.md` walks
through the mapping overlay and the parametrised orphan-CI helper
as first-class documentation. Pick a jurisdiction, pick a playbook,
open a mapping overlay against it, and the review posture is the
same one that carried these two PRs to main.

## Where to look

- `secops-ng-framework` on GitHub — PR #607, PR #608 on `main`.
- `content/playbooks/codebase_vuln_management/`,
  `infra_posture_management/`, `vuln_intake/` — Article 25 mapping
  overlays.
- `content/playbooks/data_exfil/`, `identity_compromise/`,
  `ransomware_containment/` — Article 35 mapping overlays with
  DPIA-trigger conditions declared inline.
- `docs/contributing/playbook-authoring.md` — the authoring guide
  with the cross-framework mapping pattern.

The GDPR tree has eight articles on it now. The pattern is on the
shelf, and the next jurisdiction is open on your terminal.

— the SecOps-NG commons
