import tensorflowjs as tfjs
import tensorflow as tf


def convert():
    model = tf.keras.models.load_model('VKmodel_1.h5')
    tfjs.converters.save_keras_model(model, 'js_model_new')


if __name__ == '__main__':
    convert()
