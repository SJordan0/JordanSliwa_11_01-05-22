import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Stars = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`
const StarsGrey = styled.ul`
  display: flex;
  color: grey;
`

const StarsRed = styled.ul`
  display: flex;
  position: absolute;
  color: #FF6060;
`

const StarGrey = styled.li`
  font-size: 24px;
  margin-right: 10px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-right: 10px;
  }
`
const StarRed = styled.li`
  font-size: 24px;
  margin-right: 10px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-right: 10px;
  }
`

function Rates({ appartRating }) {
  const starsGrey = []
  for (let i = 0; i < 5; i++) {
    starsGrey.push(i)
  }

  const starsRed = []
  for (let i = 0; i < appartRating; i++) {
    starsRed.push(i)
  }

  return (
    <Stars>
      <StarsGrey>
        {starsGrey.map((_starGrey, index) => (
          <StarGrey key={index}>
            <FontAwesomeIcon icon={faStar}/>
          </StarGrey>
        ))}
      </StarsGrey>
      <StarsRed>
        {starsRed.map((_starRed, index) => (
          <StarRed key={index}>
            <FontAwesomeIcon icon={faStar}/>
          </StarRed>
        ))}
      </StarsRed>
    </Stars>
  )
}

export default Rates