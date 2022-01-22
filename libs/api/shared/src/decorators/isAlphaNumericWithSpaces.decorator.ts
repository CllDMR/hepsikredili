import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

const regex = /^[a-z0-9 ]+$/i;

export function IsAlphanumericWithSpaces(
  validationOptions?: ValidationOptions
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsAlphanumericWithSpaces',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: unknown, _args: ValidationArguments) {
          return typeof value === 'string' && regex.test(value);
        },
        defaultMessage(_args: ValidationArguments) {
          return `${propertyName} must contain a-z, A-Z or spaces`;
        },
      },
    });
  };
}
