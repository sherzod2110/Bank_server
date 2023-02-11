import { sign } from "../../utils/jwt.js";
import { Exception } from "../../exceptions/ErrorHandler.js";

export default {
  POSTADMIN: async (req, res, next) => {
    const { name, password } = req.body;

    if (name != "admin" || password != "12345") {
      return next(new Exception("Login Password Not Found", 404));
    }

    res.json({
      message: "Valid access token",
      access_token: sign({ admin_password: password }),
    });
  },
};
