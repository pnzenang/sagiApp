import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  associationName: String,
  associationCode: String,
  firstName: String,
  lastAndMiddleName: String,
  email: String,
  telephoneNumber: String,
  streetAddress: String,
  zipCode: String,
  password: String,
  city: String,
  state: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: String,
  avatarPublicId: String,

  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
});

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);
