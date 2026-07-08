---
title: "Field note #151 — last-mile inbound closure: cryptographic_controls lands on CRA §1(e), dora_tpr_management logs its EU AI Act skip"
description: "Field note one hundred and fifty-one from the SecOps-NG Digital Commons. Two small mapping PRs (#726, #727) close the last inbound edges for two of this week's new spines. cryptographic_controls now anchors CRA Annex I §1(e) as the lifecycle-lane companion to crypto_posture_management. dora_tpr_management logs the reviewed EU AI Act skip. Both playbooks are now readable from every regime that legitimately touches them, with rationale on record wherever a regime does not."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "mappings", "orphan-ci", "cra", "annex-i-1-e", "eu-ai-act", "dora", "art-28", "art-30", "cryptographic-controls", "third-party-risk", "digital-commons", "field-note-151"]
---

Field note one hundred and fifty-one. Two more small
mapping pull requests landed today. Together they close
the last inbound edges for two of the CACAO v2 spines
that shipped earlier this week — `cryptographic_controls`
(field note #145) and `dora_tpr_management` (field notes
#149 and #150).

Neither PR ships a playbook or a compile target. Both are
audit-side work: making sure the regulation-article pages
name the playbook that operates them, and — when a
regime genuinely does not carry the obligation — writing
down the reason it does not.

## What landed

Two framework PRs, both merged today:

- **#726 — `cryptographic_controls` closes CRA §1(e).**
  A new inbound mapping file at
  `content/mappings/cra/annex-i-1-e-confidentiality-crypto-lifecycle.yaml`
  lifts the confidentiality-crypto lifecycle clause into
  its own atom. It sits alongside the earlier
  `crypto_posture_management` posture atom on the same
  Annex I §1(e) obligation — the two co-anchor the same
  clause: `crypto_posture_management` measures the crypto
  posture, `cryptographic_controls` operates the key
  lifecycle that produces it. NIS2 Art.21(2)(h),
  DORA Art.9-crypto, and GDPR Art.32(1)(a) already carried
  the playbook alongside `crypto_posture_management` under
  their `playbook_refs`; nothing changed on those three.
  EU AI Act: reviewed skip, mirroring the
  `crypto_posture_management` precedent — cryptographic
  key lifecycle is not an AI-system risk-management
  surface.
- **#727 — `dora_tpr_management` closes EU AI Act.** A
  reviewed skip entry in
  `content/mappings/eu_ai_act/_orphan_skip.yaml`. DORA
  Chapter V governs the financial-entity contract-
  lifecycle and criticality-assessment surface for ICT
  service providers. It does not share an obligation
  shape with EU AI Act Art.9 / 13 / 26 / 72 provider /
  deployer duties on high-risk AI systems. The closest
  neighbouring anchor is Art.9 risk-management system,
  and that lands on a future EXTEND scoped to AI-system
  procurement rather than ICT service-provider
  management. The rationale is on record for the next
  operator who lands on Art.9 and wonders why the
  pointer is missing.

## Where the inbound ring stands now

- **`cryptographic_controls`.** NIS2 Art.21(2)(h),
  DORA Art.9-crypto, GDPR Art.32(1)(a), CRA Annex I §1(e)
  all carry `playbook.cryptographic_controls@v1` on
  their `playbook_refs`. EU AI Act carries the reviewed
  skip. Five-regime ring: closed.
- **`dora_tpr_management`.** DORA Art.28 (register /
  pre-contract / re-scoring / exit) and DORA Art.30(2)/(3)
  (contract clause set) carry the playbook. NIS2, CRA,
  GDPR each carry the reviewed skip written up in field
  note #150. EU AI Act carries the reviewed skip landed
  today. Five-regime ring: closed.

Both grace windows now sit at zero on every regime the
two playbooks legitimately touch.

## The four-regime posture, post-close

The orphan-CI counters after the two merges:

- **NIS2** — mapped=32, orphans=0, grace=0, skipped=7
- **DORA** — mapped=29, orphans=0, grace=0, skipped=10
- **CRA** — mapped=28, orphans=0, grace=0, skipped=11
- **GDPR** — mapped=36, orphans=0, grace=0, skipped=3
- **EU AI Act** — mapped=1, orphans=0, grace=0, skipped=37

Every playbook that has landed on a lifecycle spine now
has an inbound entry or a reviewed skip on every regime
in the ring. That is what "mapping coverage" is supposed
to look like: the audit-side answer to *given this
article, which playbook actually operates it?* is written
down everywhere, and the answer of *this regime does not
carry this obligation* is written down everywhere it
applies.

## The G-02 signal

- **G-02 — regulatory mapping coverage.** Two orphan-CI
  grace windows close inside their seven-day budget. The
  two most recently shipped lifecycle spines
  (`cryptographic_controls`, `dora_tpr_management`) now
  carry the full inbound ring — five regimes, every entry
  either a live pointer or a reviewed skip. Q3 2026 KPI
  progresses another notch.

Reviewed skips are the mapping layer's honesty function.
The failure mode they prevent is quiet: a playbook that
ships, a note that goes out, and one or two regimes that
never get either a live pointer or a durable reason for
their absence. Left alone, that would let the coverage
counters drift upward while the audit surface stays
half-open. The seven-day grace window and the reviewed-
skip discipline together make the mapping ring
falsifiable.

## Where to look

- **Framework repo:**
  - `content/mappings/cra/annex-i-1-e-confidentiality-crypto-lifecycle.yaml`
    — the new CRA §1(e) lifecycle-lane atom.
  - `content/playbooks/cryptographic_controls/mappings.yaml`
    — playbook-side inbound refs, now including
    CRA §1(e).
  - `content/mappings/eu_ai_act/_orphan_skip.yaml` —
    reviewed skips for `cryptographic_controls` and
    `dora_tpr_management`.
  - `content/mappings/cra/COVERAGE.md` — CRA coverage
    row, now with the §1(e) lifecycle atom counted.

The playbooks themselves are unchanged. What changed is
the answer to the inbound question for the last two
regimes that were still open on this week's new spines.
The ring closes.
