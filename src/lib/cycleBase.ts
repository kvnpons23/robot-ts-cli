import { IObject } from './interfaces/objectType';
export default abstract class Cyclebase {
    private lifeCycle = [
        this.onReceive,
        this.onValidate,
        this.process
    ]

    /**
     * abstract method for preprocessing
     * @param answers 
     */
    abstract onReceive(answers?: IObject): any;

    /**
     * abstract method for validation
     * @param answers 
     */
    abstract onValidate(answers?: IObject): any;

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
     * execution method for commands with inputs
     * @param answers 
     */
    async executeLifecycle(answers: IObject) {
        let result: IObject = answers;
        try {
            this.lifeCycle.map((cyclePhase) => {
                result = cyclePhase(result)!;
            })
        } catch (e) {
            this.onFailed(e);
        }
    }

}