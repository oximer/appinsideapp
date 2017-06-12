/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView } from 'react-native';

export default class appinsideapp extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('reactProject2', () => appinsideapp);
