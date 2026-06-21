---
title: "Field note #68 — F-G02 outbound mappings overlay wave closes: every shipped playbook now carries a validated mappings.yaml, with a CI completeness guard standing behind it"
description: "Sixty-eighth field note from the SecOps-NG Digital Commons: the F-G02 outbound cross-standard mappings overlay wave closes on the framework with the executive_metrics and it_security_support_agent overlays landing, taking the shipped catalogue to every finalized playbook carrying a validated mappings.yaml outbound overlay; a new completeness CI guard fails the build if any finalized playbook lands without one; the SKELETON breadth pass on the lane is closed, the EXTEND depth pass and the inbound-closure work open as the next passes."
pubDate: 2026-06-21
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-g02", "mappings", "oscal", "d3fend", "ocsf", "nis2", "dora", "cra", "gdpr", "digital-commons", "catalogue", "audit-readable", "ci-guard"]
---

The previous field note read the F-G02 outbound cross-standard
mappings overlay wave closing the SKELETON pass across the
workflow-catalogue rows. This note reads the wave closing out
fully. Two further overlays merged to framework `main` in this
window — `executive_metrics` and `it_security_support_agent` —
and a small CI guard landed alongside them. With this wave
closed, every shipped playbook that carries a finalized CACAO
source now carries a validated `mappings.yaml` outbound overlay,
and the build fails loudly if any future finalized playbook
lands without one.

## What landed in this window

Two overlays and one CI guard, all on the F-G02 lane:

- **executive_metrics** through
  [PR #397](https://github.com/secops-ng/secops-ng-framework/pull/397)
  — outbound `mappings.yaml` overlay naming the OSCAL controls
  (CA-2, CA-7, PM-6, PM-9, RA-3) the control-effectiveness
  rollup playbook exercises against the catalogue surface, with
  OCSF API Activity (6003) on the resolve, evaluate, and emit
  steps. D3FEND is intentionally empty and the omission is
  documented in-line: an executive rollup is a control-
  effectiveness reporting surface, not a runtime
  countermeasure, and documenting the absence beats inventing
  coverage.
- **it_security_support_agent** through
  [PR #398](https://github.com/secops-ng/secops-ng-framework/pull/398)
  — outbound `mappings.yaml` overlay naming the OSCAL controls
  (IR-4, IR-5, IR-7, IR-8) the front-line support playbook
  exercises, with D3-IRA pinned on the classify-request step
  and the OCSF telemetry surface unified on
  `telemetry.api_activity@v1` across the five action bodies.
  NIS2 Article 21(2)(b) is named as the front-line entry into
  the incident-handling capability the
  `incident_management` playbook discharges, with explicit
  per-control omissions documented in the overlay header.
- **a completeness CI guard** through
  [PR #399](https://github.com/secops-ng/secops-ng-framework/pull/399)
  — `tests/content/test_playbook_mapping_coverage.py` enumerates
  every finalized playbook (any directory under
  `content/playbooks/` carrying a `playbook.cacao.json`) and
  asserts each ships a `mappings.yaml` outbound overlay. The
  finalized set is derived from CACAO presence, not from a
  hardcoded list, so the guard stays correct as new playbooks
  land. The expected floor on the shipped set is zero orphans;
  any regression fails the build with the offending slug named.

## Where the catalogue sits at wave-close

At wave-close on framework `main`:

- **Every finalized-CACAO playbook carries a `mappings.yaml`.**
  Seventeen finalized playbooks ship a CACAO source under
  `content/playbooks/<slug>/playbook.cacao.json`; each of the
  seventeen ships a `content/playbooks/<slug>/mappings.yaml`
  outbound overlay alongside it. Eighteen overlays are present
  in total — the `detection_engineering` row ships its overlay
  against a CACAO source authored in YAML rather than JSON, so
  it sits outside the CI guard's CACAO-JSON discovery rule but
  is structurally complete.
- **Two layers of CI defend the overlay set.** A shape test
  (`test_playbook_mappings.py`) validates that each overlay
  conforms to `schemas/playbook-mappings.schema.json` — fixed
  top-level keys (`oscal` / `d3fend` / `ocsf` / `nis2` / `dora`),
  identifier shape, narrative-comment conventions. A
  completeness test (`test_playbook_mapping_coverage.py`)
  validates that the overlay set itself stays closed against
  the finalized-CACAO playbook set.
- **The lane sits on the catalogue, not on a workflow spine.**
  F-G02 ships typed overlays on top of existing catalogue
  content rather than new workflow content. The overlays do not
  change runtime behaviour; they give an operator, an auditor,
  or a regulator a single typed jump from a playbook id to the
  controls, techniques, event classes, and regulatory clauses
  it discharges.

## Why per-playbook traceability matters

A regulated operator meeting the EU regulatory baselines —
NIS2, DORA, CRA, GDPR — is repeatedly asked the same question
in different shapes: which of your operational capabilities
discharges this obligation, and where is the evidence. The
shape of the answer is the same across each regime, but the
identifier conventions, the article structure, and the audit
expectations differ. A free-text mapping carries the question
back unanswered: it is not iterable, not diffable, not
machine-readable, and not portable across the three reference
compile targets.

The outbound mappings overlay is the shape of an answer that
survives all four:

- **From a playbook to its cross-standard surface.** Open the
  overlay at `content/playbooks/<slug>/mappings.yaml`. The five
  top-level keys (oscal / d3fend / ocsf / nis2 / dora) name the
  controls, techniques, event classes, and regulatory clauses
  the playbook discharges, each pinned to a public catalogue
  identifier rather than free text. A System Security Plan, an
  ISMS gap analysis, a DORA register entry, or a CRA technical
  documentation pack can bind against the playbook by
  identifier.
- **From a regulatory clause to the playbooks that discharge
  it.** Open the inbound graph at
  `content/mappings/{nis2,dora,gdpr}/<clause>.yaml`. The
  inbound entry names every playbook that asserts the clause on
  its outbound overlay, and any explicit sub-threshold
  carve-outs read as named exclusions rather than silent
  omissions.
- **Across the catalogue at the structural level.** A
  downstream consumer can iterate the catalogue and read
  cross-standard alignment as a structured property — fixed
  schema, predictable keys, identifier-shaped values — rather
  than as per-row narrative that has to be parsed by hand.

## Honest framing on depth — what the overlay does and does not yet carry

The breadth pass that closes in this wave is exactly that: a
breadth pass. The overlays cross-link the catalogue against the
five cross-standard surfaces at the identifier level, with the
deliberate omissions and carve-outs named in narrative
comments at the top of each file. They do not yet carry the
depth that the EXTEND pass will land on each row.

Several overlays carry explicit in-line gap notes where the
inbound graph is still in flight. The DORA Article 9
access-management slice is the worked example: the inbound
file at `content/mappings/dora/article-9-and-rts-vuln-mgmt.yaml`
is scoped to vulnerability and patch management, which is not
the same surface as access-management or
authentication-governance. The `iam_auditor` overlay reads this
honestly. Rather than silently pin an outbound DORA Article 9
access-management entry against an inbound file that does not
cover the access-management slice, the overlay leaves the
outbound DORA array empty, names the gap in narrative directly
above the empty block, and points at the inbound-closure work
that has to land before that outbound entry can be asserted.
The same discipline appears on several other rows where an
inbound anchor is still pending: a documented absence rather
than an invented coverage.

The accurate claim across the catalogue is therefore the
careful one: every shipped finalized-CACAO playbook now carries
a validated outbound mappings overlay, with structural
completeness defended by CI, and with the gaps in the inbound
graph named in the rows where they exist rather than hidden.
The CORE inbound-closure work — the new inbound files and
revisions that will let the gap-carrying rows assert outbound
entries against an inbound anchor — opens as the next pass on
the lane.

## Where this leaves a reader of the catalogue

A regulated operator (or an auditor or regulator) reading the
catalogue today resolves the following directly:

- A jump from any shipped playbook to the OSCAL controls, MITRE
  D3FEND techniques, OCSF event classes, and NIS2 / DORA
  clauses it discharges, named against public catalogues.
- A reverse jump from a regulatory clause to the playbooks
  asserting it, with explicit sub-threshold carve-outs read as
  named exclusions.
- A structural property — the typed shape and identifier
  conventions — that holds across every row, defended by both a
  schema test and a completeness test in CI.

What the reader does not yet get from the SKELETON breadth
pass: per-mapping rationale binding each control identifier to
the evidence artifact the playbook emits, the residual-risk KRI
catalogue entry the playbook carries, and the inbound closure
for the gap-carrying rows. Those are the EXTEND and
inbound-closure passes, opening next.

## What's open behind this wave

- **F-G02 EXTEND — per-mapping rationale, evidence-pointer, KRI
  binding.** The SKELETON overlay structures the cross-links;
  the EXTEND pass on each row names per-mapping rationale,
  points at the evidence artifact the playbook emits as
  discharge of the control, and binds residual-risk KRI
  catalogue entries.
- **F-G02 inbound-closure.** New and revised inbound files
  under `content/mappings/{nis2,dora,gdpr,cra}/` close the gaps
  that the gap-carrying overlay rows name in narrative. The
  worked example is the DORA Article 9 access-management slice
  on `iam_auditor`; sibling gaps live on other rows and are
  named in their headers.
- **F-G02 fan-out to the sovereignty-lane rows.** The
  sovereignty-lane rows (eIDAS 2.0 wallet, DORA Article 19
  report variant) are Shipped on their own lanes; each will
  carry an outbound mappings overlay on a subsequent pass now
  that the workflow-catalogue breadth pass is closed.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the two overlays that close out the wave:
  executive_metrics
  ([PR #397](https://github.com/secops-ng/secops-ng-framework/pull/397)),
  it_security_support_agent
  ([PR #398](https://github.com/secops-ng/secops-ng-framework/pull/398));
  and the completeness CI guard
  ([PR #399](https://github.com/secops-ng/secops-ng-framework/pull/399)),
  all merged to `main`. The full F-G02 SKELETON wave runs
  [PR #382](https://github.com/secops-ng/secops-ng-framework/pull/382)
  through
  [PR #398](https://github.com/secops-ng/secops-ng-framework/pull/398).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-seven that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community
  lane, the auto-generated roadmap.

Two overlays and one CI guard moved in this window, closing the
F-G02 outbound cross-standard mappings overlay wave. Every
shipped playbook that carries a finalized CACAO source now
carries a validated `mappings.yaml` outbound overlay, the
overlay set is defended by a completeness test in CI, and the
gap-carrying rows name their inbound gaps in narrative rather
than hiding them. The SKELETON breadth pass on the lane closes
out; the EXTEND depth pass and the inbound-closure work open
as the next passes on the lane.
