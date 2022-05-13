import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repossitory";

interface SubmitFeedbackUseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbbackUseCase{

    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ){ }

    async execute(request: SubmitFeedbackUseRequest){
        const { type, comment, screenshot } = request;

        if(!type){
            throw new Error('Type is required');
        }

        if(!comment){
            throw new Error('Comment is required');
        }

        //se for passado uma foto, E a foto NÃO COMEÇAR COM 
        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format.')
        }
            
        await this.feedbackRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div style="font-family:sans-serif; font-size: 16px; color: #111">`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />` : ``,
                `</div>`
            ].join('\n')
        })

    }
}