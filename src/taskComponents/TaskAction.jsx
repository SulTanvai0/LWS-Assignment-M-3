import { useContext } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context";

const TaskAction = ({ onOpen }) => {
    const { dispatch } = useContext(TaskContext);


    const handelDeleteAll = () => {
        const confirmation = confirm("Are you sure  about delete all tasks");
        if (confirmation) {
            toast.success("All Task Removed Successfully");
            dispatch({
                type: "DELETE_ALL",
                payload: {}
            })
        }
    }
    return (
        <>
            <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={onOpen}>Add Task</button>
            <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold" onClick={handelDeleteAll}>Delete All</button>

        </>
    );
};

export default TaskAction;