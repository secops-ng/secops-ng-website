---
title: "Field note #142 — a business-continuity playbook lands: NIS2 Art.21(2)(c) BCM lifecycle in CACAO"
description: "Field note one hundred and forty-two from the SecOps-NG Digital Commons. A CACAO v2 business-continuity playbook lands in the commons — seven workflow steps from event declaration through authority notification, failover, and post-incident review — closing the NIS2 Art.21(2)(c) leg of the regulatory mapping ring and co-anchored with the existing backup and recovery drill lane."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "playbook", "cacao", "business-continuity", "bcm", "nis2", "dora", "gdpr", "cra", "n8n", "temporal", "langgraph", "digital-commons", "field-note-142"]
---

Field note one hundred and forty-two. A new playbook column
opens in the commons: business continuity, CACAO v2, NIS2
Article 21(2)(c) as the primary anchor, co-anchored with
DORA Article 11 and GDPR Article 32(1)(c), and compile stubs
for the three runtimes the commons already carries.

## What landed

One pull request merged against `secops-ng-framework`,
forward-public today:

- **#707** — `F-NIS2-BCP` SKELETON. A CACAO v2
  plan-lifecycle playbook for business-continuity
  management, wired to NIS2 Art.21(2)(c) as the primary
  anchor with DORA Art.11 and GDPR Art.32(1)(c) as
  co-anchors, and a noted gap against CRA. The playbook
  ships alongside compile stubs for n8n, Temporal, and
  LangGraph — the same three runtimes every other playbook
  in the commons compiles into — plus a GDPR data-flow
  annotation for the business-continuity path.

## The seven-step BCM lifecycle

The playbook is a plan-lifecycle workflow, not an incident
runbook. It follows the shape a competent authority expects
to see when it reads a business-continuity plan against
Art.21(2)(c):

1. **detect-and-declare-bcm-event** — the trigger step:
   an operator or a monitoring signal declares a BCM event
   scoped to the plan.
2. **activate-bcm-plan** — plan activation, roles and
   responsibilities acknowledged, the BCM organisation
   comes online.
3. **isolate-affected-systems** — containment: affected
   systems are separated from the estate so the failover
   target is not contaminated.
4. **switch-to-backup** — failover to the backup site,
   backup capacity, or backup data path the plan names.
5. **notify-competent-authority** — the regulator step:
   NIS2 requires notification pathways and timelines the
   playbook wires against.
6. **restore-and-verify** — restoration of primary
   capacity and verification that the restored state is
   the state the plan expects.
7. **post-incident-review** — the lessons step: the plan
   updates itself against what the event taught it.

Seven steps, one lifecycle, portable across the three
runtimes the commons carries.

## The regulatory anchor

NIS2 Article 21(2)(c) requires essential and important
entities to carry business-continuity measures including
backup management, disaster recovery, and crisis
management. The playbook maps to that clause as its primary
anchor and reads across:

| Regulation             | Anchor                          | State       |
| ---------------------- | ------------------------------- | ----------- |
| NIS2                   | Art.21(2)(c)                    | primary     |
| DORA                   | Art.11                          | co-anchor   |
| GDPR                   | Art.32(1)(c)                    | co-anchor   |
| CRA                    | —                               | gap noted   |

DORA Article 11 covers ICT business-continuity policies and
disaster-recovery plans for financial entities; GDPR Article
32(1)(c) is the "ability to restore the availability and
access to personal data in a timely manner" clause. The
same seven-step lifecycle satisfies the shape all three ask
for. The CRA gap is noted rather than papered over: business
continuity is not a first-class CRA obligation the way
vulnerability handling is, and the mapping file records that
honestly.

## Continuity coverage ring

The commons already carries a `backup_recovery` drill lane
that exercises the restoration path against DORA Article 11
and GDPR Article 32(1)(c). Adding the BCM plan-lifecycle
playbook alongside it closes a coverage ring:

- The **backup and recovery** lane exercises the technical
  restoration muscle — can the backup be read, can the
  restore complete inside its objective — on a drill
  cadence.
- The **business continuity** lane exercises the plan
  lifecycle around it — event declaration, activation,
  isolation, failover, authority notification, verification,
  post-incident review.

Two lanes, one continuity story: the drill proves the
restore works, and the plan proves the organisation around
the restore works.

## Portable across three runtimes

The SKELETON tier ships compile stubs for the three runtimes
every other playbook in the commons compiles into:

- **n8n** — the low-code automation runtime the commons
  targets first for operator estates that already carry it.
- **Temporal** — the durable workflow engine for estates
  that want long-running, replay-safe execution semantics
  around the plan lifecycle.
- **LangGraph** — the agentic-workflow runtime for estates
  wiring the plan into an agent surface.

Same seven steps, three compile targets, one CACAO source of
truth. An operator picks the runtime their estate already
runs and compiles the plan against it.

## The G-01 and G-02 signals

Two goals register against this pull request:

- **G-01 — playbook coverage.** Business continuity is one
  of the top-five NIS2 Article 21 control families, and
  until today the commons carried a backup-and-recovery
  drill lane but no plan-lifecycle playbook for the BCM
  organisation itself. The SKELETON lands the missing
  playbook column.
- **G-02 — regulatory mapping ring.** NIS2 Article 21(2)(c)
  is the last major inbound clause on the NIS2 obligation
  surface that did not have a playbook wired against it.
  The BCP leg of the ring closes today.

## Where to look

- **Framework repo:**
  - `content/playbooks/business_continuity/playbook.cacao.yaml`
    — the CACAO v2 source of truth, seven workflow steps.
  - `content/playbooks/business_continuity/mappings.yaml`
    — NIS2 Art.21(2)(c) primary anchor, DORA Art.11 and
    GDPR Art.32(1)(c) co-anchors, CRA gap noted.
  - `content/playbooks/business_continuity/compile/`
    — compile stubs for n8n, Temporal, LangGraph.
  - `content/mappings/gdpr/data-flow-business_continuity.md`
    — the GDPR data-flow annotation for the BCM path.

Seven steps, three runtimes, one plan lifecycle, one column
of the regulatory mapping ring closed. The next good day is
the one that pulls this SKELETON up to CORE — the day the
seven steps carry their D3FEND edges and their operator
worked examples alongside the anchors.
