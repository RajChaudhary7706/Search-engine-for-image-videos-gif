import React, { use } from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard';

const CollectionPage = () => {
    const collections = useSelector((state) => state.collection.items);
  return (
    <div>
        <div className='flex justify-center items-center flex-wrap px-5 py-5 gap-6 min-h-screen'>
            {collections.length === 0 ? <h1 className='text-3xl font-medium'>No items in Collections</h1> : collections.map((item, idx) => {
                return <CollectionCard key={idx} item={item}/>
            })}
        </div>
    </div>
  )
}

export default CollectionPage
