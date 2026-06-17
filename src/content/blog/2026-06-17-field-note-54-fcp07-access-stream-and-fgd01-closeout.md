---
title: "Field note #54 — F-CP-07 access evidence stream opens with a three-target wave (SCHEMA → CORE-FANOUT → per-target byte-parity goldens), F-GD-01 GDPR data-flow closes out across the full reference workflow set with the final three ROPA entries landing, the F-GD-02 lawful-basis CI guard lands as a SKELETON behind it, and F-WF-09 stands up the auditor-bundle compliance evidence collection scaffold"
description: "Fifty-fourth field note from the SecOps-NG Digital Commons: F-CP-07 access evidence stream opens its lane with the same three-target shape every other continuous-posture stream has carried — a pinned SCHEMA plus a Temporal EMITTER SKELETON, then a CORE-FANOUT into n8n and LangGraph, then per-target byte-parity replay goldens locking the on-disk shape across all three compile targets. Alongside the new lane, F-GD-01 GDPR data-flow closes out across the full reference workflow catalogue with the final three Art. 30 ROPA entries landing for the data-exfil, on-call-rotation, post-incident-review, and executive-metrics workflows. F-GD-02 lands a SKELETON CI guard for lawful-basis sections behind the F-GD-01 lane. F-WF-09 opens an auditor-bundle compliance evidence collection scaffold — manifest schema plus collector skeleton — that the framework can grow into a portable hand-off shape for an external auditor."
pubDate: 2026-06-17
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-07", "f-gd-01", "f-gd-02", "f-wf-09", "access-evidence", "gdpr", "ropa", "lawful-basis", "auditor-bundle", "continuous-posture", "digital-commons"]
---

The last field note read the F-GD-01 GDPR data-flow wave landing
across eight of the reference cookbook workflows and named one
final-review entry still on the surface plus three operational
workflows that had not yet picked up a data-flow doc. This note
reads two things at once: that closeout — all four remaining ROPA
entries have now landed on `main`, and the F-GD-02 lawful-basis
CI guard behind the lane lands as a SKELETON — and the opening of
a new continuous-posture evidence stream on the F-CP-07 lane,
plus the first scaffold of the F-WF-09 auditor-bundle lane.

## What this note reads off `main`

### F-CP-07 access evidence stream — three-target wave in one push

The F-CP-07 lane on ROADMAP opens an evidence stream for **access**
events: the audit-grade record an operator carries for every
sensitive read or grant against the surfaces a security operation
runs against. The lane lands in the same three-target shape every
other continuous-posture stream on the catalogue has carried.

- Through
  [PR #315](https://github.com/secops-ng/secops-ng-framework/pull/315),
  the SCHEMA for the access evidence record lands under
  `content/evidence/access/`, with a Temporal EMITTER SKELETON as
  the first compile target — the same SCHEMA-first shape F-CP-02,
  F-CP-03, F-CP-05 all opened on.
- Through
  [PR #316](https://github.com/secops-ng/secops-ng-framework/pull/316),
  the CORE fans out: the access emitter lands its n8n and
  LangGraph compile targets, so the same SCHEMA emits a
  byte-identical record under any of the three reference
  framework targets.
- Through
  [PR #317](https://github.com/secops-ng/secops-ng-framework/pull/317),
  per-target byte-parity replay goldens land under
  `tests/examples/` — one for n8n, one for Temporal, one for
  LangGraph. Each golden pins the exact on-disk evidence record
  the corresponding compiler emits for the same SCHEMA input, so
  every push from here on has to honour the same shape across all
  three targets or the test lane fails.

That is the full SCHEMA → CORE-FANOUT → byte-parity-goldens
sequence in one consecutive shipping wave. The lane is not yet
flipped to Shipped on ROADMAP — the closeout PR that flips the
status and lands the ROADMAP narrative is the next card on the
F-CP-07 lane — but the substrate is on `main` and the goldens are
already locking the shape.

The access evidence record sits next to the other continuous-posture
streams already on `main`: incidents (F-CP-02), supply-chain
(F-CP-03), crypto-attestation (F-CP-05). Same SCHEMA-first shape,
same three-target compile fanout, same per-target byte-parity
goldens. An operator reading the framework against the question
"what audit-grade record do we emit for a sensitive read" lands at
`content/evidence/access/` under the same pattern they already
recognise from the other lanes.

### F-GD-01 GDPR data-flow closes out across the full reference workflow set

The last field note named one final-review entry on the F-GD-01
surface (the data-exfil workflow) and noted three operational
workflows — on-call-rotation, post-incident-review,
executive-metrics — that had not yet picked up a data-flow doc.
All four entries have now landed:

- Through
  [PR #312](https://github.com/secops-ng/secops-ng-framework/pull/312),
  the data-exfil workflow lands its data-flow doc, closing the
  gap the previous field note flagged.
- Through
  [PR #313](https://github.com/secops-ng/secops-ng-framework/pull/313),
  three further operational workflows land their data-flow docs in
  one push — on-call-rotation, post-incident-review, and
  executive-metrics. Each carries the canonical seven sections,
  each pinned against the same Art. 30 ROPA shape the wave fixed.

Walk `content/mappings/gdpr/` on `main` today and the directory
reads the canonical seven-section template plus twelve populated
per-workflow data-flow docs — every reference workflow in the
cookbook catalogue now carries an Art. 30 entry next to it, each
pinning purpose under Art. 5(1)(b), lawful basis under Art. 6(1),
categories of data subjects and personal data under Art. 30(1)(c),
recipients under Art. 30(1)(d), retention under Art. 5(1)(e),
cross-border posture under Art. 44–49, and the data-subject
rights surface under Art. 12–22. The F-GD-01 lane reads end-to-end
on the catalogue with no per-workflow gaps remaining.

### F-GD-02 lawful-basis CI guard — SKELETON behind F-GD-01

With the data-flow docs covering the full cookbook, the lane behind
F-GD-01 picks up: F-GD-02 turns the per-workflow shape into a
mechanical check.

- Through
  [PR #314](https://github.com/secops-ng/secops-ng-framework/pull/314),
  the SKELETON of a CI guard lands under the hygiene-linter
  pattern: a check that fails when a workflow in the cookbook
  ships without a corresponding `content/mappings/gdpr/` entry, or
  with a lawful-basis section that is empty or unfilled. The
  SKELETON wires the check shape and the integration point; the
  population pass that turns the SKELETON into a fully enforced
  CI lane sits on the next card behind it.

The guard reads against the F-GD-01 substrate the previous note
read: a workflow ships, the data-flow doc has to ship with it, the
lawful-basis section has to name a concrete Art. 6(1) basis. The
check makes that contract mechanical, the same way the per-target
byte-parity goldens make the on-disk evidence shape mechanical on
the F-CP lanes.

### F-WF-09 auditor-bundle — first scaffold of a portable hand-off shape

The F-WF-09 lane opens on a different axis from the continuous-posture
streams: instead of pinning the shape of one evidence record on the
wire, it pins the shape of an **auditor bundle** — the portable
hand-off an operator carries into an external audit, packaging the
evidence streams the framework already emits into a single
verifiable archive.

- Through
  [PR #318](https://github.com/secops-ng/secops-ng-framework/pull/318),
  the SKELETON lands under `content/workflows/auditor-bundle/`: a
  manifest schema that pins what an audit bundle declares it
  contains (which evidence streams, which time window, which
  workflow versions, which control-mapping anchors), plus the
  collector skeleton that walks the existing evidence emitters and
  assembles the bundle. The skeleton stops at the manifest and
  collector shape — the population pass that wires concrete
  evidence streams in and the sealing pass that pins the bundle
  cryptographically sit behind this card on the lane.

The lane reads against everything the continuous-posture streams
have already landed. F-CP-02 incidents, F-CP-03 supply-chain,
F-CP-05 crypto-attestation, the new F-CP-07 access stream — every
one of them emits a SCHEMA-pinned record with a byte-parity golden
locking the shape on every push. The auditor-bundle lane is the
shape that lifts those records into a single hand-off an operator
hands a regulator or an external auditor without having to invent
the bundle format.

## Why these three lanes read together

The shipping wave this note reads is wider than the F-CP-07 stream
on its own. Three lanes land in the same window because they
compose:

- **F-CP-07** widens the set of evidence streams the framework
  carries. Access events join incidents, supply-chain, and
  crypto-attestation on the wire — same SCHEMA shape, same
  three-target compile fanout, same byte-parity goldens.
- **F-GD-01 closeout** finishes the per-workflow data-flow
  documentation surface. Every reference workflow now carries an
  Art. 30 entry. The GDPR ROPA surface is no longer a wave in
  progress — it is the steady state.
- **F-WF-09** opens the shape that takes the evidence streams and
  the per-workflow ROPA entries and bundles them into an
  auditor-facing artifact. Both of the surfaces the audit bundle
  reads against — the evidence streams and the GDPR data-flow
  docs — are now durable on `main`. The auditor-bundle skeleton is
  the next layer up.

That composition is the read against the catalogue this note pins.
The three lanes are not three independent shipping events that
happened to land in the same window; they are a single layer
landing — the evidence-emitter layer widens, the per-workflow
regulator-traceable docs close, and the bundle layer above both of
them stands up its first scaffold.

## What's open behind these lanes

- **F-CP-07 closeout.** The ROADMAP-flip card sits behind the
  SCHEMA / CORE-FANOUT / goldens wave that just landed. Once it
  lands, F-CP-07 reads Shipped against the same status the other
  continuous-posture streams already carry.
- **F-GD-02 population.** The SKELETON of the lawful-basis CI
  guard is on `main`; the population pass that turns the SKELETON
  into a fully enforced CI lane is the next card on the F-GD-02
  surface.
- **F-WF-09 next layers.** The manifest schema and collector
  skeleton are on `main`; the population pass that wires concrete
  evidence streams into the collector and the sealing pass that
  pins the bundle cryptographically sit on the next cards behind
  F-WF-09.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-GD-01 closeout through
  [PR #312](https://github.com/secops-ng/secops-ng-framework/pull/312)
  (data-exfil data-flow doc) and
  [PR #313](https://github.com/secops-ng/secops-ng-framework/pull/313)
  (on-call-rotation + post-incident-review + executive-metrics
  data-flow docs), F-GD-02 lawful-basis CI guard SKELETON through
  [PR #314](https://github.com/secops-ng/secops-ng-framework/pull/314),
  F-CP-07 access evidence stream SCHEMA + EMITTER SKELETON through
  [PR #315](https://github.com/secops-ng/secops-ng-framework/pull/315),
  F-CP-07 CORE-FANOUT into n8n and LangGraph through
  [PR #316](https://github.com/secops-ng/secops-ng-framework/pull/316),
  F-CP-07 per-target byte-parity goldens through
  [PR #317](https://github.com/secops-ng/secops-ng-framework/pull/317),
  and F-WF-09 auditor-bundle SKELETON through
  [PR #318](https://github.com/secops-ng/secops-ng-framework/pull/318).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-three that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

The continuous-posture row of the catalogue now reads incidents,
supply-chain, crypto-attestation, and access — four evidence
streams, same SCHEMA-first shape, same three-target compile fanout,
same per-target byte-parity goldens locking the on-disk shape on
every push. The GDPR data-flow surface reads end-to-end across the
reference cookbook catalogue with the lawful-basis CI guard
standing up behind it. The auditor-bundle lane has its first
scaffold on `main`, sitting one layer up from both of those
surfaces.
