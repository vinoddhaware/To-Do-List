import React, { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import CreateTask from "../Modal/CreateTask";
import { DarkLightMode } from "../DarkLightMode/DarkLightMode";
import TodoList from "../TodoList/TodoList";
import ListHeading from "../TodoList/ListHeading";
import Footer from "../Footer/Footer";
import FooterPagination from "../Footer/FooterPagination";

const DisplayBody = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [dateTime, setDateTime] = useState(null)
  const {mode} = useContext(DarkLightMode)

  const toggle = () => setModal(!modal);

  useEffect(() => {
    const timer = setInterval(() => {
     const dateTime = new Date()
     const date = dateTime.toDateString()
     const time = dateTime.toLocaleTimeString()
     setDateTime(`${date} - ${time}`) 
     
     return () => clearInterval(timer)
   }, 1000);  
 }, [])
   

  useEffect(() => {
    let arr = localStorage.getItem("taskList")
    if(arr){
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
}, [])

  const saveTask = (task) => {
    let tempList = taskList;
    tempList.push(task);
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList);
    setModal(false);
    window.location.reload()
  };

  const deleteTask = (index) =>{
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
    
  }
  
  const updateListArr = (obj, index) =>{
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList)) 
    setTaskList(tempList)      
    window.location.reload()
  } 

  const clearAllTask = () =>{
    setTaskList([])
    localStorage.setItem("taskList", JSON.stringify([]))
  }

  return (
    <>
        <div style={{fontFamily: "Inter, sansSerif",
          fontOpticalSizing: 'auto',
          fontWeight: '400',
          fontStyle: 'normal'}} className="text-white text-sm text-end w-full max-w-screen-lg px-4 mt-2 mx-auto">{dateTime}</div>
      <NavBar showModel={() => setModal(true)} records = {taskList.length} clearAllTask= {clearAllTask}/>
      <div className={"block w-full max-w-screen-lg px-4 py-2 mx-auto  rounded-md lg:px-8 lg:py-3 mt-10 backdrop-blur-sm bg-gradient-to-b from-blue-400 text-opacity-100"}
        style = {{boxShadow:mode === 'light'?'0 4px 6px -1px':'0 20px 50px rgba(8, 112, 184, 0.7)',
          fontFamily: "Inter, ui-sans-Serif",
          fontOpticalSizing: 'auto',
          fontWeight: '600',
          fontStyle: 'normal'}}>
        <div className="middlecontaine  min-h-[50vh] ">
          <div className="relative overflow-auto max-h-[50vh]  scroll-smooth ">
            <table className="w-full text-sm text-left rtl:text-right border-collapse">
              <ListHeading/>
              <tbody>
              {
                taskList && taskList.map((currTask, index) => 
                  <TodoList taskObj = {currTask} key = {index} index={index} deleteTask = {deleteTask} updateListArr = {updateListArr} /> )         
              }
          </tbody>
            </table>
          </div>
        </div>
              <FooterPagination/>
      </div>
      <div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
      </div>
      <div className="footer mt-32">
      <Footer/>
      </div>
    </>
  );
};

export default DisplayBody;
