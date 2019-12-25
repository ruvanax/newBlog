class Storage {
    model: any;
    constructor(model: object) {
        this.model = model;
    }

    public getAll() {
        return this.model.find({});
    }

    public getById(id: string) {
        return this.model.findById(id);
    }

    public create(fields: object) {
        const model = new this.model(fields);
        return model.save();
    }

    public update(id: string, fields: object) {
        return this.model.findByIdAndUpdate(id, {$set: {fields}}, {new: true})
    }

    public remove(id: string) {
        return this.model.remove({_id: id});
    }
}

export = Storage;
