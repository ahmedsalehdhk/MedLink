import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton = (props) => {
  return (
    <Link to={props.to} className='border px-6 py-3 rounded-lg bg-white hover:bg-neutral-100 font-medium uppercase'>{props.title}</Link>
  )
}

export default PrimaryButton
