import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const CardInfo = styled.div`
  max-height: 340px;
  width: 100%;
  border-radius: 15px;
  transition : transform 0.5s;
  &:hover {
    box-shadow: 2px 2px 20px grey;
    transform: scale(1.1);
  }
  & img {
    height: 340px;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  & p {
    position: relative;
    padding-left : 10px;
    padding-right : 10px;
    bottom : 80px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 1px 1px black;
  }
`

function Card({ item }) {
  return (
      <NavLink to={`/Logement/${item.id}`}>
        <CardInfo>
          <img src={item.cover} alt={item.title} />
          <p>{item.title}</p>
        </CardInfo>
      </NavLink>
  )
}

export default Card