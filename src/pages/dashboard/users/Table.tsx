import React from "react";
import { BsFillPatchCheckFill, BsPatchExclamationFill } from "react-icons/bs";
import { demoImg } from "../../../utils/constants";
type Props = {
  users: User[];
};

const Table = ({ users }: Props) => {
  return (
    <div className="w-full flex flex-wrap mb-5">
      <div className="w-full rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white dark:bg-boxdark dark:drop-shadow-none">
          <div className="relative flex flex-col min-w-0 break-words bg-clip-border rounded-2xl bg-light/30">
            <div className="flex justify-between items-stretch flex-wrap pb-0 bg-transparent">
              <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                All Users
              </h4>
              <div className="relative flex flex-wrap items-center my-2">
                {/* <a
                    href="javascript:void(0)"
                    className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  >
                    {" "}
                    See other projects{" "}
                  </a> */}
              </div>
            </div>
            <div className="flex-auto block py-8 pt-6">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                  <thead className="align-middle rounded-sm bg-gray-2 dark:bg-meta-4">
                    <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="text-start min-w-[175px] p-2.5 xl:p-5 text-sm font-medium uppercase xsm:text-base">
                        Name
                      </th>
                      <th className="p-2.5 xl:p-5 text-sm font-medium uppercase xsm:text-base min-w-[100px]">
                        Email
                      </th>
                      <th className="p-2.5 xl:p-5 text-sm font-medium uppercase xsm:text-base pr-12 min-w-[175px]">
                        STATUS
                      </th>
                      <th className="p-2.5 xl:p-5 text-sm font-medium uppercase xsm:text-base min-w-[100px]">
                        Total Balance
                      </th>
                      <th className="p-2.5 xl:p-5 text-sm font-medium uppercase xsm:text-base pr-12 min-w-[100px]">
                        Total Earnings
                      </th>
                      <th className="p-2.5 xl:p-5 text-sm font-medium uppercase xsm:text-base min-w-[50px]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr
                        className="border-b border-dashed last:border-b-0"
                        key={user._id}
                      >
                        <td className="p-3">
                          <div className="flex items-center">
                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                              <img
                                src={demoImg}
                                className="w-[40px] aspect-square inline-block shrink-0 rounded-lg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col justify-start">
                              <p className="text-black dark:text-white">
                                {user.firstName + " " + user.lastName}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-center">
                          <span className="text-black dark:text-white">
                            {user.email}
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-center">
                          <span className="text-center gap-x-1 align-baseline inline-flex items-center px-2 py-1 text-black dark:text-white">
                            {user.verified ? (
                              <BsFillPatchCheckFill color="green" size={16} />
                            ) : (
                              <BsPatchExclamationFill color="red" size={16} />
                            )}
                            {user.verified ? "Verified" : "Unverified"}{" "}
                          </span>
                        </td>
                        <td className="p-3 pr-12 text-center">
                          <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center text-black dark:text-white">
                            {" "}
                            {user.totalBalance}{" "}
                          </span>
                        </td>
                        <td className="pr-0 text-start">
                          <span className="text-black dark:text-white">
                            {user.totalEarnings}
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-end text-white flex items-center gap-x-2">
                          <button className="relative text-secondary-dark bg-[#2563EB] p-2 flex items-center text-base font-medium leading-normal text-center align-middle rounded-md transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                            Edit User
                          </button>
                          <button className="relative text-secondary-dark bg-red-600 p-2 flex items-center text-base font-medium leading-normal text-center align-middle rounded-md transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                            Delete User
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
