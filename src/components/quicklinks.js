import React from "react"

function Quicklinks() {
  return (
    <div className="campl-quicklinks">
      <ul className="campl-unstyled-list campl-quicklinks-list campl-global-navigation-container ">
        <li>
          <a href="http://www.cam.ac.uk/for-staff">For staff</a>
        </li>
        <li>
          <a href="http://www.admin.cam.ac.uk/students/gateway">
            For current students
          </a>
        </li>
        <li>
          <a href="http://www.alumni.cam.ac.uk">For alumni</a>
        </li>
        <li>
          <a href="http://www.cam.ac.uk/for-business">For business</a>
        </li>
        <li>
          <a href="http://www.cam.ac.uk/colleges-and-departments">
            Colleges &amp; departments
          </a>
        </li>
        <li>
          <a href="http://www.cam.ac.uk/libraries-and-facilities">
            Libraries &amp; facilities
          </a>
        </li>
        <li>
          <a href="http://www.cam.ac.uk/museums-and-collections">
            Museums &amp; collections
          </a>
        </li>
        <li className="last">
          <a href="http://www.cam.ac.uk/email-and-phone-search">
            Email &amp; phone search
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Quicklinks
