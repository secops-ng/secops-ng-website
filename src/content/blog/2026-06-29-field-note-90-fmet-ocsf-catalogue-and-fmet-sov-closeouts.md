---
title: "Field note #90 — catalogue-wide OCSF binding closes its triplet, and the sovereignty cluster gains an UNKNOWN-residency residual-risk KRI"
description: "Ninetieth field note from the SecOps-NG Digital Commons: four framework PRs close the F-MET-OCSF-CATALOGUE triplet — the catalogue-wide OCSF source-data-shape binding guard now resolves every telemetry.ocsf.* ref against content/telemetry/ and rides the nightly orphan-CI lane (#540–#541) — and open F-MET-SOV in the sovereignty corner with a paired UNKNOWN-residency LM-endpoint exposure KRI plus its nightly pairing invariant (#542–#543)."
pubDate: 2026-06-29
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-04", "f-met", "f-met-ocsf-catalogue", "f-met-sov", "ocsf", "sovereignty", "kpi-kri", "orphan-ci", "digital-commons"]
---

Four framework PRs close this window, and they sit in two pairs against
the same G-04 catalogue-maturity goal. The first pair closes the
F-MET-OCSF-CATALOGUE triplet opened by [#539](https://github.com/secops-ng/secops-ng-framework/pull/539):
the catalogue-wide OCSF source-data-shape binding guard moves from
checking that a ref is _present_ on every operator-telemetry metric to
checking that the ref actually _resolves_ to a backing artifact under
`content/telemetry/`, and the lane is wired into the nightly orphan-CI
schedule (#540, #541). The second pair opens the F-MET-SOV thread in
the sovereignty corner: a new residual-risk KRI surfaces LM endpoints
the residency guard classifies as `UNKNOWN`, paired with the existing
EU-residency coverage KPI, and a nightly invariant locks the pairing in
so the KPI cannot ship without its paired KRI on the same version
family (#542, #543).

## What landed

Four PRs against the framework, all merged to `main`.

### F-MET-OCSF-CATALOGUE CORE — dangling-ref guard on the catalogue-wide OCSF binding (PR #540)

[PR #540](https://github.com/secops-ng/secops-ng-framework/pull/540)
deepens the catalogue-wide OCSF source-data-shape binding guard that
landed at the SKELETON floor in
[#539](https://github.com/secops-ng/secops-ng-framework/pull/539). The
SKELETON checked that every operator-telemetry (non-composite) metric
in the KPI/KRI catalogue declared an `ocsf_source:` ref; this CORE adds
a resolution pass on top, so a `telemetry.ocsf.*` ref that points at a
class with no backing artifact under `content/telemetry/` now fails the
lint with `reason=dangling_ocsf_ref`. Composite-source metrics keep
their exemption; the existing presence check (`reason=no_ocsf_binding`)
is preserved; the JSON payload carries the failure reason so a
downstream surface can split presence from resolution without parsing
prose.

### F-MET-OCSF-CATALOGUE EXTEND — catalogue-wide guard rides nightly orphan-CI (PR #541)

[PR #541](https://github.com/secops-ng/secops-ng-framework/pull/541)
closes the triplet by wiring the catalogue-wide lint as a new
`catalogue-ocsf-bindings` job stanza in `.github/workflows/orphan-ci.yml`,
mirroring the shape of the existing per-cluster `posture-ocsf-bindings`
and `detection-ocsf-bindings` lanes. The path filter is extended to
include `content/telemetry/**`, which means a telemetry-class rename
that would dangle a catalogue ref now trips on the PR that introduces
it, not on the next nightly. A README note in `content/metrics/` names
the new lane and the local invocation; the catalogue is currently fully
bound on `main`, so the lane lands green.

### F-MET-SOV SKELETON — UNKNOWN-residency LM-endpoint exposure KRI (PR #542)

[PR #542](https://github.com/secops-ng/secops-ng-framework/pull/542)
opens the sovereignty corner of the KPI/KRI catalogue with a new
`kri.lm_endpoint_unknown_residency_exposure@v1` row paired with the
shipped `kpi.lm_endpoint_eu_residency_coverage@v1`. The KRI surfaces
the residual-risk sub-signal the coverage KPI cannot distinguish from
confirmed-non-EU: LM endpoints declared in the compiled example suite
that the shared residency guard classifies as `EndpointResidency.UNKNOWN`
(operator-supplied / self-hosted / private-gateway hosts that match
neither the EU allowlist nor a known non-EU label). The KRI unit is a
count, the direction is lower-is-better, and the foundation property
is sovereignty; the binding is to the same substrate as the coverage
KPI, with no new evidence shape and no change to the guard module.
The committed reference visualisation mirrors the coverage-KPI viz
shape (two-panel: headline count plus per-(workflow, target, endpoint)
drill-down sliced by compile target, with a sovereignty-floor overlay
at zero).

### F-MET-SOV CORE — sovereignty-cluster pairing invariant on nightly orphan-CI (PR #543)

[PR #543](https://github.com/secops-ng/secops-ng-framework/pull/543)
locks the SKELETON pairing in as a nightly invariant. A new
`tools/lint_sovereignty_lm_endpoint_pairing.py` rule asserts that every
metric matching `kpi.lm_endpoint_*_coverage@vN` whose `foundation_property`
includes sovereignty must be paired with a metric matching
`kri.lm_endpoint_*_unknown_*_exposure@vN` on the same version family,
also under the sovereignty foundation property. A version-family
mismatch (KPI@v2 paired with KRI@v1) is caught; an alternative KRI name
on the unknown-residency-exposure shape is accepted, so the invariant
generalises beyond the specific SKELETON name. The new
`sovereignty-lm-endpoint-pairing` job stanza in
`.github/workflows/orphan-ci.yml` rides the same nightly cadence as
the OCSF cluster lanes; the contributor README in `content/metrics/`
documents the invariant and the local run command. The coverage KPI
and the guard module are untouched — their contracts are locked by
the SKELETON merge.

## Why this reads against G-04

G-04 on the published roadmap is the catalogue-maturity goal: every
shipped artifact in the catalogue (playbook, primitive, control, metric,
mapping row) moves from a bare definition to a declared,
machine-readable surface that a nightly orphan-CI lane can walk. The
F-MET-OCSF-CATALOGUE triplet sits squarely on that goal for the
KPI/KRI catalogue: SKELETON inventoried the binding shape catalogue-wide,
CORE turned the presence check into a resolution check against the
on-disk telemetry artifacts, and EXTEND put the whole lane on the
nightly schedule and on the PR-on-touch trigger. That triplet now
closes: the catalogue's operator-telemetry rows declare an OCSF source
shape and the declaration resolves to a real class artifact, enforced
catalogue-wide on every PR that touches the relevant surface and again
each night.

The F-MET-SOV pair reads against the same goal in the catalogue's
sovereignty corner, which carried the thinnest `foundation_property:
[sovereignty]` count before this window. The pairing reads two rows
together: a coverage KPI that says how much of the LM-endpoint surface
is confirmed EU-residency, and a residual-risk KRI that says how much
of that surface is unknown to the classifier. An off-floor coverage
reading paired with a non-zero UNKNOWN exposure says the reading is
driven (in part) by unclassified hosts; an off-floor coverage reading
paired with a zero UNKNOWN exposure says the reading is driven by
confirmed-non-EU under a documented override. Neither row replaces the
other; the invariant lint keeps both sides of the pairing present at
the same version family.

## Sovereignty stance on this wave

The wave does not change the sovereignty stance on any operational
artifact. OCSF remains an open data shape; resolving a
`telemetry.ocsf.*` ref against `content/telemetry/` only enforces that
the catalogue's declared shape is backed by an on-disk class artifact
inside the public framework, not by any particular vendor of telemetry
or any particular hosted surface. The operator decides which compatible
source emits each declared class inside their own stack.

The new UNKNOWN-residency KRI surfaces a fact about the project's own
LM-endpoint classification — that the residency guard ships with three
verdicts, EU / non-EU / UNKNOWN, and that the UNKNOWN bucket is what
the coverage KPI cannot speak to. Making that bucket explicit and
read-with-coverage on the catalogue is the discipline G-04 asks for in
the sovereignty corner: state the residual risk on the row, do not
hide it inside the headline coverage number.

The discipline that the project does not ship its own runtime, its own
agent framework, or its own SOAR continues to apply. The new pairing
invariant runs on content; the guard module it pairs against is the
same one operators read against telemetry on the compile target they
choose.

## Honest framing on what stays open

This is a closeout-and-opening wave, not a milestone wave. The honest
open beats:

- **F-MET-OCSF-CATALOGUE closes its triplet on the structural floor.**
  Every operator-telemetry metric in the catalogue carries an OCSF
  source-data binding that resolves to a real class artifact, and a
  nightly lane keeps that honest. Catalogue _coverage in production_ —
  whether an operator's telemetry actually emits every declared class
  — remains the operator's problem on their own stack.
- **F-MET-SOV opens with one paired row.** The pairing invariant
  generalises in shape (`kpi.lm_endpoint_*_coverage@vN` ⇄
  `kri.lm_endpoint_*_unknown_*_exposure@vN`) but the catalogue carries
  one pair today. EXTEND of F-MET-SOV — extending the pairing to the
  determinism corner or to non-LM-endpoint sovereignty metrics — is
  named as a sibling card, not done in this wave.
- **G-04 catalogue maturity continues.** The corners that have not yet
  entered a binding phase continue to be inventoried by the
  catalogue-wide skip-list; the next windows continue to walk depth
  into the catalogue.

The accurate claim on this wave is: the catalogue-wide OCSF
source-data-shape binding guard now enforces resolution, not just
presence, and rides the nightly orphan-CI lane on the PR-on-touch
trigger; the sovereignty cluster has a paired coverage-KPI /
UNKNOWN-exposure-KRI row and a nightly invariant that keeps the
pairing present at the same version family.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #540](https://github.com/secops-ng/secops-ng-framework/pull/540),
  [PR #541](https://github.com/secops-ng/secops-ng-framework/pull/541),
  [PR #542](https://github.com/secops-ng/secops-ng-framework/pull/542),
  and [PR #543](https://github.com/secops-ng/secops-ng-framework/pull/543).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-nine that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Four PRs close this window. The KPI/KRI catalogue's OCSF
source-data-shape binding guard now resolves catalogue-wide on the
PR-on-touch trigger and on the nightly orphan-CI lane, and the
sovereignty corner gains a paired residual-risk KRI with a nightly
invariant that keeps the pairing present at the same version family.
