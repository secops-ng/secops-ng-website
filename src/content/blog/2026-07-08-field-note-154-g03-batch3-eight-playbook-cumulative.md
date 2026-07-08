---
title: "Field note #154 — G-03 parity wave, batch three: eight playbooks now byte-pinned across all three reference compile targets"
description: "Field note one hundred and fifty-four from the SecOps-NG Digital Commons. Batch three of the byte-parity wave lands: cloud misconfiguration, data exfiltration, EU AI Act risk management, and identity compromise now carry byte-identical-on-replay golden tests across n8n, Temporal, and LangGraph. Cumulative across the three merged batches: eight reference playbooks, twenty-four golden tests, one parity matrix filling in row by row. Batch four is already in flight."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-03", "g-06", "byte-parity", "golden-tests", "compile-targets", "n8n", "temporal", "langgraph", "determinism", "eu-ai-act", "cloud-misconfiguration", "data-exfiltration", "identity-compromise", "nis2", "dora", "auditability", "digital-commons", "field-note-154"]
---

Field note one hundred and fifty-four. Batch
three of the G-03 byte-parity wave merged today.
Four more playbooks — cloud misconfiguration,
data exfiltration, EU AI Act risk management,
and identity compromise — now carry byte-
identical-on-replay assertions on all three
reference compile targets. Twelve new golden
test files against those four playbooks. That is
the third batch in a matter of days, and the
cumulative shape of the wave is now clear:
**eight reference playbooks pinned end-to-end,
twenty-four golden tests wired into CI, one
parity matrix filling in row by row**.

## The wave, in order

Three batches, three PRs, one invariant:

- **Batch one — PR #733.** Six goldens on
  `agentic_threat_response` and
  `asset_management`.
- **Batch two — PR #735.** Six goldens on
  `alert_triage` and `phishing_triage`.
- **Batch three — PR #736 (today).** Six
  goldens on `cloud_misconfiguration` and
  `data_exfiltration`; six more on the EU AI
  Act risk management playbook and
  `identity_compromise`. Twelve new golden test
  files across three targets and four
  playbooks.

Eight playbooks. Twenty-four goldens. Three
targets. One invariant — same source, same
bytes, on every replay, on every target — now
CI-enforced across each of the eight.

The rhythm matters as much as the numbers. This
is not a one-off green tick; it is a sequential
wave of batches closing the G-03 parity gap
playbook by playbook. Batch four is already
queued: `incident_management`,
`infra_posture_management`, `on_call_rotation`,
and `post_incident_review`. When that lands, the
first-order operator lifecycles of the reference
set will be parity-pinned as the default rather
than the exception.

## Why the EU AI Act row lands with weight

Four playbooks landed in batch three. One of
them was the EU AI Act risk management playbook.

The EU AI Act's operational obligations are
already in motion. Operators inside scope need
risk management processes that are described, run,
and — when a supervisor asks — reconstructable.
Byte-parity on the reference playbook that encodes
that risk management flow is not a nice-to-have.
It is what lets an operator answer the
reconstructive question with an artifact hash
rather than a paragraph.

The playbook itself is a portable source. The
compilers turn it into an n8n workflow, a Temporal
workflow, and a LangGraph graph. If the source
changes, the goldens change and someone signs the
diff. If the source does not change, no artifact
mutates under an operator without a hash-visible
event. That is what the parity matrix buys, on
this playbook specifically, on the day the
regulatory clock is running.

## Byte-parity, restated in one paragraph

The framework describes each playbook once in
portable CACAO v2. Three reference compilers turn
that source into three runnable artifacts. The
golden tests assert that if you compile the same
source twice, on the same adapter shims, you get
the same bytes out — and that if you replay a
recorded run, the artifact hash matches the one
that was shipped. That assertion runs on every PR,
against every one of the eight playbooks now on
the matrix, on each of the three targets. When
the golden hash changes, someone changed
something and has to say why.

## Portability under sovereignty pressure

An EU SecOps operator does not decide their
runtime once and forget it. Sovereignty postures
shift. Data residency requirements change.
Regulatory framing moves. A workflow that runs on
one runtime today may need to run on another
tomorrow — different jurisdiction, different
scaling shape, different threat model on the
supply chain.

Byte-parity is what lets that move be a compile,
not a rewrite. If the parity matrix says
`identity_compromise` compiles to identical
bytes on n8n, on Temporal, and on LangGraph, an
operator moving between runtimes is not signing
up for a semantics migration. They are signing up
for an infrastructure migration. Those are very
different projects, and only one of them is
tractable under audit pressure.

Sovereignty here does not mean autarky. It means
an operator can decide, on their own timescale
and for their own reasons, where a workflow runs
— without discovering that the runtime silently
changed what the workflow does.

## The eight playbooks now on the matrix

- `playbook.agentic_threat_response`
- `playbook.alert_triage`
- `playbook.asset_management`
- `playbook.cloud_misconfiguration`
- `playbook.data_exfiltration`
- `playbook.eu_ai_act_risk_management`
- `playbook.identity_compromise`
- `playbook.phishing_triage`

Every one of the eight now compiles to
byte-identical artifacts on n8n, on Temporal, and
on LangGraph. Twenty-four rows of the parity
matrix are green in CI on every PR.

## The G-03 and G-06 signal

- **G-03 — compile-target parity.** The invariant
  is that every per-example test passes byte-
  parity on all three reference targets. Three
  batches this week closed eight playbooks off
  the gap. This is a sequential wave, not a
  spike. Batch four is already opened; the same
  shape will land on four more playbooks.
- **G-06 — community infrastructure signal.** All
  three batches were opened by an external
  contributor working through the framework's
  contributor path — a working affordance, not a
  claim. The parity matrix is a legible
  acceptance surface for a contributor who lands
  a new playbook or a new compile target. The
  bar is written down as executable tests, in
  the repo, on the branch a reviewer already
  reads.

## Where to look

- **Framework repo:**
  - `tests/golden/` — the golden test files.
    Twelve new files under
    `cloud_misconfiguration`,
    `data_exfiltration`,
    `eu_ai_act_risk_management`, and
    `identity_compromise` subtrees.
  - `examples/{n8n,temporal,langgraph}/` — the
    three compile-target reference artifacts the
    goldens pin against.
  - `content/playbooks/` — the CACAO v2 sources
    the artifacts compile from. Eight sources
    now, twenty-four artifacts, twenty-four
    goldens.
  - `ROADMAP.md` — the G-03 parity matrix now
    reads eight rows in the shipped column.

If your posture depends on portable content that
survives a runtime move, this is the wave where
that dependency stops being a hope and becomes a
hashed, CI-enforced property on eight of the
reference playbooks the commons ships. Batch
four next.
