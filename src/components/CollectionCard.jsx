import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {

    const dispatch = useDispatch();
    const removeFromCollections = (item) => {
        dispatch(removeCollection(item.id));
        dispatch(removeToast());
    }
  return (
    <div>
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
            console.log('removed')
            removeFromCollections(item);
        }}
        className='active:scale-95 bg-indigo-600 text-white rounded px-3 py-1 cursor-pointer font-medium'>Remove</button>
      </div>
    </div>
    </div>
  )
}

export default CollectionCard
