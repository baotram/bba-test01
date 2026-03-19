//Create function findPairDivisibleBy17
function findPairDivisibleBy17(limit) {
    let count = 0;
    for (let i = 1; i <= limit; i++) {
        for (let j = i + 1; j <= limit; j++) {
            if ((i + j) % 17 === 0) {
                console.log(`(${i},${j}) = ${i + j}`);
                count++;
            }
        }
    }
    console.log(`\n Tổng cộng: ${count} cặp`);

}
// Call hàm findPairDivisibleBy17
findPairDivisibleBy17(100);