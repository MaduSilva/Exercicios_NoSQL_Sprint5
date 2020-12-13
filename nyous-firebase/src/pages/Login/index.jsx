import React, {useState} from 'react'
import logo from '../../assets/img/Logo.svg'
import { Container, Button, Form } from 'react-bootstrap'
import '../Login/index.css'
import { useFirebaseApp } from 'reactfire'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {

    const firebase = useFirebaseApp();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logar = (event) => {
        event.preventDefault();

        console.log(`${email} - ${password}`);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                localStorage.setItem('nyous', result.user.refreshToken);
                alert('Bem vindo!');
                //navega para a página 
            })
            .catch(error => {
                alert('Email ou senha inválidos');
                console.error(error);
            })
    }

    return (
        <Container className='form-height'>
            <Form className='form-signin' onSubmit={event => logar(event)} >
                <div className='text-center'>
                    <img src={logo} alt='NYOUS' style={{ width: '64px' }} />
                </div>
                <br />
                <small>Informe os dados Abaixo</small>
                <hr />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Enviar
            </Button>
                <br /><br />
                <a href='/register' style={{ marginTop: '30px' }}>Não tenho conta!</a>
            </Form>
        </Container>

    )



}

export default Login;
