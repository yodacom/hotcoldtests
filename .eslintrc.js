{
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always"],
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2
  },
  "plugins": [ "react" ]
}
//REPLACED ORIG ES LINT RC FILE
// module.exports = {
  //     "extends": "airbnb",
  //     "plugins": [
  //         "react",
  //         "jsx-a11y",
  //         "import"
  //     ],
  // "rules": {
  //   "react/jsx-filename-extension": 0,
  //   "no-use-before-define": 0,
  //   "jsx-a11y/href-no-hash": "off"
  //   }
  // };
