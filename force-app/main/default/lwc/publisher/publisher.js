import { LightningElement, wire, track } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class Publisher extends LightningElement 
{
    keyword = {keyword1: 100, keyword2: null};

    keyword1Handler(event)
    {
        this.keyword.keyword1 = event.target.value;
    }

    keyword2Handler(event)
    {
        this.keyword.keyword2 = event.target.value;
    }

    @wire(CurrentPageReference) pageRef;
    executePubHandler()
    {
        console.log("executePubHandler");    
        fireEvent(this.pageRef,"subEvent", this.keyword);
    }
}