const {
    identifier,
    jsxClosingElement,
    jsxElement,
    jsxIdentifier,
    jsxOpeningElement,
    jsxSpreadAttribute
} = require('@babel/types');

// Source:
// - https://react-svgr.com/docs/migrate/#template
// - https://varun.ca/react-icon-system/
// - https://react-svgr.com/docs/custom-templates/#custom-component-template
// - https://phelipetls.github.io/posts/automating-svg-to-jsx-conversion-with-svgr/
// - https://mui.com/components/icons/#svgicon
const template = (variables, { tpl }) => {
    // More info:
    // - https://babeljs.io/docs/en/babel-types#jsxelement
    // - https://babeljs.io/docs/en/babel-types#jsxopeningelement
    // - https://babeljs.io/docs/en/babel-types#jsxidentifier
    // - https://babeljs.io/docs/en/babel-types#jsxspreadattribute
    // - https://babeljs.io/docs/en/babel-types#identifier
    const wrappedJsx = jsxElement(
        jsxOpeningElement(
            jsxIdentifier('SvgIcon'),
            // The output corresponds to the `expandProps: 'end'` option.
            [...variables.jsx.openingElement.attributes, jsxSpreadAttribute(identifier('props'))]
        ),
        jsxClosingElement(jsxIdentifier('SvgIcon')),
        variables.jsx.children,
        false
    );

    return tpl`
  ${variables.imports};
  import SvgIcon from "@mui/material/SvgIcon";
  
  const ${variables.componentName} = (${variables.props}) => (
    ${wrappedJsx}
  );
   
  ${variables.exports};
  `;
};

// ${JSON.stringify(variables.jsx)}

module.exports = template;
