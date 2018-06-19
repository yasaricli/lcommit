const withLess = require('@zeit/next-less');
const withImages = require('next-images')

module.exports = withLess(withImages());
