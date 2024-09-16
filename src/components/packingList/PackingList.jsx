import React, { useState } from 'react'
import Item from './item/Item'

function PackingList({ item,editHandler ,clearList,setItem}) {
    console.log(item)
    
    

    
    


    return (
        <div className='bg-[#4c3423] flex justify-between flex-col items-center h-[365px] py-[10px] mx-auto w-[100%]'>
            <div className='flex flex-wrap gap-[20px]  mx-auto justify-center lg:w-[70%] sm:w-[100%]'>
                {
                    item.map((itemList, index) => <Item key={index} setItem={setItem} index={index} editHandler={editHandler} itemList={itemList} item={item}  />)
                }
            </div>


            <div className='flex flex-row gap-[10px]'>
                <select   className='p-[5px] rounded-[12px] outline-none bg-[#fde7aa] text-[#937c5a] font-bold' >
                    {
                        ["SORT BY INPUT ORDER", "SORT BY DESCRIPTION", "SORT BY PACKED STATUS"].map((item) => <option value={item} key={item}>{item}</option>)
                    }
                </select>

                <button onClick={clearList} className='p-[10px_12px] rounded-[12px] outline-none bg-[#fde7aa] text-[#937c5a] font-bold'>Clear List</button>
            </div>

        </div>
    )
}

export default PackingList
