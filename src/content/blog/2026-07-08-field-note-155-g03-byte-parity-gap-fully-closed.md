---
title: "Field note #155 — G-03 byte-parity gap fully closed: every reference playbook now pinned across all three compile targets"
description: "Field note one hundred and fifty-five from the SecOps-NG Digital Commons. Batches four and five of the byte-parity wave land in the same session that started with batch three. Nine more playbooks — incident management, infrastructure posture management, on-call rotation, post-incident review, ransomware containment, threat intel ingest, vulnerability intake, DORA third-party risk management, and executive metrics — now carry byte-identical-on-replay golden tests on n8n, on Temporal, and on LangGraph. The G-03 gap is closed. Every reference playbook the commons ships compiles to identical bytes on each of the three targets. Five batches, one contributor path, one session."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-03", "g-06", "byte-parity", "golden-tests", "compile-targets", "n8n", "temporal", "langgraph", "determinism", "incident-management", "ransomware", "threat-intel", "dora", "nis2", "auditability", "portability", "sovereignty", "digital-commons", "field-note-155"]
---

Field note one hundred and fifty-five. The G-03
byte-parity gap is closed. Batches four and five
of the wave merged in the same session that
opened with batch three, and with them every
reference playbook the commons ships now carries
byte-identical-on-replay assertions across n8n,
Temporal, and LangGraph. Twenty-seven new golden
test files across nine additional playbooks. The
parity matrix, as of tonight, is a complete
grid — every row green on every target on every
PR.

## The wave, from start to close

Five batches, five PRs, one invariant. The full
run reads:

- **Batch one — PR #733.** Six goldens on
  `agentic_threat_response` and
  `asset_management`.
- **Batch two — PR #735.** Six goldens on
  `alert_triage` and `phishing_triage`.
- **Batch three — PR #736.** Twelve goldens on
  `cloud_misconfiguration`, `data_exfiltration`,
  `eu_ai_act_risk_management`, and
  `identity_compromise`.
- **Batch four — PR #737.** Twelve goldens on
  `incident_management`,
  `infra_posture_management`, `on_call_rotation`,
  and `post_incident_review`.
- **Batch five — PR #738.** Fifteen goldens on
  `ransomware_containment`, `threat_intel_ingest`,
  `vuln_intake`, `dora_tpr_management`, and
  `executive_metrics`.

Seventeen playbooks. Three targets each.
Fifty-one golden test files wired into CI.
Nothing on the reference set is off the parity
grid any more.

## Why the last two batches carry weight

Batches four and five are the operator-lifecycle
tail. Incident management, on-call rotation, and
post-incident review are the loops an EU
regulated operator runs every day and gets asked
about after every serious event. Ransomware
containment and threat intel ingest are where the
same operator has to prove, hash by hash, that
what ran during the incident matches what was
described in the runbook. DORA third-party risk
management is where the supervisor asks how the
provider surface was managed, and executive
metrics is where the answer has to reconcile
against the board deck.

Every one of those flows now compiles to
identical bytes on each of the three reference
targets. If a supervisor reconstructs a run from
the recorded state, the artifact hash matches
the one CI signed off — on n8n, on Temporal, on
LangGraph, on any of the seventeen. That is what
NIS2 Article 21 and DORA Article 30 pressure
turns into at the artifact layer: not a
narrative of controls, a hashed property that
either holds on every PR or breaks visibly.

## Byte-parity, restated one last time

The framework describes each playbook once in
portable CACAO v2. Three reference compilers turn
that source into three runnable artifacts. The
golden tests assert that compiling the same
source twice, on the same adapter shims,
produces the same bytes — and that replaying a
recorded run reproduces the artifact hash that
was shipped. That assertion now runs on every PR,
against every playbook in the reference set, on
every one of the three targets. When a golden
hash changes, someone changed something and has
to say why.

## Portability without runtime lock-in

The reason the grid matters is that an EU
operator does not decide their orchestration
runtime once and forget it. Sovereign posture
shifts. Residency requirements move. A workflow
that runs on one runtime this quarter may need to
move to another next quarter — different
jurisdiction, different scaling shape, different
supply-chain threat model.

With the grid complete, that move is a compile
and a hash comparison, not a semantics migration.
Pick n8n and stand up a no-code operator surface.
Pick Temporal and get durable code with the
replay guarantees Temporal is built for. Pick
LangGraph and get an agentic runtime. In all
three cases the artifact that runs is the one the
portable CACAO source describes, byte for byte,
and there is a test in CI that says so.

Sovereignty here is not a claim on autarky. It is
an operator's ability to decide where a workflow
runs, on their own timescale and for their own
reasons, without discovering that the runtime
silently changed what the workflow does. The
grid is what makes that decision durable.

## The seventeen playbooks on the closed grid

- `playbook.agentic_threat_response`
- `playbook.alert_triage`
- `playbook.asset_management`
- `playbook.cloud_misconfiguration`
- `playbook.data_exfiltration`
- `playbook.dora_tpr_management`
- `playbook.eu_ai_act_risk_management`
- `playbook.executive_metrics`
- `playbook.identity_compromise`
- `playbook.incident_management`
- `playbook.infra_posture_management`
- `playbook.on_call_rotation`
- `playbook.phishing_triage`
- `playbook.post_incident_review`
- `playbook.ransomware_containment`
- `playbook.threat_intel_ingest`
- `playbook.vuln_intake`

Every one of the seventeen compiles to byte-
identical artifacts on n8n, on Temporal, and on
LangGraph. Fifty-one rows of the parity matrix
are green in CI on every PR.

## The G-03 and G-06 signal

- **G-03 — compile-target parity.** The invariant
  is that every per-example test passes byte-
  parity on all three reference targets, and it
  now holds on the full reference set. The KPI is
  satisfied. What was a stated invariant a week
  ago is now a mechanised CI property on
  seventeen playbooks. From here the shape flips
  from *closing a gap* to *holding a floor* —
  the next playbook that lands has to arrive with
  its parity row already green, or it does not
  land.
- **G-06 — community infrastructure signal.** All
  five batches were opened by an external
  contributor working through the framework's
  contributor path. Five PRs, in one session, on
  the parity matrix — not a founder writing to
  themselves. The parity grid is a legible
  acceptance surface, and the wave that closed it
  is evidence the surface is operable by someone
  who did not build it.

## Where to look

- **Framework repo:**
  - `tests/golden/` — the fifty-one golden test
    files. Twenty-seven new files across the
    batch-four and batch-five subtrees on top of
    the twenty-four from batches one through
    three.
  - `examples/{n8n,temporal,langgraph}/` — the
    three compile-target reference artifacts each
    playbook pins against, complete for all
    seventeen.
  - `content/playbooks/` — the CACAO v2 sources
    the artifacts compile from. Seventeen
    sources, fifty-one artifacts, fifty-one
    goldens.
  - `ROADMAP.md` — the G-03 parity matrix now
    reads *closed*.

If your posture depends on portable content that
survives a runtime move, the grid is now a
hashed property on every playbook the commons
ships. The next move is holding the floor: no
playbook lands without its parity row green
first. That is what closing a KPI looks like at
the artifact layer.
