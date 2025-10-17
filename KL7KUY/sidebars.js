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
  main: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    {
      type: 'doc',
      id: 'about',
      label: 'About KL7KUY',
    },
    {
      type: 'category',
      label: 'Station',
      items: [
        'station/hf-setup',
        'station/vhf-uhf-setup',
        'station/portable-setup',
        'antenna_projects',
      ],
    },
    {
      type: 'doc',
      id: 'ham_radio_projects',
      label: 'Projects',
    },
    {
      type: 'doc',
      id: 'qsl-info',
      label: 'QSL Info',
    },
    {
      type: 'doc',
      id: 'contact',
      label: 'Contact',
    },
  ],
};

export default sidebars;
