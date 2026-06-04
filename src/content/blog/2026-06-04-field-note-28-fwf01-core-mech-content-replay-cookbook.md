---
title: "Field note #28 — the CACAO core_body mechanism is bound on real F-WF-01 vuln-intake content, deterministic same-target replay is under CI, and the operator cookbook walks the worked example end to end"
description: "Twenty-eighth field note from the SecOps-NG Digital Commons: the x_secops_ng.core_body schema bump that landed last wave is now bound on real F-WF-01 vuln-intake content across two of the seven CORE steps with all three worked examples regenerated against it, a deterministic same-target replay test puts the replay-determinism contract under CI, and a cookbook walkthrough plus a worked-example README polish give an operator a single page to read the vuln-intake playbook end to end."
pubDate: 2026-06-04
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-01", "vuln-intake", "core-body", "core-mech", "cacao", "content-model", "cookbook", "replay-determinism", "tests", "compilers", "temporal", "langgraph", "n8n", "digital-commons"]
---

Field note #27 read the shape the last wave left on `main`: an
audit-mirror seam closed across the three reference compile targets,
a vuln-intake primitives contract landed five-deep under content, and
a CACAO content-model schema bump — `x_secops_ng.core_body` on
playbook steps — that named the seam where a compile-side emit path
and a content-side primitive meet on a single artefact. The bump
itself was a skeleton: a field defined on the content model with no
compiler yet wired through it, and no real content yet binding
against it.

This note reads off the next move on that skeleton: the mechanism is
now bound on real F-WF-01 vuln-intake content, the same-target replay
contract sits under CI, and the operator cookbook walks the worked
example end to end.

## What this note reads off `main`

### F-WF-01 CORE-MECH-CONTENT: core_body bound on real vuln-intake content

The first move binds the `x_secops_ng.core_body` field on the
vuln-intake playbook itself, against the primitives package the
previous wave landed under
`content/playbooks/vuln_intake/primitives/`. Through
[PR #225](https://github.com/secops-ng/secops-ng-framework/pull/225),
two of the seven CORE steps on the vuln-intake playbook carry a
`core_body` value that names the primitive their body binds against,
and all three worked examples — Temporal, LangGraph, n8n — are
regenerated so the rendered artefacts read the bound body off the
content rather than off a hand-coded per-target stub.

Read against the F-WF-01 arc this is the first wave where the
mechanism the schema bump named is bound on real content rather than
sketched on the content model. Two of seven is deliberately partial:
the steps whose body reduces cleanly to a single primitive binding
land first, and the remaining five carry their own composition steps
as the next-wave fan-out walks each one to its primitive. The shape
the two bound steps establish — `core_body` names the primitive, the
three compilers read the same name off the same content artefact,
and the regenerated worked examples read byte-identical against the
shared package — is the shape the rest of the fan-out reads against.

### F-WF-01 EXTEND-tests-replay: deterministic same-target replay under CI

The second move puts the replay-determinism contract under CI.
Through
[PR #226](https://github.com/secops-ng/secops-ng-framework/pull/226),
a deterministic same-target replay test runs the vuln-intake worked
example twice on the same target with the same disclosure and reads
the second pass byte-identical against the first, on every push.

The contract the test names is the contract the dedup primitive and
the audit-mirror sibling and the primitives package have been
quietly making real all wave: the same disclosure replayed against
the same target on the same content writes the same case, the same
envelope, and the same artefact bytes — because every replay calls
the same primitive on the way in, the same audit mirror on the way
out, and the same `core_body` binding in between. Before this wave
the contract held as a property the wiring made true; after it the
contract is a test that fails the moment the property breaks.

### F-WF-01 EXTEND-docs-cookbook: an operator cookbook walks the worked example

The third move is the operator-facing one. Through
[PR #227](https://github.com/secops-ng/secops-ng-framework/pull/227),
the cookbook gains a vuln-intake walkthrough that takes an operator
from "a disclosure lands" to "an audit-mirror append reads through
on the three reference targets" on a single page, and the worked-
example READMEs across Temporal, LangGraph, and n8n pick up the
polish that lets the three reads of the same playbook line up as
parallel.

The shape an operator walks against today reads: pick a target, read
the worked-example README on that target, follow the cookbook page
through the disclosure, the dedup primitive, the CVSS and EPSS and
severity composition, the `core_body`-bound steps the playbook
renders against, the OTel span the emitter writes, and the
AuditTrail append the emitter records — the same sequence, in the
same words, on the same content, against whichever of the three
reference targets the operator already runs.

## What this wave closes

It closes the gap between the `x_secops_ng.core_body` schema bump
landing on the content model and that field doing real work on
content: two of the seven CORE steps on the vuln-intake playbook now
bind against named primitives through the field, and all three
worked examples are regenerated against the bound bodies.

It closes the replay-determinism contract on the same-target axis
into a test the CI grid runs on every push, against the vuln-intake
worked example on the target the wave touched.

It closes the operator-facing read of the F-WF-01 vuln-intake
playbook into a single cookbook page an operator walks against
whichever of the three reference targets they already run.

## What this wave does not promise

It does not promise the remaining five CORE steps carry their own
`core_body` binding in this wave. The two-of-seven landing is the
first half of the CORE-MECH-CONTENT fan-out; the other five steps
walk in as their own composition moves on later waves, the same
shape each one reads against on the bound pair.

It does not promise the EXTEND-tests pair beyond same-target replay
sits on `main` yet. The golden-replay test across n8n, Temporal, and
LangGraph and the dedup-collision contract test are both at the
custodian gate, not on `main`, and they read into this field note
the moment they cross.

It does not promise the audit envelope grows beyond the compile-time
`workflow_run_id` placeholder in this wave. The envelope shape the
three targets share remains the contract the integrator rebinds
against at invocation time, and subsequent envelope fields land as
their own composition steps on later waves, the way every previous
audit-mirror envelope move has.

## Community lane status

The M3 community-ignition launch post — "Open for contributors" —
remains the entry point against five good-first-issues on
`secops-ng-framework`: issues
[#193](https://github.com/secops-ng/secops-ng-framework/issues/193),
[#194](https://github.com/secops-ng/secops-ng-framework/issues/194),
[#195](https://github.com/secops-ng/secops-ng-framework/issues/195),
[#196](https://github.com/secops-ng/secops-ng-framework/issues/196),
and
[#197](https://github.com/secops-ng/secops-ng-framework/issues/197).
A contributor walking in today finds the same five issues open, a
vuln-intake worked example reading against `core_body`-bound steps
on two of the seven CORE moves, a same-target replay test that
fails the moment the contract breaks, and a cookbook page that
walks the playbook end to end on whichever of the three reference
targets the contributor wants to run against.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-01 CORE-MECH-CONTENT through
  [PR #225](https://github.com/secops-ng/secops-ng-framework/pull/225),
  EXTEND-tests-replay through
  [PR #226](https://github.com/secops-ng/secops-ng-framework/pull/226),
  and EXTEND-docs-cookbook through
  [PR #227](https://github.com/secops-ng/secops-ng-framework/pull/227).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-seven that preceded it, plus the M3
  launch post on
  [PR #32](https://github.com/secops-ng/secops-ng-website/pull/32).
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the F-WF-01 vuln-intake playbook
reads against `core_body`-bound steps on the first two of seven CORE
moves, the same-target replay test guards the determinism contract
on every push, and the cookbook page reads the playbook end to end
against whichever of the three reference targets the operator
already runs. The next-wave moves fan the `core_body` binding out
across the remaining five CORE steps, land the golden-replay and
dedup-collision tests against the same content, and continue the
F-WF-01 closeout into the EXTEND-config beats target by target.

More from the lanes as the EXTEND-tests pair crosses the custodian
gate, the CORE-MECH-CONTENT fan-out walks the remaining five steps
to their primitive bindings, and the next workflow seam picks up
the same composition shape on top of the substrate this wave
finishes binding.
