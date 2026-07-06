---
title: "Field note #130 — SOC2 Trust Service Criteria crosswalk opens, ISO 27001 Annex A A.5/A.6/A.7 close out (G-06/G-07)"
description: "Field note one hundred and thirty from the SecOps-NG Digital Commons. A ten-PR wave lands two things at once: the SOC2 Trust Service Criteria crosswalk opens as a new framework track (Security CC1–CC9 skeleton merged, Availability A1.1–A1.3 merged, Confidentiality C1.1–C1.2 in review), and the ISO/IEC 27001:2022 Annex A crosswalk closes its A.5 organisational, A.6 people, and A.7 physical themes end-to-end. Cross-regime coverage now spans NIS2, DORA, CRA, GDPR, ISO 27001, and SOC2 against a single set of versioned controls."
pubDate: 2026-07-06
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "g-07", "soc2", "iso27001", "annex-a", "crosswalk", "mappings", "digital-commons", "field-note-130"]
---

Field note one hundred and thirty. Ten pull requests
landed against `secops-ng-framework` since the third-wave
close-out reported in field note #129. Two things happened
in the same day.

First, the SOC2 Trust Service Criteria crosswalk opened as
a new framework track. Security (Common Criteria) CC1
through CC9 landed as a skeleton, Availability A1.1
through A1.3 landed with control references, and
Confidentiality C1.1–C1.2 is in review. Second, the ISO
27001 Annex A crosswalk continued its steady close: the
A.5 organisational-controls theme closed at 37/37, the A.6
people-controls theme closed, the A.7 physical-controls
theme closed, and the A.8 technological-controls theme
extended through A.8.23–A.8.27 (leaving only the
A.8.18–A.8.22 rebase to close A.8 end-to-end).

## What landed

**SOC2 Trust Service Criteria — new framework track.**

- PR #673 — SOC2 TSC Security (Common Criteria) CC1 through
  CC9 skeleton. Control environment (CC1), communication and
  information (CC2), risk assessment (CC3), monitoring
  activities (CC4), control activities (CC5), logical and
  physical access (CC6), system operations (CC7), change
  management (CC8), and risk mitigation (CC9). Every anchor
  quotes the criterion text as a fair-use excerpt, carries an
  id under the `soc2:cc-<n>-<slug>` scheme, and either points
  at the SecOps-NG playbook and control references that
  discharge the obligation or ships a gap note naming the
  adjacent anchors and the governance surface.
- PR #674 — SOC2 TSC Availability A1.1 (capacity), A1.2
  (environmental protections, backup, and recovery), and
  A1.3 (recovery testing). Wires to the same continuity,
  backup-integrity, and recovery-drill controls that carry
  the corresponding DORA Article 12 ICT business continuity,
  NIS2 Article 21(2)(c) business-continuity, and CRA Annex I
  §2 obligations on the OSCAL blocks.
- PR #675 — SOC2 TSC Confidentiality C1.1–C1.2 in review.
  Wires to the same encryption-at-rest, encryption-in-
  transit, key-management, and data-classification controls
  that carry GDPR Article 32(1)(a), NIS2 Article 21(2)(h),
  DORA Article 9(2), and CRA Annex I §1(b) on the OSCAL
  blocks.

**ISO 27001 Annex A — theme close-outs.**

- PR #665 — Annex A.8.23 through A.8.27, extending A.8
  technological-controls. A.8.23 web filtering, A.8.24 use
  of cryptography, A.8.25 secure development lifecycle,
  A.8.26 application security requirements, and A.8.27
  secure system architecture and engineering principles.
- PR #669 — Annex A.5.19 through A.5.25, continuing A.5.
  A.5.19 information security in supplier relationships,
  A.5.20 addressing information security within supplier
  agreements, A.5.21 managing information security in the
  ICT supply chain, A.5.22 monitoring, review and change
  management of supplier services, A.5.23 information
  security for use of cloud services, A.5.24 information
  security incident management planning and preparation,
  and A.5.25 assessment and decision on information
  security events.
- PR #670 — Annex A.5.26 through A.5.37, the closing batch
  of A.5 organisational-controls. A.5.26 response to
  information security incidents through A.5.37 documented
  operating procedures. **A.5 now closes at 37/37.**
- PR #671 — Annex A.7.3 through A.7.14, the closing batch
  of A.7 physical-controls. A.7.3 securing offices, rooms
  and facilities through A.7.14 secure disposal or re-use of
  equipment. **A.7 now closes end-to-end.**
- PR #672 — Annex A.6.2, A.6.4 through A.6.8, closing A.6
  people-controls. Terms and conditions of employment,
  disciplinary process, responsibilities after termination
  or change of employment, confidentiality or non-disclosure
  agreements, remote working, and information security event
  reporting. **A.6 now closes end-to-end.**

## Where the crosswalk surface is now

- **SOC2 TSC — Security (CC1–CC9):** skeleton in tree, all
  nine common-criteria groups anchored.
- **SOC2 TSC — Availability (A1.1–A1.3):** merged with
  control references.
- **SOC2 TSC — Confidentiality (C1.1–C1.2):** in review.
- **SOC2 TSC — Privacy (P1–P8) and Processing Integrity
  (PI1.1–PI1.5):** not yet opened. Good-first-issue slots
  waiting.
- **ISO 27001 Annex A.5 organisational-controls:** 37/37
  closed.
- **ISO 27001 Annex A.6 people-controls:** closed.
- **ISO 27001 Annex A.7 physical-controls:** closed.
- **ISO 27001 Annex A.8 technological-controls:** 32/34 in
  tree (A.8.1–A.8.17 and A.8.23–A.8.34 merged); the
  A.8.18–A.8.22 sibling PR rebase closes the theme at
  34/34.

The mapping layer now speaks NIS2, DORA, CRA, GDPR, ISO
27001, SOC2 (Security and Availability so far), and D3FEND
against a single set of versioned playbooks and controls.

## What this means for an operator

If you run an EU-regulated system under NIS2 or DORA and
also carry a SOC2 attestation obligation because a customer
or a subsidiary requires it, the crosswalk now points every
Common Criteria and Availability criterion at the same
operational spine that already discharges NIS2 Article
21(2) and DORA Chapter II. Same for ISO 27001: the Annex A
surface is substantially complete, and the id scheme
guarantees an auditor can walk from A.5, A.6, A.7, or
(soon) all of A.8 straight to the SecOps-NG playbook or
control that discharges the anchor.

Three properties matter to the practitioner:

1. **One posture, multiple certifications.** A single
   evidence run against the shipped controls produces
   artefacts that read against NIS2 Article 21(2), DORA
   Chapter II, CRA Annex I, GDPR Article 32, ISO 27001
   Annex A, and now SOC2 Trust Service Criteria. The
   mapping layer does the translation; the operator does
   not maintain six evidence trees.
2. **Certification substrate is not vendor-locked.** The
   crosswalk is a public artifact under community
   governance. Nothing in the mapping requires a
   proprietary GRC platform to read it. An operator moving
   from one auditor, one cloud, or one GRC substrate to
   another carries the crosswalk with them.
3. **Gap notes are load-bearing.** Where a SOC2 criterion
   or an Annex A anchor is discharged against operator-side
   policy rather than a versioned artifact, the entry says
   so and names the adjacent anchors that structure the
   discipline. A future artifact can replace the gap
   without breaking the id or the cross-regime hooks.

## Community call-to-action

Two SOC2 tracks are open for contribution and carry
good-first-issue labels on `secops-ng-framework`:

- **SOC2 TSC Privacy (P1–P8):** eight criteria covering
  notice, choice and consent, collection, use and
  retention, access, disclosure to third parties, quality,
  and monitoring and enforcement. The GDPR crosswalk that
  already lives in `content/mappings/gdpr/` gives the
  privacy contributor a substantial head start on the
  control references.
- **SOC2 TSC Processing Integrity (PI1.1–PI1.5):** five
  criteria covering completeness, accuracy, timeliness,
  authorisation, and validity of processing. Wires cleanly
  to the same integrity, latency, and validation controls
  the four-regime ring already carries.

The mapping-authoring guide at
[`docs/contributing/playbook-authoring.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/docs/contributing/playbook-authoring.md)
and the SOC2 theme index at
[`content/mappings/soc2/README.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/content/mappings/soc2/README.md)
are the two starting points for anyone opening the first
Privacy or Processing Integrity PR.

## Where to look

- **Framework repo:**
  - `content/mappings/soc2/security-cc.yaml` — CC1 through
    CC9 skeleton.
  - `content/mappings/soc2/availability.yaml` — A1.1
    through A1.3 with control references.
  - `content/mappings/soc2/confidentiality.yaml` —
    C1.1–C1.2 in review.
  - `content/mappings/soc2/README.md` — theme index and id
    scheme.
  - `content/mappings/iso27001/annex-a-5-organisational.yaml`
    — 37/37, closed.
  - `content/mappings/iso27001/annex-a-6-people.yaml` —
    closed.
  - `content/mappings/iso27001/annex-a-7-physical.yaml` —
    closed.
  - `content/mappings/iso27001/annex-a-8-technological.yaml`
    — 32/34 in tree; A.8.18–A.8.22 rebase closes the
    theme.

Ten merges in a day, two frameworks moving in parallel,
three ISO 27001 themes closed end-to-end, and one new
framework track opened for the community to fill in. The
Digital Commons keeps its rhythm.
