import styled, { css } from 'styled-components';

// Wrapper keeps layout predictable when used inside forms, repeating grids, and Storybook.
export default styled.div(() => {
  return css`
    display: block;
    margin: 0.25rem 0;
  `;
});
