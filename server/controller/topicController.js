const Topic = require('../models/Topic');

exports.createTopic = async (req, res) => {
  try {
    const topic = new Topic(req.body);
    console.log("I am Inside Topic");
    console.log(topic);
    await topic.save();
    res.status(201).send(topic);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).send(topics);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTopicById = async (req, res) => {
  const { id } = req.params;
  try {
    const topic = await Topic.findById(id);
    if (!topic) {
      return res.status(404).send({ error: 'Topic not found' });
    }
    res.status(200).send(topic);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTopic = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTopic) {
      return res.status(404).send({ error: 'Topic not found' });
    }
    res.status(200).send(updatedTopic);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTopic = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTopic = await Topic.findByIdAndDelete(id);
    if (!deletedTopic) {
      return res.status(404).send({ error: 'Topic not found' });
    }
    res.status(200).send({ message: 'Topic deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};
