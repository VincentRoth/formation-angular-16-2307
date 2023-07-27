import { PhoneFormatPipe } from './phone-format.pipe';

describe('PhoneFormatPipe', () => {
  let pipe: PhoneFormatPipe;

  beforeEach(() => {
    pipe = new PhoneFormatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should handle null value', () => {
    expect(pipe.transform(null)).toBeNull();
  });

  it('should handle undefined value', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('should transform value with default separator', () => {
    const input = '01.23.45.67.89';
    const expectedOutput = '01 23 45 67 89';
    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('should transform value with defined separator', () => {
    const input = '01.23.45.67.89';
    const expectedOutput = '01-23-45-67-89';
    expect(pipe.transform(input, '-')).toBe(expectedOutput);
  });

  it('should not transform a value that has nothing to be replaced', () => {
    const input = '0123456789';
    const expectedOutput = input;
    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('should handle non string value', () => {
    const input = 123456789.02;
    expect(() => pipe.transform(input as any)).toThrow(
      new TypeError('value.replaceAll is not a function')
    );
  });
});
