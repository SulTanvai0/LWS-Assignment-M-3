import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context";
import Modal from "../taskComponents/Modal";
import NoTasksFound from "../taskComponents/NoTasksFound";
import TaskAction from "../taskComponents/TaskAction";
import TaskList from "../taskComponents/TaskList";
import TaskSearch from "../taskComponents/TaskSearch";
import TaskTableInfo from "../taskComponents/TaskTableInfo";
const TaskBroad = () => {

    const [showModal, setShowModal] = useState(false)
    const [editTask, setEditTask] = useState(null);
    const { state, dispatch } = useContext(TaskContext);


    const handelAddEditTask = (Task, isAdd) => {

        if (isAdd) {
            toast.success(`${Task.title} Added To Task List`);
            dispatch({
                type: "ADD_TASK",
                payload: Task
            });
        } else {
            toast.success(`${Task.title} Updated To Task List`);
            dispatch({
                type: "EDIT_TASK",
                payload: Task
            });
        }
    };


    return (
        <>

            <section className="mb-20">
                {
                    showModal ? <Modal
                        onEditObj={editTask}
                        onSave={handelAddEditTask}
                        onEditSet={() => setEditTask(null)}
                        onClose={() => setShowModal(false)}

                    /> :

                        <div className="container mx-auto">
                            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                                <div className="mb-14 items-center justify-between sm:flex">
                                    <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                                    <div className="flex items-center space-x-5">

                                        <TaskSearch />
                                        <TaskAction onOpen={() => setShowModal(true)} />

                                    </div>
                                </div>
                                <div className="overflow-auto">

                                    {
                                        state.taskData.length === 0 ? <NoTasksFound /> : <table className="table-fixed overflow-auto xl:w-full">
                                            <thead>
                                                {/* A dummy component who's is showing table row information */}
                                                <TaskTableInfo />
                                            </thead>
                                            <tbody>
                                                {/* table row  & tasks List*/}
                                                {
                                                    state.taskData.map((task) => (
                                                        <TaskList key={task.id} task={task} onEdit={setEditTask} onOpen={() => setShowModal(true)} />
                                                    ))
                                                }


                                            </tbody>
                                        </table>
                                    }
                                </div>
                            </div>
                        </div>
                }
            </section>
        </>
    );
};

export default TaskBroad;