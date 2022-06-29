import {
  Box,
  Button,
  Chip,
  CssBaseline,
  Stack,
  Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useMovies } from "../hooks/useMovies";

export const Home = () => {
  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) return <p>Loading...</p>;

  console.log(nowPlaying);

  const uri = `https://image.tmdb.org/t/p/original${nowPlaying[0].backdrop_path}`;
  console.log(uri);
  return (
    <Box>
      <Box
        style={{
          height: "75vh",
          backgroundImage: `url(${uri})`,
          backgroundSize: "cover",
          boxShadow: "550px -240px 70px 0px rgba(0, 0, 0, 0.6) inset",
        }}
      >
        <CssBaseline />

        <Chip
          label="• Live"
          color="error"
          variant="outlined"
          style={{ marginTop: 15, fontSize: 15 }}
        />

        <Typography variant="h2" style={{ color: "white" }}>
          {nowPlaying[0].title}
        </Typography>
        <Typography style={{ color: "white" }}>
          {nowPlaying[0].overview}
        </Typography>

        {/* <Stack> */}
        <Button
          variant="contained"
          //   color="error"
          style={{ backgroundColor: "#fc03c6" }}
        >
          Watch Now
        </Button>
        <Button style={{ border: 5, borderColor: "white" }}>
          <AddOutlinedIcon />
        </Button>
        {/* </Stack> */}
      </Box>
      <Box
        style={{
          height: "25vh",
          backgroundColor: "black",
        }}
      >
        {/* <CssBaseline /> */}
      </Box>
    </Box>
  );
};
