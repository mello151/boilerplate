
module.exports = (plop) => {
    var OVERWRITE_ALL = /(\s|\S|$)*/;
    var actions = [];

    plop.setGenerator("framework", {
        description: "Select the framework",
        prompts: [
            {
                type: "list",
                name: "whichFramework",
                message: "Which framework are you using? Pick React!",
                choices: ["react", "ng1", "ng2"]
            }
        ],
        actions: function (data) {
            actions.push({
                type: 'modify',
                path: "_plopfile.js",
                templateFile: `plop/_${data.whichFramework}_plopfile.js.hbs`,
                pattern: OVERWRITE_ALL,
            });

            return actions;
        }

    });

};