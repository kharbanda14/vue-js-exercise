var min = 1;

var max = 10;

var operators = ['+', '-', '*', '/'];

const msgs = [
    'You Need To Work Hard!',
    'Awesome Blossom!',
    'You can do better than this!',
    'Great',
    'Keep It Up!!',
];

export function initialize (data) {
    min = parseInt(data.min_value);
    max = parseInt(data.max_value);
    operators = data.operators.split(',');
}

export function random_num () {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generate_question () {
    const int1 = random_num();
    const int2 = random_num();
    const random_operator = operators[Math.floor(Math.random() * operators.length)];
    return `${int1} ${random_operator} ${int2}`;
}

export function get_remarks (score, max) {
    const percentage = ( score / max ) * 100;

    if (percentage < 50 ) {
        return msgs[0];
    } else if (percentage >= 50 && percentage < 70) {
        return msgs[2];
    } else if (percentage >= 70 && percentage < 80) {
        return msgs[3];
    } else if (percentage >= 80 && percentage < 90) {
        return msgs[4];
    } else if (percentage >= 90) {
        return msgs[1];
    }


}
