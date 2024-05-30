import React from 'react'
import { FaUser } from "react-icons/fa";



function CarListItem({car, distance}) {
  return (
    <div>
           <div className='flex items-center justify-between mt-5'>
                <div className='flex items-center gap-5'>
                    <img src={car.image} alt="" width={100} height={100} />
                    <div>
                        <h2 className='font-semibold text-[18px] flex gap-3 items-center'>{car.name} 
                        <span className='flex gap-2 items-center font-normal text-[14px]'>
                        <FaUser /> {car.seat}

                        </span>
                        </h2>
                       
                        <p>{car.desc}</p>
                    </div>
                </div>
                <h2 className='text-[18px] font-semibold'>R{((car.amount*distance) * 20).toFixed(2)}</h2>
           </div>
    </div>
  )
}

export default CarListItem
