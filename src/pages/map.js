import Map from 'react-map-gl'

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [174.075226, -39.055626] },
            properties: {
                description: 'Sample Person'
            }
        }
    ]
}

const layerStyle = {
    id: 'places',
    type: 'circle',
    paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
    }
}

// for handlers see the following: https://visgl.github.io/react-map-gl/docs/api-reference/map#onclick

export default function Map() {
    return (
        <div>
            <Map
                initialViewState={{
                    longitude: 174.075226,
                    latitude: -39.055626,
                    zoom: 14
                }}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onClick={(e) => console.log({ e })}
                interactiveLayerIds={["'places"]}
            >
                <Source id="my-data" type="geojson" data={geojson}>
                    <Layer {...layerStyle} />
                </Source>
            </Map>
        </div>
    )
}
