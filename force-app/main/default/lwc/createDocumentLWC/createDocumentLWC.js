import { LightningElement,api  } from 'lwc';
import SDocsCreateModal from 'c/sDocsCreateModal';
export default class CreateDocumentLWC extends LightningElement {

    @api recordId; 
    @api objectApiName;

    modalOpened=false;

    async handleClick() {
        //this.modalOpened=true;
        const result = await SDocsCreateModal.open({
            // `label` is not included here in this example.
            // it is set on lightning-modal-header instead
            recordId: this.recordId,
            objectApiName: this.objectApiName,
            size: 'large',
            description: 'Accessible description of modal\'s purpose',
            content: 'Passed into content api',
        });
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
        console.log(result);
    }



    async handleFrameCreate() {
        var iframe = document.createElement('iframe');
        iframe.src = '/apex/SDOC__SDCreate1?id=500Dn0000040xFHIAY&Object=Case&doclist=a03Dn000003gG9qIAE&oneclick=true&lightningnav=true&customRedirect=/apex/DocGenComplete'; 
        iframe.width=800;
        iframe.height=700;
        iframe.id='myiFrame';
        iframe.onload = function(event) { 
            console.log(new Date()+ ' - myiFrame is loaded'); 
        }; 
        document.body.appendChild(iframe); 
    }

}