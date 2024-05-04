import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Components/Modal";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [productInfo,setProductInfo] = useState({name:"", price:"",url:""})
  const onChangeFunc = (e,type)=>{
      if(type == "url"){
          setProductInfo(prev => ({...prev,[e.target.name]: URL.createObjectURL(e.target.files[0])}))


      }else{
          setProductInfo(prev => ({...prev,[e.target.name]: e.target.value}))

      }

      
  }
  let loc = location?.search.split('=')[1]
  useEffect(() => {
    if(loc){
      setProductInfo(data.find(dt => dt.id == loc))
    }

  },[loc])
console.log(data,"data")

  const buttonFunc = () => {
    dispatch(createDataFunc({...productInfo, id: data.length + 1})) 
    dispatch(modalFunc());
  }

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({...productInfo, id: loc}))
    dispatch(modalFunc());
    navigate('/')
  }



  const contentModal = (
    <>
      <Input
       value={productInfo.name}
        type={"text"}
        placeholder={"Add Product"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
       value={productInfo.price}
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
      <Button btnText={loc ? "update product" : "Create New Product"} onClick={loc ? buttonUpdateFunc : buttonFunc} />
    </>
  );

  const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword.toLowerCase()));







  return (
    <div>
      <div className="flex items-center flex-wrap my-4 ">
        {
          filteredItems?.map((dt,i) => (
            <ProductCard key={i} dt={dt}/>
          )
          )
        }
      </div>
      
      {modal && (
        <Modal
          content={contentModal}
          title={loc ? "update product" : "Create New Product"}
          
          
        />
      )}
    </div>
  );
};

export default Product;
