---
title: "Field note #69 — F-MAP-CRA mapping-closure wave lands and the orphan-CI assertion generalises across CRA, NIS2, and DORA (standards coverage is now enforced, not aspirational)"
description: "Sixty-ninth field note from the SecOps-NG Digital Commons: the F-MAP-CRA mapping-closure wave lands on the framework — every finalized playbook now carries Cyber Resilience Act per-clause mappings, the orphan-CI assertion that started life on the CRA mapping tree is now generalised across CRA, NIS2, and DORA, and the F-G02 inbound-closure work begins to fill the DORA Article 6 and Article 9 gaps named in field note #68."
pubDate: 2026-06-21
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-map-cra", "f-map-nis2", "f-map-dora", "mappings", "orphan-ci", "g-02-kri", "cra", "nis2", "dora", "oscal", "d3fend", "digital-commons", "ci-guard", "audit-readable"]
---

The previous field note read the F-G02 outbound mappings overlay
wave closing across the workflow catalogue: every finalized
playbook now carries a validated `mappings.yaml`, with a
completeness CI guard standing behind the set. The honest framing
on depth named two next passes — the EXTEND pass on each row, and
the inbound-closure work for the rows that named documented gaps.

This note reads the next window of work landing on `main`. The
Cyber Resilience Act mapping layer closes out, the nightly
orphan-CI assertion that started life on the CRA mapping tree is
now generalised across three regulatory regimes, and the
inbound-closure work on the F-G02 DORA gaps named in field note
#68 starts to land. Taken together: standards coverage across the
catalogue is now machine-checked, not aspirational. Any future
finalized playbook that ships without a Cyber Resilience Act,
NIS2, or DORA mapping fails CI with the offending slug named.

## What landed in this window

Three lanes of work, each touching mapping-layer hygiene:

### F-MAP-CRA mapping-closure wave (PRs #402–#412)

A sweep across the Cyber Resilience Act mapping tree that takes
every finalized playbook in the catalogue from "outbound CRA
array carries gap-narrative" to "outbound CRA array names a
specific Annex I §1, Annex I §2, or Article 13 clause against an
inbound anchor that covers it":

- **mapping coverage inventory + Art.13(6) third-party vuln awareness**
  ([PR #402](https://github.com/secops-ng/secops-ng-framework/pull/402))
  — the inventory pass that enumerates the orphan set and opens
  the per-row closures behind it.
- **Annex I §1(d) JML inbound + onboarding_offboarding_tracker closure**
  ([PR #403](https://github.com/secops-ng/secops-ng-framework/pull/403)).
- **Annex I §1(b) secure-by-default — infra_posture_management drift-detection pin**
  ([PR #404](https://github.com/secops-ng/secops-ng-framework/pull/404)).
- **Art.13(12) SPOC after-hours — on_call_rotation closure**
  ([PR #405](https://github.com/secops-ng/secops-ng-framework/pull/405)).
- **Art.13(2)–(3) risk-assessment metrics inbound + executive_metrics outbound**
  ([PR #406](https://github.com/secops-ng/secops-ng-framework/pull/406)).
- **Art.13(12) SPoC — it_security_support_agent closure**
  ([PR #407](https://github.com/secops-ng/secops-ng-framework/pull/407)).
- **Art.13(4) component due diligence — contractual_obligations_tracker closure**
  ([PR #408](https://github.com/secops-ng/secops-ng-framework/pull/408)).
- **Annex I §2(2) vuln-handling — phishing_triage closure**
  ([PR #409](https://github.com/secops-ng/secops-ng-framework/pull/409)).
- **Annex I §1(d) access-control iam_auditor inbound pin**
  ([PR #410](https://github.com/secops-ng/secops-ng-framework/pull/410)).
- **Annex I §1(l) logging-and-monitoring — detection_engineering closure**
  ([PR #411](https://github.com/secops-ng/secops-ng-framework/pull/411)).
- **Annex I §1(l) logging-and-monitoring — alert_triage closure**
  ([PR #412](https://github.com/secops-ng/secops-ng-framework/pull/412)).

Each closure pairs an inbound mapping file under
`content/mappings/cra/` with the outbound `cra:` block on the
playbook overlay. After this wave, every finalized-CACAO playbook
under `content/playbooks/` carries Cyber Resilience Act mappings
that name an Annex I §1, Annex I §2, or Article 13 clause —
where previously several rows carried explicit gap narrative
naming the missing inbound anchor.

### F-MAP-CRA EXTEND — depth and orphan-CI on the CRA tree (PRs #413–#415)

Three EXTEND passes on the CRA mapping layer that turn the
breadth pass into a defended layer:

- **orphan-CI assertion + G-02 KRI emitter SKELETON**
  ([PR #413](https://github.com/secops-ng/secops-ng-framework/pull/413))
  — a nightly assertion that walks the CRA mapping tree and
  fails the build if any finalized playbook lacks an outbound
  CRA mapping, with the orphan slug named. The G-02 ("standards
  coverage") KRI emitter ships in SKELETON form, surfacing the
  orphan count as a residual-risk metric that downstream
  consumers can bind against.
- **playbook-mappings cra: block + outbound pins**
  ([PR #414](https://github.com/secops-ng/secops-ng-framework/pull/414))
  — the EXTEND-i depth pass that adds typed `cra:` blocks across
  the overlay set with the per-clause outbound pins the CORE
  wave landed.
- **D3FEND xref props on Annex I §1 and Art.13 IRs**
  ([PR #415](https://github.com/secops-ng/secops-ng-framework/pull/415))
  — the EXTEND-ii depth pass that adds D3FEND cross-reference
  properties to the inbound Annex I §1 and Article 13 mapping
  rows. A reader of the inbound CRA tree can now jump from a
  Cyber Resilience Act clause to the MITRE D3FEND techniques
  that discharge the obligation, in addition to the playbooks
  that discharge it.

### F-MAP-NIS2 / F-MAP-DORA — orphan-CI generalised across regimes (PRs #416–#417)

The orphan-CI assertion that started life on the CRA mapping tree
in [PR #413](https://github.com/secops-ng/secops-ng-framework/pull/413)
now generalises across two further regulatory regimes:

- **generalise orphan-CI assertion + wire nis2 mapping tree**
  ([PR #416](https://github.com/secops-ng/secops-ng-framework/pull/416))
  — the assertion is refactored into a parametrised helper that
  takes a regime name (`cra`, `nis2`, `dora`, …) and a mapping
  tree root, and the NIS2 mapping tree is wired into it. The
  G-02 KRI emitter ships in SKELETON form against the NIS2
  surface alongside.
- **wire DORA into the parametrised orphan-CI helper**
  ([PR #417](https://github.com/secops-ng/secops-ng-framework/pull/417))
  — the DORA mapping tree is wired into the same parametrised
  helper, completing the three-regime span.

After this pair, the nightly assertion enumerates the
finalized-CACAO playbook set against each of the three regimes
(CRA, NIS2, DORA) and fails the build if any row ships without
an outbound mapping against any of them, with the regime name
and the offending slug both named in the failure message.

### F-G02 inbound-closure — DORA Article 6 and Article 9 (PRs #400–#401)

The DORA inbound-closure work named as a next pass in field
note #68 starts to land:

- **Art. 9 access-management inbound + iam_auditor outbound pin**
  ([PR #400](https://github.com/secops-ng/secops-ng-framework/pull/400))
  — the worked-example gap from field note #68. The
  `iam_auditor` overlay no longer leaves the outbound DORA array
  empty against a narrative gap-note; it pins
  `dora:art-9:access-management` against the inbound anchor that
  now exists at
  `content/mappings/dora/article-9-access-management.yaml`.
- **Art. 6 governance inbound + on_call_rotation outbound pin**
  ([PR #401](https://github.com/secops-ng/secops-ng-framework/pull/401))
  — a parallel closure: the on_call_rotation overlay pins
  against the new DORA Article 6 governance inbound anchor.

## Where the catalogue sits at wave-close

At wave-close on framework `main`:

- **Every finalized playbook carries a Cyber Resilience Act
  mapping.** The orphan set on the CRA tree is empty. The CRA
  surface joins NIS2, DORA, OSCAL, D3FEND, and OCSF as a
  cross-link the catalogue carries on every row.
- **A nightly orphan-CI assertion spans three regulatory
  regimes.** The parametrised helper walks the CRA, NIS2, and
  DORA mapping trees on every CI run; if any future finalized
  playbook lands without an outbound mapping against any of the
  three, the build fails with the regime and slug named.
- **The G-02 KRI emitter ships in SKELETON across all three
  regimes.** The orphan count under each of CRA, NIS2, and DORA
  is surfaced as a residual-risk metric a downstream consumer
  can read structurally. The EXTEND pass on the emitter — depth,
  thresholding, evidence-pointer — opens as a subsequent pass.
- **The F-G02 inbound-closure work moves on its first two rows.**
  The DORA Article 9 access-management gap named on `iam_auditor`
  as the worked-example in field note #68 is closed; the DORA
  Article 6 governance closure lands alongside on
  `on_call_rotation`. Sibling DORA and NIS2 gaps on other rows
  remain — these are the next inbound-closure passes.

## Why machine-checked standards coverage matters

A regulated operator meeting the EU regulatory baselines — NIS2,
DORA, the Cyber Resilience Act, GDPR — is repeatedly asked the
same shape of question: which of your operational capabilities
discharges this obligation, where is the evidence, and where do
you have gaps. The free-text answer carries the question back
unanswered; the catalogue-bound answer carries it forward.

The orphan-CI assertion is the structural defence against the
specific failure mode where a new playbook lands in the
catalogue and silently ships without a regulatory cross-link.
Without the assertion, "every finalized playbook carries
mappings against CRA, NIS2, and DORA" is a snapshot claim — true
on the day the wave closes, drifting from the day a new playbook
merges. With the parametrised assertion in place across the
three regimes, the claim is a defended property: an operator
reading the catalogue tomorrow, or in three months, can rely on
the property holding because CI fails the build if it doesn't.

The G-02 KRI emitter is the same property, read from the other
side. An operator running the catalogue inside their own
governance reporting can bind against the residual-risk metric
the framework publishes — the count of catalogue rows with
unfilled regulatory mappings — rather than asserting coverage
out of band.

## Honest framing on depth

The depth pass on the EXTEND lane is still in flight. The
overlays now name the controls and clauses each playbook
discharges, and the inbound tree across CRA, NIS2, and DORA now
holds the anchors those outbound pins resolve against. What is
not yet uniformly present on every row:

- **Per-mapping rationale binding the identifier to the evidence
  artifact the playbook emits.** The CRA EXTEND-i pass adds the
  typed `cra:` block; per-row rationale binding the clause to a
  specific step or output of the playbook is the next pass.
- **Threshold and direction on the G-02 KRI.** The emitter
  ships in SKELETON form on each of the three regimes — it
  surfaces the orphan count as a metric. The EXTEND pass on the
  emitter names the threshold a regulated operator should hold
  it at and the direction the threshold is read in.
- **Inbound closure on the remaining gap-carrying rows.** The
  DORA Article 9 and Article 6 closures land in this window;
  sibling DORA and NIS2 gaps live on other rows and are named
  in the overlay headers where they exist.

The accurate claim across the catalogue is therefore: every
shipped finalized-CACAO playbook now carries CRA, NIS2, and DORA
outbound mappings; the orphan-CI assertion defends the property
across all three regimes on every CI run; the G-02 KRI emitter
surfaces the orphan count as a structured residual-risk metric;
and the inbound-closure work fills the gap rows one at a time
behind the CI guard.

## Where this leaves a reader of the catalogue

A reader of the catalogue today resolves the following:

- A jump from any shipped playbook to the OSCAL controls, MITRE
  D3FEND techniques, OCSF event classes, and NIS2 / DORA / CRA
  clauses it discharges — pinned to public catalogues.
- A reverse jump from a CRA, NIS2, or DORA clause to the
  playbooks that discharge it, including the new D3FEND
  cross-reference properties on the CRA Annex I §1 and Article
  13 inbound rows.
- A structured residual-risk metric — the G-02 orphan count
  under each of the three regimes — that downstream consumers
  can bind against.
- A defended property — the orphan-CI assertion — that holds
  the coverage closed across CRA, NIS2, and DORA on every CI
  run.

## What's open behind this wave

- **F-G02 inbound-closure on the remaining gap rows.** Sibling
  DORA and NIS2 gaps on other catalogue rows are next, behind
  the two closures that land in this window.
- **F-MAP-CRA EXTEND-iii.** The orphan-CI assertion lands in
  SKELETON form in [PR #413](https://github.com/secops-ng/secops-ng-framework/pull/413);
  the EXTEND-iii pass takes the G-02 KRI emitter from SKELETON
  to threshold-bearing.
- **F-G02 fan-out to the sovereignty-lane rows.** The
  sovereignty-lane playbooks (eIDAS 2.0 wallet, DORA Article 19
  report variant) carry outbound mappings on their own lanes
  and join the catalogue-wide orphan-CI defended set behind
  this wave.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-MAP-CRA mapping-closure wave runs
  [PR #402](https://github.com/secops-ng/secops-ng-framework/pull/402)
  through
  [PR #412](https://github.com/secops-ng/secops-ng-framework/pull/412);
  the F-MAP-CRA EXTEND passes run
  [PR #413](https://github.com/secops-ng/secops-ng-framework/pull/413),
  [PR #414](https://github.com/secops-ng/secops-ng-framework/pull/414),
  and
  [PR #415](https://github.com/secops-ng/secops-ng-framework/pull/415);
  the orphan-CI generalisation runs
  [PR #416](https://github.com/secops-ng/secops-ng-framework/pull/416)
  and
  [PR #417](https://github.com/secops-ng/secops-ng-framework/pull/417);
  the F-G02 inbound-closure on the DORA gaps named in field
  note #68 runs
  [PR #400](https://github.com/secops-ng/secops-ng-framework/pull/400)
  and
  [PR #401](https://github.com/secops-ng/secops-ng-framework/pull/401).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-eight that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community
  lane, the auto-generated roadmap.

Two waves on the mapping layer moved in this window. The Cyber
Resilience Act mapping tree closes: every finalized playbook
carries CRA per-clause mappings, defended by the orphan-CI
assertion the EXTEND-iii lane lands in SKELETON form. The same
assertion then generalises across NIS2 and DORA, taking the
catalogue from "standards coverage is asserted" to "standards
coverage is enforced." The F-G02 inbound-closure work begins
filling the DORA gaps named in field note #68. The EXTEND
depth pass on the KRI emitter and the inbound-closure work on
the remaining DORA and NIS2 gap rows open as the next passes
on the lane.
