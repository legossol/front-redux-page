import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <div style={{ position: "relative", zIndex: -99, width: "100%" }}>
      <div className="row" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#081222", color: "white", width: "100%" }}>
        <div className="col" style={{ padding: "10px", paddingLeft: "30px" }}>
          <strong>해솔 개발 페이지</strong>
          <p style={{ fontSize: "14px" }}>
            <a className="footer-link" style={{ color: "white" }} href=" " target="_blank">
              <u />
            </a>
          </p>
        </div>
        <div className="col" style={{ padding: "10px" }}>
          <strong>SITE SUPPORT</strong>
          <ul style={{ listStyleType: "none" }}>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Privacy Notice</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Accessibility</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Viewers &amp; Players</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Disclaimers</a></li>
          </ul>
        </div>
        <div className="col" style={{ padding: "10px" }}>
          <strong>RESOURCES</strong>
          <ul style={{ listStyleType: "none" }}>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">FOIA</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Plain Writing</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href="" target="_blank">No Fear Act</a></li>
          </ul>
        </div>
        <div className="col" style={{ padding: "10px" }}>
          <strong>PARTNER SITES</strong>
          <ul style={{ listStyleType: "none" }}>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Test</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Test1</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Test2</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href=" " target="_blank">Test3</a></li>
            <li><a className="footer-link" style={{ color: "white", fontSize: "14px" }} href="/" target="_blank">Test4</a></li>
          </ul>
        </div>
        <div className="col" style={{ padding: "10px" }}>
          <a href="" target="_blank">
            <img
              style={{ maxWidth: "70%", padding: "5px", display: "block" }}
              src={""}
              className="fr-fic fr-dii"
              alt="Logo"
            />
          </a>
          <hr style={{ border: "solid", borderWidth: "1px" }} />
        </div>
      </div>
      <div className="row" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#182944", color: "white", paddingBottom: "0px", marginLeft: "0px", width: "100%" }}>
        <div className="col" style={{ padding: "10px", paddingLeft: "30px" }}>
          <a className="footer-link" style={{ color: "white", fontSize: "14px" }} href="/" target="_blank">
            <img src={""} alt="HHS Logo" style={{ width: "100px", padding: "5px" }} className="fr-fic fr-dii" />
          </a>
        </div>
        <div className="col" style={{ paddingTop: "10px", fontSize: "14px", width: "80%" }}>
          <a className="footer-link" style={{ color: "white", fontSize: "14px" }} href="/" target="_blank"></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
