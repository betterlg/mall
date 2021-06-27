const { resolve } = require("core-js/fn/promise");

module.exports = {
    configurewebpack: {
        resolve: {
            alias: {
                'assets': '@assets',
                'common': '@common',
                'components': '@components',
                'network': '@network',
                'views': '@views'
            }
        }
    }
}