
import { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

import { EXERCISES } from '../shared/exercises';
import { PLANS } from '../shared/plans';
import { PARTNERS } from '../shared/partners';

const FeaturedItem = ({ item }) => {
  if(item) {
    return (
      <Card containerStyle={{ padding: 0}}>
        <Card.Image source={item.image}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }

  return <View />

};

const HomeScreen = () => {
  const [exercises, setExercises] = useState(EXERCISES);
  const [plans, setPlans] = useState(PLANS);
  const [partners, setPartners] = useState(PARTNERS);

  const featExercise = exercises.find((item) => item.featured);
  const featPlan = plans.find((item) => item.featured);
  const featPartner = partners.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featExercise} />
      <FeaturedItem item={featPlan} />
      <FeaturedItem item={featPartner} />
    </ScrollView>
  );
};

export default HomeScreen;