import React from 'react'

function Form({ item, setItem, flag, setFlag, inputValue, setInputValue, optionValue, setOptionValue, updateIndex }) {



    const addHandler = () => {
        console.log(optionValue, inputValue)
        const list = [...item]
        list.push({
            inputValue,
            optionValue,
            checked: false
        })


        setItem(list)
        console.log(list)
        setInputValue("")
        setOptionValue(0)
    }

    const ctaUpdateHandler = () => {
        console.log("update", updateIndex, optionValue, inputValue)
        const updatedItems = [...item];
        
        updatedItems[updateIndex] = {
            inputValue: inputValue,
            optionValue: optionValue
        };

        
        setItem(updatedItems);
        setFlag(false)

        
        setInputValue("");
        setOptionValue(0);
    }



    return (
        <div className=' md:bg-[#df6b1b] md:flex justify-center md:items-center md:flex-col   sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex lg:justify-center lg::items-center lg::flex-col '>
            <div className='md:flex md:justify-center md:gap-[20px] md:py-[25px] md:items-center md:flex-row sm:flex sm:flex-col sm:justify-center sm:items-center gap-[5px] lg:flex lg:justify-center lg:items-center lg:flex-row  '>
                <h2 className='text-[20px] text-[#55341d] font-bold'>What do you need for Your Trip</h2>

                <select value={optionValue} onChange={(e) => setOptionValue(e.target.value)} className='p-[5px] rounded-[15px] md:w-[70px] w-[200px] outline-none bg-[#fde7aa] text-[#4c3423] font-bold '>
                    {
                        [1, 2, 3, 4, 5].map((item) => <option value={item} key={item}>{item}</option>)
                    }
                </select>

                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className='p-[5px] rounded-[15px] font-bold w-[200px] outline-none bg-[#fde7aa] text-[#4c3423]' type="text" placeholder='What you need for Your Trip' />
                <div className='flex '>
                    {
                        flag ?
                            <button onClick={ctaUpdateHandler} className='p-[5px] rounded-[15px] font-bold w-[200px] outline-none bg-[#67c1a3] text-[#fff]'>Update</button>
                            : <button onClick={addHandler} className='p-[5px] rounded-[15px] bg-[#67c1a3] w-[100px] text-[20px] mb-[5px] text-[#fff]'>Add</button>
                    }
                </div>



            </div>

        </div>
    )
}

export default Form
