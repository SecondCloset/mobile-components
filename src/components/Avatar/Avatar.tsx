import React from "react";

// Components
import {
  Wrapper,
  InitialsWrapper,
  Initials,
  NameWrapper,
  Name,
} from "./styles";

// Helpers
import { capitalize } from "lodash";

interface AvatarProps {
  firstName: string;
  lastName: string;
  withName?: boolean;
  color?: string;
  size?: number;
  fontSize?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  withName,
  color,
  fontSize,
  size,
}) => {
  const formattedFirstName = capitalize(firstName);
  const formattedLastName = capitalize(lastName);
  const capitalFirstLetter = capitalize(firstName.charAt(0));
  const capitalLastLetter = capitalize(lastName.charAt(0));

  const renderFullName = () => {
    if (!withName) return null;
    return (
      <NameWrapper>
        <Name
          fontSize={fontSize}
        >{`${formattedFirstName} ${formattedLastName}`}</Name>
      </NameWrapper>
    );
  };

  return (
    <Wrapper>
      <InitialsWrapper color={color} size={size}>
        <Initials
          fontSize={fontSize}
        >{`${capitalFirstLetter}${capitalLastLetter}`}</Initials>
      </InitialsWrapper>
      {renderFullName()}
    </Wrapper>
  );
};

export default Avatar;
