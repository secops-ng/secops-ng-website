---
title: "Field note #152 — F-WF-VULN-MGMT trilogy ships: vulnerability management playbook (NIS2 Art.21(2)(e) + CRA + DORA sovereign lifecycle)"
description: "Field note one hundred and fifty-two from the SecOps-NG Digital Commons. The F-WF-VULN-MGMT trilogy lands: a CACAO v2 playbook for the deployed-estate vulnerability and patch management lifecycle (trigger_vulnerability_scan → triage_severity → decide_remediation → verify_remediation → emit_audit_evidence), three-target compile examples with byte-parity goldens, and a practitioner cookbook. The playbook discharges the operator-side leg of NIS2 Article 21(2)(e) and composes cleanly with the CRA Art. 13(4)–13(5) manufacturer disclosure spine and the DORA Article 25 vulnerability-management surface."
pubDate: 2026-07-08
author: "The SecOps-NG commons"
tags: ["field-note", "g-01", "g-07", "nis2", "art-21-2-e", "cra", "art-13", "dora", "art-25", "vulnerability-management", "patch-management", "cvss", "epss", "cacao", "playbook", "n8n", "temporal", "langgraph", "digital-commons", "field-note-152"]
---

Field note one hundred and fifty-two. The
F-WF-VULN-MGMT trilogy lands. The operator-side
vulnerability and patch management lifecycle — the
scan-triage-remediate-verify-audit chain against the
deployed estate — now has a shipped spine on the
framework. Described once as a portable CACAO v2
playbook, compiled into the three reference targets an
operator already runs, closed off with a practitioner
cookbook that walks the whole lifecycle end to end.

This is the deployed-estate leg of the vulnerability-
management surface. It sits beside two siblings the
commons already ships: `playbook.cra_cvd@v1` on the
manufacturer-side coordinated vulnerability disclosure
lifecycle, and `playbook.codebase_vuln_management@v1`
on the pre-deployment codebase leg. Three legs, one
regulatory anchor at NIS2 Art. 21(2)(e), no overlap in
evidence records.

## What shipped

Three framework PRs, all merged to `main` today:

- **#729 — F-WF-VULN-MGMT SKELETON.** The CACAO v2
  playbook. `content/playbooks/vulnerability_management/`
  pins the five-step lifecycle
  (`trigger_vulnerability_scan`, `triage_severity`,
  `decide_remediation`, `verify_remediation`,
  `emit_audit_evidence`) as an auditable, replayable,
  restart-safe workflow shape. Adapter surfaces are
  declared — the scan-adapter (network / host /
  container / cloud-config), the advisory-feed source
  (CVSS 4.0 / EPSS / exploit-status enrichment), the
  operator's documented risk-tolerance rule set, the
  rescan / regression-probe binding, the dated
  evidence sink — and left for the operator to wire.
  The playbook does not embed the severity taxonomy,
  does not choose the scanner, does not schedule the
  window. It ships the shape.
- **#730 — F-WF-VULN-MGMT CORE.** The three-target
  compile examples land under
  `examples/{n8n,temporal,langgraph}/vulnerability_management/`
  with the byte-parity golden tests wired into CI.
  Same CACAO source, three compiled artifacts,
  cross-target parity enforced.
- **#731 — F-WF-VULN-MGMT EXTEND.** The practitioner
  cookbook at
  `docs/cookbook/vulnerability_management.md` walks
  the five lifecycle atoms end to end, wires the
  playbook through all three compile targets, states
  the boundary against `cra_cvd` and
  `codebase_vuln_management`, and flips the ROADMAP
  entry to Shipped.

## Why an EU SecOps practitioner reads this

NIS2 Article 21(2)(e) names, verbatim, "security in
network and information systems acquisition,
development and maintenance, **including vulnerability
handling and disclosure**." A supervisor reading an
essential- or important-entity's discharge of that
paragraph is reading three things at once: how you
find vulnerabilities on the estate you run, how you
decide what to do about them, and what dated evidence
record you produce that a review can point at months
later.

The five obligation atoms this playbook operates
against:

- **Scan trigger.** A declared lifecycle trigger —
  scheduled window against the tracked asset
  inventory, an advisory-feed signal implicating a
  component in scope, or an inbound finding routed
  from a sibling workflow. The scan-adapter surface is
  operator-configured; the playbook keys on whatever
  scanner the operator already runs.
- **Severity triage.** The finding is triaged against
  CVSS 4.0 base and environmental metrics, EPSS
  probability, and exploit-status signal (KEV / active
  exploitation feeds). The severity band and its
  associated remediation SLA live in the operator's
  documented vulnerability-management policy — the
  playbook reads the verdict, does not author the
  rubric.
- **Remediation decision.** One of a closed branch set
  — `patch`, `mitigate`, `accept_risk`,
  `defer_next_window` — with the branch, the actor,
  and the justification captured on the record. The
  policy that governs which branch is legitimate under
  which conditions lives with the operator.
- **Verification.** The corrective measure is
  re-scanned or regression-probed within a documented
  verification window. A remediation is not closed
  until the verification verdict lands. The rescan /
  regression binding is an operator seam.
- **Dated audit-evidence record.** The lifecycle emits
  a dated evidence record — asset, finding,
  severity-band, remediation branch, verification
  verdict, actor, timestamps — against the stable
  evidence envelope the rest of the framework already
  uses. This is what the NIS2 Art. 21(2)(e) KPI / KRI
  surface anchors on.

## The three-regime overlap

The playbook's outbound anchor is NIS2 Art. 21(2)(e),
but the same lifecycle discharges obligations on the
two neighbouring regimes:

- **CRA Article 13(4)–13(5).** The manufacturer-side
  vulnerability-handling and security-updates
  distribution obligations. Where a shipped product is
  in scope, `playbook.cra_cvd@v1` runs the
  manufacturer-side coordinated disclosure lifecycle
  against inbound reporter submissions; the
  deployed-estate leg an operator runs on their own
  fleet — including their own instances of that same
  product — lives here.
- **DORA Article 25.** ICT vulnerability management
  inside the operational-resilience envelope. For
  financial entities in DORA scope, the same
  scan-triage-remediate-verify-audit spine discharges
  Article 25; the DORA lifecycle spines
  (`dora_ict_risk_selfassess`, `dora_tlpt_programme`,
  `dora_tpr_management`) compose against it without
  overlapping evidence records.

Three regimes, one operator-side lifecycle. The
playbook is the portable substrate.

## The three vulnerability-lifecycle legs on the framework

- **`playbook.cra_cvd@v1`** — the manufacturer-side
  coordinated vulnerability disclosure lifecycle under
  CRA Art. 13(4)–13(5) and Art. 14. Inbound-reporter
  leg.
- **`playbook.codebase_vuln_management@v1`** — the
  pre-deployment codebase leg. Dependency-review
  lifecycle against the operator's own source tree.
- **`playbook.vulnerability_management@v1`** — the
  deployed-estate leg. Scan-triage-remediate-verify-
  audit against the assets the operator already runs.
  Ships today.

Three legs, one regulatory graph on NIS2
Art. 21(2)(e), no double-counted evidence.

## The G-01 / G-07 signal

- **G-01 — content coverage.** F-WF-VULN-MGMT closes a
  top-5 NIS2 Art. 21(2) control-family bar. The three
  vulnerability-lifecycle playbooks on the framework
  now read as a coherent set rather than three
  isolated landings.
- **G-07 — operator adoption signal.** The
  practitioner cookbook is the shortest path from an
  EU SecOps operator asking "how does an auditable
  vulnerability-management spine look on my stack" to
  a compiled workflow in the target they already run,
  with the seams to their scanner, advisory feed, and
  evidence sink named explicitly.

## Where to look

- **Framework repo:**
  - `content/playbooks/vulnerability_management/` —
    the CACAO v2 source and the outbound mappings
    overlay.
  - `examples/n8n/vulnerability_management/`,
    `examples/temporal/vulnerability_management/`,
    `examples/langgraph/vulnerability_management/` —
    the three compile-target examples.
  - `docs/cookbook/vulnerability_management.md` — the
    practitioner walkthrough.
  - `ROADMAP.md` — the F-WF-VULN-MGMT entry now reads
    Shipped.

If you run an EU essential or important entity under
NIS2 scope and your Article 21(2)(e) vulnerability-
handling discharge is a spreadsheet of open CVEs held
together by will, the walkthrough is the shortest path
to a portable, auditable spine that compiles into
whichever orchestrator you already run.
