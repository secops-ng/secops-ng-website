---
title: "Field note #109 — auditability axis lands on the KPI/KRI catalogue (F-METRICS-04 CORE, PR #612)"
description: "Field note one hundred and nine from the SecOps-NG Digital Commons. Five auditability-axis KPI/KRI definitions land under content/metrics/, closing the fourth and final FOUNDATION-property axis on the catalogue. All four FOUNDATION properties — sovereignty, auditability, determinism, operability — now carry explicit, threshold-guarded catalogue entries with viz siblings and OCSF source bindings."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "auditability", "kpi", "kri", "ocsf", "foundation-properties", "digital-commons", "field-note-109"]
---

Field note one hundred and nine. Framework PR #612
(F-METRICS-04 auditability axis CORE) squash-merged into `main`
this afternoon, and with it the auditability axis of the
KPI/KRI catalogue moved from a described property to a measured
one. Five new entries land under `content/metrics/`, each one
carrying an OCSF source binding, a calculation method, threshold
bands, and the regulatory anchor it defends. It is the wave that
closes the FOUNDATION-property ring on the catalogue.

## What shipped

Five KPI/KRI definitions with `foundation_property: auditability`,
each one a `.yaml` next to a sibling `.viz.md` carrying a Mermaid
reference rendering, a threshold-band table, and the source-data
shape it consumes:

- **`kpi.audit_log_completeness_ratio`** — measures audit-log
  completeness across playbook step transitions. A missing entry
  in the trail is a gap the KPI surfaces before an auditor does.
- **`kpi.audit_log_tamper_evidence_coverage`** — measures the
  share of durable audit surfaces that carry a tamper-evidence
  signal (hash chain, signature, or durable timestamp anchor).
  A "yes, we log it" answer without tamper-evidence is not
  auditability; the KPI makes that distinction visible.
- **`kpi.audit_envelope_reverification_pass_rate`** — measures
  the pass rate of stored-envelope re-verification on completed
  playbook runs. The metric sits at the auditability/determinism
  boundary: a run whose envelope cannot re-verify tomorrow is a
  run whose audit trail cannot be trusted tomorrow.
- **`kpi.decision_trace_completeness_ratio`** — measures
  decision-trace completeness across playbook branch outcomes.
  Every branch a playbook can take should leave a durable trace;
  the KPI catches the branches where it does not.
- **`kri.provenance_chain_integrity_gap_count`** — counts
  provenance-chain breaks between compiled `examples/` artifacts
  and their `content/` source `stable_id`s. A break in the chain
  is the shape of an artifact whose lineage a reviewer cannot
  walk backward — an auditability regression by definition.

Each definition carries an OCSF source binding drawn from
`api_activity`, `compliance_finding`, `incident_finding`, and
`detection_finding`. Regulatory anchors: NIS2 Article 21(2)(j)
and DORA Article 10. The extension is pure content addition —
no schema changes, no compiler changes. Tests: 3979 passed,
three skipped, twenty-one xpassed. Hygiene linter: no findings.

## Why the ring closing matters

The KPI/KRI catalogue is how operators measure their own
posture, not just implement playbooks. A control map tells you
which clauses apply and which playbooks satisfy them. A metric
tells you whether the thing you shipped is still holding — as a
number, at a threshold, on a dashboard, in CI.

The commons carries four FOUNDATION properties:
sovereignty, auditability, determinism, and operability. Each is
a property the framework promises about itself, and each becomes
real only when there is a KRI that will fail loudly when the
property degrades. Before today the picture was uneven:

- **sovereignty** — twenty entries, wave-closed yesterday under
  F-METRICS-04 EXTEND (PR #611, field note #108).
- **determinism and operability** — previously covered, with
  guarding entries live on the catalogue.
- **auditability** — described in the schema and referenced by
  the roadmap, but without explicit catalogue entries.

That last row is the gap this PR closes. With the five
entries above, all four FOUNDATION properties now carry
guard-quality KPI/KRIs on the catalogue — enough that an
operator on the commons can render a FOUNDATION-property
dashboard without hand-authoring the linkage, and enough that
CI can fail on any one of them degrading below its threshold
band.

The value is not the count — five, twenty, whichever axis. The
value is the ring closing: no FOUNDATION property is left as
an aspirational adjective. Each has at least one number CI can
guard, at least one dashboard tile an operator can watch, and
at least one regulatory anchor an auditor can point to.

## The per-property authoring pattern, applied a fourth time

The auditability wave is the same shape as the sovereignty wave
before it, and the determinism and operability entries before
that. Every entry on the catalogue now carries:

- A `.yaml` with `foundation_property`, an OCSF source
  identifier, a calculation method, threshold bands, and a
  regulatory anchor set.
- A sibling `.viz.md` with a Mermaid reference rendering, a
  threshold-band table, and the source-data-shape section that
  makes the metric wire-compatible with an existing telemetry
  pipeline.
- A parametrized viz test in
  `tests/content/test_metrics_reference_viz.py` that exercises
  the entry against the schema and the reference rendering, so
  CI catches drift the moment an entry falls out of shape.

That pattern is now applied across four axes, four properties,
one catalogue. The next contributor adding an auditability KRI
does not need to invent a shape — the shape is on the shelf,
documented, exercised by tests, and validated by the wave that
just landed.

## Contribution note

This wave also lands as an external contribution to the
framework. The commons treats external contributions the same
as internal ones — schema-first, viz siblings, threshold bands,
regulatory anchors where the property has one, CI guards where
it does not. The gates are the diff, the tests, and the hygiene
linter, not the author. That the auditability ring closes on an
external contribution is exactly the shape the commons wants for
the FOUNDATION-property roadmap: the pattern is copyable, and
copying it produces catalogue-quality entries.

## What operators on the commons can do with this

The catalogue is now at parity with what it promises: every
FOUNDATION property carries at least one KPI and at least one
KRI, each with a `.viz.md` sibling and an OCSF source binding.
For contributors and operators, the practical posture is:

- **Building a FOUNDATION-property dashboard?** The catalogue
  under `content/metrics/` is ready to bind against an
  OCSF-shaped source across all four properties. The `.viz.md`
  sibling shows what the reference rendering looks like; the
  `.yaml` documents which OCSF fields the calculation method
  reads.
- **Adding a new auditability signal?** The authoring pattern
  is in place. Follow the shape of any of the five entries that
  landed in PR #612 — the schema, the viz test, and the hygiene
  linter will keep you honest at PR time.
- **Working on the next axis expansion?** Sovereignty went from
  eight entries to twenty in one wave. The same shape is
  copyable to any FOUNDATION property. The ring is closed; the
  next step is depth, not breadth.

## Where to look

- `secops-ng-framework` on GitHub — PR #612 on `main`, five new
  KPI/KRI entries under `content/metrics/`.
- `content/metrics/_schema` — the KPI/KRI schema every entry on
  the catalogue conforms to, including the `foundation_property`
  key that lets a query slice the catalogue by property.
- `tests/content/test_metrics_reference_viz.py` — the
  parametrized viz test that keeps every entry wire-compatible
  with its `.viz.md` sibling.
- Field note #108 — the sovereignty-axis expansion (PR #611)
  that preceded this wave.

Five new signals, one shape, four properties closed on the
catalogue. The FOUNDATION-property ring is complete.

— the SecOps-NG commons
