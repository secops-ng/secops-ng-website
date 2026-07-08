---
title: "Field note #156 — G-03 byte-parity ring closes: xfail guards lifted, every playbook × every target enforced in CI"
description: "Field note one hundred and fifty-six from the SecOps-NG Digital Commons. The byte-parity ring has closed. The last two PRs of the wave lift the CI escape hatches — the LangGraph goldens xfail guard and the legacy langgraph-test xfail guard — so the parity property now runs as a hard assertion on every PR, on every playbook, on every one of the three reference compile targets. What was a stated invariant is now a mechanised CI floor with no exceptions left."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-03", "g-06", "byte-parity", "golden-tests", "compile-targets", "n8n", "temporal", "langgraph", "determinism", "ci-enforcement", "xfail-lifted", "operator-confidence", "auditability", "portability", "sovereignty", "digital-commons", "commons", "community", "field-note-156"]
---

Field note one hundred and fifty-six. The
G-03 byte-parity ring is closed and the CI
escape hatches are gone. Field note #155
covered the last three golden batches
landing across seventeen playbooks. Two more
PRs on the same day removed the last
softness from the enforcement path: the
LangGraph goldens xfail guard was lifted in
one PR, the legacy test-file xfail guard in
the next. From this point forward the parity
property runs as a hard assertion on every
PR, on every playbook, on every one of the
three reference compile targets. Nothing on
the reference set is compiling under a
tolerated failure any more.

## What the ring closure actually means

The commons ships each reference playbook
once, in portable CACAO v2. Three reference
compilers turn that source into runnable
artifacts for n8n, Temporal, and LangGraph.
Byte-parity says: the compiler is a pure
function of the source and the fixture
inputs, so the same source must produce the
same bytes on the same shims, and a replayed
run must reproduce the artifact hash CI
signed off. That property now holds — with
no xfail markers, no target excluded, no
playbook left off the grid — for every
playbook the commons ships.

For an operator, the practical shape of that
is small and durable: any change to the
shared compiler or the content model that
would break cross-target byte identity is
caught in CI before it can reach main.
Compiling the same playbook to a different
orchestrator is a deterministic operation.
The runtime move stops being a semantics
migration and becomes a compile, a hash
check, and a runbook update. That is the
operator confidence the ring was built to
carry.

## The scope, in one line

Seventeen playbooks, three targets each,
fifty-one golden files, one CI job, zero
xfails.

## The community angle

The ring was closed iteratively across the
contributor community over the last few
sessions. Batches landed as separate PRs
against a legible acceptance surface — the
parity matrix, the fixture harness, and the
three reference example trees — so someone
picking up a playbook from the outside could
see exactly what "green" looked like before
they touched it. The last-mile vulnerability
management surface that fed into this ring
(the vuln_intake playbook now on the closed
grid, and the wider vulnerability_management
series it sits alongside) carried
contributions from the external contributor
`petermat`. The point is not any one name:
it is that the acceptance surface is
operable by contributors who did not build
it, and the closed ring is evidence of that.
G-06 as a signal reads a little louder
tonight than it did yesterday.

## A brief technical note on how the tests
run

The parity check does not stand up an
orchestrator. It compiles the CACAO source
twice against the recorded fixture set, then
compares SHA-stable replays of both artifact
trees. A recorded fixture is a small on-disk
capture of the deterministic inputs the
compiler is allowed to observe — the version
pins on the compiler, the adapter shims for
the target, the pinned content-schema
version — so a golden hash change means the
compiler saw something new and someone has
to say why in the PR. The check runs in
seconds per playbook, in parallel across
targets, and needs nothing beyond a Python
interpreter. That shape is what lets the
ring run as a hard assertion on every PR
without dragging build times.

## Why lifting the xfails matters

An xfail marker in a test suite is a paper
promise. It says "this is expected to fail,
we know, do not block on it." It is useful
during a migration and dangerous the moment
the migration is over. The final two PRs
lift both of the xfail guards that were
carrying the LangGraph parity work over its
last mile:

- The CORE-LG-GOLDENS xfail guard is off.
  The LangGraph golden set is now enforced
  like the n8n and Temporal sets are — a
  failure is a failure.
- The legacy `test_langgraph_*.py` xfail
  guard is off. The older test-file layer
  that was carrying the transition is now
  also enforced.

With both guards lifted, the failure mode
on a broken parity claim is loud and CI-
red on the PR that broke it. There is no
tolerated softness left in the enforcement
path.

## Where the property sits from here

The ring closure flips the shape from
*closing a gap* to *holding a floor*. Any
new playbook the commons accepts arrives
with its parity row already green on all
three targets, or it does not merge. Any
compiler change that would break the
property is caught on the PR that made it.
Any operator who compiles a shipped playbook
to their preferred runtime can compare the
artifact hash to the one CI signed off, and
know — hash by hash — that the runtime move
did not silently change what the workflow
does.

Sovereignty at this layer is not a slogan.
It is an operator's ability to decide where
a workflow runs on their own timescale and
for their own reasons, and to prove after
the fact that the decision did not change
the workflow's semantics. The closed ring is
what makes that proof cheap.

## Where to look

- **Framework repo:**
  - `tests/golden/` — the fifty-one golden
    test files, no xfails left on the
    ring.
  - `tests/examples/langgraph/` — the
    legacy test-file layer, now enforced
    at parity with the n8n and Temporal
    lanes.
  - `examples/{n8n,temporal,langgraph}/` —
    the three compile-target reference
    trees, complete on all seventeen
    playbooks.
  - `ROADMAP.md` — the G-03 parity matrix
    reads *closed* and *enforced*. The next
    move is holding the floor.

If your posture depends on portable content
that survives a runtime move, the property
you were promised is now a hard CI floor.
The next reference playbook the commons
accepts will arrive with its parity row
green. That is what closing a KPI looks like
at the artifact layer.
