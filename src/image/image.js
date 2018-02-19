/**
 * Created by patrick on 2018/2/8.
 */
/**
 * todo:图片处理相关类,比如压缩
 * */
class Image{
    /**
     *  @param image: image is an Image object,it is to be compressed image;
     *  @param config: config is the compress configuration.Either of the below properties can be specified;
     *          {
     *              maxSize:the max size which the image is to be compressed;
     *              scale:the scale which the compressed image;
     *          }
     *  @return Promise object with the compressed image;
     * */
     compress(image,config){
        return new Promise((resolve,reject)=>{
            // console.log("old url length is "+url.length);
            let scale = 1;
            if(config.scale){
                scale = config.scale;
                resolve(image,this._compress(scale))
            }else if(config.maxSize){
                this.size(image).then(size => {
                    if (size > config.maxSize){
                        scale = Math.sqrt(config.maxSize /size);
                    }
                    resolve(image,this._compress(image,scale));
                });
            }else {
                reject(new Error("either of config property must be specified!"));
            }

        });

    }
    _compress(image,scale){
        const type = "image/jpeg";
        const canvas= document.createElement("canvas");
        canvas.width=image.width*scale;
        canvas.height=image.height*scale;
        const con=canvas.getContext('2d');
        con.clearRect(0,0,canvas.width,canvas.height);
        con.drawImage(image,0,0,image.width*scale,image.height*scale);
        let compressedImage = new Image();
        compressedImage.src = canvas.toDataURL(type,0.9);
        return compressedImage;
    }
    size(image){
        return new Promise((resolve,reject)=>{
            var canvas = document.createElement("canvas");
            canvas.width=image.width;
            canvas.height=image.height;
            let con=canvas.getContext('2d');
            con.drawImage(image,0,0,image.width,image.height);
            canvas.toBlob(function(blob){
                resolve(blob.size)
            },"image/jpeg");
        });
    }
}
export default Image;