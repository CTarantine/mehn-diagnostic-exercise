const express = require('express')

const issueApi = require('../models/issue.js')

const issueRouter = express.Router()

issueRouter.get('/', (req, res) => {
    res.json(issueApi.getHelloWorldString())
  })