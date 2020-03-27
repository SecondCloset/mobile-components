import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Alert, Text } from "react-native";
import ScannerModal from "./ScannerModal";
import Button from "../Button";

const ScannerModalShowcase = props => {
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
};

const ScannerModalWithBottomShowcase = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderBottomComponent = () => {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Text>What do you want to scan?</Text>
      </View>
    );
  };

  const renderScannerModal = () => {
    return (
      <ScannerModal
        visible={modalVisible}
        onScan={code => Alert.alert(`scanned ${code}`)}
        onHide={() => setModalVisible(false)}
        renderBottomComponent={renderBottomComponent}
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
};

storiesOf("ScannerModal", module)
  .add("default", () => <ScannerModalShowcase />)
  .add("withBottomCard", () => <ScannerModalWithBottomShowcase />);
