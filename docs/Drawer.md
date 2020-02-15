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

<br/>

## 🔨 Usage

```jsx
import React, { useState } from "react";
import { View, SafeAreaView, Button, Text } from "react-native";
import { Drawer } from "@secondcloset/mobile-components";

const DrawerShowcase = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button title="Open Drawer" onPress={() => setModalVisible(true)} />
      <Drawer
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
        width="80%"
      >
        <SafeAreaView
          style={{ backgroundColor: "#ffffe0", flex: 1, width: "100%" }}
        >
          <Text>Hello World</Text>
        </SafeAreaView>
      </Drawer>
    </>
  );
};

ReactDOM.render(<DrawerShowcase />, mountNode);
```

![Sample Drawer](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Drawer/drawer.png?raw=true)

<br/>
