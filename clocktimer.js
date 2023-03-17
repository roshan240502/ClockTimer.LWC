import { LightningElement, track } from 'lwc';

export default class CountdownTimer extends LightningElement {

    @track timeLeft;

    connectedCallback() {
        // set the start time and end time
        const startTime = new Date();
        startTime.setHours(16);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        const endTime = new Date();
        endTime.setHours(18);
        endTime.setMinutes(0);
        endTime.setSeconds(0);

        // calculate the time difference
        let timeDiff = Math.abs(endTime - startTime);

        // update the time left every second
        const timer = setInterval(() => {
            timeDiff = Math.abs(endTime - new Date());

            // check if the time has passed the end time
            if (timeDiff <= 0) {
                clearInterval(timer);
                this.timeLeft = 'Meeting has ended';
                return;
            }

            // calculate the remaining time
            const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDiff / 1000) % 60);

            this.timeLeft = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }, 1000);
    }
}
