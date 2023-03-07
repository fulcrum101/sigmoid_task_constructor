import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {useState} from "react";
import General_info from "sigmoid/components/edit_task/General_info";


export default function Edit_task_simple({task}){
    const [key, setKey] = useState('general_info');
    return (
        <Container fluid>
            <Tabs
                id="tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="general_info" title="General info">
                    <General_info task={task}/>
                </Tab>
                <Tab eventKey="statement" title="Statement">
                    {/*TODO Edit task simple: statement*/}
                    <h6>Here will be statement</h6>
                </Tab>
                <Tab eventKey="tests" title="Tests">
                    {/*TODO Edit task simple: tests*/}
                    <h6>Here will be statement</h6>
                </Tab>
            </Tabs>
        </Container>
    );
}