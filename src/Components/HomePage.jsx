import { useState } from "react";

// Components
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Airing from "./Airing";

// Contexts
import { useGlobalContext } from "../contexts/global";

// Style
import styled from "styled-components";

function HomePage() {
  const {
    handleSubmit,
    handleChange,
    search,
    getPopularAnime,
    getUpcomingAnime,
    getAiringAnime,
  } = useGlobalContext();
  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };
  return (
    <HomePageStyled>
      <header>
        <div className="logo">
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
        <div className="search-container">
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              />
              <button type="submit">
                Search
              </button>
            </div>
          </form>
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
                getPopularAnime();
              }}
            >
              Popular
              <i className="fas fa-fire"/> 
            </button>
          </div>
          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </button>
          </div>
          <div className="filter-btn upcoming-filter">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming
            </button>
          </div>
        </div>
      </header>
      {switchComponent()}
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  background-color: #ededed;
  header {
    padding: 2rem 5rem;
    width: 90%;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
    }
    .search-container {
      display: flex;
      flex-wrap: wrap;
      // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      align-items: center;
      justify-content: center;
      gap: 1rem;
      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1.5rem;
        outline: none;
        border-radius: 30px;
        font-size: 1.2rem;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        font-family: inherit;
        border: 5px solid #e5e7eb;
      }
      form {
        position: relative;
        min-width: 400px;
        .input-control {
          input {
            width: 100%;
            padding: 0.7rem 1rem;
            border: none;
            outline: none;
            border-radius: 30px;
            font-size: 1.2rem;
            background-color: #fff;
            border: 5px solid #e5e7eb;
            transition: all 0.4s ease-in-out;
          }
          button {
            position: absolute;
            right: 0;
            top: 0;
            padding: 0.7rem 1rem;
          }
        }
      }
    }
  }
`;

export default HomePage;
