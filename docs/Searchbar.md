# SearchBar

A standard search bar component.

<!--- https://www.tablesgenerator.com/markdown_tables -->

#### SearchBar Props

| prop            | isRequired? | dataType         | defaultValue                |
| --------------- | ----------- | ---------------- | --------------------------- |
| value           | no          | string           |                             |
| onChange        | yes         | function(string) |                             |
| placeholder     | no          | string           | "Start typing something..." |
| searchResults   | yes         | Options array    |                             |
| loading         | no          | boolean          |                             |
| onOptionSelect  | yes         | function(Option) |                             |
| backgroundColor | no          | string           | "white"                     |

#### Option

| key   | isRequired? | dataType |
| ----- | ----------- | -------- |
| label | yes         | string   |
| value | yes         | any      |

<br/>

## 🔨 Usage

```jsx
import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "@secondcloset/mobile-components";

const db = [
  "apple",
  "banana",
  "blueberry",
  "orange",
  "pear",
  "peach",
  "strawberry",
  "grape",
  "blackcurrant",
  "blackberry",
  "pomegranate",
  "nectarine",
  "plum",
  "guava",
  "pineapple",
  "papaya",
  "grapefruit",
  "raspberry",
  "lemon",
  "lime",
  "cherry",
];

const SearchbarShowcase = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState("");

  const createResultsArray = results => {
    return results.map(r => ({ label: r, value: r }));
  };

  const onChange = v => {
    setValue(v);
    const newResult = db.filter(i => i.includes(v));
    setSearchResults(newResult);
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <SearchBar
        value={value}
        onChange={onChange}
        searchResults={createResultsArray(searchResults)}
        placeholder="Search for a fruit..."
        onOptionSelect={option => setValue(options.label)}
      />
    </View>
  );
};
```

![Collapsed SearchBar](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/SearchBar/collapsed_searchbar.png?raw=true)

![SearchBar With Results](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/SearchBar/searchbar_with_results.png?raw=true)

<br/>
