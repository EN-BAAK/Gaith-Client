import React from 'react'
import UpdatePassword from './Auth'
import SystemSettingsForm from './System'

const page: React.FC = () => {
  return (
    <div className='space-y-8'>
      <UpdatePassword />
      <SystemSettingsForm />
    </div>
  )
}

export default page