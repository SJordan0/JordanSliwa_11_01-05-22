import React,{useState,useEffect} from 'react';
import { getAllAppart } from '../../service/data.js'
import Card from "../Card";
import styled from 'styled-components'

const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #F6F6F6;
  padding-top: 25px;
  border-radius: 20px;
  & a {
    width: 30%;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    a{
      width: 90%;
      margin: 0;
      margin-bottom: 15px;
    }
  }
`

function Thumb() {
    const [allAppartData, setAllAppartData] = useState([])
  
    useEffect(() => {
      setAllAppartData(getAllAppart())
    }, [])
  
    return (
      <CardStyle>
        {allAppartData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </CardStyle>
    )
  }
  
  export default Thumb