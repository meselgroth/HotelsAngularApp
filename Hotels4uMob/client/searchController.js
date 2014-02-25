var hotels4u = hotels4u || {};

hotels4u.controllers = function () {
    searchController = function ($scope) {
        $scope.hotels = [
            { name: "Hotel Sharm El Sheik", description: "great hotel" },
            { name: "Hotel California", description: "check out any time..." }
        ];
    };

    return {
        searchController: searchController
    };
};

