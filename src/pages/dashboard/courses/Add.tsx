import React, { useState } from "react";
import { useCreateCourseMutation } from "../../../Redux/api";
import Breadcrumb from "../../../components/dashboard/Breadcrumb";
import { popularTradingCategories } from "../../../utils/constants";
import { superTwMerge } from "../../../utils";

const AddCourse = () => {
  const [createCourse, { isLoading, isError, error }] =
    useCreateCourseMutation();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const courseData = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (value !== null) {
        courseData.append(key, value);
      }
    }
    try {
      const res = await createCourse(courseData).unwrap();
      console.log(res);
      // Handle success (e.g., show a success message, redirect)
    } catch (err) {
      // Handle error (e.g., show error message)
      console.log(err);
    }
  };

  return (
    <div className="p-4">
      <Breadcrumb pageName="Add Course" />
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-2.5 block text-black dark:text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mb-2.5 block text-black dark:text-white">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="">Select a category</option>
              {popularTradingCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block text-black dark:text-white">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block text-black dark:text-white">
            Course Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={superTwMerge(
            "flex w-full justify-center rounded bg-primary p-3 font-medium text-gray",
            isLoading && "opacity-50 cursor-not-allowed"
          )}
        >
          {isLoading ? "Creating..." : "Create Course"}
        </button>

        {isError && (
          <p className="text-danger mt-3">
            {(error as any)?.data?.message || "An error occurred"}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddCourse;
