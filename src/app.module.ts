import { Module } from "@nestjs/common";

import { NotesModule } from "@/modules/notes/notes.module";
import { PrismaModule } from "@/modules/prisma/prisma.module";

@Module({
  imports: [NotesModule, PrismaModule]
})
export class AppModule {}
