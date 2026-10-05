---
title: "Official OASIS CACAO 2.0 schema conformance ratchet lands in the framework"
description: "The framework now validates every CACAO playbook against the official OASIS CACAO 2.0 JSON schemas, and a ratchet in CI keeps the error count from growing while the playbooks are brought into conformance."
pubDate: 2026-09-22
author: "The SecOps-NG commons"
tags: ["field-note", "cacao", "schema", "conformance", "ratchet", "framework", "ci"]
---

The framework now checks every CACAO playbook against the official OASIS CACAO 2.0 JSON schemas (PR #1011). The schemas are vendored into the repository under `schemas/vendor/cacao-2.0/`, `python -m tools.cacao_conformance` reports each document's errors, and a `cacao-conformance` workflow runs the same check in CI.

The first run was a candid baseline: none of the 49 CACAO documents passed, with 626 errors between them under the dialect the schemas declare. The check is therefore a ratchet. A committed baseline records each document's error count, and CI fails when any count changes — more errors is a regression, and fewer errors is progress that has to be recorded in the same change — so the floor only moves down while the playbooks are brought into conformance one error class at a time.

For operators, the point is portability: a playbook that passes the official schema is one that standard CACAO validators accept, not only our own compilers. You can run the check locally with `python -m tools.cacao_conformance`.

https://github.com/secops-ng/secops-ng-framework/pull/1011
