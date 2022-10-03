import {codeZoneInputFilteration} from './codeZoneInputFilteration';

export const codeZoneFormValidation=(inputs)=>{
console.log(inputs);
inputs.forEach((input)=>{
    codeZoneInputFilteration(input);
})
}