const BaseJoi = require('joi');
const { number } = require('joi');
const sanitizeHTML = require('sanitize-html');


const extension = (Joi) =>({
    type: 'string' ,
    base: Joi.string(),
    messages:{
        'string.escapeHTML':'{{#label}} must not include HTML'
    },
    rules:{
        escapeHTML:{
            validate(value, helpers){
                const clean = sanitizeHTML(value,{
                    allowedTags:[],
                    allowAttributes:{},
                });
                if (clean != value) return helpers.error('string.escapeHTML',{value})
                return clean;
            }
        }
    }
})

const Joi = BaseJoi.extend(extension)

module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required()
    }).required(),
    deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        body: Joi.string().required()
    }).required()
})

