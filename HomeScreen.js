import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import AttendanceCard from '../components/AttendanceCard';

export default function HomeScreen({ navigation }) {
  const [employees] = useState([
    { id: '1', name: 'John Doe', phone: '+40123456789', status: 'Present' },
    { id: '2', name: 'Jane Smith', phone: '+40123456788', status: 'Absent' }
  ]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button title="View Reports" onPress={() => navigation.navigate('Reports')} />
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AttendanceCard
            name={item.name}
            phone={item.phone}
            status={item.status}
          />
        )}
      />
    </View>
  );
}
