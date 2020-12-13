import React, {useState} from 'react';
import { useFirebaseApp } from 'reactfire';

import logo from '../../assets/img/Logo.svg';
import { Container, Form, Button } from 'react-bootstrap'
import './index.css';

const Register = () => {
    const firebase = useFirebaseApp();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logar = (event) => {
        event.preventDefault();

        console.log(`${email} - ${password}`);

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                localStorage.setItem('nyous', result.user.refreshToken);
                alert('Usuário cadastrado');
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
                     <img src={logo} alt='NYOUS' style={{ width : '64px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)}  required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Cadastrar
                    </Button>
                    <br/><br/>
                    <a href='/Login' style={{ marginTop :'30px'}}>Já tenho conta!</a>
                </Form>
            </Container>
    )

}

export default Register;