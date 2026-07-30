---
title: "Field note #6 — OSCAL × D3FEND control xref lands in CORE, and the compile-target triplet fills out to four of five"
description: "Sixth field note from the SecOps-NG Digital Commons: the OSCAL + D3FEND control cross-reference reaches CORE shape, closing a Current Milestone DoD bullet for NIS2 / DORA / CRA; and with identity-compromise picking up its n8n + Temporal skeletons, four of five reference playbooks now carry the full n8n + Temporal + LangGraph triplet."
pubDate: 2026-05-30
author: "The SecOps-NG commons"
tags: ["shipping-update", "oscal", "d3fend", "control-xref", "cacao", "n8n", "temporal", "langgraph", "identity-compromise", "nis2", "dora", "cra", "digital-commons"]
---

Field note #5 was about portable artefacts meeting the runtimes operators
already run. This one is about the substrate underneath those artefacts
getting denser in two directions at once: regulatory control mapping
reaches CORE shape, and the reference compile-target matrix fills out
across the playbook catalogue.

## Control map: OSCAL × D3FEND reaches CORE

A Current Milestone DoD bullet on the roadmap reads:
"OSCAL / D3FEND control map for NIS2 + DORA + CRA". With PR
[#106](https://github.com/secops-ng/secops-ng-framework/pull/106) merged,
that bullet has its initial CORE shape.

What that means in practice:

- Regulatory obligations are expressed once in OSCAL — NIS2 Article 21,
  DORA Article 17, CRA Articles 13 and 14 — and cross-referenced to
  D3FEND defensive techniques. Playbook `control_refs` resolve through
  this map rather than each playbook re-asserting a regulator citation
  on its own.
- The same in-CI linter that gated phishing-triage's resolved control
  references last wave gates this one too: control identifiers in any
  playbook have to resolve into the OSCAL × D3FEND map or the build
  fails. The map is not decorative.
- Initial CORE is intentionally narrow. Coverage will grow with the
  catalogue; depth, edge-cases, and country-specific transpositions are
  community-contributed surface.

The shape matters more than the count of mappings today. A CACAO step
that says "notify the competent authority within 24 hours" no longer has
to inline that obligation: it points at the OSCAL control, the OSCAL
control points at the regulator article and the D3FEND technique, and
the linter checks the chain. Future compile targets — n8n, Temporal,
LangGraph, or anything community-contributed — inherit the obligation
through the substrate instead of re-encoding it.

## Compile-target sweep: four of five reference playbooks now triplet-complete

The reference compile-target matrix had four rows when field note #5
shipped. With identity-compromise picking up its n8n and Temporal
SKELETONs in PR [#116](https://github.com/secops-ng/secops-ng-framework/pull/116)
(in Custodian review), the matrix now looks like this:

| Reference playbook    | n8n | Temporal | LangGraph |
|-----------------------|-----|----------|-----------|
| cloud-misconfig       | ✓   | ✓        | ✓         |
| vuln-intake           | ✓   | ✓        | ✓         |
| data-exfil            | ✓   | ✓        | ✓         |
| threat-intel-ingest   | ✓   | ✓        | ✓         |
| identity-compromise   | ✓\* | ✓\*      | ✓         |

`\*` identity-compromise n8n + Temporal skeletons are in Custodian review
on PR #116; the LangGraph row is already on main.

Four of five reference playbooks now demonstrate the same intent
artefact compiled into three different runtimes. The fifth is one
review away.

Two things follow from that:

- The "framework-agnostic" claim is now a concrete pattern across the
  catalogue rather than a single worked example. A community
  contribution that ports any of these to a fifth runtime — MindStudio,
  Make, Zapier, StackAI, CrewAI, something not yet on anyone's list —
  has a clear shape to follow.
- The CORE-shape work — controls, telemetry bindings, KPIs — is paid
  back across all three compile targets at once. Substrate hardening
  upstream of runtime work is the whole point of the structure.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the OSCAL × D3FEND map, the playbooks, the reference compile targets,
  the in-CI cross-reference linter.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ones that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the kanban, the auto-generated roadmap.

The Digital Commons substrate is filling in. If you run any of these
five playbook patterns today and want the resolved-control / OCSF /
runtime-portability surface against your own stack, the catalogue is the
place to start and the kanban is the place to ask for what is missing.

More soon, from the lanes.
