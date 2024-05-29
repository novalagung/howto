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
  algoliaAppID: 'VDG05CUB84',
  algoliaApiKey: '2264fb01b83efb8f672d191c221f853b',
  algoliaIndexName: 'howto-novalagung',
  showContentFooterEbookWrapper: false,
  showNavItems: false,
});

module.exports = config;
