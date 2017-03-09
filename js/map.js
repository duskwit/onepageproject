function initMap() {
		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {
				          center: {lat: 41.398390, lng: 2.1738714},
				          zoom: 15,
				          minZoom:9,
				          maxZoom:20,
				          scrollwheel: false,

				          styles: [
				            {
				              featureType: 'all',
				              stylers: [
				                { saturation: -100 }
				              ]
				            },{
				              featureType: 'road.arterial',
				              elementType: 'geometry',
				              stylers: [
				                { hue: '#183d45' },
				                { saturation: 50 }
				              ]
				            },{
				              featureType: 'poi.business',
				              elementType: 'labels',
				              stylers: [
				                { visibility: 'off' }
				              ]
	            		}
	          			]
				     });

				    var marker = new google.maps.Marker({
		    			position: map.getCenter(),
		    			animation:google.maps.Animation.BOUNCE,
		    			icon: 'img/joomla1.png',
		    			draggable: false,
		    			map: map
		 				});
				    }
					function initialize() {

				      var stylesArray = [
				  	{	featureType: 'road',
				    	elementType: 'geometry',
				    	stylers: [
				     		 {hue: "#00d4ff"},
				      		 {saturation: '60'},
				     		 {lightness: '10'}]
				  	},
				  	{
					    featureType: 'road',
					    elementType: 'geometry',
					    stylers: [
					    {vivibility: "simplified"}]
					  	}
						];
					}

				