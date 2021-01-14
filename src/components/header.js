import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [navHover, setNavHover] = useState(false);
  return <header className="fixed w-full flex flex-wrap items-center px-4 pt-4 lg:px-20 lg:pt-8 text-primaryText-50">
    <div className="flex-1">
      <h1>
        <Link to="/" className="text-5xl md:text-6xl">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      className="flex static"
      onMouseEnter={() => setNavHover(true)}
      onMouseLeave={() => setNavHover(false)}>
      <button
        className="focus:outline-none w-10 hover:text-primaryText-100 md:order-last">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="square" strokeLinejoin="square" strokeWidth={1.5}
            d="M 4.324 7.048 L 23.233 7.048 M 13.037 11.962 L 23.233 11.962 M 0.742 16.876 L 23.233 16.876"
          />
        </svg>
      </button>
      <nav
      className={navHover ? "absolute md:static left-0 lg:px-20 w-full lg:w-auto text-3xl md:text-5xl" : "hidden absolute md:static left-0 lg:px-20 w-full lg:w-auto text-3xl md:text-5xl"}
      id="navigation">
        <div className="bg-purple-500 divide-y flex flex-col md:bg-transparent md:flex-row md:divide-y-0 ">
          <Link className="px-8 w-full text-center hover:text-primaryText-100" to="/"><span>work</span></Link>
          <Link className="px-8 w-full text-center hover:text-primaryText-100" to="/"><span>blog</span></Link>
          <Link className="px-8 w-full text-center hover:text-primaryText-100" to="/"><span>contact</span></Link>
          <Link className="px-8 w-full text-center hover:text-primaryText-100" to="/"><span>resume</span></Link>
        </div>
      </nav>
    </div>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header