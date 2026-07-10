---
title: "Field note #172 — G-04 identity/access-management pair lands: MFA enforcement rate KPI and privileged access review completion KRI close the last NIS2 Art. 21 catalogue gap"
description: "Field note one hundred and seventy-two from the SecOps-NG Digital Commons. Framework PR #777 (F-MET-G04-IDENTITYACCESS SKELETON) lands two new YAML metric definitions under content/metrics/: kpi.identity_mfa_enforcement_rate@v1 (target ≥95%, bound to OCSF Authentication class 3002) and kri.access_review_completion_rate@v1 (threshold ≥90%, alert <80%, bound to OCSF Account Change class 3001). Regulatory anchors span NIS2 Art. 21(2)(i)/(j), DORA Art. 5(2), and GDPR Art. 32(1)(a). The identity/access-management domain — the last major NIS2 Art. 21 limb without operator-readable numbers in the catalogue — now has a KPI/KRI pair operators can drop into their monitoring stack today."
pubDate: 2026-07-10
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "g-01", "metrics", "kpi", "kri", "identity", "access-management", "mfa", "nis2", "nis2-art-21", "dora", "gdpr", "ocsf", "digital-commons", "field-note-172"]
---

Field note one hundred and seventy-two. Framework
PR #777 (F-MET-G04-IDENTITYACCESS SKELETON) lands
two sibling metric definitions under
`content/metrics/`:

- `kpi.identity_mfa_enforcement_rate@v1` — the
  aggregate share of user accounts whose
  authentication posture carries multi-factor
  enforcement, higher-is-better with an unscoped
  catalogue target at ≥0.95.
- `kri.access_review_completion_rate@v1` — the share
  of privileged-access reviews the operator's
  documented cadence scheduled inside the window
  that closed on time with an explicit
  recertify-or-revoke decision recorded against
  every binding in scope. Higher-is-better
  residual-risk indicator with warn at <0.90 and
  alert at <0.80.

Two new YAML definitions, two committed reference
visualisations, two OCSF class bindings, one closed
domain gap in the G-04 catalogue.

## Why identity/access-management, and why now

The G-04 catalogue tracks a growing operator-readable
KPI/KRI surface across the NIS2 Article 21(2)
risk-management-measure limbs. Six operational
domains landed earlier this month —
vulnerability-management, supply-chain,
business-continuity, incident-handling,
crypto-management, and agentic-security. Two limbs
of Article 21(2) remained without a first-class
metric pair on main: (i) human-resources security
and access control, and (j) multi-factor or
continuous authentication.

This PR closes both. Identity and access management
is the domain a supervisor examines first on almost
every NIS2 competent-authority inspection — the
question "who has access to what, verified how,
reviewed when" reads directly into Article 21(2)(i)
and (j), and reads across to DORA Article 5(2)'s
ICT-risk-management-framework requirement for strong
authentication and to GDPR Article 32(1)(a)'s
security-of-processing obligation on access to
personal data. Naming both as operator-readable
numbers in the catalogue is the difference between
"the operator has an IAM programme" and "the
operator can produce, on examination, the dated
ratio the supervisor asks for."

## `kpi.identity_mfa_enforcement_rate@v1` — Art. 21(2)(j) as a number

The KPI reads the ratio `|E| / |A|`: accounts whose
authentication posture is observed as
`mfa_enforced` in the evaluation window, over the
total observed-account population in the window.
Break-glass and documented service-account
exceptions live on the operator's identity-source
registry and are counted against the denominator on
purpose — an exception population itself is a
first-class number that belongs on the operator's
dashboard, not a silent adjustment that hides
behind an aggregate.

- **Target:** `≥ 0.95` (community-recommended
  unscoped starting point; ENISA and NIS2
  essential-entity guidance converge on mid-to-high
  nineties for the unscoped surface once
  documented exceptions are declared).
- **Bindings:** OCSF Authentication (class 3002)
  event stream for the enforcement observation,
  OCSF Account Change (class 3001) for the account
  inventory bounding the denominator. The
  authentication surface is the same one
  `playbook.mfa_secured_comms@v1` probes at
  posture-check time and
  `control.mfa_state_probe@v1` attests; this KPI is
  the aggregate ratio operators read on the
  dashboard on top of both.
- **Reference viz:** two-panel — a ratio-headline
  gauge on the aggregate, and a stacked-bar
  drill-down per `identity_source` slice
  (workforce IdP, external-collaborator IdP,
  service-account registry) so operators can see
  which slice pulls the aggregate away from target.

## `kri.access_review_completion_rate@v1` — Art. 21(2)(i) as a number

The KRI reads the share of privileged-access reviews
the operator's documented cadence scheduled in the
window whose review record carries a `closed_at`
timestamp on or before the review-due timestamp AND
an explicit recertify-or-revoke decision on every
binding in the review scope.

Two design calls make the number honest:

1. Reviews closed after the due timestamp count
   against the denominator. A late close is a
   completion the access-control posture eventually
   recorded, but the cadence obligation was not
   met — this KRI reads the on-time slice, not the
   ever-closed slice.
2. Reviews whose scope contains any binding without
   a recertify-or-revoke decision are treated as
   not completed_on_time. Bindings do not silently
   disappear from the ratio; the reviewer records a
   decision on each binding or the review counts as
   incomplete.

- **Thresholds:** warn `< 0.90`, high `< 0.80`,
  breach `< 0.60`. Mature access-review programmes
  under ISO/IEC 27001 Annex A.8.2 hold on-time
  completion above 0.95 at steady state once the
  scheduling, reminder, and escalation lanes are
  disciplined against the documented cadence.
- **Bindings:** OCSF Account Change (class 3001) as
  the source class; bound to
  `control.privileged_access_review@v1`,
  `control.least_privilege@v1`, and
  `control.access_enforcement@v1`. Window: rolling
  90 days.
- **Reference viz:** ratio-headline gauge with warn
  / high / breach bands over a stacked-bar
  drill-down of on-time-completed versus
  overdue-or-incomplete review counts sliced by
  cadence-window.

## Why the OCSF anchor matters for sovereignty

Both metrics resolve their calculation surface
against OCSF event classes — 3002 Authentication
for the MFA observation, 3001 Account Change for
the account inventory and review-record store. The
KPI/KRI YAML names the class and the input shape
the formula reads; the compile target resolves the
concrete identity-vendor and access-review-store on
the operator's side.

That indirection is the sovereign-security move.
The catalogue definition does not name any
particular identity provider, any particular
governance suite, any particular vendor. An
operator on a European workforce IdP, an operator
on a self-hosted identity source, and an operator
on a US-hyperscaler IdP all read the same aggregate
ratio against the same OCSF class shape — the
metric is portable across the identity substrate,
and the operator retains the freedom to swap the
substrate without re-arguing the metric with a
competent authority.

## Where the G-04 catalogue stands now

The identity/access-management domain was the last
major NIS2 Article 21 limb without a KPI/KRI pair
on main. With this SKELETON, the catalogue carries
operator-readable numbers across all the major
Art. 21(2) risk-management-measure surfaces:

- Vulnerability-management — Art. 21(2)(e)
- Supply-chain security — Art. 21(2)(d)
- Business continuity and backup — Art. 21(2)(c)
- Incident-handling — Art. 21(2)(b)
- Cryptography and encryption — Art. 21(2)(h)
- Identity and access management — Art. 21(2)(i)/(j)

Plus the agentic-security cross-regime triad
covered in [field note #160](/blog/2026-07-09-field-note-160-agentic-metrics-eu-ai-cybersec/)
and the NIS2 Art. 21 metrics pack covered in
[field note #161](/blog/2026-07-09-field-note-161-nis2-art21-metrics-plus-pitfalls-guide/).
G-04 advances against the ≥40-definitions target
for Q4 2026, and G-01 records another domain-gap
closure toward broader content coverage.

## Where to find it

- Framework repository:
  <https://github.com/secops-ng/secops-ng-framework>
- KPI definition:
  `content/metrics/identity_mfa_enforcement_rate.yaml`
- KRI definition:
  `content/metrics/access_review_completion_rate.yaml`
- Reference visualisations:
  `content/metrics/identity_mfa_enforcement_rate.viz.md`,
  `content/metrics/access_review_completion_rate.viz.md`

Read the YAML, wire the OCSF class binding into the
identity source and the access-review store already
in the stack, and the two ratios drop into the
existing dashboard next to the other G-04 numbers.
No vendor step, no bespoke integration — the
catalogue definition is the contract, and OCSF is
the substrate.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- G-04 batch 3 context: [field note #162](/blog/2026-07-09-field-note-162-g04-batch3-vuln-supply-bcp/)
- NIS2 Art. 21 metrics pack: [field note #161](/blog/2026-07-09-field-note-161-nis2-art21-metrics-plus-pitfalls-guide/)
- Agentic-security KPI/KRI triad: [field note #160](/blog/2026-07-09-field-note-160-agentic-metrics-eu-ai-cybersec/)
- Roadmap goals: G-04 (KPI/KRI catalogue growth), G-01 (content coverage).
