import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Trash, Camera } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

//Interface para fazer o botão de print e sua variação
interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
    style={styles.container}
      //essa linha está falando se existe uma screenshot a pessoa quer remover, caso contrario ela quer tirar um print
    onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot
          ?
          <View>
            <Image style={styles.image} source={{ uri : screenshot}}/>
          <Trash size={22} color={theme.colors.text_secondary} weight="fill" style={styles.removeIcon} /> 
          </View>
        :
          <Camera size={24} color={theme.colors.text_primary} weight="bold" /> 
    }

    </TouchableOpacity>
  );
}