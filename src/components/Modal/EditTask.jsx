import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({toggle, modal, updateTask, taskObj}) => {
    
  // const [task, setTask] = useState({ 
  //         assignedto: "",
  //         status: "",
  //         duedate: "",
  //         priority: "",
  //         comments: ""
  //       });

        const [assignedto, setAssignto] = useState('')
        const [status, setStatus] = useState('')
        const [duedate, setDuedate] = useState('')
        const [priority, setPriority] = useState('')
        const [comments, setComments] = useState('')

        useEffect(() => {
          setAssignto(taskObj.assignedto)
          setStatus(taskObj.status)
          setDuedate(taskObj.duedate)
          setPriority(taskObj.priority)
          setComments(taskObj.comments)
        }, []) 

    const handleInputValue = (event) => {
      const {name, value} = event.target
      if(name === 'assignedto'){setAssignto(value)}
      if(name === 'status'){setStatus(value)}
      if(name === 'duedate'){setDuedate(value)}
      if(name === 'priority'){setPriority(value)}
      if(name === 'comments'){setComments(value)}

    // setTask({ ...task, [event.target.name]: event.target.value })   
  }
    const handleUpdate = (event) =>{
            event.preventDefault()
            let taskObj = {}
            taskObj["assignedto"] = assignedto
            taskObj["status"] = status
            taskObj["duedate"] = duedate
            taskObj["priority"] = priority
            taskObj["comments"] = comments
            updateTask(taskObj)       
    }

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}><span className='text-xl font-bold text-blue-700'>Edit Task</span></ModalHeader>
        <ModalBody>
        <div className="grid grid-cols-6 gap-6 mt-3">
        <div className="col-span-6 sm:col-span-3 ">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  <span style={{ color: "red" }}>*</span> Assigned To
                </label>
                <select
                  onChange={handleInputValue}
                  // value={task.assignedto}
                  value={assignedto}
                  id="countries"
                  name="assignedto"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  value={status}
                  id="countries"
                  // value={task.status}
                  name="status"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  value={duedate}
                  // value={task.duedate}
                  type="date"
                  name="duedate"
                  id="brand"
                  className="shadow-sm bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
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
                  // value={task.priority}
                  value={priority}
                  id="countries"
                  name="priority"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  // value={task.comments}
                  value={comments}
                  name="comments"
                  id="product-details"
                  rows="4"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4 mb-3"
                  placeholder=""
                ></textarea>
              </div>
              </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
           Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default EditTask
