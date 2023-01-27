import { StaticMap } from "react-kakao-maps-sdk";
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
  width: 360px;
  height: 360px;
`;

export default Location;
