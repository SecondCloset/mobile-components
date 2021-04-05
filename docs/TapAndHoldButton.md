# TapAndHoldButton

| prop            | isRequired? | dataType |
| --------------- | ----------- | -------- |
| disabled        | no          | boolean  |
| loading         | no          | boolean  |
| holdTime        | no          | number   |
| initialText     | yes         | string   |
| completedText   | yes         | string   |
| onCompletePress | yes         | function |

<br/>

## 🔨 Usage

```jsx
import { TapAndHoldButton } from "@secondcloset/mobile-components";
const onComplete = () => {
  alert("Complete");
};

<View>
  <TapAndHoldButton
    onCompletePress={onComplete}
    initialText="Tap and Hold to Confirm Delivery"
    completedText="Clock Out"
  />
</View>;
```
