import React from 'react'
import { Input } from '@/components/ui/input'

export default function LaundryOrders() {
  return (
    <div>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col justify-between gap-4'>
          <h1 className='text-xl font-bold text-gray-800'>Laundry Information</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Input type='text' placeholder='Name' className='max-w-sm' />
            <Input type='text' placeholder='Contact Number' className='max-w-sm' />
            <Input type='text' placeholder='Address' className='max-w-sm' />
          </div>
          
        </div>
      </div>
    </div>
  )
}
