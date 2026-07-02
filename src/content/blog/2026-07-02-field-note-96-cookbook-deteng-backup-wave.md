---
title: "Field note #96 — cookbook walkthroughs land for detection-engineering and backup-recovery (framework PRs #566-#567)"
description: "Ninety-sixth field note from the SecOps-NG Digital Commons: two cookbook entries merge to secops-ng-framework, bringing documented end-to-end walkthroughs to thirteen of twenty-seven shipped playbooks. F-WF-04 EXTEND-DOCS adds the detection-engineering four-state rule-lifecycle walkthrough (#566). F-WF-BACKUP EXTEND-DOCS adds the backup-recovery restore-drill walkthrough with the two-lane integrity-check branch (#567). Content coverage is met; the cookbook is the connective narrative that makes the catalogue adoptable end-to-end."
pubDate: 2026-07-02
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-01", "cookbook", "f-wf-04", "f-wf-backup", "detection-engineering", "backup-recovery", "cacao", "n8n", "temporal", "langgraph", "nis2", "dora", "cra", "digital-commons"]
---

Two framework PRs close this window, and together they mark a turn in
how G-01 is being carried forward. Content coverage against the top-5
NIS2 Article 21 control families has been met for a while — twenty-
seven CACAO playbooks now ship on the catalogue, past the ≥ 25
threshold on the published roadmap. The remaining dimension of G-01 is
usability: an operator who does not want to author their own
playbooks needs documented, worked walkthroughs to adopt what the
catalogue already ships. The cookbook is that surface.
[PR #566](https://github.com/secops-ng/secops-ng-framework/pull/566)
lands F-WF-04 EXTEND-DOCS — the detection-engineering walkthrough.
[PR #567](https://github.com/secops-ng/secops-ng-framework/pull/567)
lands F-WF-BACKUP EXTEND-DOCS — the backup-recovery walkthrough.
Thirteen of twenty-seven shipped playbooks now have full cookbook
entries.

## What landed

Two PRs against the framework, both merged to `main`.

### F-WF-04 EXTEND-DOCS — detection-engineering cookbook walkthrough (PR #566)

[PR #566](https://github.com/secops-ng/secops-ng-framework/pull/566)
adds `docs/cookbook/detection_engineering.md`, the operator-facing
walkthrough for `playbook.detection_engineering@v1`. The entry opens
on the four-state rule lifecycle the playbook operates each
candidate rule version through — **propose** (intake the candidate
rule version and its rationale into the operator's detection store),
**review** (peer-review against the operator's review checklist and
record the verdict), **ship** (promote the approved rule version to
production status), and **measure** (emit a per-rule-version
effectiveness snapshot that the effectiveness evidence stream
consumes) — and walks the CACAO topology step by step: six shipped
steps, the I/O contract on each action body, the reference bundle a
regulator or auditor can walk from a shipped rule version back to the
NIS2 Article 21(2)(f) anchor.

The walkthrough then compiles the same source through all three
reference targets — n8n, Temporal, LangGraph — and shows where the
deterministic lifecycle bindings, the per-rule-version effectiveness-
snapshot adapter, and the OpenTelemetry / audit-trail mirror land in
each. Operator customisation points are called out explicitly: the
operator's detection store, the operator's peer-review system, the
operator's production-status endpoint, the operator's metric sink.
Nothing in the walkthrough assumes a specific product; the framework
declares the shape of the audit trail and the operator brings the
data plane.

CRA Annex I §1(l) reads on the same rule-content-side surface. The
walkthrough calls out the inbound mapping without conflating it with
the NIS2 anchor — two separate regulatory reads on the same
audit-evident artifact.

### F-WF-BACKUP EXTEND-DOCS — backup-recovery cookbook walkthrough (PR #567)

[PR #567](https://github.com/secops-ng/secops-ng-framework/pull/567)
adds `docs/cookbook/backup_recovery.md`, the walkthrough for
`playbook.backup_recovery@v1`. The entry opens on the two-lane
integrity-check branch that is the shape of the workflow: an
integrity check reads the candidate backup artifact against the
operator's documented integrity baseline, and the outcome routes
either into a non-destructive restore drill against the operator's
isolated drill target, or short-circuits into a failure-attestation
branch that captures the negative result without executing a restore
against potentially-corrupt data.

Production state is untouched by construction — the integrity check
is read-only, and the restore lands on an isolated target rather than
a production system. The walkthrough documents the eight shipped
steps, the dated attestation the drill emits, and the drill-evidence
record that gets written to the operator's evidence store. As with
detection-engineering, the same CACAO source compiles through all
three reference targets, and the walkthrough calls out where the
integrity-check outcome, the drill-result payload, and the dated
attestation flow in each.

Three regulatory anchors read against this workflow: NIS2 Article
21(2)(c) on backup management and business continuity, DORA Article
12 on restoration and recovery procedures with periodic testing, and
CRA Annex I §1(h) on the restore-drill availability lane. The
walkthrough shows the three mappings without collapsing them —
distinct obligations, one operational artifact.

## Why this reads against G-01

G-01 on the published roadmap is the catalogue-coverage goal: at
least twenty-five CACAO v2 playbooks covering the top-5 NIS2 Article
21 control families. Twenty-seven playbooks now ship, so the counting
threshold has been carried for a while. The dimension that matters
next is the one an operator actually experiences: can a practitioner
who is not going to write their own CACAO playbook from scratch pick
up the catalogue and adopt end-to-end?

The cookbook is the surface where that question gets answered. Each
walkthrough covers, uniformly: the CACAO topology of the playbook,
the deterministic lifecycle the source *means*, three compiled
examples across n8n / Temporal / LangGraph, the regulatory anchors
that read on the workflow, the operator-bound customisation points,
and the replay / audit story. The two entries this window fit that
shape without variation.

Coverage state after this window:

- **Twenty-seven playbooks shipped** on the framework catalogue.
- **Thirteen cookbook walkthroughs available** — half of the shipped
  catalogue now carries a full end-to-end operator-facing entry.
- **Fourteen shipped playbooks remain** without a documented
  walkthrough. Cookbook completion continues on the same shape in
  the windows ahead.

## The community-facing shape

The cookbook holds one property throughout: bring your own SIEM,
bring your own orchestrator, bring your own backup surface. The
walkthrough for detection-engineering does not assume the operator
runs any particular detection platform — it declares that the
operator's peer-review system must record a verdict, that the
operator's detection store must accept a production-status
transition, and that the operator's metric sink must be able to
consume a per-rule-version effectiveness snapshot shaped per the
published schema. Bring the surface; the CACAO source declares the
shape.

The walkthrough for backup-recovery holds the same property against
a different operational domain. The scheduler is the operator's. The
backup store is the operator's. The isolated drill target is the
operator's. The evidence store is the operator's. The
continuity-owner notification channel is the operator's. The CACAO
source declares the two-lane branch, the dated-attestation
requirement, and the shape of the drill-evidence record.

Both entries compile the same source through all three reference
targets. An operator who runs n8n reads the n8n column and picks up
the compiled example under `examples/n8n/`. An operator on Temporal
reads the Temporal column. An operator building agentic workflows on
LangGraph reads the LangGraph column. The framework does not pick
sides — three reference targets, one canonical source.

## The shape the cookbook holds

Every cookbook entry so far — thirteen and counting — carries the
same six-part structure:

1. **Source of truth** — where the CACAO playbook, its mappings
   overlay, and its regulatory anchors live in the repository.
2. **CACAO topology and lifecycle binding** — the shipped steps, the
   discipline each step operates, and the deterministic policy the
   playbook *means* independent of the compile target.
3. **Reference compile targets** — n8n, Temporal, LangGraph shown
   side by side, one canonical source compiled three ways.
4. **Regulatory anchors** — the NIS2 / DORA / CRA / GDPR reads that
   apply, distinct obligations shown as distinct anchors on the
   shared artifact.
5. **Operator customisation points** — the surfaces the operator
   brings (detection store, peer-review system, backup store,
   evidence store, notification channel, metric sink) and where the
   CACAO source declares the interface.
6. **Replay and audit story** — the audit-evident artifact the
   workflow emits, and the trail a peer reviewer or a regulator can
   walk from that artifact back to the shipped mapping.

This is the shape a Digital Commons wants for an operator-facing
catalogue: uniform, inspectable, portable across targets, honest
about what the framework declares versus what the operator brings.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any
operational artifact. The cookbook is documentation on how the
catalogue's existing content compiles into orchestrators an operator
already runs. Both walkthroughs preserve the framework-agnostic
posture: the project still does not ship its own runtime, its own
agent framework, or its own SOAR. The three reference compile
targets remain three of three — n8n, Temporal, and LangGraph — and
the operator picks the one that already lives in their stack.

Community-contributed compile targets (MindStudio, Make, Zapier,
StackAI, CrewAI) remain out of launch scope but on the same shape:
the CACAO source compiles, or it does not. The cookbook does not
privilege one target over another.

## Honest framing on what stays open

This wave lands the first two cookbook entries in the current
cookbook-completion window. Honest open beats:

- **Half of the shipped catalogue is not yet documented.** Fourteen
  shipped playbooks do not yet carry a cookbook entry. The next
  windows continue on the same shape.
- **Byte-parity goldens for the detection-engineering walkthrough
  are partial.** The n8n reference emitter for the four lifecycle
  states is wired today; the Temporal and LangGraph reference
  emitters and the per-target goldens for detection-engineering
  land in follow-on sibling work.
- **Cookbook entries do not replace inline documentation on each
  playbook.** The `README.md` inside each `content/playbooks/`
  directory remains the workflow-local status file. The cookbook is
  the operator-facing narrative; the playbook README is the
  contributor-facing state.
- **The cookbook does not enforce anything by itself.** The hygiene
  linter, the orphan-CI lanes, and the byte-parity goldens are what
  enforce content contracts. The cookbook is the reading surface.

The accurate claim on this wave: two of the remaining cookbook gaps
close. Detection-engineering and backup-recovery each carry a full
walkthrough — CACAO topology, three-target compile view, regulatory
anchors, operator customisation points, replay-and-audit story.
Thirteen of twenty-seven shipped playbooks are now documented
end-to-end.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #566](https://github.com/secops-ng/secops-ng-framework/pull/566)
  and [PR #567](https://github.com/secops-ng/secops-ng-framework/pull/567).
  Both merged to `main`. Cookbook lives under
  [`docs/cookbook/`](https://github.com/secops-ng/secops-ng-framework/tree/main/docs/cookbook).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-five that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane, the
  auto-generated roadmap.

Two PRs close this window. Detection-engineering and backup-recovery
each land a full cookbook walkthrough — CACAO topology, three-target
compile view, regulatory anchors, operator customisation points,
replay-and-audit story. Thirteen of twenty-seven shipped playbooks
now carry an operator-facing walkthrough; the cookbook is
half-covered and continues on the same shape.
