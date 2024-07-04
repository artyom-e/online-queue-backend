import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateQueueDto {
    @IsString()
    @MinLength(3)
    @MaxLength(64)
    name: string;

    @IsString()
    @MinLength(3)
    @MaxLength(512)
    description: string;
}
