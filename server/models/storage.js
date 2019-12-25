"use strict";
class Storage {
    constructor(model) {
        this.model = model;
    }
    getAll() {
        return this.model.find({});
    }
    getById(id) {
        return this.model.findById(id);
    }
    create(fields) {
        const model = new this.model(fields);
        return model.save();
    }
    update(id, fields) {
        return this.model.findByIdAndUpdate(id, { $set: { fields } }, { new: true });
    }
    remove(id) {
        return this.model.remove({ _id: id });
    }
}
module.exports = Storage;
//# sourceMappingURL=storage.js.map