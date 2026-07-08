---
title: "Field note #153 — G-03 byte-parity expansion wave: four playbooks now pinned across all three reference compile targets"
description: "Field note one hundred and fifty-three from the SecOps-NG Digital Commons. Two batches of golden tests land on the framework: alert triage, phishing triage, agentic threat response, and asset management now carry byte-identical-on-replay assertions across all three reference compile targets (n8n, Temporal, LangGraph), enforced in CI. Twelve new golden tests, four playbooks off the G-03 parity gap, no silent drift between runtimes."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-03", "g-06", "byte-parity", "golden-tests", "compile-targets", "n8n", "temporal", "langgraph", "determinism", "nis2", "dora", "auditability", "alert-triage", "phishing-triage", "agentic-threat-response", "asset-management", "digital-commons", "field-note-153"]
---

Field note one hundred and fifty-three. Four
playbooks just crossed the byte-parity bar. Two
batches of golden tests merged today, twelve new
test files against four reference playbooks —
alert triage, phishing triage, agentic threat
response, and asset management. Each of those
playbooks now compiles, on any of the three
reference targets an operator already runs, into
an artifact that is byte-identical on replay.
Determinism moved from an assumption to a CI-
enforced assertion on four more playbooks in a
single day.

## What byte-parity actually means

The framework describes a playbook once, in
portable CACAO v2. The reference compilers turn
that source into three runnable artifacts — an
n8n workflow, a Temporal workflow, a LangGraph
graph. Byte-parity is the assertion that if you
compile the same source twice, with the same
adapter shims, you get the same bytes out.
Replay a run, and the artifact hash matches the
one you shipped. On any of the three targets.

That is a boring property to describe and a
demanding one to hold. It means no non-determinism
leaked into the compiler. No adapter smuggled a
timestamp into the artifact. No transitive
dependency reordered a map. The golden test files
that just merged are the assertion in
executable form — the hash is checked, in CI, on
every PR, for every one of the four playbooks,
against each of the three targets.

## What shipped

Two framework PRs, both merged to `main`:

- **PR #733 — batch 1.** Six golden test files
  covering `agentic_threat_response` and
  `asset_management`. Three targets × two
  playbooks. The two playbooks are now pinned to
  byte-identical-on-replay artifacts across
  n8n, Temporal, and LangGraph.
- **PR #735 — batch 2.** Six golden test files
  covering `alert_triage` and `phishing_triage`.
  The remaining two of this wave. Same shape:
  three targets × two playbooks, twelve
  compile-and-hash checks now wired into CI.

Four playbooks, twelve new golden tests, one
gap closed. Byte-parity is now enforced across
all three reference targets on every one of
these four.

## Why an EU SecOps operator reads this

Determinism is the substrate that makes
auditability tractable. When a supervisor under
NIS2 or an auditor under DORA asks what actually
ran on the twelfth of last month, the honest
answer is not "the workflow we describe in the
runbook." The honest answer is a specific
artifact, on a specific runtime, with a specific
hash. Byte-parity is what lets that hash mean
what it says.

Three things become tractable when the artifact
is pinned:

- **Replay under review.** An auditor's
  reconstruction of a decision is only as
  trustworthy as the reproducibility of the
  workflow that made it. If the artifact is
  byte-identical on rebuild, the reconstruction
  is a hash comparison, not a good-faith
  narrative.
- **Runtime portability without drift.** An
  operator that decides to move a workflow from
  n8n to Temporal — because their sovereignty
  posture shifted, because their scale did,
  because the political weather did — does not
  have to accept that the semantics quietly
  changed in the move. The portable source is
  the same. The three artifacts are pinned. The
  move is a compile, not a rewrite.
- **Change control that means what it says.**
  When the golden hash changes, someone changed
  something. A PR that flips a golden is a PR
  that has to say why, in prose that a reviewer
  can read. There is no silent update.

Auditability under NIS2 and DORA does not
require byte-parity in the abstract. It does
require that when the operator says "this is
what ran," the artifact backs the claim. The
parity matrix is how that claim gets teeth.

## The four playbooks now pinned

- **`playbook.alert_triage`** — the
  detection-to-verdict spine an operator runs
  against inbound signals from their monitoring
  stack.
- **`playbook.phishing_triage`** — the reported-
  suspicious-message lifecycle: parse, enrich,
  triage, decide, contain, notify, close.
- **`playbook.agentic_threat_response`** — the
  agentic execution branch of the response
  surface, where an LLM-driven step decides
  under a documented policy envelope.
- **`playbook.asset_management`** — the asset
  inventory lifecycle that anchors half the
  other playbooks' scan-adapter surfaces.

Four playbooks, all first-order lifecycles for
an EU SecOps team. All now compile into three
runtime targets with a hash you can point at.

## What is queued next

Batch 3 has started against the remaining G-03
parity gap: `cloud_misconfiguration`,
`data_exfiltration`, EU AI Act risk management,
and `identity_compromise`. Four more playbooks,
another twelve golden tests to land, another
step of the matrix off the roadmap. When that
wave lands, the reference-playbook set will
carry byte-parity across all three targets as
the default, not the exception.

## The G-03 / G-06 signal

- **G-03 — compile-target parity.** The
  invariant is that every per-example test
  passes byte-parity on all three reference
  targets. Two batches this week closed four
  playbooks off the gap. The invariant is CI-
  enforced now on those four, not a wishful
  property in a design note.
- **G-06 — community infrastructure signal. **
  Byte-parity is a contributor affordance too.
  A contributor who lands a new playbook can be
  told, with a straight face, what the parity
  bar is and how the tests read. A contributor
  who lands a new compile target can be shown
  the parity matrix as the acceptance surface.
  The bar is written down as executable tests.

## Where to look

- **Framework repo:**
  - `tests/golden/` — the golden test files.
    Six new under the `agentic_threat_response`
    and `asset_management` subtrees; six new
    under `alert_triage` and `phishing_triage`.
  - `examples/{n8n,temporal,langgraph}/` — the
    three compile-target reference artifacts the
    goldens pin against.
  - `content/playbooks/` — the CACAO v2 sources
    the artifacts compile from. One source,
    three artifacts, twelve golden checks.
  - `ROADMAP.md` — the G-03 parity matrix now
    reads four more rows in the shipped column.

If you build an EU SecOps posture on portable
content and you have been quietly assuming that
"same playbook, different runtime" does not
silently drift, this is the wave where that
assumption becomes a testable, hashed, CI-
enforced property on four of the reference
playbooks the commons ships.
