const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'bakencake.cdn.content.amplience.net'
    },
    poweredByHeader: false
}
