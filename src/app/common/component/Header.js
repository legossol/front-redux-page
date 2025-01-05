import React from "react";
import "./../container/bootstrap.css";
import { Link } from "react-router-dom";

const linkStyle = {
  marginRight: 15
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      topicBox: ""
    };

    this.handleChange = this.handleChange.bind( this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <div className="fixedheader">
        <header className="header" role="banner">
          <nav className="globalNav" id="global-nav">
            <div className="globalNav__description">
              <p />
            </div>
          </nav>

          <nav
            class="navbar navbar-expand-lg navbar-light bg-light"
            style={{
              backgroundImage: "url(/static/Image/header_bg.jpg)",
              paddingTop: 0 + "px"
            }}
          >
            <a
              title="home"
              className="header_logo_logo"
              href="/"
              alt="Traumatic Brain Injury Home"
            >
              <picture />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                class="navbar-nav mr-auto "
                style={{ fontSize: 14 + "px", fontweight: 800 }}
              >
                <li class="nav-item">
                  <a class="nav-link" activeClassName="active" href="/">
                    HOME<span class="sr-only">(current)</span>
                  </a>
                  {/* <Link to="/" activeClassName="active nav-link">Home</Link> */}
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/Resources">
                    RESOURCES
                  </a>
                </li>
              </ul>
              <span class="input-group-btn">
                <a href={"/signUp" + this.state.topicBox}>
                  <button class="btn btn-search" type="button">
                    <i  class="fa fa-search fa-fw" >회원가입</i>
                  </button>
                </a>
                <a href={"/login" + this.state.topicBox}>
                  <button class="btn btn-search" type="button">
                    <i  class="fa fa-search fa-fw" >로그인</i>
                  </button>
                </a>
              </span>
        

              <form class="form-inline my-2 my-lg-0">
                <div class="container">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      name="topicBox"
                      placeholder="Search for..."
                      value={this.state.topicBox}
                      onChange={this.handleChange}
                    />
                    <span class="input-group-btn">
                      <a href={"/Resources?search1=" + this.state.topicBox}>
                        <button class="btn btn-search" type="button">
                          <i class="fa fa-search fa-fw" /> Search
                        </button>
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;