import React from 'react'
import { Navigate, useNavigate } from 'react-router'

function ProtectedRoute(props) {
  const navigate = useNavigate()
  if (!props.user) return <Navigate to="/" />
  return props.children
}

export default ProtectedRoute
