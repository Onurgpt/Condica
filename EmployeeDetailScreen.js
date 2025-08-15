import React from 'react';
import { View, Text } from 'react-native';

export default function EmployeeDetailScreen({ route }) {
  const { name, phone, status } = route.params || {};
  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
}
