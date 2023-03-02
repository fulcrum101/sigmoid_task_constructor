import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {redirect} from "next/navigation";

export default function New_task() {
    const [validated, setValidated] = useState(false);

    const [codename, setCodename] = useState("");
    const [codenameCheck, setCodenameCheck] = useState(true);
    const[name, setName] = useState("");
    const [tcheck, setTcheck] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        const postData = async() => {
            const data = {
                codename: codename,
                name: name,
                simple_type: tcheck
            };
            const response = await fetch("/api/new_task_setup", {
                method: "POST",
                body: JSON.stringify(data)
            });
            return response.json();
        };
        postData().then((data) => {
            // TODO redirect to '/edit_task' with props
            // redirect('/edit_task');
       });
        setValidated(true);
    };

    const handleCodenameCheck = (e) => {
        // TODO Handle form validation properly
        setCodename(e);
        let res = true;
        const handleCodename = async () => {
            const data = {codename: codename};
            const response = await fetch("/api/new_task_codename", {
                method: "POST",
                body: JSON.stringify(data)
            });
            return response.json();
        };
        handleCodename().then((data)=>{
            setCodenameCheck(data.check);
        });
    };

    return (
        <div className="container-fluid">
            <h3>New task</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3 w-25" controlId="form.task_codename">
                    <Form.Label>Task codename</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="hello_world"
                                  isInvalid={!codenameCheck}
                                  onChange={(e)=> {
                                      handleCodenameCheck(e.target.value)
                                  }}/>
                    <Form.Control.Feedback type="invalid" tooltip>
                        Problem with that codename already exists.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 w-25" controlId="form.task_name">
                    <Form.Label>Task name</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="Greetings"
                                  onChange={(e)=> setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.simple_task_type_check">
                <Form.Check
                    type="checkbox"
                    label="Simple task type"
                    onChange={(e) => setTcheck(!tcheck)}
                />
                </Form.Group>
                <br/>
                <Button variant="outline-primary" type="submit">Create</Button>
            </Form>
        </div>
    );
}
