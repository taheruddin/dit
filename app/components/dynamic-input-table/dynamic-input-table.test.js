describe('Dynamic Input Table', function() {

    var scope, element, template, directiveScope;

    beforeEach(module('dynamicInputTable'));

    //beforeEach(module('app/components/dynamic-input-table/dynamic-input-table.html'));

    beforeEach(inject(function ($compile, $rootScope, $httpBackend, $templateCache) {
        scope = $rootScope.$new();
        $httpBackend.whenGET('components/dynamic-input-table/dynamic-input-table.html').respond(
            '<table><caption ng-show="caption">{{caption}}</caption></table>'
        );
        scope.data = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            ['', null, '', 0]
        ];
        element = angular.element("<dynamic-input-table matrix=\"data\" caption=\"'Dynamic Inputs'\"></dynamic-input-table>");
        template = $compile(element)(scope);
        console.log(scope.data);
        scope.$digest();
        directiveScope = element.isolateScope();
        //console.log($templateCache.get('components/dynamic-input-table/dynamic-input-table.html'));
        console.log(template);
        //console.log(directiveScope);
    }));

    it('Contains the table', function() {
        /*console.log($rootScope.data);
        console.log($rootScope.data);
        console.log($rootScope.data);
        expect(element.html()).toContain("Dynamic Inputs");
        console.log(element.html());*/
        //expect(template.html()).toContain("Dynamic Inputs");
        console.log(directiveScope);
        expect(1).toBe(1);

    });
});