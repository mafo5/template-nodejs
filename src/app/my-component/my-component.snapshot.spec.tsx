import { render } from '@testing-library/react';

import { MyComponent } from './my-component';

it('renders MyComponent unchanged', () => {
  const { container } = render(<MyComponent />);
  expect(container).toMatchSnapshot();
});
