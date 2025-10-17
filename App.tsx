import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, StatusBar } from 'react-native';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#F3F4F6',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <View style={styles.container}>
        <Text style={styles.title}>問診票システム</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>患者IDを入力してください</Text>
          <TextInput
            style={styles.input}
            placeholder="例: 123456"
            keyboardType="number-pad"
          />
        </View

        <Button
          title="検索"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#111827',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#374151',
  },
  input: {
    height: 50,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
});

export default App;