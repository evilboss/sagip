Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    action: 'action',
    where: 'client'
});
Router.route('/Reports', {
    name: 'Reports',
    controller: 'ReportsController',
    action: 'action',
    where: 'client'
});