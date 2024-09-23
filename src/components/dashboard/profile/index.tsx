import Breadcrumb from "../Breadcrumb";
import { demoImg } from "../../../utils/constants";
import { format } from "date-fns";
import { fCurrency } from "../../../utils/format-number";
import { Comment, Post, User } from "../../../utils/types";
import { useGetAuthorRequestsQuery } from "../../../Redux/api";
import Carousel from "../../../components/Carousel";

const UserProfile = ({ user }: { user: User }) => {
  const { data: providerRequest } = useGetAuthorRequestsQuery(user?._id, {
    skip: !user?.provider,
  });
  return (
    <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={user?.profilePhoto || "/placeholder.svg"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
          {/* <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90 xsm:px-4"
            >
              <input type="file" name="cover" id="cover" className="sr-only" />
              <span>
                <svg
                  className="fill-current"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>Edit</span>
            </label>
          </div> */}
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img
                src={user?.profilePhoto || demoImg}
                className="w-full aspect-square rounded-full object-cover"
                alt="profile"
              />
              {/* <label
                htmlFor="profile"
                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <svg
                  className="fill-current"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                    fill=""
                  />
                </svg>
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="sr-only"
                />
              </label> */}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {user?.firstName} {user?.lastName}
            </h3>
            <p className="font-medium">
              Joined {format(new Date(user?.createdAt), "dd MMM yyyy")}
            </p>
            {user?.provider && (
              <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    {user?.posts?.length}
                  </span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    {user?.subscriptions?.length}
                  </span>
                  <span className="text-sm">Subscribers</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    {user?.ratings?.length}
                  </span>
                  <span className="text-sm">Ratings</span>
                </div>
              </div>
            )}

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                {user?.firstName}'s Bio
              </h4>
              <p className="mt-4.5">{user?.bio || "No bio available"}</p>
            </div>

            <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium text-black dark:text-white">
                Financial Reports
              </h4>
              <div className="">
                <div className="w-full max-w-sm mx-auto grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-boxdark rounded-lg shadow">
                    <h5 className="text-lg font-semibold text-black dark:text-white mb-2">
                      Balance
                    </h5>
                    <p className="text-2xl font-bold text-primary">
                      {user?.totalBalance
                        ? `${fCurrency(user.totalBalance)}`
                        : "$0.00"}
                    </p>
                  </div>
                  <div className="p-4 bg-white dark:bg-boxdark rounded-lg shadow">
                    <h5 className="text-lg font-semibold text-black dark:text-white mb-2">
                      Total Earnings
                    </h5>
                    <p className="text-2xl font-bold text-primary">
                      {user?.totalEarnings
                        ? `${fCurrency(user.totalEarnings)}`
                        : "$0.00"}
                    </p>
                  </div>
                  <div className="p-4 col-span-2 bg-white dark:bg-boxdark rounded-lg shadow">
                    <h5 className="text-lg font-semibold text-black dark:text-white mb-2">
                      Total Withdrawals
                    </h5>
                    <p className="text-2xl font-bold text-danger">
                      {user?.totalWithdrawn
                        ? `${fCurrency(user.totalWithdrawn)}`
                        : "$0.00"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6.5">
              {!user?.provider && (
                <button className="relative text-white mx-auto w-full max-w-[300px] bg-primary p-2 flex items-center text-base font-medium leading-normal text-center align-middle rounded-md transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                  Make Provider
                </button>
              )}
            </div>

            {user?.provider && (
              <div className="mt-6.5">
                <h4 className="mb-3.5 text-2xl font-semibold text-black dark:text-white">
                  All Provider Signals
                </h4>
                <div className="space-y-4 grid grid-cols-3 w-full mx-auto">
                  {providerRequest?.posts &&
                  providerRequest?.posts?.length > 0 ? (
                    providerRequest?.posts?.map((post: Post) => (
                      <div
                        key={post._id}
                        className="overflow-hidden border border-stroke bg-white dark:bg-boxdark rounded-lg shadow pb-4"
                      >
                        <Carousel images={post.images} />
                        <div className="text-left p-4">
                          <h5 className="text-lg my-3 font-semibold text-black dark:text-white mb-2">
                            {post.title}
                          </h5>
                          <div className="mb-2">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              Pair:{" "}
                            </span>
                            <span className="text-sm text-primary">
                              {post.pair}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div>
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Entry:{" "}
                              </span>
                              <span className="text-sm text-black dark:text-white">
                                {post?.content || "No content available"}
                              </span>
                            </div>
                            {post?.sl && (
                              <div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  SL:{" "}
                                </span>
                                <span className="text-sm text-danger">
                                  {post?.sl}
                                </span>
                              </div>
                            )}
                            {post?.tp1 && (
                              <div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  TP1:{" "}
                                </span>
                                <span className="text-sm text-success">
                                  {post.tp1}
                                </span>
                              </div>
                            )}
                            {post.tp2 && (
                              <div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  TP2:{" "}
                                </span>
                                <span className="text-sm text-success">
                                  {post.tp2}
                                </span>
                              </div>
                            )}
                            {post.tp3 && (
                              <div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  TP3:{" "}
                                </span>
                                <span className="text-sm text-success">
                                  {post.tp3}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col justify-between items-start text-xs text-gray-500 dark:text-gray-400 mb-2">
                            <span>Views: {post.views}</span>
                            <span>
                              Created:{" "}
                              {new Date(post.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="mt-3">
                            <h6 className="text-sm font-medium text-black dark:text-white mb-2">
                              Comments ({post.comments.length})
                            </h6>
                            <div className="space-y-2">
                              {post.comments
                                .slice(0, 2)
                                .map((comment: Comment, idx) => (
                                  <div
                                    key={comment._id}
                                    className="text-xs text-gray-600 dark:text-gray-400"
                                  >
                                    <span className="font-medium">
                                      {idx + 1}
                                      {". "}
                                    </span>
                                    {comment.msg}
                                  </div>
                                ))}
                              {post.comments.length > 2 && (
                                <div className="text-xs text-primary cursor-pointer">
                                  View all comments
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="w-full col-span-3 grid text-gray-500 text-center dark:text-gray-400">
                      No signals available
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
