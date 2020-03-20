# BottomUpModal

An animated modal component with a transparent overlaying view.

<!--- https://www.tablesgenerator.com/markdown_tables -->

| prop     | isRequired? | dataType      |
| -------- | ----------- | ------------- |
| children | yes         | React element |
| visible  | yes         | boolean       |
| onHide   | yes         | function      |

<br/>

## 🔨 Usage

```jsx
import React, { useState } from "react";
import { Button, BottomUpModal } from "@secondcloset/mobile-components";
import { View } from "react-native";

const BottomUpModalShowcase = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ width: "100%", flex: 1 }}>
      <Button text="Open Modal" onPress={() => setModalVisible(true)} />
      <BottomUpModal
        onHide={() => setModalVisible(false)}
        visible={modalVisible}
      >
        <Text>some content</Text>
        <Text>underneath</Text>
      </BottomUpModal>
    </View>
  );
};
```

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/BottomUpModal/bottom_modal.png?raw=true" alt="BottomUpModal" width="200">

<br/>
