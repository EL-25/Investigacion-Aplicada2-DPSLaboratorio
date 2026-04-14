import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import FormularioLogin from '../FormularioLogin';

describe('Pruebas de Integración - Formulario de Login', () => {
  
  test('debe permitir al usuario escribir credenciales y ver el mensaje de éxito', () => {
    // 1. Renderizar el componente completo
    render(<FormularioLogin />);

    // 2. Buscar los elementos por su testID
    const entradaCorreo = screen.getByTestId('entrada-correo');
    const entradaContrasena = screen.getByTestId('entrada-contrasena');
    const botonEnviar = screen.getByTestId('boton-enviar');

    // 3. Simular la interacción del usuario (Entrada de datos)
    fireEvent.changeText(entradaCorreo, 'admin@ejemplo.com');
    fireEvent.changeText(entradaContrasena, '123456');

    // 4. Simular el clic en el botón
    fireEvent.press(botonEnviar);

    // 5. Verificar el resultado de la integración (Cambio en la UI)
    const mensajeBienvenida = screen.getByTestId('mensaje-bienvenida');
    
    expect(mensajeBienvenida).toBeTruthy();
    expect(mensajeBienvenida.props.children).toBe('¡Bienvenido al Sistema!');
  });

  test('no debe mostrar el mensaje de bienvenida con credenciales incorrectas', () => {
    render(<FormularioLogin />);
    
    const entradaCorreo = screen.getByTestId('entrada-correo');
    const botonEnviar = screen.getByTestId('boton-enviar');

    fireEvent.changeText(entradaCorreo, 'usuario@error.com');
    fireEvent.press(botonEnviar);

    // Verificamos que el elemento NO existe en la pantalla
    const mensaje = screen.queryByTestId('mensaje-bienvenida');
    expect(mensaje).toBeNull();
  });
});