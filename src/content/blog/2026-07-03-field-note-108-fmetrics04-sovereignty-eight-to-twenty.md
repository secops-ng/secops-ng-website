---
title: "Field note #108 — sovereignty-axis metrics expand from eight to twenty (F-METRICS-04 EXTEND, PR #611)"
description: "Field note one hundred and eight from the SecOps-NG Digital Commons. Twelve new sovereignty-axis KPI/KRI definitions land under content/metrics/ — the largest single expansion of the catalogue to date. Operators drop EU-resident endpoint monitoring, AI-provider neutrality enforcement, and storage residency verification straight into their dashboards without writing the linkage themselves."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "g-05", "metrics", "sovereignty", "kpi", "kri", "ocsf", "foundation-properties", "digital-commons", "field-note-108"]
---

Field note one hundred and eight. This morning framework PR #611
(F-METRICS-04 EXTEND) squash-merged into `main`, and the
sovereignty axis of the KPI/KRI catalogue moved from eight
definitions to twenty in a single wave. Twelve new entries land
under `content/metrics/`, each one carrying an OCSF-source
identifier, a calculation method, threshold bands, and the
regulatory anchor it defends. It is the largest single expansion
of the metrics catalogue since the axis opened, and it moves
sovereignty from "a property we describe" to "a property CI can
guard by number".

## What shipped

Twelve KPI/KRI definitions with `foundation_property: sovereignty`,
each one a `.yaml` next to a sibling `.viz.md` carrying a Mermaid
reference rendering, a threshold-band table, and the source-data
shape it consumes. The set breaks into four functional clusters:

- **AI-provider neutrality.**
  `kri.non_eu_lm_endpoint_escape_rate` measures how often an
  LM endpoint tagged NON_EU crosses onto the merge stream.
  `kpi.ai_provider_neutral_binding_ratio` measures the indirection
  ratio behind the `LM_ENDPOINT` binding — the higher the ratio,
  the harder it is for a single non-EU provider to become
  load-bearing without CI noticing.
- **Data residency and cross-border exposure.**
  `kpi.eu_data_residency_declaration_coverage` walks the
  declaration surface for presence.
  `kri.cross_border_transfer_exposure_count` counts GDPR
  Chapter V exposure.
  `kpi.sovereign_object_storage_binding_coverage` tracks how much
  of the object-store binding surface resolves to EU-resident
  storage.
- **Supply-chain sovereignty.**
  `kri.non_eu_vendor_sdk_exposure` counts historical vendor-SDK
  footprint on the codebase.
  `kri.non_eu_critical_dependency_count` counts non-EU critical
  dependencies on the build graph.
  `kri.hardcoded_non_eu_endpoint_reference_count` counts
  static-literal non-EU endpoint references that slipped past
  the binding layer.
- **Operational independence and reference-target coverage.**
  `kpi.sovereign_cloud_provider_diversity` measures the mix
  across Hetzner, OVH, Scaleway, and Nebul.
  `kpi.non_eu_saas_free_workflow_ratio` measures how much of the
  operational workflow surface runs without a non-EU SaaS
  dependency.
  `kpi.reference_deployment_target_coverage` measures the
  n8n / Temporal / LangGraph reference-target ring.
  `kpi.eu_regulatory_reference_coverage` measures GDPR / NIS2 /
  DORA / CRA anchor coverage across the anchored playbook set.

Each definition carries an OCSF source identifier and a
calculation method that is executable, not aspirational. Each one
sits next to a `.viz.md` that renders the KPI/KRI as a Mermaid
diagram with a threshold-band table — the same shape every other
entry on the catalogue uses. The regulatory anchor set is GDPR
Chapter V, NIS2 Article 21(2)(d), and ENISA cloud guidance.

The extension is pure content addition — no schema changes, no
compiler changes. Tests: 3949 passed, three skipped, twenty-one
xpassed. Hygiene linter: no findings.

## Why the axis expansion matters

The metrics catalogue is how operators measure their own posture,
not just implement playbooks. A control map tells you which
clauses apply and which playbooks satisfy them. A metric tells
you whether the thing you shipped is holding — as a number, at a
threshold, on a dashboard, in CI.

Sovereignty is one of the four FOUNDATION properties of the
commons — the others are auditability, determinism, and
operability. Each is a property the framework promises about
itself, and each becomes real only when there is a KRI that will
fail loudly when the property degrades. Before this wave,
sovereignty had eight KPI/KRI entries — enough to describe the
property, not enough to cover it. After the wave, twenty. Enough
that an operator running the anchored playbook set on a
sovereign-EU dashboard can answer, per-metric:

- Is the LM-endpoint surface still EU-resident this week?
- Has an operator hardcoded a non-EU endpoint bypassing the
  binding layer?
- Has a critical dependency moved out of the EU jurisdiction?
- Is the object-store binding still resolving to EU-resident
  storage?
- Does the deployment-target ring still cover all three reference
  runtimes?

The value is not that twenty is a magic number. It is that a
degradation on any one of these signals now fails a CI check
rather than living in a controls document that no one reads
between audits. Sovereignty took a major step from aspirational
property to guarded property.

## The per-property authoring pattern

The wave is also a demonstration of the per-property metric
authoring pattern the catalogue has settled on. Every entry on
the axis carries the same shape:

- A `.yaml` with `foundation_property: sovereignty`, an OCSF
  source identifier, a calculation method, threshold bands, and a
  regulatory anchor set.
- A sibling `.viz.md` with a Mermaid reference rendering, a
  threshold-band table, and the source-data-shape section that
  makes the metric wire-compatible with an existing telemetry
  pipeline.
- A parametrized viz test in `tests/content/test_metrics_reference_viz.py`
  that exercises the entry against the schema and the reference
  rendering, so the CI guard catches drift the moment an entry
  falls out of shape.

That pattern is copyable by contributors. The wave that landed
today is the pattern applied twelve times over one property. The
same pattern applied to auditability, determinism, and
operability will get those three FOUNDATION properties to the
same level of coverage — twenty or more well-defined signals
each, with `.viz.md` siblings, threshold bands, and a
regulatory-anchor set.

## What the Digital Commons is doing with this

The sovereignty axis is now at parity with what the catalogue
promises: enough KRIs to guard the property in CI, and enough
KPIs to render the posture on a dashboard without hand-authoring
linkage. The pattern is on the shelf, documented, and validated
by the wave.

For contributors and operators on the commons, the practical
posture is:

- **Building a sovereign-EU dashboard?** The twenty sovereignty
  entries under `content/metrics/` are ready to bind against an
  OCSF-shaped source. Each `.viz.md` shows what the reference
  rendering looks like, and the `.yaml` documents which OCSF
  fields the calculation method reads.
- **Contributing a new sovereignty signal?** The authoring
  pattern is in place. Follow the shape of any of the twelve
  entries that landed in PR #611. The schema, the viz test, and
  the hygiene linter will keep you honest at PR time.
- **Working on one of the other three FOUNDATION properties?**
  The pattern applies. Determinism, auditability, and operability
  each get the same treatment on the roadmap — schema-first, viz
  siblings, threshold bands, regulatory anchors where the
  property has one, CI guards where it does not.

## Where to look

- `secops-ng-framework` on GitHub — PR #611 on `main`, twelve new
  KPI/KRI entries under `content/metrics/`.
- `content/metrics/_schema` — the KPI/KRI schema every entry on
  the catalogue conforms to, including the `foundation_property`
  key that lets a query slice the catalogue by property.
- `tests/content/test_metrics_reference_viz.py` — the
  parametrized viz test that keeps every entry wire-compatible
  with its `.viz.md` sibling.
- Prior field notes #90, #91, #93, #94, #95 — the earlier
  sovereignty-axis and OCSF-binding waves that this expansion
  builds on.

Twelve new signals, one shape, four properties on the roadmap.
The catalogue is how the commons measures its own posture, and
sovereignty just moved from described to measured.

— the SecOps-NG commons
