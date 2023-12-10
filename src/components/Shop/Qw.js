import React,{useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
const Qw = () => {
    const navigate=useNavigate()
    const params=useParams()
    useEffect(() => {
        navigate(`/SingleProduct/${params.id}`) 
     
    }, [])
    
  return (
    <div>loading</div>
  )
}

export default Qw