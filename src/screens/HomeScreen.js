import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

import { getNews } from '../news';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      {getNews()}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
});

export default HomeScreen;
