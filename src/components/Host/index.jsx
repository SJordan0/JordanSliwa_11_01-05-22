import React from 'react'
import styled from 'styled-components'

const HostInfos = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 767px) {
  margin-left: 20px;
}
`

const Name = styled.p`
  font-size: 18px;
  width : 93px;
  color: #FF6060;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

const Image = styled.div`
border-radius: 50%;
overflow: hidden;
height: 64px;
width: 64px;
 & img {
  height: 64px;
  width: 64px;
 }

 @media screen and (max-width: 767px) {
  font-size: 14px;
  height: 48px;
  width: 48px;
    & img {
      height: 48px;
      width: 48px;
 }
}
`

const Host = ({ appartHost }) => {
  return (
    <HostInfos>
      <Name>{appartHost.name}</Name>
      <Image>
        <img src={appartHost.picture} alt={'photo de ' + appartHost.name} />
      </Image>
    </HostInfos>
  )
}

export default Host