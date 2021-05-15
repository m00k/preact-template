// eslint-disable @typescript-eslint/explicit-function-return-type

// Mock Browser API's which are not supported by JSDOM, e.g. ServiceWorker, SessionStorage
/**
 * An example how to mock sessionStorage is given below 👇
 */

 const observe = jest.fn();
 const unobserve = jest.fn();

 window.IntersectionObserver = jest.fn(() => ({
   observe,
   unobserve,
 }))

const sessionStorageMock = (() => {
	let store = { };

	return {
		getItem: (key) => store[key] || null,
		setItem: (key, value) => store[key] = value.toString(),
		removeItem: (key) => delete store[key],
		clear: () => store = {}
	};

})();

Object.defineProperty(window, 'sessionStorage', {
	value: sessionStorageMock
});

Object.defineProperty(window, 'fetch', {
	value: jest.fn()
});

Object.defineProperty(window, 'postMessage', {
	value: jest.fn()
});
