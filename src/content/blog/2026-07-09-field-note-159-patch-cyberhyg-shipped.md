---
title: "Field note #159 — F-WF-PATCH and F-WF-CYBERHYG flip to Shipped: the two NIS2 Art. 21(2)(e) and (g) hygiene pillars now carry formal ROADMAP entries"
description: "Field note one hundred and fifty-nine from the SecOps-NG Digital Commons. Framework PR #746 formally lands patch_management and cyber_hygiene_training as Shipped on the ROADMAP, closing a governance-maturity gap: both trilogies (SKELETON + CORE + EXTEND) had already landed in-tree; this entry names them on the roadmap where an operator can find them. The two playbooks discharge the maintenance and awareness-training legs of NIS2 Art. 21(2)."
pubDate: 2026-07-09
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-09", "playbooks", "nis2", "nis2-art-21", "patch-management", "cyber-hygiene", "training", "roadmap", "digital-commons", "field-note-159"]
---

Field note one hundred and fifty-nine. Framework PR #746
lands the ROADMAP entries for two playbooks whose full
trilogies were already in the tree but had never carried
a formal `Shipped` status: `patch_management` and
`cyber_hygiene_training`. The commons now names both on
the roadmap, and the READMEs read `Shipped` instead of the
stale `SKELETON` marker.

## What the two playbooks do

**`patch_management`** — the maintenance lifecycle a NIS2
essential or important entity runs on the assets it
operates: detect → classify → stage → validate → fan-out →
evidence-capture → notify. Seven CACAO v2 steps, six
JSON-native primitives, three compile-target examples
byte-pinned under `examples/{n8n,temporal,langgraph}/
patch_management/`, and a full operator cookbook at
`docs/cookbook/patch_management.md`. This is the discharge
surface for NIS2 Art. 21(2)(e) — the "policies and
procedures to assess the effectiveness of cybersecurity
risk-management measures" leg that lands on patch and
vulnerability handling for the assets the entity runs.

**`cyber_hygiene_training`** — the per-cycle awareness and
role-based training programme: roster inventory → schedule
training cycle → run phishing simulation → track
completion → capture dated attestation → notify the
training owner on gaps. CACAO v2 scaffold with the same
three-target compile set and a matching operator
cookbook. This is the **proactive** companion to the
existing **reactive** `phishing_triage` playbook: the two
sit under the same NIS2 article — Art. 21(2)(g), the
"basic cyber hygiene practices and cybersecurity
training" leg — and cover the two halves of it.

## Why the ROADMAP flip matters

A playbook can be in the tree, compile against all three
targets, carry byte-parity goldens, and still be invisible
on the roadmap. An operator reading `ROADMAP.md` to plan
their NIS2 Art. 21 discharge would not have seen
`patch_management` or `cyber_hygiene_training` on the
shipped list, even though the artifacts, primitives,
examples, and cookbooks were all in place.

PR #746 closes that gap. It does not add a line of
playbook code. What it adds is the governance surface:
two full `Shipped` ROADMAP entries with acceptance
criteria, the landed layers enumerated, and the audited
skips called out (DORA Art. 9, CRA Annex I §2, and the
GDPR data-flow leg on `patch_management`). The READMEs
in both playbook directories flip from `SKELETON` to
`Shipped` so the tree and the roadmap agree.

## The NIS2 Art. 21 read

Art. 21(2) is the risk-management measures list — the ten
lettered obligations essential and important entities have
to discharge. Two of them close cleanly with this ROADMAP
entry:

- **Art. 21(2)(e)** — the "policies and procedures to
  assess the effectiveness of cybersecurity risk-management
  measures" leg, on the maintenance axis. `patch_management`
  is the operator-side workflow that runs the assessment
  loop against the assets in scope.
- **Art. 21(2)(g)** — the "basic cyber hygiene practices
  and cybersecurity training" leg. `cyber_hygiene_training`
  is the proactive discharge; `phishing_triage` (already
  shipped) is the reactive one; both are now named against
  the same article on the mapping surface.

Together with the `phishing_triage`, `vulnerability_
management`, `incident_management`, and `crypto_
management` playbooks that already carried `Shipped`
markers, seven of the ten Art. 21(2) letters now have a
named workflow in the commons. The remaining three sit
against other playbooks — `supply_chain_security`,
`asset_management`, `backup_and_recovery` — whose
roadmap-flip is the next housekeeping wave.

## The sovereignty read

Both playbooks stay operator-configured at their wires:

- `patch_management` has no default patch repository, no
  default vendor advisory feed, no default change-approval
  system. The detection, classification, staging, and
  fan-out primitives are pure builders; the endpoints
  are compile-target config.
- `cyber_hygiene_training` has no default learning-
  management system, no default phishing-simulation
  vendor, no default attestation store. The training-
  cycle, roster, and evidence primitives are the same
  shape across n8n, Temporal, and LangGraph; the
  operator's LMS choice lives at the endpoint layer.

No default hardcoded to any commercial platform. No
default hardcoded to any single Member State's regulator.
The compile-target config is the seam.

## The G-01 / G-09 signal

- **G-01 — content coverage.** Two more playbooks name-
  matched to NIS2 Art. 21(2) letters, on the mapping
  surface an operator's compliance lead can read
  alongside the regulation.
- **G-09 — governance maturity.** The ROADMAP now agrees
  with the tree. Every `Shipped` line on the roadmap
  points to a directory whose README, artifacts, and
  cookbook match. No more phantom `SKELETON` markers
  hiding fully-shipped work.

## Where to look

- **Framework repo:**
  - `content/playbooks/patch_management/` — the maintenance
    lifecycle playbook, six primitives, three-target
    compile examples, byte-parity goldens.
  - `content/playbooks/cyber_hygiene_training/` — the
    proactive training and awareness playbook.
  - `docs/cookbook/patch_management.md` — the operator
    walkthrough for the maintenance lifecycle.
  - `docs/cookbook/cyber_hygiene_training.md` — the
    operator walkthrough for the training programme.
  - `ROADMAP.md` — the two new `Shipped` entries under
    F-WF-PATCH and F-WF-CYBERHYG.

The maintenance and awareness legs of NIS2 Art. 21(2)
now have named workflows in the commons and a matching
roadmap entry pointing to them.
