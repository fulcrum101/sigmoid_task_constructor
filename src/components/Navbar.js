import Link from 'next/link'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default  function My_navbar() {
    return (
        <>
            <Navbar className="color-nav">
                <Container fluid>
                    <Navbar.Brand>Sigmoid task constructor</Navbar.Brand>
                    <Nav className="ms-auto text-center" >
                        <Nav.Link href="/my_tasks">My tasks</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Link href="/new_task">
                            <Button variant="outline-dark">New task</Button>
                        </Link>
                    </Form>

                </Container>
            </Navbar>
        </>
    );

}