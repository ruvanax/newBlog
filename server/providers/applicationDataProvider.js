"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
class DataProvider {
    constructor(type) {
        this.uri = "mongodb://localhost:27017/";
        this.type = type;
    }
    run() {
        const uris = this.uri + this.type;
        return mongoose.connect(uris, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
            if (err)
                return console.log(err);
        });
    }
}
exports.default = DataProvider;
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
//# sourceMappingURL=applicationDataProvider.js.map