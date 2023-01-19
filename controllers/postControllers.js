const { openaiConfig } = require("../configs");


const postController=async(req,res,next)=>{
     try {
        console.log(req.body)
        const response = await openaiConfig.createImage({
            prompt: req.body.imageDesc,
            n: Number(req.body.num),
            size: req.body.sizeType
          });
        //   image_url = response.data.data[0].url;
        console.log(response.data.data) 
        if (response) {
            res.status(202).send({message:"Showing images",object:response.data.data,status:true})
        }else{
            res.status(203).send({message:'Try again later!!!',status:false})
        }
     } catch (error) {
        // console.log(error)
        return next(error)
       
     }
}

module.exports={postController}