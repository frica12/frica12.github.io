import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Skills",
    url: "page1",
    description: "This is my Skills and Ability.",
  },
  {
    text: "Education",
    url: "page2",
    description: "This is my Educational Background.",
  },
  {
    text: "Acheivements",
    url: "page3",
    description: "This is my Acheivements and Activities.",
  },
  {
    text: "Courses",
    url: "page4",
    description: "This is the courses that I've taken.",
  },
]

const moreLinks = [
  { text: "Instagram", url: "https://www.instagram.com/hyunnieeee/" },
  {
    text: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100006870788775",
  },
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/in/seohyun-kim-a974a5253/",
  },
  {
    text: "Github",
    url: "https://github.com/frica12",
  },
]

const aboutme = [{ text: "About me", url: "aboutmepage" }]
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/tosimee.png"
        loading="eager"
        width={192}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Seohyun</b>'s Homepage!
      </h1>

      <Link to={`${aboutme[0].url}${utmParameters}`}>
        <b>
          <b>[About me]</b>
        </b>
      </Link>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    <p>
      <b>[Contact]</b>
    </p>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
