import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Components/Modal";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { createDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  const [productInfo,setProductInfo] = useState({name:"", price:"",url:""})
  const onChangeFunc = (e,type)=>{
      if(type == "url"){
          setProductInfo(prev => ({...prev,[e.target.name]: URL.createObjectURL(e.target.files[0])}))


      }else{
          setProductInfo(prev => ({...prev,[e.target.name]: e.target.value}))

      }

      
  }
console.log(data,"data")

  const buttonFunc = () => {
    dispatch(createDataFunc({...productInfo, id: data.length + 1})) 
    dispatch(modalFunc());
  };
  const contentModal = (
    <>
      <Input
        type={"text"}
        placeholder={"Add Product"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        type={"text"}
        placeholder={"Add Price"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />

      <Input
        type={"file"}
        placeholder={"Choose İmage"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button btnText={"Create"} onClick={buttonFunc} />
    </>
  );
  return (
    <div>
      <div className="flex items-center flex-wrap my-4 ">
        {
          data?.map((dt,i) => (
            <ProductCard key={i} dt={dt}/>
          )
          )
        }
      </div>
      
      {modal && (
        <Modal
          content={contentModal}
          title={"Create New Product"}
          
          
        />
      )}
    </div>
  );
};

export default Product;
