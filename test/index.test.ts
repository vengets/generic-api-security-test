import { main } from '../src/index';

test('should return true when calling main()', () => {
    expect(main()).toBeTruthy()
})

test('should contain ENV variable SWAGGER_URL', () => {
    expect(process.env.SWAGGER_URL).not.toBeNull;
})