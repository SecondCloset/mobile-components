# Card

A standard card component.

| prop       | isRequired? | dataType        |
| ---------- | ----------- | --------------- |
| withShadow | no          | boolean         |
| withBorder | no          | boolean         |
| children   | yes         | React.ReactNode |

<br/>
<br/>

## 🔨 Usage

###### With Border Style

```jsx
import { Card } from "@secondcloset/mobile-components";
import { Text } from "react-native";

<Card withBorder>
  <Text style={{ padding: 30 }}>Default</Text>
</Card>;
```

![Card With Border](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Card/withBorder.png?raw=true)

###### With Shadow Style

```jsx
<Card withShadow>
  <Text style={{ padding: 30 }}>Box Type Card</Text>
</Card>
```

![Card With Shadow](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Card/withShadow.png?raw=true)
