import React,{useState} from 'react'

function Item({ itemList:{inputValue,optionValue,checked},editHandler,index ,setItem,item}) {
    console.log(item)

    // const [isChecked, setIsChecked] = useState(false)
    const checkedHandler = (checked,index) => {
        const meryUpdateList = [...item]
        meryUpdateList[index].checked = !checked

        setItem(meryUpdateList)
    }
    

    

    return (

        <div className='flex gap-[10px] justify-center  items-center'>

            {/* <input type="checkbox" /> */}
            <input checked={checked} onChange={()=>checkedHandler(checked,index)} type="checkbox" />

            {/* {text} */}

            <h3 className={`text-[30px] text-[#fff] ${checked ? "line-through" : "none"}`}>{optionValue} {inputValue}</h3>

            {/* <button>X</button> */}
            <button onClick={() => editHandler(index,optionValue,inputValue)} className='text-[red] font-bold text-[25px]'>X</button>
        </div>  



    )
}

export default Item
