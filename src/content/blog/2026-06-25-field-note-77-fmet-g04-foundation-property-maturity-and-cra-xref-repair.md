---
title: "Field note #77 — the F-MET G-04 catalogue declares a required, audited FOUNDATION-property classification on every shipped KPI/KRI, and the F-MAP-CRA cross-reference red-CI gap closes"
description: "Seventy-seventh field note from the SecOps-NG Digital Commons: five PRs against the framework walk the executive-metrics catalogue (G-04) to a maturity milestone — every one of the forty-four shipped KPIs and KRIs now carries a required, audited foundation_property classification (auditability / determinism / sovereignty / operability), backed by a CI coverage guard, with the schema field promoted from optional to required. The same wave closes the last governance/process residual cluster on the OCSF source-data-shape binding axis and lands the six missing F-MAP-CRA control cross-reference files behind the recent NIS2/DORA/CRA/GDPR mapping wave."
pubDate: 2026-06-25
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-met", "f-map", "metrics", "kpi", "kri", "g-04", "g-02", "foundation", "foundation-property", "ocsf", "ocsf-binding", "cra", "control-xref", "d3fend", "digital-commons", "audit-readable"]
---

The previous field note read the F-MET G-04 OCSF source-data-shape
binding axis closing across the remaining executive-metrics clusters
in seven PRs against the framework, every shipped KPI/KRI on the
catalogue floor declaring its concrete OCSF event source on both the
`.viz.md` sibling and the metric YAML `measurement.inputs[]`
back-reference. The accurate claim on that row was *the binding axis
reaches floor across both surfaces*; the question of which of the
four non-negotiable FOUNDATION properties each metric actually
evidences was still implicit prose behind the row.

This note reads the closeout of that gap. Five PRs against the
framework walk the executive-metrics catalogue to a maturity
milestone: every one of the forty-four shipped KPIs and KRIs now
carries a required, audited `foundation_property` classification on
the catalogue YAML, the schema field is promoted from optional to
required, and a CI coverage guard mechanically enforces that the
catalogue covers all four FOUNDATION properties — auditability,
determinism, sovereignty, operability. The same wave closes the last
governance/process residual cluster on the OCSF binding axis and
lands the six missing F-MAP-CRA control cross-reference files the
recent NIS2/DORA/CRA/GDPR mapping wave had referenced but never
populated, taking that red-CI signal back to green.

## What landed in this window

Five PRs against the framework, all merged to `main`.

### Governance/process residual cluster — last OCSF binding (PR #472)

[PR #472](https://github.com/secops-ng/secops-ng-framework/pull/472)
lands OCSF source-data-shape bindings on the governance/process
residual cluster — the backup-integrity, control-effectiveness, and
the broader governance-process metrics the previous closeout wave
had left as the last open dimension. The binding reads against the
OCSF file-activity event class on the backup-verification side (the
ransomware-containment playbook's file-system activity emission
carries the backup-integrity pass signal) and against the
OCSF compliance-finding event class on the per-control attestation
side (the in-scope set on the `compliance.control` attribute, the
effectiveness state on `compliance.status_id`). After this PR, the
OCSF-binding wave is complete — 44/44 metrics in `content/metrics/`
declare an OCSF source-data shape on both the `.viz.md` sibling and
the metric YAML.

### FOUNDATION-property classifier — SKELETON (PR #473)

[PR #473](https://github.com/secops-ng/secops-ng-framework/pull/473)
opens a new dimension on the catalogue: a `foundation_property`
classifier field that names which of the four FOUNDATION properties
documented in `docs/FOUNDATION.md` — auditability, determinism,
sovereignty, operability — each catalogue entry actually evidences.
The field is a list (a metric MAY serve more than one property) and
is OPTIONAL in this SKELETON wave. A representative seed set is
tagged across the four properties, and a nightly-style coverage
assertion under `tests/content/` mechanically enforces the G-04 KRI
contract: *the catalogue must cover all four FOUNDATION properties*.
Until the CORE wave lands the sovereignty seed, the full-coverage
assertion is honestly xfailed (strict=False) with a reason that
names the gap rather than weakening the assertion. The xfail flips
to passing the moment CORE lands.

### Catalogue-wide backfill — CORE (PR #474)

[PR #474](https://github.com/secops-ng/secops-ng-framework/pull/474)
tags every entry under `content/metrics/*.yaml` (all 44 files) with
an accurate `foundation_property` value per `docs/FOUNDATION.md`.
Multi-valued where the metric genuinely evidences more than one
property; single-valued where one property dominates. The
sovereignty seed lands on two entries that legitimately evidence
the property:

- `backup_integrity_pass_rate` — operator-controlled recovery
  capability independent of any single vendor control plane (the
  restore drill is the operator's, not a service provider's), which
  is the NIS2 Article 21(2)(d) data backup management contract read
  honestly.
- `cloud_posture_coverage` — vendor-neutral over the posture-evaluator
  surface, directly addressing the FOUNDATION sovereignty section
  on EU-hostable, vendor-portable data planes.

The G-04 union-coverage xfail from PR #473 flips to passing on the
moment this PR lands — the catalogue mechanically evidences all four
FOUNDATION properties, not just three.

### Schema promotion — EXTEND (PR #475)

[PR #475](https://github.com/secops-ng/secops-ng-framework/pull/475)
promotes `foundation_property` from optional to REQUIRED in the
catalogue schema. The backfill from PR #474 makes the promotion
non-breaking on current content (every entry already carries the
field) and locks the coverage invariant for all future contributions
— a new metric without a `foundation_property` declaration is a
schema-level CI failure rather than a reviewer-side reminder.

The accompanying test pivot replaces the SKELETON-wave *at least one
entry declares* assertion with a per-entry presence guard, so the
YAML side guards the invariant independently of the schema. Two
independent guards on the same property is the contract every
catalogue invariant carries on this lane — schema and tests both
read.

### F-MAP-CRA control-xref red-CI repair (PR #476)

[PR #476](https://github.com/secops-ng/secops-ng-framework/pull/476)
closes a red-CI gap on the F-MAP-CRA lane. Two CORE mappings —
Annex I §1(d) access-control and Annex I §1(b) secure-by-default —
referenced six `control_xref` files that had never been populated,
which broke the xref-lint invariant *every `control_ref` used by
`content/mappings/` must resolve to a populated cross-reference file*.

The PR creates the six missing control_xref YAMLs under
`content/controls/`, each conforming to the
`control_xref.schema.json` shape: a NIST 800-53 anchor, a D3FEND
technique anchor, and the prose the cross-reference carries:

- `control.access_enforcement@v1` — NIST AC-3 / D3-AM (the D3FEND
  swap from the initial D3-MAC choice was a Custodian-side revision
  on the PR, picking the technique anchor that reads more honestly
  against the access-enforcement surface).
- `control.account_management@v1` — NIST AC-2 / D3-LAM.
- `control.least_privilege@v1` — NIST AC-6 / AC-6(7) / D3-LFP.
- `control.service_identification_authentication@v1` — NIST IA-9 /
  IA-5 / D3-CBAN.
- `control.baseline_configuration@v1` — NIST CM-2 / CM-2(2) /
  D3-SCP.
- `control.configuration_settings@v1` — NIST CM-6 / CM-7 / D3-SCP.

The full `tests/content/` suite is green after the repair (659
passed, 0 failed). The F-MAP-CRA Annex I lane the recent
NIS2/DORA/CRA/GDPR mapping wave opened now reads through to
populated cross-reference files on every control it references.

## Why the FOUNDATION-property axis matters at floor

The four FOUNDATION properties — auditability, determinism,
sovereignty, operability — are the non-negotiable contract the
project declares on every artifact it ships. They are documented at
`docs/FOUNDATION.md`, they read on every PR review, and they are
what makes the published content usable inside a regulated EU
environment without re-derivation against the maintainers'
infrastructure.

Before this wave, the executive-metrics catalogue read the four
properties as implicit prose behind the row — a reviewer or an
auditor reading a given KPI/KRI had to reason which of the four
properties the metric actually evidenced from the metric's
definition and intent rather than from a structured field on the
artifact. After this wave, every catalogue entry declares the
property (or properties) it evidences as a structured, schema-required
field, the catalogue mechanically covers all four properties via a
union-coverage CI guard, and a new contribution cannot land without
declaring its property alignment.

The audit-side reading is now structural rather than prose-side: a
regulator or community reviewer asking *does the catalogue
mechanically evidence the sovereignty property?* reads the answer
off the artifact's structured field plus the union-coverage
assertion, not off a maintainer's prose interpretation behind the
row. The catalogue declares the property; the artifact carries it;
the audit verifies it.

For the three reference compile targets — n8n, Temporal, and
LangGraph — the property classification is portable on the same
contract every other catalogue field carries: each compile reads
the field directly off the canonical YAML rather than re-deriving
the property alignment per-target. The FOUNDATION contract the
project declares on every artifact now reads structurally on every
G-04 row.

## Honest framing on what stays open behind the row

The maturity milestone the G-04 catalogue reaches on this wave is
the structural completion of the FOUNDATION-property classification
axis and the OCSF source-data-shape binding axis at floor across all
44 entries. The lane:

- **Per-property minimum-coverage floor (in review).** The
  union-coverage CI guard the SKELETON+CORE waves landed asserts
  that the catalogue covers all four FOUNDATION properties at
  least once. A follow-on EXTEND pass to raise the per-property
  floor (every property is evidenced by at least N entries, not
  just one) is in review and is not announced as shipped on this
  row. The next field note picks it up once it merges.
- **The other governance lanes — F-MAP, F-CTL, F-ART.** The G-04
  executive-metrics lane reaches floor on both the OCSF-binding and
  the FOUNDATION-property axes. The other lanes carry their own
  def-of-done properties and walk on their own cadences; the cluster
  pattern this lane established (SKELETON classifier → CORE
  backfill → EXTEND required-schema → CI guard) is the recipe the
  other lanes follow rather than a one-shot result.
- **F-MAP-CRA xref-repair is a gap-close, not a new mapping.** The
  six control_xref files PR #476 lands populate references the
  prior NIS2/DORA/CRA/GDPR mapping wave had already declared. They
  carry the same NIST + D3FEND anchor shape every populated xref
  carries; they are not new control mappings, they are the
  cross-reference files behind the mappings the catalogue already
  reads.

The accurate claim on this row is: the F-MET G-04 executive-metrics
catalogue now declares a required, audited FOUNDATION-property
classification on every one of its forty-four shipped KPIs and KRIs,
backed by a CI coverage guard that mechanically enforces union
coverage of all four FOUNDATION properties; the OCSF source-data-shape
binding axis closes its last cluster (governance/process residual)
on the same wave so 44/44 metrics now carry an OCSF binding on both
the `.viz.md` sibling and the metric YAML; and the F-MAP-CRA Annex I
lane reads through to populated control cross-reference files on
every reference behind the row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the governance/process residual OCSF binding closeout lands at
  [PR #472](https://github.com/secops-ng/secops-ng-framework/pull/472);
  the FOUNDATION-property classifier SKELETON at
  [PR #473](https://github.com/secops-ng/secops-ng-framework/pull/473);
  the CORE backfill across all 44 catalogue entries at
  [PR #474](https://github.com/secops-ng/secops-ng-framework/pull/474);
  the schema promotion to required at
  [PR #475](https://github.com/secops-ng/secops-ng-framework/pull/475);
  and the F-MAP-CRA control-xref red-CI repair at
  [PR #476](https://github.com/secops-ng/secops-ng-framework/pull/476).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-six that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two beats close this window. The F-MET G-04 executive-metrics
catalogue declares a required, audited FOUNDATION-property
classification on every one of its forty-four shipped KPIs and KRIs,
backed by a union-coverage CI guard, with the OCSF binding axis
reaching floor on the last governance/process residual cluster on
the same wave so both def-of-done property axes the G-04 lane carries
now read at floor. And the F-MAP-CRA Annex I lane closes its
control-xref red-CI gap on six populated cross-reference files
behind the NIS2/DORA/CRA/GDPR mapping wave. The per-property
minimum-coverage floor on the FOUNDATION-property axis, the cluster
pattern walking into the other governance lanes (F-MAP, F-CTL,
F-ART), and the floor-wide CI guard joining `telemetry_refs[]` and
`.viz.md` coverage open as the next passes behind the row.
