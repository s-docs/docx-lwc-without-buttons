# Generating a DOCX file using SDOCS without using the SDoc button

### Demo Video:

[Demo Video Link]("https://www.loom.com/share/028269b61b54496389c93eb529dae10e?sid=3a5a59e7-39f5-427c-acc6-7f46e7738a7a")

## Key components

### `createDocumentLWC`

This is the component that can be dropped into the lightning record page. This will inturn open a modal window that will do the actual document generation.

### `sDocsCreateModal`

Used by the `createDocumentLWC` component. This component constructs a URL and iframes the URL into the modal window. For testing purposes the window is setup to be visible but this can be changed to be a hidden window.

The name of the template is hardcoded in this example and need to be modified. Alternatively the template name can be passed in from `createDocumentLWC` as a parameter similar to how the `recordId` and `objectApiName` are passed to the component. 

### `DocGenComplete.page` Visualforce page

This is the page S-Docs will redirect to after the document generation is complete. This can be modified to let the user know what to do after generation. You can also enhance this to automatically close the modal window after generation is complete. 