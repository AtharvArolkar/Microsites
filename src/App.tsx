import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const tableList = [
    {
      pk: "1",
      name: "Release 11 July 2023",
      createdBy: "Robert Davis ",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "in_progress",
    },
    {
      pk: "2",
      name: "Release 05 July 2023",
      createdBy: "Steve White",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "new",
    },
    {
      pk: "3",
      name: "Release 01 July 2023",
      createdBy: "John Doe ",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "completed",
    },
    {
      pk: "4",
      name: "Release 28 June 2023",
      createdBy: "Steve White ",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "in_progress",
    },
    {
      pk: "5",
      name: "Release 20 June 2023",
      createdBy: "Robert Davis ",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "completed",
    },
    {
      pk: "6",
      name: "Release 18 June 2023",
      createdBy: "Robert Davis",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "completed",
    },
    {
      pk: "7",
      name: "Release 18 June 2023",
      createdBy: "Robert Davis",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "completed",
    },
    {
      pk: "8",
      name: "Release 18 June 2023",
      createdBy: "Robert Davis",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "completed",
    },
    {
      pk: "9",
      name: "Release 18 June 2023",
      createdBy: "Robert Davis",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "completed",
    },
    {
      pk: "10",
      name: "Release 18 June 2023",
      createdBy: "Robert Davis",
      createdTs: "2023-10-12T08:28:50.634Z",
      status: "completed",
    },
  ];
  const getStatus = (status?: string) => {
    switch (status) {
      case "completed":
        return "Complete";
      case "new":
        return "New";
      case "in_progress":
        return "In Progress";
      default:
        return "";
    }
  };
  return (
    <div className="relative overflow-x-auto flex justify-center ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 m-4 w-5/6">
        <thead className="text-xs text-gray-500 capitalize bg-zinc-100 border-t border-b border-zinc-300">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Created By
            </th>
            <th scope="col" className="px-6 py-3">
              Created On
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {tableList.map((item) => {
            return (
              <tr className="bg-white border-b border-zinc-300">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.createdBy}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.createdTs}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {getStatus(item.status)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
