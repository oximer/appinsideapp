/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Button
} from 'react-native';

import BusinessModule from './BusinessModule';

const app0 = {
  Id: '0',
  bundleLocation: 'REMOTE',
  Name: 'DEBUG',
  Version: '0.0.1',
  Url: 'ANYURL',
  Md5CheckSum: '59909dbc0f93894ba19866457746f945',
  Debug: true
};

export default class appinsideapp extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      app: app0
    };
  }

  render() {
    const appStyle = {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: 'black'
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Learn More"
          color="#1133dd"
          accessibilityLabel="Learn more about this purple button"
        />

        <BusinessModule application={this.state.app} style={appStyle} />

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

AppRegistry.registerComponent('reactProject1', () => appinsideapp);
