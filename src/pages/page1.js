import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page1 = () => (
  <Layout>
    <h1>[Skills]</h1>

    <p>
      <b>Programming Languages & Platforms</b>
    </p>
    <p>C Programming</p>
    <p>C++ Programming</p>
    <p>Python Programming</p>
    <p>Javascript Programming</p>

    <p>
      <b>Tools</b>
    </p>
    <p>GIT</p>
    <p>VSCode</p>
    <p>Eclipse IDE</p>
    <p>
      <b>Certifications</b>
    </p>
    <p>OPIC IH</p>
    <p>MS Azure AI-900</p>

    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="SKills" />

export default Page1
