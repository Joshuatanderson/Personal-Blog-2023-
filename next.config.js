module.exports = {
    trailingSlash: true,
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            type: 'asset/source',
        })
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': __dirname,
        }
        return config
    },
}
