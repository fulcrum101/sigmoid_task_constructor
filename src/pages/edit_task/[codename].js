import Container from "react-bootstrap/Container";
import Edit_task_simple from "sigmoid/components/Edit_task_simple";
import Edit_task_compl from "sigmoid/components/Edit_task_compl";

 function Task ({task}){
    return(
        <Container fluid>
            <br/>
            <h5>{task.code}</h5>
            {task.type === "simple"
                ? <Edit_task_simple task={task}/>
            : <Edit_task_compl task={task}/>}
        </Container>
    );
}

export async function getServerSideProps(context){
    const {codename} = context.query;
    const toml = require('toml');
    const fs = require('fs');

    let data = toml.parse(fs.readFileSync('./data/tasks/' + codename + '/problem.toml'));
    data = JSON.parse(JSON.stringify(data));
    return {props: {task: data}}
}

export default Task;