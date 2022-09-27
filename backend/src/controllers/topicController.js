import Topic from "../models/Topic";

export const getTopicList = async (req, res) => {
    try {
        const list = await Topic.find({});
        res.json(list)
    } catch (error) {
        console.log(error)
        res.json(error)
    }

}

export const addTopic = async (req, res) => {
    try {
        const { title, description, hashtags } = req.body;
        const topic = new Topic({
            title,
            description,
            createdAt: Date.now(),
            useAt: "Y",
            hashtags: hashtags.split(",").map(word => `#${word}`),
            meta: {
                views: 0
            }
        })
        await topic.save();
        res.json({
            res_code: 200,
            message: "Success",
            data: topic
        })
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}