---
title: "Field note #97 — G-01 cookbook wave closes with five walkthroughs (framework PRs #568-#572)"
description: "Ninety-seventh field note from the SecOps-NG Digital Commons: five cookbook entries merge to secops-ng-framework in a single wave, bringing documented end-to-end walkthroughs to eighteen of twenty-seven shipped playbooks. On-call rotation (#568), phishing triage (#569), post-incident review (#570), data exfil (#571), and identity compromise (#572) each land a full operator-facing walkthrough — CACAO topology, three-target compile view across n8n / Temporal / LangGraph, NIS2 / DORA / CRA / GDPR anchors, operator customisation points, replay-and-audit story. The G-01 cookbook-coverage window closes."
pubDate: 2026-07-02
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-01", "cookbook", "f-wf-oncall", "f-wf-03", "f-wf-05-post", "f-wf-dataexfil", "f-wf-identity", "on-call-rotation", "phishing-triage", "post-incident-review", "data-exfil", "identity-compromise", "cacao", "n8n", "temporal", "langgraph", "nis2", "dora", "cra", "gdpr", "digital-commons"]
---

Five framework PRs close this window, and together they carry the G-01
cookbook-coverage wave across the line. Content coverage against the
top-5 NIS2 Article 21 control families has been met since the
twenty-seven-playbook catalogue landed. The dimension that has been
open — and that this wave closes — is the usability half of G-01: a
practitioner who does not want to author their own CACAO source needs
documented, worked walkthroughs to adopt what the catalogue already
ships. Five more entries land in this window.
[PR #568](https://github.com/secops-ng/secops-ng-framework/pull/568)
lands the on-call rotation walkthrough.
[PR #569](https://github.com/secops-ng/secops-ng-framework/pull/569)
lands the phishing-triage walkthrough.
[PR #570](https://github.com/secops-ng/secops-ng-framework/pull/570)
lands the post-incident-review walkthrough.
[PR #571](https://github.com/secops-ng/secops-ng-framework/pull/571)
lands the data-exfil walkthrough.
[PR #572](https://github.com/secops-ng/secops-ng-framework/pull/572)
lands the identity-compromise walkthrough. Eighteen of twenty-seven
shipped playbooks now carry a full end-to-end cookbook entry.

## What landed

Five PRs against the framework, all merged to `main` in the same
window.

### F-WF-ONCALL EXTEND-DOCS — on_call_rotation cookbook walkthrough (PR #568)

[PR #568](https://github.com/secops-ng/secops-ng-framework/pull/568)
adds `docs/cookbook/on_call_rotation.md`, the operator-facing
walkthrough for `playbook.on_call_rotation@v1`. The entry opens on
the property that makes the rotation load-bearing across the whole
catalogue: the rotation is the head of the regulator-notification
clock. The NIS2 Article 23(4)(a) 24-hour early-warning window and the
DORA Article 19(4)(a) 4-hour initial-notification window both start
at the responder's first acknowledgement, so an unbound primary slot
or a slow ack delays every downstream notification step regardless
of how fast those steps themselves run. Every per-incident playbook
in the catalogue sits on top of a populated primary slot and a
delivered handoff brief.

The walkthrough covers the shift-window evaluation, the primary /
secondary / manager escalation-chain binding published to the
operator's paging system, and — when the evaluated window crosses a
rotation boundary — the structured handoff brief composed from open
incidents, recent alerts, outstanding escalations, and the
ack-latency snapshot for the prior shift. The same CACAO source
compiles through n8n, Temporal, and LangGraph; the walkthrough shows
where the roster read, the escalation binding, and the handoff
delivery land in each. The regulatory reads are NIS2 Article
21(2)(b) and 23(4)(a), DORA Article 6(4) and 19(4)(a), and CRA
Article 13(12) — five distinct obligations reading against one
operational artifact.

### F-WF-03 EXTEND-DOCS — phishing_triage cookbook walkthrough (PR #569)

[PR #569](https://github.com/secops-ng/secops-ng-framework/pull/569)
adds `docs/cookbook/phishing_triage.md`, the walkthrough for
`playbook.phishing_triage@v1`. The entry documents the inbound
suspicious-email surface end to end: header / URL / attachment
enrichment against upstream Sigma references and OCSF Email /
Email URL / File Activity records, suppression of already-seen or
known-benign reports without paging, intent classification
(phishing, credential-harvest, malware-attached,
business-email-compromise, or unknown), and the per-intent response
branches — each stamping the phishing MTTR clock, and, on the BEC
branch, additionally stamping the timeline-completeness KPI and the
regulator-notification-overrun KRI.

The walkthrough is explicit about a carve-out that matters for
regulatory reads: phishing triage on its own is deliberately
sub-threshold for DORA Article 18 major-classification. The BEC and
credential-harvest branches leave the phishing surface and hand off
to `playbook.identity_compromise@v1` — and, where exfil follows, to
`playbook.data_exfil@v1` — for the regulator-notification chain.
The DORA Article 18 and 19 backlinks live on those downstream
playbooks' overlays, not on this one. Two anchors read cleanly on
this playbook (NIS2 Article 21(2)(b) and 21(2)(g), and CRA Annex I
§2(2)) without collapsing the chain semantics.

### F-WF-05-POST EXTEND-DOCS — post_incident_review cookbook walkthrough (PR #570)

[PR #570](https://github.com/secops-ng/secops-ng-framework/pull/570)
adds `docs/cookbook/post_incident_review.md`, the walkthrough for
`playbook.post_incident_review@v1`. The entry documents the
post-incident learning loop: timeline collation from ticket
comments, chat transcripts, EDR / SIEM exports, network captures,
and operator-supplied evidence packages; anti-forensics gap flagging
where the upstream Sigma detections fired during the incident
window; a blameless review walked against that timeline that
separates contributing factors (process, tooling, staffing,
training, environment) from individual error; and a
corrective-action register with owner, due-date, and verification
clause per entry.

The walkthrough is explicit about where the playbook stops:
registration of the corrective-action register is the deliverable.
Execution and verification of each corrective action are
deliberately out of scope and land on the operator's existing
change / ticketing surface, which carries the CA-5 tracked-to-closure
obligation. The playbook is the head of that chain, not its tail.
The regulatory reads are NIS2 Article 21(2)(b) and 23(4)(d), DORA
Article 18(2) and 19(4)(c), and CRA Article 14(2). The Article
23(4)(d) NIS2 final-report clause (root cause, type of threat,
applied and ongoing mitigation measures) and the DORA Article
19(4)(c) final-report clause (root-cause analysis, incident
categorisation, mitigation measures applied or planned) both read
against the artefacts this playbook produces.

### F-WF-DATAEXFIL EXTEND-DOCS — data_exfil cookbook walkthrough (PR #571)

[PR #571](https://github.com/secops-ng/secops-ng-framework/pull/571)
adds `docs/cookbook/data_exfil.md`, the walkthrough for
`playbook.data_exfil@v1`. The entry documents the DLP or egress
signal surface end to end: hydration with originating user / asset
/ destination context, scope assessment producing the resolved data
classification, the count of distinct data subjects affected, and a
verdict on whether actual exfiltration occurred; verdict-driven
branching into either close-out (false positive or in-line-prevented
egress) or containment (egress-policy tightening on the named sinks
and identity cut-out on the originating principal); and a final
regulator-and-customer notification gate keyed on the
affected-subjects threshold.

The walkthrough is explicit about a chain property that matters for
regulatory reads: the playbook is the upstream emitter of the
regulator-notification chain, not the submission engine itself. The
NIS2 Article 23 24-hour early warning, the 72-hour notification,
the one-month final report, the DORA Article 19 4-hour initial /
72-hour intermediate cadence, the CRA Article 14(3) severe-incident
timeline, and the GDPR Articles 33 / 34 personal-data-breach
notification all run on the downstream
`playbook.incident_management@v1` engine — this playbook's `notify
regulator` step composes the structured incident-finding envelope
and hands it off along the operator's pre-bound regulator channel;
`incident_management` renders the per-stage submissions from that
envelope. The GDPR Article 33 / 34 routing is expressed jointly
with NIS2 Article 23 and DORA Article 19 at the regulator-notification
threshold gate — four distinct obligations, one operational artifact.

### F-WF-IDENTITY EXTEND-DOCS — identity_compromise cookbook walkthrough (PR #572)

[PR #572](https://github.com/secops-ng/secops-ng-framework/pull/572)
adds `docs/cookbook/identity_compromise.md`, the walkthrough for
`playbook.identity_compromise@v1`. The entry documents the
identity-protection signal surface end to end (impossible travel,
password spray, MFA bypass, suspicious OAuth grant, anomalous
sign-in), the principal-context hydration and confirmation gate,
and — when the compromise is confirmed — the containment sequence:
MFA-factor reset, session and refresh-token revocation across IdP
and downstream SaaS, a lateral-movement hunt scoped to the
compromised principal's blast radius, and a final IAM audit to
remove residual persistence (rogue OAuth consents, app passwords,
conditional-access exceptions) left behind by the compromise.

The walkthrough surfaces the sovereign-security notification chain
as an explicit property of the catalogue:

```
phishing_triage ─► identity_compromise ─► data_exfil ─► incident_management
```

The three responder-facing playbooks feed the one submission engine
`incident_management` at the tail. The three cookbook entries that
land in this wave, together with the incident-management entry
already shipped, now let a practitioner read the chain end to end
from one direction. The regulatory reads on this playbook are NIS2
Article 21(2)(b) and 21(2)(i) and 23, DORA Article 18 and 19, GDPR
Articles 33 and 34, and CRA Annex I §1 authentication / least-
privilege evidence.

## Why this reads against G-01

G-01 on the published roadmap is the catalogue-coverage goal: at
least twenty-five CACAO v2 playbooks covering the top-5 NIS2 Article
21 control families. Twenty-seven playbooks now ship, and — with this
wave — eighteen of them carry a documented end-to-end operator
walkthrough. The counting threshold on G-01 has been carried since
the shipped catalogue reached twenty-five; this wave closes the
dimension G-01 has always also meant: a practitioner who is not
going to write their own CACAO playbook from scratch can now pick up
the catalogue and adopt end-to-end across the on-call surface, the
inbound-report surface, the response-chain surface, and the
learning-loop surface.

Coverage state after this window:

- **Twenty-seven playbooks shipped** on the framework catalogue.
- **Eighteen cookbook walkthroughs available** — two thirds of the
  shipped catalogue now carries a full end-to-end operator-facing
  entry.
- **Nine shipped playbooks remain** without a documented walkthrough.
  Cookbook completion continues on the same shape in the windows
  ahead.

The four playbooks that make up the sovereign-security
notification chain — phishing triage, identity compromise, data
exfil, and the incident-management submission engine — now all
carry an operator-facing walkthrough. Practitioners can walk the
chain from either end from the cookbook alone.

## The community-facing shape

Every cookbook entry so far — eighteen and counting — carries the
same property: bring your own SIEM, bring your own orchestrator,
bring your own paging system, bring your own IdP, bring your own
ticketing surface. The walkthrough for on-call rotation does not
assume a specific paging product — it declares that the operator's
paging system must accept a bound escalation chain and that the
handoff brief must land on the operator's pre-bound channel. The
walkthrough for phishing triage does not assume a specific mail
security product — it declares that the operator's mailbox surface
must deliver a reported message and that the response branches must
land on the operator's ticketing surface. The walkthrough for
post-incident review does not assume a specific evidence store — it
declares that the timeline sources must be readable and that the
corrective-action register must land on the operator's change /
ticketing surface. The walkthrough for data exfil does not assume a
specific DLP product — it declares that the operator's egress
monitoring must deliver a signal and that the containment steps
must land on the named sinks and identities. The walkthrough for
identity compromise does not assume a specific IdP — it declares
that the operator's identity layer must accept an MFA-factor reset,
a session revocation, and an app-password sweep. Bring the surface;
the CACAO source declares the shape.

All five entries compile the same source through all three reference
targets. An operator who runs n8n reads the n8n column and picks up
the compiled example under `examples/n8n/`. An operator on Temporal
reads the Temporal column. An operator building agentic workflows
on LangGraph reads the LangGraph column. The framework does not
pick sides — three reference targets, one canonical source, and the
cookbook shows the same walkthrough compiled three ways.

## The shape the cookbook holds

Every cookbook entry — the two that landed in the previous window,
the five that land in this window, and the eleven that preceded
them — carries the same six-part structure:

1. **Source of truth** — where the CACAO playbook, its mappings
   overlay, and its regulatory anchors live in the repository.
2. **CACAO topology and lifecycle binding** — the shipped steps,
   the discipline each step operates, and the deterministic policy
   the playbook *means* independent of the compile target.
3. **Reference compile targets** — n8n, Temporal, LangGraph shown
   side by side, one canonical source compiled three ways.
4. **Regulatory anchors** — the NIS2 / DORA / CRA / GDPR reads that
   apply, distinct obligations shown as distinct anchors on the
   shared artifact.
5. **Operator customisation points** — the surfaces the operator
   brings (paging system, mailbox surface, evidence store, DLP
   surface, IdP, ticketing surface, metric sink) and where the
   CACAO source declares the interface.
6. **Replay and audit story** — the audit-evident artifact the
   workflow emits, and the trail a peer reviewer or a regulator can
   walk from that artifact back to the shipped mapping.

This is the shape a Digital Commons wants for an operator-facing
catalogue: uniform, inspectable, portable across targets, honest
about what the framework declares versus what the operator brings.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any
operational artifact. The cookbook is documentation on how the
catalogue's existing content compiles into orchestrators an operator
already runs. All five walkthroughs preserve the framework-agnostic
posture: the project still does not ship its own runtime, its own
agent framework, or its own SOAR. The three reference compile
targets remain three of three — n8n, Temporal, and LangGraph — and
the operator picks the one that already lives in their stack.

Community-contributed compile targets (MindStudio, Make, Zapier,
StackAI, CrewAI) remain out of launch scope but on the same shape:
the CACAO source compiles, or it does not. The cookbook does not
privilege one target over another.

## Honest framing on what stays open

This wave closes the G-01 cookbook-coverage wave for five more
shipped playbooks. Honest open beats:

- **A third of the shipped catalogue is still not documented.**
  Nine shipped playbooks do not yet carry a cookbook entry. The
  next windows continue on the same shape.
- **Byte-parity goldens for these five walkthroughs are partial.**
  The n8n reference emitters for the shipped steps are wired
  today; the Temporal and LangGraph reference emitters and the
  per-target goldens for on-call rotation, phishing triage,
  post-incident review, data exfil, and identity compromise land
  in follow-on sibling work.
- **Cookbook entries do not replace inline documentation on each
  playbook.** The `README.md` inside each `content/playbooks/`
  directory remains the workflow-local status file. The cookbook
  is the operator-facing narrative; the playbook README is the
  contributor-facing state.
- **The cookbook does not enforce anything by itself.** The hygiene
  linter, the orphan-CI lanes, and the byte-parity goldens are
  what enforce content contracts. The cookbook is the reading
  surface.

The accurate claim on this wave: the five cookbook gaps on the
responder-readiness surface (on-call rotation), the inbound-report
surface (phishing triage), the learning-loop surface (post-incident
review), and the response-chain surface (data exfil,
identity compromise) all close in one wave. Eighteen of twenty-seven
shipped playbooks are now documented end-to-end; the sovereign-security
notification chain is walkable from either end in the cookbook alone.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #568](https://github.com/secops-ng/secops-ng-framework/pull/568),
  [PR #569](https://github.com/secops-ng/secops-ng-framework/pull/569),
  [PR #570](https://github.com/secops-ng/secops-ng-framework/pull/570),
  [PR #571](https://github.com/secops-ng/secops-ng-framework/pull/571),
  and [PR #572](https://github.com/secops-ng/secops-ng-framework/pull/572).
  All five merged to `main`. Cookbook lives under
  [`docs/cookbook/`](https://github.com/secops-ng/secops-ng-framework/tree/main/docs/cookbook).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-six that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Five PRs close this window. On-call rotation, phishing triage,
post-incident review, data exfil, and identity compromise each land
a full cookbook walkthrough — CACAO topology, three-target compile
view, regulatory anchors, operator customisation points,
replay-and-audit story. Eighteen of twenty-seven shipped playbooks
now carry an operator-facing walkthrough; the G-01 cookbook wave
closes on this shape.
