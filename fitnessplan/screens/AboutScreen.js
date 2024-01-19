import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, ListItem, Text, Avatar } from 'react-native-elements';

import { PARTNERS } from '../shared/partners';

const Mission = () => {
  return(
    <Card>
      <Card.Title>Our Mission</Card.Title>
      <Card.Divider />
      <Text style={{ margin: 10 }}>
        this is the misison
      </Text>
    </Card>
  )
};

const AboutScreen = () => {
  const [partners, setPartners] = useState(PARTNERS);

  return(
    <ScrollView>
      <Mission />

      <Card>
        <Card.Title>Community Partners</Card.Title>
        <Card.Divider />
          {partners.map((partner) => (
            <ListItem key={partner.id}>
              <Avatar 
                rounded
                source={partner.image} 
              />
              <ListItem.Content>
                <ListItem.Title>{partner.name}</ListItem.Title>
                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;


