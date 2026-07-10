---
title: "Field note #170 — network_security CACAO v2 playbook ships: NIS2 Article 21(2)(e) coverage lands on main with three-target compiler fan-out"
description: "Field note one hundred and seventy from the SecOps-NG Digital Commons. The network_security CACAO v2 playbook ships in the framework today — a five-step topology (inventory_network_segments → evaluate_segmentation_policy → detect_policy_violations → enforce_remediation → generate_posture_evidence_artifact) bound to OSCAL SC-7/SC-3, OCSF Network Activity, and D3FEND D3-NTA, compiling identically to n8n, Temporal, and LangGraph — closing one of the top-5 NIS2 Article 21 control families with no prior dedicated CACAO entry in the framework."
pubDate: 2026-07-10
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "playbook", "nis2", "nis2-art-21", "network-security", "cacao", "oscal", "ocsf", "d3fend", "three-target", "digital-commons", "field-note-170"]
---

Field note one hundred and seventy. The
network_security CACAO v2 playbook lands on main
in the framework today. Two framework pull
requests carry the ship: the SKELETON pull
request seats the five-step arc and its metadata,
and the CORE pull request fills in the
deterministic action bodies and wires the
three-target compiler fan-out. With both merged,
the playbook is a first-class regulatory anchor
for NIS2 Article 21(2)(e) — security in network
and information systems — on the same footing as
the earlier anchors the catalogue already carried
for governance, risk management, incident
handling, and business continuity.

Network security was one of the top-five NIS2
Article 21 control families the framework had
been carrying without a dedicated CACAO entry.
Neighbouring families — nis2_art20_governance
(field notes #164, #166, #170-era ring-close,
#176), incident_handling, business_continuity,
security_awareness_training (field note #175) —
each anchor their own Article 21 obligation with
a portable playbook. Article 21(2)(e) sat as a
gap the catalogue named openly. Today closes it.

## What the playbook does

The `playbook.network_security@v1` CACAO v2
playbook models the network-security posture
cycle as five deterministic steps, each with a
declared regulatory anchor and an auditable
evidence surface:

- **inventory_network_segments.** Enumerate the
  network segments in scope — production zones,
  management planes, third-party interconnects,
  administrative networks — and record each with
  its declared boundary posture. This is the step
  that gives the rest of the cycle a stable set
  of subjects to reason about, so later steps do
  not silently drift as segments come and go.
- **evaluate_segmentation_policy.** Read the
  operator's declared segmentation policy against
  the inventory. The policy is an artifact the
  operator owns and edits; the playbook does not
  decide what "correct" segmentation looks like.
  What the playbook decides is whether the
  running posture matches the declared posture,
  and where it does not.
- **detect_policy_violations.** Compare the
  segmentation policy to what the network is
  actually doing. Violations are recorded with
  the specific segments involved, the policy
  clauses they contravene, and the observed
  network activity that led to the finding. The
  framework does not choose a violation store
  for the operator; the step emits into the
  posture stream the operator's compile target
  already routes.
- **enforce_remediation.** Take the declared
  remediation path for each violation. This is
  the step where the operator's authority to
  change the running posture lives — quarantine a
  segment, revoke an interconnect, tighten an
  access-control list. The playbook records the
  remediation action taken and the outcome, and
  hands the artifact to the next step.
- **generate_posture_evidence_artifact.** Emit
  the dated posture-evidence record that binds
  the cycle to auditable evidence. This is the
  artifact a reviewer opens to see what the
  network looked like, what the policy said,
  what did not match, and what changed. It is
  the artifact the NIS2 evidence surface reads
  when the auditor asks for Article 21(2)(e)
  evidence.

The whole cycle is bound to OSCAL controls SC-7
(Boundary Protection) and SC-3 (Security Function
Isolation), so the playbook lands in the same
control catalogue an operator's existing OSCAL
tooling already reads. The data shape is OCSF
Network Activity, so the emissions land in the
same event stream an operator's SIEM already
speaks. The technique binding is D3FEND D3-NTA
(Network Traffic Analysis), so the defensive
posture reads through the same technique
taxonomy the community already uses to reason
about network defence.

## Three targets, one playbook

The CORE ship carries the three-target compiler
fan-out. The same `playbook.network_security@v1`
CACAO v2 artifact compiles to:

- an n8n workflow — the no-code target for
  operators whose network-security operations
  already run through visual workflow tooling;
- a Temporal durable workflow — the durable-code
  target for operators who need the cycle to
  survive worker restarts, upgrades, and
  long-running remediation waits without losing
  state;
- a LangGraph graph — the agentic target for
  operators who wire the cycle into an
  agent-driven operations plane.

The compile target is a decision the operator
makes about which orchestrator they already run.
The playbook is the same playbook in all three
targets. Byte-parity goldens follow in the
EXTEND phase and hold the three targets honest
against each other, the way the goldens do for
the security_awareness_training family that
shipped in field note #175.

## Why this matters for NIS2 operators

NIS2 Article 21(2)(e) puts a direct obligation on
essential and important entities to take
appropriate and proportionate technical,
operational, and organisational measures for the
security in network and information systems the
entity uses in its activities or in the provision
of its services. It is one of the ten
sub-paragraphs the article names and the one
that most directly touches the network fabric an
operator runs day to day.

A regulation-anchored, portable, auditable
playbook is the starting point an operator can
adopt without writing the cycle from scratch and
without committing to a runtime the operator
does not want to run. The playbook does not
prescribe which segmentation policy is correct;
that is the operator's decision to make against
their environment. What it prescribes is the
cycle — inventory, evaluate, detect, enforce,
emit — and the evidence surface a reviewer can
read at the end.

Operators fork the playbook, tighten the
segmentation-policy shape to what their network
already declares, wire the enforcement step into
whatever mechanism they already trust to change
running posture, and route the posture-evidence
artifact into the audit lane their compliance
function already reads. Every step is named, every
binding is declared, every artifact is dated.

## What is next

Inbound mapping closure is the next stop. A
regulatory-mapping pull request is in review that
wires network_security through the NIS2 lane
alongside the DORA, CRA, and GDPR lanes the
framework already carries. When it lands, an
operator reading the network_security playbook
from any of the four regulatory surfaces reaches
the same artifact through the mapping layer, and
the Article 21(2)(e) surface in the NIS2
inbound-mapping catalogue no longer names a gap.

After that, the EXTEND phase carries the
byte-parity goldens and the practitioner
cookbook. The goldens hold the three compile
targets to byte-for-byte equivalence on the
emitted artifacts, so a reviewer choosing between
n8n, Temporal, and LangGraph does not have to
reason about whether the emissions drift between
compile targets. The cookbook reads the whole
cycle end-to-end the way the F-CACAO-NIS2-ART20
cookbook reads the management-body governance
cycle (field note #176), and hands the operator
a first-person walkthrough of the network-security
posture cycle in production.

## For the commons

The framework is open. The playbook, the compile
targets, and the mapping layer are read, forked,
and extended by anyone who wants to run the cycle
against their own network. Segmentation policies
are as different as the operators who run them,
and the playbook is deliberately shaped so the
community can carry alternative policy shapes,
alternative enforcement mechanisms, and
alternative posture-evidence formats without
breaking the regulatory anchors the cycle stands
on.

If the network_security playbook is close to what
your operations already declare but not quite
there, fork it, adjust the segmentation-policy
shape or the enforcement step, and open a pull
request. The community pointers are the same as
for every other regulatory anchor in the
framework:

- `CONTRIBUTING.md` — how the playbook, mapping,
  and cookbook layers accept community pull
  requests;
- `content/playbooks/network_security/` — the
  CACAO v2 playbook, its three-target compile
  outputs, and the goldens that will land in
  EXTEND;
- `content/mappings/nis2/` — the NIS2 inbound
  mapping surface where network_security wires
  into Article 21(2)(e) alongside the other
  Article 21 anchors the framework already
  carries.

Article 21(2)(e) has a portable, auditable
playbook now. The mapping wires it into the NIS2
lane next.
