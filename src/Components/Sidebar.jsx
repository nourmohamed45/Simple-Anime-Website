import styled from "styled-components"
import { useGlobalContext } from "../contexts/global"
import { Link } from "react-router-dom";



function Sidebar() {

  const {popularAnime} = useGlobalContext();

  const sorted = popularAnime?.sort((a,b) => {
    return a.rank - b.rank;
  })

  return (
    <SidebarStyled>
      <h3>Top 5 Popular</h3>
      <div className="anime">
        {sorted?.slice(0,5).map((anime) => {
          return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="This is Not Found" />
            <h5>
              {anime.title}
            </h5>
          </Link>
        })}
      </div>
    </SidebarStyled>
  )
}



const SidebarStyled = styled.div`
  background-color: #fff;
  margin-top: 2rem;
  border-top: 5px solid #e5e7eb;
  padding: 2rem 5rem 0 2rem;
  .anime {
    display: flex;
    flex-direction: column;
    width: 150px;
    img {
      width: 100%;
      border-radius: 5px;
      border: 5px solid #e5e7eb;
    }
    a {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: .4rem;
      color: #27AE60;
      h4 {
        font-size: 1.1rem;
      }
    }
  }
`


export default Sidebar