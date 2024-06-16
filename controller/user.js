const { PrismaClient } = require("@prisma/client");
const { response } = require("express");
const prisma = new PrismaClient();

module.exports = {
  tampilId: async (req, res, next) => {
    try {
      const response = await prisma.user.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
      });
      if (!response) {
        res.status(400).json({
          status: false,
          message: "data tidak ada",
          data: response,
        });
      }
      res.json({
        status: true,
        message: "data berhasil di ambil",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  addData: async (req, res, next) => {
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
  },
  updateData: async (req, res, next) => {
    try {
      const response = await prisma.user.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: {
          ...req.body,
        },
      });
      res.json({
        status: true,
        message: "data berhasil di perbarui",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteData: async (req, res, next) => {
    try {
      const response = await prisma.user.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.json({
        status: true,
        message: "data berhasil dihapus",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
};
