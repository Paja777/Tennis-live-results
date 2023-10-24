import { Box, Typography } from "@mui/material"


const RankBox = () => {
  return (
    <Box sx={{ width: 220, maxHeight: 450 }}>
        <Typography
          variant="h2"
          sx={{
            ml: 13,
            my: "40%",
            mt: "50%",
            mr: "10%",
            color: "text.secondary",
          }}
        >
          1
        </Typography>
      </Box>
  )
}

export default RankBox