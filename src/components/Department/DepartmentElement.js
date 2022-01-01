import styled from "styled-components";

export const DepartmentContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1F4287;

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const DepartmentWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items;
  grid-gap: 16px;
  padding: 0 50px;
  text-decoration: none;
  
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const DepartmentCard = styled.div`
  background: #278EA5;
  display: flex;
  flex-directin: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    
  }
`;

export const DepartmentImg = styled.img`
  height: 130px;
  width: 150px;
  margin-bottom: 10px;
`;

export const DepartmentH2 = styled.h2`
  font-size: 1rem;
  color: white;
  margin-bottom: 20px;
  text-decoration: none;
`;

export const DepartmentP = styled.p`
  font-size: 1rem;
  text-allign: center;
  text-decoration: none;
`;

