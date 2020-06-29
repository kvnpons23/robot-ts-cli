import { IObject } from './interfaces/objectType';

export default abstract class CommandBase {

    /**
     * abstract method for processing 
     * @param answers inquirer answers
     */
    abstract process(answers?: IObject): any;

    /**
     * Handles error when thrown
     * @param error error message
     */
    private onFailed(error: IObject): void { }

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