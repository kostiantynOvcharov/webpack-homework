export const content = 'typeScript';

class TypeScript {
    public execute (): string {
        return content;
    }
}

console.log('Text from type_script.ts : ' + (new TypeScript).execute());