import { ValidatorFn, AbstractControl } from '@angular/forms';

export function validatorSeatSelection(avlSeats: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return control.value > avlSeats ? { 'validatorSeatSelection': { value: control.value } } : null;
    };
}
