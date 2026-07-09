---
title: "Field note #166 — NIS2 Art. 20 CORE-PRIMITIVES lands: the four deterministic step bodies that turn a management-body governance cycle into a machine-readable, replay-safe audit trail"
description: "Field note one hundred and sixty-six from the SecOps-NG Digital Commons. Framework PR #764 closes the CORE-PRIMITIVES ring on the nis2_art20_governance triplet: four replay-safe step-body primitives — resolve_governance_cycle, conduct_art20_review, record_management_approval, emit_governance_evidence — with twenty-six unit tests green, on top of the SKELETON shipped in PR #762. The three-target compiler fan-out (n8n, Temporal, LangGraph) is next. Practitioners get a governance-evidence backbone that emits OCSF API Activity class_uid 6003 artifacts into any OCSF-compliant SIEM/SOAR."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-02", "playbook", "nis2", "nis2-art-20", "governance", "management-body", "primitives", "ocsf", "cacao", "digital-commons", "field-note-166"]
---

Field note one hundred and sixty-six. Two field
notes back the project shipped the SKELETON of
`nis2_art20_governance` — the CACAO v2 playbook
that names the NIS2 Article 20(1) management-body
approval cycle as a first-class portable workflow.
Today the CORE-PRIMITIVES phase lands.

- PR #764 closes the CORE-PRIMITIVES ring — four
  deterministic step-body primitives under
  `content/playbooks/nis2_art20_governance/primitives/`,
  twenty-six unit tests green, all four functions
  replay-safe by construction.

## What the primitives do

The SKELETON named the four operational steps of
the Article 20 governance cycle. CORE-PRIMITIVES
turns each step into a testable pure function
that produces a stable, machine-readable record.
An operator running the playbook now has a
concrete step body per phase, not a stub:

1. **`resolve_governance_cycle`.** Probes the
   operator's governance-cadence catalogue for the
   currently-due management-body cycle and
   propagates any ad-hoc trigger (regulator
   request, board escalation, incident-driven
   review). The cadence itself remains the
   operator's — the primitive resolves *which*
   cycle is firing, not *when* cycles should fire.
2. **`conduct_art20_review`.** Reads the current
   Article 21(2)(a)–(j) risk posture across all
   ten limbs and pulls in training-completion
   evidence for the Article 20(2) obligation on
   the management body. The output is a
   structured risk-posture-and-training summary
   ready for management-body presentation.
3. **`record_management_approval`.** Captures the
   signed management approval — approving body
   identifier, approved measures, dissents if any,
   effective date — and emits a dated
   governance-record JSON. That JSON is the
   Article 20(1) discharge, in a shape a
   downstream evidence store can index against.
4. **`emit_governance_evidence`.** Wraps the
   governance record as an OCSF API Activity
   (class_uid 6003) artifact and writes it into
   the operator's audit envelope. That artifact
   is what an OCSF-compliant SIEM/SOAR ingests,
   correlates, and holds durable against the
   audit-trail obligation.

Each primitive is a pure function of its inputs.
No hidden clock reads, no ambient credential
lookups, no side effects outside the declared
evidence envelope. That's the property the CORE
phase contributes to the catalogue — the same
step body, run on the same inputs, produces the
same record every time.

## Why replay-safe matters here

A management-body governance cycle is not a
throw-away workflow. The artifact it emits is
what a regulator, an internal audit function, or
a supervisory authority reads years later. Two
constraints follow.

The record has to be reproducible. If an
Article 20(1) approval decision is ever
challenged, the operator has to be able to
reconstruct the exact inputs the management
body saw and the exact record the workflow
produced. Replay-safety is the property that
makes that reconstruction mechanical rather than
narrative.

The record has to be integrable. Governance
evidence sitting in a bespoke silo defeats its
own purpose. Emitting OCSF API Activity 6003
means the artifact lands in the same event
surface the operator's operational-security
telemetry already flows through — one auditable
stream, correlatable across governance and
operational surfaces alike.

The four primitives are the pieces that carry
both properties into the playbook: pure
functions with declared inputs, and a terminal
step that speaks a public evidence schema.

## Twenty-six unit tests, and what they cover

The CORE-PRIMITIVES phase ships with twenty-six
unit tests green across the four primitives.
The tests cover the shapes that matter for a
governance record — cadence resolution across
scheduled and ad-hoc triggers, the ten-limb
Article 21(2) posture roll-up, approval capture
with and without dissents, and the OCSF 6003
emission envelope. The bar is that a
practitioner reading the primitives can run the
test suite locally, see the primitives behave
against the documented contract, and trust the
step bodies before they ever compile the
playbook into their runtime of choice.

## Where CORE goes next — the three compile targets

CORE-PRIMITIVES is one half of the CORE ring.
The other half — CORE-FANOUT — compiles the
four-step arc into the three reference targets
the catalogue commits to:

- **n8n.** An operator-scheduled workflow, with
  the cadence resolution as a trigger node, the
  Article 21(2) presentation as a data step, an
  approval-capture form, and the OCSF 6003
  emission as a terminal HTTP node into the
  operator's SIEM.
- **Temporal.** A durable workflow with cadence
  firing as a scheduled workflow, deterministic
  replay of the approval capture, and OCSF 6003
  emission as a separate activity — the shape a
  Temporal-native operator would expect.
- **LangGraph.** An agentic graph with the
  presentation as a node, an approval-gated
  edge, and the OCSF 6003 emission as a
  terminal node — the shape a LangGraph-native
  operator would expect.

CORE-FANOUT is in progress. When it lands, the
same four primitives will drive all three
compile targets and the byte-parity golden tests
will bind them together — that's the G-03
contract every catalogue triplet lives under.

## What practitioners can do today

The primitives are on `main`. An operator
inside the NIS2 perimeter can already:

- Read the four step bodies and see exactly what
  a compliant Article 20 governance cycle looks
  like as portable content, not as a compliance
  slide deck.
- Run the twenty-six unit tests and inspect the
  input/output shapes each primitive commits to.
- Trace an emitted governance record from the
  OCSF 6003 envelope back to the specific
  management-body meeting that produced it —
  the audit trail Article 20(1) reads against.
- Wait a beat for CORE-FANOUT and get the same
  arc compiled into whichever of n8n, Temporal,
  or LangGraph fits the operator's
  sovereign-stack posture.

The framing the commons cares about: Article 20
is where NIS2 stops being a checkbox and starts
being a continuously auditable posture. The
directive puts the approval of cybersecurity
risk-management measures on the management body
itself, on a documented cadence, with a training
obligation attached. Turning that requirement
into four deterministic, testable, replay-safe
step bodies — each emitting a machine-readable
record — is what the CORE-PRIMITIVES phase
contributes. The governance-evidence backbone is
now in place.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- The primitives live at `content/playbooks/nis2_art20_governance/primitives/` in framework PR #764 (CORE-PRIMITIVES).
- Prior phase: PR #762 (SKELETON), covered in field note #164.
- Sibling workflow: `content/playbooks/nis2_self_assessment/` (whole-Art.21 evidence roll-up).
- Roadmap goals: G-01 (content coverage) and G-02 (regulatory mapping — Art.20 evidence artifact). CORE-FANOUT to n8n / Temporal / LangGraph in progress.
