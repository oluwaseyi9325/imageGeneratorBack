const { openaiConfig } = require("../configs");


const getControllers= async(req,res,next)=>{
     try {
        const response = await openaiConfig.createImage({
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
          });
        //   image_url = response.data.data[0].url;
        console.log(response.data.data[0].url) 
        if (response) {
            res.status(202).send({message:"Showing images",object:response.data.data,status:true})
        }else{
            res.status(203).send({message:'Try again later!!!',status:false})
        }
     } catch (error) {
       return next(error)
     }
}

module.exports={getControllers}