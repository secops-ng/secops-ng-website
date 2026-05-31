---
title: "Field note #15 — vuln-intake closes the byte-parity sweep across all five reference playbooks"
description: "Fifteenth field note from the SecOps-NG Digital Commons: vuln-intake gets its three-target byte-parity golden, closing the cross-target parity sweep across the five reference playbooks. The temporal canonical layout sweep is complete in the same wave. The M0 'five reference playbooks shipped end-to-end' checkbox now closes at the compile-parity axis."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "parity", "three-target", "cacao", "n8n", "temporal", "langgraph", "compile-target", "golden-tests", "canonical-layout", "vuln-intake", "ransomware-containment", "cloud-misconfiguration", "data-exfil", "identity-compromise", "digital-commons", "m0"]
---

Note #14 read the matrix as one shape and named the axis the M0
substrate exists to defend: same portable CACAO source on the left,
three compile targets on the right, equal citizens across every row.
This note records the moment that axis closes across the reference
playbook set.

## What closed in this wave

Vuln-intake joins the byte-parity column. The three-target golden
test for vuln-intake (PR #156, commit `0cdb6f3`) regenerates the
n8n, Temporal, and LangGraph artefacts from the CACAO source and
asserts byte-equality against what is committed — same shape the
other parity goldens already carry, three byte-equality assertions,
a determinism guardrail, an artefact-existence guardrail.

With that landing, the byte-parity sweep is closed across the five
reference playbooks: ransomware-containment, cloud-misconfiguration,
data-exfil, identity-compromise, and now vuln-intake. Each of those
five rows now has the same red-test contract underneath it on all
three compile targets.

The same wave includes the temporal canonical-layout sweep (PRs
#143 through #148) and the broader three-target golden parity
sweep (PRs #150 through #155) — the column motions notes #11
through #14 walked one PR at a time. Read together, the five
reference playbooks now compile byte-identically across all three
reference targets.

## Why the closure matters

The question the catalogue has been carrying since the substrate
took shape is whether the framework-agnostic claim survives
contact with five different playbook shapes. A SKELETON layout
filling in is encouraging; a byte-parity guard across all five
worked examples is a different kind of evidence.

For a practitioner deciding which runtime to commit to today, the
practical effect is this: pick the compile target your team already
runs, take the row that target gives you, and the test suite will
refuse to let any of the five worked examples silently drift away
from the CACAO source the other rows derive from. The portability
claim now has five witnesses on each of three targets, not one.

## Where this sits against M0

M0 — Launch Substrate Ready — carries a checkbox that asks for
the five reference playbooks shipped end-to-end across the three
compile targets. With the vuln-intake golden landing, that
checkbox now closes at the compile-parity axis: every reference
row has a labelled SKELETON or richer shape on each target, and
every reference row has a byte-equality guard sitting underneath
its worked example.

What remains is the depth motion prior notes flagged — cells that
are SKELETON today carrying more content tomorrow, telemetry and
agent-layer affordances landing on the targets that benefit from
them — landing on top of a substrate the test suite will not let
silently slip.

## What the closure does not promise

It does not promise every cell is at its richest expressible
state. The depth axis is a separate motion from the parity axis.
What the parity sweep defends is that whatever state each cell
claims to be in, the bytes match the source, on every target.

It does not promise the reference set is closed. New playbooks
can join the catalogue; new compile targets can be added; CACAO
source can grow new fields. What the guards demand is that those
moves be deliberate — regenerate, commit the new bytes, watch the
test go green again.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the vuln-intake three-target byte-parity golden
  ([PR #156](https://github.com/secops-ng/secops-ng-framework/pull/156),
  commit `0cdb6f3`), closing the parity sweep across the five
  reference playbooks; the temporal canonical-layout sweep
  (PRs #143–#148); the broader three-target golden parity sweep
  (PRs #150–#155).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fourteen that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you walk the reference playbook set today, every row carries
the same labelled shape across the three compile targets, and
every one of the five worked examples sits behind a test that
says: regenerate this from the CACAO source and check the bytes
match what we committed. That is the substrate the M0 launch
asks for, and that is the substrate now in place.

More from the lanes as the depth motion lands.
