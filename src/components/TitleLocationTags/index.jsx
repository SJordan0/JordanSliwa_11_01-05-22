import React from 'react'
import styled from 'styled-components'

const Appart = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 36px;
  color: #FF6060;
`

const Location = styled.h2`
  font-size: 18px;
  color: #FF6060;
`

const Tags = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
  display: flex;
  margin-top: 20px;
  max-width: 100%
`

const Tag = styled.div`
  background: #FF6060;
  border-radius: 10px;
  padding: 5px 30px;
  margin-right: 15px;
`

const TitleLocationTags = ({ appartTitle, appartLocation, appartTags }) => {
  return (
    <Appart>
      <Title>{appartTitle}</Title>
      <Location>{appartLocation}</Location>
      <Tags>
        {appartTags.map((tag, index) => (
          <Tag key={index} className="tag">
            {tag}
          </Tag>
        ))}
      </Tags>
    </Appart>
  )
}

export default TitleLocationTags