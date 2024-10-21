import { Module } from "@nestjs/common";

import { ConfigModule } from "@/modules/common/config/config.module";
import { PrismaModule } from "@/modules/common/prisma/prisma.module";
import { NotesModule } from "@/modules/notes/notes.module";

@Module({
  imports: [ConfigModule, NotesModule, PrismaModule]
})
export class AppModule {}
