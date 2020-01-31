<h1 align=center>Second Closet's React Native Component Library</h1>
<p align=center>A World Class Component Library </p>

[![Dependencies](https://img.shields.io/david/anthony-langford/address-lookup)](https://david-dm.org/anthony-langford/address-lookup) [![DevDependencies](https://img.shields.io/david/dev/anthony-langford/address-lookup)](https://david-dm.org/anthony-langford/address-lookup?type=dev) ![Rating](https://img.shields.io/badge/rating-5%2F5-brightgreen) ![License](https://img.shields.io/badge/license-MIT-green)

## 📦 Install

```bash
npm install @scdevelopers/mobile-components
```

```bash
yarn add @scdevelopers/mobile-components
```

## Components

- [Avatar](https://github.com/SecondCloset/mobile-components/blob/master/docs/Avatar.md)
- [Button](https://github.com/SecondCloset/mobile-components/blob/master/docs/Button.md)
- [BottomUpMenu](https://github.com/SecondCloset/mobile-components/blob/master/docs/BottomUpMenu.md)
- [BottomUpModal](https://github.com/SecondCloset/mobile-components/blob/master/docs/BottomUpModal.md)
- [Card](https://github.com/SecondCloset/mobile-components/blob/master/docs/Card.md)
- [DropdownSelect](https://github.com/SecondCloset/mobile-components/blob/master/docs/DropdownSelect.md)

```jsx
import { Button } from "react-native";

ReactDOM.render(
  <Button
    text="Carpe Diem"
    onPress={() => {
      console.log("Sieze the Day");
    }}
  />,
  mountNode
);
```

## ⌨️ Development

```bash
git clone git@github.com:SecondCloset/mobile-components.git
cd mobile-components
npm install
npm run storybook # Compile the stories
npm start # Start expo
npm version [<newversion> | major | minor | patch ] # Bump the version number
npm publish # Runs build script then publishes
```
