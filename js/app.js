import {codeZoneFormValidation} from './codeZoneFormValidation';

document.querySelector('#submitForm')
.addEventListener('click',(e)=>{
    e.preventDefault();
    const myForm =codeZoneFormValidation([
      {
name: 'username',
rules:[
    {name: 'required', value:true ,errMsg: 'this input is required'},
    {name: 'maxLength', value:10 ,errMsg: 'maxLength error'},
]
      },
      
      {
        name: 'password',
      rules:[
          {name: 'required', value:true ,errMsg: 'this input is required'},
          {name: 'minLength', value:5 ,errMsg: 'minLength error'},
      ]

    }

    ]);

});