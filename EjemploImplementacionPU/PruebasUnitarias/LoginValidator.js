import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const LoginValidator = () => {
  // Definimos un estado local para capturar lo que el usuario escribe
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* El TextInput es nuestro punto de interacción principal */}
      <TextInput
        // El testID es como un "ID de identidad" exclusivo para las pruebas.
        // Nos permite encontrar este input sin importar si cambiamos el diseño.
        testID="password-input"
        placeholder="Crea tu contraseña"
        // Actualizamos el estado cada vez que el usuario teclea
        onChangeText={(text) => setPassword(text)}
        secureTextEntry // Oculta los caracteres por seguridad
      />

      {/* LÓGICA DE NEGOCIO: 
          Si hay texto pero es menor a 6 caracteres, renderizamos el mensaje de error.
          Esto es lo que vamos a verificar en la prueba unitaria. */}
      {password.length > 0 && password.length < 6 && (
        <Text testID="error-message" style={styles.errorText}>
          La contraseña debe tener al menos 6 caracteres
        </Text>
      )}
    </View>
  );
};

// Estilos básicos para que el componente no se vea desordenado
const styles = StyleSheet.create({
  container: { padding: 20 },
  errorText: { color: 'red', marginTop: 5 }
});

export default LoginValidator;
