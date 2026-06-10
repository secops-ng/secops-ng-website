---
title: "Field note #49 — F-CP-03 supply-chain stream closes its EXTEND-tests-goldens beat behind the three-target wave, and the F-CP-05 crypto-attestation evidence stream opens with a typed schema and a Temporal-side emitter pinning env-only secret injection at the boundary"
description: "Forty-ninth field note from the SecOps-NG Digital Commons: the closeout tail behind field note #48 — F-CP-03's per-target byte-parity goldens land alongside a ROADMAP status note recording CORE-FANOUT done across n8n, Temporal, and LangGraph — and the F-CP-05 crypto-attestation evidence stream opens against NIS2 Article 21(2)(h) with a typed schema and a Temporal-side EMITTER SKELETON. The schema and emitter both pin Core Directive #6 mechanically: no secret material in compiled code, every secret injected by the runtime environment, env-vars captured by name only and never by value."
pubDate: 2026-06-10
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-03", "f-cp-05", "continuous-posture", "evidence-stream", "extend-tests-goldens", "byte-parity", "goldens", "roadmap", "crypto-attestation", "secret-handling", "core-directive-6", "env-only-injection", "nis2", "article-21", "article-21-2-h", "article-22", "schema", "emitter-skeleton", "compilers", "n8n", "temporal", "langgraph", "digital-commons"]
---

Field note #48 read off `main` an hour in which the F-CP-03 supply-
chain evidence stream opened at SKELETON, promoted its typed schema
against the NIS2 Article 21(2)(d) supply-chain risk-management
baseline, landed its shared framework-agnostic emitter helper, and
fanned that helper out across n8n, Temporal, and LangGraph against
the same shared substrate the F-CP-01, F-CP-02, and F-CP-04 streams
emit through — with a LangGraph worked example exercising the
sovereignty-band stamp on a vuln-intake surface that mixes one
EU-sovereign data feed with one non-EU AI provider call.

The note named three beats ahead of the ROADMAP flip on the lane:
EXTEND-tests-goldens to pin per-target byte-parity against checked-in
fixtures, EXTEND-NIS2-MAPPING to widen the Article 22 Cooperation-
Group anchor into the surrounding clause surface, and the ROADMAP
status note itself.

This note reads two of those beats turned — and reads a different
slot in the continuous-posture catalogue lighting up alongside them.

The first half reads the F-CP-03 closeout tail. Per-target byte-
parity goldens for the supply-chain dependencies-snapshot emitter
land under `tests/fixtures/supply_chain_evidence/{n8n,temporal,
langgraph}.json`, with thirty-five exercising tests pinning four
coverage axes on every adapter: schema-conformant emit against the
F-CP-03 schema with the promoted sovereignty-vocabulary siblings
resolved through `referencing`; sovereignty-atom presence and
vocabulary normalisation on every dependency, with the F-CP-03
sovereign-stack constraint pinned per target; the NIS2 Article 22
Cooperation-Group anchor on `regulation_refs` carrying the
G-02 regulatory-mapping wire for this stream; and `artifact_id`
determinism on SHA-256(`workflow_id|execution_id|captured_at`). A
pure-renderer sanity test ties canonical serialisation to the golden
bytes so a future refactor that moves serialisation logic into the
adapters still trips the parity beat. The ROADMAP status note records
the CORE-FANOUT landing across all three targets — schema, shared
emitter, and three adapters all on `main`, with byte-stable sample
emissions under `examples/{n8n,temporal,langgraph}/vuln-intake/
evidence/supply-chain/dependencies-snapshot.json` — and leaves the
slot at `SKELETON in flight` against ROADMAP. The status flip lands
when the EXTEND-NIS2-MAPPING beat lands. Three landed, one ahead.

The second half reads the F-CP-05 **crypto-attestation evidence
stream** opening at SCHEMA and at EMITTER SKELETON on the Temporal
target, in the same hour the F-CP-03 closeout beats turn.

F-CP-05 is a different surface of evidence from the four
continuous-posture streams in flight ahead of it. F-CP-01 risk-
analysis, F-CP-02 incidents, F-CP-03 supply-chain, and F-CP-04
vulnerabilities each emit per-execution snapshots of the operational
state the workflow walked through: risk lists read, incidents
notified, dependencies inventoried, vulnerabilities triaged. F-CP-05
emits a **per-execution attestation** about the workflow itself —
one record per workflow execution per compile target, attesting
mechanically that the executed code carries no baked-in secret
material, that every secret the workflow consumed was injected by
the runtime environment at boot, and that every environment variable
the workflow referenced was captured by name only and never by
value.

The schema lives at `schemas/evidence/crypto-attestation.schema.json`
and is a Draft 2020-12 typed shape. `artifact_id` is SHA-256 of
`<workflow_id>|<execution_id>|<compile_target>` and the
`compile_target` enum is `{n8n, temporal, langgraph}` — the same
three reference compile targets the four sibling streams emit
through. The two affirmative assertions about secret handling
— `secrets_baked_in: false` and `injection_mode: env` — are typed
`const` on their affirmative values, so a careless emitter that ever
tries to assert otherwise fails schema validation at the boundary.
The `secret_handling.env_var_refs` field is regex-pinned to
`^[A-Z][A-Z0-9_]{0,127}$`, so the schema rejects anything that is
not an UPPER_SNAKE_CASE identifier — and rejects credential-shaped
strings before they can reach the on-disk record. One passing
fixture sits under `tests/fixtures/evidence/crypto-attestation/
minimal.json`, carrying no real secret values and validating against
the schema. The stream-home README at
`content/evidence/crypto/README.md` anchors NIS2 Article 21(2)(h)
on the regulator-hooks table and anchors Core Directive #6 on the
project-side commitment, and names out of scope explicitly: the
emitter fan-out beyond Temporal, the worked example, the
sovereignty-classification logic on env-var-referenced providers,
and the F-PT-01 platform refuse-at-boot enforcement that downstream
the schema commits to but does not itself execute.

The EMITTER SKELETON lands the framework-agnostic shared helper at
`compilers/_shared/evidence/crypto_attestation.py` and the thin
Temporal activity wrapper at `compilers/temporal/evidence/
crypto_attestation_activity.py`. The shared helper carries
`CryptoAttestationContext`, `SecretHandling`, `derive_artifact_id`,
`render_crypto_attestation_artifact`, and
`emit_crypto_attestation_artifact`. It imports no
`temporalio` / `langgraph` / n8n shims, opens no network sockets,
and writes atomically — the same shape the four sibling streams'
shared helpers carry. Twenty-two exercising tests pin five axes on
the boundary: render output validates against the schema;
`artifact_id` is deterministic on `(workflow_id, execution_id,
compile_target)` and independent of `captured_at`, so re-emissions
inside a single execution stay byte-identical at the path level;
on-disk records round-trip byte-identical; the Temporal activity
wrapper produces the same on-disk record as the shared helper; and
the env-only-injection discipline is enforced at the emitter
boundary — UPPER_SNAKE_CASE env-var names only, credential-shaped
strings rejected, lowercase rejected, duplicates rejected, schema
`const` values pinned at emit time.

This is the load-bearing line on this lane. NIS2 Article 21(2)(h)
asks operators to manage cryptographic keys and secret material
under the technical and organisational measures baseline. Core
Directive #6 of this project carries the same line in stronger
form: every secret arrives at the workflow through the runtime
environment, never through compiled code, and the project rejects
hardcoded credentials at every layer the project owns. The
F-CP-05 evidence stream is the per-execution mechanical record
that the workflow honoured that line on a concrete run — a record
a regulator, an auditor, or a downstream consumer of the workflow
can read off the artifact directly, with the same byte-parity
discipline the four sibling streams emit under.

Two beats remain visible ahead on F-CP-05. CORE-FANOUT to the
n8n and LangGraph adapters needs to land so the stream reaches
three-target parity at the emitter layer against the same shape
the four sibling streams reached. EXTEND-NIS2-MAPPING needs to
widen the Article 21(2)(h) anchor into the surrounding clause
surface and tie it to the technical-and-organisational-measures
baseline narrative at clause granularity. The F-PT-01 platform
refuse-at-boot enforcement — the runtime-layer beat that the
F-CP-05 schema commits to but does not itself execute — sits on
the platform-trust lane, downstream of this record.

## What this reads against on the catalogue

F-CP-05 opens a new slot in the continuous-posture catalogue
against a regulatory surface none of the four sibling streams
covers. F-CP-01 reads against NIS2 Article 21(2)(a) on the
risk-analysis baseline. F-CP-02 reads against Article 23(4) on
the incident-notification three-milestone timeline. F-CP-03 reads
against Article 21(2)(d) on the supply-chain risk-management
baseline, with an Article 22 Cooperation-Group anchor on the
cross-Member-State reporting envelope. F-CP-04 reads against
Article 21(2)(e) on the vulnerability-handling baseline.

F-CP-05 reads against Article 21(2)(h) — the cryptographic and
secret-management baseline — and stages the project-side commitment
that hardcoded credentials never reach the public substrate. The
catalogue now carries five distinct continuous-posture slots
emitting per-execution evidence against five distinct NIS2 clauses,
on the same framework-agnostic substrate, with the same byte-parity
discipline and the same sovereignty-aware stamp where the stream's
surface calls for one.

Three of those five slots — F-CP-01, F-CP-02, F-CP-04 — read
Shipped end-to-end. The fourth, F-CP-03, sits closed on
CORE-FANOUT and on EXTEND-tests-goldens, with the ROADMAP status
flip waiting on the Article 22 mapping beat. The fifth, F-CP-05,
sits open at SCHEMA and at EMITTER SKELETON on Temporal, with the
n8n and LangGraph adapters and the worked example ahead.

The crypto-attestation stream does not promise Article 21(2)(h)
in full. The schema and the emitter pin the per-execution
mechanical record. The platform-side refuse-at-boot enforcement
reads off the F-PT-01 lane, which is the runtime-layer beat the
F-CP-05 record commits to but does not itself execute. The
clause surface beyond the secret-management baseline — the wider
technical-and-organisational-measures grid Article 21 stages —
reads off the regulatory text the mapping points at, not off the
substrate, and stays where it lives.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-03 EXTEND-tests-goldens through
  [PR #295](https://github.com/secops-ng/secops-ng-framework/pull/295)
  and the ROADMAP status note through
  [PR #294](https://github.com/secops-ng/secops-ng-framework/pull/294);
  F-CP-05 SCHEMA through
  [PR #292](https://github.com/secops-ng/secops-ng-framework/pull/292)
  and the EMITTER SKELETON (shared helper + Temporal wrapper) through
  [PR #293](https://github.com/secops-ng/secops-ng-framework/pull/293).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-eight that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
three slots Shipped end-to-end against three distinct NIS2 clauses,
a fourth slot with three-target emitter parity and per-target
byte-parity goldens closed behind the CORE-FANOUT wave, and a fifth
slot opening on a different surface of the regulatory baseline,
with the project's hardest project-side commitment on secret
handling pinned at schema granularity and enforced at the emitter
boundary.

More from the lanes as the F-CP-03 NIS2 mapping closes the row,
and as the F-CP-05 CORE-FANOUT beats fan the crypto-attestation
emitter out across the n8n and LangGraph targets against the same
shared substrate.
