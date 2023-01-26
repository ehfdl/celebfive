/*global kakao*/
import React, { useEffect } from "react";
import { MapMarker, Map, StaticMap } from "react-kakao-maps-sdk";
import styled from "styled-components";

interface props {
  longitude: number;
  latitude: number;
  marker: string;
}
const Location = (props: props) => {
  const { longitude, latitude, marker } = props;
  console.log();
  return (
    <Maps // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: latitude,
        lng: longitude,
      }}
      marker={{
        position: { lat: latitude, lng: longitude },
        text: marker,
      }}
      level={5} // 지도의 확대 레벨
    />
  );
};

const Maps = styled(StaticMap)`
  width: 100%;
  height: 100%;
`;
export default Location;

{
  /* <Maps center={{ lat: latitude, lng: longitude }}>
<MapMarker position={{ lat: latitude, lng: longitude }}>
  <div style={{ color: "#000" }}>{marker}</div>
</MapMarker>
</Maps> */
}
