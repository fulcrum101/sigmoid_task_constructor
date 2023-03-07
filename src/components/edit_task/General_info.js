import {useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function General_info({task}){
    // TODO proper form validation
    const [showErrorAlert, setShowErrorAlert] = useState(false); // TODO make alerts work
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const [name, setName] = useState(task.name);
    const [author, setAuthor] = useState(task.author);
    const [tags, setTags] = useState(task.tags);
    const [type, setType] = useState(task.type);
    const [timeLim, setTimeLim] = useState(task.time_lim)
    const [memLim, setMemLim] = useState(task.mem_lim);

    const handleSubmit = (event) => {
        const postData = async() => {
            const mod_task = {
                code: task.code,
                name : name,
                version : task.version,
                author : author,
                tags: tags,
                type: type,
                time_lim: timeLim,
                mem_lim : memLim
            };
            const response = await fetch("/api/save_changes/general_info", {
                method: "POST",
                body: JSON.stringify(mod_task)
            });
            return response.json()
        };
        postData().then((data) => {
            if (data.completed){
                setShowSuccessAlert(true);
            } else {
                setShowErrorAlert(true);
            }
        });


    }

    return(
        <Container fluid>
            <Alert show={showSuccessAlert} variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
                Saved changes successfully.
            </Alert>
            <Alert show={showErrorAlert} variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                Error. Changes were not saved.
            </Alert>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="form.name">
                    <Form.Label column sm={5}>Name</Form.Label>
                    <Col>
                    <Form.Control
                        className="w-50"
                        required
                        type="text"
                        value={name}
                        sm={10}
                        onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="form.author">
                    <Form.Label column sm={5}>Author</Form.Label>
                    <Col>
                        <Form.Control
                            required
                            className="w-50"
                            type="text"
                            value={author}
                            sm={15}
                            onChange={(e) => setAuthor(e.target.value)}>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="form.tags">
                    <Form.Label column sm={5}>Tags</Form.Label>
                    <Col>
                        {tags.map((tag)=> (
                            <span>
                                <Badge className="my-badge">{tag}</Badge>
                                {' '}
                            </span>
                        ))}
                        {/* TODO add tags*/}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="form.type">
                    <Form.Label column sm={5}>Type</Form.Label>
                    <Col>
                    {task.type === "simple"
                        ? <Form.Select className="w-25" disabled>
                            <option>{task.type}</option>
                        </Form.Select>
                        : <Form.Select
                            className="w-25"
                            onChange={(e) => setAuthor(e.target.value)}>
                            <option value="batch">batch</option>
                            <option value="interactive">interactive</option>
                        </Form.Select>
                    }
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="form.time_lim">
                    <Form.Label column sm={5}>Time limit (ms)</Form.Label>
                    <Col>
                        <Form.Control
                            required
                            className="w-25"
                            type="number"
                            value={timeLim}
                            sm={15}
                            onChange={(e) => setTimeLim(e.target.value)}>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="form.mem_lim">
                    <Form.Label column sm={5}>Memory limit (MB)</Form.Label>
                    <Col>
                        <Form.Control
                            required
                            className="w-25"
                            type="number"
                            value={memLim}
                            sm={15}
                            onChange={(e) => setMemLim(e.target.value)}>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Button variant="outline-primary" type="button" onClick={handleSubmit}>Save changes</Button>
            </Form>
        </Container>
    );
}