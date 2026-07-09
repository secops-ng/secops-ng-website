---
title: "Field note #163 — eIDAS 2.0 EUDIW identity-verification playbook lands: wallet presentation → PID verification → LoA-to-tier → audit-evidence → access provisioning, across all three compile targets"
description: "Field note one hundred and sixty-three from the SecOps-NG Digital Commons. Framework PRs #759 (SKELETON) and #760 (CORE) land a CACAO v2 operational playbook for the eIDAS 2.0 European Digital Identity Wallet identity-verification lifecycle. Five operational steps — request an EUDIW presentation, verify the PID credential against the EU trust-anchor registry, assess the Level of Assurance, emit the OCSF Account Change 3001 audit-evidence artifact, hand off to access provisioning — compiled into n8n, Temporal, and LangGraph reference targets, with seven byte-parity golden tests across the three."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-03", "playbook", "eidas2", "eudiw", "digital-identity", "wallet", "identity-verification", "nis2-art-21", "dora-art-5", "ocsf", "cacao", "digital-commons", "field-note-163"]
---

Field note one hundred and sixty-three. Two framework PRs
close the ring on a workflow the eIDAS 2.0 rollout is
about to make everyday operational surface: onboarding a
European Digital Identity Wallet holder to a protected
access tier, portably, with the audit evidence the
regulation names.

- PR #759 lands the SKELETON — the CACAO v2 playbook
  artifact and the outbound overlay onto OSCAL AC-2 +
  IA-8, D3FEND D3-OAM, OCSF Account Change (3001), NIS2
  Art. 21(2)(i), and DORA Art. 5(2)(a).
- PR #760 lands the CORE — per-target compiled
  emissions into n8n, Temporal, and LangGraph, plus
  seven byte-parity golden tests locking the compile
  output across the three surfaces.

## The workflow, in one arc

`eidas2_identity_verification` reads the five
operational steps an operator runs when a new
EUDIW-enabled principal arrives at a protected access
surface:

1. **Request an EUDIW presentation.** The playbook
   emits an OpenID4VP-shaped presentation request for
   the Person Identification Data (PID) credential. Read
   against the wallet surface; nothing is asserted back
   to the wallet.
2. **Verify the PID credential.** The returned
   presentation is cryptographically verified against
   the EU trust-anchor registry. Signature, issuer, and
   revocation state are checked in the same step.
3. **Assess the Level of Assurance and map to a tier.**
   The LoA carried by the verified PID is mapped, via
   the operator-side policy, to a concrete access tier
   the downstream provisioning workflow will honour.
4. **Emit the identity-verification audit-evidence
   artifact.** An OCSF Account Change (3001) event is
   emitted with the verified principal identifier,
   the LoA, the assigned tier, and a dated pointer to
   the trust-anchor registry entry consulted. That
   artifact is the audit trail the regulation asks for.
5. **Hand off to access provisioning.** The final step
   surfaces a `principal_ready` signal for the operator's
   existing access-management workflow to pick up; the
   playbook does not itself grant access — it names the
   evidence the granting workflow needs.

The playbook is read-only against the wallet surface and
against the trust-anchor registry. No attribute is
asserted back; no trust-list entry is mutated.

## Regulatory anchors

Every step carries external references that operators
running regulated environments will recognise:

- **eIDAS 2.0** — Regulation (EU) 2024/1183 amending
  Regulation (EU) 910/2014, Art. 5c on qualified
  electronic attestations of attributes, read through
  the EUDIW obligations that Member States are rolling
  out.
- **NIS2** — Directive (EU) 2022/2555 Art. 21(2)(i) on
  human-resources security and access control.
- **DORA** — Regulation (EU) 2022/2554 Art. 5(2)(a) on
  ICT governance frameworks that include digital-
  identity policy.
- **OSCAL** — Access Control AC-2 (Account Management)
  and IA-8 (Identification and Authentication,
  Non-Organizational Users).
- **D3FEND** — D3-OAM (Operating System Account
  Monitoring), the defensive-technique anchor for the
  audit-evidence emission step.
- **OCSF** — Account Change (3001) as the emission
  class for the verification event.

The refs are practitioner-useful, not marketing
material — they let an operator writing an audit narrative
walk from a specific limb of the regulation into the
workflow step that discharges it, and back.

## Three compile targets, seven byte-parity golden tests

CORE lands the workflow compiled into all three
reference targets:

- **n8n** — a workflow JSON with an EUDIW-presentation
  webhook node, PID verification via an HTTP request
  against the trust-anchor registry, LoA-to-tier mapping
  as a Function node, OCSF emission via an HTTP request
  to the sink, and a final webhook response.
- **Temporal** — a durable workflow with the five steps
  as activities, deterministic retry semantics on the
  trust-anchor probe, and the OCSF emission as a
  separate activity so the audit-evidence emission can
  replay without re-triggering the wallet round-trip.
- **LangGraph** — an agentic graph with the same five
  step boundaries, the LoA-to-tier mapping as a
  policy-gated edge, and the OCSF emission as a
  terminal-node side effect.

Seven byte-parity golden tests across the three targets
lock the compile output. The pattern is the same G-03
byte-parity contract the rest of the catalogue rides on:
the operator can pick the runtime that fits their
sovereign-stack posture and get an artifact whose shape
is stable across cycles.

## Why this one, now

The EUDIW timeline is moving under the operator's feet.
Member States are issuing wallet reference
implementations under eIDAS 2.0, and the Art. 5c
obligations arrive with them. A regulated operator
inside a NIS2 or DORA perimeter running an
identity-verification workflow next quarter needs a
portable, sovereignty-aware playbook they can compile
into whatever orchestrator they already run — one that
names the trust-anchor step, the LoA mapping, and the
OCSF audit-evidence emission at the same level of
concreteness the regulation names them at.

That is what lands this cycle. The playbook is not the
whole surface — there is an EXTEND card queued that
wires the OCSF Compliance Finding (2003) emission for
the verification-failure branch, and a KRI card queued
for LoA-tier-drift. The SKELETON + CORE ring is closed;
the workflow is portable across the three compile
targets today.

## Where the ring goes next

- **EXTEND (queued):** OCSF Compliance Finding (2003)
  emission on the verification-failure branch. The
  playbook currently emits the success-side artifact;
  the failure-side needs the compliance-finding shape
  regulators read.
- **KRI (queued):** an LoA-tier-drift residual-risk
  KRI in `content/metrics/` for the same workflow.

For the operator reading this today: a portable
EUDIW identity-verification playbook, compiled into
n8n / Temporal / LangGraph, with the eIDAS 2.0, NIS2,
and DORA anchors named per-step. Sovereignty-aware
by default — the trust-anchor probe assumes EU-resident
registry endpoints, the wallet surface is EUDIW under
Member-State issuance, no non-EU wallet proxy is
assumed anywhere in the chain.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- The playbook lives at `content/playbooks/eidas2_identity_verification/` in framework PRs #759 (SKELETON) and #760 (CORE).
- Roadmap goals: G-01 (content coverage) and G-03 (byte-parity golden coverage).
