import { StatusBar } from 'react-native';
import{useFonts,Inter_400Regular,Inter_600SemiBold, Inter_700Bold, Inter_900Black} from'@expo-google-fonts/inter'
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
export default function App() {
  const [fontsload] = useFonts({
    Inter_400Regular,Inter_600SemiBold, Inter_700Bold, Inter_900Black
  });

  return ( 
    <Background>
        <StatusBar 
        barStyle = "light-content"
        backgroundColor= "transparent"
        translucent
        />
      {fontsload ? <Home/> : <Loading/> }
    </Background>
  );
}


