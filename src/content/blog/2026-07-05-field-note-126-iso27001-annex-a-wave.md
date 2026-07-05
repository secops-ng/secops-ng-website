---
title: "Field note #126 — the ISO/IEC 27001:2022 Annex A crosswalk opens: operators can now map their existing 27001 controls into the commons (G-06), and CRA Art.13(11) record-retention lands alongside (G-02)"
description: "Field note one hundred and twenty-six from the SecOps-NG Digital Commons. A wave of merges today opens the ISO/IEC 27001:2022 Annex A crosswalk under content/mappings/iso27001/: the organisational A.5 theme (A.5.1–A.5.6), the people A.6 theme (A.6.1 screening, A.6.3 awareness), the first physical A.7 entries (A.7.1 perimeters, A.7.2 entry), and the first stretch of technological A.8 controls (A.8.1 through A.8.7). Alongside, the CRA Art.13(11) ten-year record-retention obligation lands under content/mappings/cra/. Operators using ISO 27001 as their baseline can now see which SecOps-NG playbooks satisfy which Annex A controls, in the same YAML shape the NIS2, DORA, CRA, and GDPR crosswalks already carry."
pubDate: 2026-07-05
author: "The SecOps-NG commons"
tags: ["field-note", "g-06", "g-02", "iso27001", "annex-a", "crosswalk", "cra", "record-retention", "mappings", "digital-commons", "field-note-126"]
---

Field note one hundred and twenty-six. A wave of merges today
opens the ISO/IEC 27001:2022 Annex A crosswalk on the
framework. This is the moment operators who run ISO 27001 as
their baseline can start reading the commons in the vocabulary
they already use every day.

## What opened today

Under `content/mappings/iso27001/`, the Annex A crosswalk now
covers the following controls, laid out one YAML file per
Annex A theme (organisational, people, physical,
technological):

- **A.5 Organisational (`annex-a-5-organisational.yaml`).**
  A.5.1 Policies for information security, A.5.2 Information
  security roles and responsibilities, A.5.3 Segregation of
  duties, A.5.4 Management responsibilities, A.5.5 Contact with
  authorities, A.5.6 Contact with special interest groups.
- **A.6 People (`annex-a-6-people.yaml`).** A.6.1 Screening,
  A.6.3 Information security awareness, education and
  training.
- **A.7 Physical (`annex-a-7-physical.yaml`).** A.7.1 Physical
  security perimeters, A.7.2 Physical entry.
- **A.8 Technological (`annex-a-8-technological.yaml`).** A.8.1
  User endpoint devices, A.8.2 Privileged access rights, A.8.3
  Information access restriction, A.8.4 Access to source code,
  A.8.5 Secure authentication, A.8.6 Capacity management, A.8.7
  Protection against malware.

Every entry follows the same crosswalk conventions the other
regime files already carry: a stable `iso27001:a-<theme>-<number>-<slug>`
id, the Annex A control text quoted from the standard, the
SecOps-NG playbooks and controls that satisfy it, and — where
relevant — the neighbouring regime articles it lines up with
across NIS2, DORA, CRA, and GDPR. The A.5 file also carries
the ISO 27001 crosswalk conventions themselves, sitting next
to the entries they govern rather than in a separate document
an operator has to hunt for.

Alongside the ISO wave, one CRA entry landed:

- **CRA Art.13(11) ten-year record-retention
  (`content/mappings/cra/article-13.yaml`,
  `cra:art-13-record-retention`).** The obligation on
  manufacturers to keep the technical documentation and the EU
  declaration of conformity available to authorities for ten
  years after a product with digital elements is placed on the
  market — or for the product's declared support period,
  whichever is longer — is now in the CRA crosswalk. The entry
  is honest about a gap it exposes: the shipped control
  catalogue does not yet carry a dedicated evidence-retention
  control that captures the ten-year horizon, so its
  `control_refs` are deliberately empty and the OSCAL ring
  will pick it up cleanly once an `evidence_retention` control
  lands. Naming the gap in the mapping is how the crosswalk
  stays trustworthy.

## Why this is a G-06 moment

G-06 is the regulatory-crosswalk breadth goal: SecOps-NG
should not require an operator to translate their existing
compliance vocabulary into the framework's before they can
adopt anything. Every European operator running SecOps-NG has
been running something else first — an ISMS built against ISO
27001 in most cases, sometimes SOC 2, sometimes both. Until
today the crosswalks covered the regulation side (NIS2, DORA,
CRA, GDPR) and the technique side (D3FEND), but ISO 27001 —
the certification most EU operators already hold — was still a
translation the operator had to do in their head.

The Annex A crosswalk removes that translation. An operator
holding an ISO 27001:2022 certificate can now walk their
Annex A control set against the same crosswalk YAMLs and see,
control by control, which SecOps-NG playbooks satisfy which
Annex A entries — and reciprocally, which Annex A entries a
shipped playbook already covers. The ISMS becomes the entry
point into the commons, not a document the operator has to
carry separately.

## What "the wave opens" means, and what is still coming

This is the opening wave of the ISO 27001:2022 Annex A
crosswalk, not its completion. Annex A carries 93 controls
across the four themes; today's merges cover the anchor of
each theme and the first stretch of the technological theme.
The remaining A.8 controls, and the balance of A.5, A.6, and
A.7, will land in subsequent waves in the same shape.

The convention the A.5 file establishes — one file per Annex
A theme, one entry per numbered control, `iso27001:a-<theme>-<number>-<slug>`
id — is now the shape every subsequent Annex A entry follows.
An operator watching the crosswalk grow can predict where the
next control they care about will land before it lands.

## How this fits the four-regime OSCAL ring

Field note #124 announced that the four-regime OSCAL ring
(NIS2, DORA, CRA, GDPR) closed with the GDPR OSCAL component
definition landing and the nightly CI parity lane going green
end to end. ISO 27001 is not a European regulation and does
not join that ring on the regulatory axis. It joins as an
industry-standard baseline: the ISMS shape most EU operators
already run.

The immediate practical consequence is that a playbook which
already carries article references into NIS2 or DORA and
therefore lands in the OSCAL rings for those regimes will now,
where the same playbook also satisfies an Annex A control,
carry that Annex A reference in the same YAML block. The
crosswalk is additive to the OSCAL ring, not a fork of it. An
operator running an ISO 27001 audit against a SecOps-NG
deployment reads the same mapping YAMLs an operator running a
NIS2 conformity assessment reads.

## Community language, no gatekeeping

The crosswalk is public. There is no gated version. There is
no consultant edition. The Annex A control text is quoted from
the standard as fair-use excerpt for the purpose of the
crosswalk; the mapping — the assertion that a given SecOps-NG
playbook satisfies a given Annex A control — is community
work that any operator can read, verify, and challenge on the
public issue tracker.

If a mapping is wrong in your read of the Annex A control
text, opening an issue on the framework repository is the way
to correct it. The crosswalks are versioned in git, discussed
on public PRs, and audited against the standard by the same
maintainers who audit the regulation crosswalks. There is no
private path.

## Where to look

- **Framework repo:**
  - `content/mappings/iso27001/annex-a-5-organisational.yaml`
    — the A.5 organisational-controls file, including the
    crosswalk conventions that govern all subsequent Annex A
    entries.
  - `content/mappings/iso27001/annex-a-6-people.yaml` — the
    A.6 people-controls file (A.6.1 Screening, A.6.3
    Awareness).
  - `content/mappings/iso27001/annex-a-7-physical.yaml` —
    the A.7 physical-controls file (A.7.1 Perimeters, A.7.2
    Entry).
  - `content/mappings/iso27001/annex-a-8-technological.yaml`
    — the A.8 technological-controls file (A.8.1 through
    A.8.7 in this wave).
  - `content/mappings/iso27001/README.md` — the theme index
    and the id scheme.
  - `content/mappings/cra/article-13.yaml` — the CRA
    Art.13(11) ten-year record-retention entry,
    `cra:art-13-record-retention`.

For any EU operator who has been holding an ISO 27001
certificate and wondering where the framework meets their
existing ISMS: this is where. Whichever Annex A control you
want to trace into the commons first, the crosswalk convention
is now in place and the anchor entries are shipped. The
subsequent waves land here, in the same files, in the same
shape.
