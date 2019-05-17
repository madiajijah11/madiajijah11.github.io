(function () {
    'use strict';

    const attributes = {
        username: 'data-username',
        maxRepos: 'data-max-repos',
        sortBy: 'data-sort-by',
        headerText: 'data-header-text'
    };

    window.widgetGenerator = {
        regenerate: regenerate
    };

    function regenerate(options) {
        const attributesTemplate = Object.keys(options)
            .map(option => {
                const attribute = attributes[option];
                const value = options[option];
                if (!attribute) {
                    return '';
                }
                return `\n\t${attribute}="${value}"`;
            })
            .join('');

        return `<div id="github-card" ${attributesTemplate}>\n</div>`;
    }
})();
(function (GitHubCard, widgetGenerator) {
    "use strict";

  // Generating new widget from user input
    document.addEventListener('DOMContentLoaded', function() {
        var options = {
            template: '#github-card-demo',
            sortBy: 'stars', // possible: 'stars', 'updateTime'
            headerText: 'Most starred repositories',
            maxRepos: 5
        };

        var widget = new GitHubCard(options);
        widget.init();
        regenerate(options);

        initSortingControl(options, refreshWidget);
        initRepositoriesControl(options, refreshWidget);
        initUserControl(options, initWidget);

        function initWidget(options) {
            widget = new GitHubCard(options);
            widget.init();
            regenerate(options);
        }

        function refreshWidget(updatedOptions) {
            widget.refresh(updatedOptions);
            regenerate(updatedOptions);
        }

        function regenerate(updatedOptions) {
            var textarea = document.getElementById("install-code");
            textarea.value = widgetGenerator.regenerate(updatedOptions);
        }
    });

    // Sort repository acording to
    // radio inputs on website
    function initSortingControl(options, refreshWidget) {
        var $sortingRadios = document.querySelectorAll('.choose-repo-sorting label');

        // sort by update time
        $sortingRadios[0].addEventListener('click', function (element) {
            element.target.classList.add('active');
            $sortingRadios[1].classList.remove('active');

            options.sortBy = 'updateTime';
            options.headerText = element.target.textContent + ' repositories';

            refreshWidget(options);
        });

        // sort by starrgazers
        $sortingRadios[1].addEventListener('click', function (element) {
            element.target.classList.add('active');
            $sortingRadios[0].classList.remove('active');

            options.sortBy = 'stars';
            options.headerText = element.target.textContent + ' repositories';

            refreshWidget(options);
        });
    }

    // Manipulating the number of repositories
    function initRepositoriesControl(options, refreshWidget) {
        var $inputNumber = document.getElementById('gh-reposNum');

        $inputNumber.onchange = function() {
            options.maxRepos = $inputNumber.value;

            refreshWidget(options);
        };
    }

    // Creating brand new widget instance
    // for user that we type in input
    function initUserControl(options, fn) {
        var $input = document.getElementById('gh-uname'),
            $submit = document.getElementById('gh-uname-submit');

        $submit.addEventListener('click', function (element) {
            options.username = $input.value;
            fn(options);

            element.preventDefault();
        });
    }
})(window.GitHubCard, window.widgetGenerator);