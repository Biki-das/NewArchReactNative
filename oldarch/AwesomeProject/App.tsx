export default App;

import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

// Slider is a native component
import Slider from '@react-native-community/slider';

export default function App(props) {
  const colors = ['red', 'green', 'blue', 'orange'];
  const views = [];
  const [value, setValue] = React.useState(1);

  for (let i = 0; i < value; ++i) {
    const backgroundColor = colors[i % colors.length];
    const size = 14;
    const view = (
      <View
        key={i}
        style={{
          width: size,
          height: size,
          borderWidth: 0.5,
          backgroundColor,
        }}
      />
    );

    views.push(view);
  }

  return (
    <SafeAreaView>
      <Text style={{textAlign: 'center'}}>
        Render <Text style={{fontWeight: 500}}>{value}</Text> Tiles
      </Text>
      <Slider
        value={1}
        minimumValue={1}
        maximumValue={1000}
        step={1}
        onValueChange={newValue => {
          // This update is now automatically batched in React 18
          setValue(newValue);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
        }}>
        {views}
      </View>
    </SafeAreaView>
  );
}
