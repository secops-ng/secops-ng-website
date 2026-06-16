---
title: "Field note #53 — F-GD-01 GDPR data-flow ROPA mapping wave lands on `main`, a canonical seven-section template plus per-workflow data-flow docs for eight reference cookbook workflows, every entry pinning purpose / lawful basis / categories / recipients / retention / cross-border / data-subject rights against GDPR Art. 5(1)(b), Art. 6(1) and Art. 30 on the same framework-agnostic substrate"
description: "Fifty-third field note from the SecOps-NG Digital Commons: the F-GD-01 GDPR data-flow documentation wave — a canonical seven-section template under `content/mappings/gdpr/` plus populated per-workflow data-flow docs for the bulk of the reference cookbook catalogue — lands on framework `main`. Each per-workflow entry names the specific operational purpose under Art. 5(1)(b), the lawful basis under Art. 6(1), the categories of data subjects and personal data under Art. 30(1)(c), the recipients under Art. 30(1)(d), the retention rule under Art. 5(1)(e), the cross-border posture, and the data-subject rights surface — giving an operator a portable starting point for their own Art. 30 record of processing without having to invent the shape from scratch."
pubDate: 2026-06-16
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-gd-01", "gdpr", "data-flow", "ropa", "article-30", "article-5", "article-6", "data-protection", "cookbook", "workflows", "digital-commons"]
---

The continuous-posture side of the catalogue closed out in the last
two field notes — F-CP-05 crypto-attestation and F-CP-03 supply-chain
both flipped to Shipped on ROADMAP, every three-target CORE wave on
that side now sits closed with byte-parity goldens locking the
on-disk shape on every push. This note steps off that lane and reads
a different axis of the catalogue: the GDPR data-flow documentation
that sits next to the reference cookbook workflows themselves, under
the F-GD-01 lane on ROADMAP.

The F-GD-01 wave lands a canonical seven-section template under
`content/mappings/gdpr/` plus populated per-workflow data-flow docs
for the bulk of the reference cookbook catalogue. The shape is the
Art. 30 Record of Processing Activity entry — but at the granularity
the framework already works in, which is the individual workflow.

## What this note reads off `main`

### A canonical data-flow template, with phishing-triage filled in as the reference

Through
[PR #306](https://github.com/secops-ng/secops-ng-framework/pull/306),
the SKELETON of the F-GD-01 lane lands: a canonical template at
[`content/mappings/gdpr/_data-flow-template.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/content/mappings/gdpr/_data-flow-template.md)
that pins the seven sections every per-workflow entry has to carry,
and the phishing-triage data-flow doc filled in against that template
as the reference others copy from. The seven sections are pinned
against the GDPR clauses they correspond to so an operator reading
the doc against a regulator's question knows which article the
section answers:

- **Purpose** — Art. 5(1)(b), purpose limitation. Names the specific
  operational outcome the workflow exists to produce, not a generic
  "security operations" framing.
- **Lawful basis** — Art. 6(1). Names the primary basis the operator
  relies on (most security-operations workflows here are
  Art. 6(1)(f) legitimate interests; some carry Art. 6(1)(c) legal
  obligation as a secondary basis in regulated sectors) and flags
  any incidental special-category exposure under Art. 9.
- **Categories of data subjects and personal data** — Art. 30(1)(c).
  Enumerates who the data subjects are and what categories of
  personal data their records carry, specifically — not "personal
  data" as a blanket.
- **Recipients** — Art. 30(1)(d). Lists the internal teams,
  downstream playbooks, and any external processors that receive
  the personal data the workflow emits.
- **Retention** — Art. 5(1)(e), storage limitation. Names the
  retention period, the business reason for it, and the mechanism
  that enforces it (TTL, scheduled purge, sealed log rotation,
  evidence-pack expiry, parent-incident bound).
- **Cross-border transfers** — Art. 44–49. Records whether the
  workflow emits personal data outside the EEA, and on what legal
  basis. The sovereign-stack default for the cookbook workflows is
  "no transfer" — and the docs land carrying that default explicitly.
- **Data-subject rights** — Art. 12–22. Records how the operator
  surfaces access, rectification, erasure, restriction,
  portability, and objection requests against the data this
  workflow holds, and where the request lands operationally.

### Per-workflow data-flow docs across the reference cookbook catalogue

The wave then fans the template out across the reference cookbook
catalogue:

- Through
  [PR #307](https://github.com/secops-ng/secops-ng-framework/pull/307),
  three core triage and intake workflows land their data-flow docs
  on the same template — incident-management, alert-triage, and
  vuln-intake.
- Through
  [PR #308](https://github.com/secops-ng/secops-ng-framework/pull/308),
  the identity-compromise workflow lands its data-flow doc.
- Through
  [PR #309](https://github.com/secops-ng/secops-ng-framework/pull/309),
  the threat-intel-ingest workflow lands its data-flow doc.
- Through
  [PR #310](https://github.com/secops-ng/secops-ng-framework/pull/310),
  the ransomware-containment workflow lands its data-flow doc,
  carrying the Art. 30 ROPA shape end-to-end.
- Through
  [PR #311](https://github.com/secops-ng/secops-ng-framework/pull/311),
  the cloud-misconfiguration workflow lands its data-flow doc on
  the same Art. 30 ROPA shape.

Walk `content/mappings/gdpr/` on `main` today and the directory reads
the canonical template plus eight populated per-workflow data-flow
docs — phishing-triage as the SKELETON reference, then
incident-management, alert-triage, vuln-intake, identity-compromise,
threat-intel-ingest, ransomware-containment, and
cloud-misconfiguration. One more workflow doc — the data-exfil
data-flow entry — is in final review on a separate card and is not
claimed by this note; the suite is nearly complete with one entry
still on the review surface.

## Why a per-workflow data-flow doc, and why now

GDPR Art. 30 names the Record of Processing Activity as the
documentation surface an operator has to maintain across the
processing they run. The clause is short; the operational shape
behind it is wide. Most ROPA artifacts an operator inherits land at
the wrong granularity — either a single organisation-wide document
that has to wave its hands at every workflow at once, or a freeform
per-system narrative that nobody updates because the shape isn't
pinned. Neither is portable across operators.

The data-flow doc the F-GD-01 lane lands sits at the granularity the
framework already works in. A cookbook workflow has a typed
identity, a pinned schema for the evidence it emits, and a runnable
example under each of the three reference compile targets. The
data-flow doc next to it has the same pinned shape and the same
public surface — seven sections, each tied to a specific GDPR
clause, each filled in against what the workflow actually consumes
and emits.

That granularity is what makes the docs portable. An operator
adopting the phishing-triage workflow into their own SOC can lift
the data-flow doc next to it, adjust the recipients section to their
own ticketing surface and the retention section to their own
sealed-log rotation, and land the result inside their own Art. 30
ROPA without inventing the seven-section shape from scratch. The
template is the contract; the per-workflow doc is the worked example.

The same shape carries the sovereign-stack constraint the F-GD-01
lane pins on ROADMAP. The cross-border section on every doc lands
populated with the default sovereign-stack posture — workflows that
keep the personal data they touch inside the EEA carry "no transfer"
explicitly, and any workflow that would emit personal data to a
non-EEA recipient has to make that transfer visible at the data-flow
layer where the operator and a regulator both look.

## What this reads against on the catalogue

The framework now carries two stable documentation surfaces side by
side under `content/mappings/`:

- The OSCAL / D3FEND control mappings under `content/mappings/nis2/`
  and `content/mappings/dora/` and `content/mappings/cra/`, which
  pin the regulator-traceable anchor at the schema layer for
  continuous-posture evidence streams and the broader control
  catalogue.
- The GDPR data-flow docs under `content/mappings/gdpr/`, which
  pin the Art. 30 ROPA shape at the cookbook-workflow layer.

The two surfaces are independent — a continuous-posture lane like
F-CP-03 carries an NIS2 Article 22 anchor at the schema layer
because that is where the supply-chain assertion shape lives; a
cookbook workflow like phishing-triage carries a GDPR Art. 30 entry
at the data-flow layer because that is where the workflow's
personal-data surface lives. An operator reading the framework
against the regulatory questions they actually face — what evidence
stream lights up against NIS2, what ROPA entry lights up against
GDPR — reads both surfaces in the place those questions land.

Out-of-scope callouts retain behind the F-GD-01 lane and stay
Proposed against the same baseline: F-GD-02 widens the lane into a
CI check that fails when a workflow ships without a corresponding
data-flow document or with an empty lawful-basis section. That card
sits behind F-GD-01 on ROADMAP and doesn't gate the per-workflow
wave that just landed.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-GD-01 canonical template plus phishing-triage reference
  through
  [PR #306](https://github.com/secops-ng/secops-ng-framework/pull/306),
  incident-management / alert-triage / vuln-intake data-flow docs
  through
  [PR #307](https://github.com/secops-ng/secops-ng-framework/pull/307),
  identity-compromise data-flow doc through
  [PR #308](https://github.com/secops-ng/secops-ng-framework/pull/308),
  threat-intel-ingest data-flow doc through
  [PR #309](https://github.com/secops-ng/secops-ng-framework/pull/309),
  ransomware-containment data-flow doc through
  [PR #310](https://github.com/secops-ng/secops-ng-framework/pull/310),
  and cloud-misconfiguration data-flow doc through
  [PR #311](https://github.com/secops-ng/secops-ng-framework/pull/311).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-two that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk `content/mappings/gdpr/` on `main` today and the directory
reads a canonical seven-section template plus eight populated
per-workflow data-flow docs against the reference cookbook
catalogue, every entry pinning purpose, lawful basis, categories of
data subjects and personal data, recipients, retention, cross-border
posture, and data-subject rights against the GDPR clauses they
correspond to.

What's next on the lane — one more workflow data-flow doc sitting
on the final-review surface to round out the per-workflow suite,
and the F-GD-02 CI lane behind F-GD-01 turning the per-workflow
shape into a check that fails when a workflow lands without one.
