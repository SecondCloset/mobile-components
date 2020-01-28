# Button

A standard button component.

| prop     | isRequired? | dataType | defaultValue | possibleValues                                                                     |
| -------- | ----------- | -------- | ------------ | ---------------------------------------------------------------------------------- |
| onPress  | yes         | function |              |                                                                                    |
| text     | yes         | string   |              |                                                                                    |
| disabled | no          | boolean  | false        | true, false                                                                        |
| type     | no          | string   | "default"    | "primary", "outline"                                                               |
| shape    | no          | string   | "default"    | "rounded"                                                                          |
| color    | no          | string   | "blue"       | "yellow", "blue", "red" (or other colors/rgb value in string format ie. "#ff0000") |
| loading  | no          | boolean  | false        | true, false                                                                        |
| fontSize | no          | number   | 18           |                                                                                    |

<br/>
<br/>

## 🔨 Usage

```jsx
import { CenterView } from "@scdevelopers/mobile-components";
import { Button } from "react-native";

ReactDOM.render(
<Button text="BACK" onPress={props.navigation.goBack} />
  mountNode
);
```

![Back Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_back.png?raw=true)

```jsx
ReactDOM.render(
    <Button
      text="READY TO GO"
      color="yellow"
      type="primary"
      onPress={alert("Truck is ready to go!")}
    />
  mountNode
);
```

![Ready Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_ready.png?raw=true)

```jsx
ReactDOM.render(
    <Button
      text="ARRIVED"
      color="green"
      type="outline"
      onPress={()=> {alert("Truck has arrived!")}}
    />
  mountNode
);
```

![Arrived Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_arrived.png?raw=true)

```jsx
ReactDOM.render(
    <Button
      disabled
      text="DISABLED"
      color="blue"
      type="outline"
      onPress={() => {}}
    />
  mountNode
);
```

![Disabled Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_disabled.png?raw=true)

```jsx
ReactDOM.render(
    <Button
      text="SAUSAGE"
      color="red"
      type="primary"
      shape="rounded"
      onPress={() => console.log("Free hot dogs!")}
    />
  mountNode
);
```

![Sausage Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_sausage.png?raw=true)

```jsx
ReactDOM.render(
    <Button
      loading
      text="LOADING"
      shape="rounded"
      onPress={() => {}}
    />
  mountNode
);
```

![Loading Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_loading.png?raw=true)
