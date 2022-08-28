import styled from "styled-components";
const HeaderDiv =styled.div`
    width: 100%;
    height:10vh;
    display: flex;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    font-size: 60px;
    padding-bottom: 15px;
    box-shadow: 0px 1px 5px black;
    color: white;
    z-index: 100;
`
  
const Header = () => {
  return (
    <HeaderDiv onClick={() => window.scroll(0, 0)}>
      🎬 MOVIES HUBB 🎥
    </HeaderDiv>
  );
};

export default Header;