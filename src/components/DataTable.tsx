import { useEffect, useState } from 'react';
import {data} from '../data.js';

function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(3);
  const [currentPageData, setCurrentPageData] = useState(null);
  const [totalData, setTotalData] = useState(data);
  
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

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);

    setCurrentPageData(totalData.slice(startIndex, endIndex));
  }, [itemsPerPage, currentPage]);

  const prevHandler = () => {
    if(currentPage > 1){
        setCurrentPage(currentPage-1);
    }
    else{
      setCurrentPage(1);
    }
    window.scrollTo({top:0, behavior:"smooth"});
  }

  const nextHandler = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage+1);
    }
    else{
      setCurrentPage(totalPages);
    }
    window.scrollTo({top:0, behavior:"smooth"});
  }

  const handleItemsPerPageChange = (e:any) => {
    setItemsPerPage(e.target.value);
  }

  return (
    <div className='w-full pl-9'>
        
        <div className='flex justify-around mt-9 mb-12 text-xs'>
          <span>Machines: 6</span>
          <span>Orders: {totalData.length}</span>
          <span>Customers: {totalData.length}</span>
          <span>Drinks: {totalData.length}</span>
          <span>Total Amount: ₹ {totalData.reduce((acc, curr) => acc + curr.totalAmount,0)}</span>
          <span>Refunds Initiated: {totalData.filter((curr) => curr.status === "Refund Initiated").length}</span>
        </div>

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
        {currentPageData && currentPageData.map((obj:any) => {
              const statusColor = status[obj.status.split(/\s+/).join('').toLowerCase()];
              let newId:number = currentPage*itemsPerPage-itemsPerPage;
            return(
            <div key={obj.id} className='grid grid-cols-8 gap-[10px] h-[94px] pt-5 text-sm w-full'>
                <span className='pl-9'>{++id + newId}</span>
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

        <div className='flex items-center w-full justify-between mt-4 mb-32 text-sm'>

          <div>
            Showing {currentPage*itemsPerPage-itemsPerPage+1} to {currentPage*itemsPerPage} of {totalData.length} entries
          </div>

          <div>
            <span>Rows per page:</span>
            <select value={itemsPerPage} onChange={handleItemsPerPageChange} className='cursor-pointer outline-none'>
              <option>{itemsPerPage}</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>

          <div className='flex items-center gap-x-5'>
            <img src="../static/dleft.png" alt="prev page icon" className='w-3 cursor-pointer' onClick={()=>setCurrentPage(1)} />
            <img src="../static/sleft.png" alt="prev page icon" className="w-2 cursor-pointer" onClick={prevHandler}/>
            <span className='text-white bg-[#377DFF] py-2 px-3 rounded-md text-xs'>{currentPage}</span>
            <img src="../static/sright.png" alt="next page icon" className="w-2 cursor-pointer" onClick={nextHandler} />
            <img src="../static/dright.png" alt="next page icon" className="w-3 cursor-pointer" onClick={()=>setCurrentPage(totalPages)}/>
          </div>

        </div>
    </div>
  )
}

export default DataTable;