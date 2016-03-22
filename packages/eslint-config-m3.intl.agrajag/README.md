# eslint-config-m3.intl.agrajag

This is a npm module containing linting settings for ES5, ES6 & Legacy. 

    npm install eslint-config-m3.intl.agrajag
    
To enable Linting support in Atom you need to install the following packages:

    apm install linter
    apm install linter-eslint
    
Then create a file called ".eslintrc.js" in your source folder.

For React & ES6

    module.exports = {
      extends: 'm3.intl.agrajag',
    };
    
For ES5

    module.exports = {
      extends: 'm3.intl.agrajag/legacy',
    };

For ES6 only
    
    module.exports = {
      extends: 'm3.intl.agrajag/base',
    };
    
These files can be nested, for example you may only want to have a React one within the folder containing React scripts!
