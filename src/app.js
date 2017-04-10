import MqttClient from './mqtt/mqtt_client';

export default class App {
    constructor() {
        this.mqtt = new MqttClient({ topic: 'phev/papawattu', host: 'jenkins.wattu.com',port: 1883,receive: (topic,data) => {
            console.log('Received :' + data);
        }});
        this.mqtt.connect(()=>{
            console.log('connected');       
        });
    }
}