import { UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='py-20 px-20'><UserButton showName/></div>
  )
}

export default Dashboard