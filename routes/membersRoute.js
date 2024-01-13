import express from "express";
import { Member } from "../models/memberModel.js";
const router = express.Router();

//route for saving a new member
router.post("/", async (req, res) => {
  try {
    const newMember = {
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      department: req.body.department,
      position: req.body.position,
    };

    const member = await Member.create(newMember);
    res.send(member);
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

//getting the members
router.get("/", async (req, res) => {
  try {
    const members = await Member.find({});
    res.send(members);
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

//get a single member
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const member = await Member.findById(id);

    res.send(member);
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

//updating a certain member
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const member = await Member.findByIdAndUpdate(id, req.body);

    if (!member) res.json("member not found!");

    res.json("member updated successfully");
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

//deleting a member
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const member = await Member.findByIdAndDelete(id);

    if (!member) res.json("member not found");

    res.json("member deleted successfully");
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

export default router;
