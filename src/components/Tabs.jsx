import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ['photos','videos','gifs'];

    const dispatch = useDispatch();

    const activeTab = useSelector((state)=>state.search.activeTab);

  return (
    <div className='flex gap-10 p-10'>
      {tabs.map(function(elem,idx){
        return (
        <button className={`${(activeTab === elem ? 'bg-blue-700' : 'bg-red-800 hover:bg-gray-600')} w-full cursor-pointer active:scale-95 transition-all px-4 py-2 bg-gray-800 rounded`} 
        key={elem}
        onClick={()=>{
            dispatch(setActiveTab(elem));
        }}
        >{elem}
        </button>
        );
      })}
    </div>
  )
}

export default Tabs
