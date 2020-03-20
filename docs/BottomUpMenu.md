# BottomUpMenu

A versatile menu component with a transparent overlaying view.

<!--- https://www.tablesgenerator.com/markdown_tables -->

#### Menu Props

| prop    | isRequired? | dataType |
| ------- | ----------- | -------- |
| options | yes         | array    |
| visible | yes         | boolean  |
| onHide  | yes         | function |

#### Options

| key       | isRequired? | dataType | defaultValue | possibleValues                                                                    |
| --------- | ----------- | -------- | ------------ | --------------------------------------------------------------------------------- |
| label     | yes         | string   |              |                                                                                   |
| onPress   | yes         | function |              |                                                                                   |
| textColor | no          | string   | "black"      | "blue", "green", "red" (or other colors/rgb value in string format ie. "#ff0000") |

<br/>

## 🔨 Usage

```jsx
import React, { useState } from "react";
import { Button, BottomUpMenu } from "@secondcloset/mobile-components";
import { View } from "react-native";

const ButtonUpMenuShowcase = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const options = [
    {
      label: "Report",
      onPress: () => console.log("pressed report"),
      textColor: "red",
    },
    {
      label: "Copy Link",
      onPress: () => console.log("copied to clipboard"),
    },
  ];

  return (
    <View style={{ width: "100%", flex: 1 }}>
      <Button text="Open Menu" onPress={() => setModalVisible(true)} />
      <BottomUpMenu
        options={options}
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </View>
  );
};
```

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/BottomUpMenu/bottom_menu.png?raw=true" alt="BottomUpMenu" width="200">

<br/>
