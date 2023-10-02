import React from "react"

const GoogleDocumentViewer = () => {
  const documentURL =
    "https://docs.google.com/document/d/e/2PACX-1vTcSTC2_Hmqza4EKUjGWGMOR7s8naJJXknDoMtrLtREp87Z_GoqtTmqFrJWIm1TleF3XLlazFJ8VDdp/pub?embedded=true"
  return (
    <header>
      <nav id="nav-content">
        <div>
          <ul className="ul">
            <li className="li">
              <a
                className="a"
                href="#/Home">
                Home
              </a>
            </li>
            <li className="li">
              <a
                className="a"
                href="#/About">
                About
              </a>
            </li>
            <li className="li">
              <a
                className="a"
                href="#/Topic">
                Topics
              </a>
            </li>
            <li className="li">
              <a
                className="a"
                href="#/Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h1>My Document</h1>
        <iframe
          className="my-iframe"
          src={documentURL}
          title="test"
          width="100%"
          height="600px"
          style={{ border: "none", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
        />
      </div>
    </header>
  )
}

export default GoogleDocumentViewer
