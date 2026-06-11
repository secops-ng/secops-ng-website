---
title: "Field note #51 — F-CP-05 crypto-attestation evidence stream reads Shipped on ROADMAP, fourth continuous-posture lane lit up end-to-end with NIS2 Article 21(2)(h) on the cryptographic and secret-management baseline, and the project-side env-only-injection commitment pinned at the schema layer across all three reference compile targets"
description: "Fifty-first field note from the SecOps-NG Digital Commons: the F-CP-05 crypto-attestation evidence stream — opened a handful of beats ago at SCHEMA and at EMITTER SKELETON, fanned out across n8n and LangGraph and Temporal in the three-target CORE wave that field note #50 read, and closed on EXTEND-tests-goldens across the n8n and LangGraph surfaces in the same wave — closes its Temporal-side byte-parity golden and flips Proposed → Shipped on ROADMAP. Four of seven continuous-posture slots now read Shipped end-to-end on the same framework-agnostic substrate, against four distinct NIS2 clauses, with the env-only-injection assertion pinned once at the schema layer and inherited unchanged by every reference compile target."
pubDate: 2026-06-11
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-05", "continuous-posture", "evidence-stream", "roadmap-flip", "shipped", "crypto-attestation", "secret-handling", "core-directive-6", "env-only-injection", "byte-parity", "goldens", "extend-tests-goldens", "temporal", "nis2", "article-21", "article-21-2-h", "compilers", "n8n", "langgraph", "digital-commons"]
---

Field note #50 read the F-CP-05 crypto-attestation evidence stream
closing its three-target CORE-FANOUT wave on `main` — the n8n adapter,
the LangGraph adapter, and the Temporal worked example all sitting
under the same shared helper at
`compilers/_shared/evidence/crypto_attestation.py` — and per-target
byte-parity goldens locking the on-disk shape on the n8n and LangGraph
surfaces in the same wave. The note named two beats visible ahead on
the lane: the Temporal-side byte-parity golden behind the worked
example that had just landed, and the ROADMAP status flip behind it.

This note reads the first of those two beats turned on the same hour,
and the ROADMAP marker behind it. F-CP-05 crypto-attestation is
**Shipped** — the fourth continuous-posture evidence stream in the
catalogue lit up end-to-end across all three reference compile
targets, with a regulator-traceable mapping into NIS2 Article 21(2)(h)
on the cryptographic and secret-management baseline, and with the
project's hardest project-side commitment on secret handling —
Core Directive #6, no hardcoded credentials, env-only injection at
boot — pinned once at the schema layer and enforced once at the
shared boundary every adapter inherits from.

Four of seven continuous-posture slots now read Shipped on the same
substrate, against four distinct regulatory surfaces — Article 21(2)(a)
for risk-analysis, Article 21(2)(e) for vulnerabilities, Article 23(4)
for incidents, and Article 21(2)(h) for the cryptographic and
secret-management baseline.

## What this note reads off `main`

### F-CP-05 EXTEND-tests-goldens-TEMPORAL — the third per-target byte-parity golden closes the EXTEND-tests-goldens beat

Through
[PR #301](https://github.com/secops-ng/secops-ng-framework/pull/301),
the Temporal-side byte-parity golden for the crypto-attestation stream
lands under
`tests/examples/temporal/vuln-intake/evidence/crypto/` and joins the
n8n and LangGraph goldens that landed in the same wave a beat ahead of
it. The test re-runs the Temporal activity wrapper against the same
canonical payload the per-target `regenerate.py` driver ships under
the worked example,
schema-validates the re-emitted artifact against
`schemas/evidence/crypto-attestation.schema.json`, and asserts
byte-equality with the committed
`secret-handling-attestation.json` snapshot under the worked example.

Three coverage axes pin behind the third per-target golden, completing
the same triangle the n8n and LangGraph goldens carry on their own
surfaces: the schema-conformant emit check runs before any byte
comparison, so a regression that changes the on-disk shape away from
the typed record surfaces with a schema diagnostic and not a raw byte
diff; byte-parity against the committed example pins serialisation —
key ordering, whitespace, numeric formatting, the canonical encoding
the shared helper writes — so a serialisation regression on either
the Temporal-side wrapper or the shared helper surfaces with a precise
on-disk diff; and the three mechanical secret-handling assertions —
`secrets_baked_in: false`, `injection_mode: 'env'`, and the list of
UPPER_SNAKE_CASE `env_var_refs` — re-assert on every Temporal replay
exactly as they re-assert on every n8n and LangGraph replay.

The lane now reads three goldens — one per reference compile target —
under the same `vuln-intake` worked playbook, each pinning the same
canonical
`secret-handling-attestation.json` shape against the same shared
helper, each carrying the same three-axis coverage triangle.

### F-CP-05 ROADMAP — Proposed → Shipped

Through
[PR #302](https://github.com/secops-ng/secops-ng-framework/pull/302),
the F-CP-05 entry on
[`ROADMAP.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/ROADMAP.md)
flips to **Shipped**. The entry now mirrors the shape the
F-CP-02 incidents and F-CP-04 vulnerabilities entries carry — a
single Status line under the lane title pinning end-to-end status,
followed by a per-PR enumeration that walks the SCHEMA card, the
EMITTER SKELETON card, the three CORE-FANOUT cards across n8n and
LangGraph and Temporal, and the three EXTEND-tests-goldens cards
behind them. The same surface that an operator or a regulator reaches
for to read which slots in the continuous-posture catalogue are
live on the substrate now reads a fourth slot Shipped on the
secret-management baseline.

Three callouts retain on the lane below the Shipped line:
EXTEND-drift, EXTEND-NIS2-MAPPING widening the Article 21(2)(h)
anchor into the surrounding clause surface, and the F-PT-01
refuse-at-boot enforcement that promotes the env-only-injection
assertion from emission-time evidence into a precondition the
runtime checks before a workflow is allowed to start. The first
two fan out into sibling cards on the F-CP-05 lane and stay
Proposed against the same stream. The third sits on the F-PT-01
platform-trust lane on its own; the crypto-attestation stream
emits the per-execution record today, and the platform-trust lane
will read that record to gate boot tomorrow.

## Why this slot Shipped matters for the secret-management baseline

NIS2 Article 21(2)(h) names cryptography and secret management as one
of the baseline measures a Member-State entity has to put under
governance. The clause is short; the operational surface behind it
isn't. Reading it against a workflow-shaped substrate splits into
two questions the F-CP-05 stream answers per workflow execution and
per reference compile target.

The first question is whether the executed code carries baked-in
secret material — a credential string copied into a node body, a
private key pasted into a code cell, a token hardcoded against a
test that drifts into production. The schema pins
`secret_handling.secrets_baked_in` as `const false`; the validator
rejects any attempt to assert otherwise at the on-disk boundary;
the shared helper re-asserts the same line at the Python boundary
before the record is written. No reference adapter — n8n, Temporal,
or LangGraph — can reach disk with a record that says baked-in
credentials shipped.

The second question is how the secret material the workflow does
consume actually arrives. The schema pins
`secret_handling.injection_mode` as `const 'env'`, so the validator
rejects any attempt to assert another mode at the boundary, and
the `secret_handling.env_var_refs` field is regex-pinned to
`^[A-Z][A-Z0-9_]{0,127}$`, so anything that is not an
UPPER_SNAKE_CASE identifier — including, by construction, the
shapes a credential or token tends to take — is rejected before it
reaches the on-disk record. The shared helper carries the same
boundary rule and rejects lowercase, duplicates, and
credential-shaped strings at emit time.

Both answers — the negative assertion that baked-in secrets did
not ship, and the affirmative assertion that every secret arrived
by environment-variable name only — live in one place at the schema
layer and one place at the shared boundary the adapters all wrap.
Per-target byte-parity goldens on all three reference compile
targets now pin those answers against checked-in canonical
emissions, so a regression on any of the three surfaces — a
serialisation change, a schema drift, a quiet relaxation of the
env-only assertion — surfaces against a fixture on every push.

## What this reads against on the catalogue

The continuous-posture catalogue now reads five distinct slots
emitting per-execution evidence against five distinct NIS2 clauses on
the same framework-agnostic substrate, with the same byte-parity
discipline pinning on-disk shape across all three reference compile
targets:

- F-CP-01 reads Shipped against Article 21(2)(a) on the risk-analysis
  baseline.
- F-CP-02 reads Shipped against Article 23(4) on the incident-
  notification three-milestone timeline.
- F-CP-03 sits closed on CORE-FANOUT and on EXTEND-tests-goldens
  against Article 21(2)(d) on the supply-chain baseline, with the
  Article 22 mapping beat ahead of the ROADMAP flip.
- F-CP-04 reads Shipped against Article 21(2)(e) on the
  vulnerability-handling baseline.
- F-CP-05 reads Shipped against Article 21(2)(h) on the cryptographic
  and secret-management baseline, with the project-side env-only-
  injection commitment pinned at the schema layer and inherited
  by every reference compile target.

Four of those five slots now read Shipped end-to-end. The fifth —
F-CP-03 — sits one mapping beat behind the same status flip on the
supply-chain lane.

Out-of-scope callouts remain visible behind the F-CP-05 lane and
stay Proposed: EXTEND-drift on the drift-detection axis behind the
crypto-attestation stream, EXTEND-NIS2-MAPPING widening Article
21(2)(h) into the surrounding clause surface, and F-PT-01
refuse-at-boot promoting the env-only-injection assertion into a
runtime precondition the platform-trust lane will enforce. The
three live on separate cards and don't gate the ROADMAP marker
behind them; the marker reads Shipped against the acceptance
criteria the F-CP-05 entry named at SCHEMA time, and the three
out-of-scope beats fan out from the same baseline.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-05 Temporal byte-parity golden through
  [PR #301](https://github.com/secops-ng/secops-ng-framework/pull/301),
  and the ROADMAP flip to Shipped through
  [PR #302](https://github.com/secops-ng/secops-ng-framework/pull/302).
  The CORE-FANOUT-N8N adapter, CORE-FANOUT-LG adapter, Temporal
  worked example, and the n8n and LangGraph byte-parity goldens
  that field note #50 read sit in PRs
  [#296](https://github.com/secops-ng/secops-ng-framework/pull/296),
  [#297](https://github.com/secops-ng/secops-ng-framework/pull/297),
  [#300](https://github.com/secops-ng/secops-ng-framework/pull/300),
  [#298](https://github.com/secops-ng/secops-ng-framework/pull/298),
  and
  [#299](https://github.com/secops-ng/secops-ng-framework/pull/299)
  respectively.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
four slots Shipped end-to-end against four distinct NIS2 clauses on
the same substrate, with a fifth slot one mapping beat behind the
same status flip — and with the project-side commitment on secret
handling pinned once at the schema layer, enforced once at the shared
boundary every adapter wraps, and replayed on every push against a
checked-in canonical fixture on every reference compile target.

More from the lanes as the F-CP-03 Article 22 mapping beat closes the
supply-chain stream's ROADMAP flip behind it, and as the
EXTEND-drift, EXTEND-NIS2-MAPPING, and F-PT-01 refuse-at-boot beats
fan out from the F-CP-05 baseline that just Shipped.
