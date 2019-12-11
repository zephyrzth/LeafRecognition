async function init(img){
    model =  await tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json');
    console.log('model loaded from storage');

    let result = await preprocess(img);
    console.log("bisa 0");
    
    const pred = await model.predict(result).dataSync();
    console.log("Bisaa");
    
    // let i = indexOf(pred);
    // var arr=['kelas1','kelas2','kelas3','kelas4','kelas5','kelas6','kelas7','kelas8','kelas9','kelas10'];
    // console.log(arr[i]);
    // $('#output').text(arr[i]);
}

function preprocess(img)
{

    //convert the image data to a tensor 
    let tensor = tf.fromPixels(img)
    //resize to 224 x 224
    const resized = tf.image.resizeBilinear(tensor, [224, 224]).toFloat()
    // Normalize the image 
    const offset = tf.scalar(255.0);
    const normalized = tf.scalar(1.0).sub(resized.div(offset));
    //We add a dimension to get a batch shape 
    const batched = normalized.expandDims(0)
    return batched

}

function indexOf(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}