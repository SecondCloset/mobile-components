import React from "react";

// Components
import { Wrapper, AvatarWrapper, TextWrapper, Initials, Name } from "./styles";

// Helpers
import { capitalize } from "lodash";

interface AvatarProps {
  firstName: string;
  lastName: string;
  withName?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ firstName, lastName, withName }) => {
  const formattedFirstName = capitalize(firstName);
  const formattedLastName = capitalize(lastName);
  const capitalFirstLetter = capitalize(firstName.charAt(0));
  const capitalLastLetter = capitalize(lastName.charAt(0));

  return (
    <Wrapper>
      <AvatarWrapper>
        <Initials>{`${capitalFirstLetter}${capitalLastLetter}`}</Initials>
      </AvatarWrapper>
      {withName ? (
        <TextWrapper>
          <Name>{`${formattedFirstName} ${formattedLastName}`}</Name>
        </TextWrapper>
      ) : null}
    </Wrapper>
  );
};

export default Avatar;
