import React from "react";
import { Container, ToggleButtonText, ToggleButton } from "./styles";

interface ScannerToggleProps {
  isManualInput: boolean;
  setIsManualInput: (value: boolean) => any;
}

const ScannerToggle: React.FC<ScannerToggleProps> = props => {
  const { isManualInput, setIsManualInput } = props;

  return (
    <Container>
      <ToggleButton
        selected={!isManualInput}
        isFirst
        onPress={() => setIsManualInput(false)}
      >
        <ToggleButtonText selected={!isManualInput}>SCANNER</ToggleButtonText>
      </ToggleButton>
      <ToggleButton
        selected={isManualInput}
        onPress={() => setIsManualInput(true)}
      >
        <ToggleButtonText selected={isManualInput}>
          MANUAL INPUT
        </ToggleButtonText>
      </ToggleButton>
    </Container>
  );
};

export default ScannerToggle;
