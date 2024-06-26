/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  manualSidebar: [
    {
      type: 'doc',
      id: 'index'
    },
    {
      type: 'doc',
      id: 'terraform-aws-load-balancer-auto-scaling'
    },
    {
      type: 'doc',
      id: 'terraform-aws-ec2-internet-gateway-ssh'
    },
    {
      type: 'doc',
      id: 'terraform-cloudflare-zero-trust'
    },
    {
      type: 'doc',
      id: 'kubernetes-minikube-deployment-service-horizontal-autoscale'
    },
    {
      type: 'link',
      href: 'https://novalagung.medium.com/gmail-account-with-custom-domain-using-cloudflare-and-mailgun-2fa51337911a',
      label: 'Gmail Account with Custom Domain using Cloudflare and Mailgun',
    },
    {
      type: 'link',
      href: 'https://levelup.gitconnected.com/golang-dockerfile-for-project-with-private-dependencies-using-https-without-ssh-9a9f0bbeddd8',
      label: 'Golang Dockerfile for Project with Private Dependencies using HTTPS (without SSH)',
    },
    {
      type: 'link',
      href: 'https://javascript.plainenglish.io/react-native-bluetooth-low-energy-peripheral-communication-e7cb93abf69',
      label: 'Peripheral Communication with React Native BLE (Bluetooth Low Energy)',
    },
    {
      type: 'doc',
      id: 'setup-oracle-instantclient'
    },
    {
      type: 'doc',
      id: 'setup-oracle-xe-database-server'
    },
    {
      type: 'doc',
      id: 'cicd-serverless-ebook-gitbook-github-pages-actions-calibre'
    },
    {
      type: 'link',
      href: 'https://medium.com/geekculture/serverless-e-book-web-book-using-docusaurus-v2-github-pages-actions-and-pdf-tools-4fef54847b85',
      label: 'Setup Serverless Ebook/Webbook using Docusaurus v2, GitHub Pages & Actions, DocSearch, and PDF tools',
    },
    {
      type: 'doc',
      id: 'setup-wireguard-vpn-server'
    },
    {
      type: 'link',
      href: 'https://novalagung.medium.com/soap-wsdl-request-in-go-language-3861cfb5949e',
      label: 'SOAP-WSDL request in Go Language',
    },
  ],
};

module.exports = sidebars;
