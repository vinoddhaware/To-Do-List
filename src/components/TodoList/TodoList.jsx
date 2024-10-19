import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditTask from '../Modal/EditTask';
import Swal from 'sweetalert2';

const TodoList = ({taskObj, index, deleteTask, updateListArr}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const updateTask = (obj) =>{
      updateListArr(obj, index)

    }
    const handleDelete = () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success mx-3",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          deleteTask(index)
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
        // deleteTask(index)
    }
  return (
    <>
    <tr className='border-b-2 hover:text-yellow-400 hover:bg-gray-700 active:bg-yellow-700'>
    <td className="px-6 py-3 "><input type="checkbox" /></td>
    <td className="px-6 py-3 ">{taskObj.assignedto}</td>
    <td className="px-6 py-3 ">{taskObj.status}</td>
    <td className="px-6 py-3 ">{taskObj.duedate}</td>
    <td className="px-6 py-3 ">{taskObj.priority}</td>
    <td className="px-6 py-3 ">{taskObj.comments}</td>
    <td className=""><button onClick={() => setModal(true)} className="text-s bg-black/90 rounded-lg p-2.5"> <FaRegEdit color='green'/> </button></td>
    <td className=""><button onClick={handleDelete} className="text-sm bg-black/90 rounded-lg p-2.5"> <RiDeleteBin6Line color='red' /> </button></td>
    </tr>
    <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj = {taskObj} index = {index} />
    </>
  )
}

export default TodoList
