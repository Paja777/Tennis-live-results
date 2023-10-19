import { createSlice } from "@reduxjs/toolkit";

interface mainMatchState {
  onServe: number;
  points: {
    player1: any;
    player2: any;
  };
  finishedSets: {
    p1s1: any;
    p2s1: any;
    p1s2?: any;
    p2s2?: any;
    p1s3?: any;
    p2s3?: any;
    p1sum: number;
    p2sum: number;
  };
  name: {
    player1: any;
    player2: any;
  };
  duration: string;
  image?: { player1: string;  player2: string; };
  rank?: { player1: any; player2: any };
}

const initialState: mainMatchState = {
  onServe: 1, // Default value for onServe
  points: {
    player1: 0,
    player2: 0,
  },
  finishedSets: {
    p1s1: 0,
    p2s1: 0,
    p1s2: null,
    p2s2: null,
    p1s3: null,
    p2s3: null,
    p1sum: 0, // Default value for p1sum
    p2sum: 0, // Default value for p2sum
  },
  name: {
    player1: 'Player 1',
    player2: 'Player 2',
  },
  duration: "", // Default value for duration
  image: {
    player1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRXu0dxIvbb63TkywEE7hYpH22vbV5woEGg&usqp=CAU", // Default value for player1 in the image object
    player2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRXu0dxIvbb63TkywEE7hYpH22vbV5woEGg&usqp=CAU", // Default value for player1 in the image object
  },
  rank: {
    player1: '',
    player2: '',
  },
};

export const mainMatchSlice = createSlice({
  name: "mainMatch",
  initialState,
  reducers: {
    setImage1: (state, action) => {
      if ( state.image) {
        state.image.player1 = action.payload;
      }
    },

    addData: (state, { payload }) => {
        state.finishedSets = payload.finishedSets;
        state.name = payload.name;
        state.duration = payload.duration;
        state.rank = payload.rank;
        state.points = payload.points;
        state.onServe = payload.onServe;
      },
  },
});

export const { setImage1, addData } = mainMatchSlice.actions;
