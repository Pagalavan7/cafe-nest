import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  min,
  Min,
} from 'class-validator';

export class SignupUserDTO {
  @IsNumber()
  @IsOptional()
  userId?: number;

  @Min(3)
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Min(6)
  @IsNotEmpty()
  password: string;

  @Max(15)
  @IsNotEmpty()
  phoneNumber: string;

  role: 'User' | 'Admin' = 'User';

  @IsBoolean()
  status: boolean;
}
