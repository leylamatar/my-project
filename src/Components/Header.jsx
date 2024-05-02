import React from "react";
import {MdPostAdd} from 'react-icons/md';
import {useDispatch} from 'react-redux'
import { modalFunc } from "../redux/modalSlice";


const Header = () => {

  const dispatch = useDispatch();

  return (
    <div className="flex item-center justify-between bg-pink-600 text-white px-4 py-4">
      <div className="text-3xl py-2">REACT UYGUALAMA</div>
      <div className="flex item-center gap-5 py-2">
        <div className="text-black">
          <select className="h-8 rounded-lg" name="" id="">
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div>
          <input className="h-8 rounded-lg px-3"  type="text" placeholder="Arama yapınız..."/>
          
        </div>
        <div onClick={()=> dispatch(modalFunc())} className="px-2 bg-pink-700 w-18 h-10 rounded-full flex items-center justify-center cursor-pointer " >
          <MdPostAdd size={24}/>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
