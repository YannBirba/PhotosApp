// import { FormGroup } from '@angular/forms';

// // custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {   
//     return (formGroup: FormGroup) => {
//         const control : any = formGroup.controls[controlName];
//         const matchingControl : any = formGroup.controls[matchingControlName];

//         if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//             return;
//         }

//         // set error on matchingControl if validation fails
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ mustMatch: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }

// import { AbstractControl, ValidatorFn } from '@angular/forms';

// export class MustMatch {
//     static match(controlName: string, checkControlName: string): ValidatorFn {
//       console.log('test');
      
//     return (controls: AbstractControl) => {
//       const control = controls.get(controlName);
//       const checkControl = controls.get(checkControlName);

//       if (checkControl?.errors && !checkControl.errors.matching) {
//         return null;
//       }

//       if (control?.value !== checkControl?.value) {
//         controls.get(checkControlName)?.setErrors({ matching: true });
//         return { matching: true };
//       } else {
//         return null;
//       }
//     };
//   }
// }

import { FormGroup } from '@angular/forms';

export function confirmationValidator(controlName: string, matchingControlName: string){

    return (formGroup: FormGroup) => {

        const control = formGroup.controls[controlName];

        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.confirmationValidator) {

            return;

        }

        if (control.value !== matchingControl.value) {

            matchingControl.setErrors({ confirmationValidator: true });

        } else {

            matchingControl.setErrors(null);

        }

    }

}