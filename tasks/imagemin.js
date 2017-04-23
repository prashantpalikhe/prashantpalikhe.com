const chalk = require('chalk');
const imagemin = require('imagemin');
const webp = require('imagemin-webp');
const jpeg = require('imagemin-jpeg-recompress');

function optimizeJpegs() {
    return imagemin(['img/*.jpg'], 'img', {
        plugins: [jpeg({
            accurate: true,
            max: 80
        })]
    }).then(function () {
        console.log(chalk.cyan('Optimized jpegs'));
    });
}

function generateWebp() {
    return imagemin(['img/*.jpg'], 'img', {
        plugins: [webp({
            quality: 60
        })]
    }).then(() => {
        console.log(chalk.cyan('Generated webps'));
    });
}

module.exports = () => {
    return optimizeJpegs()
        .then(generateWebp);
};



