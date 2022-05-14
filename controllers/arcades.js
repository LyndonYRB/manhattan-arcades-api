import Arcade from "../model/arcades.js"

export let getArcades = async (req, res) => {
  try {
    const arcades = await Arcade.find();
    res.json(arcades);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const arcade = await Arcade.findById(id);
     if (arcade) {
      return res.json(arcade);
    }

    res.status(404).json({ message: "Arcade not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createArcade = async (req, res) => {
  try {
    const arcade = new Arcade(req.body);
    await arcade.save();
    res.status(201).json(arcade);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateArcade = async (req, res) => {
  const { id } = req.params;
  const arcade = await Arcade.findByIdAndUpdate(id, req.body);
  res.status(200).json(arcade);
};

export const deleteArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Arcade.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Arcade deleted!");
    }
    throw new Error("Arcade not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};