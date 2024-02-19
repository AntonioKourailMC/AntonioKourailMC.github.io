//Asignment_1-Coding, customization, and publishing
//Antonio_Kourail_000829964, 25/02/2024
	
	//Gets all of the functions used for this map from the ArcGIS javascript package
    require(["esri/config", "esri/Map", "esri/views/MapView","esri/widgets/Sketch","esri/layers/GraphicsLayer","esri/widgets/Home"], function(esriConfig, Map, MapView,Sketch,GraphicsLayer,Home) {

	const graphicsLayer = new GraphicsLayer(); //Defines the graphicsLayer

		//Defines the map
        const map = new Map({
          basemap: "arcgis/topographic", //Basemap of the map
		  layers: [graphicsLayer] //Layers of the map
        });
		
		//Displays the map on the webpage
       const view = new MapView({
         map: map,
         center: [-79.880804, 43.274831], //When the map is first opened, its starting location is Hamilton, Ontario Canada
          zoom: 12, //The inital zoom of the map
          container: "viewDiv" //Displays the map on the webpage
        });
		
		//Adds the home button on the map
		const homeBtn = new Home({
          view: view
        });
		
		//Adds the sketch widget on the map
		 view.when(() => {
        const sketch = new Sketch({
          layer: graphicsLayer,
          view: view,
          creationMode: "update"
        });
		
		 view.ui.add(sketch, "top-right"); //Fixs the position of the sketch width to the top right of the map
		 view.ui.add(homeBtn, "top-left"); //Fixs the position of the home width to the top left of the map
		       });  
     });


    
