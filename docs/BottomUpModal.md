# BottomUpModal

An animated modal component with a transparent overlaying view.

<!--- https://www.tablesgenerator.com/markdown_tables -->

| prop     | isRequired? | dataType | possibleValues               |
| -------- | ----------- | -------- | ---------------------------- |
| children | yes         | array    | React.ReactElement           |
| visible  | yes         | boolean  | true, false                  |
| onHide   | yes         | function | () => setModalVisible(false) |

<br/>

## 🔨 Usage

```jsx
import React, { useState } from "react";
import { Button, BottomUpModal } from "@secondcloset/mobile-components";

const [modalVisible, setModalVisible] = useState(false);

ReactDOM.render(
  <>
    <Button text="Open Modal" onPress={() => setModalVisible(true)} />
    <BottomUpModal onHide={() => setModalVisible(false)} visible={modalVisible}>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
      <Text>hi</Text>
    </BottomUpModal>
  </>,
  mountNode
);
```

![Sample Modal](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/BottomUpModal/bottom_modal.png?raw=true)

<br/>