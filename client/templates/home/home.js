/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.home.events({
    'click button ':function(e){

        Report.insert({sessionId: Meteor.default_connection._lastSessionId, type: e.currentTarget.id});


    }

});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.home.helpers({
    'test':function(){
        return 'butu';
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
