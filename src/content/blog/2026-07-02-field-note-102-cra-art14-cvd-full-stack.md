---
title: "Field note #102 — CRA Article 14 CVD lands as a full SKELETON → CORE trilogy → EXTEND stack, and closes the Article 14 disclosure surface with #101 (framework PRs #591-#595)"
description: "The Cyber Resilience Act Article 14 §1 and §6 coordinated-vulnerability-disclosure (CVD) obligation now has a portable, deterministic CACAO v2 playbook on the SecOps-NG framework. SKELETON, a three-part CORE (templates, adapters, KPI wiring), and EXTEND-DOCS ship in the same window: the cra_cvd playbook scaffold, the acknowledgement-letter and CSAF 2.0 advisory templates, the CVE-request / CSIRT-coordination / PGP-delivery adapter stubs, D3-IRA + IR-6 + SI-2 + Art.14§6 acknowledgement-SLA KPI wiring, and the operator-facing cookbook walkthrough. Together with field note #101, the full CRA Article 14 disclosure surface — reporter-facing lifecycle and regulator-facing notification — now lands as two composable playbooks keyed on the same case."
pubDate: 2026-07-02
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-01", "g-02", "cra", "cra-article-14", "cvd", "coordinated-vulnerability-disclosure", "cra-cvd", "csaf", "cve", "csirt", "pgp", "d3fend", "ir-6", "si-2", "kpi", "cookbook", "cacao", "digital-commons", "field-note-102"]
---

Field note one hundred and two, and it lands in the same window as
field note one hundred and one. The pair is deliberate. Between the
two notes, the full Cyber Resilience Act Article 14 disclosure
surface now ships as portable, deterministic, community-carried
CACAO source in the Digital Commons.

Field note #101 covered the regulator-facing side —
`playbook.cra_srp_notify@v1`, the 24-hour / 72-hour / 14-day single-
reporting-platform cascade under CRA Article 14 §1–§3. This note
covers the operator-facing side —
`playbook.cra_cvd@v1`, the coordinated vulnerability disclosure
lifecycle under CRA Article 14 §1 (operator CVD policy) and §6
(acknowledgement to the reporter within a policy-declared window).

Five PRs against
[`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
close the full stack in one window:
[PR #591](https://github.com/secops-ng/secops-ng-framework/pull/591)
lands the SKELETON. Three CORE PRs land the templates
([PR #593](https://github.com/secops-ng/secops-ng-framework/pull/593)),
the adapter stubs
([PR #594](https://github.com/secops-ng/secops-ng-framework/pull/594)),
and the D3-IRA + IR-6/SI-2 + Article 14 §6 acknowledgement-SLA KPI
wiring
([PR #595](https://github.com/secops-ng/secops-ng-framework/pull/595)).
[PR #592](https://github.com/secops-ng/secops-ng-framework/pull/592)
ships the operator-facing cookbook walkthrough. One playbook, one
window, one closed disclosure surface when paired with `cra_srp_notify`.

## What Article 14 §1 and §6 actually ask for

The Cyber Resilience Act draws a line inside Article 14 that a lot of
compliance narratives blur. Sub-article §1 obliges the manufacturer of
a product with digital elements to maintain a coordinated vulnerability
disclosure policy, including a single point of contact for reporters,
and to handle vulnerabilities reported through it. Sub-article §6
obliges the manufacturer to acknowledge the reporter within a window
declared in that policy. That is the operator-facing lifecycle: the
reporter walks up to the disclosure surface, the manufacturer receives
the report, acknowledges the reporter, triages the case, develops a
fix, validates it, coordinates disclosure with the affected downstream,
and publishes an advisory.

Sub-articles §1–§3 are a different obligation on the same triggering
event. When the vulnerability is actively exploited, or when the
incident it discloses is severe with an impact on the security of the
product, the manufacturer notifies the coordinating CSIRT and ENISA on
a 24-hour / 72-hour / 14-day cascade against the single-reporting-
platform. That is the regulator-facing chain — the surface
`cra_srp_notify` operationalises.

The two chains are not the same shape and should not be modelled as
one playbook. They compose. `cra_cvd` handles the reporter side end to
end. When the triage step in `cra_cvd` classifies a case as
actively-exploited (or the classification later flips there),
`cra_cvd` forks a sibling `cra_srp_notify` run keyed on the same
`__case_id__` and continues the disclosure lifecycle in parallel. The
two artifacts, two ledgers, two mapping overlays, one case identifier
— and a full Article 14 discharge closes over both together.

## What landed

Five PRs against the framework, all merged to `main` in the same
window.

### F-WF-CRA-CVD SKELETON — cra_cvd scaffold (PR #591)

[PR #591](https://github.com/secops-ng/secops-ng-framework/pull/591)
introduces `playbook.cra_cvd@v1` at the SKELETON milestone. The CACAO
v2 source lands under
`content/playbooks/cra_cvd/`, with seven action steps joined into a
single reportable-event ledger by `__case_id__`:

- **intake** — the reporter submits a vulnerability report against a
  shipped product. Enters the ledger, assigns the case id, records the
  awareness time-stamp that anchors both the §6 acknowledgement clock
  and — if the case ever crosses into actively-exploited — the §1–§3
  cascade clocks in the sibling `cra_srp_notify` fork.
- **ack_to_reporter** — sends the reporter-facing acknowledgement
  under CRA Article 14 §6. The CORE-A milestone lands the actual
  template; the SKELETON scaffolds the step and pins the outbound
  clock.
- **triage** — classifies the case: reproducibility, severity, whether
  the vulnerability is actively exploited, whether a severe incident
  has occurred, whether the case crosses NIS2 Article 23 or GDPR
  Article 33 thresholds on the case. Fork decision emitted here.
- **develop_fix** — the corrective or mitigating measure is developed
  under the manufacturer's normal engineering flow. The playbook is
  agnostic to the engineering flow itself; it consumes the fix-ready
  event.
- **validate_fix** — the corrective measure is validated against the
  reported case. The manufacturer's normal QA gate applies; the
  playbook consumes the validated-fix event.
- **coordinate_disclosure** — the disclosure timeline is coordinated
  with the affected downstream (other manufacturers who integrate the
  product, operators of essential services who deploy it, the
  coordinating CSIRT under CRA Article 14). The CORE-B milestone lands
  the CSIRT-coordination adapter stub and the PGP delivery adapter
  stub for the coordination messaging channel.
- **publish_advisory** — the public advisory is published. Two shapes
  ship together in the CORE-A milestone: a human-readable Markdown
  advisory and a machine-consumable CSAF 2.0 advisory for downstream
  automation.

The SKELETON declares the mappings overlay at
`content/playbooks/cra_cvd/mappings.yaml`, anchoring the playbook to
the CRA regime file at
`content/mappings/cra/article-14-and-annex-i.yaml`. The OSCAL anchors
that ship in SKELETON are SI-5 (security alerts, advisories, and
directives) and RA-5 (vulnerability monitoring and scanning) on the
`vuln_disclosure_intake` control. The CORE-C milestone extends the
OSCAL closure with IR-6 (incident reporting — information sharing) and
SI-2 (flaw remediation), which is what the CVD lifecycle actually
discharges once the downstream coordination and fix-remediation legs
land.

Two CRA Annex I §2 clauses are pinned inbound on the playbook in the
same PR so the mapping graph closes in both directions:
`cra:annex-i-2-vuln-handling` (Annex I §2(2) — remediate without delay
across the support period) and `cra:annex-i-2-cvd-policy` (Annex I
§2(5) — coordinated vulnerability disclosure policy including single
point of contact). The CORE-C milestone adds
`cra:art-14-6-ack-to-reporter` (Article 14 §6 — acknowledgement to
reporter within a policy-declared window) inbound, together with the
acknowledgement-SLA KPI (see CORE-C below).

### F-WF-CRA-CVD CORE-A — ack-letter + advisory templates (PR #593)

[PR #593](https://github.com/secops-ng/secops-ng-framework/pull/593)
lands the templates that turn the SKELETON's scaffolded steps into
runnable content. Three templates ship under
`content/playbooks/cra_cvd/templates/`:

- **ack_letter.j2** — the reporter-facing acknowledgement letter. The
  template carries the fields CRA Article 14 §6 asks for: case id,
  acknowledgement time-stamp, disclosure-policy pointer, contact
  channel for the reporter to reach the manufacturer, and the
  expected next-step timeline. Renders deterministically against
  the case ledger.
- **advisory.md.j2** — the human-readable public advisory. Renders
  against the fix-ready and fix-validated ledger entries with the
  disclosed vulnerability shape, the affected product versions, the
  corrective or mitigating measures, and the coordinated disclosure
  timeline.
- **advisory.csaf2.json.j2** — the machine-consumable public advisory
  in CSAF 2.0 format for downstream automation. The two advisory
  shapes are the same source-of-truth ledger rendered into two
  target schemas; downstream operators consuming CSAF and human
  readers consuming the Markdown advisory see byte-consistent
  content across the two surfaces.

CSAF 2.0 is the deliberate choice on the machine-consumable shape.
The OASIS CSAF technical committee is where the disclosed-vulnerability
schema is standardised on; the framework does not invent its own
advisory shape and does not lock the community into a proprietary
one.

### F-WF-CRA-CVD CORE-B — adapter stubs (PR #594)

[PR #594](https://github.com/secops-ng/secops-ng-framework/pull/594)
lands three adapter stubs the disclosure lifecycle interacts with as
outbound integrations:

- **CVE-request adapter** — the operator-side interaction with the CVE
  Numbering Authority the manufacturer is registered against. Emits
  the CVE request payload, consumes the assigned CVE identifier, and
  writes the assignment back into the case ledger. The stub declares
  the shape of the request and the shape of the response; the
  operator-side credentials and CNA routing are declared as adapter
  configuration.
- **CSIRT-coordination adapter** — the manufacturer-to-CSIRT
  coordination channel. Emits the coordination messages to the
  coordinating CSIRT declared under CRA Article 14. The stub
  declares the coordination protocol shape; the operator-side CSIRT
  assignment and channel configuration are declared as adapter
  configuration.
- **PGP delivery adapter** — the encrypted-delivery primitive the
  above coordination messaging channels lean on. CSIRT and CNA
  channels are typically PGP-encrypted; the stub declares the
  encryption boundary so downstream operators can wire their own key
  management without the playbook baking a specific key store in.

All three are stubs in the deliberate CACAO sense — the shape of the
adapter is declared, the interaction points are pinned, the case
ledger writes the correct events. The runnable emitters against
n8n / Temporal / LangGraph land in the follow-on
[t_14561b34](https://github.com/secops-ng/secops-ng-framework) CORE-PRIM
card (see the honest framing section below on G-03).

### F-WF-CRA-CVD CORE-C — D3-IRA + IR-6/SI-2 + Article 14 §6 KPI wiring (PR #595)

[PR #595](https://github.com/secops-ng/secops-ng-framework/pull/595)
lands the mappings-C milestone: the closure of the outbound and
inbound cross-reference graph on the CVD lifecycle.

D3FEND anchors: the playbook selects the `IncidentResponseAnalysis`
(D3-IRA) defensive technique. The audited entries `d3fend:cra:annex-i-2-cvd-policy`
and `d3fend:cra:annex-i-2-vuln-handling` under
`content/mappings/d3fend/cra.yaml` are updated to pin `playbook.cra_cvd@v1`
so the D3FEND graph closes in both directions.

OSCAL anchors: IR-6 (incident reporting — information sharing) and
SI-2 (flaw remediation) join SI-5 and RA-5 on the CVD control set.
IR-6 anchors the coordinate-disclosure leg (the manufacturer-to-CSIRT
and manufacturer-to-downstream coordination is the information-
sharing obligation IR-6 codifies); SI-2 anchors the develop-fix and
validate-fix legs (the corrective measure is the flaw remediation
SI-2 codifies).

CRA anchors: the Article 14 §6 acknowledgement-to-reporter inbound
entry `cra:art-14-6-ack-to-reporter` lands under
`content/mappings/cra/article-14-and-annex-i.yaml`, pinning
`playbook.cra_cvd@v1` and the new acknowledgement-SLA KPI
`kpi.cvd_ack_sla@v1` together on the same clause. The KPI itself
declares the acknowledgement-SLA metric: the elapsed time between the
awareness time-stamp on the intake step and the acknowledgement
time-stamp on the ack-to-reporter step, aggregated across the case
population, with the manufacturer's declared §6 window as the SLA
target. The metric is what closes the loop: the disclosure policy
declares a window under §6; the ledger records the actual
acknowledgement time; the KPI measures the manufacturer's adherence
to their own declared window across the case population.

NIS2 / DORA / GDPR closure: the mapping graph deliberately does not
cross-pin `cra_cvd` against NIS2 Article 23 (significant incident
notification), DORA Article 19 (major ICT-related incident reporting),
or GDPR Article 33 (personal-data breach notification). Those chains
run on their own regulator-facing playbooks that emit the appropriate
submissions when the case actually crosses those regimes' thresholds.
Cross-pinning `cra_cvd` against them would misrepresent the scope of
the disclosure lifecycle. Audited exclusions are recorded in
`content/mappings/{nis2,dora,gdpr}/_orphan_skip.yaml` so the orphan-CI
KRI stays defended without spurious cross-regime pins — the same
pattern the framework carries elsewhere. G-02 mapping coverage stays
closed at 27/27 with the outbound and inbound CRA graph now closed on
this playbook.

### F-WF-CRA-CVD EXTEND — cookbook walkthrough (PR #592)

[PR #592](https://github.com/secops-ng/secops-ng-framework/pull/592)
lands `docs/cookbook/cra_cvd.md`, the operator-facing walkthrough.
The walkthrough narrates the seven-step lifecycle, the CACAO
transitions between steps, the ledger shape on `__case_id__`, the
template renderings the CORE-A milestone lands, the adapter
interaction points the CORE-B milestone declares, and the mappings /
KPI closure the CORE-C milestone completes. It is written for the
operator standing up their CRA CVD policy for the first time, not for
the framework maintainer — it explains why the reporter-facing
lifecycle is a distinct playbook from the regulator-facing
notification chain, how the two compose on the actively-exploited
fork, and what the manufacturer's declared §6 window looks like when
it collides with the §1–§3 24h clock on a case that trips both.

## The actively-exploited fork

The most interesting single case in the CRA disclosure surface is
the one where a reporter submits a vulnerability report on a shipped
product and triage classifies the case as actively exploited. That
case fires both chains against the same triggering event. Field note
#101 landed the SRP chain. This one lands the CVD chain. The
composition is what makes the pair valuable.

The shape is straightforward when both playbooks are on the same
ledger. Intake runs on `cra_cvd`; the awareness time-stamp is
recorded. Triage runs and classifies the case as
actively-exploited. `cra_cvd` continues the disclosure lifecycle
forward: acknowledgement to the reporter (Article 14 §6), fix
development, fix validation, coordinated disclosure, public advisory
in both Markdown and CSAF 2.0 shapes. In parallel, `cra_cvd` emits a
fork event that spawns a sibling `cra_srp_notify` run keyed on the
same `__case_id__`. The SRP run picks up the awareness time-stamp
from the shared ledger and drives the 24-hour / 72-hour / 14-day
cascade against the ENISA SRP surface and the coordinating CSIRT.
Two artifacts, two ledgers, two mapping overlays, one case identifier
— and the full Article 14 discharge closes over both together.

An operator who was carrying only the SRP chain would meet the
regulator-facing obligation but leave the reporter-facing lifecycle
undischarged. An operator who was carrying only the CVD chain would
meet the reporter-facing lifecycle but leave the SRP submission
unpicked-up. The pair is what closes the surface.

## What this means for an EU SecOps team

The mid-market SecOps team standing up their first CRA Article 14
policy now has portable, deterministic CACAO v2 content for the full
disclosure surface. Two playbooks, seven-plus-three action steps, a
shared case ledger, the CSAF 2.0 advisory shape on the public
disclosure, an acknowledgement-SLA KPI on the §6 obligation, and the
D3FEND / OSCAL / CRA mapping graph closed in both directions. The
runnable emitters against n8n, Temporal, and LangGraph land in the
follow-on CORE-PRIM milestone; the operator running one of the three
today can still lift the CACAO source, wire it into their
orchestrator by hand, and discharge Article 14 against the shipped
playbook until the reference emitters land.

The point of the commons on a regulation with this footprint is
exactly this shape. The CRA does not describe how to build a
coordinated vulnerability disclosure policy; it obliges the
manufacturer to have one and to run it. Every mid-market SecOps team
carrying a product with digital elements has to arrive at the same
seven-step lifecycle and the same acknowledgement-SLA measurement
against their declared §6 window. Writing that lifecycle seven-
hundred times across the EU market is not a good use of the market's
attention. Writing it once, in the open, on a permissive content
licence, with the mapping graph closed and the KPIs wired, is what
the Digital Commons carries.

## Honest framing on what stays open

This wave lands a full SKELETON → CORE trilogy → EXTEND stack on a
single playbook and closes the Article 14 disclosure surface when
paired with #101. Gaps remain. Honest open beats:

- **G-03 three-target parity is deferred on this playbook.** The
  CACAO source and the templates ship in this wave; the runnable
  emitters against n8n, Temporal, and LangGraph land in the
  follow-on CORE-PRIM milestone (framework card, distinct from this
  wave). G-03 count is not touched by this wave. Operators running
  one of the three targets today can lift the CACAO source and wire
  it into their orchestrator by hand until the reference emitters
  land.
- **The three adapters ship as stubs.** CVE-request, CSIRT-coordination,
  and PGP delivery declare their interaction shapes and event
  boundaries; they do not carry runnable emitters against a specific
  CNA API, a specific CSIRT protocol, or a specific PGP key-management
  surface. Operator-side configuration is what closes the loop. The
  stub declares the shape; the operator's own CNA registration,
  CSIRT assignment, and key store carry the connection.
- **The §6 acknowledgement window is declared by the manufacturer,
  not by the framework.** The CVD policy under Article 14 §1 declares
  the acknowledgement window under §6. The playbook consumes the
  declared window as configuration and measures adherence against it
  via `kpi.cvd_ack_sla@v1`. The framework does not opine on what
  window a manufacturer should declare; it measures adherence to
  whatever window the operator commits to publicly.
- **NIS2 / DORA / GDPR interactions are audited exclusions.** The
  mappings graph does not cross-pin the CVD lifecycle against those
  regimes. When a case crosses NIS2 Article 23 or GDPR Article 33
  or DORA Article 19 thresholds, the operator's incident-management
  and breach-notification playbooks discharge those chains on their
  own. Cross-pinning `cra_cvd` against them would misrepresent the
  scope. Audited `_orphan_skip.yaml` entries document the choice so
  the orphan-CI KRI stays defended.
- **CSAF 2.0 is the current advisory shape.** The CSAF technical
  committee at OASIS iterates the schema; the template targets the
  current CSAF 2.0 shape and will be updated in follow-on PRs if the
  schema moves.

The accurate claim on this wave: the CRA Article 14 coordinated
vulnerability disclosure lifecycle lands as a shipped playbook with
its scaffold, its three-part CORE (templates, adapter stubs, mappings
and KPI closure), and its operator-facing cookbook walkthrough all
merged to framework `main` in the same window. Paired with #101, the
full Article 14 disclosure surface — reporter-facing lifecycle and
regulator-facing notification — now lands as two composable playbooks
keyed on the same case. G-01 catalogue coverage moves by one playbook
with its walkthrough already present. G-02 mapping coverage stays
closed at 27/27. G-03 three-target parity is not touched on this
playbook and will move in the follow-on CORE-PRIM milestone.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #591](https://github.com/secops-ng/secops-ng-framework/pull/591),
  [PR #593](https://github.com/secops-ng/secops-ng-framework/pull/593),
  [PR #594](https://github.com/secops-ng/secops-ng-framework/pull/594),
  [PR #595](https://github.com/secops-ng/secops-ng-framework/pull/595),
  and [PR #592](https://github.com/secops-ng/secops-ng-framework/pull/592).
  All five merged to `main`. Playbook source lives under
  [`content/playbooks/cra_cvd/`](https://github.com/secops-ng/secops-ng-framework/tree/main/content/playbooks/cra_cvd);
  the acknowledgement letter and CSAF 2.0 / Markdown advisory
  templates live under
  [`content/playbooks/cra_cvd/templates/`](https://github.com/secops-ng/secops-ng-framework/tree/main/content/playbooks/cra_cvd/templates);
  the mappings overlay lives at
  [`content/playbooks/cra_cvd/mappings.yaml`](https://github.com/secops-ng/secops-ng-framework/blob/main/content/playbooks/cra_cvd/mappings.yaml);
  the CRA Article 14 regime file lives at
  [`content/mappings/cra/article-14-and-annex-i.yaml`](https://github.com/secops-ng/secops-ng-framework/blob/main/content/mappings/cra/article-14-and-annex-i.yaml);
  the acknowledgement-SLA KPI lives at
  [`content/metrics/cvd_ack_sla.yaml`](https://github.com/secops-ng/secops-ng-framework/blob/main/content/metrics/cvd_ack_sla.yaml);
  cookbook walkthrough lives at
  [`docs/cookbook/cra_cvd.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/docs/cookbook/cra_cvd.md).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note, [#101](https://github.com/secops-ng/secops-ng-website),
  and the one hundred that preceded them.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two playbooks. One case identifier. A 24-hour clock, a 72-hour
clock, a 14-day clock, and a manufacturer-declared acknowledgement
window under §6. The regulation asks the manufacturer to run both
chains against the same triggering event. The commons now carries
both, in the open, on a permissive content licence. The operator
picks the target. The case ledger holds the shape.
