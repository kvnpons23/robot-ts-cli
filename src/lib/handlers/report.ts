import CommandBase from '../commandBase';
import Cache from '../db/cache';

export default class Report extends CommandBase {

    process(): void {
        const data = Cache.get()
        if(data){
            console.log(`OUTPUT: ${Object.values(data).join(',')}`);
        }
    }
}