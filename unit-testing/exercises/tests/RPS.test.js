const whoWon = require("../RPS.js");

describe("whoWon", ()=>{
test("returns TIE! if both players choose same option", ()=>{
        let testOut = whoWon('rock','rock');
        expect(testOut).toBe("TIE!");
    });

    test("returns 'Player 2 wins' if Player 2 selects rock and Player 1 selects scissors", ()=>{
        let testOut = whoWon('scissors', 'rock');
        expect(testOut).toBe("Player 2 wins!");
    });

    test("returns 'Player 1 wins' if Player 1 selects paper and Player 2 selects rock", ()=>{
        let testOut = whoWon("paper", "rock");
        expect(testOut).toBe("Player 1 wins!");
    });
});
