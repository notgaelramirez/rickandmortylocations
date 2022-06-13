import axios from "axios"
import { useEffect, useState } from "react"


const useLocationApi = () =>{

  let [data, setData] = useState()

  useEffect(() => {
  
    const randomLocation = Math.ceil(Math.random() * 126)
    const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`

    axios.get(URL)
      .then(res => {
        setData(res.data)
      })

  }, [])

  return {data}
}

export default useLocationApi