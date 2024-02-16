import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { FindOneParams } from "../utils/findOneParams";
import { NotesService } from "./notes.service";
import { UpdateNoteDto } from "./dto/updateNote.dto";
import { CreateNoteDto } from "./dto/createNote.dto";

@Controller("notes")
@ApiTags("notes")
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async getNotes() {
    return this.notesService.getNotes();
  }

  @Get(":id")
  getNoteById(@Param() { id }: FindOneParams) {
    return this.notesService.getNoteById(Number(id));
  }

  @Post()
  async createNote(@Body() note: CreateNoteDto) {
    return this.notesService.createNote(note);
  }

  @Put(":id")
  async updateNote(
    @Param() { id }: FindOneParams,
    @Body() note: UpdateNoteDto
  ) {
    return this.notesService.updateNote(Number(id), note);
  }

  @Delete(":id")
  async deleteNote(@Param() { id }: FindOneParams) {
    return this.notesService.deleteNote(Number(id));
  }
}
