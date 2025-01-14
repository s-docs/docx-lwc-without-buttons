import { api, wire } from 'lwc';
import LightningModal from 'lightning/modal';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext
} from 'lightning/messageService';
import SDocsChannel from '@salesforce/messageChannel/SDocsChannel__c';

export default class SDocsCreateModal extends LightningModal {
    @api content;

    @wire(MessageContext)
    messageContext;

    @api recordId;
    @api objectApiName;
    handleOkay() {
        this.close('okay');
    }

    get sDocIframeLink(){
        return `/apex/SDOC__SDCreate1?id=${this.recordId}&Object=${this.objectApiName}&doclist=ButtonViaLWC&oneclick=true&customRedirect=/apex/DocGenComplete`;
    }
    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                SDocsChannel,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    // Handler for message received by component
    handleMessage(message) {
        console.log('Doc Generation Complete with doc Id: '+ message.docId);
    }

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
}