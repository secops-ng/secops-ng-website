---
title: "Field note #65 — F-WF-12 IT-and-security support agent flips to Shipped with three-target parity, F-WF-11 on-boarding/off-boarding tracker closes out, and F-SV-02 eIDAS 2.0 wallet attestation pattern opens on the sovereignty lane"
description: "Sixty-fifth field note from the SecOps-NG Digital Commons: F-WF-12 IT-and-security support agent lands its Temporal and LangGraph CORE-FANOUT siblings with byte-parity goldens, flips ROADMAP to Shipped, and reconciles worked-example READMEs (NIS2 Art.21(2)(b)); F-WF-11 on-boarding/off-boarding tracker EXTEND-closeout flips Proposed→Shipped and lands a cookbook entry (NIS2 Art.21(2)(i)); F-SV-02 eIDAS 2.0 wallet integration pattern opens on the sovereignty lane with a SKELETON typed input model for the EU Digital Identity Wallet attestation, plus n8n and Temporal CORE-FANOUT — LangGraph target still ahead, so the row is opening, not Shipped."
pubDate: 2026-06-20
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-11", "f-wf-12", "f-sv-02", "nis2", "article-21", "eidas2", "eudiw", "sovereignty", "digital-commons", "three-target", "byte-parity", "n8n", "temporal", "langgraph"]
---

The last field note read a closeout-adjacent pair of rows on the
NIS2 Article 21 spine: F-WF-11 on-boarding/off-boarding tracker
landing a three-target CORE-FANOUT with byte-parity goldens plus
two joiner/leaver KRI catalogue entries, and F-WF-12
IT-and-security support agent opening with a SKELETON and the n8n
CORE-FANOUT on the F-CP-02 incidents stream. This note reads the
tail of that wave — both rows flipping to Shipped — and the
opening of a new row on a different lane: the sovereignty stream
finally picking up the **eIDAS 2.0 wallet integration pattern**.

Three rows moved in this window:

- **F-WF-12 IT-and-security support agent** closes its three-target
  CORE-FANOUT — Temporal and LangGraph each emitting a
  byte-identical interaction-evidence artifact against the F-CP-02
  incidents stream — and lands its EXTEND-closeout: the ROADMAP
  flip to Shipped and a reconciliation pass across the
  worked-example READMEs. Three of three reference compile targets.
- **F-WF-11 on-boarding/off-boarding tracker** lands its
  EXTEND-closeout — the ROADMAP flip to Shipped and an
  onboarding_offboarding_tracker cookbook entry — folding the
  three-target CORE plus joiner/leaver KRIs from the prior wave
  into the published cookbook surface. NIS2 Article 21(2)(i).
- **F-SV-02 eIDAS 2.0 wallet integration pattern** opens on the
  sovereignty lane: a SKELETON typed input model for the EU
  Digital Identity Wallet (EUDIW) attestation as a Pydantic-typed
  workflow input, plus n8n and Temporal CORE-FANOUT. LangGraph
  fan-out is still ahead on this row — the catalogue does not yet
  read three-target parity for F-SV-02, so the row is opening,
  not Shipped.

## What landed on F-WF-12

### F-WF-12 Temporal CORE-FANOUT — emitter, activity, byte-parity golden

The Temporal CORE-FANOUT lands through
[PR #373](https://github.com/secops-ng/secops-ng-framework/pull/373):
the Temporal emitter binds against the shared framework-agnostic
interaction-evidence shape, the per-target adapter sits as a
`@activity.defn` interaction-evidence activity, and the Temporal
worked example at
`examples/temporal/it_security_support_agent/` carries a
`regenerate.py` that emits the interaction-evidence artifact
end-to-end against the same representative support-request record
the n8n sibling reads. The byte-parity golden at
`tests/examples/it_security_support_agent/test_temporal_workflow_golden.py`
pins the artifact byte-for-byte; the committed
`.interaction.json` output is byte-identical to the n8n sibling's
output for the same input.

### F-WF-12 LangGraph CORE-FANOUT — emitter, node, byte-parity golden

The LangGraph CORE-FANOUT lands through
[PR #374](https://github.com/secops-ng/secops-ng-framework/pull/374).
Same shape, same shared emitter, different runtime: a LangGraph
state-mapping interaction-evidence node delegates to the same
framework-agnostic interaction-evidence emitter, and the
LangGraph worked example at
`examples/langgraph/it_security_support_agent/` re-imports the
Temporal sibling's typed context so the field-by-field input
values to the emitter are pinned at the source level. The
byte-parity golden pins the LangGraph adapter's output
byte-for-byte against the Temporal and n8n siblings; a refactor
of the shared emitter that silently changes serialisation gets
caught at the byte level, naming which target drifted.

Both branches of the support-agent shape — the
automated-resolution closure path (`classification.significant=false`)
and the human-handoff escalation path (`classification.significant=true`)
— emit byte-identically across all three reference compile
targets.

### F-WF-12 EXTEND-closeout — ROADMAP flip, README reconciliation

The EXTEND-closeout pass lands through
[PR #375](https://github.com/secops-ng/secops-ng-framework/pull/375).
The ROADMAP entry for `F-WF-12 it_security_support_agent` flips
from Proposed to **Shipped**, the worked-example READMEs across
`examples/{n8n,temporal,langgraph}/it_security_support_agent/`
are reconciled to read the same three-target shape consistently,
and the NIS2 Article 21(2)(b) mapping entry now reads the
support-agent row as a Shipped front-of-funnel companion to the
incident-family playbooks (phishing-triage, identity-compromise,
ransomware-containment, data-exfil, post-incident review, on-call
rotation).

### F-WF-12 status — three of three, Shipped

F-WF-12 reads on the ROADMAP as **Shipped** at the close of this
wave. Three reference compile targets carry a worked example and
a byte-parity golden; the catalogue carries the CACAO playbook,
five deterministic primitives, the NIS2 Article 21(2)(b) mapping
entry, and the GDPR ROPA documenting the personal-data flow
through the support-agent workflow. An operator on n8n, Temporal,
or LangGraph can now stage a support-request record and emit
interaction-evidence on the F-CP-02 incidents stream from any of
the three reference targets, with the operator-facing surface
identical across all three.

## What landed on F-WF-11

### F-WF-11 EXTEND-closeout — ROADMAP flip, cookbook entry

The F-WF-11 closeout lands through
[PR #376](https://github.com/secops-ng/secops-ng-framework/pull/376).
The ROADMAP entry for `F-WF-11 onboarding_offboarding_tracker`
flips from Proposed to **Shipped**, and the published cookbook
gains an `onboarding_offboarding_tracker` entry walking through
the joiner / mover / leaver lifecycle from CACAO source to
access-evidence artifact, naming the F-CP-07 access stream the
artifact rides, pinning the byte-parity contract across the
three reference compile targets, and reading the two KRI
catalogue entries — `kri.joiner_to_provisioned_time@v1` and
`kri.leaver_to_revoked_time@v1` — that landed on the
EXTEND-metrics pass in the prior wave. NIS2 Article 21(2)(i).

The closeout does not add new content surface; the
three-target CORE-FANOUT and the metrics pass landed the
operator-facing artifact and the residual-risk catalogue
readings in the prior window. This pass folds the row into
the published cookbook and pins the ROADMAP entry.

### F-WF-11 status — three of three, Shipped

F-WF-11 reads on the ROADMAP as **Shipped** at the close of this
wave. The on-boarding / off-boarding tracker carries a CACAO
playbook, a three-target CORE-FANOUT with byte-parity goldens
on the F-CP-07 access stream, two KRI catalogue entries on the
joiner/leaver edges, a NIS2 Article 21(2)(i) mapping entry
alongside the existing F-WF-08 iam-auditor binding, and a
cookbook walkthrough.

## What opened on F-SV-02

### F-SV-02 SKELETON — typed EUDIW attestation input model

The sovereignty lane has been waiting on an
**eIDAS 2.0 wallet integration pattern** for several windows.
F-SV-02 opens with a SKELETON landed through
[PR #377](https://github.com/secops-ng/secops-ng-framework/pull/377):
a Pydantic-typed input model for the **EU Digital Identity
Wallet (EUDIW)** attestation as a workflow input. The model
reads the EUDIW attestation surface — the issuer-signed claims
the wallet hands a verifier — as a typed boundary at the front
of the workflow:

- An attestation envelope carrying issuer identifiers, signature
  metadata, and the claim set the wallet has consented to
  release for this interaction. The shape is framework-agnostic;
  a downstream catalogue or workflow that wants to read an
  eIDAS-attested claim has a single typed input to bind against,
  no matter which compile target is running.
- Field-level types that map onto the eIDAS 2.0 / EUDIW
  reference architecture's attestation shape — the high-assurance
  identity claims (legal identifier, jurisdiction, qualified
  attribute set) and the metadata an operator needs to verify
  the issuer chain before reading the claims as evidence.
- A `pattern.eidas2_wallet@v1` content-level identifier so
  downstream playbooks and mapping entries can name the pattern
  as a typed dependency rather than re-deriving the input shape.

This row sits on the **sovereignty lane** rather than the NIS2
Article 21 spine: it reads an EU-native identity primitive (the
EUDIW) as a workflow-input boundary that any operator-shaped
workflow can consume. An access-control, KYC, or
qualified-electronic-signature workflow that wants to consume a
wallet-issued attestation now has a typed entry point in the
catalogue.

### F-SV-02 n8n CORE-FANOUT — compile-target wiring

The n8n CORE-FANOUT lands through
[PR #378](https://github.com/secops-ng/secops-ng-framework/pull/378):
the `pattern.eidas2_wallet@v1` typed input is wired into the
n8n compile target, with a JSON-native payload shape declared
inline that matches the Pydantic model field-by-field. An n8n
worked example reads the typed attestation envelope, exercises
the issuer-chain metadata as a workflow input, and emits a
representative artifact end-to-end.

### F-SV-02 Temporal CORE-FANOUT — activity, worked example, byte-parity golden

The Temporal CORE-FANOUT lands through
[PR #379](https://github.com/secops-ng/secops-ng-framework/pull/379):
a Temporal activity binding against the same typed input, a
worked example at `examples/temporal/eidas2_wallet/` that
re-imports the typed Pydantic context for byte-identical
field-by-field values, and a byte-parity golden pinning the
artifact shape against the n8n sibling. Two of three reference
compile targets now carry the pattern.

### F-SV-02 status — opening, not Shipped

F-SV-02 reads on the ROADMAP as **Proposed** with two of three
reference compile targets landed. The **LangGraph CORE-FANOUT**
is the next pass on this row, carrying the same shared input
boundary binding and its own worked example plus byte-parity
golden. Until LangGraph lands, the catalogue does not read
three-target parity for F-SV-02, and this field note frames the
row as opening on the sovereignty lane — not Shipped.

## Where these three rows sit

F-WF-12 and F-WF-11 read the NIS2 Article 21 spine:

- **Article 21(2)(b) — incident-handling capability.** F-WF-12
  reads the front-of-funnel for user-reported interactions that
  may or may not be incidents, with the support-agent shape
  emitting interaction-evidence on the F-CP-02 incidents schema
  across all three reference compile targets. Shipped.
- **Article 21(2)(i) — human-resources security, access-control
  policies, and asset management.** F-WF-11 reads the
  joiner/mover/leaver evidence surface against the F-CP-07
  access stream, with byte-parity goldens across the three
  reference compile targets and joiner/leaver residual-risk
  KRIs as catalogue entries. Shipped.

F-SV-02 reads a different surface — the **sovereignty lane** of
the project's roadmap, which carries content that consumes EU-native
infrastructure primitives (eIDAS 2.0, EUDIW, GAIA-X-aligned
identity, qualified trust services) as typed inputs to the
catalogue. The row is opening with a typed wallet-attestation
input model and two of three reference compile targets, with
LangGraph fan-out the next pass.

## What this gives an operator

A regulated operator subject to NIS2 Article 21(2)(b) running
on any of the three reference compile targets can now:

- **Stage a support-request record and emit interaction-evidence
  on the F-CP-02 incidents stream from any of the three
  reference targets.** Both branches — the automated-resolution
  closure and the human-handoff escalation — emit
  byte-identically across n8n, Temporal, and LangGraph, with
  goldens pinning the artifact shape.
- **Read the support-agent shape against the same incident
  family.** The NIS2 Article 21(2)(b) mapping entry now reads
  the support-agent row alongside the existing incident-family
  playbooks; an auditor or regulator asking "how does your
  operator-shaped workflow address Article 21(2)(b) user-reported
  interactions?" reads a CACAO playbook, an evidence artifact,
  a mapping entry, and a GDPR ROPA — without naming a runtime.

A regulated operator subject to NIS2 Article 21(2)(i) on any
of the three reference compile targets can also:

- **Read the on-boarding / off-boarding tracker as a Shipped
  cookbook entry.** The catalogue carries the workflow source,
  the access-evidence artifact, the byte-parity contract across
  the three reference compile targets, the joiner/leaver KRIs,
  and a cookbook walkthrough — folded into the published
  cookbook on this closeout pass.

An operator anywhere in the EU consuming the **EU Digital
Identity Wallet** as an identity primitive can today, on n8n
or Temporal:

- **Bind against a typed EUDIW attestation input.** The
  `pattern.eidas2_wallet@v1` typed input reads the
  issuer-signed attestation envelope and field-level claim
  surface as a framework-agnostic boundary. A workflow consuming
  a wallet-issued attestation has a single typed entry point
  rather than a per-runtime ad-hoc parse.
- **Run a worked example end-to-end on n8n or Temporal.** Two of
  three reference targets carry a worked example; the byte-parity
  golden on the Temporal sibling pins the artifact shape against
  the n8n payload field-by-field. LangGraph is the next pass on
  this row.

## What's open behind this wave

- **F-SV-02 LangGraph CORE-FANOUT.** The shared input boundary
  is the source of byte parity across targets; the LangGraph
  adapter delegates to the same typed model, with a worked
  example and a byte-parity golden. This is the closeout-blocker
  on F-SV-02 — the row will not flip to Shipped until LangGraph
  lands.
- **F-SV-02 EXTEND.** Once three-target parity lands, the
  EXTEND pass on this row will carry the operator-facing
  surface for verifying issuer chains, binding the
  pattern against an access-control or
  qualified-electronic-signature workflow, and naming the
  catalogue mapping entries for the EU regulatory surfaces
  (eIDAS 2.0, NIS2 where the wallet supplies an
  identity-control input).
- **F-WF-12 EXTEND.** The Shipped row has the operator-facing
  surface; the next pass will name file-fixture interfaces for
  the automated-resolution-policy and handoff-brief
  responsibilities the SKELETON pins as data-plane
  responsibilities for the operator.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-WF-12 Temporal CORE-FANOUT
  ([PR #373](https://github.com/secops-ng/secops-ng-framework/pull/373)),
  LangGraph CORE-FANOUT
  ([PR #374](https://github.com/secops-ng/secops-ng-framework/pull/374)),
  and EXTEND-closeout
  ([PR #375](https://github.com/secops-ng/secops-ng-framework/pull/375));
  the F-WF-11 EXTEND-closeout
  ([PR #376](https://github.com/secops-ng/secops-ng-framework/pull/376));
  and the F-SV-02 SKELETON
  ([PR #377](https://github.com/secops-ng/secops-ng-framework/pull/377)),
  n8n CORE-FANOUT
  ([PR #378](https://github.com/secops-ng/secops-ng-framework/pull/378)),
  and Temporal CORE-FANOUT
  ([PR #379](https://github.com/secops-ng/secops-ng-framework/pull/379)),
  all merged.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-four that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Three rows moved in this window. The IT-and-security support
agent closed its three-target CORE-FANOUT and flipped to Shipped
with the F-CP-02 incidents stream carrying interaction-evidence
byte-identically across n8n, Temporal, and LangGraph; the
on-boarding / off-boarding tracker landed its closeout and
joined the published cookbook surface; and the eIDAS 2.0 wallet
integration pattern opened on the sovereignty lane with a typed
EUDIW attestation input model and two of three reference compile
targets — LangGraph fan-out still ahead. The catalogue now reads
two more Shipped workflow rows on the NIS2 Article 21 spine and
one opening row on the sovereignty lane that consumes an
EU-native identity primitive as a typed boundary. The next field
notes will read whatever opens behind this wave — the F-SV-02
LangGraph fan-out, the F-SV-02 EXTEND surface, and the next
workflow or sovereignty-lane row to arrive content-first.
