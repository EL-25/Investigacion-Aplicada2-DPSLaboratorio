import React from 'react';
// 'render' dibuja el componente en memoria, 'fireEvent' simula acciones humanas
import { render, fireEvent } from '@testing-library/react-native';
import LoginValidator from '../LoginValidator.js';

// 'describe' agrupa nuestras pruebas bajo un título general
describe('Pruebas Unitarias: Validaciones de Login', () => {
  
  // CASO 1: Probar que el error aparece cuando debe
  test('debe mostrar error si la contraseña es demasiado corta', () => {
    // Renderizamos el componente y extraemos funciones para buscar elementos
    const { getByTestId } = render(<LoginValidator />);
    
    // Buscamos el input usando el ID que definimos antes
    const input = getByTestId('password-input');

    // ACCIÓN: Simulamos que el usuario escribe "abc" (solo 3 letras)
    fireEvent.changeText(input, 'abc');

    // ASERCIÓN: Buscamos el mensaje de error. 
    // Si no aparece, esta línea hará que la prueba falle.
    const mensaje = getByTestId('error-message');
    
    // Verificamos que el texto del error sea exactamente el esperado
    expect(mensaje.props.children).toBe('La contraseña debe tener al menos 6 caracteres');
  });

  // CASO 2: Probar que el error desaparece con datos correctos
  test('no debe mostrar error si la contraseña es válida (6+ caracteres)', () => {
    // Usamos 'queryByTestId' en lugar de 'getBy' porque esperamos que algo NO esté
    const { queryByTestId } = render(<LoginValidator />);
    const input = queryByTestId('password-input');

    // ACCIÓN: Simulamos que el usuario escribe una clave de 6 caracteres
    fireEvent.changeText(input, '123456');

    // ASERCIÓN: Intentamos buscar el mensaje de error
    const mensaje = queryByTestId('error-message');
    
    // Esperamos que sea 'null' (que no exista en pantalla)
    expect(mensaje).toBeNull();
  });
});
