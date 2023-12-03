import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Curriculo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Informações Pessoais</Text>
        <Text>Nome: Adriel fernando</Text>
        <Text>Email: adrielfernando450@gmail.com</Text>
        <Text>Telefone: 0000000000</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Formação</Text>
        <Text>ETE Professor Lucílio Ávila Pessoa, Técnico em Rede de Computadores</Text>
        <Text>SENAC: Tecnólogo em Análise e Desenvolvimento de Sistemas</Text>
        <Text>UFRPE: Licenciatura em Computação</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Formações Complementares</Text>
        <Text>Bootcamp DIO : AWS e Java</Text>
        <Text>Cesar : Engenharia de Plataformas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Curriculo;