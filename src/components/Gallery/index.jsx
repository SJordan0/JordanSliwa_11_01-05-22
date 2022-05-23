import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'

const Gallerie = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const Image = styled.img`
  height: 415px;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`

const LeftButton = styled.button`
  font-size: 96px;
  color: white;
  left: 15px;
  position: absolute;
`

const RightButton = styled.button`
  font-size: 96px;
  color: white;
  right: 15px;
  position: absolute;
`

const Compteur = styled.p`
  font-size: 24px;
  color: white;
  position: absolute;
  left: 50%;
  bottom: 20px;
`

const Gallery = ({ appartPictures }) => {
  const [chooseImg, setChooseImg] = useState(0)
  let currentPicture = appartPictures[chooseImg]

  const previousImg = () => {
    if (chooseImg === 0) {
      setChooseImg(appartPictures.length - 1)
    } else {
      setChooseImg(chooseImg - 1)
    }
    currentPicture = appartPictures[chooseImg]
  }

  const nextImg = () => {
    if (chooseImg === appartPictures.length - 1) {
      setChooseImg(0)
    } else {
      setChooseImg(chooseImg + 1)
    }
    currentPicture = appartPictures[chooseImg]
  }
  return (
    <Gallerie>
      {appartPictures.length !== 1 && (
        <LeftButton
          type="button"
          onClick={previousImg}
        >
          <FontAwesomeIcon icon={faAngleLeft}/>
        </LeftButton>
      )}

      <Image src={currentPicture} alt="" />
      {appartPictures.length !== 1 && (
        <RightButton
          type="button"
          onClick={nextImg}
        >
          <FontAwesomeIcon icon={faAngleRight}/>
        </RightButton>
      )}
      <Compteur>
        {chooseImg + 1}/{appartPictures.length}
      </Compteur>
    </Gallerie>
  )
}

export default Gallery