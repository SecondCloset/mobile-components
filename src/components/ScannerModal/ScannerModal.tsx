import React, { useState, useEffect } from "react";

//components
import { Modal, Keyboard, Alert, ActivityIndicator } from "react-native";
import Button from "../Button";
import ScannerToggle from "./ScannerToggle";
import CodeScanner from "./CodeScanner";
import UpperLeftCloseButton from "./UpperLeftCloseButton";

//styles
import {
  Container,
  ModalHeader,
  Title,
  Description,
  CodeInputWrap,
  CodeInput,
  CodeInputLabel,
  ModalBottomComponentContainer,
  LoaderContainer,
} from "./styles";

export interface ScannerModalProps {
  visible: boolean;
  onHide: () => any;
  onScan: (code: string) => any;
  title?: string;
  subTitle?: string;
  renderBottomComponent?: () => React.ReactChild;
  loading?: boolean;
}

const ScannerModal: React.FC<ScannerModalProps> = props => {
  const [isManualInput, setIsManualInput] = useState(false);
  const [itemCode, setItemCode] = useState("");

  useEffect(() => {
    if (!props.visible) {
      setIsManualInput(false);
      setItemCode("");
    }
  }, [props.visible]);

  const onClosePress = () => {
    Alert.alert(
      "Are You sure to exit scanning ?",
      "You will lose your progress of the scanned items",
      [
        {
          text: "CANCEL",
        },
        {
          text: "OK",
          onPress: props.onHide,
          style: "destructive",
        },
      ]
    );
  };

  const renderModalHeader = () => {
    return (
      <ModalHeader>
        <UpperLeftCloseButton onPress={onClosePress} isAbsolute />
        <Title>{props.title || "SCANNER"}</Title>
        <Description>{props.subTitle || "Start Scanning"}</Description>
      </ModalHeader>
    );
  };

  const renderBottomComponentContainer = () => {
    if (!props.renderBottomComponent) return null;
    return (
      <ModalBottomComponentContainer>
        {props.renderBottomComponent()}
      </ModalBottomComponentContainer>
    );
  };

  const handleScan = (code: string) => {
    props.onScan(code);
    setItemCode("");
  };

  const renderCodeInput = () => {
    return (
      <Container>
        <CodeInputWrap>
          <CodeInputLabel>Please enter code :</CodeInputLabel>
          <CodeInput
            value={itemCode}
            onChangeText={(text: string) => setItemCode(text)}
            placeholder="ABCD-0001"
            autoCapitalize="none"
            autoFocus={true}
            blurOnSubmit={true}
            clearButtonMode="always"
            onBlur={() => Keyboard.dismiss()}
          />
          <Button
            text="CONFIRM"
            type="primary"
            width={120}
            onPress={() => {
              handleScan(itemCode);
              Keyboard.dismiss();
            }}
            disabled={!itemCode}
          />
        </CodeInputWrap>
      </Container>
    );
  };

  const renderScannerView = () => {
    if (isManualInput) return renderCodeInput();
    else return <CodeScanner onScan={({ data }) => handleScan(data)} />;
  };

  const renderLoader = () => {
    if (!props.loading) return null;
    return (
      <LoaderContainer>
        <ActivityIndicator color="white" />
      </LoaderContainer>
    );
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={false}>
      <Container>
        {renderModalHeader()}
        <ScannerToggle
          isManualInput={isManualInput}
          setIsManualInput={setIsManualInput}
        />
        {renderScannerView()}
        {renderBottomComponentContainer()}
        {renderLoader()}
      </Container>
    </Modal>
  );
};

export default ScannerModal;
