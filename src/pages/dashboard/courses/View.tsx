// @ts-nocheck

import React, { useEffect, useState } from "react";
import {
  useDeleteCourseMutation,
  useGetCourseQuery,
  useUpdateCourseMutation,
} from "../../../Redux/api";
import { useParams } from "react-router-dom";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Course, Section, Video } from "../../../utils/types";
import * as Yup from "yup";
import { Form, Formik, FormikErrors, ErrorMessage } from "formik";
import { BsPlus } from "react-icons/bs";
import Modal from "../../../components/modals/Modal";
import { DashboardTextInput } from "../../../components/form/TextInput";
import DeleteModal from "../../../components/modals/DeleteModal";
import useLoader from "../../../hooks/useLoader";

import { ChevronDown, ChevronUp, Plus, Edit, Trash } from "lucide-react";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  videos: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Video title is required"),
      url: Yup.string().url("Invalid URL").required("Video URL is required"),
    })
  ),
});

type setFieldValueType = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<{
  title: string;
  description: string;
  videos: Video[];
}>>;

const ViewCourse = () => {
  const { id } = useParams();
  const { data: course, isLoading: isLoadingCourse } = useGetCourseQuery(
    id as string
  );
  const [sections, setSections] = useState<Section[]>(course?.sections || []);
  const [title, setTitle] = useState<string>(course?.title || "");
  const [description, setDescription] = useState<string>(
    course?.description || ""
  );

  const [updateCourse, { isLoading: isUpdating }] = useUpdateCourseMutation();
  const [deleteCourse, { isLoading: isDeleting }] = useDeleteCourseMutation();

  useLoader(
    {
      loading: isLoadingCourse || isUpdating || isDeleting,
      message: isDeleting
        ? "Deleting course..."
        : isUpdating
        ? "Updating course..."
        : "Loading course...",
    },
    null
  );

  useEffect(() => {
    if (course) {
      setSections(course?.sections || []);
      setTitle(course?.title || "");
      setDescription(course?.description || "");
    }
  }, [course]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSections(items);
  };

  const handleAddVideo = (
    values: { title: string; url: string }[],
    setFieldValue: setFieldValueType,
    title: string,
    url: string
  ) => {
    setFieldValue("videos", [...values, { title, url }]);
  };

  const handleDeleteVideo = (
    values: { title: string; url: string }[],
    setFieldValue: setFieldValueType,
    index: number
  ) => {
    const newVideos = values.filter((_, i) => i !== index);
    setFieldValue("videos", newVideos);
  };

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState<
    (Video & { index: number }) | null
  >(null);

  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(null);
  };

  const handleUpdateCourse = async (course: Omit<Course, "_id" | "__v">) => {
    try {
      await updateCourse({ id: id as string, course }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 dark:bg-graydark">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Course Information
      </h1>
      <Formik
        initialValues={{ title, description, videos: sections }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // handleUpdateCourse(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          // touched,
          handleChange,
          isSubmitting,
          dirty,
          setFieldValue,
          handleSubmit,
        }) => {
          console.log(errors);
          return (
            <div className="bg-white dark:bg-graydark shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                <EditText
                  name="title"
                  defaultValue={course?.title}
                  className="ml-2"
                  value={values.title}
                  onChange={handleChange}
                />
              </h2>
              <EditTextarea
                name="description"
                defaultValue={course?.description}
                className="w-full text-gray-600 dark:text-gray-300 mb-6"
                value={values.description}
                onChange={handleChange}
              />

              <div className="space-y-4">
                <div className="flex items-center mb-4 gap-x-3">
                  <h3 className="text-xl font-semibold dark:text-white">
                    Sections{" "}
                  </h3>
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-primary hover:bg-primary/50 text-white font-bold w-8 aspect-square rounded-full flex items-center justify-center"
                  >
                    <BsPlus size={20} />
                  </button>
                </div>
                {sections.map((section) => (
                  <div key={section._id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                      <div className="flex space-x-2">
                        <button className="border border-gray p-2 rounded-md">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="border border-gray p-2 rounded-md">
                          <Trash className="h-4 w-4" />
                        </button>
                        <button
                          className="border border-gray p-2 rounded-md"
                          onClick={() => toggleSection(section._id)}
                        >
                          {expandedSections.includes(section._id) ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    {expandedSections.includes(section._id) && (
                      <div className="ml-4 space-y-2">
                        {section.subsections.map((subsection) => (
                          <div
                            key={subsection._id}
                            className="flex items-center justify-between py-2 bg-gray-100 rounded"
                          >
                            <span>{subsection.title}</span>
                            <div className="flex space-x-2">
                              <button>
                                <Edit className="h-4 w-4" />
                              </button>
                              <button>
                                <Trash className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className="flex items-center mt-2">
                          <input
                            placeholder="New subsection title"
                            className="flex-1 p-2 bg-transparent border rounded-md border-gray mr-2"
                          />
                          <button className="flex items-center gap-x-[2px] bg-primary text-white p-2 rounded-md">
                            <Plus className="mr-2 h-4 w-4" /> Add Subsection
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* OLD */}

              <div className="flex items-center mb-4 gap-x-3">
                <h3 className="text-xl font-semibold dark:text-white">
                  Course Videos{" "}
                </h3>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-primary hover:bg-primary/50 text-white font-bold w-8 aspect-square rounded-full flex items-center justify-center"
                >
                  <BsPlus size={20} />
                </button>
              </div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="videos">
                  {(provided) => (
                    <ul
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="space-y-4"
                    >
                      {values.videos.map((video, index) => (
                        <Draggable
                          key={index}
                          draggableId={`video-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded"
                            >
                              <div className="flex items-center">
                                <svg
                                  className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                  ></path>
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                                <EditText
                                  name={`video-${index}-title`}
                                  defaultValue={video.title}
                                  className="dark:text-gray-200"
                                />
                              </div>
                              <button
                                onClick={
                                  () => {}
                                  // setShowDeleteModal({ ...video, index })
                                }
                                className="text-red-500 hover:text-red-700"
                              >
                                Delete
                              </button>
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>

              <button
                type="submit"
                className="mt-4 bg-primary disabled:bg-slate-400 disabled:cursor-not-allowed hover:bg-primary/25 text-white font-bold py-2 px-4 rounded"
                disabled={isSubmitting || !dirty}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Save
              </button>

              <ErrorMessage
                name={Object.keys(errors)[0] || "title"}
                component="div"
              />

              <AddVideoModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={
                  (title, url) => {}
                  // handleAddVideo(values.videos, setFieldValue, title, url)
                }
              />

              <DeleteModal
                isOpen={!!showDeleteModal}
                onClose={handleCloseDeleteModal}
                title="Delete Video"
                message={`Are you sure you want to delete video with the title: ?`}
                // ${showDeleteModal?.title}
                onConfirm={() => {
                  // handleDeleteVideo(
                  //   values.videos,
                  //   setFieldValue,
                  //   showDeleteModal?.index as number
                  // );
                  handleCloseDeleteModal();
                }}
                confirmText="Delete"
              />
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

interface AddVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, url: string) => void;
}

const AddVideoValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  url: Yup.string().url("Invalid URL").required("URL is required"),
});

const AddVideoModal = ({ isOpen, onClose, onSubmit }: AddVideoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:py-15">
        <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          New Video
        </h3>
        <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
        <p className="mb-10">Fill in the video details</p>

        <Formik
          initialValues={{ title: "", url: "" }}
          onSubmit={(values) => {
            onSubmit(values.title, values.url);
            onClose();
          }}
          validationSchema={AddVideoValidationSchema}
        >
          <Form className="flex flex-col gap-y-4">
            <DashboardTextInput name="title" label="Title" />
            <DashboardTextInput name="url" label="URL" />
            <div className="-mx-3 flex flex-wrap gap-y-4">
              <div className="2xsm:w-1/2 w-full px-3">
                <button
                  className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
              <div className="2xsm:w-1/2 w-full px-3">
                <button
                  className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default ViewCourse;
