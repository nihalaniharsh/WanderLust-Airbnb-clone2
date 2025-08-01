 mapboxgl.accessToken = mapToken;

        const map = new mapboxgl.Map({
        container: "map", // container's id or the HTML element to render the map
        style: "mapbox://styles/mapbox/streets-v12",
        center: [77.209, 28.6139], // starting position [lng, lat]
        zoom: 9, // starting zoom
        });
    
      console.log(coordinates);


        // const marker = new mapboxgl.Marker()
        // .setLngLat([12.554729, 55.70651])  //Lisiting geometry .coordinates
        // .addTo(map); 