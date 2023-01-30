import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
    return (
  <div style={{ position: "relative", zIndex: -99 }}>
    <div class="row" style={{ backgroundColor: "#081222", color: "white" }}>
      <div class="col">
        <div
          style={{ float: "left", padding: 10 + "px", paddingLeft: 30 + "px" }}
        >
          <strong>MISSION</strong>
          <p style={{ fontSize: 14 + "px" }}>
            <a
              className="footer-link"
              style={{ color: "white" }}
              href=" "
              target="_blank"
            >
              <u />
            </a>
          </p>
        </div>
      </div>
      <div class="col">
        <div style={{ float: "left", padding: 10 + "px" }}>
          <strong>SITE SUPPORT</strong>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Privacy Notice
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Viewers &amp; Players
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Disclaimers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        {" "}
        <div style={{ float: "left", padding: 10 + "px" }}>
          <strong>RESOURCES</strong>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                FOIA
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Plain Writing
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=""
                target="_blank"
              >
                No Fear Act
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div style={{ float: "left", padding: 10 + "px" }}>
          <strong>PARTNER SITES</strong>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Test
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Test1
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Test2
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href=" "
                target="_blank"
              >
                Test3
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                style={{ color: "white", fontSize: 14 + "px" }}
                href="/"
                target="_blank"
              >
                Test4
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div style={{ float: "left", padding: 10 + "px" }}>
          <div>
            <a href="" target="_blank">
              <img
                style={{
                  maxWidth: 70 + "%",
                  padding: 5 + "px",
                  display: "block"
                }}
                src={""}
                class="fr-fic fr-dii"
                alt="Logo"
              />
            </a>
            <hr style={{ border: "solid", borderWidth: 1 + "px" }} />
          </div>
        </div>
      </div>
    </div>
    <div
      class="row"
      style={{
        display: "table",
        clear: "both",
        width: 100 + "%",
        paddingBottom: 0 + "px",
        backgroundColor: "#182944",
        color: "white",
        marginLeft: 0 + "px"
      }}
    >
      <div
        class="col"
        style={{
          width: 100 + "%",
          bottom: 0 + "px",
          backgroundColor: "#182944",
          color: "white"
        }}
      >
        <div
          style={{ float: "left", padding: 10 + "px", paddingLeft: 30 + "px" }}
        >
          <a
            className="footer-link"
            style={{ color: "white", fontSize: 14 + "px" }}
            href="/"
            target="_blank"
          >
            <img
              src={""}
              alt="HHS Logo"
              style={{ width: 50 + "px", padding: 5 + "px" }}
              class="fr-fic fr-dii"
            />
          </a>
        </div>
        <div
          style={{
            float: "left",
            width: 80 + "%",
            paddingTop: 10 + "px",
            fontSize: 14 + "px"
          }}
        >
          <a
            className="footer-link"
            style={{ color: "white", fontSize: 14 + "px" }}
            className="footer-link"
            href="/"
            target="_blank"
          />
          , <a className="footer-link" href="/" style={{ color: "white" }} />
        </div>
        <div
          style={{
            float: "left",
            width: 80 + "%",
            paddingTop: 5 + "px",
            fontSize: 14 + "px"
          }}
        >
          <em />
        </div>
      </div>
    </div>
  </div>
    )
};

export default Footer;
