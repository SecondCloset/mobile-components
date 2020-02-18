# Card

A standard card component.

| prop     | isRequired? | dataType        | possibleValues |
| -------- | ----------- | --------------- | -------------- |
| type     | no          | string          | "box"          |
| children | yes         | React.ReactNode |                |

<br/>
<br/>

## 🔨 Usage

###### Default Style

```jsx
import { Card } from "@secondcloset/mobile-components";
import { Text } from "react-native";

ReactDOM.render(
    <Card>
      <Text style={{ padding: 30 }}>Default</Text>
    </Card>
  mountNode
);
```

![Default Card](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Card/card_default.png?raw=true)

![Default Cards Group](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Card/styled_cards_default.png?raw=true)

###### Box Style

```jsx
ReactDOM.render(
  <Card type="box">
    <Text style={{ padding: 30 }}>Box Type Card</Text>
  </Card>,
  mountNode
);
```

![Card With Shadow](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Card/card_box.png?raw=true)

![Box Cards Group](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Card/styled_cards_box.png?raw=true)
