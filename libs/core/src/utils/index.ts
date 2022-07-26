import { Type } from '@nestjs/common';
import { ClassTransformOptions, plainToInstance } from 'class-transformer';

export const toDto = <T, V>(
  classRef: Type<T>,
  plain: V | V[],
  options?: Omit<ClassTransformOptions, 'excludeExtraneousValues'>,
) =>
  plainToInstance(classRef, plain, {
    excludeExtraneousValues: true,
    ...options,
  });
