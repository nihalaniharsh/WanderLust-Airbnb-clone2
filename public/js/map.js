 mapboxgl.accessToken = mapToken;

        const map = new mapboxgl.Map({
        container: "map", // container's id or the HTML element to render the map
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom: 9, // starting zoom
        });
    
   


       const marker = new mapboxgl.Marker()
       .setLngLat(listing.geometry.coordinates)//listing .geometry.coordinates 
        .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
          `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`   
        ) 
      )      
         .addTo(map);