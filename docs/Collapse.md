# Collapse

<!--- https://www.tablesgenerator.com/markdown_tables -->

| prop           | isRequired? | dataType       |
| -------------- | ----------- | -------------- |
| triggerElement | yes         | React Element  |
| children       | no          | React Children |

<br/>

## 🔨 Usage

```jsx
const renderTriggerButton = () => {
  //this cannot be TouchableOpacity
  return <Text>open</Text>;
};

const renderContent = () => {
  return (
    <View
      style={{
        width: "100%",
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <Text>Content</Text>
      <Text>Content</Text>
      <Text>Content</Text>
      <Text>Content</Text>
      <Text>Content</Text>
    </View>
  );
};

return (
  <Collapse triggerElement={renderTriggerButton()}>{renderContent()}</Collapse>
);
```

<img src="https://github.com/SecondCloset/mobile-components/blob/master/docs/images/Collapse/collapse.png?raw=true" alt="Collapse" width="200">
