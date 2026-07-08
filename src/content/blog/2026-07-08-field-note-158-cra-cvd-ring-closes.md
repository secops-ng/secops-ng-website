---
title: "Field note #158 — F-WF-CRA-CVD ring closes: the cra_cvd cookbook now walks CRA Art.14 coordinated disclosure end-to-end across three compile targets"
description: "Field note one hundred and fifty-eight from the SecOps-NG Digital Commons. Framework PR #744 lands the EXTEND cookbook for cra_cvd, closing the SKELETON → CORE-B-PRIM → CORE-B-EXAMPLES → EXTEND arc for the CRA Article 14 coordinated vulnerability disclosure playbook. Intake → ack_to_reporter → coordinate_disclosure → publish_advisory now runs end-to-end against n8n, Temporal, and LangGraph from a single CACAO source, with three JSON-native envelope primitives and no hardcoded endpoints."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "playbooks", "cra", "cra-art-14", "cvd", "coordinated-disclosure", "cookbook", "n8n", "temporal", "langgraph", "digital-commons", "field-note-158"]
---

Field note one hundred and fifty-eight. The `cra_cvd`
playbook has completed its full development arc.
SKELETON → CORE-B-PRIM → CORE-B-EXAMPLES → EXTEND landed
across three framework pull requests this week, with #744
closing the ring: a complete operator walkthrough for the
CRA Article 14 coordinated vulnerability disclosure
lifecycle, running end-to-end against every one of the
three reference compile targets.

## What the playbook does

`playbook.cra_cvd@v1` operates the operator-side CVD
lifecycle a manufacturer of a product with digital
elements runs when a reporter — security researcher,
downstream operator, finder — submits a vulnerability
report against a shipped product. Seven CACAO v2 action
steps, one deterministic transition each, joined into a
single reportable-event ledger by `__case_id__`:

- **intake** — the reporter-facing submission surface.
- **ack_to_reporter** — the CRA Art. 14 §6 acknowledgement
  envelope back to the finder.
- **triage** — severity, exploitation status, affected-
  product scoping.
- **develop_fix** — the internal remediation pass.
- **validate_fix** — the pre-publication verification
  gate.
- **coordinate_disclosure** — the CSIRT and downstream
  operator handshake.
- **publish_advisory** — the CSAF 2.0 advisory shape
  emitted to the operator's chosen advisory endpoint.

The playbook is **distinct from** `cra_srp_notify`. The
SRP chain covers the regulator-facing 24h / 72h / 14d-or-
1-month timer cascade under CRA Art. 14 §1–§3. This
playbook covers the parallel operator-side disclosure
lifecycle. The two compose: when triage classifies a case
as actively-exploited, this playbook forks a sibling
`cra_srp_notify` run keyed on the same `__case_id__` so
the regulator chain runs in parallel with the
coordinated-disclosure lifecycle.

## What shipped this week

- **#741 — CORE-B-PRIM.** Three JSON-native envelope
  primitives land as pure builders:
  `reporter.send_acknowledgement`,
  `disclosure.build_advisory_artifact`, and
  `csirt.notify_national_csirt`. Two steps bind against
  them via `core_body`: `ack_to_reporter` emits the CRA
  Art. 14 §6 acknowledgement envelope; `publish_advisory`
  emits the CSAF 2.0 advisory shape. All three primitives
  are operator-configured — no hardcoded SMTP endpoint, no
  hardcoded CSIRT URL, no hardcoded advisory publisher.
- **#743 — CORE-B-EXAMPLES.** The three-target compiled
  examples regenerate byte-deterministically from the
  canonical CACAO source. Goldens under
  `examples/{n8n,temporal,langgraph}/cra_cvd/` guard the
  ring on every PR. Cookbook status moves to CORE; the
  GDPR data-flow section moves to CORE alongside.
- **#744 — EXTEND cookbook.** `docs/cookbook/cra_cvd.md`
  carries a complete practitioner walkthrough from §12
  Prerequisites through §17 EXTEND-next. An operator can
  read the cookbook from front to back and stand up the
  intake → ack → coordinate → publish flow against their
  own stack. ROADMAP.md flips F-WF-CRA-CVD to Shipped.

## The compile-target parity read

The seven-step CACAO source compiles to all three
reference targets from the same authoring surface:

- **n8n** — the no-code slice. The compiled workflow
  reads as a linear n8n graph an operator's on-call SecOps
  practitioner can inspect and re-wire without leaving
  the UI.
- **Temporal** — the durable-code slice. The compiled
  workflow reads as a Temporal workflow file with
  deterministic activity signatures, so the same run
  survives worker restarts and replays cleanly on
  incident-review.
- **LangGraph** — the agentic slice. The compiled graph
  runs the same seven-step lifecycle with the agentic
  reasoning that surfaces on `coordinate_disclosure` —
  the human-owned CSIRT handshake — as a first-class
  node.

One CACAO source, three compiled shells. The operator
picks the target that already lives in their stack.

## The sovereignty read

Three surfaces stay operator-owned by design:

- **The CSIRT wire.** `coordinate_disclosure` remains
  CACAO-only in CORE. The `csirt.notify_national_csirt`
  primitive builds the envelope; the wire that carries it
  to the operator's national CSIRT is configured at the
  compile-target endpoint layer. No default hardcoded to
  any one Member State's CSIRT.
- **The reporter-acknowledgement channel.** The Art. 14 §6
  envelope shape is deterministic; the SMTP / secure-inbox
  channel that delivers it is operator-supplied.
- **The advisory publisher.** The CSAF 2.0 shape is
  emitted; the endpoint (a public advisory feed, a
  disclosure portal, a partner-network publisher) is the
  operator's to wire.

No default hardcoded to any commercial platform. No
default hardcoded to any single Member State's regulatory
surface. The compile-target config layer is where an
operator's own choices land — and the primitives stay
pure JSON-native envelope builders so they run identically
whichever compile target the operator picked.

## Compliance cross-references

The cookbook weaves three compliance cross-references
throughout the seven-step lifecycle:

- **GDPR Art. 30** — the ROPA record for the reporter's
  identity and the reported-vulnerability metadata.
- **GDPR Art. 32(1)(b)** — the channel-security leg on
  the reporter-acknowledgement and advisory-publishing
  paths.
- **CRA Annex I §2(2) and §2(5)** — the underlying
  product-security obligations that make the CVD
  lifecycle a required operator surface, not an optional
  one.

Compliance carriers are named at the step; the operator's
compliance lead can read the cookbook alongside the
regulation article and see the same handles on both sides.

## The G-01 / G-06 signal

- **G-01 — content coverage.** `cra_cvd` advances the
  CRA-CVD control family on the NIS2 Art. 21 mapping
  surface. Coupled with the earlier `cra_srp_notify`
  (regulator-facing) work, the CRA vulnerability-handling
  obligations now have both sides of the disclosure
  chain routed to named playbooks.
- **G-06 — contributor adoption signal.** A complete
  practitioner walkthrough — Prerequisites through
  EXTEND-next — lowers the barrier for an external
  contributor. The intake surface, the primitive shapes,
  and the compile-target choice points are all
  documented; the CORE-DEFERRED marker on
  `coordinate_disclosure` is an explicit invitation for
  a future contribution.

## Where to look

- **Framework repo:**
  - `docs/cookbook/cra_cvd.md` — the operator walkthrough.
  - `content/playbooks/cra_cvd/playbook.cra_cvd@v1.yaml` —
    the canonical CACAO source.
  - `examples/{n8n,temporal,langgraph}/cra_cvd/` — the
    per-target compiled examples and goldens.
  - `ROADMAP.md` — F-WF-CRA-CVD status now Shipped.

The CRA Article 14 coordinated disclosure lifecycle now
walks end-to-end from a single CACAO source into every
one of the three reference compile targets, with the
sovereignty seams held at the operator-configured wires.
