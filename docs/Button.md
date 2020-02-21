# Button

An awesome button component.

<!--- https://www.tablesgenerator.com/markdown_tables -->

| prop     | isRequired? | dataType       | defaultValue | possibleValues                                                            |
| -------- | ----------- | -------------- | ------------ | ------------------------------------------------------------------------- |
| onPress  | yes         | function       |              |                                                                           |
| text     | yes         | string         |              |                                                                           |
| disabled | no          | boolean        | false        |                                                                           |
| type     | no          | string         | "default"    | "primary", "outline"                                                      |
| width    | no          | string, number | "100%"       | "50%", 200                                                                |
| shape    | no          | string         |              | "rounded"                                                                 |
| color    | no          | string         | "blue"       | "yellow", "blue", "red", "yellowLight" (or other hex value ie. "#ff0000") |
| loading  | no          | boolean        | false        |                                                                           |
| fontSize | no          | number         | 13           |                                                                           |

<br/>

## 🔨 Usage

```jsx
import { Button } from "@secondcloset/mobile-components";

ReactDOM.render(
  <Button
    text="BUTTON"
    color="yellow"
    type="primary"
    width={150}
    onPress={alert("Button Clicked")}
  />,
  mountNode
);
```

![Yellow Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/yellow_button.png?raw=true)

<br/>

```jsx
ReactDOM.render(
  <Button
    text="BUTTON"
    color="green"
    type="outline"
    width="60%"
    onPress={() => alert("Button Clicked")}
  />,
  mountNode
);
```

![Green Outline Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/green_outline_button.png?raw=true)

<br/>

```jsx
ReactDOM.render(
  <Button disabled text="BUTTON" color="blue" onPress={() => {}} />,
  mountNode
);
```

![Disabled Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/disabled_button.png?raw=true)

<br/>

```jsx
ReactDOM.render(
  <Button
    text="SAUSAGE"
    color="red"
    type="primary"
    shape="rounded"
    onPress={() => console.log("Free hot dogs!")}
  />,
  mountNode
);
```

![Sausage Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_sausage.png?raw=true)

<br/>

```jsx
ReactDOM.render(
  <Button loading text="LOADING" shape="rounded" onPress={() => {}} />,
  mountNode
);
```

![Loading Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_loading.png?raw=true)
