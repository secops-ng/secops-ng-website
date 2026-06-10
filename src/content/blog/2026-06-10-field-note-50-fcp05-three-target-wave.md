---
title: "Field note #50 — F-CP-05 crypto-attestation evidence stream closes its three-target CORE wave with the n8n, LangGraph, and Temporal emitters all on `main`, and per-target byte-parity goldens lock the on-disk shape across two of the three targets behind the wave"
description: "Fiftieth field note from the SecOps-NG Digital Commons: the F-CP-05 crypto-attestation evidence stream — opened a beat ago against NIS2 Article 21(2)(h) with a typed schema and a Temporal-side emitter skeleton — fans its emitter out across n8n and LangGraph, lands a Temporal worked example on the vuln-intake playbook, and closes its EXTEND-tests-goldens beat on the n8n and LangGraph targets with checked-in fixtures pinning byte-parity at the on-disk record. Five continuous-posture evidence streams now read off `main`. The env-only secret-injection discipline that Core Directive #6 names — and that NIS2 Article 21(2)(h) reads against — is pinned at the schema layer and enforced at every emitter boundary, not bolted on per target."
pubDate: 2026-06-10
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-05", "continuous-posture", "evidence-stream", "core-fanout", "crypto-attestation", "secret-handling", "core-directive-6", "env-only-injection", "byte-parity", "goldens", "extend-tests-goldens", "nis2", "article-21", "article-21-2-h", "compilers", "n8n", "temporal", "langgraph", "worked-example", "vuln-intake", "digital-commons"]
---

Field note #49 read the F-CP-05 **crypto-attestation evidence stream**
opening at SCHEMA and at EMITTER SKELETON on the Temporal target, in
the same hour the F-CP-03 supply-chain lane closed its
EXTEND-tests-goldens beat behind the three-target CORE-FANOUT wave.
The note named two beats visible ahead on F-CP-05: CORE-FANOUT to the
n8n and LangGraph adapters so the stream would reach three-target
parity at the emitter layer against the same shape the four sibling
streams reached, and EXTEND-NIS2-MAPPING to widen the Article 21(2)(h)
anchor into the surrounding clause surface.

This note reads off `main` the first of those two beats — turned
end-to-end across all three reference compile targets, and with
per-target byte-parity goldens already locking the on-disk shape on
two of them.

## What this note reads off `main`

### F-CP-05 CORE-FANOUT-N8N — the n8n adapter wires the shared emitter

Through
[PR #296](https://github.com/secops-ng/secops-ng-framework/pull/296),
the n8n adapter for the crypto-attestation emitter lands at
`compilers/n8n/evidence/crypto_attestation_node.py` against the same
shared helper the Temporal-side skeleton wraps. The adapter is the
n8n-side mirror of the Temporal activity wrapper from
[PR #293](https://github.com/secops-ng/secops-ng-framework/pull/293):
a thin, framework-side translation between an n8n Code / executeCommand
node's JSON-native payload and the typed
`CryptoAttestationContext` the shared helper carries. The adapter
imports nothing n8n-runtime-specific, opens no network sockets, and
writes atomically — the same shape every sibling-stream adapter on
the n8n target carries — and the env-only-injection enforcement
that lives on the shared helper boundary runs unchanged through the
n8n surface.

### F-CP-05 CORE-FANOUT-LG — the LangGraph adapter closes the three-target grid

Through
[PR #297](https://github.com/secops-ng/secops-ng-framework/pull/297),
the LangGraph adapter for the same emitter lands at
`compilers/langgraph/evidence/crypto_attestation_node.py`, completing
three-target emitter parity for the F-CP-05 stream against the same
shared helper. The LangGraph adapter mirrors the n8n adapter at the
boundary — a node-shaped translation between a LangGraph state dict
and the typed context — and delegates record assembly, the
env-only-injection assertion, and the atomic write to the shared
helper exactly the way the Temporal and n8n adapters do. As of this
note the F-CP-05 emitter reaches operators on n8n, on Temporal, and
on LangGraph against the same canonical on-disk shape, with the
sovereignty-aware project-side commitment on secret handling pinned
once at the schema layer and enforced once at the shared boundary.

### F-CP-05 CORE-FANOUT-TEMPORAL-EXAMPLE — the worked example lands on Temporal

Through
[PR #300](https://github.com/secops-ng/secops-ng-framework/pull/300),
the Temporal-side worked example for the crypto-attestation stream
lands at `examples/temporal/vuln-intake/evidence/crypto/` — the same
playbook the F-CP-03 supply-chain stream uses for its Temporal worked
example, and the same playbook the n8n and LangGraph worked examples
sit under for this stream. The example ships
`secret-handling-attestation.json` (the human-friendly rename of the
deterministic `<artifact_id>.json` the activity writes to disk), a
`regenerate.py` driver that re-runs the adapter against the same
canonical payload, and a `README.md` anchoring the worked path on
NIS2 Article 21(2)(h) on the regulator-hook side and on Core
Directive #6 on the project-side commitment. The vuln-intake playbook
consumes a small set of provider secrets during triage — CVE / EPSS
data-feed tokens and an optional AI risk-summary generator key — so
it is the canonical surface to exercise the env-only-injection
assertion against: a workflow that meaningfully reaches for secret
material, with every secret arriving by environment-variable name
and every reference captured in the attestation by name only.

Three worked examples for the same stream — one per reference compile
target, all under the same playbook, all writing byte-stable
`secret-handling-attestation.json` snapshots that validate against
`schemas/evidence/crypto-attestation.schema.json` and carry the same
three mechanical assertions: `secrets_baked_in: false`,
`injection_mode: env`, and the list of declared `env_var_refs`
pinned to UPPER_SNAKE_CASE at schema granularity.

### F-CP-05 EXTEND-tests-goldens (n8n + LangGraph) — byte-parity locks on two targets

Through
[PR #298](https://github.com/secops-ng/secops-ng-framework/pull/298)
and
[PR #299](https://github.com/secops-ng/secops-ng-framework/pull/299),
the per-target byte-parity goldens land for the n8n and LangGraph
worked examples respectively. Each test re-runs its adapter against
the same JSON-native payload the per-target `regenerate.py` ships,
schema-validates the re-emitted artifact against
`schemas/evidence/crypto-attestation.schema.json`, and asserts byte-
equality with the committed `secret-handling-attestation.json` snapshot.
The goldens pin three coverage axes on the n8n and LangGraph
surfaces: schema-conformant emit before any byte comparison runs;
byte-parity at the on-disk record against the committed example, so a
serialisation regression on either adapter or the shared helper surfaces
with a precise diagnostic; and the env-only-injection assertion shape
itself — `secrets_baked_in=False`, `injection_mode='env'`,
UPPER_SNAKE_CASE `env_var_refs` — re-asserted on every replay. The
Temporal-side byte-parity golden is the one beat visible ahead on
this lane and follows immediately behind the worked example that
just landed.

## Why the env-only-injection assertion lives at the schema layer

The F-CP-05 stream emits a per-execution attestation about the
workflow itself, not a snapshot of the operational state the workflow
walked through. The four sibling streams — F-CP-01 risk-analysis,
F-CP-02 incidents, F-CP-03 supply-chain, F-CP-04 vulnerabilities —
each emit per-execution records of what the workflow read, notified,
inventoried, or triaged. F-CP-05 emits, once per workflow execution
per compile target, the mechanical record that the executed code
carried no baked-in secret material, that every secret the workflow
consumed was injected by the runtime environment at boot, and that
every environment variable the workflow referenced was captured by
name only and never by value.

A claim that load-bearing has to live somewhere a careless emitter
cannot quietly walk around. The crypto-attestation schema pins the
two affirmative assertions about secret handling — `secrets_baked_in:
false` and `injection_mode: env` — as `const` on their affirmative
values, so the schema validator rejects any attempt to assert
otherwise at the boundary. The `secret_handling.env_var_refs` field
is regex-pinned to `^[A-Z][A-Z0-9_]{0,127}$`, so the schema rejects
anything that is not an UPPER_SNAKE_CASE identifier — and rejects
credential-shaped strings before they can reach the on-disk record.
The shared emitter at `compilers/_shared/evidence/crypto_attestation.py`
re-enforces the same line at the Python boundary: UPPER_SNAKE_CASE
names only, lowercase rejected, duplicates rejected, credential-shaped
strings rejected, schema `const` values pinned at emit time.

Every reference compile target inherits that discipline by wrapping
the same shared helper. The n8n adapter, the Temporal activity
wrapper, and the LangGraph node adapter each translate their own
target-specific input shape into the typed `CryptoAttestationContext`
and hand the record to the shared helper. None of the three carries
its own copy of the env-only-injection rule. None of the three can
reach disk with a record that violates it. The sovereignty-band logic
the F-CP-03 supply-chain stream exercises on a vuln-intake surface
follows the same pattern — pinned at the schema layer, enforced at
the shared boundary, inherited by every adapter — and the F-CP-05
crypto-attestation stream is the second continuous-posture lane to
reach three-target parity on a stream-wide affirmative discipline
that lives in one place and one place only.

## What this reads against on the catalogue

The continuous-posture catalogue now reads five distinct slots emitting
per-execution evidence against five distinct NIS2 clauses, on the same
framework-agnostic substrate, with the same byte-parity discipline:

- F-CP-01 reads against Article 21(2)(a) on the risk-analysis baseline.
- F-CP-02 reads against Article 23(4) on the incident-notification
  three-milestone timeline.
- F-CP-03 reads against Article 21(2)(d) on the supply-chain
  risk-management baseline, with an Article 22 Cooperation-Group
  anchor on the cross-Member-State reporting envelope.
- F-CP-04 reads against Article 21(2)(e) on the vulnerability-handling
  baseline.
- F-CP-05 reads against Article 21(2)(h) on the cryptographic and
  secret-management baseline, and stages the project-side commitment
  that hardcoded credentials never reach the public substrate.

Three of those five slots — F-CP-01, F-CP-02, F-CP-04 — read Shipped
end-to-end. The fourth, F-CP-03, sits closed on CORE-FANOUT and on
EXTEND-tests-goldens with the ROADMAP status flip waiting on the
Article 22 mapping beat. The fifth, F-CP-05, sits closed on
CORE-FANOUT across all three reference compile targets and closed on
EXTEND-tests-goldens across two of them; the Temporal-side
byte-parity golden and the EXTEND-NIS2-MAPPING beat are the two
visible ahead on the lane.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-05 CORE-FANOUT-N8N through
  [PR #296](https://github.com/secops-ng/secops-ng-framework/pull/296),
  CORE-FANOUT-LG through
  [PR #297](https://github.com/secops-ng/secops-ng-framework/pull/297),
  the Temporal worked example through
  [PR #300](https://github.com/secops-ng/secops-ng-framework/pull/300),
  the n8n byte-parity golden through
  [PR #298](https://github.com/secops-ng/secops-ng-framework/pull/298),
  and the LangGraph byte-parity golden through
  [PR #299](https://github.com/secops-ng/secops-ng-framework/pull/299).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-nine that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
three slots Shipped end-to-end against three distinct NIS2 clauses, a
fourth slot with three-target emitter parity and per-target byte-
parity goldens closed behind the CORE-FANOUT wave on a fourth clause,
and a fifth slot with three-target emitter parity reached on a fifth
clause — with byte-parity goldens already locking the on-disk shape
on two of the three reference compile targets, and with the project's
hardest project-side commitment on secret handling pinned once at the
schema layer and enforced once at the shared boundary every target
inherits from.

More from the lanes as the Temporal byte-parity golden lands behind
the worked example that just shipped, and as the EXTEND-NIS2-MAPPING
beat widens the Article 21(2)(h) anchor into the surrounding clause
surface.
