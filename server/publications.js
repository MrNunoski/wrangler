// Meteor.publish('tickets', function() {
//   var currentMilestone = Milestones.findOne({current: true});
//   if (currentMilestone) {
//     fixVersionName = currentMilestone.name;
//   }
//   else {
//     return Tickets.findOne();
//   }

//   return Tickets.find({$or: [
//   { "fixVersion.name": fixVersionName, statusName: {$in: ["Done", "Verified on Dev"]} },
//     {isRegression: true}
//   ]});

//   // return Tickets.find({jiraId: {$nin: [null, undefined]}});
// });

// Meteor.publish('testscripts', function(ticketJiraId) {
//   return Testscripts.find({ ticketJiraId: ticketJiraId }, {sort: {testscriptNum: 1}});
// });

// Meteor.publish('milestones', function() {
//   return Milestones.find();
// });

// Meteor.publish('stream', function() {
//   return Stream.find();
// });

// Meteor.publish('userData', function() {
//   return Meteor.users.find({}, {fields: {username: 1, isAdmin: 1}});
// });

// Meteor.publish('testingAssignments', function() {
//   return TestingAssignments.find();
// });
