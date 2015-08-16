/*****************************************************************************/
/* Reports: Event Handlers */
/*****************************************************************************/
Template.Reports.events({
});

/*****************************************************************************/
/* Reports: Helpers */
/*****************************************************************************/
Template.Reports.helpers({
    'report':function(){
        return Report.find();
    },
    'hasContent':function(){
        return Report.find().count();
    }
});

/*****************************************************************************/
/* Reports: Lifecycle Hooks */
/*****************************************************************************/
Template.Reports.onCreated(function () {
});

Template.Reports.onRendered(function () {
});

Template.Reports.onDestroyed(function () {
});
