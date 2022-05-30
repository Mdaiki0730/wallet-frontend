module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "es2020": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "linebreak-style": ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")],
    // disallow use of eval()
    "no-eval": "error",

    "no-console": "off",

    // specify whether double or single quotes should be used
    "quotes": ["error", "double"],

    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": ["error", {
      // the list of arthmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ["%", "**"],
        ["%", "+"],
        ["%", "-"],
        ["%", "*"],
        ["%", "/"],
        ["**", "+"],
        ["**", "-"],
        ["**", "*"],
        ["**", "/"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": "error",

    // enforces spacing between keys and values in object literal properties
    "key-spacing": ["off"],

    // "key-spacing": [2, {
    //   "singleLine": {
    //     "beforeColon": false,
    //     "afterColon": true
    //   },
    //   "multiLine": {
    //     "beforeColon": true,
    //     "afterColon": true,
    //     "align": "colon"
    //   }
    // }],

    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],

    // require or disallow space before blocks
    "space-before-blocks": "error",

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],

    // require or disallow spaces inside parentheses
    "space-in-parens": ["error", "never"],

    // require spaces around operators
    "space-infix-ops": "off",

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": ["error", {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // disallow space between function identifier and application
    "no-spaced-func": "off",

    // disallow tab characters entirely
    "no-tabs": "error",

    // disallow the use of ternary operators
    "no-ternary": "off",

    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": ["error", {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    // disallow use of multiple spaces
    "no-multi-spaces": ["error", {
      ignoreEOLComments: false,
    }],

    // require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": ["error", { before: true, after: true }],
  },
  "reportUnusedDisableDirectives": true
};
