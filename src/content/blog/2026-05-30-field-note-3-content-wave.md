---
title: "Field note #3 — the content layer fills in: KPI catalog, three-target worked examples, regulatory overlay across the board"
description: "Third field note from the SecOps-NG Digital Commons: a KPI/KRI catalogue lands as the headline deliverable, six response playbooks ship worked examples across Temporal, n8n, and LangGraph, and the NIS2/DORA overlay now reaches every example in the catalogue."
pubDate: 2026-05-30
author: "The SecOps-NG commons"
tags: ["shipping-update", "kpi", "kri", "metrics", "cacao", "oscal", "d3fend", "ocsf", "nis2", "dora", "temporal", "n8n", "langgraph", "digital-commons"]
---

The last note from the commons described the missing layer above the
open standards and the shape of the canonical content model. This one
is the shipping report against that thesis. A lot landed in the
framework repo in the week since the repositioning. The honest summary
is that the model now has volume behind it.

## The headline: a KPI/KRI catalogue, in the open

The single largest deliverable in this wave is the open metrics
catalogue. The fifth primitive in the canonical content model —
**Metrics** — is no longer a stub. It is a curated KPI/KRI catalogue,
landed in the framework repo as a versioned set of indicator
definitions with stable identifiers, computation notes, and references
back to the playbooks and controls that exercise them
(PRs [#100](https://github.com/secops-ng/secops-ng-framework/pull/100),
[#101](https://github.com/secops-ng/secops-ng-framework/pull/101)).

The reasoning is the same as for every other layer of the commons:
SecOps already has dozens of metric vocabularies — one per vendor,
one per consultancy deck, none of them stable across an audit cycle.
An operator who computes mean-time-to-detect today against one
vendor's definition cannot honestly compare it to last year's number
under a different definition. A commons-owned catalogue, defined
once and pinned by identifier, removes that drift without anyone
having to negotiate a glossary.

The catalogue covers the obvious detection and response indicators —
MTTD, MTTR, dwell time, escalation rate — and the less obvious ones
the regulatory baseline actually asks about: telemetry coverage,
control effectiveness, evidence completeness. Each entry is portable
JSON. Each carries a stable ID. Each links back to the playbooks
and controls that produce the underlying signal. None of it depends
on any particular orchestrator or SIEM.

## The second beat: three compile targets, six worked examples

The repositioning note made the framework-agnostic claim with one
worked example behind it (vuln-intake). That claim is now backed by
six, across all three reference compile targets.

Six response playbooks now ship full worked examples — canonical CACAO
JSON plus a compiled artefact for each of Temporal, n8n, and LangGraph:

- **data-exfil** — exfiltration containment and evidence preservation,
- **ransomware-containment** — isolation, eradication, recovery
  sequencing,
- **on-call-rotation** — durable handoff with state that survives
  pages and restarts,
- **post-incident-review** — structured retrospective with evidence
  pinned to the incident timeline,
- **cloud-misconfiguration** — identification, remediation, and
  control-mapping for cloud posture drift,
- **identity-compromise** — credential containment and downstream
  blast-radius reduction.

Each playbook lands as a single CACAO artefact and compiles cleanly
into all three runtimes via the reference compilers in
`compilers/{temporal,n8n,langgraph}/`. The compiled outputs are pinned
under golden tests so a future change to a compiler cannot silently
drift the artefact an operator imports. Threat-intel-ingest mappings
and shared adapters landed alongside (PRs
[#88](https://github.com/secops-ng/secops-ng-framework/pull/88),
[#91](https://github.com/secops-ng/secops-ng-framework/pull/91),
[#94](https://github.com/secops-ng/secops-ng-framework/pull/94)–[#99](https://github.com/secops-ng/secops-ng-framework/pull/99))
so the playbooks share a single way of consuming intel rather than
six divergent ones.

The point of shipping six is not the count. It is that *the same
canonical artefact* produces a working Temporal workflow, a working
n8n flow, and a working LangGraph state machine, six times in a row,
without per-playbook special-casing in any compiler. The
framework-agnostic claim is no longer a thesis; it is a regression
test.

## The third beat: NIS2 and DORA reach every example

Each of the six playbooks also ships with its EXTEND overlay
populated: OSCAL control identifiers, D3FEND technique mappings, OCSF
event-class shapes for the telemetry produced, KPI identifiers from
the new catalogue for the metrics emitted, and — new in this wave —
explicit NIS2 and DORA article cross-links (PRs
[#72](https://github.com/secops-ng/secops-ng-framework/pull/72)–[#93](https://github.com/secops-ng/secops-ng-framework/pull/93)).

The regulatory overlay is editorial work, not engineering work.
NIS2 and DORA do not name playbooks; operators have to do the
translation themselves. Doing that translation once, in the open,
against a portable artefact that every operator can reuse, is
exactly the kind of curation a commons exists to provide. The
mappings are not advice. They are the receipts an auditor expects
to see, prepared once and shared.

The combination of the five-primitive content model, the KPI
catalogue, and the regulatory cross-links means a single workflow
artefact in the commons now carries — by construction — what an
operator needs to point at when asked *which controls does this
playbook exercise, what telemetry does it produce, how do you
measure it, and which article of the regulation does it map to*.

## What the wave does not change

None of this is a runtime. The commons still ships content,
structure, metrics, and reference compilers. The orchestrator stays
the operator's choice. The sovereign-deployment quickstart on Nebul
with Mistral and Temporal remains one reference path among many,
not the path.

The repositioning post made the argument; this wave is the
evidence behind it.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the content model, the KPI catalogue, the six playbooks, the
  three reference compilers, the regulatory overlays.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the field notes that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — issues,
  the public kanban, the auto-generated roadmap.

If you run SecOps in Europe and you have an opinion on which
playbooks belong next in the catalogue, which KPI definitions need
sharpening, or which compile target deserves the next reference
implementation, the kanban is the place. There is no membership
form. The work happens in the open.

More soon, from the lanes.
