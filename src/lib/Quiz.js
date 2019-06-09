/**
 * Contains Quiz Configuration and functions for generating questions.
 * @author Aman Kharbanda
 */


/**
 * Initial minimum value for the random integer
 * will be replaced by the initialize function
 * @var		integer	min
 * @global
 */
var min = 1;

/**
 * Maximum value for the random integer
 * will be replaced by the initialize function
 * @var		integer	max
 * @global
 */
var max = 10;

/**
 * List of operators to be used in quiz
 * @var		array	operators
 * @global
 */
var operators = ['+', '-', '*', '/'];

/**
 * Remarks messages given based on score
 * @var		array	msgs
 * @global
 */
const msgs = [
    'You Need To Work Hard!',
    'Awesome Blossom!',
    'You can do better than this!',
    'Great',
    'Keep It Up!!',
];


/**
 * Initialize The configuration provided.
 * @var		export	functio
 * @global
 */
export function initialize (data) {
    min = parseInt(data.min_value);
    max = parseInt(data.max_value);
    operators = data.operators.split(',');
}


/**
 * Generates a random number according to the parameters above
 * @var		export	functio
 * @global
 */
export function random_num () {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random arithmetic question according to the configuration given above
 */
export function generate_question () {
    const int1 = random_num();
    const int2 = random_num();
    const random_operator = operators[Math.floor(Math.random() * operators.length)];
    return `${int1} ${random_operator} ${int2}`;
}

/**
 * Gets the remarks based on score and max_score provided
 * @param {int} score Correct answers
 * @param {int} max Max score
 */
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
