import { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../Adapter";
import { mobile } from "../../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  background: linear-gradient(
    281deg,
    rgba(255, 193, 7, 1) 0%,
    rgba(0, 188, 212, 1) 48%,
    rgba(238, 130, 238, 1) 100%
  );
  ${mobile({
    height: "115vh",
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  width: 30%;
  height: auto;
  padding: 15px;
  background-color: #d6ecff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 15px;
    background-color: #165993;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  p {
    font-weight: 550;
    font-size: 1.3rem;
  }
  ${mobile({
    width: "90%",
    padding: "15px 10px",
  })}
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  input {
    outline: none;
    border: none;
    width: 150%;
    padding: 15px;
    border-radius: 10px;
    background-color: #edf5f3;
    margin: 5px 0;
    font-weight: bold;
    font-size: 14px;
  }
  button {
    border: none;
    outline: none;
    padding: 12px 0;
    background-color: #196885;
    color: #edf5f3;
    border-radius: 20px;
    width: 180px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    &:active {
      background-color: #2694bc;
    }
  }
`;

const Info = styled.div`
  position: absolute;
  top: 20px;
  right: 5%;
  display: flex;
  gap: 20px;

  button {
    border: none;
    outline: none;
    background-color: #196885;
    color: #edf5f3;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    margin-top: -3px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    &:active {
      background-color: #2694bc;
    }
  }
`;

const Home = ({ user }) => {
  const [name, setName] = useState("");
  const { handleLogout, setCity, weatherData } = useContext(AppContext);

  const handleClick = () => {
    setCity(name);
  };

  return (
    <Container>
      <Info>
        <h3>Hello, {user}</h3>
        <button onClick={handleLogout}>Logout</button>
      </Info>
      <Wrapper>
        <h1>Today's Weather</h1>
        <Top>
          <BoxContainer>
            <input
              placeholder="Enter City"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleClick}>Get Weather Data</button>
          </BoxContainer>
        </Top>
        {weatherData.current && (
          <Bottom>
            <img src={weatherData.current.weather_icons[0]} alt="weather_img" />
            <hr style={{ width: "50%" }} />
            <p>{`${weatherData.location.name}, ${weatherData.location.country}`}</p>
            <hr style={{ width: "50%" }} />
            <p>
              Temperature: {weatherData.current.temperature}
              °C
            </p>
            <hr style={{ width: "50%" }} />
            <p>Humidity: {weatherData.current.humidity}%</p>
            <hr style={{ width: "50%" }} />
            <p>Description: {weatherData.current.weather_descriptions[0]}</p>
            <hr style={{ width: "50%" }} />
            <p>Visibility: {weatherData.current.visibility}</p>
          </Bottom>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
