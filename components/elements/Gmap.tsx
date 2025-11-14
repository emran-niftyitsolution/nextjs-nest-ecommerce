'use client';

import { useEffect, useRef, useState } from 'react';
import "leaflet/dist/leaflet.css";

const Gmap: React.FC = () => {
    const mapRef = useRef<any>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Only run on client side
        setIsClient(true);

        // Cleanup function to remove map instance
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (!isClient || mapRef.current) return;

        // Dynamically import Leaflet only on client side
        const initMap = async () => {
            const L = (await import('leaflet')).default;

            // Create map instance
            mapRef.current = L.map('leaflet-map', {
                center: [51.0, 19.0],
                zoom: 4,
                maxZoom: 18,
            });

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapRef.current);
        };

        initMap();

        // Cleanup on unmount
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [isClient]);

    // Don't render until client side
    if (!isClient) {
        return (
            <div 
                id="leaflet-map" 
                className="markercluster-map" 
                style={{ height: '400px', width: '100%', background: '#f0f0f0' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    Loading map...
                </div>
            </div>
        );
    }

    return (
        <div 
            id="leaflet-map" 
            className="markercluster-map" 
            style={{ height: '400px', width: '100%' }}
        />
    );
};

export default Gmap;

