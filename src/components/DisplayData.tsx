import DataTable from './DataTable';
import Filters from './Filters';

function DisplayData() {
  return (
    <div className='flex w-auto justify-around border border-red-600 mx-0'>
        <DataTable/>
        <Filters/>
    </div>
  )
}

export default DisplayData;