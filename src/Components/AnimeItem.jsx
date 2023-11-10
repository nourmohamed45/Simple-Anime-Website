import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";


function AnimeItem() {
  const { id } = useParams();
  

  // state
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // destructure anime
  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  // get anime based on id
  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  // get characters
  const getCharacters = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
    const data = await response.json();
    setCharacters(data.data)
  }


  // Initial render
  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <AnimeItemStyled>
      <div className="back">
        <Link to={"/"}>
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </div>
      <h1>{title}</h1>
      <div className="details">
        <div className="detail">
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="" />
          </div>
          <div className="anime-details">
            <p>
              <span className="head">Aired:</span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span className="head">Rating:</span>
              <span>{rating}</span>
            </p>
            <p>
              <span className="head">Rank:</span>
              <span>{rank}</span>
            </p>
            <p>
              <span className="head">Score:</span>
              <span>{score}</span>
            </p>
            <p>
              <span className="head">Scored By:</span>
              <span>{scored_by}</span>
            </p>
            <p>
              <span className="head">Popularity:</span>
              <span>{popularity}</span>
            </p>
            <p>
              <span className="head">Status:</span>
              <span>{status}</span>
            </p>
            <p>
              <span className="head">Source:</span>
              <span>{source}</span>
            </p>
            <p>
              <span className="head">Season:</span>
              <span>{season}</span>
            </p>
            <p>
              <span className="head">Duration:</span>
              <span>{duration}</span>
            </p>
          </div>
        </div>
        <p className="description">
          {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <h3 className="title">Trailer</h3>
      <div className="trailer-con">
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title={title}
            width={"800"}
            height={"450"}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : <h3>Trailer is Not Available</h3>}
      </div>
      <h3 className="title">Characters</h3>
      <div className="characters">
        {characters?.map((character, index) => {
          const {role} = character;
          const {images, name, mal_id} = character.character;
          return (
            <Link to={`/character/${mal_id}`} key={index}>
              <div className="character">
                <img src={images?.jpg.image_url} alt="This Image Not Found" />
                <h4>{name}</h4>
                <p>{role}</p>
              </div>
            </Link>
          )
        })}
      </div>

    </AnimeItemStyled>
  );
}



// Styles
const AnimeItemStyled = styled.div`
  padding: 3rem 10rem;
  background-color: #EDEDED;
  .back {
    position: absolute;
    top: 2rem;
    left: 2rem;
    a {
      font-weight: 600;
      text-decoration: none;
      color: #EB5757;
      display:flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  h1 {
    margin-top: 2rem;
    display: inline-block;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    background: linear-gradient(to right, #A855f7, #27AE60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .4s ease-in-out;
    &:hover {
      transform: skew(-3deg);
    }
  }
  .title {
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    background: linear-gradient(to right, #A855f7, #27AE60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .4s ease-in-out;
  }

  .description {
    margin-top: 2rem;
    color: #6c7983;
    line-height: 1.7rem;
    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: #27AE60;
      font-weight: 600;
    }
  }

  .trailer-con {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
      border-radius: 10px;
      outline: none;
      border: 5px solid #e5e7eb;
      background-color: #fff;
      padding: 1.5rem;
    }
  }

  .details {
    width: fit-content;
    margin-bottom: 40px;
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem;
    border: 5px solid #e5e7eb;
    .detail {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      column-gap: 40px;
      .image {
        max-width: 300px;
        img {
          width: 100%;
          border-radius: 7px;
        }
      }
    }
    .anime-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 24px;
      row-gap: 20px;
      p {
        display: flex;
        gap: 1rem;
        span {

        }
        span.head {
          color: #27AE60;
          font-size: 1rem;
          font-weight: bold;
        }
      }
    }
  }

  .characters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 6rem;
    background-color: #fff;
    padding: 1rem;
    border-radius: 20px;
    border: 5px solid #e5e7eb;
    a {
      display: flex;
      justify-content: center;
    }
    .character {
      padding: .4rem .6rem;
      border-radius: 7px;
      background-color: #EDEDED;
      transition: all .4s ease-in-out;
      width: 200px;
      height: 250px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      h4 {
        padding: .5rem 0;
        color: #454e56;
      }
      p {
        color: #27AE60;
      }
      &:hover {
        transform: translateY(-5px);
      }
    }
  }


`












export default AnimeItem;
