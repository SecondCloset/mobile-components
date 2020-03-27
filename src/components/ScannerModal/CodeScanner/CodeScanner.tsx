import React, { useState, useEffect } from "react";
import {
  Container,
  Scanner,
  ErrorMessageWrap,
  ErrorMessageText,
  ScannerSquare,
} from "./styles";
import Button from "../../Button";
import { ActivityIndicator } from "react-native";

interface CodeScannerProps {
  loading?: boolean;
  onScan: ({ type, data }) => any;
}

const CodeScanner: React.FC<CodeScannerProps> = props => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Scanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.onScan({ type, data });
  };

  const renderErrorMessage = (msg: string) => {
    return (
      <ErrorMessageWrap>
        <ErrorMessageText>{msg}</ErrorMessageText>
      </ErrorMessageWrap>
    );
  };

  if (hasPermission === null) {
    return renderErrorMessage("Requesting for camera permission");
  }
  if (hasPermission === false) {
    return renderErrorMessage("No access to camera");
  }
  if (props.loading) {
    return (
      <ErrorMessageWrap>
        <ActivityIndicator />
      </ErrorMessageWrap>
    );
  }

  const renderScannerContent = () => {
    if (scanned)
      return (
        <Button
          text="Scan Again"
          onPress={() => setScanned(false)}
          type="primary"
          width={150}
        />
      );
    else return <ScannerSquare />;
  };

  return (
    <Container>
      <Scanner onBarCodeScanned={scanned ? () => {} : handleBarCodeScanned}>
        {renderScannerContent()}
      </Scanner>
    </Container>
  );
};

export default CodeScanner;
