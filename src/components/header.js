// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Cog from './cog'

const Header = ({ siteTitle }) => (
  <header className="cell small-12">
    <div className="nav-container grid-x align-right">
      <div className="cell small-1">
        <Cog />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
