import {StyleSheet, Text, StatusBar, View} from 'react-native';
import React from 'react';

const App = () => {
  // Definisikan nilai-nilai status bar
  const statusBarStyle = 'default'; // Bisa juga 'light-content' atau 'default'
  const statusBarTransition = 'slide'; // Bisa juga 'slide'
  const hidden = false; // Bisa juga 'true' untuk menyembunyikan status bar

  return (
    <View style={{Color: '#fffff'}}>
      <StatusBar
        animated={true}
        backgroundColor="#FF7D29"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <View style={styles.header}>
        <Text style={styles.txt}>BahasaKu</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF7D29',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  txt: {
    fontSize: 45,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
