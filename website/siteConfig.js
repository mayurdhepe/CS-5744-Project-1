/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'CS 5744 - Project 1 - HokieRide',
  tagline: 'A website for testing',
  url: 'https://mayurdhepe.github.io', // Your website URL
  baseUrl: '/cs-5744-project-1/',

  // Used for publishing and more
  projectName: 'cs-5744-project-1',
  organizationName: 'mayurdhepe',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [],

  /* path to images for header/footer */


  /* Colors for website */
  colors: {
    primaryColor: '#949c90',
    secondaryColor: '#676d64',
  },


  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,


};

module.exports = siteConfig;
