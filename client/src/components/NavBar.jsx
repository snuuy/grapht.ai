import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import icon_home from "../assets/icons/home_green.png";
import icon_reports from "../assets/icons/reports.png";

var navColor = "red";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <SideNav
          onSelect={selected => {
            // Add your code here
          }}
        >
          <SideNav.Toggle style={{ backgroundColor: navColor }} />
          <SideNav.Nav defaultSelected="charts">
            <NavItem eventKey="home">
              <NavIcon>
                <img className="fa fa-fw iconFormat" src={icon_home}></img>
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <img className="fa fa-fw iconFormat" src={icon_reports}></img>
              </NavIcon>
              <NavText>Charts</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default NavBar;
