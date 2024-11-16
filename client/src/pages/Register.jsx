import { useContext } from "react";
import { Alert, Button, Row, Col, Form, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    // const {user} = useContext(AuthContext);
    const {registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading} = useContext(AuthContext);

    return ( 
        <>  
            <Form onSubmit={registerUser}>
                <Row className="pt-5" style={{justifyContent: "center", height: "100vh"}}>
                    <Col xs={5}>
                        <Stack gap={3}>
                            <h2>Register</h2>

                            <Form.Control type="text" placeholder="Name" onChange={(event) => updateRegisterInfo({ ...registerInfo, name: event.target.value})} />
                            <Form.Control type="email" placeholder="youremail@example.com" onChange={(event) => updateRegisterInfo({...registerInfo, email: event.target.value })} />
                            <Form.Control type="password" placeholder="password" onChange={(event) => updateRegisterInfo({...registerInfo, password: event.target.value})} />

                            <Button className="bstn" variant="secondary" type="submit">
                                {
                                    isRegisterLoading ? "Creating your account.." : "Register"
                                }
                            </Button>

                            {
                                //if there's a registeration error, show the alert
                                registerError?.error && ( <Alert variant="danger">{registerError?.message} </Alert>)
                            }
                            
                        </Stack>
                    </Col>
                </Row>
            </Form>  
        </> 
     );
}
 
export default Register;