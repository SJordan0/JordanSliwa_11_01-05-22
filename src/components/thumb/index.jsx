import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  & a {
    width: 30%;
    margin: 0 22px 50px 22px;
  }
`

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

function Card() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <CardStyle>
     {
       data && data.length>0 && data.map((item)=>
       <NavLink to={`../../pages/Logement/${item.id}`}>
        <CardInfo id={item.id}>
          <img src= {item.cover} alt='' />
          <p>{item.title}</p>
        </CardInfo>
       </NavLink>
       )}
    </CardStyle>
  );
}

export default Card;