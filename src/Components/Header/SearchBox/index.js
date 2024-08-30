import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <>
      <div className='headerSearch'>
            <input type='text' placeholder="Search for products"/>
            <Button><IoSearch/></Button>
          </div>
    </>
  )
}

export default SearchBox