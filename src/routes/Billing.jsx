import React from "react";
import "../index.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { PieChart } from "react-minimal-pie-chart";

const Product = [
  {
    name: "Product 1",
    medicine: "Medicine 1",
    phone: "1234567890",
    email: "kumie@gmail.com",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Product 2",
    medicine: "Medicine 2",
    phone: "1234567890",
    email: "hana@gmail.com",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Product 3",
    medicine: "Medicine 3",
    phone: "1234567890",
    email: "helen@gmail.com",
    image: "https://picsum.photos/200/300",
  },
  // More products
];

const Billing = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div>
        <SideBar place="3" />
        {/* main content container */}
        <div className=" mt-auto w-4/5 p-10 bg-gray-50 ml-auto flex flex-col space-y-6">
          <div className="mt-10 flex space-x-10">
            {/* addcharts here */}
            <div className="inline-flex flex-col space-y-6 items-center justify-start flex-1 p-10 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-gray-900">Sales</p>
              <div className="w-48 object-scale-down">
                <PieChart
                  animate
                  animationDuration={500}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    { title: "Two", value: 15, color: "#31D0AA" },
                    { title: "Three", value: 20, color: "#E85B81" },
                  ]}
                  lengthAngle={360}
                  lineWidth={45}
                  paddingAngle={0}
                  radius={50}
                  rounded
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                />
              </div>
            </div>
            <div className="inline-flex flex-col space-y-6 items-center justify-start flex-1 p-10 bg-white border-2 rounded-2xl border-gray-300">
              <p className="text-xl font-bold text-gray-900">Statistics</p>
              <div className="w-48 object-scale-down">
                <PieChart
                  animate
                  animationDuration={500}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    { title: "Two", value: 15, color: "#31D0AA" },
                    { title: "Three", value: 20, color: "#E85B81" },
                  ]}
                  lengthAngle={360}
                  lineWidth={45}
                  paddingAngle={0}
                  radius={50}
                  rounded
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                />
              </div>
            </div>
          </div>
          {/* middle section */}
          <div className="inline-flex bg-white space-x-48 items-center justify-between px-32 py-6 border-2 rounded-2xl border-gray-300">
            <div className="inline-flex flex-col space-y-2.5 items-center justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
                <p className="text-2xl font-bold tracking-wider text-center text-blue-400">
                  684
                </p>
              </div>
              <p className="text-lg font-medium tracking-wide text-center text-gray-900">
                Total remaining inventory
              </p>
            </div>
            <div className="inline-flex flex-col space-y-2.5 items-center justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
                <p className="text-2xl font-bold tracking-wider text-center text-blue-400">
                  1000
                </p>
              </div>
              <p className="text-lg font-medium tracking-wide text-center text-gray-900">
                Maximum inventory limit
              </p>
            </div>
          </div>
          {/* table */}
          <p className="text-4xl font-medium text-gray-900">Invoices</p>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Medicine
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    phone
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Product.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.medicine}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href={person.phone}>{person.phone}</a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
