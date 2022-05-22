import {Container, Nav, Navbar} from "react-bootstrap";

const NavMain = () => {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">OrderPayDrink</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavMain;