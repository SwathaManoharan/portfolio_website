---
on:
  issues:
    types: [opened]
permissions:
  contents: read
  issues: read
safe-outputs:
  add-labels:
  add-comment:
---
# Issue Triage

When a new issue is opened:

- Read its title and body.
- Determine whether it is a bug report, a feature request, or a question.
- Add one label reflecting that: `bug`, `enhancement`, or `question`.
- If the issue lacks enough detail to act on (for example, no repro steps for a bug or no clear scope for a feature), add a comment listing the specific missing information and label it `needs-info` instead.
