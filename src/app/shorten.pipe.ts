import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shortenpipe'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any) {
        if (value.length > 15) {
            return value.substr(0, 15) + ' ...';
        }
        return value;
    }
}
