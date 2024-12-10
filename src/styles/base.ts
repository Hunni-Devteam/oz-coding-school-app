import { StyleSheet } from 'react-native';
import { Colors } from '@shared/constants/Colors';

const BaseStyles = {
  base: {
    textInput: {
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    button: {
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      flex: 1,
    },
  },
  light: {
    textInput: {
      borderColor: Colors.light.border,
      backgroundColor: Colors.light.background,
      color: Colors.light.text,
    },
    button: {
      backgroundColor: Colors.light.tint,
      color: Colors.light.background,
    },
    scrollView: {
      backgroundColor: Colors.light.background,
    },
  },
  dark: {
    textInput: {
      borderColor: Colors.dark.border,
      backgroundColor: Colors.dark.background,
      color: Colors.dark.text,
    },
    button: {
      backgroundColor: Colors.dark.tint,
      color: Colors.dark.background,
    },
    scrollView: {
      backgroundColor: Colors.dark.background,
    },
  },
};

export default BaseStyles;
