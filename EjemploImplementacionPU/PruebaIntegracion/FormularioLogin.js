import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FormularioLogin = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensajeExito, setMensajeExito] = useState(false);

  const manejarEnvio = () => {
    if (correo === 'admin@ejemplo.com' && contrasena === '123456') {
      setMensajeExito(true);
    }
  };

  return (
    <View>
      <Text>Correo Electrónico</Text>
      <TextInput
        placeholder="Ingresa tu correo"
        value={correo}
        onChangeText={setCorreo}
        testID="entrada-correo"
      />

      <Text>Contraseña</Text>
      <TextInput
        placeholder="Ingresa tu contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
        testID="entrada-contrasena"
      />

      <Button title="Iniciar Sesión" onPress={manejarEnvio} testID="boton-enviar" />

      {mensajeExito && (
        <Text testID="mensaje-bienvenida">¡Bienvenido al Sistema!</Text>
      )}
    </View>
  );
};

export default FormularioLogin;