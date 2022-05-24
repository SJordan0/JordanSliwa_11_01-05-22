import React from 'react'
import styled from 'styled-components'

const Appart = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`
const Title = styled.h1`
  font-size: 36px;
  color: #FF6060;


  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`

const Location = styled.h2`
  font-size: 18px;
  color: #FF6060;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

const Tags = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  max-width: 100%
`

const Tag = styled.div`
  display: flex;
  background: #FF6060;
  font-size: 14px;
  border-radius: 10px;
  padding: 5px 30px;
  margin-right: 15px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    margin-top: 5px;
    margin-right: 5px;
    padding: 5px 10px;
  }
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