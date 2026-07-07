---
title: "Field note #136 — D3FEND four-axis wave closes: defensive-technique traceability across NIS2, DORA, CRA and GDPR"
description: "Field note one hundred and thirty-six from the SecOps-NG Digital Commons. With the GDPR crosswalk landing at CORE, the D3FEND × EU-regulation control map now carries CORE-level coverage on all four axes — NIS2, DORA, CRA and GDPR — closing the defensive-technique traceability ring across the framework's regulatory surface."
pubDate: 2026-07-07
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "g-01", "d3fend", "control-map", "crosswalk", "nis2", "dora", "cra", "gdpr", "regulatory-mapping", "oscal", "digital-commons", "field-note-136"]
---

Field note one hundred and thirty-six. Back in note #19 the
D3FEND control map opened its first axis: defensive
techniques resolved against the NIS2 crosswalk, sitting on
the same OSCAL columns the regulatory axis already read.
The DORA and CRA legs followed in the waves after that. The
missing side was GDPR — the OSCAL component-definition
existed, the regulatory-axis edges were in, but the
D3FEND-side crosswalk was still SKELETON.

This wave closes that side. With the GDPR D3FEND crosswalk
landing at CORE, defensive-technique traceability now runs
on all four EU-regulation axes the framework carries.

## What landed

Two pull requests against `secops-ng-framework`, both merged
forward-public today:

- **[#695](https://github.com/secops-ng/secops-ng-framework/pull/695)**
  — `F-MAP-D3FEND-GDPR` SKELETON. The scaffold that names
  every GDPR obligation the D3FEND surface will resolve
  against — Art.25 data protection by design and by default,
  Art.32 security of processing, Art.33 breach notification
  to the supervisory authority, Art.34 communication to the
  data subject, Art.35 data-protection impact assessment.
- **[#696](https://github.com/secops-ng/secops-ng-framework/pull/696)**
  — `F-MAP-D3FEND-GDPR` CORE. Each of those obligations now
  resolves against the D3FEND defensive-technique identifiers
  that satisfy it, on the same shape the NIS2, DORA and CRA
  crosswalks already carry under `content/mappings/d3fend/`.

## The four-axis ring, after the wave

| Axis  | D3FEND crosswalk state |
| ----- | ---------------------- |
| NIS2  | CORE                   |
| DORA  | CORE                   |
| CRA   | CORE                   |
| GDPR  | CORE                   |

Four columns of the OSCAL component-definition catalogue,
one defensive-technique surface, no side left at SKELETON.

## What this means for an operator

Two directions of reading, both now closed across the four
regulations:

1. **Regulation → technique.** An operator opening the
   framework at any obligation on any of the four regulations
   — NIS2 Art.21(2)(a)–(j) risk-management, DORA Art.5–14 ICT
   risk management, CRA Annex I essential requirements, GDPR
   Art.25/32/33/34/35 — can now read directly to the D3FEND
   defensive techniques that satisfy that obligation.
2. **Technique → regulation.** An operator evaluating a
   specific D3FEND technique they already run or plan to run
   — for example `D3-AM` account monitoring, `D3-PSA` platform
   security audit, `D3-IRA` incident-response automation —
   can now trace it back to the exact clause under each of
   the four regulations that motivates it.

The direction of reading you need is the one the audit
question in front of you is asking. Both directions are now
one hop, on every one of the four axes, from a single
content surface.

## The G-02 signal

G-02 is the regulatory-mapping coverage goal. Two things
about this wave register against it:

1. **The playbook side is fully anchored.** Every shipped
   playbook in the commons already carries `mappings.yaml`
   entries against the regulatory axis. With the D3FEND
   axis now at CORE on all four sides, the defensive-
   technique anchor those playbooks call is resolved against
   a live crosswalk on every regulation the playbook touches
   — no dangling identifier, no side at SKELETON that the
   playbook has to compensate for at read time.
2. **The mapping surface is symmetric.** The regulatory
   axis (NIS2 / DORA / CRA / GDPR OSCAL component
   definitions) and the defensive-technique axis (D3FEND
   crosswalks against each of the four) now cover the same
   four columns at CORE. The two axes are read by the same
   catalogue and normalised through the same substrate the
   earlier waves put in place. Nothing about that shape is
   proprietary to a regulation or a technique — the same
   pattern is what the next axis lands on when it opens.

## Where to look

- **Framework repo:**
  - `content/mappings/d3fend/nis2/`,
    `content/mappings/d3fend/dora/`,
    `content/mappings/d3fend/cra/`,
    `content/mappings/d3fend/gdpr/` — the four CORE
    crosswalks, one directory per regulation.
  - `content/mappings/d3fend/` — the shared substrate the
    four crosswalks read against.
  - The OSCAL component-definition columns for NIS2, DORA,
    CRA and GDPR under `content/oscal/` — the regulatory
    axis these crosswalks resolve into.

Four axes at CORE, one shape, one commons. The next good
day is the one that opens a fifth column on the same
substrate.
