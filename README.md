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

## 🔨 Usage

```jsx
import { CenterView } from "@scdevelopers/mobile-components";
import { Text } from "react-native";

ReactDOM.render(
  <CenterView>
    <Text>Carpe Diem</Text>
  </CenterView>,
  mountNode
);
```

## ⌨️ Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/SecondCloset/mobile-components)

Or clone locally:

```bash
git clone git@github.com:SecondCloset/mobile-components.git
cd mobile-components
npm install
npm run storybook # This compiles the stories
npm start # This starts expo
npm run build # This builds the dist folder to be published
npm version patch # Run npm version [<newversion> | major | minor | patch ] to bump the version number
npm publish
```
