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
}

const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  withName,
  color,
}) => {
  const formattedFirstName = capitalize(firstName);
  const formattedLastName = capitalize(lastName);
  const capitalFirstLetter = capitalize(firstName.charAt(0));
  const capitalLastLetter = capitalize(lastName.charAt(0));

  return (
    <Wrapper>
      <InitialsWrapper color={color}>
        <Initials>{`${capitalFirstLetter}${capitalLastLetter}`}</Initials>
      </InitialsWrapper>
      {withName ? (
        <NameWrapper>
          <Name>{`${formattedFirstName} ${formattedLastName}`}</Name>
        </NameWrapper>
      ) : null}
    </Wrapper>
  );
};

export default Avatar;
