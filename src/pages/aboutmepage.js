import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Aboutme = () => (
  <Layout>
    <h1>About me</h1>
    <p>About me</p>
    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About me" />

export default Aboutme
