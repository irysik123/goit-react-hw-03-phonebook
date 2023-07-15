import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;

    :hover {
    background-color: #F0FFFF;
    border: 1px solid;
    }
`;

export const Button = styled.button`
margin-left: 25px;
height: 30px;
width: 130px;
cursor: pointer;
background-color: transparent;
font-size: 16px;
border-radius: 12px;
border: 1px solid green;
transition-duration: 0.4s;

&:hover {
    background-color: green; 
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  }
`

