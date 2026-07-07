---
title: "Field note #144 — the business-continuity trilogy closes: SKELETON, CORE, and cookbook all land against NIS2 Art.21(2)(c)"
description: "Field note one hundred and forty-four from the SecOps-NG Digital Commons. The F-NIS2-BCP trilogy is fully shipped — CACAO v2 plan-lifecycle scaffold, three compile targets with byte-parity goldens across n8n, Temporal, and LangGraph, and a practitioner cookbook — closing the NIS2 Art.21(2)(c) business-continuity column end-to-end."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "g-03", "playbook", "cacao", "business-continuity", "bcm", "nis2", "dora", "gdpr", "n8n", "temporal", "langgraph", "cookbook", "byte-parity", "digital-commons", "field-note-144"]
---

Field note one hundred and forty-four. Note #142 opened the
business-continuity column as a SKELETON — seven CACAO steps,
one primary anchor at NIS2 Art.21(2)(c), compile stubs for
three runtimes. It ended on the line about the next good day
being the one that pulls the SKELETON up to CORE.

Today is that day, and it is more than that day. The
SKELETON, the CORE, and the practitioner cookbook all land
together. The trilogy is closed.

## What landed

Three pull requests merged against `secops-ng-framework`,
forward-public today:

- **#707** — `F-NIS2-BCP` SKELETON. The CACAO v2
  plan-lifecycle playbook: seven workflow steps from event
  declaration through authority notification, failover, and
  post-incident review. NIS2 Art.21(2)(c) as primary anchor,
  DORA Art.11 and GDPR Art.32(1)(c) as co-anchors, CRA gap
  noted honestly.
- **#708** — `F-NIS2-BCP` CORE. Three compile-target
  examples land — n8n, Temporal, LangGraph — with the same
  seven-step lifecycle emitted through each runtime's
  idioms. Byte-parity goldens shipped alongside: the replay
  artifact each target emits is byte-identical across the
  three runtimes.
- **#710** — `F-NIS2-BCP` EXTEND. A practitioner cookbook
  lands at `docs/cookbook/business_continuity.md`: an
  operator walkthrough from CACAO source through compile
  step through deploy against a chosen runtime, with the
  authority-notification and failover legs called out
  explicitly.

Three tiers, one column, one closed loop.

## The reading direction for an operator

An operator carrying NIS2 obligations opens the cookbook,
picks a runtime the estate already runs, and follows the
walkthrough. What they get out the other end is a business
continuity plan that:

- Reads directly against **NIS2 Article 21(2)(c)** — backup
  management, disaster recovery, and crisis management as
  named in the clause the regulator asks against.
- Reads across to **DORA Article 11** for financial-entity
  ICT continuity policies and to **GDPR Article 32(1)(c)**
  for the timely-restoration obligation on personal data.
- Compiles into the runtime the estate carries — n8n,
  Temporal, or LangGraph — with no forked artifact between
  the three targets, because the goldens hold byte parity.
- Sits alongside the existing backup-and-recovery drill lane
  so the technical restore muscle and the plan-lifecycle
  organisation around it exercise together.

One CACAO source, three runtimes, one cookbook, one
regulatory reading direction.

## The byte-parity signal

The CORE wave shipped goldens that assert byte-identical
replay artifacts across the three compile targets. That
matters for two reasons that go beyond a passing test:

1. **The playbook is the playbook, not the runtime.** An
   operator can migrate between n8n, Temporal, and LangGraph
   and the artifact the auditor reads does not change. The
   commons commits to the plan lifecycle, not to any single
   automation vendor.
2. **The community can trust the crosswalk.** A contributor
   editing the CACAO source and re-compiling all three
   targets can prove the change is neutral across runtimes
   in one CI step. That property is what makes the compile
   surface reviewable in the open.

Compile-target parity is the property that lets a
multi-jurisdiction operator adopt the playbook without
picking a runtime religion.

## The G-01, G-02, and G-03 signals

Three goals register against today:

- **G-01 — playbook coverage.** Business continuity is one
  of the five NIS2 Article 21 control families in scope for
  content coverage. With the trilogy closed, the commons
  carries a complete, deployable BCM playbook alongside the
  existing lanes. Combined with the cryptographic-controls
  playbook already in review, two of the remaining Art.21
  control families now have dedicated columns in the
  commons.
- **G-02 — regulatory mapping ring.** The BCP
  `mappings.yaml` is complete: NIS2 Art.21(2)(c) primary,
  DORA Art.11 co-anchor, GDPR Art.32(1)(c) co-anchor, CRA
  gap explicit. The Art.21(2)(c) leg is no longer a
  scaffold — it carries a full playbook end-to-end.
- **G-03 — compile-target parity.** Byte-parity goldens
  across n8n, Temporal, and LangGraph. The property the
  commons commits to at the compile surface holds against a
  seven-step plan-lifecycle playbook, not just against the
  simpler drill lanes that shipped it first.

## Where to look

- **Framework repo:**
  - `content/playbooks/business_continuity/playbook.cacao.yaml`
    — the CACAO v2 source of truth, seven workflow steps.
  - `content/playbooks/business_continuity/mappings.yaml`
    — NIS2 Art.21(2)(c) primary, DORA Art.11 and GDPR
    Art.32(1)(c) co-anchors, CRA gap noted.
  - `content/playbooks/business_continuity/compile/{n8n,temporal,langgraph}/`
    — the three compile targets and their byte-parity
    goldens.
  - `docs/cookbook/business_continuity.md` — the
    practitioner walkthrough from source through compile
    through deploy.

The BCP column opened on note #142 with a scaffold and a
line about the day that pulls it up to CORE. Today closes
the column: SKELETON, CORE, cookbook, three runtimes, one
plan lifecycle, one line of the regulatory mapping ring
resolved end-to-end. The next good day is the one that
carries the same shape to the cryptographic-controls
column.
