import styled from "styled-components/native";
import colors from "../../styles/colors";

interface ContainerProps {
  photo: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 165px;
  background-color: ${colors.GREY_LIGHT};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const CameraContainer = styled.View`
  margin-top: -5px;
  /* to make this image in the center */
`;

export const UploadedImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
  border-radius: 10px;
`;
