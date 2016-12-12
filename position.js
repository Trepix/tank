/**
 * Created by trepix on 12/12/2016.
 */

module.exports = function() {

    function sameLane(me, enemy) {
        return (sameLaneX(me,enemy)|| sameLaneY(me,enemy));
    }

    function sameLaneX(me, enemy) {
        return enemy.x == me.x;
    }

    function sameLaneY(me, enemy) {
        return enemy.y == me.y;
    }

    function existsWall(map, x , y){
        return map.walls.find(function (wall) {
            return wall.x === x && wall.y === y;
        });
    }

    function moveOrShoot(map, x, y) {
        if (existsWall(map, x, y)) {
            return 'fire';
        }
        else return 'forward';
    }

    function moveToHim(tank, enemy, map) {

        if (sameLaneX(tank, enemy)) {
            if (tank.y - enemy.y > 0) {
                if (tank.direction == 'top') {
                    return moveOrShoot(map, tank.x, tank.y-1);
                }
                else {
                    return 'turn-left';
                }
            }
            else {
                if (tank.direction == 'bottom') {
                    return moveOrShoot(map, tank.x, tank.y+1);
                }
                else {
                    return 'turn-left';
                }
            }
        }
        else if (sameLaneY(tank, enemy)) {
            if (tank.x - enemy.x > 0) {
                if (tank.direction == 'left') {
                    return moveOrShoot(map, tank.x-1, tank.y);
                }
                else {
                    return 'turn-left';
                }
            }
            else {
                if (tank.direction == 'right') {
                    return moveOrShoot(map, tank.x+1, tank);
                }
                else {
                    return 'turn-left';
                }
            }
        }
        else {
            if (tank.y < enemy.y) {
                if (tank.direction != 'bottom') {
                    if (tank.direction == 'right') return 'turn-right';
                    else return 'turn-left';
                }
            }
            else if (tank.y > enemy.y) {
                if (tank.direction != 'top') {
                    if (tank.direction == 'left') return 'turn-right';
                    else return 'turn-left';
                }
            }
            else if (tank.x < enemy.x) {
                if (tank.direction != 'right') {
                    if (tank.direction == 'top') return 'turn-right';
                    else return 'turn-left';
                }
            }
            else  { //tank.x > enemy.x
                if (tank.direction != 'left') {
                    if (tank.direction == 'bottom') return 'turn-right';
                    else return 'turn-left';
                }
            }
        }

    }

    return {
        sameLane: sameLane,
        moveToHim: moveToHim
    };


};