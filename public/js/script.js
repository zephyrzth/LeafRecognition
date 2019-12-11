import { loadLayersModel, fromPixels } from '@tensorflow/tfjs';
const MODEL_URL = './js_model/model.json';

async function run() { 
    const model = await loadLayersModel(MODEL_URL);
    const img = document.getElementById('gambar');
    console.log('aaaaa');
    
    return model.predict(fromPixels(img));
}

document.querySelector('#form-upload').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(run());
});