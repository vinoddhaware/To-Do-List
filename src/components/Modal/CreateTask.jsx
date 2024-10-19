import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({toggle, modal, save}) => {
    const [task, setTask] = useState([{ 
            assignedto: "",
            status: "",
            duedate: "",
            priority: "",
            comments: ""
        }
        ]);
    
    const handleInputValue = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value })
    }
    
    const handleSave = () =>{
      if(!task.assignedto && !task.status && !task.duedate && !task.priority &&!task.comments){
        alert('Please ADD your task') 
        return;
      }
      if(!task.assignedto){
        alert('Please Select the User') 
        return;
      }
      if(!task.status){
        alert('Please Select the States') 
        return;
      }
      if(!task.duedate){
        alert('Please Select the Date') 
        return;
      }
      if(!task.priority){
        alert('Please Select the Priority') 
        return;
      }
      if(!task.comments){
        alert('Please Add your Task Discription') 
        return;
      }
      save(task)
    }
    
  return (
    <>
     <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className='bg-white/5'><span className='text-xl font-bold text-blue-700'>Add Task</span></ModalHeader>
        <ModalBody className='bg-white/5'>
        <form className="grid grid-cols-6 gap-6 mt-3">
        <div className="col-span-6 sm:col-span-3 ">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  <span style={{ color: "red" }}>*</span> Assigned To
                </label>
                <select
                  onChange={handleInputValue}
                  value={task.assignedto}
                  id="countries"
                  name="assignedto"
                  className="bg-white/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>User 1</option>
                  <option>User 2</option>
                  <option>User 3</option>
                  <option>User 4</option>
                  <option>User 5</option>
                  <option>User 6</option>
                  <option>User 7</option>
                  <option>User 8</option>
                  <option>User 9</option>
                  <option>User 10</option>
                </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-black block mb-2"
                >
                  <span style={{ color: "red" }}>*</span> Status
                </label>
                <select
                  onChange={handleInputValue}
                  value={task.status}
                  id="countries"
                  name="status"
                  className="bg-white/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Not Started</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-black block mb-2"
                >
                  <span style={{ color: "red" }}>*</span> Due Date
                </label>
                <input
                  onChange={handleInputValue}
                  value={task.duedate}
                  type="date"
                  name="duedate"
                  id="brand"
                  className="shadow-sm bg-white/5 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Apple"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-black block mb-2"
                >
                  <span style={{ color: "red" }}>*</span> Priority
                </label>
                <select
                  onChange={handleInputValue}
                  value={task.priority}
                  id="countries"
                  name="priority"
                  className="bg-white/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Normal</option>
                  <option>Low</option>
                  <option>High</option>
                </select>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="product-details"
                  className="text-sm font-medium text-black block mb-2"
                >
                  <span style={{ color: "red" }}>*</span> Discription
                </label>
                <textarea
                  onChange={handleInputValue}
                  value={task.comments}
                  name="comments"
                  id="product-details"
                  rows="3"
                  className="bg-white/5 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4 mb-3"
                  placeholder=""
                  required
                ></textarea>
              </div>
              </form>

        </ModalBody>
        <ModalFooter className='bg-white/5'>
          <Button color="primary" onClick={handleSave}>
           Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> 
    </>
  )
}

export default CreateTask
