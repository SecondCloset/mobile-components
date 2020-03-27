import styled from "styled-components/native";
import COLORS from "../../styles/colors";

export const Container = styled.View``;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleText = styled.Text`
  font-size: 13px;
  margin-left: 5px;
  flex: 0.9;
`;

export const ImageWrap = styled.View`
  flex: 0.1;
  align-items: center;
`;

export const Image = styled.Image`
  margin-top: -5px;
  width: 20px;
  height: 20px;
  margin-left: -2px;
`;

export const ContentWrap = styled.View`
  flex-direction: row;
`;

export const DotsWrap = styled.View`
  flex: 0.1;
  align-items: center;
  margin-top: -5px;
`;

interface DotProps {
  transparent?: boolean;
  lastOne?: boolean;
}

export const Dot = styled.View<DotProps>`
  background: ${props =>
    props.transparent ? COLORS.TRANSPARENT : COLORS.GREY_MID};
  border-radius: 100px;
  width: 6px;
  height: 6px;
  margin-bottom: ${props => (props.lastOne ? "0px" : "10px")};
  margin-left: -2px;
`;

export const ChildrenWrap = styled.View`
  flex: 0.9;
  align-self: flex-start;
  padding-bottom: 40px;
  border: 1px solid transparent;
`;
