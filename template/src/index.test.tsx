import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/preact';
import { h } from 'preact';
import App from './index';

describe('Initial Test of the App', () => {
    test('App renders', () => {
        const { container } = render(<App />);
        expect(container.querySelector('#preact_root')).not.toBeNull();
    });
});
