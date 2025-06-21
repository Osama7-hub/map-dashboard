import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";


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
        <div className="p-1 w-full h-full">
            <div className="bg-white shadow-xl border border-gray-200 rounded-2xl w-full h-full overflow-hidden">
                <MapContainer
                    center={[24.7136, 46.6753]}
                    zoom={6}
                    scrollWheelZoom={true}
                    className="w-full h-full"
                >
                    {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                    {/* <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    /> */}

                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                    />

                    {selectedLocation && <FlyToLocation position={selectedLocation.position} />}
                    {locations.map((loc) => (
                        <div key={loc.id}>
                            <Marker key={loc.id} position={loc.position} icon={customIcon}>
                                {/* <Popup>{loc.name}</Popup> */}
                                <Popup>
                                    <div className="space-y-1 text-sm">
                                        <div className="font-bold">{loc.name}</div>
                                        <div>👁️ Visits: {loc.chartData?.visits?.reduce((a, b) => a + b, 0) || 0}</div>
                                        <div>⚡ Power: {loc.chartData?.resources?.[1] || 0}%</div>
                                    </div>
                                </Popup>

                            </Marker>

                            {/* دائرة شفافة حول الموقع */}
                            <Circle
                                center={loc.position}
                                radius={20000}
                                pathOptions={{
                                    color: "#3b82f6",
                                    fillColor: "#3b82f6",
                                    fillOpacity: 0.2,
                                    weight: 1,
                                }}
                            />
                        </div>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}

