import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto px-4 pt-20 lg:px-64 lg:pt-44">
      <h2 className="text-6xl lg:text-8xl font-bold text-primaryText-200 mt-4 lg:mt-0 py-4 lg:leading-tight">
        <p>Hey,</p>
        <p><span>I'm </span><span className="text-primaryText-50">Paul</span></p>
      </h2>
      <div className="text-xl lg:text-3xl text-primaryText-200 font-thin pt-1 lg:pt-3 pb-10 lg:pb-44"><p>19 y/o developer, digital artist, & learning enthusiast</p>
      <p>from India</p></div>

      <section id="works">
        <h3 className="text-xl lg:text-3xl text-primaryText-50 font-thin text-right">a few things I'm proud of...</h3>
      </section>

      <div>
        <Image imageTitle="gatsby-astronaut.png"/>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
  </Layout>
)

export default IndexPage
