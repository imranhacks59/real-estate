import React, { useContext, useState } from 'react'
import { RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine } from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import { HouseContext } from '../context/HouseContext'
const PriceDropdown = () => {
    const {price,setPrice} = useContext(HouseContext);

    const [isOpen,setIsOpen] = useState(false);
    const prices=[
        {value:'Price range (any)'},
        {value:'100000-150000'},
        {value:'150000-200000'},
        {value:'200000-250000'},
        {value:'250000-300000'},
        {value:'350000-400000'},
    ]
  return (
   <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiMapPinLine
        className='dropdown-icon-primary' />
        <div>
            <div className='text-[15px] font-medium leading-tight'>{price}</div>
            <div className='text-[13px]'>choose price range</div>
            {
            isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />

            ):(
                <RiArrowDownSLine
                className='dropdown-icon-secondary'/>
            )
        }

        </div>
       
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
        {
            prices.map((price,index)=>{
                return(
                    <Menu.Item
                    onClick={()=>setPrice(price.value)}
                    className='cursor-pointer hover:text-violet-700 transition' as='li'
                    key={index}>
                        {price.value}
                    </Menu.Item>
                )
            })
        }
    </Menu.Items>
   </Menu>
  )
}

export default PriceDropdown
