import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(false)
  const [tours,setTours]=useState([])
  
  const removeTour=(id)=>{
    let newTourList=tours.filter(tour=>tour.id!==id)
    setTours(newTourList)
  }

  const fetchTours = async () => {
    setLoading(true)
  try {
    const response = await fetch(url)
    const data = await response.json()
    setLoading(false)
    setTours(data)  
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
  }
  
   useEffect(()=>{   //useEffect is a lifecycle method that runs after the component is rendered,if any data is not present the empty array will be rendered.    
      fetchTours()
   },[]);
  if(loading){
    return <main>
      <Loading />
    </main>
  }else if(tours.length===0){
    return <main>
     <div className='title'>
        <h2>No Tour's left</h2>
        <div className='underline'></div>
    </div>
      <button className="btn" onClick={fetchTours}>Refresh</button>
    </main>
  }
  return <main><Tours Tours={tours} removeTour={removeTour}/></main>
}

export default App
