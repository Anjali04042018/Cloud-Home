const FileFolderModel = require("../model/fileSchema");

const createFile = async(req,res) =>{
    try{
        const data = req.file;
        // console.log(data);
        const {parentId} = req.body;
        const {_id} = req.user;
        const file = await FileFolderModel.create({
            name: data.originalname,
            userId:_id,
            type:"file",
            parentId: parentId ==="null" ? undefined :parentId,
            metaData:{multer:data},
        })
        res.status(201);
        res.json({
            status:"In-progress",
            data: {
                file:file,
            },
        });
    }
    catch(err){
        console.log("---------------");
        console.log(err);
        console.log("-------------------");
        res.status(500).json({
            status: "fail",
            message:"Internal Server Error",
        });
    }
};

module.exports= {createFile};