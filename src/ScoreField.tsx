import { Box, Divider, Stack, Typography } from "@mui/material";

interface Props {
  finishedSets:
    | {
        p1s1: string;
        p2s1: string;
        p1s2: string | undefined;
        p2s2: string | undefined;
        p1s3: string | undefined;
        p2s3: string | undefined;
        p1sum: string | undefined;
        p2sum: string | undefined;
      }
    | undefined;
}

const ScoreField = ({ finishedSets }: Props) => {

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
          borderRadius: '15px',
          color: "white",
          justifyContent: "center",
        }}
        divider={<Divider orientation="horizontal" />}
      >
        <Typography variant="h5" sx={{ px: 1, py: 1 }}>
          {finishedSets ? finishedSets.p1s1 : "6"}
        </Typography>
        <Typography variant="h5" sx={{ px: 5, py: 1 }}>
          {finishedSets ? finishedSets.p2s1 : "6"}
        </Typography>
      </Stack>
      <Stack
        width="60%"
        direction="row"
        sx={{
          backgroundColor: "rgb(36, 134, 191)",
          borderBottom: "1px solid white",
          borderRadius: '15px',
          color: "white",
          justifyContent: "center",
        }}
        divider={<Divider orientation="horizontal" />}
      >
        <Typography variant="h5" sx={{ px: 1, py: 1 }}>
          {finishedSets ? finishedSets.p1s2 : "7"}
        </Typography>
        <Typography variant="h5" sx={{ px: 5, py: 1 }}>
          {finishedSets ? finishedSets.p2s2 : "5"}
        </Typography>
      </Stack>
      <Stack
        width="40%"
        direction="row"
        sx={{
          backgroundColor: "rgb(36, 134, 191)",
          borderRadius: '15px',
          color: "white",
          justifyContent: "center",
        }}
        divider={<Divider orientation="horizontal" />}
      >
        <Typography variant="h5" sx={{ px: 1, py: 1 }}>
          {finishedSets ? finishedSets.p1s3 : "3"}
        </Typography>
        <Typography variant="h5" sx={{ px: 5, py: 1 }}>
          {finishedSets ? finishedSets.p2s3 : "1"}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ScoreField;
