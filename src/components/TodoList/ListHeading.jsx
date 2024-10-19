import React from "react";

const ListHeading = () => {
  return (
      <thead className="border-b-2 text-sm sticky top-0 backdrop-blur-3xl shadow-md rounded-md">
        <tr className="">
          <th scope="col" className="px-6 py-3">
            <input type="checkbox" />
          </th>
          <th scope="col" className="px-6 py-3">
            Assigned To
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Due Date
          </th>
          <th scope="col" className="px-6 py-3">
            Priority
          </th>
          <th scope="col" className="px-6 py-3">
            Comments
          </th>
          <th scope="col" className="px- py-3">
            Action
          </th>
        </tr>
      </thead>
  );
};

export default ListHeading;
