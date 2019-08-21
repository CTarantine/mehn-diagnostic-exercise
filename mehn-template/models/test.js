const issuesApi = require('./issue.js')

issuesApi.addNewIssue({ description: "", createdAt: "", status: "", priority: "" }).then((newMadeIssue) => {
    console.log(newMadeIssue)
})

issuesApi.getAllIssues().then((allIssuesInDB) => {
    console.log(allIssuesInDB)
})

// issuesApi.getIssue(_id).then((foundIssue) => {
//     console.log("single issue found")
//     console.log(foundIssue);
// })

// issuesApi.deleteIssue(_id).then((noIssue) => {
//     console.log("Deleted issue")
//     console.log(noIssue)
// })