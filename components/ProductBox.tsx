"use client"
import React from 'react';
import { ProducBoxProps } from '@/types/product';
import { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';


const ProductBox: React.FC<ProducBoxProps> = ({ products }) => {
  const [isLoading, setLoading] = useState(true)
  const [index,setIndex] = useState(0)
  const nextHandler = (nextIndex: number)=>{
    setIndex(nextIndex > products.length-1 ? 0 : nextIndex)
  }
  const backHandler = (backIndex: number)=>{
    setIndex(backIndex < 0 ? products.length-1 : backIndex)
  }

  useEffect(()=>{
    setIndex(Math.floor(Math.random() * 10))
    setLoading(false)
  },[])

  if(isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"></div>
    </div>
  )

  return (
    <div className="border border-gray-300 p-4 rounded-lg text-center w-72 h-96 shadow-md m-3 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <img src={products[index].imageUrl} alt={products[index].name} className="w-24 h-24 rounded-full object-cover" />
      </div>
      <h2 className="text-xl mb-2">{products[index].name}</h2>
      <p className="text-lg text-gray-600 mb-2">${products[index].price.toFixed(2)}</p>
      <p className="text-base text-gray-500 mb-4">{products[index].description}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => backHandler(index - 1)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => nextHandler(index + 1)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};


export default ProductBox;
