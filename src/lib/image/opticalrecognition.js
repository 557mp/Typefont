/**
 * @module OpticalRecognition Used as Optical Character Recognition module.
 * Tesseract <https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js>
 * @author Vasile Pește <sirvasile@protonmail.ch>
*/

const OpticalRecognition = (

    function (undefined)
    {
        "use strict";
        
        // Used as recognition options.
        const _OPTIONS = {
            lang: "eng",
            tessedit_char_whitelist: "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789"
        };
        
        /**
         * _recognize Recognize the text in a image.
         * @param {String} url The URL of the image to recognize.
         * @param {Object} [options = {}]
         * @return {Promise}
        */
        
        const _recognize = (url, options = {}) => {
            for (const option in options)
                _OPTIONS[option] = options[option];
            
            return Tesseract.recognize(url, _OPTIONS);
    	};
        
        // Return the public context.
        return (url, options) => _recognize(url, options);
    }

());

export default OpticalRecognition;