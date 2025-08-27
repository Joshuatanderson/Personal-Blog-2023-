module.exports = {
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
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
