import CommandBase from '../commandBase';
import Cache from '../db/cache';
import PlaceSchema from '../schema/placeSchema'

/**
 * class handler for move command
 */
export default class Move extends CommandBase {

    process(): void {
        const data = Cache.get();
        if (data) {
            let newLoc = data;
            switch (data.direction) {
                case 'NORTH':
                    newLoc.yCoordinate = data.yCoordinate + 1
                    break;
                case 'SOUTH':
                    newLoc.yCoordinate = data.yCoordinate - 1
                    break;
                case 'EAST':
                    newLoc.xCoordinate = data.xCoordinate + 1
                    break;
                case 'WEST':
                    newLoc.xCoordinate = data.xCoordinate - 1
                    break;
            }
            const xAttr = PlaceSchema.find(attr => attr.name === 'xCoordinate')!
            const yAttr = PlaceSchema.find(attr => attr.name === 'yCoordinate')!

            if (newLoc.xCoordinate >= xAttr!.validation.range!.start
                && newLoc.xCoordinate <= xAttr!.validation.range!.end
                && newLoc.yCoordinate >= yAttr!.validation.range!.start
                && newLoc.yCoordinate <= yAttr!.validation.range!.end
            ) {
                Cache.set(data)
            } 
        }
    }
}