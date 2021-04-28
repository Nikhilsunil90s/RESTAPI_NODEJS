exports.getFeeds = (req,res,next) => {
    return res.status(200).json({
        posts: [
            {
            _id: 1,
            title: 'This is A Sample Post!',
            content: 'This is Sample Content',
            creator: { name: 'Test Creator' },
            createdAt: new Date(),
            image: "",
            },
            {
                _id: 2,
                title: 'This is New Sample Post!',
                content: 'This is new Sample Content',
                creator: { name: 'Elon Musk' },
                createdAt: new Date(),
                image: "",
                }
    ]
    })
}

exports.postFeeds = (req,res,next) => {
    console.log("In Request PostFeeds : " ,req.body);
    return res.status(200).json({
        _id: 2,
        text: 'Post Created Successfully!'
    });
}