import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const Help = () => {
const params=useParams()
  const navigate = useNavigate()
  useEffect(() => {
    navigate(`/allproducts/${params.id}`)
  }, [])


  return (
    <div> Loading....</div>
  )
}

export default Help