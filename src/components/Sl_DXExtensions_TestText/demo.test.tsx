// import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

import * as DemoStories from './demo.stories';

const { BaseSlDxExtensionsTestText } = composeStories(DemoStories);

test('renders SlDxExtensionsTestText', async () => {
  render(<BaseSlDxExtensionsTestText />);
  expect(await screen.findByText('Text Sample')).toBeVisible();


  const textElement = (screen.getByTestId('Text-12345678:input:control') as HTMLInputElement);
  expect(textElement.value).toBe('');

  expect(textElement).toHaveAttribute('placeholder', 'Text Placeholder');
});
