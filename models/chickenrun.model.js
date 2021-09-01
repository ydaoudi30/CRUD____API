module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        name: {
            type: String,
            required: true
        },
        birthday: Date,
        weight:  {
            type: Number,
            required: true
        },
        steps: {
            type: Number,
            default: 0
        },
        isRunning: {
            type: Boolean,
            default: false
        }
      },
      { timestamps: true }
    );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Chickenrun = mongoose.model("Chickenrun", schema);
  return Chickenrun;
};