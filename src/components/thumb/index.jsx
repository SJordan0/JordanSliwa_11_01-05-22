import React,{useState,useEffect} from 'react';
import styled from 'styled-components'

const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 50px 0 50px;
`

const CardInfo = styled.div`
  max-height: 340px;
  width: 30%;
  margin-bottom : 50px;
  & img {
    height: 340px;
    width: 100%;
    object-fit: cover;
  }
  & p {
    position: relative;
    left : 15px;
    bottom : 100px;
    font-size: 24px;
    font-weight: bold;
    color: white;
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
    <CardStyle className="Card">
     {
       data && data.length>0 && data.map((item)=>
       <CardInfo>
        <img src= {item.cover} alt='' />
        <p>{item.title}</p>
       </CardInfo>
       )}
    </CardStyle>
  );
}

export default Card;




// function Card({ title, cover }) {

//     const getData=()=>{
//         fetch('data.json'
//         ,{
//           headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//            }
//         }
//         )
//           .then(function(response){
//             console.log(response)
//             return response.json();
//           })
//           .then(function(myJson) {
//             console.log(myJson);
//           });
//       }
//       useEffect(()=>{
//         getData()
//       },[])

//       return (
//         <div className="App">
//          {
//            data && data.length>0 && data.map((item)=><p>{item.about}</p>)
//          }
//         </div>
//      );

//     // return (
//     //     <div>
//     //         <img src={cover} alt=''/>
//     //         <span>{title}</span>
//     //     </div>
//     // )
// }


// export default Card