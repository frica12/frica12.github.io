import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Aboutme = () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      <b>1999.09.11 ~</b>
    </p>
    <p>성균관대학교 소프트웨어학과 18학번</p>
    <p>현재 4학년 1학기</p>
    <p>취미 : 드럼 연주, 노래, 게임, 당구</p>
    <br></br>
    <p>송설 82기</p>
    <p>악의 꽃 33기</p>
    <p>육군 병장 만기전역</p>
    <p>BOJ 골드 2</p>
    <p>리그 오브 레전드 다이아몬드 4티어</p>
    <p>전략적 팀 전투 마스터 티어</p>
    <p>메이플스토리 무릉도장 55층</p>

    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About me" />

export default Aboutme
