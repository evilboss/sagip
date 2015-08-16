/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.home.events({
    'click div.card ': function (e) {

        Report.insert(
            {
                sessionId: Meteor.default_connection._lastSessionId,
                type: e.currentTarget.id
            });


    }

});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.home.helpers({
    'loc': function () {
        return Geolocation.currentLocation();
    },
    'location': function () {
        return Session.get('location');
    }

});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.home.onCreated(function () {
});

Template.home.onRendered(function () {


});

Template.home.onDestroyed(function () {
});
