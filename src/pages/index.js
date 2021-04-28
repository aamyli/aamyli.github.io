import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/header"
import Work from "../components/work"
import About from "../components/about"
// import Skills from "../components/skills" -> maybe do an interests section?
import Experience from "../components/experience"
import Footer from "../components/footer"
import withSplashScreen from "../components/splashscreen"

const IndexPage = () => (
  <Layout>
    <SEO title="AMY LI" />
    <Header></Header>
    <About></About>
    <Experience></Experience>
    <Work></Work>
    <Footer></Footer>
  </Layout>
)

export default withSplashScreen(IndexPage)
