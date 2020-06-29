import { IObject } from './interfaces/objectType';
import { DEBUG } from './constants'

export default abstract class CommandBase {

    /**
     * abstract method for handler
     * @param answers inquirer answers
     */
    abstract process(answers?: IObject): any;

    /**
     * Handles error when thrown
     * @param error error message
     */
    private onFailed(error: IObject): void {
        // if (DEBUG) {
        //     console.log(error)
        // }
        // To Do: Set error handling here
    }

    /**
     *  execution method for commands without input
     */
    async executeProcess() {
        try {
            await this.process();
        } catch (e) {
            this.onFailed(e);
        }
    }
}