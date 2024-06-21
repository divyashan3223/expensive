import React from "react";
import StatusLabel from "../StatusLabel";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

let data = [
  {
    id: 1,
    description: "Office Supplies",
    category: "Office",
    amount: "$150.00",
    status: "Approved",
    date: "2024-06-01",
  },
  {
    id: 2,
    description: "Client Lunch",
    category: "Food",
    amount: "$85.50",
    status: "Pending",
    date: "2024-06-03",
  },
  {
    id: 3,
    description: "Software License",
    category: "IT",
    amount: "$300.00",
    status: "Approved",
    date: "2024-06-05",
  },
  {
    id: 4,
    description: "Travel Expenses",
    category: "Travel",
    amount: "$450.00",
    status: "Rejected",
    date: "2024-06-07",
  },
  {
    id: 5,
    description: "Conference Tickets",
    category: "Events",
    amount: "$200.00",
    status: "Approved",
    date: "2024-06-10",
  },
  {
    id: 6,
    description: "Office Rent",
    category: "Office",
    amount: "$2000.00",
    status: "Approved",
    date: "2024-06-12",
  },
  {
    id: 7,
    description: "Team Dinner",
    category: "Food",
    amount: "$120.00",
    status: "Pending",
    date: "2024-06-15",
  },
  {
    id: 8,
    description: "New Desks",
    category: "Office",
    amount: "$800.00",
    status: "Approved",
    date: "2024-06-17",
  },
  {
    id: 9,
    description: "Marketing Campaign",
    category: "Marketing",
    amount: "$1500.00",
    status: "Approved",
    date: "2024-06-20",
  },
  {
    id: 10,
    description: "Web Hosting",
    category: "IT",
    amount: "$250.00",
    status: "Pending",
    date: "2024-06-25",
  },
];

const DataTable = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-sm pt-3">Recent Transcation</h2>
      <div className="overflow-x-auto rounded-lg border  mt-5 mr-5">
        <table className="w-full border-collapse  text-left     ">
          <thead className="text-[15px]   bg-[#FAFAFA]">
            <tr>
              <th scope="col" className=" font-semibold px-4 py-4">
                #
              </th>
              <th scope="col" className=" font-semibold px-4 py-4">
                Description
              </th>
              <th scope="col" className=" font-semibold px-4 py-4">
                Category
              </th>
              <th scope="col" className="  font-semibold px-4 py-4">
                Amount
              </th>
              <th scope="col" className=" font-semibold px-4 py-4">
                Status
              </th>
              <th scope="col" className="  font-semibold px-4 py-4">
                Date
              </th>
              <th scope="col" className="  font-semibold px-4 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id} className="text-start">
                <td className="text-sm font-medium   px-4 py-5">
                  {employee.id}
                </td>
                <td className="text-sm font-medium  px-4 py-5">
                  {employee.description}
                </td>
                <td className="text-sm font-medium  px-4 py-5">
                  {employee.category}
                </td>
                <td className="text-sm font-medium  px-4 py-5">
                  {employee.amount}
                </td>
                <td className=" px-4 py-5">
                  <StatusLabel />
                </td>
                <td className="text-sm font-normal  px-4 py-5">
                  {employee.date}
                </td>
                <td>
                  <EllipsisHorizontalIcon className="h-4 w-4 text-gray-700 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
