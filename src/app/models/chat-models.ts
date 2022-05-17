export interface ChatMessage {
    id: string;
    senderName: string;
    dateTime: string;
    content: string;
}

export interface ChatRoom {
    id: string;
    name: string;
    isSelected: Boolean;
}

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
}

export interface UserDTO {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    jwtToken: string;
}

export interface RegisterDTO {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}