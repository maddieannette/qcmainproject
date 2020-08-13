export function loginAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId: '', userSessionToken: '123142abc' });
        }, 2000);
    });
}
