import React from 'react'
import ResultGrid from './ResultGrid'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {
    const dispatch = useDispatch();
    const addToCollections = (item) => {
            dispatch(addCollection(item));
            dispatch(addedToast());
    } 
  return (
    <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden cursor-pointer group'>
        <a href={item.url} target='_blank'>
        {item.type === 'photo' ? <img className='w-full h-full object-cover object-center' src={item.src} alt=""/> : ''}
        {item.type === 'video' ? <video className='w-full h-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
        {item.type === 'gif' ? <img className='w-full h-full object-cover object-center' src={item.src} alt=""/> : ''}
        </a>
      <div id='bottom' className='flex justify-between items-center w-full px-4 py-5 absolute bottom-0 text-white'>
        <h2 className='text-xl font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
        <button 
        onClick={()=>{
            addToCollections(item);
        }}
        className='active:scale-95 bg-indigo-600 text-white rounded px-3 py-1 cursor-pointer font-medium'>Save</button>
      </div>
    </div>
  )
}

export default ResultCard
  