Meteor.publish("report", function (index) {
    return Report.find();
}, {
    url: "api/report",
    httpMethod: "get"
});
