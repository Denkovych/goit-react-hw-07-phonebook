import styled from 'styled-components';
import { RiUserFill } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: ${props => 
  props.deleting ? 'rgb(252, 7, 3, .1)' : 'transparent'};
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

export const IconUser = styled(RiUserFill)`
  padding: 3px;
  border: 1px solid green;
  border-radius: 50%;
  margin-right: 10px;
  color: green;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #242323;
  font-size: 24px;
  border: none;
  
  background-color: transparent;
  transition: color 100ms linear;
  cursor: pointer;
  :hover {
    color: red;
    
  }
`;

export const ButtonEdit = styled(Button)`
  :hover {
    color: green;
  }
`;