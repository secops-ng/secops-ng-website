---
title: "Field note #150 — the inbound mapping ring closes on business_continuity and dora_tpr_management: both new spines now readable from every regulatory axis they touch"
description: "Field note one hundred and fifty from the SecOps-NG Digital Commons. Two mapping PRs (#724, #725) close the inbound G-02 rings for the two most recently shipped CACAO v2 playbooks — dora_tpr_management (DORA Chapter V) and business_continuity (NIS2 Art.21(2)(c)) — before their orphan-CI grace windows expire. Both playbooks are now discoverable from every regulatory axis they touch: NIS2, DORA, GDPR, CRA, and EU AI Act, with reviewed skip rationales where the axis genuinely does not carry the obligation."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "mappings", "orphan-ci", "dora", "art-28", "art-30", "nis2", "art-21-2-c", "gdpr", "art-32", "cra", "eu-ai-act", "business-continuity", "third-party-risk", "digital-commons", "field-note-150"]
---

Field note one hundred and fifty. Two small pull requests
landed today. Neither ships a playbook, a compile target,
or a cookbook. Both close the inbound side of the
regulatory mapping ring for the two most recently shipped
lifecycle spines — `business_continuity` and
`dora_tpr_management`.

This is the audit-side of the same story field notes #144
and #149 already told. The playbooks describe the shape.
The mappings tell the supervisor's article which playbook
discharges it, and — when a regime genuinely does not
carry the obligation — records the reviewed reason it does
not.

## What landed

Two framework PRs, both merged today:

- **#724 — `dora_tpr_management` inbound.** DORA Chapter V
  Article 28 (register-of-information, pre-contractual
  assessment, periodic re-scoring, exit strategy) and
  Article 30 (key contractual provisions) now list
  `playbook.dora_tpr_management@v1` on their
  `playbook_refs`. Article 30's clause-set atom is lifted
  into its own file so both `contractual_obligations_tracker`
  (the documentary half) and `dora_tpr_management` (the
  contract-lifecycle spine) can hang off a stable inbound
  location. NIS2 / CRA / GDPR each carry a reviewed
  `_orphan_skip` entry with the rationale for why DORA
  Chapter V's financial-entity contract-lifecycle
  discipline is a distinct axis from NIS2 Art.21(2)(d)
  supply-chain security, CRA Annex I manufacturer scope,
  and GDPR Art.28 data-processor duties.
- **#725 — `business_continuity` inbound.** NIS2
  Art.21(2)(c) (the plan-lifecycle lane, co-anchored with
  `backup_recovery`'s drill lane and
  `nis2_self_assessment`'s roll-up), DORA Art.11
  (response-and-recovery activation), and GDPR Art.32(1)(c)
  (restore-availability materialisation) each list the
  playbook on their `playbook_refs`. CRA and EU AI Act
  carry reviewed skip entries — CRA Annex I §1(h) is
  manufacturer product-security scope, not operator-side
  plan-lifecycle; EU AI Act carries no equivalent
  organisational-resilience surface.

## Why the inbound side matters

Every CACAO v2 playbook already declares its outbound
mapping — the articles it discharges. That is how the
playbook author says what shape they are describing. The
inbound side is the reverse view: an operator's compliance
lead lands on a regulation article page and asks *which
playbook actually operates this?*

Until the inbound entry exists, the article carries the
prose of the obligation but no pointer at the
implementation. The orphan-CI lane is what enforces this:
a playbook that lands without an inbound mapping enters a
seven-day grace window; if the window expires with no
inbound entry and no reviewed skip, CI fails. It is a
small forcing function against the failure mode where a
playbook ships, a note goes out, and the mapping ring is
quietly left half-open.

For the two playbooks landed on 2026-07-07 and 2026-07-08,
the grace window is now closed with the ring complete.

## The five-regime read against `business_continuity`

- **NIS2 Art.21(2)(c)** — the plan-lifecycle lane. Three
  playbooks share the anchor: `nis2_self_assessment`
  (roll-up), `backup_recovery` (drill lane),
  `business_continuity` (plan lifecycle).
- **DORA Art.11** — response-and-recovery activation.
  `business_continuity` operates the activation; DORA
  Art.12 drill obligations remain on `backup_recovery`.
- **GDPR Art.32(1)(c)** — the "ability to restore the
  availability and access to personal data in a timely
  manner" clause. `business_continuity` materialises the
  organisational side; `backup_recovery` materialises the
  technical side.
- **CRA Annex I §1(h)** — skip, with rationale. CRA is
  manufacturer product-security scope. The operator-side
  drill lane sits on `backup_recovery` already;
  cross-pinning the plan lifecycle here would double-count.
- **EU AI Act** — skip, with rationale. Not an AI-system
  risk-management process; the resilience surface is a
  NIS2 / DORA operator-side concern.

## The four-regime read against `dora_tpr_management`

- **DORA Art.28** — register-of-information, pre-
  contractual assessment, periodic re-scoring, exit.
  The playbook carries the lifecycle.
- **DORA Art.30(2)/(3)** — the closed clause set for ICT
  third-party contracts. `dora_tpr_management` verifies
  the negotiated contract against the operator's
  Art.30 clause-shape rubric.
- **NIS2 Art.21(2)(d)** — skip, with rationale. NIS2's
  supply-chain surface is discharged by
  `supply_chain_security`; DORA Chapter V is a distinct
  financial-entity contract-lifecycle discipline.
- **CRA Annex I** — skip, product-by-product manufacturer
  scope; no operator-side same-shape anchor.
- **GDPR Art.28** — skip. The playbook operates on
  provider handles, criticality determinations, contract
  references, register-row ids — none are personal data.
  Data-processor duties are a distinct axis.

## The G-02 signal

- **G-02 — regulatory mapping coverage.** Two orphan-CI
  grace windows close inside their seven-day budget. The
  inbound ring is complete on every regime the two
  playbooks legitimately touch, with reviewed rationale
  wherever a regime does not carry the obligation.

Reviewed skips are how the mapping layer stays honest.
A silent skip would let a playbook drift out of scope on
one regime while claiming full coverage on another. A
reviewed skip is a durable record of *why the shape does
not apply here* — legible to the next operator who lands
on the article and wonders why the pointer is missing.

## Where to look

- **Framework repo:**
  - `content/mappings/dora/article-19-and-28.yaml` — the
    Art.28 register entry; now lists
    `dora_tpr_management` alongside the earlier
    `contractual_obligations_tracker` /
    `supply_chain_security` composition.
  - `content/mappings/dora/article-30.yaml` — the newly-
    lifted Art.30(2)/(3) clause-set atom.
  - `content/mappings/nis2/article-21-2-c.yaml` — plan-
    lifecycle lane, now three playbooks deep.
  - `content/mappings/dora/article-11.yaml` — activation
    lane.
  - `content/mappings/gdpr/article-32-security-of-processing.yaml`
    — restore-availability clause.
  - `content/mappings/{cra,nis2,gdpr,eu_ai_act}/_orphan_skip.yaml`
    — the reviewed-skip entries for each regime that
    does not carry the obligation.

The playbooks themselves are unchanged. What changed is
the answer to the operator's inbound question — *given
this article of the regulation I sit under, which
playbook actually operates it?* — is now written down for
both new spines, across every regime they touch.
