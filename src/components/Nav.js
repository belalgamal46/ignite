import { useState } from "react";
//Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../images/logo.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };

  return (
    <div>
      <NavStyled>
        <LogoStyled onClick={clearSearched}>
          <img src={logo} alt="logo" />
          <h1>Ignite</h1>
        </LogoStyled>

        <form className="search" onSubmit={submitSearchHandler}>
          <input value={textInput} onChange={inputHandler} type="text" />
          <button type="submit">Search</button>
        </form>
      </NavStyled>
    </div>
  );
};

const NavStyled = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const LogoStyled = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
