## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How To Pass By Pass

</br>
Install the Dependecies

```
yarn add -D babel-plugin-styled-components postcss-styled-syntax stylelint stylelint-config-standard-scss stylelint-config-styled-components stylelint-custom-processor-loader
```

</br>
create a file called '.babelrc' or add to an existing file.

```
{
    "plugins": [
      [
        "babel-plugin-styled-components",

        {
          "ssr": true,
          "transpileTemplateLiterals":true,
          "minify":true,
          "pure":true

        }

      ]
    ],
    "presets": [
      "next/babel",
      "@babel/preset-typescript"

    ]
  }
```

</br>
Create a file named by '.stylelintrc' and paste de code belown.

```
{
  "processors": [
    "stylelint-processor-styled-components"
  ],
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-styled-components"
  ],
  "customSyntax": "postcss-styled-syntax",
  "rules": {
    "selector-type-case": [
      "lower",
      {
        "ignoreTypes": [
          "/^\\$\\w+/"
        ]
      }
    ],
    "selector-type-no-unknown": [
      true,
      {
        "ignoreTypes": [
          "/-styled-mixin/",
          "/^\\$\\w+/"
        ]
      }
    ],
    "value-keyword-case": [
      "lower",
      {
        "ignoreKeywords": [
          "dummyValue"
        ]
      }
    ],
    "declaration-colon-newline-after": null
  }
}
```

</br>

On your package.json add in script the following code `"lint:css": "stylelint './src/**/*.ts'"` for TypeScript or `"lint:css": "stylelint './src/**/*.js'"` for JavaScript
</br>

```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:css": "stylelint './src/**/*.ts'"
  }

```

Then run yarn lint:css

The output should be like this

<h1 align="center">
    <img alt="output" src="https://i.ibb.co/ZBzD0wz/Screenshot-from-2023-02-12-22-55-38.png" />
</h1>

The rules is working and you can add more rules following the stylelint docs

- [Stylelint Rules](https://stylelint.io/user-guide/rules)

## !Hints

If you are using themed style components or having some problems with the rules that are not applying rules in some style code.

```
If you are using like this.

export const Modal = styled.div`
background: ${props => props.theme.color.aqua};
z-index:${props => props.theme.layers.base};
`
or

export const Modal = styled.div`
 ${({ theme }) => css`
    background: ${theme.color.aqua};
    z-index:${theme.layers.base};
  `}

try using this

export const Modal = styled.div(
  ({ theme }) => css`
    color: ${theme.color.aqua_teen};
    z-index: ${theme.layers.base};

    ${theme.breakpoints.mobile} {
      z-index: ${theme.layers.menu};
    }
  `,
)

Your code get more clean, legible and more usefully, and resolve some problems with template literals.
```

<h1 align="center">
    <img alt="other way to use in styled-components" src="https://i.ibb.co/yf7VS83/try-this.png" />
</h1>

- [Styled Components Helpers](https://styled-components.com/docs/api#css)

## Conclusion

Stylelint is very useful for making your CSS styles cleaner and less bug-prone during your project development.

Hope I helped, if you have any suggestions please leave a comment.
