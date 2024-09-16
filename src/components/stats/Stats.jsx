import React from 'react'

function Stats({ item }) {
    let packedValue
    let percentage

    {
        packedValue = item.filter((item)=>{
            return item.checked === true
        })
        console.log(packedValue)
    }

    {
         percentage = (packedValue.length *100)/item.length
    }
    

    return (
        <div className='bg-[#67c1a3] text-center p-[20px] text-[#413322] font-bold text-[20px]'>
            <h5>You have {item.length} items on Your List,and you already packed {packedValue.length ? packedValue.length : "" } ({percentage ? percentage.toFixed(0)  + "%" : 0 +"%"})</h5>
        </div>
    )
}

export default Stats
