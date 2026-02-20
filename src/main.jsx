// https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs
// https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
// https://www.chromatic.com/docs/access/#projects
// https://www.chromatic.com/docs/snapshots/
// https://www.chromatic.com/docs/review/
// https://www.chromatic.com/docs/ci/
// https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax
// https://docs.github.com/en/actions/reference/workflows-and-actions/expressions
// https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#context-availability
// https://www.baeldung.com/ops/github-actions-commit-message
// https://docs.github.com/en/actions/get-started/quickstart
// https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idif
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context
// https://storybook.js.org/docs/writing-tests/interaction-testing#writing-interaction-tests
// https://storybook.js.org/docs/writing-stories/play-function

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
