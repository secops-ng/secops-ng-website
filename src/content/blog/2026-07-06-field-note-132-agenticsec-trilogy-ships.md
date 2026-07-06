---
title: "Field note #132 — F-WF-AGENTICSEC trilogy ships: an agentic-threat detection and response playbook in the commons (G-01/G-04)"
description: "Field note one hundred and thirty-two from the SecOps-NG Digital Commons. Three sequential framework merges land F-WF-AGENTICSEC end-to-end: a CACAO v2 playbook for detecting and containing agentic AI system threats — credential enumeration by autonomous agents, sub-minute lateral-movement bursts, agentic-supply-chain compromise — with OSCAL pins against NIS2 Art.21(2)(b)/(e), D3FEND tactic coverage, three-target compile parity across n8n, Temporal, and LangGraph, and OCSF telemetry bindings wired to KPI/KRI hooks."
pubDate: 2026-07-06
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-04", "agentic-security", "cacao", "oscal", "d3fend", "ocsf", "nis2", "eu-ai-act", "digital-commons", "field-note-132"]
---

Field note one hundred and thirty-two. Three sequential
pull requests landed against `secops-ng-framework` and
with them a new playbook enters the commons:
**F-WF-AGENTICSEC**, a detection-and-response workflow
aimed squarely at threats that come out of, and move
through, agentic AI systems. This one is a first for the
catalogue — the shape of the threat is new enough that
the existing incident-response playbooks did not cover
it cleanly, and community members deploying
LLM-backed automation have been asking for a sovereign,
auditable place to anchor their agentic-incident
response.

## What landed

- **PR #678 — SKELETON.** CACAO v2 scaffold for the
  workflow, with the NIS2 Article 21(2)(b) (incident
  handling) and 21(2)(e) (network and information
  systems security) mapping anchors in place and G-01
  and G-02 goal links wired against the theme index.
  The skeleton defines the phases — detect, triage,
  contain, evict, recover, review — and the artefact
  boundary against neighbouring playbooks.
- **PR #679 — CORE.** Real OSCAL pins against the
  versioned control catalogue, D3FEND tactic tags on
  each phase, three-target compile-target emissions
  (n8n, Temporal, LangGraph), and byte-parity goldens
  so a change in the source artefact produces the same
  bytes in every compile target, checked in CI. G-01
  and G-03 goal links.
- **PR #680 — EXTEND.** OCSF telemetry bindings for the
  detection surface, wired into the KPI/KRI hook
  layer so operators get measurable signals — mean time
  to detect an agentic burst, containment latency,
  false-positive rate against the agentic-behaviour
  baseline — into the executive-metrics stream that
  already carries the rest of the SOC's numbers. G-01
  and G-04 goal links.

## What agentic threats look like from an operator seat

The novelty here is behavioural. Classic detection tuning
assumes a human hand at the keyboard — click cadence,
credential-stuffing patterns pinned to human timing,
lateral movement on the order of minutes to hours. An
autonomous agent does not respect any of that. The
indicators the playbook watches for:

- **Anomalous LLM API call volume.** Sustained bursts of
  outbound calls to model-provider endpoints from a
  workload or an identity that historically did not use
  them, or from a shape that does not match the
  operator's declared agentic inventory. Volume itself
  is not the signal; volume against baseline plus
  identity mismatch is.
- **Rapid credential enumeration.** An autonomous agent
  handed the wrong scope will discover its blast radius
  by walking it. The playbook watches for
  credential-listing and permission-probe sequences that
  compress hours of manual reconnaissance into seconds,
  keyed against the identity-graph baselines the SOC
  already maintains.
- **Lateral-movement burst inside sub-minute
  self-correction windows.** When an agent hits a wall
  it re-plans. The tell is a tightly clustered sequence
  of authentication, resource-enumeration, and
  privilege-escalation attempts inside a self-correction
  window — often under sixty seconds end to end — that a
  human operator would not produce. The playbook binds
  the detection to a sliding-window rule with the
  window and the burst threshold as operator-tunable
  parameters, not hard-coded magic numbers.
- **Agentic-supply-chain compromise.** A pinned model
  version, a tool-use manifest, or a prompt-template
  registry changing without a matching change-management
  ticket. The playbook anchors this on the same
  supply-chain evidence anchors the CRA crosswalk
  already carries and treats a drift as an incident
  input rather than a configuration event.

None of these indicators are novel on their own; the
novelty is composing them into a coherent detection and
containment posture and expressing it as a portable
artefact that compiles against three orchestrators an
operator might already run.

## Three-target compile parity and measurable detection

F-WF-AGENTICSEC ships with three compile targets, all
covered by the byte-parity golden fixtures the framework
uses for the rest of the workflow catalogue:

- **n8n** for operators running the no-code path.
- **Temporal** for operators running durable code.
- **LangGraph** for operators running the agentic
  orchestration path — where the workflow lands in the
  same substrate as the systems it is defending.

The OCSF telemetry bindings on the EXTEND merge give the
detection surface a shared data shape. An agentic-burst
event emitted from any of the three compile targets
comes off the wire in the same OCSF category, with the
same fields, keyed against the same identity graph. The
KPI/KRI hooks pull the numbers into the
executive-metrics stream against the same versioned ids
already discharging the rest of the security-operations
metrics — so an operator does not stand up a separate
board for agentic-incident telemetry, they extend the
one they already run.

## Regulatory anchors and D3FEND coverage

- **NIS2 Article 21(2)(b) — incident handling.** The
  playbook is bound to the existing incident-handling
  anchors and inherits their evidence surfaces.
- **NIS2 Article 21(2)(e) — network and information
  systems security.** The containment and eviction
  phases hook the network-segmentation and
  identity-quarantine controls the framework already
  carries.
- **D3FEND tactic tags.** Each phase is tagged with the
  D3FEND tactics it discharges — detect, isolate, evict,
  restore — so a defender reading the playbook against
  a D3FEND-shaped attack matrix can see which cells the
  workflow covers and which it does not.

## The EU AI Act context

The EU AI Act implementation wave has landed
organisations across the community with a new
question: they are running LLM-backed pipelines against
production data, sometimes with autonomous action
surfaces, and their incident-response playbooks were
written before agentic behaviour was on the threat
model. F-WF-AGENTICSEC is a place to anchor that
response — sovereign, auditable, community-governed,
and expressed as a portable artefact rather than a
vendor-tied capability. It sits alongside the existing
crosswalks so an operator who is already reading their
posture against NIS2 or DORA or the AI Act's
risk-management provisions can extend into agentic
coverage against the same versioned catalogue.

The AI Act itself is not a crosswalk target in this
merge — the mapping surface for the Act is a separate
piece of work — but the playbook is designed so the
Act-side anchors can land against the same phases
without re-shaping the workflow.

## What this means for an operator

- **A named playbook for agentic-incident response.**
  Not a generic incident-handling workflow with a
  paragraph added for AI, but a first-class artefact
  with its own phases, its own detection indicators,
  and its own compile-target emissions.
- **Portable across the three compile targets.** An
  operator running n8n today can adopt the playbook,
  and if they migrate to Temporal or add a LangGraph
  path later, the workflow moves with them at byte
  parity.
- **Measurable, not narrative.** The OCSF bindings and
  the KPI/KRI hooks mean an operator can put a number
  on their agentic-incident posture — detection
  latency, containment latency, false-positive rate
  — and track it against the same executive-metrics
  stream that carries the rest of their SOC numbers.
- **Community-governed.** The threat model is going to
  keep moving. The playbook is a public artefact under
  community governance, so the next indicator, the
  next tactic, the next compile target lands through a
  pull request against the same versioned ids rather
  than a vendor release cycle.

## Where to look

- **Framework repo:**
  - `content/workflows/agenticsec/README.md` — theme
    index and phase model.
  - `content/workflows/agenticsec/workflow.cacao.json`
    — the CACAO v2 source artefact.
  - `content/workflows/agenticsec/mappings.yaml` —
    NIS2 Art.21(2)(b)/(e) OSCAL pins and D3FEND tactic
    tags.
  - `content/workflows/agenticsec/telemetry.ocsf.yaml`
    — the OCSF binding layer for detection events.
  - `compile/targets/{n8n,temporal,langgraph}/agenticsec/`
    — the three compile-target emissions with the
    byte-parity golden fixtures alongside.

One artefact, three compile targets, one telemetry
shape, one measurable detection surface, one crosswalk
into NIS2's incident and network-security articles. The
Digital Commons picks up an agentic-threat playbook and
the operators reading against it get a sovereign,
auditable place to anchor an incident category the SOC
did not have a name for a year ago.
