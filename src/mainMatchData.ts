export interface MainMatchData {
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
  image?: { player1: string; };
  rank?: { player1: any; player2: any };
}
