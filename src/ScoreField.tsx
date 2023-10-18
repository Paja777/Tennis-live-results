import { Divider, Stack, Typography } from "@mui/material";
import { useAppSelector } from "./store/configureStore";

const ScoreField = () => {
  const { finishedSets } = useAppSelector((state) => state.mainMatch);
  console.log(finishedSets);
  return (
    <Stack
      sx={{
        height: "35vh",
        justifyContent: "center",
        alignItems: "center",
        backgrounColor: "blue",
        mt: -3,
      }}
    >
      <Stack
        width="75%"
        direction="row"
        sx={{
          backgroundColor: "rgb(36, 134, 191)",
          borderBottom: "1px solid white",
          borderRadius: "15px",
          color: "white",
          justifyContent: "center",
        }}
        divider={<Divider orientation="horizontal" />}
      >
        <Typography variant="h5" sx={{ px: 1, py: 1 }}>
          {finishedSets ? finishedSets.p1s1 : "0"}
        </Typography>
        <Typography variant="h5" sx={{ px: 5, py: 1 }}>
          {finishedSets ? finishedSets.p2s1 : "0"}
        </Typography>
      </Stack>
      <Stack
        width="60%"
        direction="row"
        sx={{
          backgroundColor: "rgb(36, 134, 191)",
          borderBottom: "1px solid white",
          borderRadius: "15px",
          color: "white",
          justifyContent: "center",
        }}
        divider={<Divider orientation="horizontal" />}
      >
        <Typography variant="h5" sx={{ px: 1, py: 1 }}>
          {finishedSets ? finishedSets.p1s2 : "0"}
        </Typography>
        <Typography variant="h5" sx={{ px: 5, py: 1 }}>
          {finishedSets ? finishedSets.p2s2 : "0"}
        </Typography>
      </Stack>
      <Stack
        width="40%"
        direction="row"
        sx={{
          backgroundColor: "rgb(36, 134, 191)",
          borderRadius: "15px",
          color: "white",
          justifyContent: "center",
        }}
        divider={<Divider orientation="horizontal" />}
      >
        <Typography variant="h5" sx={{ px: 1, py: 1 }}>
          {finishedSets.p1s3 ? finishedSets.p1s3 : "0"}
        </Typography>
        <Typography variant="h5" sx={{ px: 5, py: 1 }}>
          {finishedSets.p2s3 ? finishedSets.p2s3 : "0"}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ScoreField;
