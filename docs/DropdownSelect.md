# DropdownSelect

A standard dropdown component.

<!--- https://www.tablesgenerator.com/markdown_tables -->

#### Dropdown Props

| prop        | isRequired? | dataType       | possibleValues      |
| ----------- | ----------- | -------------- | ------------------- |
| options     | yes         | array          | (See options table) |
| selectedKey | no          | any            | Option["key"]       |
| width       | no          | number, string | 250, "80%"          |

#### Options

| key   | isRequired? | dataType       | possibleValues                |
| ----- | ----------- | -------------- | ----------------------------- |
| key   | yes         | string, number | "key", 1                      |
| name  | yes         | string         | "apple", "banana", "orange"   |
| value | yes         | any            | { color: "red", quantity: 4 } |

<br/>

## 🔨 Usage

```jsx
import { View, Text } from "react-native";
import { DropdownSelect } from "@secondcloset/mobile-components";

const [selectedKey, setSelectedKey] = useState(null);

const options = [
  { key: "1", name: "Apple", value: "apple" },
  { key: "2", name: "Banana", value: "banana" },
  { key: "3", name: "Orange", value: "orange" },
];

ReactDOM.render(
  <View
    style={{
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
    }}
  >
    <DropdownSelect
      onSelect={(key, value) => {
        setSelectedKey(key);
      }}
      selectedKey={selectedKey}
      options={options}
      fontSize={16}
      placeholder="Please select a fruit"
      width={props.width}
    />
    <Text>content</Text>
    <Text>content</Text>
    <Text>content</Text>
    <Text>content</Text>
  </View>,
  mountNode
);
```

![Sample Dropdown](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/DropdownSelect/sample_dropdown.png?raw=true)

<br/>
