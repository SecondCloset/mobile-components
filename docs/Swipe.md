# Swipe

https://github.com/UdaySravanK/RNSwipeButton#readme

#### Swipe Props

| prop                    | isRequired? | dataType       |
| ----------------------- | ----------- | -------------- |
| width                   | no          | number, string |
| backgroundColor         | no          | string         |
| title                   | no          | string         |
| titleColor              | no          | string         |
| fontSize                | no          | number         |
| borderColor             | no          | string         |
| disabled                | no          | boolean        |
| enableRightToLeftSwipe  | no          | boolean        |
| swipeSuccessThreshold   | no          | number         |
| shouldResetAfterSuccess | no          | boolean        |
| onSwipeStart            | no          | function       |
| onSwipeSuccess          | no          | function       |
| swipeIconComponent      | no          | JSX.Element    |

<br/>
<br/>

## 🔨 Usage

```jsx
import { Swipe } from "@secondcloset/mobile-components";

<View
  style={{
    flex: 1,
    width: "100%",
    padding: 20,
  }}
>
  <Swipe title="Confirm Pickup" width={220} />
</View>;
```

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Swipe/swipe-icon.png?raw=true" alt="Swipe with Icon" width="200">
<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Swipe/swipe-icon-complete.png?raw=true" alt="Swipe" width="200">
<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Swipe/swipe-success.png?raw=true" alt="Swipe" width="200">
<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Swipe/swipe-disabled.png?raw=true" alt="Swipe" width="200">
<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Swipe/swipe2.png?raw=true" alt="Swipe" width="200">
