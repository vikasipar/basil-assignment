import {data} from '../data.js';

function DataTable() {

  let id:number = 0;

  return (
    <div className='w-full pl-9 border border-purple-600'>
        <div className='grid grid-cols-8 gap-[18px] h-9 text-xs font-bold uppercase mt-4 text-[#377DFF] w-full mb-6 leading-relaxed'>
          <span>S. No.</span>
          <span className='flex items-start gap-x-3'>Date <img src="../static/select.png" alt="select" /></span>
          <span className='flex items-start gap-x-3 pr-9'>Order Id <img src="../static/select.png" alt="select" /></span>
          <span>Machine Name</span>
          <span>Customer Name</span>
          <span>Contact Number</span>
          <span className='flex items-start pr-4'>Total Amount <img src="../static/select.png" alt="select" /></span>
          <span>Status</span>
        </div>
        {data.map((obj) => (
            <div key={obj.id} className='grid grid-cols-8 gap-[10px] h-[94px] pt-5 text-sm border-blue-600 w-full'>
                <span>{++id}</span>
                <div className='flex flex-col'>
                    <span>{obj.date}</span>
                    <span>{obj.time}</span>
                </div>
                <span>{obj.orderId}</span>
                <span>{obj.machineName}</span>
                <span>{obj.customerName}</span>
                <span>{obj.contactNum}</span>
                <span>{obj.totalAmount}</span>
                <span>{obj.status}</span>
            </div>
        ))}
    </div>
  )
}

export default DataTable;