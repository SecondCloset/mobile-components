import React, { useState } from "react";

//components
import GreenCheckMark from "./GreenCheckMark";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import COLORS from "../../styles/colors";

//styles
import {
  Container,
  TitleContainer,
  TitleText,
  ImageWrap,
  ContentWrap,
  DotsWrap,
  Dot,
  ChildrenWrap,
} from "./styles";

interface StepProps {
  title: string;
  isLast?: boolean;
  children?: React.ReactElement | React.ReactElement[];
  completed?: boolean;
}

const Step: React.FC<StepProps> = props => {
  const [numOfDots, setNumOfDots] = useState(0);
  const renderIcon = () => {
    if (props.completed)
      return (
        <ImageWrap>
          <GreenCheckMark isGreenBackground size="small" />
        </ImageWrap>
      );
    if (props.isLast) {
      return (
        <ImageWrap>
          <AntDesign name="caretdown" color={COLORS.BLUE} size={20} />
        </ImageWrap>
      );
    } else
      return (
        <ImageWrap>
          <MaterialCommunityIcons
            name="map-marker"
            color={COLORS.BLUE}
            size={20}
          />
        </ImageWrap>
      );
  };

  const renderDots = () => {
    if (!props.children) return <DotsWrap />;
    const dots: React.ReactElement[] = [];
    for (let i = 0; i < numOfDots; i++) {
      dots.push(<Dot key={i} transparent={props.isLast} />);
    }
    dots.push(<Dot key="last" transparent={props.isLast} lastOne />);
    return <DotsWrap>{dots}</DotsWrap>;
  };

  const onLayout = event => {
    const height = event?.nativeEvent?.layout?.height;
    const dotsCount = Math.floor(height / 15);
    setNumOfDots(dotsCount);
  };

  return (
    <Container>
      <TitleContainer>
        {renderIcon()}
        <TitleText completed={props.completed}>{props.title || ""}</TitleText>
      </TitleContainer>
      <ContentWrap>
        {renderDots()}
        {props.children && (
          <ChildrenWrap onLayout={onLayout}>{props.children}</ChildrenWrap>
        )}
      </ContentWrap>
    </Container>
  );
};

export default Step;
