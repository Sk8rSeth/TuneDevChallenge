/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../scss/all.scss"
import UserCard from "./userCard"
import userData from "../content/users.json"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="page-container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="card-section">
        <main className="card-container">
          {/* this makes a large single loop over all the individual json objects, loop is used all the way down */}
          {userData.map((data) => {
            return <UserCard user={data}/>
          })}
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
