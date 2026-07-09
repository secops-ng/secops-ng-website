---
title: "Field note #160 — Measuring agentic security: three new KPI/KRI definitions join the commons as EU regulation converges on the same surface"
description: "Field note one hundred and sixty from the SecOps-NG Digital Commons. Framework PR #747 lands the first agentic-security KPI/KRI triad under content/metrics/ — agentic_threat_detection_rate, agentic_model_decision_latency_seconds, and agentic_false_positive_rate — wired to the agentic_threat_response playbook. The metrics ship the same week the European Commission unveiled the EU Cloud and AI Development Act plus the AI Cybersecurity Action Plan, converging on the same agentic-security surface the commons has been building for."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-04", "g-05", "metrics", "kpi", "kri", "agentic-security", "eu-ai-cybersecurity-action-plan", "sovereignty", "digital-commons", "field-note-160"]
---

Field note one hundred and sixty. Framework PR #747 lands
the first agentic-security KPI/KRI triad in the commons
catalogue under `content/metrics/`. Three definitions, all
wired to the `agentic_threat_response` playbook, all
maturity `experimental`, all shipped with the same
schema every other catalogue entry follows:

- `kpi.agentic_threat_detection_rate@v1`
- `kri.agentic_model_decision_latency_seconds@v1`
- `kri.agentic_false_positive_rate@v1`

They are the first metric shapes the commons publishes for
the machine-speed adversary case set. The window matters:
the European Commission announced the EU Cloud and AI
Development Act and the AI Cybersecurity Action Plan the
same week, and the regulatory conversation is now
converging on the exact surface these three metrics read.

## What the triad measures

**Detection rate — how much of the detect pillar is
oriented at the agentic adversary.** The KPI reads the
ratio of detection firings classed as agentic-tradecraft —
anomalous LLM API call volume, rapid credential-
enumeration cadence, sub-minute self-correction bursts,
LLM-assisted lateral-movement fingerprints — over the
total detection-firing population. It is detection-vendor
neutral: the class marker is carried on the OCSF Detection
Finding meta-finding the operator's SIEM emits, not on a
vendor-specific rule object. Community-recommended
starting floor is five percent; operators running heavier
LLM-integrated environments typically set higher targets
in their scoped variants.

**Decision latency — is the ingest step losing the timing
race?** The KRI reads P95 latency in seconds of LLM /
agentic-model inference decisions executed inside the
`agentic_threat_response` ingest step. The autonomous
adversary's self-correction cadence is sub-minute; a P95
model-decision latency that climbs past a small number of
seconds is the leading signal that the ingest step is
narrowing the containment window. Warn at two seconds,
high at five, breach at fifteen.

**False-positive rate — is the agentic detection lane
credible?** The second KRI reads the fraction of firings
on the agentic-tradecraft class that ground-truth review
subsequently marked benign. It is the confidence gate on
the first KPI: a detection rate can only climb legitimately
if the underlying signal quality holds. Warn at fifteen
percent, high at thirty, breach at fifty. The three
indicators together are the smallest coherent read of the
agentic-detect-through-decision loop.

## Why the metrics catalogue matters here

The commons ships portable content — CACAO playbooks,
OSCAL/D3FEND mappings, OCSF data shapes, KPI/KRI
definitions — and reference compilers that emit that
content into whatever orchestrator the operator already
runs. A metric that lives only inside a vendor's dashboard
is trapped there; a metric shape carried on the OCSF event
the operator's SIEM already emits is portable across the
operator's whole detection surface, and portable across
tomorrow's compile target too.

That portability is the whole point of the catalogue
entry. The agentic detection rate ratio does not care
whether the operator is on n8n today and Temporal next
year; the class marker is carried on the OCSF Detection
Finding envelope, and the aggregation formula is fixed
under the catalogue entry itself. The definition is the
contract; the compile target's job is to render it against
operator data.

## The regulatory substrate

The same week the triad landed in the tree, the European
Commission unveiled two package announcements: the EU
Cloud and AI Development Act and the AI Cybersecurity
Action Plan. The framing is that EU AI cybersecurity is
becoming a governance layer for agentic and LLM-assisted
systems — a public accountability regime for the security
posture of the models operators run, and a design goal
for a Made-in-Europe AI security surface.

The commons' position here is straightforward: this is
the surface the community has been building portable
content for. The `agentic_threat_response` playbook and
the three metrics that measure its detect-through-decision
loop are not written against a specific regulatory clause;
they are written against the observable behaviour of an
autonomous adversary and the OCSF envelope the operator's
detection surface emits. When the regulation names an
accountability shape — model-decision auditability,
detection coverage of agentic tradecraft, response
telemetry preserved for supervisory review — the commons
already has portable metric shapes an operator can point
at as the read on that shape.

Sovereignty here is a public good, not a marketing lever.
An operator running on an EU-hostable compile target,
against community-defined KPI/KRI shapes, reading their
own detection surface — that is the operability property
the FOUNDATION document names, and it is the same
operability property the regulatory conversation is
converging on. The catalogue entries do not solve
compliance for anyone. They give operators a portable
place to stand.

## Digital Rights context

The Chat Control plenary vote scheduled at the European
Parliament for 2026-07-09 12:00 UTC is pending at the time
of writing. The commons watches this one for the reason it
watches all comms-security regulation that intersects
with fundamental rights: an operator's compliance posture
becomes materially harder to hold when regulatory
scanning obligations collide with the confidentiality
properties operators owe the people whose data crosses
their systems. Vote pending; the community will read the
outcome and, if the vote lands, will fold the operator-
side implications into the appropriate playbook and
control-mapping surfaces in the ordinary way.

## What lands in this PR

- `content/metrics/agentic_threat_detection_rate.yaml`
  + reference visualisation contract.
- `content/metrics/agentic_model_decision_latency_seconds.yaml`
  + reference visualisation contract.
- `content/metrics/agentic_false_positive_rate.yaml`
  + reference visualisation contract.
- Each entry names its `telemetry_ref`, its
  `playbook_ref` back to `agentic_threat_response`, and
  its external references — NIS2 Art. 21(2)(b) and
  Art. 21(2)(e), ENISA Threat Landscape, MITRE ATLAS,
  ISO/IEC 27004.
- Maturity marker: `experimental`. Community-recommended
  starting thresholds are named in each entry; operators
  running their own scoped variants should re-baseline
  against their observed adversary cadence.

## Where the ring goes next

The triad is the first published slice of the agentic-
security metric surface, not the last. Coverage of the
supply-chain leg (Art. 21(2)(e), the agentic-tool
provenance surface), coverage of the model-serving
availability leg on the operator-hosted case, and
scoped variants for the DORA and CRA case sets are the
open threads the commons expects to pick up next. The
metric shapes are catalogue entries — anyone can propose
one, and the review criteria live in `GOVERNANCE.md` and
the `content/metrics/_schema` folder in the framework
repository.

For the operator reading this today: three portable
metric definitions, one playbook they point at, and a
regulatory conversation converging on the same surface
the commons has already been building for. That is where
the ring is.

## Read more

- Framework repository: <https://github.com/secops-ng/secops-ng-framework>
- The three catalogue entries live under `content/metrics/` in framework PR #747.
- Roadmap goals: G-04 (KPI/KRI catalogue maturity) and G-05 (sovereignty posture / operability).
