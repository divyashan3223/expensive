import React from "react";

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
    <div>
      <h2>Employee Data</h2>
      <table className="table-auto border-collapse w-full rounded-t-md">
        <thead className="bg-slate-100 rounded-t-md">
          <tr>
            <th className="  px-4 py-2">ID</th>
            <th className="  px-4 py-2">Description</th>
            <th className="  px-4 py-2">Category</th>
            <th className="  px-4 py-2">Amount</th>
            <th className="  px-4 py-2">Status</th>
            <th className="  px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td className="  px-4 py-2">{employee.id}</td>
              <td className="  px-4 py-2">{employee.description}</td>
              <td className="  px-4 py-2">{employee.category}</td>
              <td className="  px-4 py-2">{employee.amount}</td>
              <td className="  px-4 py-2">{employee.status}</td>
              <td className="  px-4 py-2">{employee.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
