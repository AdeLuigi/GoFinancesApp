import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme'
import Register from "./src/screens/Register";
import { CategorySelect } from './src/screens/CategorySelect';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <CategorySelect/>
    </ThemeProvider>
  );
}

