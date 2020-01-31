# BottomUpMenu

A versatile menu component with a transparent overlaying view.

<!--- https://www.tablesgenerator.com/markdown_tables -->

#### Menu Props

| prop    | isRequired? | dataType | possibleValues               |
| ------- | ----------- | -------- | ---------------------------- |
| options | yes         | array    | (See options table)          |
| visible | yes         | boolean  | true, false                  |
| onHide  | yes         | function | () => setModalVisible(false) |

#### Options

| key       | isRequired? | dataType | defaultValue | possibleValues                                                                    |
| --------- | ----------- | -------- | ------------ | --------------------------------------------------------------------------------- |
| label     | yes         | string   |              | "Some Button Text Here"                                                           |
| onPress   | yes         | function |              | () => void                                                                        |
| textColor | no          | string   | "black"      | "blue", "green", "red" (or other colors/rgb value in string format ie. "#ff0000") |

<br/>

## 🔨 Usage

```jsx
import React, { useState } from "react";
import { Button, BottomUpMenu } from "@secondcloset/mobile-components";

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
    textColor: "black",
  },
];

ReactDOM.render(
  <>
    <Button text="Open Menu" onPress={() => setModalVisible(true)} />
    <BottomUpMenu
      options={options}
      onHide={() => setModalVisible(false)}
      visible={modalVisible}
    />
  </>,
  mountNode
);
```

![Sample Menu](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/BottomUpMenu/bottom_menu.png?raw=true)

<br/>
