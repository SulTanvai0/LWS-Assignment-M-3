/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";
import { TaskContext } from "../context";
import { DisLikedSvg, LikedSvg } from "./utils";

const TaskList = ({ task, onEdit, onOpen }) => {

    const { title, description, tags, priority, isFavorite } = task;

    const tagBackground = [
        '#00D991A1',
        '#1C92FFB0',
        '#FE1A1AB5',
        '#BD560BB2',
        '#00B2D9CC',
        '#8407E6A8',
        '#07AC67D6',
        '#2F43F8BF',
        '#AE6D0BDB',
        '#10FBEDB2',
    ];

    const { dispatch } = useContext(TaskContext);

    const handelDelete = (taskId) => {

        const confirmation = confirm(`Are you sure about deleting ${title}?`);
        if (confirmation) {
            toast.success(`${title} Delete Successfully`);
            dispatch({
                type: "DELETE_BY_TASK",
                payload: taskId,
            });
        }
    };


    const handelIsFavorite = (value) => {

        const newObj = {
            ...task,
            isFavorite: value
        }

        toast.info(`${title} ${value ? 'added to favorite' : 'remove from favorite'}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        dispatch({
            type: "IS_FAVORITE",
            payload: newObj
        })

    }




    return (
        <>
            <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                <td>
                    {
                        isFavorite ? <LikedSvg onFavoriteClick={() => (handelIsFavorite(!isFavorite))} /> : <DisLikedSvg onFavoriteClick={() => (handelIsFavorite(!isFavorite))} />
                    }
                </td>
                <td>{title}</td>
                <td>
                    <div>
                        {description}
                    </div>
                </td>
                <td>
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                        {tags.map((tag, i) => {
                            const randomIndex = Math.round(Math.random() * (tagBackground.length - 1));

                            return (
                                <li key={i}>
                                    <span
                                        style={{ background: tagBackground[randomIndex] }}
                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]"
                                    >
                                        {tag}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </td>
                <td className="text-center">{priority}</td>
                <td>
                    <div className="flex items-center justify-center space-x-3">
                        <button className="text-red-500" onClick={() => handelDelete(task.id)}>Delete</button>
                        <button className="text-blue-500" onClick={() => {
                            onEdit(task)
                            onOpen()
                        }}>Edit</button>
                    </div>
                </td>

            </tr>

        </>
    );
};

export default TaskList;

{/* <td></td> */ }