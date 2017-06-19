
import { AbstractControl } from '@angular/forms';


//---------------------------------------------------

// export function rangeValidator(c: AbstractControl): { [key: string]: boolean } | null {

//     if (c.value < 1 || c.value > 10) {
//         return { 'range': true };
//     } else {
//         return null;
//     }

// }

export function rangeValidator(min: number, max: number) {

    return function (c: AbstractControl): { [key: string]: boolean } | null {

        if (c.value < min || c.value > max) {
            return { range: true };
        } else {
            return null;
        }

    }

}


export function emailsMatch(c: AbstractControl): { [key: string]: boolean } | null {

    let email = c.get('email').value;
    let confEmail = c.get('confEmail').value;

    if (email !== confEmail) {
        return { match: true };
    } else {
        return null;
    }

}


//---------------------------------------------------