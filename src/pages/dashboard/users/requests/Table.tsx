import React, { useState } from "react";
import { BsFillPatchCheckFill, BsPatchExclamationFill } from "react-icons/bs";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { UserRequest } from "../../../../utils/types";
import Modal from "../../../../components/modals/Modal";

type Props = {
  data: UserRequest[];
  name: string;
};

const columnHelper = createColumnHelper<UserRequest>();

const columns = [
  columnHelper.accessor("firstName", {
    header: () => <>Name</>,
    cell: (info) => {
      const user = info.row.original;
      return (
        <div className="flex items-center">
          <div className="flex flex-col justify-start">
            <p className="text-black dark:text-white">
              {user.firstName + " " + user.lastName}
            </p>
          </div>
        </div>
      );
    },
  }),
  columnHelper.accessor("durationInDays", {
    header: () => <>Duration</>,
    cell: (info) => (
      <span className="text-black dark:text-white">{info.getValue()}</span>
    ),
  }),

  columnHelper.accessor("isExpired", {
    header: () => <>Is Expired</>,
    cell: (info) => {
      const verified = info.getValue();
      return (
        <span className="text-center gap-x-1 align-baseline inline-flex items-center px-2 py-1 text-black dark:text-white">
          {verified ? (
            <BsFillPatchCheckFill color="green" size={16} />
          ) : (
            <BsPatchExclamationFill color="red" size={16} />
          )}
          {verified ? "Expired" : "Not Expired"}{" "}
        </span>
      );
    },
  }),

  columnHelper.accessor("_id", {
    header: () => <>Actions</>,
    cell: (info) => {
      const { setSelectedRequest } = info.table.options.meta as {
        setSelectedRequest: (request: UserRequest | null) => void;
      };
      return (
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-3 pr-0 text-end text-white flex items-center gap-x-2"
        >
          <button
            onClick={() => setSelectedRequest(info.row.original)}
            // disabled={info.row.original.isExpired}
            className="relative text-secondary-dark bg-[#2563EB] p-2 flex items-center text-base font-medium leading-normal text-center align-middle rounded-md transition-colors duration-200 ease-in-out shadow-none border-0 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            View Request
          </button>
        </div>
      );
    },
  }),
];

const Table = ({ data, name }: Props) => {
  const navigate = useNavigate();
  const [selectedRequest, setSelectedRequest] = useState<UserRequest | null>(
    null
  );

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      setSelectedRequest: (request: UserRequest | null) =>
        setSelectedRequest(request),
    },
  });

  const handleAccept = () => {
    // Handle accept logic here
    console.log("Request accepted");
    setSelectedRequest(null);
  };

  const handleReject = () => {
    // Handle reject logic here
    console.log("Request rejected");
    setSelectedRequest(null);
  };

  return (
    <div className="w-full flex flex-wrap mb-5">
      <div className="w-full rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white dark:bg-boxdark dark:drop-shadow-none">
          <div className="relative flex flex-col min-w-0 break-words bg-clip-border rounded-2xl bg-light/30">
            <div className="flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
              <h4 className="mb-6 text-xl capitalize font-semibold text-black dark:text-white">
                {name}
              </h4>
              <div className="relative flex flex-wrap items-center my-2">
                {/* Additional content can be added here if needed */}
              </div>
            </div>
            <div className="flex-auto block py-8 pt-6">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                  <thead className="align-middle rounded-sm bg-gray-2 dark:bg-meta-4">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr
                        key={headerGroup.id}
                        className="font-semibold text-[0.95rem] text-secondary-dark cursor-pointer"
                      >
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="p-2.5 xl:p-5 text-sm font-medium uppercase xsm:text-base pr-12 min-w-[100px]"
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-dashed last:border-b-0 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          navigate(`/dashboard/users/${row.original._id}`);
                        }}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className="p-3">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedRequest && (
        <Modal isOpen onClose={() => setSelectedRequest(null)}>
          <div className="flex flex-col gap-4">
            <div className="p-4">
              <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Request Details
              </h3>
              <p>
                <strong>Name:</strong> {selectedRequest.firstName}{" "}
                {selectedRequest.lastName}
              </p>
              <p>
                <strong>Duration:</strong> {selectedRequest.durationInDays} days
              </p>
              <p>
                <strong>Expired:</strong>{" "}
                {selectedRequest.isExpired ? "Yes" : "No"}
              </p>
              {/* Add more request details here */}
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={handleAccept}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Accept
              </button>
              <button
                onClick={handleReject}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Table;
