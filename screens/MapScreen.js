import { StyleSheet, Text, View } from 'react-native';

export default function MapScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Map Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});