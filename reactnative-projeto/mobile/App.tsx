import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import  Widget  from './src/components/Widget';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>

      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent />

      {/* deixar o Widget dps do statusbar */}
      <Widget />


    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
