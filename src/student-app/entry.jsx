import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Layout from './Layout.jsx'
import Landing from './Landing.jsx'
import Privacy from './Privacy.jsx'
import Terms from './Terms.jsx'
import Guidelines from './Guidelines.jsx'
import Support from './Support.jsx'

const pages = {
  landing: Landing,
  privacy: Privacy,
  terms: Terms,
  guidelines: Guidelines,
  support: Support,
}

const root = document.getElementById('root')
const Page = pages[root.dataset.page] ?? Landing

createRoot(root).render(
  <StrictMode>
    <Layout>
      <Page />
    </Layout>
  </StrictMode>,
)
