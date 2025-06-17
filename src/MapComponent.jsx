import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";

function FlyToLocation({ position }) {
    const map = useMap();

    useEffect(() => {
        if (position) {
            map.flyTo(position, 10, {
                duration: 2, // ثانيتين
            });
        }
    }, [position, map]);

    return null;
}

// أيقونة مخصصة
const customIcon = new L.Icon({
    iconUrl: "/custom-marker.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});


export default function MapComponent({ locations, selectedLocation }) {
    return (
        <MapContainer
            center={[24.7136, 46.6753]}
            zoom={6}
            scrollWheelZoom={true}
            className="rounded-lg w-full h-full"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {selectedLocation && <FlyToLocation position={selectedLocation.position} />}

            {locations.map((loc) => (
                <Marker key={loc.id} position={loc.position} icon={customIcon}>
                    <Popup>{loc.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
