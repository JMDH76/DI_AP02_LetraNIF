import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {calculaLetraNif, validarEntrada} from './Utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dni: '',
      letranif: '',
    };
  }

  actualizaDNI = unDni => {
    this.setState({dni: unDni});
  };

  actualizaLetraNif = unaLetraNif => {
    this.setState({letranif: unaLetraNif});
  };

  verificaNif = unDni => {
    if (validarEntrada(unDni) === true) {
      this.actualizaDNI(unDni);
      if (unDni.length === 8) {
        this.actualizaLetraNif(calculaLetraNif(unDni));
      } else {
        this.actualizaLetraNif('');
      }
    } else {
      this.actualizaDNI(unDni.slice(0, -1));
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.nombre}>Introduzca un DNI</Text>
        <View style={styles.contenedor1}>
          <TextInput
            style={styles.campo1}
            value={this.state.dni}
            placeholder="número dni"
            onChangeText={this.verificaNif}
            keyboardType="numeric"
            maxLength={8}
            placeholderTextColor={'silver'}
            underlineColorAndroid={'blue'}
          />
          <TextInput
            style={styles.campo2}
            value={this.state.letranif}
            editable={false}
            placeholder="letra"
            placeholderTextColor={'silver'}
            underlineColorAndroid={'blue'}
          />
        </View>
      </View>
    );
  }
}

//Estilos que vamos a aplicar en los diferentes componentes
const styles = StyleSheet.create({
  contenedor1: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'rigth',
  },
  campo1: {
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 22,
    fontWeight: '600',
    padding: 15,
    width: 150,
    textAlign: 'right',
    color: 'grey',
  },
  campo2: {
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 22,
    fontWeight: '600',
    padding: 15,
    width: 100,
    textAlign: 'left',
    color: 'gray',
  },
  nombre: {
    marginTop: 250,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default App;
