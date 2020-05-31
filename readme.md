# Nodejs Folder Structure
   * /models contains all your ORM models (called Schemas in mongoose)
   * /views contains your view-templates (using any templating language supported in express)
   * /public contains all static content (images, style-sheets, client-side JavaScript)
        * /assets/images contains image files
        * /assets/pdf contains static pdf files
        * /css contains style sheets (or compiled output by a css engine)
        * /js contains client side JavaScript
   * /controllers contain all your express routes, separated by module/area of your application (note: when using the bootstrapping functionality of express, this folder is called /routes)
