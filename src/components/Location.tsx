/*global kakao*/
import React, { useEffect } from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

interface props {
  longitude: number;
  latitude: number;
  marker: string;
}
const Location = (props: props) => {
  const { longitude, latitude, marker } = props;
  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "360px", height: "360px" }}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}>
        <div style={{ color: "#000" }}>{marker}</div>
      </MapMarker>
    </Map>
  );
};

export default Location;
