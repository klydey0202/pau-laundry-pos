import React from 'react'
import { LaundryOrders }  from '../../../../components/laundry-orders';

export default function LaundryOrdersPage() {
  return (
    <div>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col justify-between gap-4'>
          <LaundryOrders/>
        </div>
      </div>
    </div>
  )
}
