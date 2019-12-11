async function init(img){
    $('#output').text('Mohon tunggu..');
    model =  await tf.loadModel('https://raw.githubusercontent.com/zephyrzth/LeafRecognition/master/public/js/js_model/model.json');
    console.log('model loaded from storage');
    
    let result = await preprocess(img);
    console.log("bisa 0");
    
    const pred = await model.predict(result, 1).dataSync();
    console.log(pred);
    
    let i = indexOf(pred);
    var arr=['Daun A','Daun B','Daun C','Daun D','Daun E','Daun F','Daun H','Daun I','Daun J','Daun K'];
    console.log(arr[i]);
    $('#output').text(arr[i]);
}

function preprocess(img)
{

    //convert the image data to a tensor 
    let tensor = tf.fromPixels(img)
    //resize to 224 x 224
    const resized = tf.image.resizeBilinear(tensor, [200, 200]).toFloat()
    // Normalize the image 
    // const offset = tf.scalar(255.0);
    // const normalized = tf.scalar(1.0).sub(resized.div(offset));
    //We add a dimension to get a batch shape 
    const batched = resized.expandDims(0)
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