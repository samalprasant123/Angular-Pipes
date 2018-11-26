import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shortenpipe'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, lengthLimit: number, extensionString: string) {
        if (!extensionString) {
            extensionString = '***';
        }
        if (value.length > lengthLimit) {
            return value.substr(0, lengthLimit) + ' ' + extensionString;
        }
        return value;
    }
}
