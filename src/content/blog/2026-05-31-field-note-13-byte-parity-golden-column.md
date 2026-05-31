---
title: "Field note #13 — the worked-example column gets byte-level guard rails"
description: "Thirteenth field note from the SecOps-NG Digital Commons: the three-target worked-example matrix now carries byte-parity golden tests across the column — n8n, Temporal, and LangGraph emits are pinned against their CACAO source so the examples cannot silently drift, and a new compile target can be added without fear of cracking the existing rows."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "golden-tests", "byte-parity", "cacao", "compile-target", "n8n", "temporal", "langgraph", "regression-guards", "ransomware-containment", "cloud-misconfiguration", "data-exfil", "post-incident-review", "identity-compromise", "digital-commons", "m0"]
---

Field notes #11 and #12 closed the temporal compile-target column
at ten of ten and widened the langgraph column row by row. The
worked-example matrix had reached the state where every cell was
written. This note covers the next layer of the same substrate:
the regression guards underneath those cells.

The three-target worked-example column now carries byte-level
golden tests across the row. The portable CACAO source on the left
and the n8n / Temporal / LangGraph emits on the right are pinned
to each other byte-for-byte. The matrix can no longer drift on
the worked examples without a red test telling somebody.

## What landed

Four PRs in the same shape, each adding a per-playbook golden
test that regenerates the three compile-target artefacts from the
CACAO source and asserts byte-equality against what is committed:

- PR [#150](https://github.com/secops-ng/secops-ng-framework/pull/150)
  — ransomware-containment three-target byte-parity golden.
- PR [#151](https://github.com/secops-ng/secops-ng-framework/pull/151)
  — cloud-misconfiguration three-target byte-parity golden.
- PR [#152](https://github.com/secops-ng/secops-ng-framework/pull/152)
  — data-exfil three-target byte-parity golden.
- PR [#153](https://github.com/secops-ng/secops-ng-framework/pull/153)
  — post-incident-review temporal and langgraph parity guards
  (closing the test-side gap on a row that already had its n8n
  drift guard in place).

And one more in flight at the time of writing:

- PR [#154](https://github.com/secops-ng/secops-ng-framework/pull/154)
  — identity-compromise three-target byte-parity golden, in
  custodian review.

Each golden test mirrors the same structure: three byte-equality
assertions (one per compile target), a determinism guardrail
(the emitter is idempotent), and an artefact-existence guardrail
(the committed file actually sits where the README says it does).
The serialisation conventions are pinned in the test itself —
n8n at indent 2, langgraph at indent 2 with sorted keys, temporal
through the file emitter — so a future contributor reading the
test learns the conventions by reading the assertions.

## Why this matters for a contributor

The thing a new contributor to the catalogue most reasonably
worries about is silent drift. They add a compile target, or a
new playbook, or a field on an action, and the worked examples
six rows away no longer regenerate to the bytes that are
committed — and nothing tells them, because the examples
themselves still parse and still run.

The golden column closes that gap. A change anywhere on the path
from CACAO source through the three emitters to the committed
worked-example bytes now produces a red test that names the
playbook, names the target, and shows the diff. The drift is
caught at the layer where the rest of the catalogue can be
trusted to remain stable while the contributor lands their
change.

That is the contract the column is now defending. The portable
artefact is the source. The committed examples are the proof.
The golden tests are the auditable bridge between the two.

## What this is not

This is not a guarantee that the examples are at their richest
expressible state. SKELETON is still SKELETON in the cells that
carry that label. The byte-parity guards do not lift a row from
SKELETON to CORE; they only ensure that whatever state a cell
is in stays the state it claims to be in.

This is also not a commitment to a fixed shape forever. The
emitters can change. The conventions can be widened. The CACAO
source can grow new fields. What the guards demand is that those
changes be deliberate — the regenerate step gets re-run, the
new bytes get committed, the test goes green again. The contract
is honesty about derivation, not stasis.

## Where this sits against M0

M0 — Launch Substrate Ready, target mid-June — asks for the
public website carrying the Digital Commons framing and the
portable playbook compiler skeleton across the three reference
compile targets. With the temporal column closed (field note
#12) and the worked-example column now guarded byte-for-byte,
the substrate has both its labelled shape and its drift-detection
underneath. The remaining motion is the same column-by-column
deepening the last two notes flagged — richer langgraph cells,
n8n cells layering in telemetry — landing on top of a worked-
example matrix that the test suite will not let silently slip.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the golden test wave (PRs #150, #151, #152, #153) and the
  identity-compromise guard currently in review (PR #154).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twelve that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you walk the worked-example column today, every cell that
the matrix claims is a worked example has, behind it, a test
that says: regenerate this from the CACAO source and check the
bytes match what we committed. That is the layer the next column
of work gets to assume.

More from the lanes as the rest of the cells deepen.
