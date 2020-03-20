# Drawer

An animated drawer component with a transparent overlaying view.

<!--- https://www.tablesgenerator.com/markdown_tables -->

#### Drawer Props

| prop                | isRequired? | dataType       | defaultValue | possibleValues  |
| ------------------- | ----------- | -------------- | ------------ | --------------- |
| visible             | yes         | boolean        | false        |                 |
| onHide              | yes         | function       |              |                 |
| width               | no          | string, number | "100%"       |                 |
| direction           | no          | string         | "right"      | "right", "left" |
| closeButtonPosition | no          | string         | "right"      | "right", "left" |
| backgroundColor     | no          | string         | "white"      |                 |

<br/>

## 🔨 Usage

```jsx
import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { Drawer } from "@secondcloset/mobile-components";

const DrawerShowcase = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ width: "100%", flex: 1 }}>
      <Button title="Open Drawer" onPress={() => setModalVisible(true)} />
      <Drawer
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
        width="80%"
        backgroundColor="#ffffe0"
      >
        <Text>Hello World</Text>
      </Drawer>
    </View>
  );
};
```

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Drawer/drawer.png?raw=true" alt="Drawer" width="200">

<br/>
