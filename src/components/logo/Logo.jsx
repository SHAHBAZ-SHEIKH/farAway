import React from 'react'

function Logo() {
    

    return (
        <div className='  bg-[#f19720] flex justify-center items-center gap-[20px] p-2'>
            <div className='w-100px'>
                <img className='w-[90px]' src="../../public/tree.png" alt="tree" />
            </div>
            <h1 className='md:text-[50px] text-[#573616] font-bold text-[30px]'>Far Away</h1>
            <div>
                <img className='w-[90px]' src="../../public/breifcase.png" alt="" />
            </div>

        </div>
    )
}

export default Logo
