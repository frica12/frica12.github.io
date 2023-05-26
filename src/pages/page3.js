import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page3 = () => (
  <Layout>
    <h1>Hi from the page 3</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Acheivements" />

export default Page3
