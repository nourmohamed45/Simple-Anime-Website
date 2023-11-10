import { useGlobalContext } from "../contexts/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

function Popular({ rendered }) {
  const { popularAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "popular") {
      return popularAnime?.map((anime) => {
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
        );
      });
    }
  };
  return (
    <PopularStyle>
      <div className="popular-anime">
        {conditionalRender()}
      </div>
      <Sidebar/>
    </PopularStyle>
  );
}

const PopularStyle = styled.div`
  display: flex;
  .popular-anime {
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
`;

export default Popular;

Popular.propTypes = {
  rendered: PropTypes.string,
};
