module.exports = {
    outDir: 'src',
    jsxRuntime: 'classic',
    expandProps: 'end',
    // Default component template:
    // - https://github.com/gregberge/svgr/blob/v6.1.2/packages/babel-plugin-transform-svg-component/src/defaultTemplate.ts
    // - https://react-svgr.com/docs/migrate/#template
    template: require('./template')
};
