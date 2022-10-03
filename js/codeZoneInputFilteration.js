import {codeZoneValidationStrategy} from './codeZoneValidationStrategy';
import {helper} from './helper';
export const codeZoneInputFilteration=(input)=>{
    let el=document.querySelector(`input[name=${input.name}]`);
     input.rules.forEach((rule) =>{

    //we will use strategy design pattern so will make object
   let valedationerror=codeZoneValidationStrategy[rule.name](el.value , rule);
    //console.log(valedationerror);
    if(valedationerror){
        helper.errorHundler();
    }
})
//console.log(el);
} 