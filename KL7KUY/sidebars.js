// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Main sidebar
  docs: [
    'about',
    'ham_radio_projects',
    {
      type: 'category',
      label: 'Station',
      items: [
        'station/hf-setup',
        'station/vhf-uhf-setup',
        'station/portable-setup',
      ],
    },
    'qsl-info',
    'contact',
  ],
};

export default sidebars;
