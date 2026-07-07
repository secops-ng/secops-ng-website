---
title: "Field note #139 — agentic_threat_response cookbook ships: the end-to-end walkthrough for the agentic SOC playbook lands in the commons"
description: "Field note one hundred and thirty-nine from the SecOps-NG Digital Commons. The operator-facing cookbook for the F-WF-AGENTICSEC playbook has landed — a full walkthrough from ingest through triage, containment, escalation, and evidence preservation, wired through all three reference compile targets (n8n, Temporal, LangGraph) with OCSF telemetry bindings and KPI/KRI hooks made explicit at every step."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "cookbook", "agentic-security", "cacao", "d3fend", "ocsf", "nis2", "eu-ai-act", "n8n", "temporal", "langgraph", "digital-commons", "field-note-139"]
---

Field note one hundred and thirty-nine. Note #132 announced
the F-WF-AGENTICSEC trilogy — SKELETON, CORE, EXTEND —
landing the agentic threat detection and response playbook
into the commons. That announcement named the shape of the
workflow and pinned its regulatory anchors; it did not yet
give an operator the steps needed to actually run it against
their own estate.

Today the operator-facing capstone lands. The
`agentic_threat_response` cookbook walkthrough has merged
into `secops-ng-framework` — one document that takes a
reader from source-of-truth to a running workflow against
their detection layer, IdP, network segmentation plane, and
evidence store.

## What landed

One pull request against `secops-ng-framework`, merged
forward-public today:

- **[#702](https://github.com/secops-ng/secops-ng-framework/pull/702)**
  — `docs/cookbook/agentic_threat_response.md`. The
  end-to-end walkthrough for
  `playbook.agentic_threat_response@v1`: source-of-truth
  layout, CACAO topology, regulatory anchors (NIS2 Art.
  21(2)(b)/(e), Art. 23 case-generator role, OSCAL controls,
  MITRE D3FEND v1.0.0 step tags), per-target hand-off
  (n8n / Temporal / LangGraph), OCSF telemetry bindings,
  and KPI/KRI hooks against MTTD and MTTC for the
  agentic-threat case set.

## The lifecycle the cookbook walks

The playbook ships seven steps: one `start`, five `action`,
one `end`. The cookbook walks each action step at the depth
an operator needs before wiring it into their stack:

1. **Ingest agentic-threat indicator.** Receive the
   indicator — anomalous LLM API call volume, rapid
   credential-enumeration burst, sub-minute lateral movement
   inside the observed self-correction window — and hydrate
   with principal and source-destination context. OCSF
   Detection Finding class shape at the intake seam.
2. **Isolate the affected credential set.** Revoke sessions,
   refresh and access tokens for the implicated principal
   at the IdP; disable the principal for the containment
   window; alert the IAM auditor lane for the parallel scope
   audit. D3FEND `D3-ACI` (Authentication Cache Invalidation)
   and `D3-AL` (Account Locking).
3. **Contain the lateral-movement path.** Apply a network
   micro-segmentation call along the resolved lateral edge —
   the containment step implements microsegmentation as a
   first-class response action for agentic systems, so the
   autonomous operator cannot pivot off the implicated path
   during the containment window. D3FEND `D3-NI`
   (Network Isolation).
4. **Escalate to incident-management.** Hand the case
   envelope off to `playbook.incident_management@v1` — the
   NIS2 Article 23 early-warning / 72-hour / one-month chain
   is dispatched by the incident-management engine, not by
   this playbook. This one is the case *generator*, not the
   notification renderer.
5. **Preserve evidence for the notification chain.** Persist
   the correlated evidence bundle — LLM API call logs,
   credential-enumeration timeline, lateral-movement graph,
   containment-action ledger — the downstream regulator-
   submission engine consumes.

Static SOAR playbooks are miscalibrated for the sub-minute
self-correction cadence of a fully-agentic operator. This
playbook is the detect-through-contain slice purpose-built
for that case set; it hands off into the operator's
`identity_compromise`, `ransomware_containment`, and
`incident_management` playbooks — it does not replace them.

## Three targets, one source

The framework is framework-agnostic by construction. The
cookbook walks all three reference compile targets against
the same CACAO source under
`examples/{n8n,temporal,langgraph}/agentic_threat_response/`:

- **n8n.** Importable `workflow.n8n.json` carrying the CACAO
  topology as n8n nodes; the five action steps land as
  `n8n-nodes-base.set` nodes whose editable assignment rows
  are the seams the operator binds to their detection feed,
  IdP endpoint, segmentation control plane, incident-
  management intake, and evidence store.
- **Temporal.** Deterministic workflow module — one activity
  per action step, the CACAO I/O contract carried as
  activity signatures, and the compile output regenerable
  from the same CACAO source.
- **LangGraph.** State-graph module carrying the CACAO
  topology as graph nodes and edges, ready to run inside an
  operator's existing LangGraph runtime.

Each worked example ships alongside a `regenerate.sh` that
re-emits from the canonical `playbook.cacao.json` via the
unified `tools.compile` CLI, so any change to the source
regenerates all three targets byte-parity in CI.

## The auditability seams

Two properties the cookbook makes explicit at every step:

1. **OCSF telemetry bindings.** The ingest step reads the
   Detection Finding class shape; every subsequent action
   step emits an OCSF event class the operator's SIEM can
   consume without a bespoke adapter. Machine-speed
   containment does not have to be opaque to the analyst.
2. **KPI / KRI hooks.** Two metrics ship keyed to this
   playbook — mean time to detect an agentic-threat
   indicator (MTTD, `content/metrics/mttd_agentic_threat.yaml`)
   at the ingest step, and mean time to contain (MTTC,
   `content/metrics/mttc_agentic_threat.yaml`) across the
   credential-isolation and lateral-movement-containment
   steps. The playbook is measurable from the first run.

## The G-01 signal

G-01 is the content-coverage goal. The trilogy shipped the
workflow; the cookbook is what makes the workflow reachable
for an operator who has not yet lived inside the source.
That completes the operator-onboarding surface for the
agentic security playbook — an operator can walk from
"we see agentic-threat indicators on the wire" to a
running, auditable, measurable containment loop against
their own estate without leaving the framework.

## Regulatory-context notes

Two anchors worth naming for community members reading this
under the current European regulatory countdown:

- **NIS2 Art. 21(2)(b) and 21(2)(e).** The ingest → isolate
  → contain → escalate → preserve chain is the operational
  incident-handling capability for the machine-speed
  agentic case set, and the ingest step's anomalous-LLM-
  API-call-volume signal is the operator-side observable
  Art. 21(2)(e) demands surveillance over on the agentic-
  tool supply-chain surface.
- **EU AI Act Art. 72 (post-market monitoring).** Anchored
  as a step-level D3FEND tag on this playbook — an agentic
  system deployed into a high-risk application under the
  Act's 2026 enforcement window has the post-market
  monitoring obligation the Act names, and the evidence-
  preservation step's correlated bundle is the operator-
  side artefact that obligation resolves against.

## Where to look

- **Framework repo:**
  - `docs/cookbook/agentic_threat_response.md` — the
    walkthrough, seven steps, three targets, one source.
  - `content/playbooks/agentic_threat_response/` — the
    canonical CACAO source, mappings, and README.
  - `examples/{n8n,temporal,langgraph}/agentic_threat_response/`
    — the three worked examples, each with a
    `regenerate.sh` against `tools.compile`.
  - `content/metrics/mttd_agentic_threat.yaml` and
    `content/metrics/mttc_agentic_threat.yaml` — the KPIs
    keyed to the ingest and containment steps.

The trilogy shipped the shape. The cookbook makes it
walkable. The next good day is the one an operator reports
back with a case envelope generated against their own
estate, running on whichever compile target already lives
in their stack.
