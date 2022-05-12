import React from 'react';
import { View, Text } from 'react-native';
import { Copyright } from '../Copyright';
import { Option } from '../Option';


import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';
import { FeedbackType } from '../Widget';


interface Props{
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({onFeedbackTypeChanged}:Props) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Deixe seu feedback</Text>

        <View style={styles.options}>
          {
            //vamos usar um objeto para percorrer(entries) todas as entradas do objeto feedBBackTypes, podemos usar um map para percorrer, e dentro podemos desestruturar para saber qual a chave e value
            Object.entries(feedbackTypes).map(([key, value]) => (
              <Option 
                key={key}
                title={value.title}
                image={value.image}
                onPress={()=> onFeedbackTypeChanged(key as FeedbackType)}
              />
            ))
          }
        </View>

        <Copyright />

    </View>
  );
}