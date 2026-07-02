---
title: "Field note #100 — MFA-secured comms reaches CORE across the three-target ring, and three more cookbook walkthroughs land (framework PRs #577-#581)"
description: "One hundredth field note from the SecOps-NG Digital Commons: mfa_secured_comms lands its CORE milestone with deterministic primitives, detection bindings, and byte-parity across all three reference compile targets — the authentication anchor for NIS2 Article 21(2)(j) and DORA Article 9. In the same window, three more cookbook walkthroughs join the operator adoption library: ddos_response, mfa_secured_comms, and crypto_posture_management. Twenty-five of twenty-seven shipped playbooks now carry an end-to-end walkthrough."
pubDate: 2026-07-02
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-01", "g-02", "g-03", "mfa-secured-comms", "ddos-response", "crypto-posture-management", "cookbook", "three-target-parity", "cacao", "n8n", "temporal", "langgraph", "nis2", "dora", "cra", "oscal", "d3fend", "ocsf", "digital-commons", "field-note-100"]
---

Field note one hundred. The count is a mile marker, not a
destination — the same shape holds on this note as on the ninety-nine
that came before it: what merged, what it means, what an operator can
do with it, what stays open. A commons keeps its ledger in the same
handwriting from the first entry to the hundredth.

Two threads land in this window against
[`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework).
[PR #577](https://github.com/secops-ng/secops-ng-framework/pull/577)
takes `mfa_secured_comms` through its CORE milestone: deterministic
primitives, detection bindings on the mappings overlay, and byte-parity
across n8n, Temporal, and LangGraph. That is the authentication anchor
for NIS2 Article 21(2)(j) and DORA Article 9 landing on the same shape
the response and detection playbooks already carry.
[PR #578](https://github.com/secops-ng/secops-ng-framework/pull/578),
[PR #579](https://github.com/secops-ng/secops-ng-framework/pull/579),
and [PR #581](https://github.com/secops-ng/secops-ng-framework/pull/581)
add three more operator-facing cookbook walkthroughs — ddos_response,
mfa_secured_comms, and crypto_posture_management — pushing the G-01
usability half from twenty-two of twenty-seven walkthroughs to
twenty-five.

## What landed

Four PRs against the framework, all merged to `main` in the same
window.

### F-WF-MFA CORE — mfa_secured_comms three-target ring (PR #577)

[PR #577](https://github.com/secops-ng/secops-ng-framework/pull/577)
promotes `playbook.mfa_secured_comms@v1` from SKELETON to CORE. In
one PR the playbook lands the same shape the earlier CORE workflows
carry: deterministic primitives for each shipped step, detection
bindings declared on the outbound mappings overlay, and reference
emitters for all three compile targets with byte-parity goldens
under `tests/goldens/mfa_secured_comms/`.

The step topology the playbook now runs deterministically:

- **Authentication-factor inventory** — the operator's identity
  surface returns the enrolled factors per principal (something-you-know,
  something-you-have, something-you-are), and the playbook normalises
  the shape onto the internal factor model regardless of IdP vendor.
- **MFA-enforcement policy read** — the applied policy per resource
  and per principal class (privileged accounts, remote access,
  administrative interfaces, sensitive-data surfaces) is read from
  the operator's policy surface and cross-checked against the
  regulatory anchor the mappings overlay declares.
- **Communication-channel binding** — the channel over which the
  factor challenge is delivered (authenticator app, hardware token,
  SMS, push, email fallback) is annotated with its resistance
  properties, so downstream detection can reason about
  phishing-resistant versus phishing-susceptible factors.
- **Anomaly-signal ingestion** — the OCSF Authentication class events
  coming off the identity surface (successful and failed MFA
  challenges, factor-change events, backup-code redemptions) are
  hydrated onto the same envelope the response playbooks consume.
- **Attestation emission** — a per-principal, per-window MFA-posture
  attestation lands on the operator's compliance surface, audit-evident
  and readable by a regulator.

The mappings overlay declares the anchors explicitly. NIS2 Article
21(2)(j) — the "use of multi-factor authentication or continuous
authentication solutions" clause — is the primary anchor. DORA
Article 9 (protection and prevention, including authentication
mechanisms) reads on the same shape as the ICT-risk-framework
companion. NIST SP 800-53 Rev. 5 anchors land on IA-2 (Identification
and Authentication for organisational users), IA-2(1) (MFA to
privileged accounts), IA-2(2) (MFA to non-privileged accounts), and
IA-5 (Authenticator Management). MITRE D3FEND references land on
D3-MFA (Multi-factor Authentication) and D3-CH (Credential Hardening).
OCSF class binding is the Authentication class (class_uid 3002) on
the consumed side, with a per-window MFA-posture Finding emitted onto
the operator's event bus.

The byte-parity property matters as much as the deterministic
primitives. The n8n reference emitter, the Temporal reference
emitter, and the LangGraph reference emitter all read from the same
canonical CACAO source and produce goldens that match byte for byte
under `tests/goldens/mfa_secured_comms/`. An operator on any of the
three targets sees the same behaviour — the same authentication-factor
inventory, the same policy read, the same attestation shape — from
one shipped source. That is the property the three-target ring is
designed to hold, and it holds on mfa_secured_comms in this window.

### F-WF-DDOS EXTEND-DOCS — ddos_response cookbook walkthrough (PR #578)

[PR #578](https://github.com/secops-ng/secops-ng-framework/pull/578)
adds `docs/cookbook/ddos_response.md`, the operator-facing walkthrough
for `playbook.ddos_response@v1`. The entry documents the volumetric-
and application-layer denial-of-service response chain end to end:
traffic-anomaly ingestion from the operator's edge and CDN surfaces
(volumetric baselines, request-per-second thresholds, application-layer
signature matches), attack-class classification (SYN flood, UDP
amplification, HTTP flood, slow-loris, Layer-7 application logic
exhaustion), mitigation-branch selection (upstream scrubbing on the
CDN or DDoS-mitigation-provider surface, rate-limit tightening on
the edge, WAF rule promotion, IP-reputation blocks), and the
post-mitigation validation loop that confirms baseline traffic
patterns before releasing the mitigation posture.

The walkthrough is explicit about the ownership boundary: the
playbook classifies the attack shape and drives the mitigation
handoff onto the operator's edge / CDN / DDoS-mitigation surface;
the mitigation execution itself runs on that operator surface, not
on a runtime shipped by the framework. The regulatory read is NIS2
Article 21(2)(c) (incident handling) with 21(2)(a) (policies on risk
analysis and information system security) as a companion. DORA
Article 17 (ICT-related incident management) reads on the same
artifact where the estate is in scope.

### F-WF-MFA EXTEND-DOCS — mfa_secured_comms cookbook walkthrough (PR #579)

[PR #579](https://github.com/secops-ng/secops-ng-framework/pull/579)
adds `docs/cookbook/mfa_secured_comms.md`, the walkthrough that
lands alongside the CORE milestone in the same window. The entry
walks the authentication-anchor surface end to end: factor inventory,
policy read, channel binding with resistance annotation,
anomaly-signal ingestion, attestation emission. The cookbook
narrative sits on top of the deterministic primitives PR #577 lands,
so the walkthrough and the underlying implementation are shipped
against the same source of truth in the same window.

The walkthrough is explicit about the phishing-resistance property
the channel-binding step carries. Not every factor is equal — a
FIDO2 hardware token and an SMS one-time code both satisfy a naive
"MFA is present" read against NIS2 Article 21(2)(j), but the
resistance annotation on the channel-binding step lets the operator
reason about phishing-resistant configurations versus
phishing-susceptible ones, and it lets the emitted attestation
carry that distinction into the audit trail. The regulatory reads
are NIS2 Article 21(2)(j), DORA Article 9, and NIST SP 800-53 Rev. 5
IA-2 / IA-2(1) / IA-2(2) / IA-5.

### F-WF-CRYPTO EXTEND-DOCS — crypto_posture_management cookbook walkthrough (PR #581)

[PR #581](https://github.com/secops-ng/secops-ng-framework/pull/581)
adds `docs/cookbook/crypto_posture_management.md`, the walkthrough
for `playbook.crypto_posture_management@v1`. The entry documents
the cryptographic-posture surface end to end: algorithm-inventory
hydration across the operator's estate (TLS versions, cipher suites,
key-exchange primitives, at-rest encryption modes, key-store
provenance), deprecated-primitive detection against the shipped
baseline (TLS 1.0/1.1, RC4, static-DH, 3DES, unauthenticated
encryption modes), key-lifecycle audit (age, rotation cadence,
custody-of-key attestations, HSM binding where declared), and the
remediation-branch pivot into the operator's change-management
surface for scheduled cryptographic migrations.

The walkthrough is explicit about the post-quantum horizon: the
detection surface lands algorithm annotations that let an operator
reason about quantum-vulnerable primitives (RSA / classical
Diffie-Hellman / ECC key exchange) versus post-quantum-candidate
primitives as the standardisation lane matures. Nothing about the
playbook forces a migration cadence — that is the operator's call —
but the artifact declares the shape so a future post-quantum wave
is walkable from what ships today. The regulatory reads are NIS2
Article 21(2)(h) (policies on the use of cryptography and encryption)
and NIS2 Article 21(2)(a). CRA Article 13 (essential cybersecurity
requirements) reads on the same shape for product-side obligations.

## Why this reads against G-01, G-02, and G-03

G-01 on the published roadmap is the catalogue-coverage goal: at
least twenty-five CACAO v2 playbooks covering the top-5 NIS2 Article
21 control families, with an operator-facing walkthrough per shipped
playbook. The counting threshold has been carried since the catalogue
reached twenty-five; the usability half continues to close. Three
more walkthroughs land in this window (ddos_response, mfa_secured_comms,
crypto_posture_management), moving the documented count from
twenty-two of twenty-seven to **twenty-five of twenty-seven**. Two
shipped playbooks remain without a documented walkthrough, and
cookbook completion continues on the same shape in the windows ahead.

G-02 on the published roadmap is the mapping-coverage ring, closed
at 27/27 in field note #99. Nothing in this wave regresses that
number. The mfa_secured_comms overlay was already present when the
ring closed; the CORE milestone adds detection bindings and OCSF
class bindings to the same file, deepening the overlay without
changing the coverage count.

G-03 on the published roadmap is three-target byte-parity across
n8n, Temporal, and LangGraph. PR #577 lands byte-parity goldens
for mfa_secured_comms across all three targets in one PR. One more
playbook now sits in the byte-parity ring; the target-parity lane
continues on the same shape as other CORE milestones close.

Coverage state after this window:

- **Twenty-seven playbooks shipped** on the framework catalogue.
- **Twenty-five cookbook walkthroughs available** — over nine tenths
  of the shipped catalogue carries a full end-to-end operator-facing
  entry.
- **Two shipped playbooks remain** without a documented walkthrough.
  The cookbook completion lane continues on the same shape.
- **Twenty-seven of twenty-seven** outbound regulatory-mapping
  overlays present — the G-02 ring stays closed.
- **One more CORE milestone** lands on the three-target byte-parity
  ring, on the workflow that carries the NIS2 Article 21(2)(j) and
  DORA Article 9 authentication anchors.

## The community-facing shape

Every entry in this wave carries the same property the catalogue has
carried from the beginning: bring your own IdP, bring your own edge /
CDN / DDoS-mitigation provider, bring your own change-management
surface, bring your own key store, bring your own event bus. The
mfa_secured_comms CORE work does not assume a specific identity
provider — it declares that the operator's identity surface must
return an enrolled-factor set per principal and must emit OCSF
Authentication events on the challenge outcomes. The ddos_response
cookbook does not assume a specific edge or DDoS-mitigation provider
— it declares that the operator's edge surface must accept a
mitigation-posture change and return traffic telemetry the playbook
can read against. The crypto_posture_management cookbook does not
assume a specific key store or HSM — it declares that the operator's
key-management surface must return a queryable algorithm-and-key
inventory. Bring the surface; the CACAO source declares the shape.

The mfa_secured_comms CORE work compiles the same source through all
three reference targets. An operator who runs n8n reads the n8n
column and picks up the compiled example under `examples/n8n/`. An
operator on Temporal reads the Temporal column. An operator building
agentic workflows on LangGraph reads the LangGraph column. The
framework does not pick sides — three reference targets, one
canonical source, byte-parity goldens verifying that the compiled
behaviour matches across all three.

## The shape a cookbook entry holds

Every cookbook entry — the three that land in this window and the
twenty-two that preceded them — carries the same six-part structure:

1. **Source of truth** — where the CACAO playbook, its mappings
   overlay, and its regulatory anchors live in the repository.
2. **CACAO topology and lifecycle binding** — the shipped steps,
   the discipline each step operates, and the deterministic policy
   the playbook *means* independent of the compile target.
3. **Reference compile targets** — n8n, Temporal, LangGraph shown
   side by side, one canonical source compiled three ways.
4. **Regulatory anchors** — the NIS2 / DORA / CRA / OSCAL / D3FEND /
   OCSF reads that apply, distinct obligations shown as distinct
   anchors on the shared artifact.
5. **Operator customisation points** — the surfaces the operator
   brings (IdP, edge / CDN / DDoS-mitigation surface,
   change-management surface, key store, event bus) and where the
   CACAO source declares the interface.
6. **Replay and audit story** — the audit-evident artifact the
   workflow emits, and the trail a peer reviewer or a regulator can
   walk from that artifact back to the shipped mapping.

That is the shape the commons wants for an operator-facing
catalogue: uniform, inspectable, portable across targets, honest
about what the framework declares versus what the operator brings.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any
operational artifact. The mfa_secured_comms CORE promotion adds
deterministic primitives, detection bindings, and reference emitters
on the same three targets the rest of the catalogue rides on. The
three cookbook walkthroughs are documentation on how the shipped
content compiles into orchestrators an operator already runs. All
four PRs preserve the framework-agnostic posture: the project still
does not ship its own runtime, its own agent framework, or its own
SOAR. The three reference compile targets remain three of three —
n8n, Temporal, and LangGraph — and the operator picks the one that
already lives in their stack. No cloud lock-in is introduced on any
of the four merges.

Community-contributed compile targets (MindStudio, Make, Zapier,
StackAI, CrewAI) remain out of launch scope but on the same shape:
the CACAO source compiles, or it does not. The cookbook does not
privilege one target over another.

## Honest framing on what stays open

This wave adds one CORE milestone and three documented walkthroughs;
gaps remain. Honest open beats:

- **Two shipped playbooks remain without a cookbook entry.**
  Cookbook completion continues on the same shape in the windows
  ahead until every shipped playbook is walkable.
- **Byte-parity goldens land in the three-target ring one CORE
  milestone at a time.** mfa_secured_comms lands the ring in this
  window; other playbooks close the ring on their own CORE waves.
  The G-03 count is not yet 27/27, and honest framing on the G-03
  lane holds through the closure.
- **OSCAL profile-completeness on the mfa_secured_comms overlay is
  declarative, not enforced.** The IA-2 / IA-2(1) / IA-2(2) / IA-5
  anchors live on the mappings overlay; the profile-completeness
  check that verifies every declared anchor resolves against a
  shipped OSCAL catalogue runs on a follow-on lane rather than as
  a hard schema gate.
- **The crypto_posture_management post-quantum annotation is
  informational.** The algorithm inventory carries the
  quantum-vulnerable versus post-quantum-candidate distinction, and
  the artifact declares the shape a future migration wave will use
  — but the playbook does not force a migration cadence and does
  not adopt post-quantum primitives on the operator's behalf.
- **The ddos_response mitigation branch depends on operator
  surface support.** The playbook drives a mitigation-posture
  handoff; the actual traffic scrubbing runs on the operator's
  edge / CDN / DDoS-mitigation provider. Where that surface does
  not exist, the playbook lands the classification and the
  operator's response chain still runs, but the automatic
  mitigation branch is short-circuited by design.

The accurate claim on this wave: the authentication anchor
(mfa_secured_comms) reaches CORE with byte-parity across n8n,
Temporal, and LangGraph in the same window three more cookbook
walkthroughs land (ddos_response, mfa_secured_comms,
crypto_posture_management). Twenty-five of twenty-seven shipped
playbooks are now documented end-to-end; the mapping ring stays
closed at 27/27; the three-target parity ring gains one more
member.

## One hundred notes on the ledger

The count is the mile marker. The shape is the point.

One hundred field notes — a public commit log for a Digital Commons
that ships in the open, keeps its ledger honest, and shows up on
the deadlines the regulation sets. Every note names what merged,
what it means, and what stays open. No sales cycle, no premium
tier, no gated download. The playbooks live in a public repository
under a permissive content licence, and the operator who uses them
owes nothing to the project for doing so.

That was the shape from field note one. It is the shape at field
note one hundred. It is the shape that will hold at field note two
hundred if the commons keeps rowing.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #577](https://github.com/secops-ng/secops-ng-framework/pull/577),
  [PR #578](https://github.com/secops-ng/secops-ng-framework/pull/578),
  [PR #579](https://github.com/secops-ng/secops-ng-framework/pull/579),
  and [PR #581](https://github.com/secops-ng/secops-ng-framework/pull/581).
  All four merged to `main`. Cookbook lives under
  [`docs/cookbook/`](https://github.com/secops-ng/secops-ng-framework/tree/main/docs/cookbook);
  playbook sources live under
  [`content/playbooks/`](https://github.com/secops-ng/secops-ng-framework/tree/main/content/playbooks);
  byte-parity goldens live under
  [`tests/goldens/`](https://github.com/secops-ng/secops-ng-framework/tree/main/tests/goldens).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-nine that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

The authentication anchor reaches CORE. Three more cookbook gaps
close. Twenty-five of twenty-seven shipped playbooks now carry an
operator-facing walkthrough. One hundred notes on the ledger, and
the shape holds.
