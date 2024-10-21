import { Module } from "@nestjs/common";

import { PrismaModule } from "@/modules/prisma/prisma.module";

import { NotesController } from "./notes.controller";
import { NotesService } from "./notes.service";

@Module({
  imports: [PrismaModule],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
