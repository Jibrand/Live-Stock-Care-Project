import React,{useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const Sent_fr_request_to_request = () => {

    const navigate=useNavigate()
    const params=useParams()

    useEffect(() => {
      navigate(`/Admin/Dashboard/upsell/request`)
    }, [])
    
  return (
    <div>Redirecting</div>
  )
}
export default Sent_fr_request_to_request