import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page4 = () => (
  <Layout>
    <h1>[Courses - Computer Science]</h1>
    <p>
      <b>Taken</b>
    </p>
    <p>자료구조개론</p>
    <p>알고리즘개론</p>
    <p>시스템프로그램</p>
    <p>컴퓨터구조개론</p>
    <p>운영체제</p>
    <p>데이터베이스개론</p>
    <p>컴퓨터네트웍개론</p>
    <p>프로그래밍언어</p>
    <p>오토마타</p>
    <p>문제해결기법</p>
    <p>인공지능개론</p>
    <p>기계학습원론</p>
    <p>시스템프로그래밍실습</p>
    <p>웹프로그래밍실습</p>
    <p>JAVA프로그래밍실습</p>
    <p>모바일앱프로그래밍실습</p>
    <p>산학협력프로젝트3</p>
    <br></br>
    <p>
      <b>Taking (now)</b>
    </p>
    <p>빅데이터분석방법론</p>
    <p>오픈소스소프트웨어실습</p>
    <p>인공지능프로젝트</p>
    <br></br>
    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Courses" />

export default Page4
