import { IObject } from "../interfaces/objectType";
import { CACHE_KEY, DB_DIR } from '../constants'
import fs from 'fs';

export default class Cache {

    static set(location: IObject): boolean {
        try {
            if (!fs.existsSync(DB_DIR)){
                fs.mkdirSync(DB_DIR);
            }
            fs.writeFileSync(`${DB_DIR}/db.json`, JSON.stringify(location))
            return true;
        } catch (e) {
            throw e
        }

    }

    static get(): any {
        try {
            if (!fs.existsSync(`${DB_DIR}/db.json`)){
                return;
            }
            const data = fs.readFileSync(`${DB_DIR}/db.json`)
            return JSON.parse(data.toString());
        } catch (e) {
            throw e;
        }
    }

}