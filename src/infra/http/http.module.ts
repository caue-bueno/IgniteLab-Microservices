/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SendNotification } from "@application/use-case/errors/send-notification";
import { DataBaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";
import { CancelNotification } from "@application/use-case/errors/cancel-notification";
import { CountRecipientNotifications } from "@application/use-case/errors/count-recipient-notifications";
import { GetRecipientNotifications } from "@application/use-case/errors/get-recipient-notifications";
import { ReadNotification } from "@application/use-case/errors/read-notifications";
import { UnreadNotification } from "@application/use-case/errors/unread-notification";


@Module({
    imports: [DataBaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification, CancelNotification, CountRecipientNotifications, GetRecipientNotifications, ReadNotification, UnreadNotification],
})
export class HttpModule {}