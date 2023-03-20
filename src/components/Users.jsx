import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Users = () => {
const [item, setItem] =useState([]);
const [page, setPage] = useState(1)
const [pagelimit, setPagelimit] = useState(20);
const [loading, setLoading] = useState(true)

const handleScroll=(e)=>{
  const {scrollTop, scrollHeight,clientHeight } = e.target
  // console.log("scrollTop",Math.round(scrollTop))
  // console.log("scrollHeight",Math.round(scrollHeight))
  // console.log("clientHeight", Math.round(clientHeight))
      if(Math.round(scrollHeight)-Math.round(scrollTop)===Math.round(clientHeight)){
        setLoading(true)
        setPage(prev=>prev+1)
        // console.log(pagelimit)
        setTimeout(async()=>{
         const newPage= Number(page)+1;
         console.log(newPage)
         await fetchUsers(newPage)
         setLoading(false)
        },1000)
      }
}


const fetchUsers= async(page)=>{
  const res= await axios(`http://localhost:8080/users?_page=${page}&_limit=${pagelimit}`)
  setItem(item=>[...item, ...res.data])
  setLoading(false)
}
useEffect(()=>{
  fetchUsers(page)
},[])
console.log(item)




console.log(item)

  return (
    <div>
      <h2>Infinite Scrolling</h2>
     {!loading?
      <div className='card' data-id="data-id" onScroll={(e)=>handleScroll(e)} style={{height:"80vh",overflow:"auto"}} >
     {
        item.map((e, idx)=>(
        
          <div testid='test-id' key={idx} style={{display:"flex", gap:"2px", flexDirection:'column',boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",marginBottom:'10px' }}>  
            <img src={e.picture.large} alt="pic" width="100%"/>
            <div style={{textAlign:"left", paddingLeft:'15px'}} >
     
              <h3 style={{ margin:0}}>Name: {e.name.title} {e.name.first} {e.name.last}</h3>
             <h4 style={{ margin:0}}>Gender: {e.gender}</h4>
            </div>
          </div>
         
        ))
}
      </div>:
      <div>
        <h1 loader="loading-id">Loading...</h1>
      </div>
      }
    </div>
  )
}

export default Users