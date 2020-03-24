# ButtonGroup

A toggle button component.

#### ButtonGroupProps

| prop               | isRequired? | dataType               |
| ------------------ | ----------- | ---------------------- |
| options            | yes         | array                  |
| selectedOptionText | no          | Option[text]           |
| onOptionSelect     | yes         | function(Option[text]) |

#### Options

| key      | isRequired? | dataType |
| -------- | ----------- | -------- |
| text     | yes         | string   |
| subtext  | no          | string   |
| disabled | no          | boolean  |

<br/>
<br/>

## 🔨 Usage

###### Default

```jsx
import React, { useState } from "react";
import { ButtonGroup } from "@secondcloset/mobile-components";

const [selectedOptionText, setSelectedOptionTex] = useState("Mrs. Nesbitt");

const options = [
  {
    text: "Mrs. Nesbitt",
    subtext: "Delusional Tea Connoisseur",
  },
  {
    text: "Buzz Lightyear",
    subtext: "Flying Space Ranger Toy",
    //disabled: true
  },
];

return (
  <ButtonGroup
    options={options}
    selectedOptionText={selectedOptionText}
    onOptionSelect={setSelectedOptionText}
  />
);
```

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/ButtonGroup/button_group.png?raw=true" alt="BottomUpModal" width="200">

<br/>

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/ButtonGroup/button_group_disabled.png?raw=true" alt="BottomUpModal" width="200">
