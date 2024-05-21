// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { buildConfig } = require('./src/config');

const config = buildConfig({
  title: 'How to',
  tagline: 'A bunch of tech tutorials',
  url: 'https://howto.novalagung.com',
  projectName: 'howto', 
  seoKeywords: 'tutorial, it tutorial, tech, it blog, how to, novalagung, noval agung',
  googleTrackingID: 'G-69CJWBHP10',
  facebookAppID: '875100400724859',
  showContentFooterEbookWrapper: false,
});

module.exports = config;
