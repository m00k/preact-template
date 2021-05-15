module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  transform: {
      "^.+\\.ts?(x)?$": "ts-jest"
  },
  verbose: true,
  setupFiles: [
      "<rootDir>/testing/__mocks__/browserMocks.js"
  ],
  moduleFileExtensions: [
      "js",
      "jsx",
      "ts",
      "tsx"
  ],
  moduleDirectories: [
      "node_modules"
  ],
  testMatch: [
      "**/?(*.)(spec|test).[jt]s?(x)"
  ],
  moduleNameMapper: {
      // eslint-disable-next-line max-len
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/testing/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "identity-obj-proxy",
      "^./style$": "identity-obj-proxy",
      "^preact$": "<rootDir>/node_modules/preact/dist/preact.min.js",
      "^react$": "preact-compat",
      "^react-dom$": "preact-compat",
      "^create-react-class$": "preact-compat/lib/create-react-class",
      "^react-addons-css-transition-group$": "preact-css-transition-group"
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
}
