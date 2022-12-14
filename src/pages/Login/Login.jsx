import { Field, Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authProvider';
import { Card, LoginDiv, TextoPequeno, SubTitulo, Titulo, Label, Input, Campo, Button, Password, Azul } from './Login.styled';
import Imagem from '../../components/Imagem/Imagem';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';

const Login = () => {

  const {handleLogin} = useContext(AuthContext)
  const [type, setType] = useState('password')

  const viewPassword = () => {
    if (type === 'password') {
      setType('text')
      return
    }
    setType('password')
  }
  
  return (
    <LoginDiv>
      <Card>
        <Imagem fontsize={'30px'}/>
        <SubTitulo>DashBoard Kit</SubTitulo>
        <Titulo>Log In to Dashboard Kit</Titulo>
        <TextoPequeno>Enter your email adn password below</TextoPequeno>
        <Formik 
          initialValues={{
            login: '',
            senha: '',
          }}
          onSubmit={values => handleLogin(values)}
        >
          
          {({values, setFieldValue}) => (
              <Form>
                <Campo>
                  <div>
                    <Label htmlFor='login'>EMAIL</Label>
                  </div>
                  <Field name="login" placeholder='Email address'/>
                </Campo>

                <Campo>
                  <Password>
                    <Label htmlFor='senha'>PASSWORD </Label>
                    <TextoPequeno small>Forgot Password</TextoPequeno>
                  </Password>
                  <Field name="senha" type={type} placeholder='password' />
                  <TextoPequeno small><FaEye onClick={viewPassword}/></TextoPequeno>
                </Campo>
                <ToastContainer />
                <Button type='submit'>Log In</Button>
              </Form>
          )}
        </Formik>
        <TextoPequeno>Don't have an account? <Link to={'/usuario'}><Azul>Sign up</Azul></Link></TextoPequeno>
      </Card>
    </LoginDiv>
  )
}
export default Login    