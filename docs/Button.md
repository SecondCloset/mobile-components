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

<Button
  text="BUTTON"
  color="yellow"
  type="primary"
  width={150}
  onPress={alert("Button Clicked")}
/>;
```

![Yellow Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/yellow_button.png?raw=true)

<br/>

```jsx
<Button
  text="BUTTON"
  color="green"
  type="outline"
  width="60%"
  onPress={() => alert("Button Clicked")}
/>
```

![Green Outline Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/green_outline_button.png?raw=true)

<br/>

```jsx
<Button disabled text="BUTTON" color="blue" onPress={() => {}} />
```

![Disabled Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/disabled_button.png?raw=true)

<br/>

```jsx
<Button
  text="SAUSAGE"
  color="red"
  type="primary"
  shape="rounded"
  onPress={() => console.log("Free hot dogs!")}
/>
```

![Sausage Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_sausage.png?raw=true)

<br/>

```jsx
<Button loading text="LOADING" shape="rounded" onPress={() => {}} />
```

![Loading Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Button/button_loading.png?raw=true)
