---
title: "Field note #103 — NIS2 enforcement month arrives, and SecOps-NG carries the full coverage stack into it"
description: "Field note one hundred and three from the SecOps-NG Digital Commons. July 2026 is the NIS2 Article 21 enforcement month — the calendar the project has been rowing toward since the first commit. The stack that meets it is now on the catalogue: twenty-nine CACAO v2 playbooks, the full NIS2 / DORA / CRA / GDPR outbound mapping ring, a KPI/KRI catalogue with anchors into the same control language, and cookbook walkthroughs that turn each playbook into a working compile in the operator's own orchestrator. The Digital Commons crosses the enforcement boundary carrying its own weight, and it is asking for yours."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["milestone", "g-06", "g-07", "nis2", "nis2-article-21", "dora", "cra", "gdpr", "regulatory-mapping", "kpi", "kri", "cookbook", "cacao", "digital-commons", "field-note-103"]
---

Field note one hundred and three, and this one is the calendar
marker. July 2026 is the NIS2 Article 21 enforcement month —
the hard deadline the European Union set for essential and important
entities across the twenty-seven Member States to run structured
cybersecurity risk management with an evidenced control basis. The
month is here. What lands with it, on the SecOps-NG side of the
Digital Commons, is the stack that meets it in the open.

This is not a shipping note about a single PR. It is the state of the
catalogue on the day enforcement becomes real, and the invitation
that follows.

## What the Digital Commons carries into the month

The framework repository — `secops-ng-framework` on GitHub — now
carries, on `main`:

- **Twenty-nine CACAO v2 playbooks.** Alert triage, detection
  engineering, vulnerability intake, incident management, phishing
  triage, ransomware containment, data exfiltration response, identity
  compromise, MFA-secured communications, IAM auditor, asset
  management, cryptographic posture, backup and recovery, patch management,
  infrastructure posture, cloud misconfiguration, supply-chain
  security, threat intelligence ingestion, DDoS response,
  post-incident review, on-call rotation, cyber hygiene training,
  onboarding and offboarding, executive metrics, IT security support
  agent, contractual obligations tracker, codebase vulnerability
  management, CRA Article 14 single-reporting-platform notification,
  and CRA Article 14 coordinated vulnerability disclosure. Each is
  portable, deterministic, and compiles into an n8n, Temporal, or
  LangGraph target through the reference compilers in the same repo.

- **The full outbound regulatory-mapping ring — NIS2, DORA, CRA,
  GDPR.** Every shipped playbook carries a `mappings.yaml` alongside
  it that declares OSCAL control anchors, MITRE D3FEND references,
  OCSF class bindings, and the EU regulatory clause it evidences.
  Twelve clause files carrying fifteen mapped entries on the NIS2 side,
  eighteen clause files carrying twenty-five mapped entries on
  the DORA side, twenty-one clause files carrying forty-two mapped
  entries across CRA Article 13, Article 14, and Annex I, and the
  GDPR Article 32 / Article 33 / Article 34
  evidence set — all resolved bidirectionally against the playbook
  catalogue, all queryable programmatically, all in one file per
  playbook that the operator or the auditor can read without a
  spreadsheet in between.

- **A KPI/KRI catalogue keyed on the same control language.** Sixty-
  odd metric definitions organised across access, crypto, effect-
  iveness, incidents, risk-analysis, supply-chain, vulnerabilities,
  codebase vulnerability management, infrastructure posture, and
  contractual obligations. Each definition carries an OSCAL control
  anchor, a D3FEND reference where applicable, and a regulatory
  clause. The catalogue is the numbers line of the same audit
  conversation the playbook mappings speak — the two are anchored on
  the same OSCAL identifiers, deliberately.

- **Cookbook walkthroughs for the operationally-active surface.**
  The cookbook wave through late June and early July put a walkthrough
  next to each of the operationally-noisiest playbooks — alert triage,
  detection engineering, vulnerability intake, incident management,
  phishing triage, MFA, DDoS, cryptographic posture, backup, patch,
  and the CRA Article 14 pair. A cookbook is the fastest path an
  operator has to a compiled workflow running against their own
  telemetry. It reads as prose, references the CACAO source, and
  hands the operator the exact `compilers/` invocation to emit their
  target runtime.

That is what the day of the deadline looks like from the catalogue
side. Nothing here is an advisory offering, and nothing here is a
purchase. It is public source, published under a permissive licence,
carried by a community.

## Why the mapping ring matters on July 3rd

NIS2 Article 21 asks essential and important entities to adopt
"appropriate and proportionate technical, operational and
organisational measures" across ten enumerated domains, evidenced.
Article 21(2)(a) through (j) name the measures — risk analysis
policies, incident handling, business continuity, supply-chain
security, vulnerability handling, effectiveness assessment,
cyber-hygiene basics, cryptography, human-resources security and
access control, multi-factor authentication.

The catalogue as it stands today has a shipped, evidenced playbook
against every one of those ten domains, and a mappings file next to
every playbook that names the clause. On the audit side, that is
one file per workflow that says, in the language OSCAL speaks and
NIS2 speaks: this is the control that this workflow evidences,
these are the outputs it emits, this is the metric that measures
whether it is running.

The operator does not need to translate a playbook into an
audit binder. The playbook is the audit binder.

## What the catalogue does not do (on purpose)

It does not ship a runtime. It does not ship a compliance dashboard
that speaks only to itself. It does not lock the operator into a
managed platform. The three reference compile targets — n8n,
Temporal, LangGraph — cover the durability, orchestration, and
agentic surfaces most operators already run something in. If the
operator's stack is something else, the CACAO source and the mappings
are portable in the CACAO v2 sense; another compiler can be written
against them, and the community welcomes that work.

The catalogue is the source, not the platform. Sovereignty of the
operator's own runtime is the whole point.

## The invitation

This is a **Digital Commons**, and July is the month the commons has
been building toward. If you are an operator inside an essential or
important entity, or a practitioner running detection or incident
response in the EU, the catalogue is yours to read, run, fork, and
contribute to.

Three specific invitations, in decreasing scope:

1. **Contribute a NIS2 Article 21 playbook the catalogue does not
   yet carry.** The ten domains are covered at the shipping bar, but
   the catalogue is not the ceiling — Article 21(2)(f) effectiveness
   assessment, Article 21(2)(d) supply-chain security, and
   Article 21(2)(j) MFA all have adjacent workflows the community
   could add. Open a PR on `secops-ng-framework` with a CACAO v2
   playbook, a `mappings.yaml` overlay, and a cookbook walkthrough.
   The maintainer bar is in `CONTRIBUTING.md` and the hygiene linter
   is in `tools/hygiene_linter/` — the CI lane will run both on the
   PR.

2. **Compile a shipped playbook into your own orchestrator, and
   report back.** The cookbook walkthroughs are the fastest path to a
   working run. If the compiler misses your target — Prefect,
   Airflow, Nomad, something bespoke — that is contributable too;
   the `compilers/` directory is the reference set, not the closed
   set.

3. **Read the catalogue and file an issue where the mapping is
   wrong.** The regulatory ring resolves cleanly on the current
   catalogue, but the regulatory ring is also the surface where
   errors matter most. If a clause maps to the wrong playbook, or
   an OSCAL anchor points to the wrong control identifier, the
   community wants to know about it.

The framework repository is at
[github.com/secops-ng/secops-ng-framework](https://github.com/secops-ng/secops-ng-framework).
The cookbook walkthroughs are indexed from
[`content/playbooks/`](https://github.com/secops-ng/secops-ng-framework/tree/main/content/playbooks).
The mapping ring is under
[`content/mappings/`](https://github.com/secops-ng/secops-ng-framework/tree/main/content/mappings).
`CONTRIBUTING.md` on the root of the repo is the first door.

## The line the project holds

Sovereign security is a public good, not a product. The Digital
Commons crosses the NIS2 enforcement boundary carrying its own
weight because a hundred and two field notes' worth of shipping
work built the stack in the open. The month is here. The catalogue
is here with it. The line the project holds is that the
practitioners who run this work every day, inside the EU's
essential and important entities, deserve source they can read,
run, fork, and trust.

If that is you, the door is open.

— The SecOps-NG commons
