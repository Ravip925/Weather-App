import { Link } from "react-router-dom";
import "./Signup.css";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import { useContext } from "react";
import { AppContext } from "../../Adapter";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url("https://i.ibb.co/jGNbP8M/final-dl-beatsnoop-com-k1w-Yai-RZE9.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in;
  ${mobile({
    height: "100vh",
    padding: "20px",
    backgroundColor: "teal",
  })}
`;
const Wrapper = styled.div`
  width: 900px;
  height: 82vh;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  ${mobile({
    height: "100%",
    width: "100%",
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3bb19b;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  ${mobile({
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "0px",
    flex: "0.6",
  })}
  h1 {
    font-weight: 800;
    margin-bottom: 30px;
    ${mobile({
      textAlign: "center",
      fontSize: "1.2rem",
      margin: "20px 0",
    })}
  }
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  ${mobile({
    borderBottomLeftRadius: "10px",
    borderTopRightRadius: "0px",
  })}
  h1 {
    font-weight: 800;
    ${mobile({
      fontSize: "1.4rem",
    })}
  }
`;

const Signup = () => {
  const { data, setData, handleSignUp, error } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Sign in
            </button>
          </Link>
        </Left>
        <Right>
          <form className="form_container" onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="input"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="input"
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
              autoComplete="off"
            />
            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Signup;
