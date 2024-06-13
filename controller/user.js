const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addData = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
    return res.status(201).json({
      status: true,
      message: "data berhasil di input",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = addData;
