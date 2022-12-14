/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SendNotification } from "src/application/use-case/send-notification";
import { DataBaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";


@Module({
    imports: [DataBaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification]
})
export class HttpModule {}