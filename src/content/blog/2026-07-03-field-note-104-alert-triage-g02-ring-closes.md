---
title: "Field note #104 — alert_triage closes its G-02 mapping ring across NIS2, DORA, and GDPR"
description: "Field note one hundred and four from the SecOps-NG Digital Commons. Two framework PRs — #603 and #605 — land the last two edges of alert_triage's cross-framework mapping. The highest-frequency operational playbook on the catalogue now carries NIS2 Article 21(2)(b), DORA Article 10, and GDPR Article 6 as machine-readable per-clause YAMLs alongside its CACAO source. Every alert disposition can trace itself to the EU regulatory surface it discharges, without the operator writing that linkage by hand."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "regulatory-mapping", "alert-triage", "nis2", "nis2-article-21", "dora", "dora-article-10", "gdpr", "gdpr-article-6", "cacao", "digital-commons", "field-note-104"]
---

Field note one hundred and four. This one is small on the surface —
two framework PRs, both merged this week — and structurally larger
underneath. With PR #603 and PR #605 on `main`, the `alert_triage`
playbook becomes the first detection-operations workflow on the
catalogue to close its G-02 cross-framework mapping ring across
every EU regulatory axis it touches: NIS2 Article 21(2)(b) for
incident-handling, DORA Article 10 for ICT-related threat monitoring,
and GDPR Article 6 for the lawful-basis cluster that governs the
personal data an alert disposition inevitably processes.

The visible artifact is a set of per-clause YAML files under the
framework repository's mappings tree. The invisible artifact is
what stops being tribal knowledge.

## What shipped

Two PRs, both in `secops-ng-framework`, both G-02:

- **PR #603 — F-MAP-DORA-ALERTTRIAGE CORE.** Wires the `alert_triage`
  playbook into DORA Article 10 (ICT-related threat detection and
  monitoring) through the parametrised orphan-CI helper the mapping
  toolchain now exposes for detection-operations workflows. Each
  triage step that discharges a monitoring obligation carries an
  explicit reference to the DORA clause it satisfies.
- **PR #605 — F-MAP-GDPR CORE-6.** Lands the CACAO finalization
  marker for `alert_triage` and wires the GDPR Article 6 lawful-basis
  cluster onto the disposition steps that touch personal data:
  Article 6(1)(c) for legal-obligation processing where a breach
  notification is in scope, Article 6(1)(f) for legitimate-interest
  processing on the detection surface itself, with the compensating
  controls declared inline.

The NIS2 edge — Article 21(2)(b) incident-handling — was already on
main from an earlier wave. With DORA and GDPR now joining it, the
ring closes. `alert_triage` becomes the first operational playbook
that carries a full cross-framework mapping on every clause it
touches, not by narrative reference in a README but as machine-
readable per-clause YAMLs that the compilers and the auditor tooling
both consume.

## Why alert triage, and why this matters

Alert triage is the highest-frequency operational workflow in a
security programme. It is the step every other detection outcome
depends on: enrichment, escalation, containment, notification. If
the mapping story is credible for alert triage, it is credible for
the rest of the operational stack; if it is not credible here, it
is not credible anywhere.

What operators get, once these two PRs are on main:

- **Traceable dispositions.** Every alert outcome that
  `alert_triage` emits can trace itself back to the EU regulatory
  surface it discharges. An escalation that becomes an incident
  carries its NIS2 Article 21(2)(b) linkage. A step that queries
  identity or endpoint telemetry carries its GDPR Article 6 lawful
  basis. A monitoring assertion carries its DORA Article 10
  reference. Nothing is inferred, nothing is written twice.
- **Auditor conversation, without translation.** The operator does
  not have to translate the playbook into the auditor's control
  language. The mapping YAMLs are the control language, and they
  live in the same repository as the executable step topology. An
  auditor can read the framework, then read the mapping, then read
  the run trace, and follow one thread.
- **The pattern is copyable.** The per-clause YAML shape used here
  is the same shape used across the twenty-nine playbooks on the
  catalogue. Contributors picking up other playbooks to close their
  G-02 rings can replicate the pattern directly; the authoring
  guide at `docs/contributing/playbook-authoring.md` walks through
  the mapping overlay and the parametrised orphan-CI helper as
  first-class documentation, not as an afterthought.

## What the Digital Commons is doing with this

The mapping ring closing on alert triage is the point where the
detection-operations story on the catalogue stops being three
separate stories that happen to share a playbook. It becomes one
story with three regulatory readings, all wired to the same
executable source.

That matters practically. NIS2 enforcement is live this month; DORA
year-one supervisory reporting is a running obligation; GDPR has
always been the substrate. An operator running `alert_triage`
against real traffic is discharging duties under all three at once,
whether or not the paperwork acknowledges it. The catalogue now
lets the paperwork acknowledge it, machine-readably, from the same
files that drive the workflow.

For contributors: this is the pattern to copy. Pick a playbook
whose G-02 ring is still open, read the mappings overlay on
`alert_triage`, and use the authoring guide to walk the same
milestones on your target. The parametrised orphan-CI helper is
shared; the per-clause YAML shape is shared; the review posture on
the pull request is the same. What differs is the clauses each
playbook touches, and the compensating controls each disposition
carries.

## Where to look

- `secops-ng-framework` on GitHub — PR #603, PR #605 on `main`.
- `content/playbooks/alert_triage/` — the CACAO v2 source and the
  mappings overlay, now spanning NIS2, DORA, and GDPR.
- `docs/contributing/playbook-authoring.md` — the authoring guide
  with the cross-framework mapping pattern documented as a
  first-class step.

The ring is closed on this one. The next one is open on your
terminal, and the pattern is on the shelf.

— the SecOps-NG commons
