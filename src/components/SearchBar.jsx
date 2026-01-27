import React, { use, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice.js'
const SearchBar = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(text);

        dispatch(setQuery(text));

        setText('');
    }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)}} className='flex bg-[var(--c3)] gap-5 p-10'>
        <input 
        value = {text}
        onChange = {(e) => setText(e.target.value)}
        required
        className='border-2 w-full px-4 py-2 m-4 text-xl rounded outline-none'
        type='text' placeholder='Search Anything...' />
        <button className='active:scale-95 border-2 px-4 py-2 text-xl m-4 rounded outline-none cursor-pointer'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
