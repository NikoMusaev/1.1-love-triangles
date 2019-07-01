/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.forEach(function (item, index) {
        if (index == preferences[preferences[preferences[index] - 1] - 1] - 1 && index != item - 1) {
            count++;
        }
    })
    return count / 3;
};
