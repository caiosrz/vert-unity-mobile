import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Home() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('metros');
  const [toUnit, setToUnit] = useState('quilômetros');
  const [result, setResult] = useState('');
  const [resultType, setResultType] = useState('simples');

  const convertUnits = () => {
    let metersValue;


    switch (fromUnit) {
      case 'metros':
        metersValue = parseFloat(value);
        break;
      case 'quilômetros':
        metersValue = parseFloat(value) * 1000;
        break;
      case 'milhas':
        metersValue = parseFloat(value) * 1609.34;
        break;
      case 'pés':
        metersValue = parseFloat(value) * 0.3048;
        break;
      default:
        metersValue = 0;
    }

    
    let convertedValue;
    switch (toUnit) {
      case 'metros':
        convertedValue = metersValue;
        break;
      case 'quilômetros':
        convertedValue = metersValue / 1000;
        break;
      case 'milhas':
        convertedValue = metersValue / 1609.34;
        break;
      case 'pés':
        convertedValue = metersValue / 0.3048;
        break;
      default:
        convertedValue = 0;
    }

    
    if (resultType === 'simples') {
      setResult(`O Resultado é: ${convertedValue.toFixed(1)} ${toUnit}`); // Resultado simples
    } else {
      setResult(`O Resultado é: ${convertedValue.toFixed(8)} ${toUnit}`); // Resultado completo
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>VertUnity</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={fromUnit}
            style={styles.picker}
            onValueChange={(itemValue) => setFromUnit(itemValue)}
          >
            <Picker.Item label="Metros" value="metros" />
            <Picker.Item label="Quilômetros" value="quilômetros" />
            <Picker.Item label="Milhas" value="milhas" />
            <Picker.Item label="Pés" value="pés" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={toUnit}
            style={styles.picker}
            onValueChange={(itemValue) => setToUnit(itemValue)}
          >
            <Picker.Item label="Metros" value="metros" />
            <Picker.Item label="Quilômetros" value="quilômetros" />
            <Picker.Item label="Milhas" value="milhas" />
            <Picker.Item label="Pés" value="pés" />
          </Picker>
        </View>

       
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={resultType}
            style={styles.picker}
            onValueChange={(itemValue) => setResultType(itemValue)}
          >
            <Picker.Item label="Resultado Simples" value="simples" />
            <Picker.Item label="Resultado Completo" value="completo" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={convertUnits}>
          <Text style={styles.buttonText}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.result}>
          {value ? result : 'Seja bem-vindo ao VertUnity! 😁'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    color: '#A020F0', 
    fontWeight: 'bold',
    marginBottom: 50,
    textShadowColor: 'aaa', // Cor da sombra
    textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
    textShadowRadius: 2, // Raio da sombra
  },
  input: {
    height: 60,
    borderColor: '#6f42c1',
    borderWidth: 1,
    borderRadius: 30, 
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#ffffff', 
    elevation: 3, 
  },
  result: {
    marginTop: 30,
    fontSize: 18,
    color: '#495057',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 15,
    alignItems: 'center',
    elevation: 5, 
  },
  buttonText: {
    color: '#9932CC', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickerContainer: {
    height: 60,
    width: '100%',
    marginBottom: 20,
    borderColor: '#6f42c1',
    borderWidth: 1,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#ffffff', 
    elevation: 3, 
  },
  picker: {
    height: '100%',
    width: '100%',
  },
});
