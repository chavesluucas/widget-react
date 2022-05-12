import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native'
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { Options } from '../Options';
import { Forms } from '../Forms';
import { Success } from '../Success';


import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';


//estamos fazendo uma tipagem, onde ele seja defenido a partir das chaves, e pegue os tipos da chaves do feedbackTypes
export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false);

  //funcionalidade de quando clicar no botão, ele abrir
  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback(){
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent(){
    setFeedbackSent(true);
  }


  //Anotando a referencia sem usar um state, useRef para fazer a anotação da referencia, falamos que o tipo é um BottomSheet que começa nulo
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} />


      </TouchableOpacity>
      {/* No snapPoints passamos um vetor com os tamanhos(Fechado será 1, e aberto 280) */}
      <BottomSheet ref={bottomSheetRef} snapPoints={[1, 280]} backgroundStyle={styles.modal} handleIndicatorStyle={styles.indicator}>

        {
          //se o feedback sent foi enviado, aparece a tela de success, senão passa para a verificação abbaixo (dps dos ":" )
          feedbackSent ?
            <Success 
            onSendAnotherFeedback={handleRestartFeedback}
            />
            :
            <>
              {
                feedbackType ?
                  <Forms
                    feedbackType={feedbackType}
                    onFeedbackCanceled={ handleRestartFeedback }
                    onFeedbackSent={handleFeedbackSent}
                  />
                  :
                  <Options onFeedbackTypeChanged={setFeedbackType} />
              }
            </>
        }

      </BottomSheet>

    </>
  );
}

export default gestureHandlerRootHOC(Widget);