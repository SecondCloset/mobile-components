# ScannerModal

#### ScannerModal Props

| prop                  | isRequired? | dataType              |
| --------------------- | ----------- | --------------------- |
| visible               | yes         | boolean               |
| onHide                | yes         | () => any             |
| onScan                | yes         | (code: string) => any |
| title                 | no          | string                |
| subtitle              | no          | string                |
| loading               | no          | boolean               |
| renderBottomComponent | no          | React.ReactNode       |

<br/>
<br/>

## 🔨 Usage

```jsx
import { ScannerModal, Button } from "@secondcloset/mobile-components";
import { View, Alert, Text } from "react-native";

const [modalVisible, setModalVisible] = useState(false);

const renderScannerModal = () => {
  return (
    <ScannerModal
      visible={modalVisible}
      onScan={code => Alert.alert(`scanned ${code}`)}
      onHide={() => setModalVisible(false)}
    />
  );
};

return (
  <View
    style={{
      flex: 1,
      width: "100%",
      padding: 20,
    }}
  >
    <Button
      text="Start Scanning"
      type="primary"
      onPress={() => setModalVisible(true)}
      color="blue"
    />
    {renderScannerModal()}
  </View>
);
```

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/ScannerModal/scannerModalCamera.png?raw=true" alt="Menu" width="200">

<br/>

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/ScannerModal/scannerModalInput.png?raw=true" alt="Menu" width="200">
