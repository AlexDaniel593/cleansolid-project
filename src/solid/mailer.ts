export class Mailer {

    sendEmail( to: string, subject: string ) {
        console.log(`Enviando correo a ${ to } - Asunto: ${ subject }`);
    }

}
