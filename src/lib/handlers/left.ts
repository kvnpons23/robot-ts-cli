import CommandBase from '../commandBase';
import Cache from '../db/cache';

export default class Left extends CommandBase {

    process(): void {
        const data = Cache.get();
        if (data) {
            const newLoc = data;
            const cClockwise = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
            if (data.direction === cClockwise[cClockwise.length - 1]) {
                newLoc.direction = cClockwise[0];
            } else {
                newLoc.direction = cClockwise[cClockwise.indexOf(data.direction) + 1]
            }
            Cache.set(newLoc)
        }
    }
}