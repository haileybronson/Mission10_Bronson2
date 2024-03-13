export type Bowler = {
  //might need to chang ethe order
  team: any;
  bowlerId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  teamName: Team;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: number;
  bowlerPhoneNumber: number;
};

export type Team = {
  teamId: number;
  teamName: string;
};
