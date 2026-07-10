---
title: "Field note #175 — F-WF-SECAWARENESS CORE ships: the NIS2 Art. 21(2)(g) training playbook now compiles byte-parity to n8n, Temporal, and LangGraph, against a threat landscape where the automation itself is the supply chain"
description: "Field note one hundred and seventy-five from the SecOps-NG Digital Commons. Framework PR #788 lands the CORE layer of the security_awareness_training playbook — three reference compile-target worked examples (n8n, Temporal, LangGraph) and per-target byte-parity golden tests, generated from the same CACAO v2 source that shipped in the SKELETON (PR #767) and was documented in the EXTEND cookbook (PR #768, field note #167). NIS2 Article 21(2)(g) — the security awareness training obligation on essential and important entities — now has all three reference compilations sitting alongside its programme-governance and per-cohort-delivery scaffold. The ship lands in the same week that the agentic security press is closing a three-pass narrative arc from passive threat to active exploitation to supply-chain systemic risk. When the automation is agentic, the automation itself becomes a supply chain worth inspecting, and determinism plus community review are the only honest answers."
pubDate: 2026-07-10
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-03", "g-06", "playbook", "nis2", "nis2-art-21", "security-awareness", "training", "byte-parity", "goldens", "cacao", "n8n", "temporal", "langgraph", "agentic-security", "supply-chain", "sovereignty", "digital-commons", "field-note-175"]
---

Field note one hundred and seventy-five. Framework
PR #788 (F-WF-SECAWARENESS CORE) lands the CORE
layer of the `security_awareness_training`
playbook — three reference compile-target worked
examples and per-target byte-parity golden tests,
generated from the same CACAO v2 source that
shipped as the SKELETON in
[field note #167](/blog/2026-07-09-field-note-167-secawareness-extend-cookbook/)
and was documented in the operator cookbook the
EXTEND phase carried.

- One n8n workflow JSON, emitted from the canonical
  playbook via `tools.compile`, regenerable from a
  shipped script.
- One Temporal workflow stub — activities plus a
  worker entry — emitted from the same source, on
  the same regenerate lane.
- One LangGraph GraphSpec JSON with the generated
  state bindings and a hand-written `assemble.py`
  reference, plus the audit-mirror sibling that
  every LangGraph target in the catalogue carries.
- One goldens tree per target under
  `tests/examples/security_awareness_training/`
  that pins the committed artifacts against a fresh
  emitter run and against the canonical CACAO
  source. Any drift on any target fails the golden
  and blocks the merge.

Every emitted artifact regenerates byte-deterministic
from
`content/playbooks/security_awareness_training/playbook.cacao.json`.
The full framework test suite runs green with the
CORE layer in place (5647 passed, 3 skipped) and the
hygiene linter is clean against the new files.

## What the playbook actually does

`security_awareness_training` names the annual
programme-governance cadence Article 21(2)(g) puts
on the management body of essential and important
entities: who owns the programme, what the
curriculum covers, which populations are in scope,
how effectiveness is measured, and when the
management body signs the programme off for the
period. It is the programme layer above the
per-cohort delivery playbook (`cyber_hygiene_training`)
that the EXTEND cookbook already documents.

The playbook is machine-readable end-to-end — the
programme charter, the population-scope surface,
the effectiveness thresholds, and the sign-off
record are all first-class inputs and outputs of
CACAO v2 steps, not free-text policy prose. That is
what makes it compilable, and that is what makes
the golden per target a meaningful check: a compile
drift is a semantic drift, not a formatting change.

## What byte-parity across three targets buys

CORE-FANOUT and its per-target goldens make the
artifact portable in the direction that matters
for a Digital Commons.

An operator running the programme cadence on n8n
and an operator running it on Temporal — and an
operator running it on LangGraph — all discharge
the same Article 21(2)(g) obligation against the
same programme-scope surface, emit the same
governance-record shape into their evidence store,
and can produce the same dated per-cycle artifact
on examination. The compilation is deterministic
against a golden per target; a drift in any compile
output fails the golden and blocks the merge.

The choice of orchestrator is a deployment concern,
not a compliance one. An operator adopting the
playbook today on n8n can migrate to Temporal or
LangGraph tomorrow without re-arguing NIS2
conformance with a competent authority. The
artifact is the compliance surface; the runtime is
a swap.

The ring around Article 21(2)(g) is now closed on
the community side: SKELETON (playbook + mapping),
EXTEND (operator cookbook), CORE (three compile
targets with byte-parity goldens). Alongside the
DORA Article 19 major-incident reporting trilogy,
the NIS2 Article 20 management-body governance
playbook covered in
[field note #170](/blog/2026-07-09-field-note-170-nis2-art20-ring-complete/),
and the two-layer training scaffold documented in
field note #167, the commons now carries three
EU-regulation obligations end-to-end as portable,
dated, per-cycle-auditable artifacts.

## The threat landscape context: when the
automation *is* the supply chain

The ship lands in the same week that the agentic
security press is closing a three-pass narrative
arc. The reporting cycle has moved from *passive
threats against agentic systems* (prompt injection,
data poisoning as attack surface) through *active
exploitation of agentic systems* (jailbreak
chains against production copilots) into *systemic
supply-chain risk from agentic automation itself* —
the observation that the security-automation layer,
once agentic, is a supply chain worth attacking,
inspecting, and holding to the same integrity
standard as any other production dependency.

That progression is the reason the community-owned,
sovereign, auditable-by-construction posture
matters more, not less, as agentic security
tooling matures.

If an operator cannot inspect and replay their
security automation, they cannot assert it has not
been compromised. If the automation is a closed,
vendor-hosted, non-deterministic surface, the
operator's audit trail terminates at a vendor
attestation. That is not a supply-chain control; it
is a supply-chain hope.

The three properties the framework holds are the
same three properties the agentic supply-chain
threat model demands:

- **Determinism.** Every compile target is
  byte-parity against its golden. A run of the
  playbook against the same inputs produces the
  same outputs; a change to the outputs implies a
  change to the inputs, the source, or the emitter,
  and each of those is visible in a diff a
  reviewer can read.
- **Sovereignty.** The playbook does not name a
  particular vendor, a particular LLM, or a
  particular cloud. The operator resolves the
  runtime substrate on the operator's side. A
  European entity that must keep the programme
  cycle inside an EU jurisdictional envelope can do
  so without re-arguing the compliance surface with
  a competent authority.
- **Community review.** The artifact is a
  public CACAO v2 document in a public repository
  with a public review history. Every change is
  proposed as a pull request, discussed on the
  merits, and merged against a golden. A regressive
  or compromised change cannot land silently.

Those three properties, taken together, are what a
supply-chain control on the security-automation
layer looks like when the layer itself is
agentic. The threat model demands inspectability,
replayability, and community-visible change
control. The framework ships those as its
defaults — not as premium tiers, not as a vendor
attestation, and not on a private roadmap.

## Where to find it

- Framework repository:
  <https://github.com/secops-ng/secops-ng-framework>
- Playbook source:
  `content/playbooks/security_awareness_training/playbook.cacao.json`
- Three compile-target examples:
  `examples/{n8n,temporal,langgraph}/security_awareness_training/`
- Byte-parity goldens:
  `tests/examples/security_awareness_training/`
- Operator cookbook (EXTEND):
  `docs/cookbook/security_awareness_training.md`
- NIS2 Article 21(2)(g) mapping:
  `content/playbooks/security_awareness_training/mappings.yaml`

Compile against your target of choice from the
CACAO v2 source; the golden per target guarantees
your compiled artifact is byte-identical to the
reference and therefore behaves identically against
any downstream evidence store you already run.

## Where this leaves the commons

G-01 records another NIS2 Article 21(2) playbook
carried through the full SKELETON → EXTEND → CORE
ring. G-03 records another workflow held byte-parity
across all three reference compile targets, keeping
the compile-target parity lane current. G-06 opens
against the community-adoption signal — the ring is
now complete enough that an operator or a
contributor can pick up the playbook, run the
cookbook end-to-end, and land a proposed change
against a public review surface with a real golden
holding the semantics.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- SKELETON + EXTEND context: [field note #167](/blog/2026-07-09-field-note-167-secawareness-extend-cookbook/)
- Companion NIS2 Article 20 ring: [field note #170](/blog/2026-07-09-field-note-170-nis2-art20-ring-complete/)
- Roadmap goals: G-01 (content coverage), G-03 (compile-target parity), G-06 (contributor adoption).
