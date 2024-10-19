import React from "react";

const ListHeading = () => {
  return (
      <thead className="border-b-2 text-sm sticky top-0 backdrop-blur-3xl shadow-md rounded-md">
        <tr className="">
          <th scope="col" className="px-6 py-3 break-all">
            <input type="checkbox" />
          </th>
          <th scope="col" className="px-6 py-3 break-all">
            Assigned To
          </th>
          <th scope="col" className="px-6 py-3 break-all">
            Status
          </th>
          <th scope="col" className="px-6 py-3 break-all">
            Due Date
          </th>
          <th scope="col" className="px-6 py-3 break-all">
            Priority
          </th>
          <th scope="col" className="px-6 py-3 break-all">
            Comments
          </th>
          <th scope="col" className="px- py-3 break-all">
            Action
          </th>
        </tr>
      </thead>
  );
};

export default ListHeading;
