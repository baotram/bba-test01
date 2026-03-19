// Bài 1
console.log("-------Bài 1------");
// Khai báo mảng các object: characters có các thuộc tính: name, level, health.
const characters = [{ name: "Tram", level: 2, health: 1000 }, { name: "Tram", level: 2, health: 1001 }];
// C2: let characters = new Array[{ name: "Tram", level: 2, health: 1000 }, { name: "Tram", level: 2, health: 1001 }];

// Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp
const charactersPowerUp = characters.map((character) => ({
    name: character.name.toUpperCase(),
    level: character.level * 2,
    health: character.health * 3
}));
console.log(charactersPowerUp);

// Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên mảng mới lọc được này là “possibleWinners”
const possibleWinners = characters.filter(character => character.health > 1000);
console.log(possibleWinners);


// Bài 2
console.log("-------Bài 2------");
// Init object array: players have properties: name, score
const players = [{ name: "Tram", score: 1000 }, { name: "Tram3", score: 700 }, { name: "Tram2", score: 900 }, { name: "Tram3", score: 800 }];

// Create fuction printLeaderboard:
function printLeaderboard(playerArr) {
    // Sort player array descending:
    const sortedArr = playerArr.sort((a, b) => { return b.score - a.score });
    // Print sorted array by score
    console.log("Sorted array by score: ", sortedArr);
    // Print printLeaderboard:
    for (let i = 0; i < sortedArr.length; i++) {
        let metal = '  ';
        if (i === 0) {
            metal = "🥇";
        } else if (i === 1) {
            metal = "🥈";
        } else if (i === 2) {
            metal = "🥉";
        }
        console.log(metal + " " + (i + 1) + ". " + sortedArr[i].name + " - " + sortedArr[i].score + " pts");
    }
}
// Call function
printLeaderboard(players);
