---
title: "Field note #16 — Official OASIS CACAO 2.0 schema conformance ratchet lands in framework"
description: "Sixteenth field note from the SecOps-NG Digital Commons: the official OASIS CACAO 2.0 schema conformance ratchet is integrated, enabling operators to validate playbooks against the official schema."
pubDate: 2026-09-22
author: "The SecOps-NG commons"
tags: [\"cacao\", \"schema\", \"conformance\", \"ratchet\", \"framework\", \"tools\"]
---

The official OASIS CACAO 2.0 schema conformance ratchet has been merged into the SecOps-NG framework (PR #1011). This adds a validation step that checks CACAO playbooks against the official OASIS 2.0 JSON schema, ensuring they conform to the standard before they are used.

For operators, this means you can now run `secops-ng build` (or the relevant compiler) and receive immediate feedback if your playbook deviates from the OASIS 2.0 specification. The ratchet prevents drift and improves portability across the n8n, Temporal, and LangGraph reference compile targets.

https://github.com/secops-ng/secops-ng-framework/pull/1011