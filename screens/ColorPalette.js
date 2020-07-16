import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={item => item.colorName}
      renderItem={({ item }) => (
        <ColorBox color={item.colorName} hex={item.hexCode} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  }
});

export default ColorPalette;