import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page4 = () => (
  <Layout>
    <h1>Hi from the page 4</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Courses" />

export default Page4
