import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateNoteDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
