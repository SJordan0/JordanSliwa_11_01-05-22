import React from 'react'
import styled from 'styled-components'

const HostInfos = styled.div`
display: flex;
align-items: center;
`

const Name = styled.p`
  font-size: 18px;
  width : 93px;
  color: #FF6060;
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