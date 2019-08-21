const express = require('express')

const issueApi = require('../models/issue.js')

const issueRouter = express.Router()

// SHOW ALL ISSUES
// issueRouter.get('/', (req, res) => {
//   issueApi.getAllIssues()
//     .then((issuesInDB) => {
//       res.send(issuesInDB)
//      })
// })

//SHOW ALL ISSUES
issueRouter.get('/', (req, res) => {
  // show all issues
  issueApi.getAllIssues()
    .then((issuesinDB) => {
      res.render('issues/allIssues', { issuesinDB })
    })
})

//CREATE ISSUE
issueRouter.get('/newIssue', (req, res) => {
  // create new issue form
  res.render('issues/newIssue')
})


//GET SINGLE ISSUE
issueRouter.get('/:issueId', (req, res) => {
  issueApi.getIssue(req.params.issueId).then((findIssue) => {
    res.send(findIssue)
  })
})

//UPDATE ISSUE
issueRouter.put('/:issueId', (req, res) => {
  issueApi.updateIssue(req.params.issueId, req.body).then(() => {
    res.send('issue updated')
  })
})

//UPDATE ISSUE
issueRouter.get('/:issueId/edit', (req, res) => {
  // edit one issue, delete buttton on same page
  issueApi.getIssue(req.params.issueId)
    .then((issue) => {
      res.render('issues/editIssue', { issue })
    })
})


//CREATE ISSUE
issueRouter.post('/', (req, res) => {
  console.log(req.body)
  issueApi.addNewIssue(req.body).then((newIssue) => {
    res.send(newIssue)
  })
})


//DELETE ISSUE
issueRouter.delete('/:issueId', (req, res) => {
  issueApi.deleteIssue(req.params.issueId).then((isssueDeleted) => {
    res.send(isssueDeleted)
  })
})

module.exports = {
  issueRouter
}