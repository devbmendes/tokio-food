import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: 'auto',
    height: '400px'
};

const center = {
    lat: 41.14961,
    lng: -8.61099
};

export default function Map() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyDO9NEtk8awubL1QlNWG6bVLHj5vsiWYz0">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}
