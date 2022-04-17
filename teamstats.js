const team = {
  _players: [
    {firstName: 'Pete', lastName: 'Rose', age: 34},
    {firstName: 'Mike', lastName: 'Schmidt', age: 41},
    {firstName: 'Darryl', lastName: 'Strawberry', age: 51}
  ],
  _games:  [
    {opponent: 'Phillies', teamPoints: 7, opponentPoints: 11},
    {opponent: 'Giants', teamPoints: 8, opponentPoints: 1},
    {opponent: 'Dodgers', teamPoints: 13, opponentPoints: 3}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
