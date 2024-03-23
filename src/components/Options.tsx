import Searchbar from './Searchbar';

function Options() {
  return (
    <div className='flex justify-between items-center w-auto p-4'>
        <Searchbar/>
        <div className='flex gap-3 items-center mr-8'>
            <img src="../static/excel.png" alt="" />
            <img src="../static/pdf.png" alt="" />
        </div>
    </div>
  )
}

export default Options