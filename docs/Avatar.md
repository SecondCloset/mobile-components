# Avatar

A legendary avatar component.

<!--- https://www.tablesgenerator.com/markdown_tables -->

| prop      | isRequired? | dataType | defaultValue |
| --------- | ----------- | -------- | ------------ |
| firstName | yes         | string   |              |
| lastName  | yes         | string   |              |
| withName  | no          | boolean  | false        |
| color     | no          | string   |              |
| size      | no          | number   | 40           |
| fontSize  | no          | number   | 16           |

<br/>

## 🔨 Usage

```jsx
import { Avatar } from "@secondcloset/mobile-components";

<Avatar firstName="Anthony" lastName="Langford" />;
```

![Avatar](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Avatar/avatar.png?raw=true)

<br/>

```jsx
<Avatar withName firstName="Anthony" lastName="Langford" />
```

![Avatar With Name](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Avatar/avatar_with_name.png?raw=true)

<br/>

```jsx
<Avatar
  withName
  firstName="Anthony"
  lastName="Langford"
  color="cornflowerblue"
/>
```

![Avatar With Explicit Color](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Avatar/avatar_with_colour.png?raw=true)
