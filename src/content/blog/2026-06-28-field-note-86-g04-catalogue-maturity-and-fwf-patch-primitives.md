---
title: "Field note #86 — G-04 catalogue maturity hardens (determinism + sovereignty foundation_property back-fill) and F-WF-PATCH lands its deterministic primitives"
description: "Eighty-sixth field note from the SecOps-NG Digital Commons: five framework PRs land on the catalogue-maturity goal (G-04) and the patch_management workflow lane (F-WF-PATCH). The KPI/KRI catalogue's `foundation_property` requirement is back-filled across sixteen existing metric files, two new metric triplets close the thinnest determinism and sovereignty corners, the patch_management deterministic primitives package lands behind the canonical CACAO source, and the patch-application evidence stream picks up its first two catalogue entries."
pubDate: 2026-06-28
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-04", "f-met", "f-met-det", "f-met-sov", "f-wf", "f-wf-patch", "metrics", "kpi", "kri", "playbooks", "cacao", "patch-management", "compile-parity", "foundation-property", "digital-commons"]
---

Five framework PRs walk the catalogue-maturity goal (G-04) one full
turn forward and land the deterministic-primitives core on the
patch_management workflow lane (F-WF-PATCH). The shape of this wave:
the KPI/KRI catalogue's `foundation_property` requirement is now
back-filled across the metric tree (red `main` repair), the two
thinnest FOUNDATION corners — determinism and sovereignty — pick up
fresh SKELETON triplets that bind to substrate already on `main`, the
patch_management workflow gets its per-step deterministic primitives
behind the CACAO source, and the patch-application evidence stream
picks up its first two catalogue entries against G-04.

## What landed across the wave

Five PRs against the framework, all merged to `main`.

### G-04 red-main repair — `foundation_property` back-filled across the metric catalogue (PR #525)

[PR #525](https://github.com/secops-ng/secops-ng-framework/pull/525)
turns the suite green on a content-model schema requirement that had
been added to support G-04's catalogue-coverage KRI but was missing on
sixteen committed example metric files and two minimal KPI/KRI fixtures
in the schema-tests module. `main` was red against the same root cause
on every failure.

The decision the row carries is the honest one: the schema requirement
is correct. G-04's catalogue-coverage KRI is what fires when the union
of declared `foundation_property` values across the catalogue does not
cover all four FOUNDATION properties — auditability, determinism,
sovereignty, operability — per `docs/FOUNDATION.md`. Removing the
requirement to make the suite green would silently break the KRI and
erode the content-model contract. Back-filling the data is the right
move.

Each metric was given the FOUNDATION property (or properties) it
actually evidences, not stamped uniformly. Latency and coverage KPIs
(MTTD / MTTR / feed and telemetry coverage) carry `operability`;
notification SLA and recurring-deviation KPIs and KRIs carry
`auditability` and `determinism`; threat-intel feed coverage and
blocklist propagation also carry `sovereignty` — intel ingestion and
enforcement points sit on the sovereign-cloud boundary by design.

`main` reads green again. The catalogue-coverage KRI now sees the full
declared signal it needs to fire honestly.

### F-MET-DET SKELETON — determinism KPI/KRI triplet (PR #526)

[PR #526](https://github.com/secops-ng/secops-ng-framework/pull/526)
lifts determinism `foundation_property` coverage on the KPI/KRI
catalogue from one entry to four. After the back-fill in PR #525,
determinism was the thinnest property on the catalogue — closest to
tripping the G-04 KRI floor — so the SKELETON triplet lands here first.

Three entries, each shipping with a sibling `.viz.md` reference
visualisation per the G-04 KPI definition-of-done:

- `kpi.compiler_byte_parity_pass_rate@v1` — ratio of per-example
  byte-parity golden assertions that pass across the three reference
  compile targets (n8n, Temporal, LangGraph) on the evaluation commit.
  Binds to the per-example goldens already shipped under
  `tests/examples/<workflow>/test_{n8n,temporal,langgraph}_workflow_golden.py`.
- `kri.compiler_byte_parity_drift@v1` — residual-risk companion to the
  pass-rate KPI; counts the absolute number of red `(workflow, target)`
  per-example assertions on the evaluation commit.
- `kri.otel_span_attribute_schema_drift@v1` — drift count between the
  canonical `secops_ng.*` span-attribute keys declared on the shared
  helper at `compilers/_shared/observability.py` and the keys actually
  attached on the emitted artifacts under `examples/<target>/<workflow>/`.

Every `measurement.inputs` binding here points at substrate that
already exists on the framework. No invented evidence shapes.

### F-MET-SOV SKELETON — sovereignty KPI catalogue back-fill (PR #528)

[PR #528](https://github.com/secops-ng/secops-ng-framework/pull/528)
walks the same pattern on the sovereignty corner. After the F-MET-DET
SKELETON merge, the `foundation_property` distribution on the catalogue
read `operability=36, auditability=25, determinism=5, sovereignty=4` —
sovereignty was the next-thinnest property and the next-closest to
tripping the KRI floor. This SKELETON triplet lifts sovereignty
coverage to seven.

Three entries, each binding to already-shipped sovereignty substrate:

- `kpi.forward_public_hygiene_high_severity_escape_rate@v1` — HIGH-
  severity finding presence per merged-to-`main` commit, against the
  forward-public hygiene-linter at `tools/hygiene_linter/`. The
  community-bar gate the project observes across its merge stream.
- `kpi.lm_endpoint_eu_residency_coverage@v1` — coverage ratio for
  language-model endpoints against the EU-allowlist suffix set on the
  shared `lm_endpoint_guard` helper. The substrate the F-SV-01
  acceptance assertion already pins.
- `kpi.gdpr_lawful_basis_section_coverage@v1` — seven-section coverage
  check across `content/playbooks/` against the F-GD-02 lawful-basis
  lint substrate.

Same scope discipline as the determinism triplet: metric `.yaml` plus
sibling `.viz.md` only. No compiler or source changes. All
`measurement.inputs` bind to artifacts already shipped.

The shape the two SKELETON triplets reinforce: the catalogue maturity
goal is not a number-of-entries goal — it is a coverage-of-FOUNDATION
goal. The thin corners get walked first, and each entry binds to
substrate that already evidences the property.

### F-WF-PATCH CORE-PRIM — patch_management deterministic primitives (PR #527)

[PR #527](https://github.com/secops-ng/secops-ng-framework/pull/527)
replaces the SKELETON TODO placeholders on the patch_management
workflow with the deterministic per-step primitives the three reference
compile targets re-derive against. This is the lane's primitives core,
the byte-parity source of truth that subsequent CORE-FANOUT siblings
already in flight will assert against.

Six primitives land under
`content/playbooks/patch_management/primitives/`:

- `detect.detect_patch_availability` — normalises an advisory
  observation against the operator's tracked deployment-inventory line
  into a canonical update-subject + update-reference record.
- `classify.classify_patch_criticality` — closed taxonomy resolver
  over the SKELETON enumeration (`security-critical` /
  `security-routine` / `feature-only`); emits the `unclassified`
  sentinel when the documented intake deadline elapses so the operator
  is not held by a perfect-classification stall.
- `stage.stage_rollout_to_canary_ring` — derives a SHA-256
  `staged_ring_id` over the canonical
  `(update_subject, update_reference, canary_ring, cadence)` tuple.
- `validate.validate_canary` — pure health-gate evaluation over the
  closed `(functional_probe, error_rate, latency, rollback_ready)`
  shape. `canary_healthy` is true iff the probe is `green` and all
  three threshold gates are true.
- `fanout.fan_out_to_broad_rings` — SHA-256 `broad_rollout_id` on a
  healthy canary; on an unhealthy canary the step is a deterministic
  skip leaving `__broad_rollout_id__` empty with the explicit
  `broad_rollout_skip_reason='canary_unhealthy'` marker.
- `artifact.build_patch_application_evidence_artifact` — canonical
  evidence-record builder. `artifact_id =
  SHA-256(workflow_id|execution_id|captured_at)`; `compile_target` is
  intentionally not part of the id so the three reference compilers
  re-derive byte-identical bytes — the byte-parity contract the
  CORE-FANOUT siblings will assert against.

A new minimal `schemas/evidence/patch.schema.json` (stream: `patch`)
lands alongside. The existing inventory and effectiveness evidence
shapes do not carry the ring topology + closed health-gate observations
block + canary-unhealthy skip marker that the patch-application record
needs; standing up a minimal patch schema is cleaner than overloading a
neighbouring shape.

The CACAO action bodies on `playbook.patch_management@v1` (and the
mirrored bodies under
`examples/{n8n,temporal,langgraph}/patch_management/`) are rewired to
reference the primitives so zero SKELETON TODO placeholders remain on
those steps at the content layer. Per-target compiler emitters,
per-example goldens, and the cookbook entry walk on their own sibling
cards.

### F-WF-PATCH EXTEND-metrics — patch_management KPI/KRI catalogue entries (PR #529)

[PR #529](https://github.com/secops-ng/secops-ng-framework/pull/529)
closes the patch_management catalogue gap. The lane had shipped
SKELETON, CORE-PRIM (this same wave), all three worked examples plus
goldens, and the full regulatory mapping anchors (NIS2 Article 21(2)(e),
DORA Articles 8 and 9, CRA Annex I §2, GDPR data-flow) plus per-step
D3FEND — but carried zero entries on `content/metrics/`. Two entries
land here, both binding to the patch-application evidence stream the
CORE-PRIM PR stood up:

- `kri.patch_rollout_overdue_exposure@v1` — residual-exposure
  indicator. An execution counts as overdue when the criticality
  classification short-circuited under the documented intake deadline
  (`patch_criticality == "unclassified"`) or when the broad-ring
  fan-out was a deterministic skip against an unhealthy canary
  (`broad_rollout_id == ""` with the documented skip marker).
  Aggregation `max` over the P30D window.
- `kpi.patch_rollout_success_rate@v1` — performance indicator. The
  ratio of executions whose broad rollout engaged with a healthy canary
  over total patch-application artifacts emitted in the window.
  `canary_healthy` is the validate-canary step boolean (functional
  probe green and all three threshold gates true). Target `>=0.95`.

Both entries tag `auditability + operability`. Both ship with sibling
`.viz.md` reference visualisations against the G-04 definition-of-done.

## Why this reads against G-04

G-04 on the published roadmap is the KPI/KRI catalogue-maturity goal.
The two assertions behind it: the catalogue grows toward an
operator-useful depth of coverage on the basic-measures axes, and the
union of declared `foundation_property` values stays honest against the
four FOUNDATION properties. The wave hardens both.

On the back-fill side: the sixteen-file `foundation_property` repair
turns a red `main` green and restores the signal the catalogue-coverage
KRI reads against. Without that signal, the KRI was effectively blind —
it could not fire honestly because the data it counts was not being
declared.

On the thin-corner side: the determinism and sovereignty SKELETON
triplets walk the two thinnest FOUNDATION properties forward. Each
entry binds to substrate the framework already ships — the per-example
byte-parity goldens, the OTel span-attribute helper, the
forward-public hygiene linter, the LM-endpoint EU-residency guard, the
F-GD-02 lawful-basis lint. The catalogue declares signal that already
exists on the tree.

On the workflow side: the patch_management lane picks up its
deterministic-primitives core and its first two KPI/KRI catalogue
entries. The same shape every CORE-tier basic-measures playbook on
F-WF carries — primitives package behind the CACAO source, evidence
schema standing alone, KPI/KRI entries binding to the emitted stream.

## Sovereignty stance on this row

The wave does not change the sovereignty stance on any operational
artifact; it makes the sovereignty discipline visible on the catalogue
side. The `kpi.lm_endpoint_eu_residency_coverage@v1` entry binds to
the same EU-allowlist suffix set the framework already enforces on
shipped LM-facing code paths. The `kpi.forward_public_hygiene_high_
severity_escape_rate@v1` entry binds to the hygiene-linter the public
repos already gate every merge against. The catalogue says, in
catalogue terms, what the merge stream and the shared compiler helper
already enforce in code.

The patch_management lane carries the same sovereignty discipline
every prior CORE-tier basic-measures playbook on F-WF lands with: no
hosted third-party correlation layer in the data plane, no default
non-EU notification endpoint, operator-supplied evidence sink shaped
against `schemas/evidence/patch.schema.json`, and three reference
compile targets that operators run inside their own stack.

## Honest framing on what stays open behind the row

This wave does not flip a workflow lane to Shipped. The honest open
beats:

- **F-WF-PATCH CORE-FANOUT siblings.** Per-target compiler emitters,
  worked examples, and per-example byte-parity goldens against the
  CACAO source and the primitives package land on their own sibling
  cards. The CORE-PRIM row is the byte-parity source of truth they
  assert against.
- **F-WF-PATCH EXTEND-DOCS.** The operator cookbook walkthrough on
  `docs/cookbook/patch_management.md` walks on its own card behind
  the row, in line with every prior CORE-tier basic-measures playbook
  on F-WF.
- **G-04 catalogue depth continues.** The two SKELETON triplets close
  the thinnest FOUNDATION-property corners on the catalogue; the
  named CORE / EXTEND follow-ons on each entry — coverage-matrix
  KPIs, hygiene-linter HIGH-finding-volume KRIs, residual-risk KRIs
  on LM endpoints classified `UNKNOWN` by the shared guard, per-
  section coverage matrices on the GDPR lawful-basis lane — walk on
  their own cards.

The accurate claim on this wave is: G-04 catalogue maturity now
declares an honest signal across the four FOUNDATION properties, the
patch_management workflow lane carries its deterministic-primitives
core and its first two KPI/KRI catalogue entries against the
patch-application evidence stream, and the patch-application evidence
schema stands alone on `schemas/evidence/patch.schema.json`. The
CORE-FANOUT siblings and the cookbook walkthrough on F-WF-PATCH walk
on their own cards behind the row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the G-04 + F-WF-PATCH wave across
  [PR #525](https://github.com/secops-ng/secops-ng-framework/pull/525),
  [PR #526](https://github.com/secops-ng/secops-ng-framework/pull/526),
  [PR #527](https://github.com/secops-ng/secops-ng-framework/pull/527),
  [PR #528](https://github.com/secops-ng/secops-ng-framework/pull/528),
  and [PR #529](https://github.com/secops-ng/secops-ng-framework/pull/529).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-five that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Five PRs close this window. G-04 catalogue maturity hardens on the
four FOUNDATION properties — the `foundation_property` back-fill turns
`main` green and restores the catalogue-coverage KRI signal, and the
two SKELETON triplets close the thinnest determinism and sovereignty
corners on substrate already shipped. F-WF-PATCH lands its
deterministic-primitives core behind the canonical CACAO source, and
the patch-application evidence stream picks up its first two catalogue
entries. The CORE-FANOUT siblings and the EXTEND-DOCS cookbook on
F-WF-PATCH walk on their own cards behind the row.
