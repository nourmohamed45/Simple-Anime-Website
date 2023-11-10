import { useGlobalContext } from "../contexts/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

function Airing({rendered}) {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "airing") {
      return airingAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img
              src={anime.images.jpg.large_image_url}
              alt="There is no such image"
            />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img
              src={anime.images.jpg.large_image_url}
              alt="There is no such image"
            />
          </Link>
        )
      })
    }
  };
  return (
    <AiringStyle>
      <div className="airing-anime">{conditionalRender()}</div>
      <Sidebar/>
    </AiringStyle>
  );
}

const AiringStyle = styled.div`
  display: flex;
  .airing-anime{
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    grid-gap: 2rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb;
    a {
      height: 300px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 7px;
      }
    }
  }
`

export default Airing;


Airing.propTypes = {
    rendered: PropTypes.string,
  };