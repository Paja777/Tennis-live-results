import { Box, Slide, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect, useRef, useState } from "react";

const TextSlider = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [slider, setSlider] = useState(true);
  const [showSlider, setShowSlider] = useState(true);

  const handleShowSlider = () => {
    setShowSlider(false);

    const handleSlider = () => {
      setShowSlider(true);
    };
    handleSlider();
  };

  useEffect(() => {
    const intervalId = setInterval(handleShowSlider, 8000); // 2000 milliseconds (2 seconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "9vh",
        justifyContent: "end",
        backgroundColor: "rgb(179, 237, 97)",
        position: "sticky",
        top: 91,
        zIndex: 124,
        pt: 2,
      }}
    >
      {showSlider && (
        <Slide
          in={true}
          container={containerRef.current}
          direction="right"
          timeout={8000}
        >
          <Typography
            variant="h4"
            fontWeight="bolder"
            color="white"
            sx={{ ml: "99%", mr: "-100%" }}
          >
            <CircleIcon sx={{ color: "red", fontSize: "24px" }} />
            LIVE MATCH NADAL VS DJOKOVIC
          </Typography>
        </Slide>
      )}
    </Box>
  );
};

export default TextSlider;
