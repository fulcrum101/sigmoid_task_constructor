import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function My_task() {
    const [taskList, updateTaskList] = useState([]);
    useEffect(() => {
        fetch('/api/get_tasks')
            .then(response => response.json())
            .then((data) => {
                updateTaskList(data.files);

            })
    }, []);
    return (
        <div className="container-fluid">
            <br/>
            <h5>My tasks</h5>
            <Table bordered hover>
                <thead className="table-primary">
                <tr>
                    <th>Codename</th>
                    <th>Last modified</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {taskList.map((task) => (
                    <tr>
                        <td>{task.codename}</td>
                        <td>{task.last_modified.split("T")[0]} {task.last_modified.split("T")[1].split(".")[0]}</td>
                        <td>
                            {/* TODO Link properly to edit task with props*/}
                            <Link href={"/edit_task/" + task.codename}>
                                <Button variant="outline-primary">
                                    edit task
                                </Button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </div>
    );
}