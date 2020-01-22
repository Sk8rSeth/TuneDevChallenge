import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UserCard from '../components/userCard'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid-x grid-container align-middle align-center">
      <UserCard />
    </div>
  </Layout>
)

export default IndexPage
