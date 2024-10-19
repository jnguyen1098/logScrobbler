import { defineAsyncComponent } from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// This function takes an app instance and registers all global components
export default function registerGlobalComponents(app) {
  const requireComponent = require.context(
    '.', // The relative path of the components folder
    true, // Whether or not to look in subfolders
    /[A-Za-z]\w+\.(vue|js)$/ // The regular expression used to match base component filenames
  );

  requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName);

    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        // Strip the leading `./` and extension from the filename
        fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
      )
    );

    // Register component globally using the app instance
    app.component(
      componentName,
      componentConfig.default || componentConfig
    );
  });
}

