/**
 * Created by trepix on 12/12/2016.
 */

var WE_ARE_IN_SUDDEN_DEATH = 10;

var X_LIMIT_PERCENTAGE = 0.25;
var Y_LIMIT_PERCENTAGE = 0.25;


module.exports = {
    isSuddenDeath: function(map) {
        return map.suddenDeath <= WE_ARE_IN_SUDDEN_DEATH;
    },

    isOutOfOurMargins(point, map) {
        var width = map.mapWidth;
        var height = map.mapHeight;
        if (point.x < width * X_LIMIT_PERCENTAGE || point.x > width * (1 - X_LIMIT_PERCENTAGE)) return false;
        if (point.y < height * Y_LIMIT_PERCENTAGE || point.y > height * (1 - Y_LIMIT_PERCENTAGE)) return false;
        return true;
    }
};