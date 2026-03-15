// Khai báo Biến playerName
let playerName = "Mario";
// Khai báo Biến currentLives
let currentLives = 3;
// Khai báo các hằng số lưu coins theo level:
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;
// Tính tổng coin của 3 level, sau đó tính giá trị trung bình (tổng / 3)
const sumCoins = coinsLevel1 + coinsLevel2 + coinsLevel3;
const coinsAvg = sumCoins / 3;
// In ra số coin dư khi chia tổng số coin cho 3
console.log("Số coin dư khi chia tổng số coin cho 3: " + sumCoins % 3);