# Step

#### Step Props

| prop      | isRequired? | dataType        |
| --------- | ----------- | --------------- |
| title     | yes         | string          |
| children  | no          | React.ReactNode |
| isLast    | no          | boolean         |
| completed | no          | boolean         |

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
  <Step title="Step One" completed>
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

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Step/step.png?raw=true" alt="Step" width="200">
