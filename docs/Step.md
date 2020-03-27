# Step

A standard card component.

| prop     | isRequired? | dataType        |
| -------- | ----------- | --------------- |
| title    | yes         | string          |
| isLast   | no          | boolean         |
| children | yes         | React.ReactNode |

<br/>
<br/>

## 🔨 Usage

```jsx
import { Step } from "@secondcloset/mobile-components";
import { Text } from "react-native";

<View
  style={{
    flex: 1,
    width: "100%",
    padding: 20,
  }}
>
  <Step title="Step One">
    <Text>This is step 1</Text>
  </Step>
  <Step title="Step Two">
    <Text>This is step 2</Text>
  </Step>
  <Step title="Step Three" isLast>
    <Text>This is step 3</Text>
  </Step>
</View>;
```

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Step/step.png?raw=true" alt="Menu" width="200">
