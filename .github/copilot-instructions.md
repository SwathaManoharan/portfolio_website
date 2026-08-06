# Copilot instructions for this repository

## Scope and isolation
- Only ever work on a branch created for your assigned task. Never push
  directly to `main`, `develop`, or any `release/*` branch.
- If a change would require touching CI/CD deployment configuration or
  production secrets, stop and flag it in the PR description instead of
  proceeding.

## Requirement clarity (confidence threshold)
- Before writing code, check whether the issue has clear acceptance
  criteria. If it does not -- no expected behavior, no edge cases, no
  definition of done -- do not guess. Post a comment on the issue listing
  the specific questions that need answering, and stop.
- Only proceed to implementation once the issue has enough detail to
  implement without assumptions.

## Code generation
- Match the existing code style, folder structure, and naming
  conventions already used in this repository. Do not introduce a new
  pattern for something the repo already has a convention for.
- Every new function or endpoint must have a corresponding test.
- Do not add new third-party dependencies without calling it out
  explicitly in the PR description with a one-line justification.

## Before opening the PR
- Run the full test suite and linter locally. Do not open a PR with
  known-failing tests -- fix them first or explain why in the PR
  description if the failure is unrelated to your change.
- Never commit `.env` files, API keys, tokens, or credentials of any
  kind. If you generate example config, use placeholder values only
  (e.g. `YOUR_API_KEY_HERE`).

## PR description
- Summarize what changed and why in plain language.
- List any assumptions you made, even small ones.
- Call out anything a human reviewer should pay extra attention to.

## CI/CD failures
- If your PR's checks fail after you open it, you may push one round of
  fixes. If checks still fail after that, stop and leave a comment
  explaining what you tried and what you think is blocking it -- do not
  keep pushing fixes indefinitely. A human will take it from there.
