import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function TestModuleOnline() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module Test En Ligne</Text>
      <Text style={styles.subtitle}>Installé depuis une URL</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Succès !', 'Le module fonctionne parfaitement !')}
      >
        <Text style={styles.buttonText}>Tester le Module</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 