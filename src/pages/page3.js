import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page3 = () => (
  <Layout>
    <h1>[Acheivements & Activities]</h1>
    <p>
      <b>교내 활동</b>
    </p>
    <p>밴드 동아리 '악의 꽃' (2018 ~ 2020)</p>
    <p>SKKU SW 멘토링 (2019)</p>
    <p>SKKU Brothership Workshop (2019)</p>
    <p>제 4대 소프트웨어대학 학생회 '솦속마을' (2020)</p>
    <br></br>
    <p>
      <b>프로젝트</b>
    </p>
    <p>산학 협력 프로젝트 - 'AI 국어 독해 교육 서비스' (2019)</p>
    <p>SKT FLYAI - '컨텐츠 기반 뉴스 추천 서비스'</p>
    <br></br>
    <p>
      <b>교외 활동</b>
    </p>
    <p>삼성 DreamHigh 리더십 아카데미 (2019)</p>
    <p>자유학기제 수업지원인력풀 대학생 봉사단 - 스꾸봉사단 (2019)</p>
    <p>워밍코리아 코딩 캠프 (2019)</p>
    <p>월드프렌즈 ICT 해외 봉사단 - 몰도바 (2019)</p>
    <br></br>
    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Acheivements" />

export default Page3
