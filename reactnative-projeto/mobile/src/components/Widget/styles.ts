import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';


import { theme } from '../../theme';

export const styles = StyleSheet.create({
    //Stylezação do button, não usamos px nos tamanhos pq no mobile se usa a densidade da tela
  button: {
      width:48,
      height:48,
      borderRadius: 24,
    //estamos importanto a cor da pastinha theme, e no react native usamos camel case a inves de background-color por exemplo
      backgroundColor: theme.colors.brand,
      justifyContent: 'center',
      alignItems: 'center',
    //para o button flutuar na pagina
      position:'absolute',

      right:16,

      //se a gente botar apenas bottom 16, pode dar pau em iphone, então importamos a biblioteca "react-native-iphone-x-helper", e incluimos no código esse getBottomSpace()
      //para ele dar uma subidinha apenas no iphone (por causa do menu)
      bottom: getBottomSpace() + 16,
  },


  modal:{
      backgroundColor: theme.colors.surface_primary,
      paddingBottom: getBottomSpace() + 16,
  },

  indicator:{
    backgroundColor: theme.colors.text_primary,
    width: 56,
  }

});
  

//para mecanica do botão vamos utilizar a biblioteca https://github.com/gorhom/react-native-bottom-sheet
//Comandos utilizados para instalar as bibliotecas

//expo install @gorhom/bottom-sheet@^4
//expo install react-native-reanimated (adicionar um plugin dentro do babel - plugins: ['react-native-reanimated/plugin'])
//expo install react-native-gesture-handler  (adicionar no inicio do App.tsx - import 'react-native-gesture-handler')