---
title: "Field note #111 — determinism and operability land, FOUNDATION ring closes (F-METRICS-04, PR #613)"
description: "Field note one hundred and eleven from the SecOps-NG Digital Commons. Ten new KPI/KRI entries land under content/metrics/ — five on determinism, five on operability — closing the FOUNDATION-property ring on the catalogue. All four properties now carry threshold-guarded entries with viz siblings and reproducible source bindings."
pubDate: 2026-07-03
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "metrics", "determinism", "operability", "kpi", "kri", "foundation-properties", "digital-commons", "field-note-111"]
---

Field note one hundred and eleven. Framework PR #613
(F-METRICS-04 CORE, determinism + operability axes) squash-merged
into `main` this afternoon. Ten new entries land under
`content/metrics/` — five on the determinism axis, five on
operability — and with them the FOUNDATION-property ring closes
on the catalogue. Every one of the four properties the framework
promises about itself now has at least one KPI/KRI cluster with
threshold bands, a viz sibling, and a calculation method a CI
lane can enforce.

## What shipped

Ten KPI/KRI definitions, each a `.yaml` next to a sibling
`.viz.md` carrying a Mermaid reference rendering and a
threshold-band table.

Five entries on the determinism axis:

- **`kpi.replay_parity_rate`** — measures the share of playbook
  runs whose replay against the stored envelope reproduces the
  same terminal state. A replay that does not reproduce is a run
  whose determinism cannot be relied on tomorrow.
- **`kri.non_deterministic_step_count`** — counts steps that
  fail a determinism probe (wall-clock reads, unseeded random,
  ambient environment reads) inside a compiled artifact. The KRI
  is what fails loudly when a contributor lets an ambient
  dependency slip into a playbook step.
- **`kri.schema_version_drift_rate`** — measures the rate of
  content-schema-version drift across a run window. Drift is not
  wrong on its own, but a run that reads one schema version and
  emits another is a run whose replay contract needs a migration
  path, not silence.
- **`kpi.compiler_idempotency_pass_rate`** — measures the pass
  rate of the "compile twice, diff the artifact" check across
  the reference compilers. Idempotency is the property that
  makes a compiled artifact reviewable; the KPI keeps the check
  visible on a dashboard, not only in CI.
- **`kpi.golden_test_coverage`** — measures per-workflow
  byte-parity golden-test coverage across the compile targets.
  Golden tests are the durable contract between `content/` and
  `examples/`; the KPI names the ratio the catalogue expects an
  operator on the commons to hold to.

Five entries on the operability axis:

- **`kpi.runbook_self_sufficiency_score`** — measures the share
  of shipped playbooks whose runbook resolves to a runnable
  action without out-of-band knowledge. A playbook that only
  runs because someone remembers the trick is not operable.
- **`kpi.compile_target_coverage`** — measures the share of
  shipped playbooks that carry a compiled artifact under
  `examples/` for each of the three reference targets (n8n,
  Temporal, LangGraph). Coverage below the threshold band is
  the shape of a playbook that ships as prose but not yet as
  runnable content.
- **`kpi.dependency_free_ratio`** — measures the share of
  compiled artifacts whose dependency footprint is inside the
  commons-declared floor (standard-library, orchestrator-native
  primitives). A playbook that needs a private SDK to run is
  a playbook a sovereign operator cannot adopt without a fork.
- **`kpi.operator_onboarding_pass_rate`** — measures the pass
  rate of the documented first-run onboarding across the
  contributor toolkit shipped in F-CONTRIB-01. Onboarding that
  passes for the maintainers and fails for a first-time
  operator is a documentation failure, not an operator one; the
  KPI surfaces the gap.
- **`kri.mean_time_to_first_action`** — the MTTFA KRI: the
  measured time from `git clone` to the first successful
  playbook step, on a reference environment. A slow MTTFA is
  the operability signal that a contributor toolkit is drifting
  away from the reader who has not seen it before.

The extension is pure content addition — no schema changes, no
compiler changes. The wave lands the FOUNDATION-property ring
in the shape the roadmap named a quarter ago.

## The ring closes

The KPI/KRI catalogue is how operators on the commons measure
their own posture, not just implement playbooks. A control map
tells you which regulatory clauses apply and which playbooks
satisfy them. A metric tells you whether the property that made
the playbook trustworthy is still holding — as a number, at a
threshold, on a dashboard, in CI.

The commons carries four FOUNDATION properties: sovereignty,
auditability, determinism, and operability. Each is a property
the framework promises about itself, and each becomes real only
when there is a KRI that will fail loudly when the property
degrades. As of yesterday afternoon three of the four rows were
filled:

- **sovereignty** — twenty entries, extended under F-METRICS-04
  EXTEND (PR #611, field note #108).
- **auditability** — five entries, landed under F-METRICS-04
  CORE auditability (PR #612, field note #109).
- **determinism** — described in the schema and referenced by
  the roadmap, but without explicit catalogue entries.
- **operability** — same shape as determinism: described,
  referenced, not yet enforced by the catalogue.

That last pair is the gap this PR closes. With ten new entries
above, all four FOUNDATION properties now carry guard-quality
KPI/KRIs on the catalogue — enough that an operator can render
a FOUNDATION-property dashboard without hand-authoring the
linkage, and enough that CI can fail on any one property
degrading below its threshold band. The G-04 catalogue-maturity
KRI — "the catalogue covers all four FOUNDATION properties" —
now reads cleared.

The value is not the count. Five, ten, twenty entries per axis
— pick a number for a quarter and the catalogue will grow to
it. The value is the ring closing: no FOUNDATION property is
left as an aspirational adjective. Each has at least one number
CI can guard, at least one dashboard tile an operator can
watch, and at least one calculation method a contributor can
extend without inventing shape.

## The per-property authoring pattern, applied a fourth and fifth time

The determinism and operability waves are the same shape as the
sovereignty wave before them, and the auditability wave the day
prior. Every entry on the catalogue now carries:

- A `.yaml` with `foundation_property`, a source binding, a
  calculation method, threshold bands, and — where the property
  has a regulatory anchor — the anchor set.
- A sibling `.viz.md` with a Mermaid reference rendering, a
  threshold-band table, and the source-data-shape section that
  makes the metric wire-compatible with an existing telemetry
  pipeline.
- A parametrized viz test that exercises the entry against the
  schema and the reference rendering, so CI catches drift the
  moment an entry falls out of shape.

That pattern is now applied across four axes, four properties,
one catalogue. The next contributor adding a determinism KRI or
an operability KPI does not need to invent a shape — the shape
is on the shelf, documented, exercised by tests, and validated
by the wave that just landed.

## What operators on the commons can do with this

The catalogue is now at parity with what it promises: every
FOUNDATION property carries at least one KPI and at least one
KRI, each with a `.viz.md` sibling and a documented source
binding. For contributors and operators, the practical posture
is:

- **Building a FOUNDATION-property dashboard?** The catalogue
  under `content/metrics/` is ready to bind against a
  telemetry source across all four properties. The `.viz.md`
  sibling shows what the reference rendering looks like; the
  `.yaml` documents which source fields the calculation method
  reads.
- **Wiring MTTFA or replay parity into CI?** The threshold
  bands are documented on the entry. A single lane per KRI is
  usually enough to catch the regression the KRI is named for.
- **Extending an axis with your own thresholds?** Open a PR
  against `content/metrics/` following the shape of any entry
  that landed in PR #613. The commons treats external
  contributions the same as internal ones — the gates are the
  diff, the tests, and the hygiene linter, not the author.

That last one is the call this field note carries: the axes are
open. If your environment produces a determinism or operability
threshold that the current bands do not cover — a stricter
replay-parity floor for a regulated workload, a looser MTTFA
band for a first-time operator, a compile-target coverage rule
scoped to a subset of playbooks — the catalogue is where that
threshold belongs. Open a PR and extend the axis.

## Where to look

- `secops-ng-framework` on GitHub — PR #613 on `main`, ten new
  KPI/KRI entries under `content/metrics/`.
- `content/metrics/_schema` — the KPI/KRI schema every entry on
  the catalogue conforms to, including the `foundation_property`
  key that lets a query slice the catalogue by property.
- `docs/FOUNDATION.md` — the four non-negotiable properties the
  framework promises about itself, now each with a catalogue
  presence.
- Field note #108 — sovereignty axis expansion (PR #611).
- Field note #109 — auditability axis CORE (PR #612).

Ten new signals, one shape, four properties closed on the
catalogue. The FOUNDATION-property ring is complete.

— the SecOps-NG commons
