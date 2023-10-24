import { Box, Slide, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TextS from "./TextS";
import { useAppSelector } from "./store/configureStore";

const TextSlider = () => {
  const containerRef = useRef<HTMLElement>(null);
  const {textSliderColor} = useAppSelector(state => state.mainMatch);
  const [showSlider, setShowSlider] = useState(true);
  const [showSlider2, setShowSlider2] = useState(false);

  const turnOfSlider1 = () => {
    setShowSlider(false);
    setShowSlider2(true);
  };

  const turnOnSlider2 = () => {
    setShowSlider2(false);
    setShowSlider(true);
  };

  useEffect(() => {
    const intervalId = setInterval(turnOfSlider1, 13600); // 2000 milliseconds (2 seconds)
    const interval = setInterval(turnOnSlider2, 27200); // 2000 milliseconds (2 seconds)

    return () => {
      clearInterval(intervalId);
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "8vh",
        backgroundColor: textSliderColor,
        position: "sticky",
        top: 91,
        zIndex: 124,
        pt: 2,
      }}
    >
      <Stack direction="row">
        {showSlider && (
          <Slide
            in={true}
            container={containerRef.current}
            direction="right"
            timeout={14000}
          >
            <Stack direction="row" sx={{ ml: "99%", mr: "-220%" }}>
              <TextS />
            </Stack>
          </Slide>
        )}
        {showSlider2 && (
          <Slide
            in={true}
            container={containerRef.current}
            direction="right"
            timeout={14000}
          >
            <Stack direction="row" sx={{ ml: "99%", mr: "-220%" }}>
              <TextS />
            </Stack>
          </Slide>
        )}
      </Stack>
    </Box>
  );
};

export default TextSlider;
