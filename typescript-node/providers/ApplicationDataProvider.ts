import {MongoError} from "mongodb";
const mongoose = require('mongoose');


export default class DataProvider{
    private readonly uri: string = "mongodb://localhost:27017/";
    private readonly type: string;

    constructor(type: string) {
        this.type = type;
    }

    public run(): any{
        const uris: string = this.uri + this.type;
        return mongoose.connect(uris, { useNewUrlParser: true, useUnifiedTopology: true }, function (err:MongoError) {
            if(err) return console.log(err);
        });
    }
}

// export default abstract class DataProvider {
//     static readonly ROOT_DB_STORE = path.normalize(__dirname + '/../../db/');
//
//     protected db_store: nedb;
//
//     constructor(storeName = 'data') {
//         this.db_store = new nedb({
//             filename: DataProvider.ROOT_DB_STORE + storeName + '.db'
//         });
//
//         this.db_store.loadDatabase((err) => {
//             this.onLoadStore(err);
//         });
//     }
//
//     protected vacuumStore(): void {
//         if (this.db_store instanceof nedb) {
//             this.db_store.persistence.compactDatafile();
//         }
//     }
//
//     protected abstract onLoadStore(err: any): void
// }