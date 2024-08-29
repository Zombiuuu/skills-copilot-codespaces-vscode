// Create web server that listens for requests on port 3000
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const comments = [];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  if (parsedUrl.pathname =