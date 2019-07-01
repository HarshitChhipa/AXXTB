export class EventData {
    id: number;
    name: string;
    image: string;
    dateOfEvent: string;
    totalSeats: number;
    availableSeats: number;
    isBooking: boolean;

    constructor(data = null) {
        this.id = data.id ? data.id : this.id;
        this.name = data.name ? data.name : this.name;
        this.image = data.image ? data.image : this.image;
        this.dateOfEvent = data.dateOfEvent ? data.dateOfEvent : this.dateOfEvent;
        this.totalSeats = data.totalSeats ? data.totalSeats : this.totalSeats;
        this.availableSeats = data.availableSeats ? data.availableSeats : this.availableSeats;
        this.isBooking = data.isBooking ? data.isBooking : this.isBooking;
    }
}
