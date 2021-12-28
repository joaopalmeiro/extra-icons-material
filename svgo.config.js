module.exports = {
    multipass: true,

    plugins: [
        // https://github.com/svg/svgo#default-preset
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false
                }
            }
        },
        'removeXMLNS',
        'removeDimensions',
        {
            name: 'removeAttrs',
            params: {
                attrs: '(fill|viewBox)'
            }
        }
    ]
};
