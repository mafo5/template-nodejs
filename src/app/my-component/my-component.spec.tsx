import { render, screen } from '@testing-library/react';
import __ from 'hamjest';
import ___ from 'hamjest-sinon';

import { MyComponent } from './my-component';

describe('MyComponent Component', () => {
  it('renders a head', () => {

    render(<MyComponent />);

    expect(screen.getByText('My Component')).toBeVisible();
  });

  it('allows jest mock test', () => {
    const mock = jest.fn();

    mock({ some: 'thing' });
    
    __.assertThat(mock, ___.wasCalledWith(__.hasProperties({ some: 'thing' })));
  });
});
