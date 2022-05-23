import React,{useState,useEffect} from 'react';
import { getAllAppart } from '../../data/data'
import Card from "../Card";
import styled from 'styled-components'

const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  & a {
    width: 30%;
    margin: 0 22px 50px 22px;
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