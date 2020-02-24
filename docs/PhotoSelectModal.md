# PhotoSelectModal

Combined Camera shoot and gallery image picker.

<!--- https://www.tablesgenerator.com/markdown_tables -->

#### PhotoSelectModal Props

| prop          | isRequired? | dataType |
| ------------- | ----------- | -------- |
| visible       | yes         | boolean  |
| onHide        | yes         | function |
| onSelectPhoto | yes         | function |

<br/>

## 🔨 Usage

```jsx
import React, { useState } from "react";
import { View } from "react-native";
import { PhotoSelectModal } from "@secondcloset/mobile-components";

const PhotoSelectModalShowcase = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState();

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
      }}
    >
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Select Photo</Text>
      </TouchableOpacity>

      {imageURI && (
        <Image
          source={{ uri: imageURI }}
          style={{ width: "100%", height: 200 }}
        />
      )}

      <PhotoSelectModal
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
        onSelectPhoto={uri => setImageURI(uri)}
      />
    </View>
  );
};
```

![Camera Shoot](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/PhotoSelectModal/camera.png?raw=true)

![Photo Gallery](https://github.com/SecondCloset/mobile-components/blob/master/docs/images/PhotoSelectModal/gallery.png?raw=true)

<br/>
