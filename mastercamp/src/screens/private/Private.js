import React, {useContext} from 'react'
import {UserContext} from "../../context/userContext"
import {Outlet, useLocation, Navigate} from "react-router-dom"

export default function Private() {
<h1>Vous etes connecté !</h1>
  const {currentUser} = useContext(UserContext)
  console.log("PRIVATE", currentUser);

  if(!currentUser) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      <Outlet />
    </div>
  )
}