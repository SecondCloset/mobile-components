# Searchbar

A standard search bar component.

<!--- https://www.tablesgenerator.com/markdown_tables -->

#### Searchbar Props

| prop            | isRequired? | dataType         | defaultValue                |
| --------------- | ----------- | ---------------- | --------------------------- |
| placeholder     | no          | string           | "Start typing something..." |
| searchFunction  | yes         | function(string) |                             |
| searchResults   | yes         | options array    |                             |
| loading         | no          | boolean          |                             |
| onOptionSelect  | yes         | function(value)  |                             |
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
import { Searchbar } from "@secondcloset/mobile-components";

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

  const searchFunction = value => {
    const filteredResults = db.filter(option => option.includes(value));
    setSearchResults(filteredResults);
  };

  const createResultsArray = results => {
    return results.map(r => {
      return { label: r, value: r };
    });
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Searchbar
        searchFunction={searchFunction}
        searchResults={createResultsArray(searchResults)}
        placeholder="Search for a fruit..."
        loading={loading}
        onOptionSelect={value => {
          console.log(`${value} selected.`);
        }}
      />
    </View>
  );
};
```

![Collapsed Searchbar](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Searchbar/collapsed_searchbar.png?raw=true)

![Searchbar With Results](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Searchbar/searchbar_with_results.png?raw=true)

<br/>
