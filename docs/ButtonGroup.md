# ButtonGroup

A toggle button component.

#### ButtonGroupProps

| prop           | isRequired? | dataType         |
| -------------- | ----------- | ---------------- |
| options        | yes         | array            |
| defaultValue   | no          | Option[text]     |
| onOptionSelect | yes         | function(Option) |

#### Options

| key     | isRequired? | dataType |
| ------- | ----------- | -------- |
| text    | yes         | string   |
| subtext | no          | string   |

<br/>
<br/>

## 🔨 Usage

###### Default

```jsx
import React, { useState } from "react";
import { ButtonGroup } from "@secondcloset/mobile-components";

const [selectedOption, setSelectedOption] = useState("Mrs. Nesbitt");

const options = [
  {
    text: "Mrs. Nesbitt",
    subtext: "Delusional Tea Connoisseur",
  },
  {
    text: "Buzz Lightyear",
    subtext: "Flying Space Ranger Toy",
  },
];

return (
  <ButtonGroup
    options={options}
    defaultValue={selectedOption}
    onOptionSelect={setSelectedOption}
  />
);
```

![ButtonGroup With Subtexts](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/ButtonGroup/button_group.png?raw=true)
