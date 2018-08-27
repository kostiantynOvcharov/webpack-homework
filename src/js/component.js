export function component() {
    const element = window.document.createElement('div');
    element.innerHTML = 'Hello, webpack!';
    return element;
}

console.log('Component imported!');