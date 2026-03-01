import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledNavigationList = styled.nav`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
export function NavigationList(props: HTMLAttributes<HTMLElement>) {
  return (
    <StyledNavigationList>
      <ul>{props.children}</ul>
    </StyledNavigationList>
  );
}

export default NavigationList;
