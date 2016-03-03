# M3 React Style Guide

## Separation of Concerns

### Presentational vs. Container Components (a.k.a. Smart vs. Dumb)

[This post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) by Mr. Redux neatly illustrates the difference between presentational and container components.

* Splitting components in this way can improve the ability to identify chunks of reusable code.

* By creating presentational components we can better isolate styles that are specific to the component, which in turn will allow us to use CSS Modules to create more robust CSS.

## Application Folder Structure

* Create a folder per component. This allows us to keep the component and any associated stylesheets or tests grouped together within this folder. This allows developers to easily modify tiny chunks of the codebase when working on a particular problem.

* Presentational components live in the `/components` directory within an app.

* Container components live in the `/containers` directory within an app!

## Components

* [No classes](https://github.com/joshburgess/not-awesome-es6-classes).

### PropTypes

* A summary of all PropTypes and modifiers can be found [here](https://facebook.github.io/react/docs/reusable-components.html#prop-validation).

* All props that a component can use should be documented in the components propTypes. ESLint will enforce this. *This allows developers to easily understand what is required by a component without having to read through all the code.*

* Props used by child components do not need to be declared, as long as they are declared **where they are used** on the child. For example, if a component passes an object `foo` to a child, which uses the property `bar` from it, as long as the child declares that it needs `bar` then it is sufficient for the parent to declare `foo: PropTypes.object`.

* Children should be declared as a propType.

## CSS
