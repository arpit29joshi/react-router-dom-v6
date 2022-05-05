import React from 'react'
import { Outlet } from 'react-router'

function SharedProductLayout() {
  return (
    <>
      <h2>Product</h2>
      <Outlet />
    </>
  )
}

export default SharedProductLayout
