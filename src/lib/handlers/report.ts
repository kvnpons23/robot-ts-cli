import CommandBase from '../commandBase';
import Cache from '../db/cache';

/**
 * class handler for report command
 */
export default class Report extends CommandBase {

    process(): void {
        const data = Cache.get()
        if(data){
            console.log(`OUTPUT: ${Object.values(data).join(',')}`);
        }
    }
}