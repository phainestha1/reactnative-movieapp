import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";
import Poster from "./Poster";

interface SlideProps {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  overview: string;
}

const Slide: React.FC<SlideProps> = ({
  backdrop_path,
  poster_path,
  original_title,
  vote_average,
  overview,
}) => {
  const isDark = useColorScheme() === "dark";
  return (
    <View style={{ flex: 1 }}>
      <BgImg
        style={StyleSheet.absoluteFill}
        source={{ uri: makeImgPath(backdrop_path) }}
      />
      <BlurView
        intensity={80}
        tint={isDark ? "dark" : "light"}
        style={StyleSheet.absoluteFill}
      >
        <Wrapper>
          <Poster path={poster_path} />
          <Column>
            <Title isDark={isDark}>{original_title}</Title>
            {vote_average > 0 ? (
              <Votes isDark={isDark}>⭐️ {vote_average}/10</Votes>
            ) : null}
            <Overview isDark={isDark}>{overview.slice(0, 90)}...</Overview>
          </Column>
        </Wrapper>
      </BlurView>
    </View>
  );
};

const BgImg = styled.Image``;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Column = styled.View`
  width: 55%;
  margin-left: 15px;
`;
const Title = styled.Text<{ isDark: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isDark ? "#fff" : props.theme.textColor)};
`;
const Overview = styled.Text<{ isDark: boolean }>`
  font-size: 13px;
  font-weight: 400;
  margin-top: 10px;
  color: ${(props) => (props.isDark ? "#aaa" : "#181818")};
`;
const Votes = styled(Overview)`
  margin-top: 5px;
  font-size: 12px;
`;

export default Slide;
