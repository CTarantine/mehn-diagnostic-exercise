const mongoose = require('./connection.js');

const IssueSchema = new mongoose.Schema({
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
    return IssueCollection.findById(IssueId)
}

const addNewIssue = (NewIssue) => {
    return IssueCollection.insertMany([NewIssue])
}

const updateIssue = (IssueId,updatedIssue) => {
    return IssueCollection.findByIdAndUpdate(IssueId,updatedIssue)
}

const deleteIssue = (id) => {
    return IssueCollection.findOneAndDelete({ _id: id })
}

module.exports = {
    getAllIssues,
    getIssue,
    addNewIssue,
    updateIssue,
    deleteIssue
}
