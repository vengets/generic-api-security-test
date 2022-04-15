import dotenv from 'dotenv';


if (!dotenv.config()) {
    throw new Error('Unable to initialize environment configuration');
}

export function main() {
    console.log('Security Test Project ...');
    return true;
}

main();
