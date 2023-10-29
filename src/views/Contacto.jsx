import React from 'react';
import { useState } from 'react';
import { Form, FormControl, FormLabel, Button } from 'react-bootstrap';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('El email es:', email);
    console.log('La contraseña es:', password);
  };

  return (

    <div className='formulario'>
      <Form onSubmit={handleSubmit}>
        <h2>Formulario de contacto</h2>
      <FormLabel>Email</FormLabel>
      <FormControl
        type="email"
        placeholder="Ingrese su email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel>Contraseña</FormLabel>
      <FormControl
        type="password"
        placeholder="Ingrese su contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Enviar</Button>
    </Form>
    </div>
  );
};

export default FormComponent;

