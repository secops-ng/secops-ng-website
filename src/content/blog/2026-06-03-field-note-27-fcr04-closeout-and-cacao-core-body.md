---
title: "Field note #27 — F-CR-04 audit-mirror reads closed across the three reference targets, the F-WF-01 vuln-intake primitives contract is fully landed on content, and a CACAO core_body schema bump lets the playbook step itself carry the primitive-binding contract"
description: "Twenty-seventh field note from the SecOps-NG Digital Commons: with the LangGraph emitter sibling split merged, the F-CR-04 audit-mirror seam now reads closed across all three reference compile targets; the F-WF-01 vuln-intake primitives contract — dedup, DSPy signatures, EPSS, CVSS v3.1, severity-policy — sits fully landed under content; and a content-model schema bump introduces x_secops_ng.core_body on CACAO playbook steps so the content artefact itself names the primitive an emitter binds against, ahead of the per-target CORE-MECH wave."
pubDate: 2026-06-03
author: "The SecOps-NG commons"
tags: ["shipping-update", "audit-mirror", "f-cr-04", "f-wf-01", "vuln-intake", "primitives", "cacao", "core-body", "content-model", "schema", "compilers", "temporal", "langgraph", "n8n", "digital-commons"]
---

Field note #26 named the LangGraph emitter sibling split as the piece
that closed the F-CR-04 audit-mirror seam end to end on the third of
three reference compile targets, and walked the n8n vuln-intake worked
example through the per-action wiring notes that name its primitive
contract. This note steps back one frame and reads the shape that the
last wave leaves on `main`: a closed audit-mirror seam on the
compile-side, a fully landed primitives contract on the content side,
and a content-model schema bump that introduces the seam those two
sides meet on.

## What this note reads off `main`

### F-CR-04 audit-mirror closed across the three reference targets

The F-CR-04 closeout sequence reads through in a single pass on the
framework repo. The OTel emitter wrap landed across all three targets
through
[PR #180](https://github.com/secops-ng/secops-ng-framework/pull/180),
[PR #183](https://github.com/secops-ng/secops-ng-framework/pull/183),
[PR #186](https://github.com/secops-ng/secops-ng-framework/pull/186),
and
[PR #190](https://github.com/secops-ng/secops-ng-framework/pull/190).
The byte-parity goldens absorbed the wrap on Temporal and LangGraph
through
[PR #198](https://github.com/secops-ng/secops-ng-framework/pull/198).
The Temporal emitter wired audit-mirror end to end through the
sibling split that landed earlier in the wave. The LangGraph half
closed in the same sibling shape across
[PR #214](https://github.com/secops-ng/secops-ng-framework/pull/214)
(CORE-LG-CLI, the shared `audit_mirror_cli` helper plus the worked-
example `regenerate.sh` hook),
[PR #215](https://github.com/secops-ng/secops-ng-framework/pull/215)
(CORE-LG-EMITTER, the `@tool` emit path wired to
`AuditTrail.append()` alongside the OTel span, with `workflow_run_id`
landing as the compile-time empty-string placeholder the integrator
rebinds at invocation time), and
[PR #216](https://github.com/secops-ng/secops-ng-framework/pull/216)
(CORE-LG-GOLDENS, the regeneration that drops the twenty-seven
pending xfail markers the emitter sibling staged). The n8n side
documented its per-action wiring against the same primitives contract
through
[PR #217](https://github.com/secops-ng/secops-ng-framework/pull/217),
the documentation move appropriate to a target whose worked example
is a snapshot of intent the operator wires into the orchestrator the
operator already runs.

Read in sequence on `main`, every compiler that emits an artefact now
emits a span the OTel emitter named and an append the AuditTrail
recorded, every worked example carries the dependency-free audit-
mirror sibling its imports resolve against, and the byte-parity grid
on Temporal and LangGraph records the new artefact shape with no
pending xfail markers in the cell.

### F-WF-01 vuln-intake primitives contract fully landed under content

The five primitives the vuln-intake playbook binds against sit
together under `content/playbooks/vuln_intake/primitives/`, each
landed as its own composition step against the same shared package:

- [PR #205](https://github.com/secops-ng/secops-ng-framework/pull/205)
  — the dedup-key primitive that normalises the canonical
  case-identity an emitter writes the same disclosure into on every
  replay.
- [PR #206](https://github.com/secops-ng/secops-ng-framework/pull/206)
  — the DSPy free-text signatures primitive that names the LM-bound
  shape of intake fields whose value cannot be reduced to a
  deterministic parse.
- [PR #207](https://github.com/secops-ng/secops-ng-framework/pull/207)
  — the EPSS canonicalisation primitive that absorbs the upstream
  shape change and surfaces a single ordered probability the playbook
  intent reasons over.
- [PR #210](https://github.com/secops-ng/secops-ng-framework/pull/210)
  — the CVSS v3.1 base-score primitive that names the parse the three
  compilers share, so a base score is the same number in every replay
  on every target.
- [PR #211](https://github.com/secops-ng/secops-ng-framework/pull/211)
  — the severity-policy primitive that composes the CVSS and EPSS
  outputs into the single ordered decision the playbook intent reads
  over the deterministic seam the primitives draw under it.

Cross-target semantic consistency lives in the primitives package
itself. Temporal binds via activity imports. LangGraph binds via node-
function imports. n8n binds via operator-edited Set rows whose wiring
notes name the same Python functions. Every replay reads the same
disclosure into the same byte-identical case, because every replay
calls the same primitive on the way in.

### F-WF-01 CORE-MECH SKELETON: a CACAO step can carry the primitive-binding contract

The third move in this note is the substrate piece that lets the
primitives contract above and the compile-side wiring on the
audit-mirror seam meet on a single shared artefact. The CACAO content
model gains an `x_secops_ng.core_body` field on playbook steps,
through
[PR #218](https://github.com/secops-ng/secops-ng-framework/pull/218).

The field names, on the content artefact itself, the primitive a
compiler is expected to bind that step's body against. Before the
schema bump, a compiler that wanted to render a real body for a step
— rather than the `NotImplementedError` stub the SKELETON wave shipped
— had to hand-code the binding per target. With the field landed,
the binding contract is data on the content artefact, the three
reference compilers read the same data, and the contract moves with
the playbook the way every other CACAO field already moves.

The schema bump is deliberately a skeleton on its own. It does not
yet wire the field through any compiler's emit path; that work lands
as a per-target CORE-MECH wave on top of this skeleton, and reads as
a sibling of the audit-mirror closeout the F-CR-04 wave just walked
through. The companion docs one-pager on the convention is in review
on
[PR #219](https://github.com/secops-ng/secops-ng-framework/pull/219).

## What this wave closes

It closes the F-CR-04 audit-mirror seam on the third of three
reference compile targets, leaving every emitted tool body carrying
an OTel span the emitter named and an AuditTrail append the emitter
wrote, whether or not an OTLP exporter is configured at runtime.

It closes the F-WF-01 vuln-intake primitives contract on the content
side: the five primitives the playbook intent reasons over all sit
on `main` as a shared package, with the same package imported on
Temporal, imported on LangGraph, and named in the n8n worked-example
wiring notes.

It names a single content-model field — `x_secops_ng.core_body` — as
the seam where the primitives contract above and the compile-side
emit paths below meet on a CACAO playbook step.

## What this wave does not promise

It does not promise the CACAO `core_body` field wires through any
compiler's emit path in this wave. The schema bump is a skeleton; the
per-target CORE-MECH work lands on top of it as its own composition
steps on later waves, target by target, the same shape the F-CR-04
sibling splits walked through.

It does not promise the audit-mirror envelope grows beyond the
compile-time `workflow_run_id` placeholder in this wave. The envelope
shape the three targets share — playbook id, step id, tool name,
`workflow_run_id` placeholder, no compile-time `ts` — is the contract
the integrator rebinds against at invocation time, and subsequent
envelope fields land as their own composition steps on later waves.

It does not promise the n8n target gains its own emitter wire-up. The
n8n artefact is, by design, a snapshot of intent the operator wires
into the orchestrator the operator already runs — the wiring notes
that name the primitive contract are the CORE move on n8n, and the
operator's own connector node is what executes against the primitive
at runtime.

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
A contributor walking in this week finds the same five issues open,
a vuln-intake primitives package reading five-deep under content, an
audit-mirror seam reading wired end to end across Temporal and
LangGraph with the n8n wiring documented on its worked example, and
a CACAO `core_body` field on `main` that the next-wave CORE-MECH work
will read off the content artefact target by target.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-CR-04 LangGraph audit-mirror sibling split through
  [PR #214](https://github.com/secops-ng/secops-ng-framework/pull/214),
  [PR #215](https://github.com/secops-ng/secops-ng-framework/pull/215),
  and
  [PR #216](https://github.com/secops-ng/secops-ng-framework/pull/216);
  the n8n CORE wiring notes through
  [PR #217](https://github.com/secops-ng/secops-ng-framework/pull/217);
  the F-WF-01 vuln-intake primitives through
  [PR #205](https://github.com/secops-ng/secops-ng-framework/pull/205),
  [PR #206](https://github.com/secops-ng/secops-ng-framework/pull/206),
  [PR #207](https://github.com/secops-ng/secops-ng-framework/pull/207),
  [PR #210](https://github.com/secops-ng/secops-ng-framework/pull/210),
  and
  [PR #211](https://github.com/secops-ng/secops-ng-framework/pull/211);
  and the CACAO `core_body` schema bump through
  [PR #218](https://github.com/secops-ng/secops-ng-framework/pull/218),
  with the docs one-pager in review on
  [PR #219](https://github.com/secops-ng/secops-ng-framework/pull/219).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the twenty-six that preceded it, plus the M3
  launch post on
  [PR #32](https://github.com/secops-ng/secops-ng-website/pull/32).
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the audit-mirror seam reads closed
across the three reference compile targets, the vuln-intake
primitives contract reads five-deep under content as a shared
package the three compilers bind against, and the CACAO content
model carries a `core_body` field that names the primitive a step's
body binds against on the artefact itself. The next-wave CORE-MECH
work reads off that field, target by target, against the same
sibling-split shape the F-CR-04 closeout just walked.

More from the lanes as the per-target CORE-MECH wave lands on top
of the CACAO `core_body` skeleton, the audit envelope grows beyond
the compile-time placeholder, and the F-WF-01 vuln-intake worked
example crosses from CORE documentation into operator-facing
EXTEND-config beats on each of the three reference targets.
