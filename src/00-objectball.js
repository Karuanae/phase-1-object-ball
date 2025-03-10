function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
 

  function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());
  // logs "Brooklyn Nets"

  function numPointsScored(playerName) {
    let object = gameObject();
    
    // Check home team players
    if (object["home"]["players"][playerName]) {
      return object["home"]["players"][playerName]["points"];
    }
    
    // Check away team players
    if (object["away"]["players"][playerName]) {
      return object["away"]["players"][playerName]["points"];
    }
    
    // If player not found, return null
    return null;
  }

  function shoeSize (playerName) {
    let object = gameObject();

    if (object["home"]["players"][playerName]) {
        return object["home"]["players"][playerName]["shoe"];
    
      }
      
      if (object["away"]["players"][playerName]) {
        return object["away"]["players"][playerName]["shoe"];
      }
        return null;
    }
  
    function teamColors(teamName) {
        let object = gameObject();
        if (object["home"]["teamName"][teamName]) {
            return object["home"]["colors"];
        }
        if (object["away"]["teamName"][teamName]) {
            return object["away"]["colors"];
        }
        return null;
    }

    function teamNames() {
        let object = gameObject();
        return [object["home"]["teamName"], object["away"]["teamName"]];
      
    }

    function playerNumbers(teamName) {
        let object = gameObject();
        let team = obect["home"]["teamName"] === teamName ? object["home"] : object["away"];

        return Object.values(team["players"]).map(player => player.number);
    }

    function playerStats(playerName) {
        let object = gameObject();
        let playerStats = object["home"]["players"][playerName] || object["away"]["players"][playerName];
        return playerStats;
    }
    
    
    function bigShoeRebounds() {
        const game = gameObject();
        let largestShoeSize = 0;
        let playerWithLargestShoe = null;
      
        // Check home team players
        for (const playerName in game.home.players) {
          const player = game.home.players[playerName];
          if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoe = player;
          }
        }
      
        // Check away team players
        for (const playerName in game.away.players) {
          const player = game.away.players[playerName];
          if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoe = player;
          }
        }
      
        // Return the rebounds of the player with the largest shoe size
        return playerWithLargestShoe.rebounds;
      }
      
      // Example usage:
      console.log(bigShoeRebounds()); // Output: 12