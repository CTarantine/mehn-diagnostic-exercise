const mongoose = require('mongoose');

IssueSchema = new mongoose.Schema({
    description: String,
    createdAt: Date,
    status: String,
    priority: String
})

const IssueCollection = mongoose.model('Issue', IssueSchema)

const getAllIssues = () =>{
    return IssueCollection.find()
}
const getIssue = (IssueId) => {
    return IssueCollection.findById(id)
}
const addNewIssue = (NewIssue) => {
    return IssueCollection.create({
        description: "",
        createdAt: new Date(),
        status: "",
        priority: ""
      })
}
const updateIssue = (IssueId,updatedIssue) => {
    return 
}
const deleteIssue = (IssueId) => {
    return IssueCollection.findOneAndDelete({ _id: id })
}

module.exports = {
    getAllIssues,
    getIssue,
    addNewIssue,
    updateIssue,
    deleteIssue
}
