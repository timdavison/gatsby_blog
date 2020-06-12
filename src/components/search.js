import React from "react"

function Search() {
  return (
    <div className="campl-site-search" id="site-search-btn">
      <label htmlFor="header-search" className="hidden">
        Search site
      </label>

      <div className="campl-search-input">
        <form action="https://search.cam.ac.uk/web" method="get">
          <input
            id="header-search"
            type="text"
            title="Search"
            name="query"
            value=""
            placeholder="Search"
          />

          <input
            type="image"
            alt="Search"
            className="campl-search-submit"
            src="/profiles/cambridge/themes/cambridge_theme/images/interface/btn-search-header.png"
          />
        </form>
      </div>
    </div>
  )
}

export default Search
