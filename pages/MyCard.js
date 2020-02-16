import React from 'react';
import { View, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function Mycard(props) {
  const { name, number } = props;
  return (
    <View style={{ margin: 5 }}>
      <Card style={{ elevation: 5 }}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <View>
            <Image
              style={{ height: 80, width: 80, borderRadius: 40 }}
              source={{
                uri:
                  'https://clipartart.com/images/default-profile-picture-clipart-3.jpg',
              }}
            />
          </View>
          <View>
            <Card.Content>
              <Title>{name}</Title>
              <Paragraph>Contact number: {number}</Paragraph>
            </Card.Content>
          </View>
        </View>
      </Card>
    </View>
  );
}
