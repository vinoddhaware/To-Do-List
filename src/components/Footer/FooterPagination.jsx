import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const FooterPagination = () => {
  return (
    <>
        <div className="paggination flex w-full justify-end p-3 ">
            <button className="active:bg-yellow-700 hover:text-yellow-300 hover:bg-gray-700 border-2 p-2 h-10 w-12 rounded-md flex justify-center items-center bg-slate-900 text-blue-300 shadow-md m-1"><MdOutlineKeyboardDoubleArrowUp /></button>
            <button className=" active:bg-yellow-700 hover:text-yellow-300 hover:bg-gray-700 border-2 p-2 h-10 w-12 rounded-md flex justify-center items-center bg-slate-900 text-blue-300 shadow-md m-1"><MdKeyboardArrowLeft /></button>
            <div className="hover:bg-gray-700 border-2 p-2 h-10 w-12 rounded-md flex justify-center items-center bg-slate-900 text-blue-300 shadow-md m-1">1</div>
            <button className=" active:bg-yellow-700 hover:text-yellow-300 hover:bg-gray-700 border-2 p-2 h-10 w-12 rounded-md flex justify-center items-center bg-slate-900 text-blue-300 shadow-md m-1"><MdKeyboardArrowRight /></button>
            <button className=" active:bg-yellow-700 hover:text-yellow-300 hover:bg-gray-700 border-2 p-2 h-10 w-12 rounded-md flex justify-center items-center bg-slate-900 text-blue-300 shadow-md m-1"><MdOutlineKeyboardDoubleArrowDown /></button>
          </div>
      
    </>
  )
}

export default FooterPagination
