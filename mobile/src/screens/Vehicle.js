import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ajax from '../services/FetchVehicles';
import VehicleList from '../components/VehicleList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B6A6FF',
  }
})

export class Vehicle extends Component {

  state = {
    vehicles: []
  }

  async componentDidMount() {
    const vehicles = await ajax.fetchVehicles();
    this.setState({vehicles});
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.vehicles.length > 0
        ? <VehicleList vehicles={this.state.vehicles} />
        : <Text>No vehicles</Text>
      }
      </View>
    )
  }
}

export default Vehicle;