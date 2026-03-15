// Khai báo Biến powerUp có giá trị là “mushroom”.
let powerUp = 'mushroom';
// Khai báo Biến effect
let effect = '';
/*  Sử dụng câu điều kiện if...else để xác định tên hiệu ứng tương ứng với các powerUp:
■ mushroom: "Mario becomes Super!"
■ flower: "Mario can shoot fireballs!"
■ star: "Mario is invincible!"
■ none: "Mario is normal"*/
if (powerUp === 'mushroom') {
    console.log("Mario becomes Super!");
} else if (powerUp === 'flower') {
    console.log("Mario can shoot fireballs!");
} else if (powerUp === 'star') {
    console.log("Mario is invincible!");
} else console.log("Mario is normal");