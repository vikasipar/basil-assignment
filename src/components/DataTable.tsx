// import { useState } from 'react';
import {data} from '../data.js';

function DataTable() {
  // const [color, setColor] = useState('');

  let id:number = 0;

  type Colors = {
    [key: string]: string;
  }

  const status: Colors = {
    success: "#53A450",
    failure: "#FF5630",
    pending: "#E2D900",
    sent: "#E28800",
    refundinitiated: "#5053A4",
    refundcompleted: "#9D50A4",
  }

  return (
    <div className='w-full pl-9'>
        <div className='grid grid-cols-8 gap-[18px] h-9 text-xs font-bold uppercase mt-4 text-[#377DFF] w-full mb-6 leading-relaxed'>
          <span className='pl-9'>S. No.</span>
          <span className='flex items-start gap-x-3'>Date <img src="../static/select.png" alt="select" /></span>
          <span className='flex items-start gap-x-3 pr-9'>Order Id <img src="../static/select.png" alt="select" /></span>
          <span>Machine Name</span>
          <span>Customer Name</span>
          <span>Contact Number</span>
          <span className='flex items-start pr-4'>Total Amount <img src="../static/select.png" alt="select" /></span>
          <span>Status</span>
        </div>
        {data.map((obj) => {
              const statusColor = status[obj.status.split(/\s+/).join('').toLowerCase()];
              
            return(
            <div key={obj.id} className='grid grid-cols-8 gap-[10px] h-[94px] pt-5 text-sm w-full'>
                <span className='pl-9'>{++id}</span>
                <div className='flex flex-col'>
                    <span>{obj.date}</span>
                    <span className='text-xs text-[#333333] mt-2'>{obj.time}</span>
                </div>
                <span>OD{obj.orderId}</span>
                <span className='pr-2'>Aahaar Stall {obj.machineName}
                  <span className='text-[#B0A6A6]'> (MI10{id})</span>
                </span>
                <span>{obj.customerName}</span>
                <span>{obj.contactNum}</span>
                <span>₹ {obj.totalAmount}</span>
                <span className={`w-max h-fit border rounded-3xl px-3 py-1`} style={{color: statusColor, borderColor: statusColor}}>{obj.status}</span>
            </div>
            )
        })}
    </div>
  )
}

export default DataTable;