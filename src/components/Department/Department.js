import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../../images/Img.svg";

import {
  DepartmentContainer,
  DepartmentWrapper,
  DepartmentCard,
  DepartmentImg,
  DepartmentH2,
} from "./DepartmentElement";

const Employees = () => {
  return (
    <DepartmentContainer id="departments">
      <DepartmentWrapper>
        
        <NavLink to="/emp" activeStyle>
          <DepartmentCard>
            <DepartmentImg src={Img} />
            <DepartmentH2>Sales</DepartmentH2>
          </DepartmentCard>
        </NavLink>

        <NavLink to="/emp" activeStyle>
          <DepartmentCard>
            <DepartmentImg src={Img} />
            <DepartmentH2>Finance</DepartmentH2>
          </DepartmentCard>
        </NavLink>

        <NavLink to="/emp" activeStyle>
          <DepartmentCard>
            <DepartmentImg src={Img} />
            <DepartmentH2>Marketing</DepartmentH2>
          </DepartmentCard>
        </NavLink>

        <NavLink to="/emp" activeStyle>
          <DepartmentCard>
            <DepartmentImg src={Img} />
            <DepartmentH2>Purchasing</DepartmentH2>
          </DepartmentCard>
        </NavLink>

        <NavLink to="/emp" activeStyle>
          <DepartmentCard>
            <DepartmentImg src={Img} />
            <DepartmentH2>HR</DepartmentH2>
          </DepartmentCard>
        </NavLink>

        <NavLink to="/emp" activeStyle>
          <DepartmentCard>
            <DepartmentImg src={Img} />
            <DepartmentH2>Customer Service</DepartmentH2>
          </DepartmentCard>
        </NavLink>

      </DepartmentWrapper>
    </DepartmentContainer>
  );
};

export default Employees;
