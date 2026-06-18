---
title: "Field note #55 — F-WF-09 auditor-bundle graduates from SKELETON to a three-target CORE-FANOUT with vuln-intake and incident-management worked examples, F-CP-07 wires its Temporal access emitter into the incident-management bundle write-path with an EXTEND-drift SKELETON behind it, and F-CP-06 effectiveness evidence stream opens with the full SCHEMA → CORE-FANOUT → per-target byte-parity goldens sequence and a NIS2 Art. 21(2)(f) mapping stub"
description: "Fifty-fifth field note from the SecOps-NG Digital Commons: two composing lanes from the 2026-06-17/18 wave. F-WF-09 compliance-evidence auditor-bundle graduates from the SKELETON the last note read into a three-target CORE-FANOUT — the collector fans out to n8n, Temporal, and LangGraph — with two worked examples behind it (vuln-intake across all three targets, and incident-management with a byte-parity golden). The F-CP-07 access stream lands a SKELETON wiring its Temporal access emitter into the incident-management bundle write-path, with an EXTEND-drift SKELETON queued behind it. And the F-CP-06 effectiveness evidence stream opens its lane with the same SCHEMA → CORE-FANOUT → per-target byte-parity goldens sequence every other continuous-posture stream has carried, plus a NIS2 Art. 21(2)(f) mapping stub — joining incidents, supply-chain, crypto-attestation, and access on the continuous-posture row."
pubDate: 2026-06-18
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-09", "f-cp-07", "f-cp-06", "auditor-bundle", "access-evidence", "effectiveness-evidence", "core-fanout", "byte-parity-goldens", "nis2", "continuous-posture", "digital-commons"]
---

The last field note read F-CP-07 opening the access evidence
stream with a SCHEMA → CORE-FANOUT → byte-parity goldens wave,
F-GD-01 closing out across the full reference workflow set,
F-GD-02 standing up its lawful-basis CI guard SKELETON, and
F-WF-09 dropping its first auditor-bundle scaffold. This note
reads the layer that lands behind that: F-WF-09 graduates from
SKELETON to a three-target CORE-FANOUT with two worked examples,
F-CP-07 grows a write-path into the bundle layer plus a drift
SKELETON, and a new continuous-posture lane opens — F-CP-06
effectiveness — with the full three-stage shipping sequence in
one window.

## What this note reads off `main`

### F-WF-09 auditor-bundle — CORE-FANOUT and worked examples

The previous note read the F-WF-09 SKELETON: a manifest schema
plus a collector skeleton under `content/workflows/auditor-bundle/`.
This wave grows that skeleton into a three-target compile fanout
with two worked examples landing behind it.

- Through
  [PR #319](https://github.com/secops-ng/secops-ng-framework/pull/319),
  the auditor-bundle collector lands its CORE-FANOUT: the same
  collector shape now compiles to all three reference framework
  targets — n8n, Temporal, and LangGraph — so an operator running
  any of the three reference framework targets can stand up the
  same auditor-bundle collector against the evidence streams the
  framework already emits. This is the same three-target shape
  every continuous-posture stream on the catalogue already
  carries; F-WF-09 reads against `content/evidence/` under the
  same pattern.
- Through
  [PR #321](https://github.com/secops-ng/secops-ng-framework/pull/321),
  the first worked example lands — **vuln-intake** — compiled to
  all three targets. An operator walking the vuln-intake reference
  cookbook now sees the auditor-bundle collector wired in next to
  the workflow, picking up the supply-chain and access evidence
  records the workflow emits and packaging them into a bundle
  manifest.
- Through
  [PR #322](https://github.com/secops-ng/secops-ng-framework/pull/322),
  the second worked example lands — **incident-management** —
  compiled to all three targets with a byte-parity golden locking
  the bundle shape across them. The incident-management example
  is the heavier of the two: it picks up the incidents,
  supply-chain, crypto-attestation, and access evidence streams a
  full incident produces, and the golden pins the exact on-disk
  bundle every compile target emits for the same input.

The two worked examples are the read against the catalogue this
wave pins. F-WF-09 is no longer just a manifest schema and a
collector skeleton — there are two complete reference cookbook
workflows where an operator can walk the bundle end-to-end, pick
the compile target they already run, and see the exact bundle
shape the framework emits.

### F-CP-07 — write-path SKELETON into the bundle layer, plus EXTEND-drift

The access evidence stream the previous note opened picks up two
more cards in this wave, one on each end.

- Through
  [PR #323](https://github.com/secops-ng/secops-ng-framework/pull/323),
  the F-CP-07 SKELETON lands a wire from the Temporal access
  emitter into the incident-management auditor-bundle worked
  example's write-path. An incident-management workflow that
  emits an access evidence record on the Temporal compile target
  now drops that record into the auditor-bundle collector — the
  bundle layer reads the access stream alongside the incidents,
  supply-chain, and crypto-attestation streams it already reads.
- Through
  [PR #320](https://github.com/secops-ng/secops-ng-framework/pull/320),
  the EXTEND-drift SKELETON lands under
  `content/evidence/access/drift/`: the scaffolding for the
  drift-detection lane that turns the SCHEMA-pinned shape into a
  CI-enforced check on the on-disk evidence shape, the same
  pattern F-CP-03 supply-chain and F-CP-05 crypto-attestation
  already carry on their drift lanes.

The two SKELETONs together read against the same shape: F-CP-07
is moving from "the stream is on the wire and the goldens lock
the shape" toward "the stream is wired into the bundle layer
above and the drift-detection lane is wired into CI behind". The
closeout PR that flips F-CP-07 to Shipped on ROADMAP still sits
on the lane behind these cards.

### F-CP-06 effectiveness evidence stream — full sequence in one window

The F-CP-06 lane on ROADMAP opens the **effectiveness** evidence
stream: the audit-grade record an operator carries for the
question "did the control fire when it should have, and did it
do what it was supposed to do" against the surfaces a security
operation runs. The lane lands the full SCHEMA → CORE-FANOUT →
byte-parity-goldens sequence in one consecutive wave.

- Through
  [PR #324](https://github.com/secops-ng/secops-ng-framework/pull/324),
  the SCHEMA lands under `content/evidence/effectiveness/`, with
  a stream-root and the first NIS2 Art. 21(2)(f) mapping stub —
  the article that names "policies and procedures to assess the
  effectiveness of cybersecurity risk-management measures" as a
  required control. The SCHEMA pins the on-disk effectiveness
  record shape; the stream-root pins where the records land; the
  mapping stub pins the regulator-facing anchor.
- Through
  [PR #325](https://github.com/secops-ng/secops-ng-framework/pull/325),
  the CORE fans out: the effectiveness emitter lands its shared
  helper plus n8n, Temporal, and LangGraph adapters. The same
  SCHEMA emits a byte-identical effectiveness record under any
  of the three reference framework targets.
- Through
  [PR #326](https://github.com/secops-ng/secops-ng-framework/pull/326),
  per-target byte-parity replay goldens land under
  `tests/examples/` — one for n8n, one for Temporal, one for
  LangGraph — alongside worked examples for the effectiveness
  emitter. Each golden pins the exact on-disk effectiveness
  record the corresponding compiler emits for the same SCHEMA
  input.

That is the full SCHEMA → CORE-FANOUT → byte-parity-goldens
sequence in one shipping wave — the same pattern F-CP-02,
F-CP-03, F-CP-05, and F-CP-07 each opened on. The continuous-
posture row of the catalogue now reads **incidents, supply-chain,
crypto-attestation, access, effectiveness** — five evidence
streams, same SCHEMA-first shape, same three-target compile
fanout, same per-target byte-parity goldens locking the on-disk
shape on every push.

The NIS2 Art. 21(2)(f) mapping stub is the new piece this lane
puts on the regulator-facing surface. The article names
effectiveness assessment as a control an in-scope operator has
to carry; the framework now emits a SCHEMA-pinned record an
operator can point at and say "this is the on-disk audit-grade
shape we use to answer that article".

## Why these three lanes read together

The shipping wave this note reads composes against the substrate
the last note pinned:

- **F-WF-09 CORE-FANOUT + worked examples** lifts the
  auditor-bundle layer from "manifest schema + collector
  skeleton" to "three-target collector with two end-to-end worked
  examples". The layer that stitches per-stream evidence records
  into a portable hand-off now has a shape on every compile
  target and two reference cookbook workflows demonstrating it.
- **F-CP-07 write-path + drift SKELETON** extends the access
  evidence stream the previous note opened into the bundle layer
  above and the drift lane behind, so the stream isn't just on
  the wire — it composes with what the bundle layer reads against
  and what the drift-detection layer enforces.
- **F-CP-06 effectiveness** widens the continuous-posture row by
  one more stream and pins a NIS2 Art. 21(2)(f) anchor on the
  regulator-facing surface. The effectiveness stream lands in the
  same three-target shape every other continuous-posture stream
  carries, which is what lets the auditor-bundle collector pick
  it up alongside the others without inventing a new shape.

That composition is the read against the catalogue this note
pins. The bundle layer grows toward worked examples, the access
stream wires into both the bundle layer and a drift lane behind
it, and a fifth continuous-posture stream opens — all in one
shipping window.

## What's open behind these lanes

- **F-WF-09 next layers.** The CORE-FANOUT and two worked
  examples are on `main`; the population pass that wires more
  evidence streams into the collector and the sealing pass that
  pins the bundle cryptographically sit on the next cards behind
  F-WF-09.
- **F-CP-07 closeout.** The ROADMAP-flip card that flips F-CP-07
  to Shipped still sits behind the SCHEMA / CORE-FANOUT / goldens
  / write-path / drift-SKELETON sequence on `main`.
- **F-CP-06 EXTEND-drift and closeout.** The effectiveness stream
  opens its lane with SCHEMA → CORE-FANOUT → goldens. The
  EXTEND-drift SKELETON and the ROADMAP-flip card that flips
  F-CP-06 to Shipped sit on the lane behind it.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-09 auditor-bundle CORE-FANOUT through
  [PR #319](https://github.com/secops-ng/secops-ng-framework/pull/319),
  F-CP-07 access EXTEND-drift SKELETON through
  [PR #320](https://github.com/secops-ng/secops-ng-framework/pull/320),
  F-WF-09 vuln-intake worked example through
  [PR #321](https://github.com/secops-ng/secops-ng-framework/pull/321),
  F-WF-09 incident-management worked example with byte-parity
  golden through
  [PR #322](https://github.com/secops-ng/secops-ng-framework/pull/322),
  F-CP-07 SKELETON wiring the Temporal access emitter into the
  incident-management bundle write-path through
  [PR #323](https://github.com/secops-ng/secops-ng-framework/pull/323),
  F-CP-06 effectiveness SCHEMA + stream-root + NIS2 Art. 21(2)(f)
  mapping stub through
  [PR #324](https://github.com/secops-ng/secops-ng-framework/pull/324),
  F-CP-06 effectiveness CORE-FANOUT through
  [PR #325](https://github.com/secops-ng/secops-ng-framework/pull/325),
  and F-CP-06 effectiveness EXTEND-tests-goldens with worked
  examples through
  [PR #326](https://github.com/secops-ng/secops-ng-framework/pull/326).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-four that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

The continuous-posture row of the catalogue now reads incidents,
supply-chain, crypto-attestation, access, and effectiveness —
five evidence streams, same SCHEMA-first shape, same three-target
compile fanout, same per-target byte-parity goldens. The
auditor-bundle layer above them carries a three-target collector
with two worked examples wired into reference cookbook workflows.
The access stream wires into the bundle layer through an
incident-management write-path SKELETON, with the drift lane
scaffolded behind it. And the regulator-facing surface picks up a
NIS2 Art. 21(2)(f) anchor on the new effectiveness lane.
