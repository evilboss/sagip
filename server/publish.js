Meteor.publish("report", function (index) {
    return Report.find();
}, {
    url: "api/report",
    httpMethod: "get"
});
HTTP.post("api/report", {

}, function (err, res) {
    console.log(res.data); // 5
});