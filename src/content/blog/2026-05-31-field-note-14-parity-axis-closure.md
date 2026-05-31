---
title: "Field note #14 — the three-target parity axis closes across the reference playbook set"
description: "Fourteenth field note from the SecOps-NG Digital Commons: the M0 three-target parity axis — n8n, Temporal, LangGraph — is now closing across the reference playbook set. Worked examples are pinned byte-for-byte to their CACAO source, and the temporal canonical layout has been laid down across the remaining catalogue rows. Notes for practitioners deciding whether to commit to a single runtime."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "parity", "three-target", "cacao", "n8n", "temporal", "langgraph", "compile-target", "golden-tests", "canonical-layout", "ransomware-containment", "cloud-misconfiguration", "data-exfil", "post-incident-review", "identity-compromise", "threat-intel-ingest", "vuln-intake", "digital-commons", "m0"]
---

Notes #11 through #13 walked column by column: temporal canonical
layout filling in, langgraph cells widening, and then the worked-
example column getting byte-parity guard rails. This note steps
back and reads the matrix as one shape.

What the substrate now looks like, across the reference playbook
set: the same portable CACAO source on the left, three compile
targets on the right — n8n, Temporal, LangGraph — and along each
row the same structural guarantee. The targets are equal citizens.
That is the axis the M0 substrate exists to defend.

## What closed in this wave

Two shipping motions, landing into the same row:

Temporal canonical layout, swept across the catalogue. The temporal
compile-target column reached canonical shape on the last five
remaining rows — cloud-misconfiguration, data-exfil, ransomware-
containment, threat-intel-ingest, and vuln-intake — each landing
the SKELETON layout that the earlier rows already carried. The
temporal column is no longer the column with gaps in it.

Worked-example byte-parity goldens, swept across the same column.
Per-playbook golden tests now regenerate the three compile-target
artefacts from the CACAO source and assert byte-equality against
what is committed — ransomware-containment, cloud-misconfiguration,
data-exfil, post-incident-review (the temporal and langgraph guards
closing the test-side gap on the row that already had n8n
covered), and identity-compromise as the most recent addition to
the parity set. Each guard mirrors the same structure: three
byte-equality assertions, a determinism guardrail, an artefact-
existence guardrail.

Together: the labelled shape on the temporal column matches what
the other two columns already carried, and the worked-example
column is pinned byte-for-byte to its source on all three.

## Why the axis matters

The question a practitioner asks of a content catalogue framed
around three runtimes is the obvious one: do I have to commit to
all three to get the value, or can I pick the one my team already
runs and trust the rest?

The answer the parity axis is meant to make true is the second
one. The portable CACAO source is the contract. Each compile
target is a reference implementation of that contract. If you run
n8n, the n8n emit is the artefact you take; the Temporal and
LangGraph rows exist so the contract has more than one witness,
not because you need to adopt all three. The byte-parity guards
mean the row you take cannot silently drift away from the source
the other rows derive from.

This is what makes the catalogue framework-agnostic in practice
rather than in slogan. A single-runtime adopter gets a runnable
artefact in the runtime they already chose, with the same
structural guarantees the other rows carry, and the same red-test
contract underneath if the catalogue ever tries to derive
something different from what is committed.

## What the axis does not promise

It does not promise that every cell is at its richest expressible
state. SKELETON rows are still SKELETON; they hold the shape, not
the depth. The parity guards defend whatever state a cell claims
to be in — they do not lift a cell from SKELETON to CORE.

It does not promise the compile targets will never grow. New
targets can be added; existing emits can deepen; CACAO source
can take on new fields. What the guards demand is that those
moves be deliberate — the regenerate step gets re-run, the new
bytes get committed, the test goes green again.

And it does not promise that adopting one runtime is permanent.
The whole reason the artefact-layer contract is portable is so
that a team that commits to one runtime today can carry the same
playbook to a different runtime later without rewriting the
content.

## Where this sits against M0

M0 — Launch Substrate Ready, target mid-June — asks for the
public website carrying the Digital Commons framing and the
portable playbook compiler skeleton across the three reference
compile targets. With the temporal column now canonical end to
end and the worked-example column pinned byte-for-byte across
all three targets, the M0 three-target parity axis is closed at
the level of shape and drift-detection. What is left is the
depth motion the prior notes already flagged — richer langgraph
cells, n8n cells layering telemetry — landing on top of a
substrate that the test suite will not let silently slip.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the temporal canonical layout sweep across the remaining
  rows, and the worked-example byte-parity golden wave across
  ransomware-containment, cloud-misconfiguration, data-exfil,
  post-incident-review, and identity-compromise.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirteen that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you walk the reference playbook set today, every row carries
the same labelled shape across the three compile targets, and
every worked-example cell sits behind a test that says: regenerate
this from the CACAO source and check the bytes match what we
committed. That is the substrate a single-runtime adopter gets
to assume.

More from the lanes as the cells deepen.
