const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@src": path.resolve(__dirname, 'src'),
                "@systray": path.resolve(__dirname, 'src/components/systray'),
                "@programs": path.resolve(__dirname, 'src/components/programs'),
                "@folders": path.resolve(__dirname, 'src/components/folders'),
                "@windows": path.resolve(__dirname, 'src/components/windows'),
                "@models": path.resolve(__dirname, 'src/models'),
            }
        }
    }
}
