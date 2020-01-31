# Avatar

A legendary avatar component.

<!--- https://www.tablesgenerator.com/markdown_tables -->

| prop      | isRequired? | dataType | defaultValue | possibleValues |
| --------- | ----------- | -------- | ------------ | -------------- |
| firstName | yes         | string   |              | "Anthony"      |
| lastName  | yes         | string   |              | "Langford"     |
| withName  | no          | boolean  | false        | true, false    |

<br/>

## 🔨 Usage

```jsx
import { Avatar } from "@secondcloset/mobile-components";

ReactDOM.render(<Avatar firstName="Anthony" lastName="Langford" />, mountNode);
```

<br/>

![Avatar](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Avatar/avatar.png?raw=true)

```jsx
ReactDOM.render(
  <Avatar withName firstName="Anthony" lastName="Langford" />,
  mountNode
);
```

![Avatar With Name](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Avatar/avatar_with_name.png?raw=true)
