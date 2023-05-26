import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page5 = () => (
  <Layout>
    <h1>[Educations]</h1>
    <p>
      <b>Educational Background</b>
    </p>
    <p>남산초등학교 (2006~2011)</p>
    <p>대영중학교 (2012~2014)</p>
    <p>김천고등학교 (2015~2017)</p>
    <p>성균관대학교 (2018~)</p>
    <br></br>
    <p>
      <b>Now</b>
    </p>
    <p>SKKU Software Major B.S Student</p>
    <br></br>
    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Educations" />

export default Page5
