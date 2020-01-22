/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
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

  //sets theme toggle
  const [theme, setTheme] = useState('lightMode');
  const LOCAL_STORAGE_KEY = 'tuneApp.theme';

  useEffect(()=>{
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    setTheme(storedTheme);
    document.body.classList.add(storedTheme);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme(e) {
    if (theme === 'lightMode') {
      setTheme('darkMode');
      document.body.classList.add('darkMode');
      document.body.classList.remove('lightMode');
    } else {
      setTheme('lightMode');
      document.body.classList.remove('darkMode');
      document.body.classList.add('lightMode');
    }
  }
  return (
    <div className="page-container">
      <Header siteTitle={data.site.siteMetadata.title} toggleTheme={toggleTheme}/>
      <div className="card-section">
        <main className="card-container">
          {/* this makes a large single loop over all the individual json objects, loop is used all the way down */}
          {userData.map((data) => {
            return <UserCard user={data} theme={theme}/>
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
