import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteDataFunc, updateDataFunc } from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({dt}) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () =>{
    dispatch(modalFunc())
    setOpenEdit(false)
    navigate(`/?update=${dt?.id}`)
    //dispatch(updateDataFunc(dt))
  }
  return (
    <div className='w-[200px] h-[200px] relative rounded-md mx-3'>
      <img src={dt?.url} className='w-full h-full rounded-md  ' alt=''/>
      <div className='absolute left-0 bottom-0 bg-pink-600 text-white w-full px-2'>
      
        <div className='text-lg font-semibold'>{dt?.name}</div>
        <div>{dt?.price} TL</div>
  </div>
<div onClick={() => setOpenEdit(!openEdit)} className='absolute top-0 right-2'>
  <BsThreeDots color="white" size={24}/>
</div>
{openEdit && (
  <div className='bg-yellow-200 border border-white text-black underline absolute p-2 text-sm top-4 right-2'>
    <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Delete</div>
    <div onClick={updateFunc}  className='cursor-pointer'>Update</div>
  </div>

)}
    </div>
  )
}

export default ProductCard