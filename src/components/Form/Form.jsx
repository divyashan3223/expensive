import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    type: "",
    user_id: 1
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setData(preData => ({
      ...preData,
      [name]: value
    }));
  };
  console.log(data);
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Type:
          </label>
          <select
            name="type"
            id="type"
            value={data.type}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            //   onClick={}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
