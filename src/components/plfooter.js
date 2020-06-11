import React from "react"
import logo from "../images/University-of-Cambridge-Logo-White-01.svg"

function PlFooter() {
  return (
    <div className="campl-row campl-global-footer">
      <div className="campl-wrap clearfix">
        <div className="campl-column3 campl-footer-navigation">
          <div className="campl-content-container campl-footer-logo">
            <img
              src={logo}
              alt="University of Cambridge"
              className="cam-logo"
            />
            <p>&#169; {new Date().getFullYear()} University of Cambridge</p>
            <ul className="campl-unstyled-list campl-global-footer-links">
              <li>
                <a href="http://www.cam.ac.uk/university-a-z">University A-Z</a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/contact-the-university">
                  Contact the University
                </a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/about-this-site/accessibility">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="http://www.admin.cam.ac.uk/univ/information/foi/">
                  Freedom of information
                </a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/about-this-site/terms-and-conditions">
                  Terms and conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="campl-column3 campl-footer-navigation">
          <div className="campl-content-container campl-navigation-list">
            <div className="link-list">
              <h3>
                <a href="http://www.cam.ac.uk/study-at-cambridge">
                  Study at Cambridge
                </a>
              </h3>
              <ul className="campl-unstyled-list">
                <li>
                  <a href="http://www.study.cam.ac.uk/undergraduate/">
                    Undergraduate
                  </a>
                </li>
                <li>
                  <a href="http://www.admin.cam.ac.uk/students/gradadmissions/prospec/">
                    Graduate
                  </a>
                </li>
                <li>
                  <a href="http://www.cam.ac.uk/about-the-university/international-cambridge/studying-at-cambridge">
                    International students
                  </a>
                </li>
                <li>
                  <a href="http://www.ice.cam.ac.uk">Continuing education</a>
                </li>
                <li>
                  <a href="http://www.admin.cam.ac.uk/offices/education/epe/">
                    Executive and professional education
                  </a>
                </li>
                <li>
                  <a href="http://www.educ.cam.ac.uk">Courses in education</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="campl-column3 campl-footer-navigation">
          <div className="campl-content-container campl-navigation-list">
            <h3>
              <a href="http://www.cam.ac.uk/about-the-university">
                About the University
              </a>
            </h3>
            <ul className="campl-unstyled-list campl-page-children">
              <li>
                <a href="http://www.cam.ac.uk/about-the-university/how-the-university-and-colleges-work">
                  How the University and Colleges work
                </a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/about-the-university/visiting-the-university">
                  Visiting the University
                </a>
              </li>
              <li>
                <a href="http://map.cam.ac.uk">Map</a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/news">News</a>
              </li>
              <li>
                <a href="http://www.admin.cam.ac.uk/whatson">Events</a>
              </li>
              <li>
                <a href="http://www.jobs.cam.ac.uk">Jobs</a>
              </li>
              <li>
                <a href="http://www.philanthropy.cam.ac.uk">
                  Giving to Cambridge
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="campl-column3 campl-footer-navigation last">
          <div className="campl-content-container campl-navigation-list">
            <h3>
              <a href="http://www.cam.ac.uk/research">Research at Cambridge</a>
            </h3>
            <ul className="campl-unstyled-list">
              <li>
                <a href="http://www.cam.ac.uk/research/news">News</a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/research/features">Features</a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/research/discussion">
                  Discussion
                </a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/research/spotlight-on">
                  Spotlight on...
                </a>
              </li>
              <li>
                <a href="http://www.cam.ac.uk/research/research-at-cambridge">
                  About research at Cambridge
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlFooter
