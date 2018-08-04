# Query-Cloud-API (QCApi) for SuccessFactors OData APIs (QCA for SF)
QCA is a query builder for SuccessFactors OData APIs. Although it's a generic query builder internally, QCA for SF will have a "citizen integration" flavor to it to let power users get their stuff done without getting into technical nitigrities. 
Not so long ago, there's used to be fabulous set of tools called SFAPI tools.
https://sfapitoolsflms.hana.ondemand.com/SFIntegration/sfapitools.jsp.
But, RIP SFAPITools, long live SFIAPItools. Welcome QCA ;)

### Why don't we just use POSTMAN?
POSTMAN is a ReST API client. ODATA is also ReSTful if you just consider the operational part. But, OData is much more than that when you consider the metadata.xml file. The metadata file is an EDMX document that contains a complete description of the feeds, types, properties, relationships exposed by the service in EDM.

### How do I get it?
Download the latest version from here
https://github.com/intelligrate/query-cloud-api/releases

### How do I use it?
Once installed successfully, this's the first screen.Pretty self-explanatory - ain't it?
![alt tag](https://user-images.githubusercontent.com/5966051/43656410-9a848fa0-9752-11e8-9437-8a31401761eb.png)

Now, we get to the screen where you can choose the OData entity. 
![alt tag](https://user-images.githubusercontent.com/5966051/43656783-fe236472-9753-11e8-9f27-433f2aa99716.png)

Here comes the juicy part - build the query
![alt tag](https://user-images.githubusercontent.com/5966051/43656877-5019436e-9754-11e8-8ed7-4455bdce65fc.png)
color coding differentiates the nav from the normal fields.
![alt tag](https://user-images.githubusercontent.com/5966051/43656902-70629a62-9754-11e8-84e8-231df1db6493.png)

Fire in the hole!
![alt tag](https://user-images.githubusercontent.com/5966051/43656987-b13cf3ca-9754-11e8-9101-44121c93342c.png)

Now, drill down further
![alt tag](https://user-images.githubusercontent.com/5966051/43657088-05e89596-9755-11e8-8f1f-249d93213975.png)

### Now the essentials:
1. SAP and SuccessFactors are trademarks of SAP SE. I claim no ownership over their trademarks or their products.
2. Query Cloud API (QCA) is not from SAP. I created this only to scratch my itch. But, because *Valar Dohaeris*, I open sourced it.
3. You're free to use this software and use it as long as you abide by GNU GPL V3 and my EULA (https://github.com/intelligrate/query-cloud-api/blob/master/EULA.md).

### Thanks to:
Electron, NodeJs,JQuery,OData lib for JS and umpteen number of other open sources libraries that used for development, testing and publishing the app. 

### Bugs and feature requests:
https://github.com/intelligrate/query-cloud-api/issues/new
