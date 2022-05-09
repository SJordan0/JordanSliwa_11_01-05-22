import React,{useState,useEffect} from 'react';

function Test() {
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
    <div className="Test">
     {
       data && data.length>0 && data.map((item)=><p>{item.title}</p>)
       
     }
    </div>
  );
}

export default Test;




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