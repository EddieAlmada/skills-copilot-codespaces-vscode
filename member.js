function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modlues/skills/views/member.html',
        controller: 'SkillMemeberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}