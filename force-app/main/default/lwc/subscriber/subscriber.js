import { LightningElement, wire, track } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener,unregisterAllListeners} from 'c/pubsub';

export default class Subscriber extends LightningElement {

    @track dispkeyword = {keyword1: null, keyword2: null};

    @wire(CurrentPageReference) pageRef;
    connectedCallback()
    {
        registerListener("subEvent",this.handleSubEvent,this);
    }

    disconnectedCallback()
    {
        unregisterAllListeners(this);
    }

    handleSubEvent(keyword)
    {
        console.log("handleSubEvent");
        console.log(keyword);
        this.dispkeyword = {keyword1: keyword.keyword1, keyword2: keyword.keyword2}     
    }
}