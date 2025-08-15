import React from 'react';
import { Card, Text } from 'react-native-paper';

export default function AttendanceCard({ name, phone, status }) {
  return (
    <Card style={{ margin: 10, padding: 10 }}>
      <Text variant="titleMedium">{name}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Status: {status}</Text>
    </Card>
  );
}
