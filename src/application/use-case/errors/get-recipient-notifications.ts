import { Notification } from "@application/entities/notification";
import { Injectable } from "@nestjs/common";
import { NotificationsRepository} from "../../repositories/notification-repository"

interface GetRecipientNotificationsRequest {
    recipientId: string;
}

interface GetRecipientNotificationsResponse {
    notifications: Notification [];
}

@Injectable()
export class GetRecipientNotifications {
    constructor(
        private notificationsRepository: NotificationsRepository) {}


    async execute(
        request: GetRecipientNotificationsRequest,
        ): Promise<GetRecipientNotificationsResponse> {
        const { recipientId } = request;
            
        const notifications = await this.notificationsRepository.findManyByRecipeintId(recipientId,);
        
        return {
            notifications,
        };
    }
}